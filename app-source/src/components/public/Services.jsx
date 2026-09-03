import { Link } from 'react-router-dom'
import { Clock } from 'lucide-react'
import { useClinicData } from '../../context/DataContext'
import { formatMoney } from '../../utils/dateHelpers'
import Card from '../ui/Card'

export default function Services() {
  const { services } = useClinicData()

  return (
    <section id="services" className="scroll-mt-16 bg-base lg:scroll-mt-0">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-7">
        <div className="max-w-lg">
          <p className="text-xs font-semibold tracking-[.14em] text-primary">خدمات العيادة</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink">رعاية تناسب وقتك واحتياجاتك</h2>
          <p className="mt-2 text-ink/60">أسعار ومدد واضحة لتعرف كل التفاصيل قبل الحجز.</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.filter((s) => s.isActive !== false).map((s) => (
            <Card key={s.id} className="flex flex-col justify-between">
              <div>
                <h3 className="font-display text-lg text-ink">{s.name}</h3>
                <p className="mt-2 text-sm text-ink/60">{s.description}</p>
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
                <div>
                  <p className="font-display text-lg text-ink">{formatMoney(s.priceCents)}</p>
                  <p className="flex items-center gap-1 text-xs text-ink/50"><Clock className="h-3 w-3" /> {s.durationMinutes} دقيقة</p>
                </div>
                <Link to={`/book?service=${s.id}`} className="rounded-md bg-primary px-3 py-2 text-xs font-medium text-white hover:bg-primary-dark">
                  احجز
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
