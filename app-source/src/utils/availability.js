import { addMinutes, isSameDay } from './dateHelpers'

// Working hours: 9am–5pm, Mon–Sat, for demo purposes. Real deployments should
// read this from clinic_working_hours per clinic/doctor.
const DAY_START_HOUR = 9
const DAY_END_HOUR = 17

function candidateSlotsForDay(day, durationMinutes) {
  const slots = []
  const cursor = new Date(day)
  cursor.setHours(DAY_START_HOUR, 0, 0, 0)
  const end = new Date(day)
  end.setHours(DAY_END_HOUR, 0, 0, 0)
  while (addMinutes(cursor, durationMinutes) <= end) {
    slots.push(new Date(cursor))
    cursor.setMinutes(cursor.getMinutes() + 15)
  }
  return slots
}

function overlaps(aStart, aEnd, bStart, bEnd) {
  return aStart < bEnd && bStart < aEnd
}

export function isSlotAvailable(appointments, doctorId, start, durationMinutes) {
  const end = addMinutes(start, durationMinutes)
  if (start < new Date()) return false
  if (start.getDay() === 0) return false // closed Sundays
  const hour = start.getHours() + start.getMinutes() / 60
  if (hour < DAY_START_HOUR || hour + durationMinutes / 60 > DAY_END_HOUR) return false

  return !appointments.some(
    (a) =>
      a.doctorId === doctorId &&
      a.status !== 'cancelled' &&
      a.status !== 'no_show' &&
      overlaps(start, end, new Date(a.startsAt), new Date(a.endsAt))
  )
}

/**
 * Finds the nearest N available slots for a doctor starting from a
 * requested time, searching forward across the following days.
 */
export function findNearestAvailableSlots({
  appointments,
  doctorId,
  durationMinutes,
  requestedStart,
  count = 3,
  searchDays = 10
}) {
  const found = []
  for (let dayOffset = 0; dayOffset <= searchDays && found.length < count; dayOffset++) {
    const day = new Date(requestedStart)
    day.setDate(day.getDate() + dayOffset)
    const slots = candidateSlotsForDay(day, durationMinutes).filter((s) =>
      dayOffset === 0 ? s >= requestedStart : true
    )
    for (const slot of slots) {
      if (found.length >= count) break
      if (isSlotAvailable(appointments, doctorId, slot, durationMinutes)) {
        found.push(slot)
      }
    }
  }
  return found
}

export function countPatientsAheadToday(appointments, doctorId, now = new Date()) {
  return appointments.filter(
    (a) =>
      a.doctorId === doctorId &&
      isSameDay(a.startsAt, now) &&
      new Date(a.startsAt) < now &&
      ['scheduled', 'confirmed', 'waiting', 'in_progress'].includes(a.status)
  ).length
}
