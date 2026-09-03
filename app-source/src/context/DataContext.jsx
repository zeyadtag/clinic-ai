import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react'
import { buildSeed } from '../data/seed'
import { uid } from '../utils/id'
import { isSlotAvailable, findNearestAvailableSlots, countPatientsAheadToday } from '../utils/availability'
import { isDemoMode, supabase } from '../lib/supabaseClient'
import { logNotificationEvent } from '../services/notificationService'

const STORAGE_KEY = 'meridian_clinic_demo_ar_v2'

const DataContext = createContext(null)

/**
 * This provider is written so a real Supabase-backed provider can be
 * dropped in without touching any component: every mutation goes through
 * the functions returned here (bookAppointment, completeVisit, etc). When
 * VITE_USE_DEMO_DATA is true (the default, so the app runs with zero
 * backend setup) state lives in memory + localStorage, seeded from
 * src/data/seed.js. Swapping to Supabase means re-implementing the body of
 * each function against supabase-js while keeping the same signatures.
 */
export function DataProvider({ children }) {
  const demo = isDemoMode()
  const [state, setState] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem(STORAGE_KEY)
      if (saved) {
        try {
          return JSON.parse(saved)
        } catch {
          // fall through to fresh seed
        }
      }
    }
    return buildSeed()
  })

  useEffect(() => {
    if (demo && typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    }
  }, [demo, state])

  useEffect(() => {
    if (demo || !supabase) return undefined
    let active = true

    const loadPublicData = async () => {
      const [clinicResult, doctorsResult, servicesResult, reviewsResult] = await Promise.all([
        supabase.from('clinics').select('*').eq('slug', 'meridian').single(),
        supabase.from('doctors').select('*').eq('is_active', true).order('created_at'),
        supabase.from('services').select('*').eq('is_active', true).order('created_at'),
        supabase.from('reviews').select('*').eq('is_public', true).order('created_at', { ascending: false }),
      ])
      if (!active || clinicResult.error || doctorsResult.error || servicesResult.error) return
      setState((current) => ({
        ...current,
        clinic: {
          id: clinicResult.data.id,
          name: clinicResult.data.name,
          slug: clinicResult.data.slug,
          timezone: clinicResult.data.timezone,
          phone: clinicResult.data.phone,
          address: clinicResult.data.address,
        },
        doctors: doctorsResult.data.map((doctor) => ({
          id: doctor.id,
          fullName: doctor.full_name,
          title: doctor.title,
          specialties: doctor.specialties || [],
          qualifications: doctor.qualifications || [],
          yearsExperience: doctor.years_experience || 0,
          bio: doctor.bio || '',
          slotDurationMinutes: doctor.slot_duration_minutes,
          isActive: doctor.is_active,
        })),
        services: servicesResult.data.map((service) => ({
          id: service.id,
          name: service.name,
          description: service.description,
          priceCents: service.price_cents,
          durationMinutes: service.duration_minutes,
        })),
        reviews: (reviewsResult.data || []).map((review) => ({
          id: review.id,
          patientId: review.patient_id,
          rating: review.rating,
          sentiment: review.sentiment,
          comment: review.comment,
          isPublic: review.is_public,
        })),
      }))
    }

    loadPublicData()
    const channel = supabase
      .channel('clinic-public-data')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'services' }, loadPublicData)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'doctors' }, loadPublicData)
      .subscribe()

    return () => {
      active = false
      supabase.removeChannel(channel)
    }
  }, [demo])

  const addNotification = useCallback((event) => {
    const record = {
      id: uid('notif'),
      status: 'pending',
      channel: 'n8n_webhook',
      createdAt: new Date().toISOString(),
      ...event,
    }
    logNotificationEvent(record)
    setState((s) => ({ ...s, notifications: [record, ...s.notifications].slice(0, 200) }))
    return record
  }, [])

  // ---------------------------------------------------------------------
  // Booking / availability
  // ---------------------------------------------------------------------
  const checkAvailability = useCallback(
    (doctorId, startsAt, durationMinutes) =>
      isSlotAvailable(state.appointments, doctorId, new Date(startsAt), durationMinutes),
    [state.appointments]
  )

  const suggestNearestSlots = useCallback(
    (doctorId, requestedStart, durationMinutes, count = 3) =>
      findNearestAvailableSlots({
        appointments: state.appointments,
        doctorId,
        durationMinutes,
        requestedStart: new Date(requestedStart),
        count,
      }),
    [state.appointments]
  )

  const upsertPatientByPhone = useCallback(
    (patientData) => {
      const existing = state.patients.find((p) => p.phone === patientData.phone)
      const patientId = existing ? existing.id : uid('pat')
      setState((s) => {
        if (s.patients.some((p) => p.id === patientId)) {
          return {
            ...s,
            patients: s.patients.map((p) =>
              p.id === patientId ? { ...p, ...patientData, id: patientId } : p
            ),
          }
        }
        const newPatient = {
          loyaltyLevel: 'new',
          totalVisits: 0,
          completedVisits: 0,
          allergies: [],
          chronicConditions: [],
          currentMedications: [],
          notes: '',
          ...patientData,
          id: patientId,
        }
        return { ...s, patients: [...s.patients, newPatient] }
      })
      return patientId
    },
    [state.patients]
  )

  const bookAppointment = useCallback(
    async ({ fullName, phone, email, serviceId, doctorId, startsAt, notes }) => {
      const service = state.services.find((s) => s.id === serviceId)
      const duration = service?.durationMinutes ?? 30
      const start = new Date(startsAt)
      const end = new Date(start.getTime() + duration * 60000)

      if (!demo && supabase) {
        const { data, error } = await supabase.rpc('book_appointment', {
          p_clinic_id: state.clinic.id,
          p_full_name: fullName,
          p_phone: phone,
          p_service_id: serviceId,
          p_doctor_id: doctorId,
          p_starts_at: start.toISOString(),
          p_email: email || null,
          p_notes: notes || null,
        })
        if (error) {
          return { ok: false, reason: error.message.includes('slot_unavailable') ? 'unavailable' : 'error', message: error.message }
        }
        return { ok: true, appointment: data }
      }

      if (!isSlotAvailable(state.appointments, doctorId, start, duration)) {
        return { ok: false, reason: 'unavailable' }
      }

      const patientId = upsertPatientByPhone({ fullName, phone, email })
      const appt = {
        id: uid('appt'),
        patientId,
        doctorId,
        serviceId,
        startsAt: start.toISOString(),
        endsAt: end.toISOString(),
        status: 'scheduled',
        notes: notes || '',
        createdAt: new Date().toISOString(),
      }
      setState((s) => ({ ...s, appointments: [...s.appointments, appt] }))
      addNotification({
        eventType: 'appointment_reminder_24h',
        appointmentId: appt.id,
        patientId,
        payload: { startsAt: appt.startsAt },
        scheduledFor: new Date(start.getTime() - 24 * 3600 * 1000).toISOString(),
      })
      return { ok: true, appointment: appt }
    },
    [demo, state.appointments, state.clinic.id, state.services, upsertPatientByPhone, addNotification]
  )

  const joinWaitingList = useCallback(
    ({ fullName, phone, email, serviceId, doctorId, preferredStart }) => {
      const patientId = upsertPatientByPhone({ fullName, phone, email })
      const entry = {
        id: uid('wl'),
        patientId,
        serviceId,
        doctorId,
        preferredStart: preferredStart ? new Date(preferredStart).toISOString() : null,
        status: 'open',
        createdAt: new Date().toISOString(),
      }
      setState((s) => ({ ...s, waitingList: [entry, ...s.waitingList] }))
      addNotification({ eventType: 'waitlist_joined', patientId, payload: { serviceId, doctorId } })
      return entry
    },
    [upsertPatientByPhone, addNotification]
  )

  const convertWaitingListEntry = useCallback(
    (waitingListId, { doctorId, startsAt }) => {
      const entry = state.waitingList.find((w) => w.id === waitingListId)
      if (!entry) return { ok: false }
      const service = state.services.find((s) => s.id === entry.serviceId)
      const duration = service?.durationMinutes ?? 30
      const start = new Date(startsAt)
      const end = new Date(start.getTime() + duration * 60000)
      if (!isSlotAvailable(state.appointments, doctorId || entry.doctorId, start, duration)) {
        return { ok: false, reason: 'unavailable' }
      }
      const appt = {
        id: uid('appt'),
        patientId: entry.patientId,
        doctorId: doctorId || entry.doctorId,
        serviceId: entry.serviceId,
        startsAt: start.toISOString(),
        endsAt: end.toISOString(),
        status: 'scheduled',
        notes: 'Converted from waiting list',
        createdAt: new Date().toISOString(),
      }
      setState((s) => ({
        ...s,
        appointments: [...s.appointments, appt],
        waitingList: s.waitingList.map((w) =>
          w.id === waitingListId ? { ...w, status: 'converted', convertedAppointmentId: appt.id } : w
        ),
      }))
      addNotification({ eventType: 'waitlist_slot_offered', patientId: entry.patientId, appointmentId: appt.id })
      return { ok: true, appointment: appt }
    },
    [state.waitingList, state.services, state.appointments, addNotification]
  )

  const cancelWaitingListEntry = useCallback((waitingListId) => {
    setState((s) => ({
      ...s,
      waitingList: s.waitingList.map((w) => (w.id === waitingListId ? { ...w, status: 'cancelled' } : w)),
    }))
  }, [])

  // ---------------------------------------------------------------------
  // Appointment workflow
  // ---------------------------------------------------------------------
  const updateAppointmentStatus = useCallback(
    (appointmentId, status, extra = {}) => {
      setState((s) => ({
        ...s,
        appointments: s.appointments.map((a) =>
          a.id === appointmentId ? { ...a, status, ...extra } : a
        ),
      }))
    },
    []
  )

  const confirmAppointment = useCallback(
    (id) => updateAppointmentStatus(id, 'confirmed'),
    [updateAppointmentStatus]
  )

  const cancelAppointment = useCallback(
    (id, reason) => {
      updateAppointmentStatus(id, 'cancelled', { cancelledAt: new Date().toISOString(), cancellationReason: reason || '' })
      const appt = state.appointments.find((a) => a.id === id)
      if (appt) {
        addNotification({ eventType: 'cancellation_slot_reoffer', appointmentId: id, payload: { doctorId: appt.doctorId, startsAt: appt.startsAt } })
      }
    },
    [updateAppointmentStatus, state.appointments, addNotification]
  )

  const startVisit = useCallback(
    (id) => updateAppointmentStatus(id, 'in_progress', { startedAt: new Date().toISOString() }),
    [updateAppointmentStatus]
  )

  const markNoShow = useCallback((id) => updateAppointmentStatus(id, 'no_show'), [updateAppointmentStatus])

  const LOYALTY_MILESTONES = [3, 5, 10]
  const levelForVisits = (n) => (n >= 10 ? 'vip' : n >= 5 ? 'gold' : n >= 3 ? 'unlocked' : 'new')

  const completeVisit = useCallback(
    (appointmentId, visitDetails) => {
      const appt = state.appointments.find((a) => a.id === appointmentId)
      if (!appt) return
      const visit = {
        id: uid('visit'),
        patientId: appt.patientId,
        doctorId: appt.doctorId,
        serviceId: appt.serviceId,
        appointmentId,
        visitDate: new Date().toISOString(),
        diagnosis: visitDetails.diagnosis || '',
        treatment: visitDetails.treatment || '',
        doctorNotes: visitDetails.notes || '',
        followUpDate: visitDetails.followUpDate || null,
        status: 'completed',
      }

      setState((s) => {
        const patient = s.patients.find((p) => p.id === appt.patientId)
        const totalVisits = (patient?.totalVisits || 0) + 1
        const completedVisits = (patient?.completedVisits || 0) + 1
        const newlyReached = LOYALTY_MILESTONES.find((m) => m === completedVisits)

        const rewards = newlyReached
          ? [
              ...s.rewards,
              {
                id: uid('rw'),
                patientId: appt.patientId,
                milestoneVisits: newlyReached,
                rewardDescription:
                  newlyReached === 10 ? '15% off next visit + priority booking' : newlyReached === 5 ? '10% off next visit' : 'Free consultation add-on',
                grantedAt: new Date().toISOString(),
              },
            ]
          : s.rewards

        const reviewFollowup = {
          id: uid('fu'),
          patientId: appt.patientId,
          visitId: visit.id,
          kind: 'review',
          status: 'pending',
          scheduledFor: new Date().toISOString(),
          response: null,
          flagged: false,
        }

        const clinicalFollowup = visit.followUpDate
          ? [{
              id: uid('fu'),
              patientId: appt.patientId,
              visitId: visit.id,
              kind: 'clinical',
              status: 'pending',
              scheduledFor: new Date(visit.followUpDate).toISOString(),
              response: null,
              flagged: false,
            }]
          : []

        return {
          ...s,
          appointments: s.appointments.map((a) =>
            a.id === appointmentId ? { ...a, status: 'completed', completedAt: new Date().toISOString() } : a
          ),
          visits: [visit, ...s.visits],
          patients: s.patients.map((p) =>
            p.id === appt.patientId
              ? { ...p, totalVisits, completedVisits, lastVisitAt: visit.visitDate, loyaltyLevel: levelForVisits(completedVisits) }
              : p
          ),
          rewards,
          followups: [reviewFollowup, ...clinicalFollowup, ...s.followups],
        }
      })

      addNotification({ eventType: 'review_request', patientId: appt.patientId, appointmentId })
      if (visitDetails.followUpDate) {
        addNotification({ eventType: 'clinical_followup', patientId: appt.patientId, payload: { followUpDate: visitDetails.followUpDate } })
      }
    },
    [state.appointments, addNotification]
  )

  // ---------------------------------------------------------------------
  // Treatments
  // ---------------------------------------------------------------------
  const saveTreatment = useCallback((treatment) => {
    const record = { id: uid('tx'), isActive: true, ...treatment }
    setState((s) => ({ ...s, treatments: [record, ...s.treatments] }))
    addNotification({ eventType: 'treatment_reminder', patientId: treatment.patientId, payload: { medication: treatment.medication, schedule: treatment.reminderSchedule } })
    return record
  }, [addNotification])

  // ---------------------------------------------------------------------
  // Follow-ups & reviews
  // ---------------------------------------------------------------------
  const respondToFollowup = useCallback((followupId, response) => {
    setState((s) => ({
      ...s,
      followups: s.followups.map((f) => {
        if (f.id !== followupId) return f
        if (f.kind === 'clinical') {
          const flagged = response === 'same' || response === 'worse'
          return { ...f, response, status: flagged ? 'flagged' : 'closed', flagged }
        }
        return { ...f, response, status: response === 'negative' ? 'flagged' : 'answered', flagged: response === 'negative' }
      }),
    }))
  }, [])

  const closeFollowup = useCallback((followupId) => {
    setState((s) => ({ ...s, followups: s.followups.map((f) => (f.id === followupId ? { ...f, status: 'closed' } : f)) }))
  }, [])

  const submitReview = useCallback((patientId, { rating, comment }) => {
    const sentiment = rating >= 4 ? 'positive' : 'negative'
    const review = { id: uid('rev'), patientId, rating, comment, sentiment, isPublic: sentiment === 'positive', createdAt: new Date().toISOString() }
    setState((s) => ({ ...s, reviews: [review, ...s.reviews] }))
    if (sentiment === 'negative') {
      addNotification({ eventType: 'negative_review_flagged', patientId, payload: { rating, comment } })
    }
    return review
  }, [addNotification])

  // ---------------------------------------------------------------------
  // Waiting-room status
  // ---------------------------------------------------------------------
  const setDoctorDayStatus = useCallback((doctorId, patch) => {
    setState((s) => ({ ...s, dayStatus: { ...s.dayStatus, [doctorId]: { ...s.dayStatus[doctorId], ...patch } } }))
  }, [])

  const value = useMemo(
    () => ({
      ...state,
      demo,
      checkAvailability,
      suggestNearestSlots,
      bookAppointment,
      joinWaitingList,
      convertWaitingListEntry,
      cancelWaitingListEntry,
      confirmAppointment,
      cancelAppointment,
      startVisit,
      markNoShow,
      completeVisit,
      saveTreatment,
      respondToFollowup,
      closeFollowup,
      submitReview,
      setDoctorDayStatus,
      countPatientsAheadToday: (doctorId) => countPatientsAheadToday(state.appointments, doctorId),
    }),
    [
      state,
      demo,
      checkAvailability,
      suggestNearestSlots,
      bookAppointment,
      joinWaitingList,
      convertWaitingListEntry,
      cancelWaitingListEntry,
      confirmAppointment,
      cancelAppointment,
      startVisit,
      markNoShow,
      completeVisit,
      saveTreatment,
      respondToFollowup,
      closeFollowup,
      submitReview,
      setDoctorDayStatus,
    ]
  )

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

export function useClinicData() {
  const ctx = useContext(DataContext)
  if (!ctx) throw new Error('useClinicData must be used within DataProvider')
  return ctx
}
