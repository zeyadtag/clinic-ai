import { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Save, CheckCircle2, AlertCircle } from 'lucide-react'
import { useClinicData } from '../../context/DataContext'
import { age, formatDateTime } from '../../utils/dateHelpers'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import Badge from '../../components/ui/Badge'
import VoiceInput from '../../components/ui/VoiceInput'
import ConfirmDialog from '../../components/ui/ConfirmDialog'
import EmptyState from '../../components/ui/EmptyState'

export default function VisitPage() {
  const { appointmentId } = useParams()
  const navigate = useNavigate()
  const { appointments, patients, doctors, services, visits, completeVisit } = useClinicData()

  const appointment = appointments.find((a) => a.id === appointmentId)
  const patient = patients.find((p) => p.id === appointment?.patientId)
  const doctor = doctors.find((d) => d.id === appointment?.doctorId)
  const service = services.find((s) => s.id === appointment?.serviceId)

  const previousVisits = useMemo(
    () => visits.filter((v) => v.patientId === appointment?.patientId).sort((a, b) => new Date(b.visitDate) - new Date(a.visitDate)),
    [visits, appointment]
  )

  const [diagnosis, setDiagnosis] = useState('')
  const [treatment, setTreatment] = useState('')
  const [notes, setNotes] = useState('')
  const [followUpDate, setFollowUpDate] = useState('')
  const [savedAt, setSavedAt] = useState(null)
  const [confirmComplete, setConfirmComplete] = useState(false)

  if (!appointment) return <EmptyState title="Appointment not found" />

  if (appointment.status === 'completed') {
    return (
      <div className="space-y-4">
        <BackLink />
        <EmptyState icon={CheckCircle2} title="This visit is already completed" description="Find it in the patient's visit history." />
      </div>
    )
  }

  const handleSave = () => setSavedAt(new Date())
  const handleComplete = () => {
    completeVisit(appointment.id, { diagnosis, treatment, notes, followUpDate: followUpDate || null })
    navigate('/dashboard/appointments')
  }

  return (
    <div className="space-y-6">
      <BackLink />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl text-ink">{patient?.fullName}</h1>
          <p className="text-sm text-ink/60">
            {formatDateTime(appointment.startsAt)} · {service?.name} with {doctor?.fullName}
            {patient?.dateOfBirth ? ` · ${age(patient.dateOfBirth)} yrs` : ''}
          </p>
        </div>
        <Badge tone={appointment.status}>{appointment.status}</Badge>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          <Card>
            <FieldWithVoice label="Diagnosis" value={diagnosis} onChange={setDiagnosis} placeholder="e.g. Mild eczema, forearms" />
          </Card>
          <Card>
            <FieldWithVoice label="Treatment" value={treatment} onChange={setTreatment} placeholder="e.g. Topical corticosteroid, twice daily for 2 weeks" rows={3} />
          </Card>
          <Card>
            <FieldWithVoice label="Doctor notes" value={notes} onChange={setNotes} placeholder="Additional observations" rows={3} />
          </Card>
          <Card>
            <label className="block">
              <span className="mb-1 block text-xs font-medium text-ink/60">Follow-up date (optional)</span>
              <input type="date" className="input max-w-xs" value={followUpDate} onChange={(e) => setFollowUpDate(e.target.value)} />
            </label>
          </Card>

          <div className="flex items-center gap-3">
            <Button variant="ghost" onClick={handleSave}><Save className="h-4 w-4" /> Save</Button>
            <Button onClick={() => setConfirmComplete(true)}><CheckCircle2 className="h-4 w-4" /> Complete visit</Button>
            {savedAt && <span className="text-xs text-ink/40">Saved at {savedAt.toLocaleTimeString()}</span>}
          </div>
        </div>

        <div className="space-y-4">
          {(patient?.allergies?.length > 0 || patient?.chronicConditions?.length > 0) && (
            <Card className="border-danger/30 bg-danger/5">
              <div className="flex items-center gap-2 text-danger">
                <AlertCircle className="h-4 w-4" />
                <h3 className="font-medium">Clinical flags</h3>
              </div>
              {patient.allergies?.length > 0 && <p className="mt-2 text-sm text-danger">Allergies: {patient.allergies.join(', ')}</p>}
              {patient.chronicConditions?.length > 0 && <p className="text-sm text-danger">Chronic: {patient.chronicConditions.join(', ')}</p>}
            </Card>
          )}

          <Card>
            <h3 className="font-medium text-ink">Previous visits</h3>
            {previousVisits.length === 0 ? (
              <p className="mt-2 text-sm text-ink/40">No previous visits.</p>
            ) : (
              <div className="mt-2 space-y-3">
                {previousVisits.slice(0, 3).map((v) => (
                  <div key={v.id} className="border-b border-line pb-2 text-sm last:border-0">
                    <p className="text-ink/50">{formatDateTime(v.visitDate)}</p>
                    <p className="text-ink">{v.diagnosis}</p>
                  </div>
                ))}
              </div>
            )}
          </Card>
        </div>
      </div>

      <ConfirmDialog
        open={confirmComplete}
        title="Complete this visit?"
        description="This will save the visit to the patient's record and trigger review + follow-up workflows."
        confirmLabel="Complete visit"
        onCancel={() => setConfirmComplete(false)}
        onConfirm={handleComplete}
      />
    </div>
  )
}

function BackLink() {
  return (
    <button onClick={() => window.history.back()} className="inline-flex items-center gap-1 text-sm text-ink/60 hover:text-ink">
      <ArrowLeft className="h-3.5 w-3.5" /> Back to appointments
    </button>
  )
}

function FieldWithVoice({ label, value, onChange, placeholder, rows = 2 }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium text-ink/60">{label}</span>
      <div className="flex items-start gap-2">
        <textarea className="input" rows={rows} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
        <VoiceInput onResult={(t) => onChange(value ? `${value} ${t}` : t)} />
      </div>
    </label>
  )
}
