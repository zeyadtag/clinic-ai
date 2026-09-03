import { useMemo } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import { useClinicData } from '../../context/DataContext'
import { computeWeeklyRevenueSeries, mostRequestedService } from '../../services/analytics'
import Card from '../ui/Card'

export default function AnalyticsCharts() {
  const { appointments, services } = useClinicData()

  const series = useMemo(() => computeWeeklyRevenueSeries(appointments, services), [appointments, services])
  const topService = useMemo(() => mostRequestedService(appointments, services), [appointments, services])

  const bookingCount = appointments.length
  const cancellationCount = appointments.filter((a) => a.status === 'cancelled').length

  return (
    <Card>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-medium text-ink">إيرادات هذا الأسبوع</h3>
        <div className="flex gap-4 text-xs text-ink/50">
          <span><span className="font-medium text-ink">{bookingCount}</span> حجوزات</span>
          <span><span className="font-medium text-ink">{cancellationCount}</span> إلغاءات</span>
          {topService && <span>الأكثر طلبًا: <span className="font-medium text-ink">{topService.name}</span></span>}
        </div>
      </div>
      <div className="mt-4 h-56">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={series} margin={{ left: -20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#23344E" vertical={false} />
            <XAxis dataKey="day" tick={{ fontSize: 12, fill: '#8493AA' }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 12, fill: '#8493AA' }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v}`} />
            <Tooltip formatter={(v) => [`$${v}`, 'الإيراد']} cursor={{ fill: '#1FB89912' }} contentStyle={{ background: '#0D242D', border: '1px solid #1C3A42', borderRadius: 10 }} labelStyle={{ color: '#F2F7F5' }} itemStyle={{ color: '#69E1C8' }} />
            <Bar dataKey="revenue" fill="#1FB899" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
