export default function EmptyState({ icon: Icon, title, description, action, className = '' }) {
  return (
    <div className={`flex flex-col items-center justify-center gap-2 rounded-card border border-dashed border-line py-12 text-center ${className}`}>
      {Icon && <Icon className="mb-1 h-8 w-8 text-ink/30" strokeWidth={1.5} />}
      <p className="font-medium text-ink">{title}</p>
      {description && <p className="max-w-sm text-sm text-ink/60">{description}</p>}
      {action}
    </div>
  )
}
