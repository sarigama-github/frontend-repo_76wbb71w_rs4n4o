import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Amelia R.',
    role: 'VP Marketing, Fintech',
    quote:
      'WebOsmos delivered a flawless product. Elegant, fast, and conversion-focused. Our team loved the process and results.',
  },
  {
    name: 'David K.',
    role: 'Founder, SaaS',
    quote:
      'Truly premium experience. The design and engineering quality rivals top global studios. Highly recommended.',
  },
  {
    name: 'Priya N.',
    role: 'Head of Growth, D2C',
    quote:
      'From strategy to launch, they nailed it. Performance improved, brand perception elevated, and revenue followed.',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const next = () => setIndex((i) => (i + 1) % testimonials.length)
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

  return (
    <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white p-8 dark:bg-black dark:border-white/10">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-indigo-500/0 via-fuchsia-500/0 to-amber-400/0" />
      <div className="flex items-center justify-between">
        <button onClick={prev} className="p-2 text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white">
          <ChevronLeft />
        </button>
        <div className="max-w-3xl text-center">
          <div className="mb-3 flex items-center justify-center gap-1 text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`h-5 w-5 ${i < 5 ? 'fill-current' : ''}`} />
            ))}
          </div>
          <p className="text-lg leading-relaxed text-black/80 dark:text-white/80">“{testimonials[index].quote}”</p>
          <div className="mt-4 text-sm text-black/60 dark:text-white/60">
            {testimonials[index].name} — {testimonials[index].role}
          </div>
        </div>
        <button onClick={next} className="p-2 text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white">
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}
