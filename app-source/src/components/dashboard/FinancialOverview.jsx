import { useMemo } from 'react'
import { useClinicData } from '../../context/DataContext'
import { computeFinancials } from '../../services/analytics'
import { formatMoney } from '../../utils/dateHelpers'
import Card from '../ui/Card'

export default function FinancialOverview() {
  const { appointments, services } = useClinicData()
  const financials = useMemo(() => computeFinancials(appointments, services), [appointments, services])

  const rows = [
    { label: 'إيراد اليوم', value: financials.today },
    { label: 'هذا الأسبوع', value: financials.week },
    { label: 'هذا الشهر', value: financials.month },
  ]

  return (
    <Card>
      <h3 className="font-medium text-ink">الملخص المالي</h3>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {rows.map((r) => (
          <div key={r.label}>
            <p className="font-display text-xl text-ink">{formatMoney(r.value)}</p>
            <p className="mt-0.5 text-xs text-ink/50">{r.label}</p>
          </div>
        ))}
      </div>
    </Card>
  )
}
