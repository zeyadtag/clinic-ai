import { useClinicData } from '../../context/DataContext'

export default function PublicFooter() {
  const { clinic } = useClinicData()
  return (
    <footer className="border-t border-line bg-base">
      <div className="mx-auto max-w-6xl px-5 py-10 text-sm text-ink/60">
        <div className="flex flex-col justify-between gap-6 md:flex-row">
          <div>
            <p className="font-display text-base text-ink">{clinic.name}</p>
            <p className="mt-1">{clinic.address}</p>
            <p>{clinic.phone}</p>
          </div>
          <p className="text-ink/40">© {new Date().getFullYear()} {clinic.name}. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}
