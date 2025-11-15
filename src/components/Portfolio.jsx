import { motion } from 'framer-motion'

const items = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  title: `Project ${i + 1}`,
  img: `https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1500&auto=format&fit=crop`,
}))

export default function Portfolio() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, i) => (
        <motion.a
          key={item.id}
          href="#"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white dark:bg-black dark:border-white/10"
        >
          <img src={item.img} alt={item.title} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition">
            <div className="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-black backdrop-blur">{item.title}</div>
          </div>
        </motion.a>
      ))}
    </div>
  )
}
