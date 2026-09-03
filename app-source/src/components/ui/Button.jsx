const VARIANTS = {
  primary: 'bg-primary text-white hover:bg-primary-dark',
  accent: 'bg-accent text-white hover:brightness-95',
  ghost: 'bg-transparent text-ink hover:bg-line/40 border border-line',
  danger: 'bg-transparent text-danger border border-danger/40 hover:bg-danger/5',
  subtle: 'bg-line/40 text-ink hover:bg-line/60',
}

export default function Button({ variant = 'primary', className = '', children, ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
