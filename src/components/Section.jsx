import { motion } from 'framer-motion'

export default function Section({ id, eyebrow, title, subtitle, children, dark = false }) {
  return (
    <section id={id} className={dark ? 'bg-black text-white' : 'bg-white text-black'}>
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          {eyebrow && (
            <div className={`mb-4 inline-flex items-center rounded-full border ${dark ? 'border-white/10 bg-white/5 text-white/70' : 'border-black/10 bg-black/5 text-black/70'} px-3 py-1 text-xs backdrop-blur`}>{eyebrow}</div>
          )}
          {title && <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">{title}</h2>}
          {subtitle && <p className={`mt-4 max-w-2xl ${dark ? 'text-white/70' : 'text-black/70'}`}>{subtitle}</p>}
        </motion.div>
        <div className="mt-12">
          {children}
        </div>
      </div>
    </section>
  )
}
