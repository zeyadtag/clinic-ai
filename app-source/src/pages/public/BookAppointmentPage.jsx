import BookingForm from '../../components/public/BookingForm'

export default function BookAppointmentPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-12 sm:py-16">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <p className="mb-3 text-xs font-bold text-primary-dark">حجز سريع وآمن</p>
        <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">موعدك الطبي في أقل من دقيقة</h1>
        <p className="mt-3 text-ink/60">ثلاث خطوات بسيطة، تأكيد فوري، وأقرب بدائل تلقائية إذا كان الموعد مشغولًا.</p>
      </div>
      <BookingForm />
    </section>
  )
}
