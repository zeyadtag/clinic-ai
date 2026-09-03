import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CalendarCheck, Cross, Home, LayoutDashboard, Menu, MessageSquareText, ShieldCheck, Stethoscope, UserRound, X } from 'lucide-react'
import { useClinicData } from '../../context/DataContext'

const sections = [
  { id: 'home', label: 'الرئيسية', icon: Home },
  { id: 'services', label: 'الخدمات', icon: Stethoscope },
  { id: 'about', label: 'الأطباء', icon: UserRound },
  { id: 'reviews', label: 'آراء المرضى', icon: MessageSquareText },
]

export default function PublicNavbar() {
  const { clinic } = useClinicData()
  const [open, setOpen] = useState(false)

  const Navigation = ({ mobile = false }) => (
    <>
      <div className="space-y-1">
        <p className="mb-3 px-3 text-[11px] font-semibold tracking-[.12em] text-ink/35">القائمة الرئيسية</p>
        {sections.map(({ id, label, icon: Icon }) => (
          <a key={id} href={id === 'home' ? '/' : `/#${id}`} onClick={() => setOpen(false)} className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium text-ink/65 transition hover:bg-primary-light hover:text-primary-dark">
            <Icon className="h-[18px] w-[18px]" /> {label}
          </a>
        ))}
      </div>
      <div className="my-5 border-t border-line" />
      <p className="mb-3 px-3 text-[11px] font-semibold tracking-[.12em] text-ink/35">الدخول إلى النظام</p>
      <div className="space-y-2">
        <Link to="/dashboard" onClick={() => setOpen(false)} className="flex items-center gap-3 rounded-xl bg-primary-light px-3 py-3 text-sm font-semibold text-primary-dark"><LayoutDashboard className="h-[18px] w-[18px]" /> لوحة الطبيب</Link>
        <Link to="/portal" onClick={() => setOpen(false)} className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-ink/65 hover:bg-base"><ShieldCheck className="h-[18px] w-[18px]" /> بوابة المريض</Link>
        <Link to="/book" onClick={() => setOpen(false)} className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark"><CalendarCheck className="h-4 w-4" /> احجز موعدًا</Link>
      </div>
      {!mobile && <p className="mt-auto px-3 pt-8 text-xs leading-5 text-ink/40">رعاية أفضل، حجز أسهل، وتجربة عيادة أكثر ذكاءً.</p>}
    </>
  )

  return (
    <>
      <aside className="fixed inset-y-0 right-0 z-40 hidden w-72 flex-col border-l border-line bg-paper px-5 py-6 lg:flex">
        <Link to="/" className="mb-9 flex items-center gap-3 px-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-sm"><Cross className="h-5 w-5" /></span>
          <div><p className="font-display text-lg font-bold leading-tight text-ink">{clinic.name}</p><p className="mt-0.5 text-[11px] tracking-[.12em] text-primary">رعاية متصلة</p></div>
        </Link>
        <Navigation />
      </aside>
      <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-line bg-paper/95 px-4 backdrop-blur lg:hidden">
        <Link to="/" className="flex items-center gap-2.5"><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white"><Cross className="h-4 w-4" /></span><span className="font-display text-lg text-ink">{clinic.name}</span></Link>
        <button className="rounded-lg border border-line p-2" onClick={() => setOpen(true)} aria-label="فتح القائمة"><Menu className="h-5 w-5" /></button>
      </header>
      {open && <div className="fixed inset-0 z-50 bg-ink/30 lg:hidden" onClick={() => setOpen(false)}><aside className="mr-auto flex h-full w-[84%] max-w-sm flex-col bg-paper p-5 shadow-2xl" onClick={(e) => e.stopPropagation()}><div className="mb-7 flex items-center justify-between"><p className="font-display text-xl text-ink">القائمة</p><button onClick={() => setOpen(false)} className="rounded-lg border border-line p-2"><X className="h-5 w-5" /></button></div><Navigation mobile /></aside></div>}
    </>
  )
}
