export default function LoadingSpinner({ label = 'Loading…' }) {
  return (
    <div className="flex items-center gap-3 py-10 text-ink/60">
      <span className="h-4 w-4 animate-spin rounded-full border-2 border-line border-t-primary" />
      <span className="text-sm">{label}</span>
    </div>
  )
}
