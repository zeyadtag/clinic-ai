const TONES = {
  scheduled: 'bg-line/60 text-ink',
  confirmed: 'bg-primary-light text-primary-dark',
  waiting: 'bg-warning/15 text-warning',
  in_progress: 'bg-accent-light text-accent',
  completed: 'bg-success/15 text-success',
  cancelled: 'bg-danger/10 text-danger',
  no_show: 'bg-danger/10 text-danger',
  positive: 'bg-success/15 text-success',
  warning: 'bg-warning/15 text-warning',
  neutral: 'bg-primary-light text-primary-dark',
  new: 'bg-line/60 text-ink',
  unlocked: 'bg-primary-light text-primary-dark',
  gold: 'bg-warning/15 text-warning',
  vip: 'bg-accent-light text-accent',
}

const LABELS = {
  scheduled: 'مجدول', confirmed: 'مؤكد', waiting: 'في الانتظار', in_progress: 'جاري الكشف',
  completed: 'مكتمل', cancelled: 'ملغي', no_show: 'لم يحضر',
  new: 'جديد', unlocked: 'مميز', gold: 'ذهبي', vip: 'VIP',
}

export default function Badge({ tone = 'neutral', children }) {
  const label = LABELS[tone] ?? children ?? tone.replace(/_/g, ' ')
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-pill px-2.5 py-1 text-xs font-medium capitalize ${TONES[tone] || TONES.neutral}`}>
      {label}
    </span>
  )
}
