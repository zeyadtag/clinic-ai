import { NavLink, Outlet } from 'react-router-dom'
import {
  LayoutDashboard, CalendarDays, Users, Clock3, Cross, LogOut,
} from 'lucide-react'
import { useClinicData } from '../../context/DataContext'

const items = [
  { to: '/dashboard', label: 'نظرة عامة', icon: LayoutDashboard, end: true },
  { to: '/dashboard/appointments', label: 'المواعيد', icon: CalendarDays },
  { to: '/dashboard/patients', label: 'المرضى', icon: Users },
  { to: '/dashboard/waiting-list', label: 'قائمة الانتظار', icon: Clock3 },
]

export default function DashboardLayout() {
  const { clinic, doctors, demo } = useClinicData()
  const activeDoctor = doctors[0]

  return (
    <div className="flex min-h-screen bg-base">
      <aside className="hidden w-64 shrink-0 flex-col border-l border-line bg-paper md:flex">
        <div className="flex items-center gap-2 border-b border-line px-6 py-5">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-white">
            <Cross className="h-4 w-4" />
          </span>
          <span className="font-display text-base text-ink">{clinic.name}</span>
        </div>

        <nav className="flex-1 space-y-1 px-3 py-5">
          {items.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive ? 'bg-primary-light text-primary-dark' : 'text-ink/60 hover:bg-line/40 hover:text-ink'
                }`
              }
            >
              <Icon className="h-4 w-4" />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-line px-4 py-4">
          <div className="flex items-center gap-3 rounded-md px-2 py-2">
            <div className="h-8 w-8 shrink-0 rounded-full bg-primary-light" />
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-ink">{activeDoctor.fullName}</p>
              <p className="truncate text-xs text-ink/50">{activeDoctor.title}</p>
            </div>
          </div>
          <NavLink to="/" className="mt-2 flex items-center gap-2 rounded-md px-2 py-2 text-sm text-ink/50 hover:bg-line/40 hover:text-ink">
            <LogOut className="h-4 w-4 rotate-180" /> العودة إلى الموقع
          </NavLink>
        </div>
      </aside>

      <div className="flex-1">
        <MobileTabBar />
        <main className="mx-auto max-w-6xl px-5 py-6 md:py-8">
          {demo && (
            <div className="mb-6 rounded-md border border-warning/30 bg-warning/5 px-3 py-2 text-xs text-warning">
              نسخة تجريبية تعمل ببيانات وهمية — اربط Supabase لتشغيل بيانات العيادة الحقيقية.
            </div>
          )}
          <Outlet />
        </main>
      </div>
    </div>
  )
}

function MobileTabBar() {
  return (
    <nav className="sticky top-0 z-30 flex items-center gap-1 overflow-x-auto border-b border-line bg-paper px-3 py-2 md:hidden">
      {items.map(({ to, label, icon: Icon, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          className={({ isActive }) =>
            `flex shrink-0 items-center gap-1.5 rounded-pill px-3 py-1.5 text-xs font-medium ${
              isActive ? 'bg-primary-light text-primary-dark' : 'text-ink/60'
            }`
          }
        >
          <Icon className="h-3.5 w-3.5" /> {label}
        </NavLink>
      ))}
    </nav>
  )
}
