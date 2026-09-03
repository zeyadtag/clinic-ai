import { isSameDay, startOfWeek, addDays } from '../utils/dateHelpers'

export function computeTodayStats(appointments, now = new Date()) {
  const today = appointments.filter((a) => isSameDay(a.startsAt, now))
  return {
    total: today.length,
    completed: today.filter((a) => a.status === 'completed').length,
    cancelled: today.filter((a) => a.status === 'cancelled').length,
    waiting: today.filter((a) => ['scheduled', 'confirmed', 'waiting'].includes(a.status)).length,
    inProgress: today.filter((a) => a.status === 'in_progress').length,
  }
}

function revenueFor(appointments, services, predicate) {
  const priceById = Object.fromEntries(services.map((s) => [s.id, s.priceCents]))
  return appointments
    .filter((a) => a.status === 'completed' && predicate(a))
    .reduce((sum, a) => sum + (priceById[a.serviceId] || 0), 0)
}

export function computeFinancials(appointments, services, now = new Date()) {
  const weekStart = startOfWeek(now)
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1)
  return {
    today: revenueFor(appointments, services, (a) => isSameDay(a.startsAt, now)),
    week: revenueFor(appointments, services, (a) => new Date(a.startsAt) >= weekStart),
    month: revenueFor(appointments, services, (a) => new Date(a.startsAt) >= monthStart),
  }
}

export function computeWeeklyRevenueSeries(appointments, services, now = new Date()) {
  const priceById = Object.fromEntries(services.map((s) => [s.id, s.priceCents]))
  const start = startOfWeek(now)
  return Array.from({ length: 7 }).map((_, i) => {
    const day = addDays(start, i)
    const total = appointments
      .filter((a) => a.status === 'completed' && isSameDay(a.startsAt, day))
      .reduce((sum, a) => sum + (priceById[a.serviceId] || 0), 0)
    return { day: day.toLocaleDateString('ar-EG', { weekday: 'short' }), revenue: total / 100 }
  })
}

export function mostRequestedService(appointments, services) {
  const counts = {}
  appointments.forEach((a) => {
    counts[a.serviceId] = (counts[a.serviceId] || 0) + 1
  })
  const topId = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0]
  return services.find((s) => s.id === topId) || null
}

function weekRange(now, offsetWeeks) {
  const start = addDays(startOfWeek(now), offsetWeeks * 7)
  const end = addDays(start, 7)
  return { start, end }
}

export function generateInsights(appointments, services, now = new Date()) {
  const insights = []
  const thisWeek = weekRange(now, 0)
  const lastWeek = weekRange(now, -1)
  const priceById = Object.fromEntries(services.map((s) => [s.id, s.priceCents]))

  const revenueBetween = (start, end) =>
    appointments
      .filter((a) => a.status === 'completed' && new Date(a.startsAt) >= start && new Date(a.startsAt) < end)
      .reduce((sum, a) => sum + (priceById[a.serviceId] || 0), 0)

  const revThis = revenueBetween(thisWeek.start, thisWeek.end)
  const revLast = revenueBetween(lastWeek.start, lastWeek.end)
  if (revLast > 0) {
    const pct = Math.round(((revThis - revLast) / revLast) * 100)
    if (Math.abs(pct) >= 5) {
      insights.push({
        tone: pct >= 0 ? 'positive' : 'warning',
        message: `${pct >= 0 ? 'ارتفع' : 'انخفض'} الإيراد بنسبة ${Math.abs(pct)}% مقارنة بالأسبوع الماضي.`,
      })
    }
  }

  const cancelsBetween = (start, end) =>
    appointments.filter((a) => a.status === 'cancelled' && new Date(a.startsAt) >= start && new Date(a.startsAt) < end).length
  const cThis = cancelsBetween(thisWeek.start, thisWeek.end)
  const cLast = cancelsBetween(lastWeek.start, lastWeek.end)
  if (cThis > cLast && cThis >= 2) {
    insights.push({
      tone: 'warning',
      message: 'زادت الإلغاءات هذا الأسبوع؛ يُفضّل مراجعة توقيت رسائل التذكير.',
    })
  }

  const top = mostRequestedService(appointments, services)
  if (top) {
    insights.push({ tone: 'neutral', message: `${top.name} هي الخدمة الأكثر طلبًا خلال هذه الفترة.` })
  }

  const noShows = appointments.filter(
    (a) => a.status === 'no_show' && new Date(a.startsAt) >= thisWeek.start && new Date(a.startsAt) < thisWeek.end
  ).length
  if (noShows >= 1) {
    insights.push({ tone: 'warning', message: `تم تسجيل ${noShows} حالة عدم حضور هذا الأسبوع؛ يُفضّل إرسال تأكيد أقرب إلى الموعد.` })
  }

  if (insights.length === 0) {
    insights.push({ tone: 'neutral', message: 'أداء العيادة مستقر ولا توجد تغيّرات ملحوظة هذا الأسبوع.' })
  }

  return insights
}
