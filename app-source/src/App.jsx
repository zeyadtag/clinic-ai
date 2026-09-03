import { Routes, Route } from 'react-router-dom'
import PublicLayout from './components/layout/PublicLayout'
import DashboardLayout from './components/layout/DashboardLayout'

import HomePage from './pages/public/HomePage'
import BookAppointmentPage from './pages/public/BookAppointmentPage'
import PatientPortalPage from './pages/public/PatientPortalPage'

import DashboardHome from './pages/dashboard/DashboardHome'
import AppointmentsPage from './pages/dashboard/AppointmentsPage'
import PatientsListPage from './pages/dashboard/PatientsListPage'
import PatientProfilePage from './pages/dashboard/PatientProfilePage'
import VisitPage from './pages/dashboard/VisitPage'
import WaitingListPage from './pages/dashboard/WaitingListPage'

import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/book" element={<BookAppointmentPage />} />
        <Route path="/portal" element={<PatientPortalPage />} />
      </Route>

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="appointments" element={<AppointmentsPage />} />
        <Route path="patients" element={<PatientsListPage />} />
        <Route path="patients/:id" element={<PatientProfilePage />} />
        <Route path="visits/:appointmentId" element={<VisitPage />} />
        <Route path="waiting-list" element={<WaitingListPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
