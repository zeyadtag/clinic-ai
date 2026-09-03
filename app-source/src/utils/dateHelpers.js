export const startOfDay = (d) => {
  const x = new Date(d)
  x.setHours(0, 0, 0, 0)
  return x
}

export const endOfDay = (d) => {
  const x = new Date(d)
  x.setHours(23, 59, 59, 999)
  return x
}

export const addDays = (d, n) => {
  const x = new Date(d)
  x.setDate(x.getDate() + n)
  return x
}

export const addMinutes = (d, n) => new Date(new Date(d).getTime() + n * 60000)

export const isSameDay = (a, b) =>
  new Date(a).toDateString() === new Date(b).toDateString()

export const formatDate = (d) =>
  new Date(d).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })

export const formatTime = (d) =>
  new Date(d).toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' })

export const formatDateTime = (d) => `${formatDate(d)}, ${formatTime(d)}`

export const formatMoney = (cents) =>
  (cents / 100).toLocaleString('ar-EG', { style: 'currency', currency: 'EGP' })

export const age = (dob) => {
  if (!dob) return null
  const b = new Date(dob)
  const diff = new Date() - b
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25))
}

export const startOfWeek = (d) => {
  const x = startOfDay(d)
  const day = x.getDay()
  return addDays(x, -day)
}
