import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Users } from 'lucide-react'
import { useClinicData } from '../../context/DataContext'
import { formatDate } from '../../utils/dateHelpers'
import Card from '../../components/ui/Card'
import Badge from '../../components/ui/Badge'
import EmptyState from '../../components/ui/EmptyState'

export default function PatientsListPage() {
  const { patients } = useClinicData()
  const [query, setQuery] = useState('')

  const filtered = useMemo(
    () => patients.filter((p) => p.fullName.toLowerCase().includes(query.toLowerCase()) || p.phone.includes(query)),
    [patients, query]
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink">المرضى</h1>
        <p className="text-sm text-ink/60">يوجد {patients.length} مرضى مسجلين.</p>
      </div>

      <Card>
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40" />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="ابحث بالاسم أو رقم الهاتف" className="input pr-9" />
        </div>
      </Card>

      {filtered.length === 0 ? (
        <EmptyState icon={Users} title="لم يتم العثور على مرضى" />
      ) : (
        <Card padded={false}>
          <div className="divide-y divide-line">
            {filtered.map((p) => (
              <Link key={p.id} to={`/dashboard/patients/${p.id}`} className="flex items-center justify-between gap-3 p-4 hover:bg-line/20">
                <div>
                  <p className="font-medium text-ink">{p.fullName}</p>
                  <p className="text-sm text-ink/60">{p.phone} · {p.completedVisits} زيارات{p.lastVisitAt ? ` · آخر زيارة ${formatDate(p.lastVisitAt)}` : ''}</p>
                </div>
                <Badge tone={p.loyaltyLevel}>{p.loyaltyLevel}</Badge>
              </Link>
            ))}
          </div>
        </Card>
      )}
    </div>
  )
}
