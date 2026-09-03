import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-3 bg-base text-center">
      <p className="font-display text-5xl text-ink">404</p>
      <p className="text-ink/60">That page doesn't exist.</p>
      <Link to="/"><Button>Back home</Button></Link>
    </div>
  )
}
