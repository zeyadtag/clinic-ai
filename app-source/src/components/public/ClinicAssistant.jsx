import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Bot, CalendarCheck, MessageCircle, Send, Sparkles, X } from 'lucide-react'
import { useClinicData } from '../../context/DataContext'

const quickReplies = ['أقرب موعد', 'الخدمات والأسعار', 'مواعيد العمل']

export default function ClinicAssistant() {
  const { services } = useClinicData()
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([{ role: 'assistant', text: 'أهلًا بك 👋 أنا مساعد عيادة ميريديان. أقدر أساعدك في اختيار الخدمة أو الوصول لأقرب موعد.' }])

  const reply = (text) => {
    const normalized = text.trim()
    if (!normalized) return
    let answer = 'أقدر أساعدك في المواعيد والخدمات والأسعار. لو لديك أعراض شديدة أو طارئة، تواصل فورًا مع خدمات الطوارئ.'
    if (normalized.includes('موعد') || normalized.includes('حجز')) answer = 'ممتاز، يمكنك فتح الحجز الآن واختيار الخدمة والطبيب، وسيقترح النظام أقرب بدائل إذا كان الموعد مشغولًا.'
    else if (normalized.includes('خدمات') || normalized.includes('أسعار')) answer = `لدينا ${services.length} خدمات تبدأ من الكشف العام وحتى الجلدية والجلسات التجميلية. كل الأسعار والمدد ظاهرة قبل الحجز.`
    else if (normalized.includes('عمل') || normalized.includes('مواعيد العيادة')) answer = 'العيادة تستقبل الحجوزات من السبت إلى الخميس، ويمكنك طلب موعد إلكترونيًا في أي وقت.'
    setMessages((current) => [...current, { role: 'user', text: normalized }, { role: 'assistant', text: answer }])
    setInput('')
  }

  return (
    <div className="fixed bottom-5 left-5 z-50 sm:bottom-7 sm:left-7">
      {open ? (
        <section aria-label="مساعد العيادة" className="mb-3 flex h-[500px] max-h-[72vh] w-[calc(100vw-40px)] max-w-[370px] flex-col overflow-hidden rounded-2xl border border-line bg-paper shadow-[0_24px_80px_rgba(0,0,0,.45)]">
          <header className="flex items-center justify-between bg-gradient-to-l from-primary to-[#126f66] p-4 text-white">
            <div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-white/15"><Bot className="h-5 w-5" /></span><div><p className="font-bold">مساعد ميريديان الذكي</p><p className="mt-0.5 flex items-center gap-1 text-[11px] text-white/70"><span className="h-1.5 w-1.5 rounded-full bg-emerald-200" /> متاح الآن</p></div></div>
            <button aria-label="إغلاق المساعد" onClick={() => setOpen(false)} className="rounded-lg p-2 hover:bg-white/10"><X className="h-5 w-5" /></button>
          </header>
          <div className="flex-1 space-y-3 overflow-y-auto bg-base/60 p-4">
            {messages.map((message, index) => <p key={`${message.role}-${index}`} className={`max-w-[88%] rounded-xl px-3 py-2.5 text-sm leading-6 ${message.role === 'assistant' ? 'mr-auto border border-line bg-paper text-ink/75' : 'ml-auto bg-primary text-white'}`}>{message.text}</p>)}
            <div className="flex flex-wrap gap-2 pt-1">{quickReplies.map((item) => <button key={item} onClick={() => reply(item)} className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-xs text-primary-dark hover:bg-primary/10">{item}</button>)}</div>
            {messages.some((message) => message.role === 'user' && message.text.includes('موعد')) ? <Link to="/book" onClick={() => setOpen(false)} className="flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-bold text-base"><CalendarCheck className="h-4 w-4" /> ابدأ الحجز الآن</Link> : null}
          </div>
          <form onSubmit={(event) => { event.preventDefault(); reply(input) }} className="flex gap-2 border-t border-line bg-paper p-3">
            <input aria-label="اكتب رسالتك" value={input} onChange={(event) => setInput(event.target.value)} className="input" placeholder="اسأل عن المواعيد أو الخدمات..." />
            <button aria-label="إرسال" className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary text-white"><Send className="h-4 w-4" /></button>
          </form>
        </section>
      ) : null}
      <button onClick={() => setOpen((current) => !current)} className="group flex items-center gap-3 rounded-full bg-primary px-4 py-3 text-white shadow-[0_14px_35px_rgba(31,184,153,.35)] transition hover:-translate-y-1 hover:bg-primary-dark">
        <span className="relative"><MessageCircle className="h-6 w-6" /><Sparkles className="absolute -right-2 -top-2 h-3.5 w-3.5 text-accent" /></span><span className="text-sm font-bold">اسأل مساعد العيادة</span>
      </button>
    </div>
  )
}
