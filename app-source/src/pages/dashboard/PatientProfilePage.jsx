import { useMemo, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Award, Image as ImageIcon, Pill, Plus } from 'lucide-react'
import { useClinicData } from '../../context/DataContext'
import { age, formatDate, formatDateTime } from '../../utils/dateHelpers'
import Card from '../../components/ui/Card'
import Badge from '../../components/ui/Badge'
import Button from '../../components/ui/Button'
import EmptyState from '../../components/ui/EmptyState'
import VoiceInput from '../../components/ui/VoiceInput'

export default function PatientProfilePage() {
  const { id } = useParams()
  const { patients, visits, doctors, services, rewards, treatments, saveTreatment } = useClinicData()
  const patient = patients.find((p) => p.id === id)
  const [showTreatmentForm, setShowTreatmentForm] = useState(false)

  const patientVisits = useMemo(
    () => visits.filter((v) => v.patientId === id).sort((a, b) => new Date(b.visitDate) - new Date(a.visitDate)),
    [visits, id]
  )
  const patientRewards = rewards.filter((r) => r.patientId === id)
  const patientTreatments = treatments.filter((t) => t.patientId === id)

  if (!patient) {
    return <EmptyState title="Patient not found" />
  }

  const doctorById = Object.fromEntries(doctors.map((d) => [d.id, d]))
  const serviceById = Object.fromEntries(services.map((s) => [s.id, s]))

  return (
    <div className="space-y-6">
      <Link to="/dashboard/patients" className="inline-flex items-center gap-1 text-sm text-ink/60 hover:text-ink">
        <ArrowLeft className="h-3.5 w-3.5" /> All patients
      </Link>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl text-ink">{patient.fullName}</h1>
          <p className="text-sm text-ink/60">
            {patient.gender}{patient.dateOfBirth ? ` · ${age(patient.dateOfBirth)} yrs` : ''} · {patient.phone}
          </p>
        </div>
        <Badge tone={patient.loyaltyLevel}>{patient.loyaltyLevel}</Badge>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <Card>
            <h3 className="font-medium text-ink">Medical information</h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              <InfoBlock label="Allergies" values={patient.allergies} empty="None recorded" />
              <InfoBlock label="Chronic conditions" values={patient.chronicConditions} empty="None recorded" />
              <InfoBlock label="Current medications" values={patient.currentMedications} empty="None recorded" />
            </div>
            {patient.notes && <p className="mt-3 border-t border-line pt-3 text-sm text-ink/70">{patient.notes}</p>}
          </Card>

          <Card>
            <h3 className="font-medium text-ink">Visit history</h3>
            {patientVisits.length === 0 ? (
              <EmptyState className="mt-3" title="No visits yet" />
            ) : (
              <div className="mt-3 space-y-4">
                {patientVisits.map((v) => (
                  <div key={v.id} className="border-b border-line pb-4 last:border-0 last:pb-0">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-sm font-medium text-ink">{formatDateTime(v.visitDate)} · {serviceById[v.serviceId]?.name}</p>
                      <span className="text-xs text-ink/50">{doctorById[v.doctorId]?.fullName}</span>
                    </div>
                    <p className="mt-1 text-sm text-ink/80"><span className="text-ink/50">Diagnosis:</span> {v.diagnosis || '—'}</p>
                    <p className="text-sm text-ink/80"><span className="text-ink/50">Treatment:</span> {v.treatment || '—'}</p>
                    {v.doctorNotes && <p className="text-sm text-ink/60">{v.doctorNotes}</p>}
                    {v.followUpDate && <p className="mt-1 text-xs text-primary">Follow-up scheduled {formatDate(v.followUpDate)}</p>}
                  </div>
                ))}
              </div>
            )}
          </Card>

          <Card>
            <div className="flex items-center justify-between">
              <h3 className="flex items-center gap-2 font-medium text-ink"><Pill className="h-4 w-4" /> Treatments &amp; reminders</h3>
              <Button variant="ghost" onClick={() => setShowTreatmentForm((v) => !v)}><Plus className="h-3.5 w-3.5" /> Add</Button>
            </div>
            {showTreatmentForm && (
              <TreatmentForm
                onCancel={() => setShowTreatmentForm(false)}
                onSave={(data) => { saveTreatment({ patientId: id, ...data }); setShowTreatmentForm(false) }}
              />
            )}
            {patientTreatments.length === 0 && !showTreatmentForm ? (
              <EmptyState className="mt-3" title="No treatments on file" />
            ) : (
              <div className="mt-3 space-y-3">
                {patientTreatments.map((t) => (
                  <div key={t.id} className="rounded-md border border-line p-3 text-sm">
                    <p className="font-medium text-ink">{t.medication}</p>
                    <p dir="auto" className="min-w-0 whitespace-pre-wrap break-words leading-7 text-ink/60">{t.instructions}</p>
                    <p className="mt-1 text-xs text-ink/40">
                      {t.startDate} → {t.endDate || 'ongoing'} · reminder: {t.reminderSchedule || 'none'}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </Card>

          <Card>
            <h3 className="flex items-center gap-2 font-medium text-ink"><ImageIcon className="h-4 w-4" /> Before / after progress</h3>
            <EmptyState
              className="mt-3"
              title="No media uploaded"
              description="Upload placeholders are supported for this demo — connect Supabase Storage to persist real images securely."
            />
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <h3 className="font-medium text-ink">Loyalty</h3>
            <p className="mt-2 font-display text-3xl text-ink">{patient.completedVisits}</p>
            <p className="text-xs text-ink/50">completed visits ({patient.totalVisits} total booked)</p>
            <div className="mt-4 space-y-2">
              {patientRewards.length === 0 ? (
                <p className="text-sm text-ink/40">No rewards yet — milestones at 3, 5, and 10 visits.</p>
              ) : (
                patientRewards.map((r) => (
                  <div key={r.id} className="flex items-start gap-2 text-sm">
                    <Award className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <div>
                      <p className="text-ink">{r.rewardDescription}</p>
                      <p className="text-xs text-ink/40">at {r.milestoneVisits} visits · {formatDate(r.grantedAt)}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

function InfoBlock({ label, values, empty }) {
  return (
    <div>
      <p className="text-xs font-medium text-ink/50">{label}</p>
      {values?.length ? (
        <ul className="mt-1 space-y-0.5 text-sm text-ink">
          {values.map((v) => <li key={v}>{v}</li>)}
        </ul>
      ) : (
        <p className="mt-1 text-sm text-ink/40">{empty}</p>
      )}
    </div>
  )
}

function TreatmentForm({ onSave, onCancel }) {
  const [medication, setMedication] = useState('')
  const [instructions, setInstructions] = useState('')
  const [startDate, setStartDate] = useState(new Date().toISOString().slice(0, 10))
  const [endDate, setEndDate] = useState('')
  const [reminderSchedule, setReminderSchedule] = useState('daily_08:00')

  return (
    <div className="mt-3 space-y-3 rounded-md border border-line p-3">
      <input className="input" placeholder="اسم الدواء أو العلاج" value={medication} onChange={(e) => setMedication(e.target.value)} />
      <div className="flex items-start gap-2">
        <textarea className="input" rows={2} placeholder="تعليمات الاستخدام — مثال: بعد الأكل" value={instructions} onChange={(e) => setInstructions(e.target.value)} />
        <VoiceInput onResult={(t) => setInstructions((v) => (v ? `${v} ${t}` : t))} />
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <input type="date" className="input" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        <input type="date" className="input" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </div>
      <select className="input" value={reminderSchedule} onChange={(e) => setReminderSchedule(e.target.value)}>
        <option value="daily_08:00">مرة يوميًا — الساعة 8 صباحًا</option>
        <option value="daily_08:00,daily_20:00">مرتين يوميًا — 8 صباحًا و8 مساءً</option>
        <option value="weekly_mon_08:00">أسبوعيًا — الاثنين الساعة 8 صباحًا</option>
      </select>
      <div className="flex justify-end gap-2">
        <Button variant="ghost" onClick={onCancel}>إلغاء</Button>
        <Button onClick={() => medication && onSave({ medication, instructions, startDate, endDate: endDate || null, reminderSchedule })}>حفظ العلاج</Button>
      </div>
    </div>
  )
}
