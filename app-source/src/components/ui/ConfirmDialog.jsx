import Button from './Button'

export default function ConfirmDialog({ open, title, description, confirmLabel = 'Confirm', variant = 'primary', onConfirm, onCancel }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-4">
      <div className="w-full max-w-sm rounded-card bg-paper p-6 shadow-xl">
        <h3 className="font-display text-lg text-ink">{title}</h3>
        {description && <p className="mt-2 text-sm text-ink/60">{description}</p>}
        <div className="mt-6 flex justify-end gap-2">
          <Button variant="ghost" onClick={onCancel}>Cancel</Button>
          <Button variant={variant} onClick={onConfirm}>{confirmLabel}</Button>
        </div>
      </div>
    </div>
  )
}
