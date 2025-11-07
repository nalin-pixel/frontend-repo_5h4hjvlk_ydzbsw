import { ArrowLeft, ArrowRight, Play, Pause } from 'lucide-react'
import { useEffect } from 'react'

export default function AdventureControls({ onPrev, onNext, autoPlay, setAutoPlay }) {
  useEffect(() => {
    if (!autoPlay) return
    const t = setInterval(() => onNext(), 4000)
    return () => clearInterval(t)
  }, [autoPlay, onNext])

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={onPrev}
        className="inline-flex items-center gap-2 rounded-xl border border-emerald-300/50 bg-white/80 px-4 py-2 text-emerald-900 shadow hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-400"
      >
        <ArrowLeft className="h-4 w-4" />
        Prev
      </button>
      <button
        onClick={() => setAutoPlay((v) => !v)}
        className="inline-flex items-center gap-2 rounded-xl border border-emerald-300/50 bg-white/80 px-4 py-2 text-emerald-900 shadow hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-400"
      >
        {autoPlay ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        {autoPlay ? 'Pause' : 'Play'}
      </button>
      <button
        onClick={onNext}
        className="inline-flex items-center gap-2 rounded-xl border border-emerald-300/50 bg-white/80 px-4 py-2 text-emerald-900 shadow hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-400"
      >
        Next
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  )
}
