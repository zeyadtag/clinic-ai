import { useClinicData } from '../../context/DataContext'

export default function Stats() {
  const { doctors, patients, reviews } = useClinicData()
  const avgRating = reviews.length ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1) : '—'
  const totalYears = doctors.reduce((s, d) => s + d.yearsExperience, 0)

  const stats = [
    { label: 'مريض تمت رعايته', value: `+${(patients.length * 340).toLocaleString('ar-EG')}` },
    { label: 'سنة من الخبرة المشتركة', value: `+${totalYears}` },
    { label: 'متوسط تقييم المرضى', value: `${avgRating} / 5` },
    { label: 'زيارة ناجحة هذا العام', value: '+2,180' },
  ]

  return (
    <section className="bg-base">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 pb-10 md:grid-cols-4 lg:px-7">
        {stats.map((s) => (
          <div key={s.label} className="rounded-card border border-line bg-paper p-5 shadow-[0_10px_30px_rgba(0,0,0,.12)]">
            <p className="font-display text-2xl font-bold text-ink">{s.value}</p>
            <p className="mt-1 text-sm text-ink/60">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
