import { TodayOverview, NextPatientCard } from '../../components/dashboard/TodayOverview'
import FinancialOverview from '../../components/dashboard/FinancialOverview'
import AnalyticsCharts from '../../components/dashboard/AnalyticsCharts'
import AIInsightCard from '../../components/dashboard/AIInsightCard'
import WaitingRoomStatus from '../../components/dashboard/WaitingRoomStatus'
import NeedsAttention from '../../components/dashboard/NeedsAttention'

export default function DashboardHome() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink">نظرة عامة</h1>
        <p className="text-sm text-ink/60">ملخص أداء العيادة اليوم.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <TodayOverview />
          <AnalyticsCharts />
          <FinancialOverview />
        </div>
        <div className="space-y-6">
          <NextPatientCard />
          <AIInsightCard />
          <WaitingRoomStatus />
          <NeedsAttention />
        </div>
      </div>
    </div>
  )
}
