import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { AlertTriangle } from 'lucide-react'
import { useClinicData } from '../../context/DataContext'
import { formatDate } from '../../utils/dateHelpers'
import Card from '../ui/Card'
import Button from '../ui/Button'
import EmptyState from '../ui/EmptyState'

export default function NeedsAttention() {
  const { followups, patients, closeFollowup } = useClinicData()

  const flagged = useMemo(() => followups.filter((f) => f.status === 'flagged'), [followups])
  const patientById = Object.fromEntries(patients.map((p) => [p.id, p]))

  return (
    <Card className="border-danger/30">
      <div className="flex items-center gap-2 text-danger">
        <AlertTriangle className="h-4 w-4" />
        <h3 className="font-medium">تحتاج إلى متابعة</h3>
      </div>

      {flagged.length === 0 ? (
        <EmptyState className="mt-3 border-none py-6" title="لا توجد تنبيهات" description="ستظهر المتابعات والتقييمات المهمة هنا." />
      ) : (
        <div className="mt-3 space-y-3">
          {flagged.map((f) => {
            const patient = patientById[f.patientId]
            return (
              <div key={f.id} className="flex items-start justify-between gap-3 border-t border-line pt-3 first:border-0 first:pt-0">
                <div className="text-sm">
                  <Link to={`/dashboard/patients/${f.patientId}`} className="font-medium text-ink hover:underline">
                    {patient?.fullName || 'مريض غير معروف'}
                  </Link>
                  <p className="text-ink/60">
                    {f.kind === 'clinical'
                      ? `أبلغ عن استمرار الأعراض في المتابعة`
                      : 'ترك تقييمًا منخفضًا'}
                    {' · '}{formatDate(f.scheduledFor)}
                  </p>
                </div>
                <Button variant="ghost" onClick={() => closeFollowup(f.id)}>تمت المراجعة</Button>
              </div>
            )
          })}
        </div>
      )}
    </Card>
  )
}
