import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 backdrop-blur-xl bg-black/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="group inline-flex items-center space-x-2">
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400">
              <Sparkles className="h-4 w-4 text-white" />
            </span>
            <span className="text-white font-semibold tracking-wide group-hover:opacity-90 transition">WebOsmos</span>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-white/80 hover:text-white transition">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-full bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-white/90 transition">
              Let's Build Together
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="rounded-lg px-3 py-2 text-white/80 hover:text-white hover:bg-white/5 transition" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="mt-2 inline-flex items-center justify-center rounded-full bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-white/90 transition" onClick={() => setOpen(false)}>
                Let's Build Together
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
