import { ShieldCheck, Crown, Globe2, Rocket } from 'lucide-react'

const points = [
  { icon: Crown, title: 'Premium Quality', desc: 'Meticulous attention to detail, pixel-perfect execution, and robust engineering.' },
  { icon: ShieldCheck, title: 'Trusted Delivery', desc: 'Clear communication, reliable timelines, and ongoing support.' },
  { icon: Rocket, title: 'Innovation-First', desc: 'We blend strategy, design, and emerging tech for meaningful impact.' },
  { icon: Globe2, title: 'Global Approach', desc: 'Built for international audiences with performance, accessibility, and scale.' },
]

export default function WhyUs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {points.map((p) => (
        <div key={p.title} className="flex items-start gap-4 rounded-2xl border border-black/10 bg-white p-6 dark:bg-black dark:border-white/10">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white dark:bg-white dark:text-black">
            <p.icon className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-1 text-black/70 dark:text-white/70">{p.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
