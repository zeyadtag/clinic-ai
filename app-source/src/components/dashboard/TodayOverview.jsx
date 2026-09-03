import { useMemo } from 'react'
import { AlertCircle, Pill, FileText, User } from 'lucide-react'
import { useClinicData } from '../../context/DataContext'
import { computeTodayStats } from '../../services/analytics'
import { age, formatTime } from '../../utils/dateHelpers'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import EmptyState from '../ui/EmptyState'

export function TodayOverview() {
  const { appointments } = useClinicData()
  const stats = useMemo(() => computeTodayStats(appointments), [appointments])

  const tiles = [
    { label: 'مواعيد اليوم', value: stats.total },
    { label: 'في الانتظار', value: stats.waiting },
    { label: 'مكتملة', value: stats.completed },
    { label: 'ملغاة', value: stats.cancelled },
  ]

  return (
    <Card>
      <h3 className="font-medium text-ink">اليوم</h3>
      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {tiles.map((t) => (
          <div key={t.label}>
            <p className="font-display text-2xl text-ink">{t.value}</p>
            <p className="mt-0.5 text-xs text-ink/50">{t.label}</p>
          </div>
        ))}
      </div>
    </Card>
  )
}

/**
 * Surfaces everything a doctor needs before a patient walks in. In
 * production this panel would be triggered ~5 minutes before starts_at by a
 * scheduled job (Supabase cron or n8n) that flags the appointment; here it
 * simply shows the next upcoming appointment today so the UI/data shape is
 * ready for that automation to slot in.
 */
export function NextPatientCard() {
  const { appointments, patients, doctors, services, visits } = useClinicData()

  const next = useMemo(() => {
    const now = new Date()
    return appointments
      .filter((a) => ['scheduled', 'confirmed', 'waiting'].includes(a.status) && new Date(a.startsAt) >= now)
      .sort((a, b) => new Date(a.startsAt) - new Date(b.startsAt))[0]
  }, [appointments])

  if (!next) {
    return <EmptyState icon={User} title="لا يوجد مرضى قادمون" description="تم الانتهاء من مواعيد اليوم." />
  }

  const patient = patients.find((p) => p.id === next.patientId)
  const doctor = doctors.find((d) => d.id === next.doctorId)
  const service = services.find((s) => s.id === next.serviceId)
  const lastVisit = visits
    .filter((v) => v.patientId === patient?.id)
    .sort((a, b) => new Date(b.visitDate) - new Date(a.visitDate))[0]

  return (
    <Card className="border-primary/30">
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-ink">المريض القادم</h3>
        <Badge tone={next.status}>{next.status}</Badge>
      </div>
      <div className="mt-3">
        <p className="font-display text-lg text-ink">{patient?.fullName}</p>
        <p className="text-sm text-ink/60">
          {formatTime(next.startsAt)} · {service?.name} مع {doctor?.fullName}
          {patient?.dateOfBirth ? ` · ${age(patient.dateOfBirth)} سنة` : ''}
        </p>
      </div>

      {(patient?.allergies?.length > 0 || patient?.chronicConditions?.length > 0) && (
        <div className="mt-3 flex items-start gap-2 rounded-md bg-danger/5 p-3 text-sm text-danger">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <div>
            {patient.allergies?.length > 0 && <p><span className="font-medium">الحساسية:</span> {patient.allergies.join(', ')}</p>}
            {patient.chronicConditions?.length > 0 && <p><span className="font-medium">الأمراض المزمنة:</span> {patient.chronicConditions.join(', ')}</p>}
          </div>
        </div>
      )}

      {patient?.currentMedications?.length > 0 && (
        <p className="mt-2 flex items-center gap-1.5 text-sm text-ink/70"><Pill className="h-3.5 w-3.5" /> {patient.currentMedications.join(', ')}</p>
      )}

      {lastVisit ? (
        <div className="mt-3 flex items-start gap-2 text-sm text-ink/70">
          <FileText className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          <p><span className="font-medium text-ink">آخر زيارة:</span> {lastVisit.diagnosis || '—'}. {lastVisit.doctorNotes}</p>
        </div>
      ) : (
        <p className="mt-3 text-sm text-ink/40">لا توجد زيارات سابقة مسجلة.</p>
      )}
    </Card>
  )
}
