import { useCallback, useMemo, useState } from 'react'
import HeaderHUD from './components/HeaderHUD'
import Slide from './components/Slide'
import AdventureControls from './components/AdventureControls'
import Scene from './components/Scene'
import { Sparkles } from 'lucide-react'

function App() {
  const [index, setIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  const slides = useMemo(
    () => [
      {
        title: 'Welcome to Emerald Quest',
        description:
          'Begin your journey through lush valleys and ancient ruins. Collect stars, unlock secrets, and level up as you explore the realm.',
        cta: (
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-white shadow hover:bg-emerald-700">
              <Sparkles className="h-4 w-4" /> Start Adventure
            </button>
            <button className="rounded-xl border border-emerald-300/60 bg-white/80 px-5 py-3 text-emerald-900 shadow hover:bg-emerald-50">
              Learn More
            </button>
          </div>
        ),
        image: <Scene />,
      },
      {
        title: 'Choose Your Path',
        description:
          'Each slide is a new chapter. Pick challenges, solve riddles, and climb the leaderboards in a playful, game-inspired interface.',
        cta: (
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded-xl bg-emerald-700 px-5 py-3 text-white shadow hover:bg-emerald-800">
              Forest Route
            </button>
            <button className="rounded-xl bg-emerald-500 px-5 py-3 text-white shadow hover:bg-emerald-600">
              Mountain Pass
            </button>
            <button className="rounded-xl border border-emerald-300/60 bg-white/80 px-5 py-3 text-emerald-900 shadow hover:bg-emerald-50">
              Secret Cave
            </button>
          </div>
        ),
        image: (
          <div className="w-full h-full bg-gradient-to-br from-emerald-200 to-emerald-300" />
        ),
      },
      {
        title: 'Earn Rewards',
        description:
          'Collect hearts and stars as you complete tasks. Unlock badges and cosmetics to customize your avatar and banner.',
        cta: (
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded-xl bg-amber-500 px-5 py-3 text-white shadow hover:bg-amber-600">
              View Achievements
            </button>
            <button className="rounded-xl border border-emerald-300/60 bg-white/80 px-5 py-3 text-emerald-900 shadow hover:bg-emerald-50">
              Invite Friends
            </button>
          </div>
        ),
        image: (
          <div className="relative h-full w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-emerald-300" />
            <div className="absolute inset-6 rounded-xl border border-amber-300/60 bg-white/70 backdrop-blur-md flex items-center justify-center text-amber-700 font-bold">
              Treasure Chest
            </div>
          </div>
        ),
      },
      {
        title: 'Team Up',
        description:
          'Form parties, chat, and tackle quests together. Cooperative play boosts your rewards and unlocks team-only areas.',
        cta: (
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded-xl bg-emerald-600 px-5 py-3 text-white shadow hover:bg-emerald-700">
              Create Party
            </button>
            <button className="rounded-xl border border-emerald-300/60 bg-white/80 px-5 py-3 text-emerald-900 shadow hover:bg-emerald-50">
              Join Guild
            </button>
          </div>
        ),
        image: (
          <div className="grid h-full w-full grid-cols-3 gap-3 p-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="rounded-xl border border-emerald-300/60 bg-emerald-50/80"
              />
            ))}
          </div>
        ),
      },
    ],
    []
  )

  const onNext = useCallback(() => setIndex((i) => (i + 1) % slides.length), [slides.length])
  const onPrev = useCallback(() => setIndex((i) => (i - 1 + slides.length) % slides.length), [slides.length])

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-emerald-100 to-emerald-200">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-emerald-300/40 blur-3xl" />
        <div className="absolute top-1/3 -right-20 h-72 w-72 rounded-full bg-emerald-400/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
      </div>

      <HeaderHUD level={index + 1} hearts={3} stars={index * 2} />

      <main className="relative z-10 mx-auto max-w-5xl px-6 py-8">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-extrabold tracking-tight text-emerald-900">
            Adventure Hub
          </h1>
          <AdventureControls
            onPrev={onPrev}
            onNext={onNext}
            autoPlay={autoPlay}
            setAutoPlay={setAutoPlay}
          />
        </div>

        <div className="relative">
          {slides.map((s, i) => (
            <Slide key={s.title} {...s} active={i === index} />
          ))}
        </div>

        <div className="mt-5 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-8 rounded-full transition-all ${
                index === i ? 'bg-emerald-600' : 'bg-emerald-300 hover:bg-emerald-400'
              }`}
            />
          ))}
        </div>
      </main>

      <footer className="relative z-10 mx-auto max-w-5xl px-6 pb-10 pt-4 text-center text-emerald-900/70">
        Built as a playful, game-like prototype in a fresh green vibe.
      </footer>
    </div>
  )
}

export default App
