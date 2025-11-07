import { Heart, Star, Map, Compass } from 'lucide-react'

export default function HeaderHUD({ level, hearts = 3, stars = 0 }) {
  return (
    <div className="w-full sticky top-0 z-20">
      <div className="mx-auto max-w-5xl mt-6">
        <div className="rounded-2xl border border-emerald-300/40 bg-gradient-to-r from-emerald-600/20 via-emerald-500/20 to-emerald-600/20 backdrop-blur-sm shadow-lg">
          <div className="flex items-center justify-between px-5 py-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-emerald-900">
                <Map className="h-5 w-5" />
                <span className="font-semibold">Level {level}</span>
              </div>
              <span className="text-emerald-900/40">|</span>
              <div className="flex items-center gap-2 text-emerald-900">
                <Compass className="h-5 w-5" />
                <span className="font-medium">Adventure Mode</span>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-1 text-emerald-900">
                {Array.from({ length: 3 }).map((_, i) => (
                  <Heart
                    key={i}
                    className={`h-5 w-5 ${i < hearts ? 'fill-emerald-600 text-emerald-600' : 'text-emerald-300'}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-1 text-emerald-900">
                <Star className="h-5 w-5 text-amber-500 fill-amber-500" />
                <span className="font-semibold">{stars}</span>
              </div>
            </div>
          </div>
          <div className="px-5 pb-3">
            <div className="h-2 w-full overflow-hidden rounded-full bg-emerald-200">
              <div
                className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600"
                style={{ width: `${Math.min(level * 25, 100)}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
