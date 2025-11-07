import { motion, AnimatePresence } from 'framer-motion'

export default function Slide({ title, description, cta, image, active }) {
  return (
    <AnimatePresence mode="wait">
      {active && (
        <motion.div
          key={title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="rounded-3xl border border-emerald-300/40 bg-white/70 backdrop-blur-md p-6 md:p-10 shadow-xl"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-emerald-900">
                {title}
              </h2>
              <p className="mt-4 text-emerald-800/80 text-lg leading-relaxed">
                {description}
              </p>
              {cta}
            </div>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-emerald-300/40 bg-gradient-to-br from-emerald-100 to-emerald-200">
              {image}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
