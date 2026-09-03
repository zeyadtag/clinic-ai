import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, Play, Check, X, CalendarX2 } from 'lucide-react'
import { useClinicData } from '../../context/DataContext'
import { formatDateTime } from '../../utils/dateHelpers'
import Card from '../../components/ui/Card'
import Badge from '../../components/ui/Badge'
import Button from '../../components/ui/Button'
import EmptyState from '../../components/ui/EmptyState'
import ConfirmDialog from '../../components/ui/ConfirmDialog'

const STATUS_FILTERS = ['all', 'scheduled', 'confirmed', 'waiting', 'in_progress', 'completed', 'cancelled', 'no_show']

export default function AppointmentsPage() {
  const { appointments, patients, doctors, services, confirmAppointment, cancelAppointment, startVisit } = useClinicData()
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('all')
  const [date, setDate] = useState('')
  const [cancelTarget, setCancelTarget] = useState(null)

  const patientById = Object.fromEntries(patients.map((p) => [p.id, p]))
  const doctorById = Object.fromEntries(doctors.map((d) => [d.id, d]))
  const serviceById = Object.fromEntries(services.map((s) => [s.id, s]))

  const filtered = useMemo(() => {
    return appointments
      .filter((a) => (status === 'all' ? true : a.status === status))
      .filter((a) => (date ? new Date(a.startsAt).toISOString().slice(0, 10) === date : true))
      .filter((a) => {
        if (!query) return true
        const p = patientById[a.patientId]
        return p?.fullName.toLowerCase().includes(query.toLowerCase()) || p?.phone.includes(query)
      })
      .sort((a, b) => new Date(a.startsAt) - new Date(b.startsAt))
  }, [appointments, status, date, query, patientById])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink">المواعيد</h1>
        <p className="text-sm text-ink/60">عرض جدول العيادة وتأكيد المواعيد وإدارتها.</p>
      </div>

      <Card>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="ابحث باسم المريض أو رقم الهاتف" className="input pr-9" />
          </div>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="input sm:w-44" />
          <select value={status} onChange={(e) => setStatus(e.target.value)} className="input sm:w-44">
            {STATUS_FILTERS.map((s) => <option key={s} value={s}>{s === 'all' ? 'كل الحالات' : s.replace('_', ' ')}</option>)}
          </select>
        </div>
      </Card>

      {filtered.length === 0 ? (
        <EmptyState icon={CalendarX2} title="لا توجد مواعيد مطابقة" description="جرّب تعديل البحث أو إزالة الفلاتر." />
      ) : (
        <Card padded={false} className="overflow-hidden">
          <div className="divide-y divide-line">
            {filtered.map((a) => {
              const patient = patientById[a.patientId]
              const doctor = doctorById[a.doctorId]
              const service = serviceById[a.serviceId]
              return (
                <div key={a.id} className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-medium text-ink">{patient?.fullName}</p>
                    <p className="text-sm text-ink/60">{formatDateTime(a.startsAt)} · {service?.name} · {doctor?.fullName}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge tone={a.status} />
                    {a.status === 'scheduled' && (
                      <Button variant="ghost" onClick={() => confirmAppointment(a.id)}><Check className="h-3.5 w-3.5" /> تأكيد</Button>
                    )}
                    {['scheduled', 'confirmed', 'waiting'].includes(a.status) && (
                      <Button variant="primary" onClick={() => { startVisit(a.id); navigate(`/dashboard/visits/${a.id}`) }}>
                        <Play className="h-3.5 w-3.5" /> بدء الكشف
                      </Button>
                    )}
                    {a.status === 'in_progress' && (
                      <Button variant="primary" onClick={() => navigate(`/dashboard/visits/${a.id}`)}>متابعة الكشف</Button>
                    )}
                    {!['completed', 'cancelled', 'no_show'].includes(a.status) && (
                      <Button variant="danger" onClick={() => setCancelTarget(a)}><X className="h-3.5 w-3.5" /> إلغاء</Button>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </Card>
      )}

      <ConfirmDialog
        open={Boolean(cancelTarget)}
        title="إلغاء هذا الموعد؟"
        description="سيتم إخطار المريض وإتاحة الموعد للحجز من جديد."
        confirmLabel="إلغاء الموعد"
        variant="danger"
        onCancel={() => setCancelTarget(null)}
        onConfirm={() => { cancelAppointment(cancelTarget.id, 'Cancelled by clinic'); setCancelTarget(null) }}
      />
    </div>
  )
}
