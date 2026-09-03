import { GraduationCap, Stethoscope } from 'lucide-react'
import { useClinicData } from '../../context/DataContext'
import Card from '../ui/Card'

export default function AboutDoctor() {
  const { doctors } = useClinicData()

  return (
    <section id="about" className="scroll-mt-16 bg-base lg:scroll-mt-0">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-7">
        <p className="text-xs font-semibold tracking-[.14em] text-primary">الفريق الطبي</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-ink">خبراء يعرفون حالتك ويهتمون بتفاصيلك</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {doctors.map((d) => (
            <Card key={d.id} className="flex gap-5">
              <div className="h-20 w-20 shrink-0 rounded-full bg-primary-light" />
              <div>
                <h3 className="font-display text-lg text-ink">{d.fullName}</h3>
                <p className="text-sm text-primary">{d.title}</p>
                <p className="mt-2 text-sm text-ink/70">{d.bio}</p>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink/60">
                  <span className="flex items-center gap-1"><Stethoscope className="h-3.5 w-3.5" /> خبرة {d.yearsExperience} سنة</span>
                  <span className="flex items-center gap-1"><GraduationCap className="h-3.5 w-3.5" /> {d.qualifications[0]}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {d.specialties.map((s) => (
                    <span key={s} className="rounded-pill bg-primary-light px-2 py-0.5 text-xs text-primary-dark">{s}</span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
