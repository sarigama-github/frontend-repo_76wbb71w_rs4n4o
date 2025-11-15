import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/er66D6jbuo0hIjmn/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/80 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            Premium Digital Agency
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold leading-tight tracking-tight">
            Creativity. Code. Cosmos.
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl">
            WebOsmos crafts world-class digital experiences that feel effortless and look extraordinary.
            We blend strategy, design, and engineering to help brands expand their digital universe.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <a href="#contact" className="group inline-flex items-center rounded-full bg-white text-black px-6 py-3 font-semibold transition hover:bg-white/90">
              Let's Build Together
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#portfolio" className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
              View Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
