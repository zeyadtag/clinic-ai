import { useMemo, useState } from 'react'
import { Clock3, Search, Star } from 'lucide-react'
import { useClinicData } from '../../context/DataContext'
import { formatDateTime } from '../../utils/dateHelpers'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import Badge from '../../components/ui/Badge'
import EmptyState from '../../components/ui/EmptyState'

export default function PatientPortalPage() {
  const { patients, appointments, doctors, dayStatus, followups, respondToFollowup, submitReview, countPatientsAheadToday } = useClinicData()
  const [phone, setPhone] = useState('')
  const [lookedUp, setLookedUp] = useState(false)

  const patient = useMemo(() => patients.find((p) => p.phone === phone.trim()), [patients, phone])

  const upcoming = useMemo(() => {
    if (!patient) return null
    const now = new Date()
    return appointments
      .filter((a) => a.patientId === patient.id && new Date(a.startsAt) >= now && !['cancelled', 'no_show', 'completed'].includes(a.status))
      .sort((a, b) => new Date(a.startsAt) - new Date(b.startsAt))[0]
  }, [appointments, patient])

  const myFollowups = useMemo(
    () => (patient ? followups.filter((f) => f.patientId === patient.id && f.status !== 'closed' && f.status !== 'answered' && f.status !== 'flagged') : []),
    [followups, patient]
  )

  const doctor = upcoming ? doctors.find((d) => d.id === upcoming.doctorId) : null
  const status = doctor ? dayStatus[doctor.id] : null
  const ahead = doctor ? countPatientsAheadToday(doctor.id) : 0

  return (
    <section className="mx-auto max-w-2xl px-5 py-14">
      <h1 className="font-display text-3xl text-ink">Patient access</h1>
      <p className="mt-2 text-ink/60">Look up your visit status and respond to any pending check-ins.</p>

      <Card className="mt-8">
        <label className="block">
          <span className="mb-1 block text-xs font-medium text-ink/60">Phone number used at booking</span>
          <div className="flex gap-2">
            <input value={phone} onChange={(e) => setPhone(e.target.value)} className="input" placeholder="000-000-0001" />
            <Button onClick={() => setLookedUp(true)} className="shrink-0"><Search className="h-4 w-4" /> Find me</Button>
          </div>
        </label>
      </Card>

      {lookedUp && !patient && (
        <EmptyState className="mt-6" title="No record found" description="Double-check the phone number you used when booking." />
      )}

      {patient && (
        <div className="mt-8 space-y-6">
          <Card>
            <p className="text-sm text-ink/60">Welcome back,</p>
            <h2 className="font-display text-xl text-ink">{patient.fullName}</h2>
          </Card>

          {upcoming ? (
            <Card>
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-ink">Your next visit</h3>
                <Badge tone={upcoming.status}>{upcoming.status}</Badge>
              </div>
              <p className="mt-2 text-sm text-ink/70">{formatDateTime(upcoming.startsAt)} with {doctor?.fullName}</p>
              <div className="mt-4 flex items-center gap-3 rounded-md bg-primary-light p-3 text-sm text-primary-dark">
                <Clock3 className="h-4 w-4 shrink-0" />
                <span>
                  {status?.runningLateMinutes > 0
                    ? `Running about ${status.runningLateMinutes} min behind schedule. `
                    : 'On schedule. '}
                  {ahead > 0 ? `${ahead} patient${ahead > 1 ? 's' : ''} ahead of you today.` : 'You are next up.'}
                </span>
              </div>
            </Card>
          ) : (
            <EmptyState title="No upcoming visits" description="Book a new appointment any time from the homepage." />
          )}

          {myFollowups.map((f) => (
            <FollowupCard
              key={f.id}
              followup={f}
              onRespond={respondToFollowup}
              onReview={(payload) => {
                submitReview(patient.id, payload)
                respondToFollowup(f.id, payload.rating >= 4 ? 'positive' : 'negative')
              }}
            />
          ))}
        </div>
      )}
    </section>
  )
}

function FollowupCard({ followup, onRespond, onReview }) {
  const [rating, setRating] = useState(5)
  const [comment, setComment] = useState('')
  const [done, setDone] = useState(false)

  if (done) {
    return <Card className="border-success/30 bg-success/5 text-sm text-success">Thanks — your response has been recorded.</Card>
  }

  if (followup.kind === 'clinical') {
    return (
      <Card>
        <h3 className="font-medium text-ink">How are you feeling since your last visit?</h3>
        <div className="mt-3 flex gap-2">
          {['better', 'same', 'worse'].map((opt) => (
            <Button key={opt} variant="ghost" className="capitalize" onClick={() => { onRespond(followup.id, opt); setDone(true) }}>
              {opt}
            </Button>
          ))}
        </div>
      </Card>
    )
  }

  return (
    <Card>
      <h3 className="font-medium text-ink">How was your visit?</h3>
      <div className="mt-3 flex gap-1 text-accent">
        {Array.from({ length: 5 }).map((_, i) => (
          <button key={i} onClick={() => setRating(i + 1)} aria-label={`${i + 1} stars`}>
            <Star className="h-6 w-6" fill={i < rating ? 'currentColor' : 'none'} />
          </button>
        ))}
      </div>
      {rating <= 3 && (
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Tell us what we could improve — this goes straight to the clinic, not published."
          className="input mt-3"
          rows={2}
        />
      )}
      <Button className="mt-3" onClick={() => { onReview({ rating, comment }); setDone(true) }}>
        Submit {rating >= 4 ? '& share publicly' : 'privately'}
      </Button>
    </Card>
  )
}
