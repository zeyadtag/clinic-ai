import { useEffect, useRef, useState } from 'react'
import { Mic, MicOff } from 'lucide-react'

const SpeechRecognitionAPI =
  typeof window !== 'undefined' ? window.SpeechRecognition || window.webkitSpeechRecognition : null

/**
 * A microphone button that appends transcribed speech to a text field.
 * Falls back to a disabled, titled icon when the browser has no Web Speech
 * API support — the surrounding text input keeps working as normal typing.
 */
export default function VoiceInput({ onResult, className = '' }) {
  const [listening, setListening] = useState(false)
  const recognitionRef = useRef(null)
  const supported = Boolean(SpeechRecognitionAPI)

  useEffect(() => {
    if (!supported) return
    const recognition = new SpeechRecognitionAPI()
    recognition.continuous = false
    recognition.interimResults = false
    recognition.lang = 'en-US'
    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((r) => r[0].transcript)
        .join(' ')
      onResult(transcript)
    }
    recognition.onend = () => setListening(false)
    recognition.onerror = () => setListening(false)
    recognitionRef.current = recognition
    return () => recognition.stop()
  }, [supported, onResult])

  const toggle = () => {
    if (!supported || !recognitionRef.current) return
    if (listening) {
      recognitionRef.current.stop()
      setListening(false)
    } else {
      recognitionRef.current.start()
      setListening(true)
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      disabled={!supported}
      title={supported ? 'Dictate this field' : 'Voice input not supported in this browser'}
      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors ${
        listening ? 'border-accent bg-accent-light text-accent' : 'border-line text-ink/50 hover:bg-line/30'
      } disabled:cursor-not-allowed disabled:opacity-40 ${className}`}
    >
      {supported ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
    </button>
  )
}
