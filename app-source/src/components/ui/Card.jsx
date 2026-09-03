export default function Card({ children, className = '', padded = true }) {
  return (
    <div className={`rounded-card border border-line bg-paper shadow-[0_12px_32px_rgba(0,0,0,.14)] transition hover:-translate-y-0.5 hover:border-primary/35 ${padded ? 'p-5' : ''} ${className}`}>
      {children}
    </div>
  )
}
