import { Star } from 'lucide-react'
import { useClinicData } from '../../context/DataContext'
import Card from '../ui/Card'

export default function Reviews() {
  const { reviews, patients } = useClinicData()
  const publicReviews = reviews.filter((r) => r.isPublic)
  const nameFor = (id) => patients.find((p) => p.id === id)?.fullName || 'Patient'

  return (
    <section id="reviews" className="scroll-mt-16 bg-base lg:scroll-mt-0">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-7">
        <p className="text-xs font-semibold tracking-[.14em] text-primary">ثقة المرضى</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-ink">ماذا يقول مرضانا؟</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {publicReviews.map((r) => (
            <Card key={r.id}>
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4" fill={i < r.rating ? 'currentColor' : 'none'} />
                ))}
              </div>
              <p className="mt-3 text-sm text-ink/80">“{r.comment}”</p>
              <p className="mt-3 text-sm font-medium text-ink/60">— {nameFor(r.patientId)}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
