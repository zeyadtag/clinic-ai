import { Sparkles, TrendingUp, TrendingDown, Info } from 'lucide-react'
import { useMemo } from 'react'
import { useClinicData } from '../../context/DataContext'
import { generateInsights } from '../../services/analytics'
import Card from '../ui/Card'

const ICONS = { positive: TrendingUp, warning: TrendingDown, neutral: Info }
const COLORS = { positive: 'text-success', warning: 'text-warning', neutral: 'text-primary' }

/**
 * Insights are computed here with plain application logic today. To connect
 * a real model later: replace generateInsights() with a call to your AI
 * service (see anthropic_api_in_artifacts pattern) fed the same appointment
 * and revenue data, and keep this component's rendering unchanged.
 */
export default function AIInsightCard() {
  const { appointments, services } = useClinicData()
  const insights = useMemo(() => generateInsights(appointments, services), [appointments, services])

  return (
    <Card className="border-primary/20 bg-gradient-to-br from-primary-light/40 to-transparent">
      <div className="flex items-center gap-2">
        <Sparkles className="h-4 w-4 text-primary" />
        <h3 className="font-medium text-ink">تحليلات العيادة الذكية</h3>
      </div>
      <ul className="mt-3 space-y-2">
        {insights.map((insight, i) => {
          const Icon = ICONS[insight.tone] || Info
          return (
            <li key={i} className={`flex items-start gap-2 text-sm ${COLORS[insight.tone] || 'text-ink/70'}`}>
              <Icon className="mt-0.5 h-4 w-4 shrink-0" />
              <span className="text-ink/80">{insight.message}</span>
            </li>
          )
        })}
      </ul>
    </Card>
  )
}
