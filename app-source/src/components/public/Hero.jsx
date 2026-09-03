import { Link } from 'react-router-dom'
import { ArrowRight, CalendarCheck, CheckCircle2, Clock3, ShieldCheck, Sparkles, Stethoscope } from 'lucide-react'
import { useClinicData } from '../../context/DataContext'

export default function Hero() {
  const { clinic, doctors } = useClinicData()
  const lead = doctors[0]

  return (
    <section id="home" className="relative scroll-mt-16 overflow-hidden bg-base lg:scroll-mt-0">
      <div className="pointer-events-none absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-primary/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-8 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:px-7 lg:py-10">
        <div>
          <p className="inline-flex items-center gap-2 rounded-pill border border-primary/25 bg-primary-light/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[.14em] text-primary-dark">
            <Sparkles className="h-3.5 w-3.5" /> تجربة مريض مدعومة بالذكاء الاصطناعي
          </p>
          <h1 className="mt-5 max-w-2xl font-display text-4xl font-bold leading-[1.08] text-ink sm:text-5xl lg:text-[54px]">
            عيادة أذكى.<br /><span className="text-primary-dark">ورحلة مريض أكثر راحة.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-ink/65">
            يجمع فريق {clinic.name} بين الرعاية الطبية الدقيقة ونظام حجز ذكي
            يجد أقرب موعد متاح — بدون انتظار أو اتصالات متكررة.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/book" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-white hover:bg-primary-dark">
              <CalendarCheck className="h-4 w-4" /> احجز موعدًا
            </Link>
            <a href="#services" className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 text-sm font-medium text-ink hover:bg-line/30">
              عرض الخدمات <ArrowRight className="h-4 w-4 rotate-180" />
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-ink/60">
            <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> مواعيد متاحة لحظيًا</span>
            <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> ملفات مرضى آمنة</span>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-xl">
          <div className="overflow-hidden rounded-[24px] border border-primary/25 bg-gradient-to-br from-[#16483f] via-[#0f302f] to-[#0a2228] p-6 shadow-[0_28px_70px_rgba(0,0,0,.35)] sm:p-8">
            <div className="flex items-center justify-between text-white">
              <div>
                <p className="text-xs font-semibold tracking-[.14em] text-white/55">موعدك القادم</p>
                <p className="mt-2 font-display text-2xl font-bold">رعاية بدون انتظار</p>
              </div>
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10"><Stethoscope className="h-6 w-6" /></span>
            </div>
            <div className="mt-8 rounded-2xl border border-line bg-paper p-5 shadow-lg">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold text-primary">تم التأكيد</p>
                  <h3 className="mt-1 font-display text-xl text-ink">كشف طبي عام</h3>
                  <p className="mt-1 text-sm text-ink/55">مع {lead.fullName}</p>
                </div>
                <span className="rounded-xl bg-primary-light p-3 text-primary"><CalendarCheck className="h-5 w-5" /></span>
              </div>
              <div className="mt-5 flex items-center justify-between rounded-xl bg-base px-4 py-3 text-sm">
                <span className="flex items-center gap-2 font-medium text-ink"><Clock3 className="h-4 w-4 text-primary" /> اليوم، 11:15 ص</span>
                <span className="text-ink/45">20 دقيقة</span>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 text-white"><p className="font-display text-2xl">4.9/5</p><p className="mt-1 text-xs text-white/60">تقييم المرضى</p></div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 text-white"><p className="font-display text-2xl">+23 سنة</p><p className="mt-1 text-xs text-white/60">خبرة مشتركة</p></div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-2xl border border-line bg-paper px-4 py-3 shadow-lg sm:flex">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-light text-primary"><CheckCircle2 className="h-5 w-5" /></span>
            <div><p className="text-sm font-semibold text-ink">تم تأكيد الحجز</p><p className="text-xs text-ink/50">فورًا وبدون مكالمة هاتفية</p></div>
          </div>
        </div>
      </div>
    </section>
  )
}
