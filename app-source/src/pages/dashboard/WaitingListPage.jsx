import { useMemo, useState } from 'react'
import { Clock3, Check, X } from 'lucide-react'
import { useClinicData } from '../../context/DataContext'
import { formatDateTime } from '../../utils/dateHelpers'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import EmptyState from '../../components/ui/EmptyState'

export default function WaitingListPage() {
  const { waitingList, patients, services, doctors, suggestNearestSlots, convertWaitingListEntry, cancelWaitingListEntry } = useClinicData()
  const [convertingId, setConvertingId] = useState(null)

  const open = useMemo(() => waitingList.filter((w) => w.status === 'open'), [waitingList])
  const patientById = Object.fromEntries(patients.map((p) => [p.id, p]))
  const serviceById = Object.fromEntries(services.map((s) => [s.id, s]))
  const doctorById = Object.fromEntries(doctors.map((d) => [d.id, d]))

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl text-ink">Waiting list</h1>
        <p className="text-sm text-ink/60">Convert an entry to a confirmed appointment as soon as a slot opens.</p>
      </div>

      {open.length === 0 ? (
        <EmptyState icon={Clock3} title="Waiting list is empty" description="Patients who couldn't find an open slot will appear here." />
      ) : (
        <Card padded={false}>
          <div className="divide-y divide-line">
            {open.map((w) => {
              const patient = patientById[w.patientId]
              const service = serviceById[w.serviceId]
              const doctor = doctorById[w.doctorId]
              const isConverting = convertingId === w.id
              const suggestions = isConverting
                ? suggestNearestSlots(w.doctorId, w.preferredStart ? new Date(w.preferredStart) : new Date(), service?.durationMinutes || 30, 3)
                : []

              return (
                <div key={w.id} className="p-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="font-medium text-ink">{patient?.fullName}</p>
                      <p className="text-sm text-ink/60">
                        {service?.name} with {doctor?.fullName}
                        {w.preferredStart && ` · preferred ${formatDateTime(w.preferredStart)}`}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" onClick={() => setConvertingId(isConverting ? null : w.id)}>
                        <Check className="h-3.5 w-3.5" /> {isConverting ? 'Hide slots' : 'Find a slot'}
                      </Button>
                      <Button variant="danger" onClick={() => cancelWaitingListEntry(w.id)}>
                        <X className="h-3.5 w-3.5" /> Remove
                      </Button>
                    </div>
                  </div>

                  {isConverting && (
                    <div className="mt-3 flex flex-wrap gap-2 border-t border-line pt-3">
                      {suggestions.length === 0 ? (
                        <p className="text-sm text-ink/40">No openings in the next 10 days.</p>
                      ) : (
                        suggestions.map((slot) => (
                          <button
                            key={slot.toISOString()}
                            onClick={() => { convertWaitingListEntry(w.id, { doctorId: w.doctorId, startsAt: slot }); setConvertingId(null) }}
                            className="rounded-md border border-line px-3 py-2 text-sm hover:border-primary hover:text-primary"
                          >
                            {formatDateTime(slot)}
                          </button>
                        ))
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </Card>
      )}
    </div>
  )
}
