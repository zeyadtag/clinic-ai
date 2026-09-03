import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CalendarDays, Check, CheckCircle2, Clock3, Stethoscope, UserRound } from 'lucide-react'
import { useClinicData } from '../../context/DataContext'
import { formatDateTime, formatMoney } from '../../utils/dateHelpers'
import Button from '../ui/Button'
import Card from '../ui/Card'
import VoiceInput from '../ui/VoiceInput'

const emptyForm = { fullName: '', phone: '', email: '', serviceId: '', doctorId: '', date: '', time: '', notes: '' }
const steps = [
  { id: 1, label: 'الخدمة والطبيب', icon: Stethoscope },
  { id: 2, label: 'الموعد المناسب', icon: CalendarDays },
  { id: 3, label: 'بيانات المريض', icon: UserRound },
]

export default function BookingForm() {
  const { services, doctors, bookAppointment, joinWaitingList, suggestNearestSlots } = useClinicData()
  const [params] = useSearchParams()
  const [form, setForm] = useState(() => ({ ...emptyForm, serviceId: params.get('service') || '' }))
  const [step, setStep] = useState(1)
  const [suggestions, setSuggestions] = useState(null)
  const [confirmed, setConfirmed] = useState(null)
  const [waitlisted, setWaitlisted] = useState(false)
  const [error, setError] = useState('')

  const service = services.find((item) => item.id === form.serviceId)
  const doctor = doctors.find((item) => item.id === form.doctorId)
  const eligibleDoctors = useMemo(() => doctors.filter((item) => item.isActive), [doctors])
  const requestedDateTime = useMemo(() => {
    if (!form.date || !form.time) return null
    return new Date(`${form.date}T${form.time}`)
  }, [form.date, form.time])

  const update = (field) => (event) => {
    setError('')
    setSuggestions(null)
    setForm((current) => ({ ...current, [field]: event.target.value }))
  }

  const nextStep = () => {
    if (step === 1 && (!form.serviceId || !form.doctorId)) return setError('اختر الخدمة والطبيب أولًا للمتابعة.')
    if (step === 2 && !requestedDateTime) return setError('اختر التاريخ والوقت المناسبين للمتابعة.')
    setError('')
    setStep((current) => Math.min(3, current + 1))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    if (!form.fullName || !form.phone || !requestedDateTime) return setError('يرجى إدخال الاسم ورقم الهاتف لإتمام الحجز.')
    const result = await bookAppointment({
      fullName: form.fullName, phone: form.phone, email: form.email,
      serviceId: form.serviceId, doctorId: form.doctorId,
      startsAt: requestedDateTime.toISOString(), notes: form.notes,
    })
    if (result.ok) {
      setConfirmed(result.appointment)
      setSuggestions(null)
      return
    }
    if (result.reason === 'error') {
      setError('تعذر إتمام الحجز الآن. يرجى المحاولة مرة أخرى بعد قليل.')
      return
    }
    setSuggestions(suggestNearestSlots(form.doctorId, requestedDateTime, service?.durationMinutes || 30, 3))
  }

  const bookSuggestedSlot = async (slot) => {
    const result = await bookAppointment({
      fullName: form.fullName, phone: form.phone, email: form.email,
      serviceId: form.serviceId, doctorId: form.doctorId,
      startsAt: slot.toISOString(), notes: form.notes,
    })
    if (result.ok) {
      setConfirmed(result.appointment)
      setSuggestions(null)
    }
  }

  const handleWaitlist = () => {
    joinWaitingList({
      fullName: form.fullName, phone: form.phone, email: form.email,
      serviceId: form.serviceId, doctorId: form.doctorId, preferredStart: requestedDateTime,
    })
    setWaitlisted(true)
  }

  const reset = () => {
    setConfirmed(null)
    setWaitlisted(false)
    setSuggestions(null)
    setStep(1)
    setForm(emptyForm)
  }

  if (confirmed) return <SuccessState title="تم تأكيد حجزك" text={`${form.fullName}، تم تأكيد موعد ${service?.name} في ${formatDateTime(confirmed.startsAt)}.`} onReset={reset} />
  if (waitlisted) return <SuccessState waitlist title="تمت إضافتك إلى قائمة الانتظار" text={`سنتواصل معك فور توفر موعد قريب مع ${doctor?.fullName}.`} onReset={reset} />

  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-7 grid grid-cols-3 overflow-hidden rounded-card border border-line bg-paper/70">
        {steps.map(({ id, label, icon: Icon }) => {
          const active = step === id
          const done = step > id
          return (
            <button key={id} type="button" onClick={() => done && setStep(id)} className={`flex items-center justify-center gap-2 border-l border-line px-2 py-4 text-xs transition last:border-l-0 sm:text-sm ${active ? 'bg-primary/10 font-bold text-primary-dark' : done ? 'text-ink' : 'text-ink/35'}`}>
              <span className={`grid h-7 w-7 place-items-center rounded-full ${active || done ? 'bg-primary text-white' : 'bg-line text-ink/40'}`}>
                {done ? <Check className="h-4 w-4" /> : <Icon className="h-4 w-4" />}
              </span>
              <span className="hidden sm:inline">{label}</span>
            </button>
          )
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <Card className="min-h-[430px]" padded={false}>
          <form onSubmit={handleSubmit} className="p-6 sm:p-8">
            {step === 1 && (
              <div>
                <Eyebrow>الخطوة الأولى</Eyebrow>
                <h2 className="mt-2 text-2xl font-bold text-ink">اختر نوع الرعاية والطبيب</h2>
                <p className="mt-2 text-sm text-ink/55">كل خدمة موضح معها السعر والمدة قبل تأكيد الحجز.</p>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {services.map((item) => (
                    <button key={item.id} type="button" onClick={() => setForm((current) => ({ ...current, serviceId: item.id }))} className={`rounded-xl border p-4 text-right transition ${form.serviceId === item.id ? 'border-primary bg-primary/10 shadow-[0_0_0_1px_rgba(31,184,153,.25)]' : 'border-line bg-base/40 hover:border-primary/50'}`}>
                      <span className="block font-bold text-ink">{item.name}</span>
                      <span className="mt-1 block text-xs leading-5 text-ink/50">{item.description}</span>
                      <span className="mt-3 flex items-center justify-between text-xs text-ink/70"><b className="text-accent">{formatMoney(item.priceCents)}</b><span>{item.durationMinutes} دقيقة</span></span>
                    </button>
                  ))}
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {eligibleDoctors.map((item) => (
                    <button key={item.id} type="button" onClick={() => setForm((current) => ({ ...current, doctorId: item.id }))} className={`flex items-center gap-3 rounded-xl border p-4 text-right transition ${form.doctorId === item.id ? 'border-primary bg-primary/10' : 'border-line bg-base/40 hover:border-primary/50'}`}>
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary-dark"><UserRound className="h-5 w-5" /></span>
                      <span><b className="block text-sm text-ink">{item.fullName}</b><small className="mt-1 block text-ink/50">{item.title}</small></span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <Eyebrow>الخطوة الثانية</Eyebrow>
                <h2 className="mt-2 text-2xl font-bold text-ink">اختر الموعد المناسب</h2>
                <p className="mt-2 text-sm text-ink/55">سيبحث النظام تلقائيًا عن أقرب بدائل إذا كان الموعد محجوزًا.</p>
                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <Field label="التاريخ"><input type="date" value={form.date} onChange={update('date')} className="input h-12" min={new Date().toISOString().slice(0, 10)} /></Field>
                  <Field label="الوقت"><input type="time" value={form.time} onChange={update('time')} className="input h-12" /></Field>
                </div>
                <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm text-ink/65">
                  <Clock3 className="ml-2 inline h-4 w-4 text-primary" /> متوسط وقت الانتظار أقل من 12 دقيقة، وستصلك رسالة إذا تأخر الطبيب.
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <Eyebrow>الخطوة الأخيرة</Eyebrow>
                <h2 className="mt-2 text-2xl font-bold text-ink">أدخل بيانات التواصل</h2>
                <p className="mt-2 text-sm text-ink/55">بياناتك محفوظة بأمان وتُستخدم لتأكيد الموعد فقط.</p>
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <Field label="الاسم بالكامل"><input value={form.fullName} onChange={update('fullName')} className="input h-12" placeholder="اكتب اسمك" /></Field>
                  <Field label="رقم الهاتف"><input value={form.phone} onChange={update('phone')} className="input h-12" placeholder="01xxxxxxxxx" inputMode="tel" /></Field>
                </div>
                <div className="mt-4"><Field label="البريد الإلكتروني (اختياري)"><input value={form.email} onChange={update('email')} type="email" className="input h-12" placeholder="name@example.com" /></Field></div>
                <div className="mt-4"><Field label="ملاحظات للطبيب (اختياري)"><div className="flex items-start gap-2"><textarea value={form.notes} onChange={update('notes')} rows={3} className="input" placeholder="اكتب سبب الزيارة أو استخدم التسجيل الصوتي" /><VoiceInput onResult={(text) => setForm((current) => ({ ...current, notes: current.notes ? `${current.notes} ${text}` : text }))} /></div></Field></div>
              </div>
            )}

            {error ? <p className="mt-5 rounded-lg border border-danger/30 bg-danger/5 px-3 py-2 text-sm text-danger">{error}</p> : null}
            <div className="mt-8 flex items-center justify-between gap-3 border-t border-line pt-5">
              {step > 1 ? <Button type="button" variant="ghost" onClick={() => { setError(''); setStep((current) => current - 1) }}>السابق</Button> : <span />}
              {step < 3 ? <Button type="button" onClick={nextStep}>التالي</Button> : <Button type="submit">تأكيد الحجز</Button>}
            </div>

            {suggestions ? (
              <div className="mt-5 rounded-xl border border-warning/30 bg-warning/5 p-4">
                <p className="font-bold text-ink">الموعد المطلوب غير متاح</p>
                <p className="mt-1 text-sm text-ink/60">اختر أحد أقرب ثلاثة مواعيد:</p>
                <div className="mt-3 grid gap-2">
                  {suggestions.map((slot) => <button type="button" key={slot.toISOString()} onClick={() => bookSuggestedSlot(slot)} className="rounded-lg border border-line bg-paper px-3 py-2 text-sm text-ink hover:border-primary">{formatDateTime(slot)}</button>)}
                </div>
                <Button type="button" variant="ghost" className="mt-3 w-full" onClick={handleWaitlist}>لا يناسبني — أضفني لقائمة الانتظار</Button>
              </div>
            ) : null}
          </form>
        </Card>

        <aside className="h-fit rounded-card border border-line bg-gradient-to-b from-primary/15 to-paper p-6 lg:sticky lg:top-6">
          <p className="text-xs font-bold uppercase tracking-wider text-primary-dark">ملخص الحجز</p>
          <h3 className="mt-2 text-xl font-bold text-ink">موعدك في لمحة</h3>
          <div className="mt-6 space-y-4 text-sm">
            <Summary label="الخدمة" value={service?.name} />
            <Summary label="الطبيب" value={doctor?.fullName} />
            <Summary label="الموعد" value={requestedDateTime ? formatDateTime(requestedDateTime) : null} />
            <Summary label="المدة" value={service ? `${service.durationMinutes} دقيقة` : null} />
          </div>
          {service ? <div className="mt-6 flex items-center justify-between border-t border-line pt-5"><span className="text-sm text-ink/50">الإجمالي</span><b className="text-lg text-accent">{formatMoney(service.priceCents)}</b></div> : null}
          <p className="mt-6 flex gap-2 text-xs leading-5 text-ink/45"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> يمكنك تعديل أو إلغاء الموعد قبل موعده بسهولة.</p>
        </aside>
      </div>
    </div>
  )
}

function Eyebrow({ children }) { return <p className="text-xs font-bold text-primary-dark">{children}</p> }
function Field({ label, children }) { return <label className="block"><span className="mb-2 block text-xs font-bold text-ink/60">{label}</span>{children}</label> }
function Summary({ label, value }) { return <div className="flex items-start justify-between gap-3 border-b border-line/70 pb-3"><span className="text-ink/40">{label}</span><b className="max-w-[180px] text-left text-ink">{value || 'لم يُحدد بعد'}</b></div> }

function SuccessState({ title, text, onReset, waitlist = false }) {
  const Icon = waitlist ? Clock3 : CheckCircle2
  return <Card className="mx-auto max-w-lg py-10 text-center"><span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary/15"><Icon className="h-8 w-8 text-primary" /></span><h3 className="mt-5 text-2xl font-bold text-ink">{title}</h3><p className="mx-auto mt-3 max-w-md text-sm leading-7 text-ink/65">{text}</p>{waitlist ? null : <p className="mt-2 text-xs text-ink/40">سيتم إرسال تذكير قبل الموعد بـ24 ساعة.</p>}<Button className="mt-7" onClick={onReset}>حجز موعد آخر</Button></Card>
}
