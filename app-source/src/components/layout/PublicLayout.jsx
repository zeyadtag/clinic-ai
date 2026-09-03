import { useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Activity, CalendarCheck, LayoutDashboard } from 'lucide-react'
import { useClinicData } from '../../context/DataContext'
import PublicNavbar from './PublicNavbar'
import PublicFooter from './PublicFooter'
import ClinicAssistant from '../public/ClinicAssistant'

export default function PublicLayout() {
  const location = useLocation()
  const { clinic } = useClinicData()

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.slice(1)
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: 'auto', block: 'start' }))
  }, [location.pathname, location.hash])

  return (
    <div className="min-h-screen bg-base">
      <PublicNavbar />
      <div className="flex min-h-screen flex-col lg:pr-72">
        <header className="hidden h-[72px] items-center justify-between border-b border-line bg-base/90 px-7 backdrop-blur lg:flex">
          <div><p className="text-sm font-semibold text-ink">منصة {clinic.name}</p><p className="mt-0.5 text-xs text-ink/35">إدارة ذكية ومتكاملة للعيادة</p></div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-pill border border-line bg-paper px-3 py-2 text-xs text-ink/60"><Activity className="h-3.5 w-3.5 text-success" /> النظام يعمل</span>
            <Link to="/dashboard" className="inline-flex items-center gap-2 rounded-lg border border-line bg-paper px-3 py-2 text-xs font-semibold text-ink hover:border-primary/50"><LayoutDashboard className="h-4 w-4 text-primary" /> لوحة الطبيب</Link>
            <Link to="/book" className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-white"><CalendarCheck className="h-4 w-4" /> حجز جديد</Link>
          </div>
        </header>
        <main className="flex-1"><Outlet /></main>
        <PublicFooter />
      </div>
      <ClinicAssistant />
    </div>
  )
}
