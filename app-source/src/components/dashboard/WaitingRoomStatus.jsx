import { useState } from 'react'
import { Timer } from 'lucide-react'
import { useClinicData } from '../../context/DataContext'
import Card from '../ui/Card'
import Button from '../ui/Button'

/**
 * Lets staff set how far behind a doctor is running today. This feeds
 * directly into the patient-facing waiting-time component on the portal
 * (src/pages/public/PatientPortalPage.jsx) via dayStatus in DataContext.
 * In production this would likely be nudged automatically as appointments
 * run over, with this control as the manual override.
 */
export default function WaitingRoomStatus() {
  const { doctors, dayStatus, setDoctorDayStatus, countPatientsAheadToday } = useClinicData()

  return (
    <Card>
      <div className="flex items-center gap-2">
        <Timer className="h-4 w-4 text-primary" />
        <h3 className="font-medium text-ink">حالة غرفة الانتظار</h3>
      </div>
      <div className="mt-3 space-y-3">
        {doctors.map((d) => (
          <DoctorRow
            key={d.id}
            doctor={d}
            status={dayStatus[d.id] || { runningLateMinutes: 0 }}
            ahead={countPatientsAheadToday(d.id)}
            onChange={(minutes) => setDoctorDayStatus(d.id, { runningLateMinutes: minutes })}
          />
        ))}
      </div>
    </Card>
  )
}

function DoctorRow({ doctor, status, ahead, onChange }) {
  const [value, setValue] = useState(status.runningLateMinutes || 0)

  return (
    <div className="flex items-center justify-between gap-3 border-t border-line pt-3 first:border-0 first:pt-0">
      <div>
        <p className="text-sm font-medium text-ink">{doctor.fullName}</p>
        <p className="text-xs text-ink/50">يوجد {ahead} مريض قبله اليوم</p>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="number"
          min={0}
          step={5}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="input w-20 text-center"
        />
        <span className="text-xs text-ink/50">دقيقة تأخير</span>
        <Button variant="ghost" onClick={() => onChange(value)}>تحديث</Button>
      </div>
    </div>
  )
}
