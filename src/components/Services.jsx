import { Code2, Smartphone, Search, Palette, PenSquare, Database } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  { icon: Code2, title: 'Web Development', desc: 'High-performance websites with elegant UX and robust engineering.' },
  { icon: Smartphone, title: 'App Development', desc: 'iOS/Android apps with sleek UI, native feel, and scalable stacks.' },
  { icon: Search, title: 'SEO & Digital Marketing', desc: 'Organic growth strategies, analytics, and conversion optimization.' },
  { icon: Palette, title: 'Graphic Designing', desc: 'Branding, visual identity, and design systems that stand out.' },
  { icon: PenSquare, title: 'Content Writing', desc: 'Compelling copy, UX writing, and storytelling that converts.' },
  { icon: Database, title: 'Data Entry', desc: 'Accurate, secure, and efficient data operations at scale.' },
]

export default function Services() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((s, i) => (
        <motion.div
          key={s.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-lg transition dark:bg-black dark:border-white/10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-fuchsia-500/0 to-amber-400/0 group-hover:from-indigo-500/10 group-hover:via-fuchsia-500/5 group-hover:to-amber-400/10 pointer-events-none" />
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white dark:bg-white dark:text-black">
            <s.icon className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
          <p className="mt-2 text-black/70 dark:text-white/70">{s.desc}</p>
        </motion.div>
      ))}
    </div>
  )
}
