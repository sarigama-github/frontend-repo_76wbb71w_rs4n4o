import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />

      <Section id="about" dark eyebrow="The Essence" title="WebOsmos" subtitle="We are a premium, future-forward digital studio crafting world-class experiences for ambitious brands.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <p className="text-white/80 leading-relaxed">From concept to launch and beyond, we blend creativity with engineering excellence. Our work is defined by polish, performance, and a relentless focus on impact. Think global. Build premium. Ship beautiful.</p>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/10 to-amber-400/10 p-6">
            <ul className="grid grid-cols-2 gap-4 text-sm text-white/80">
              <li className="rounded-xl bg-white/5 p-4">10+ years collective experience</li>
              <li className="rounded-xl bg-white/5 p-4">Design systems & brand elevation</li>
              <li className="rounded-xl bg-white/5 p-4">Performance-first engineering</li>
              <li className="rounded-xl bg-white/5 p-4">End-to-end delivery</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="services" eyebrow="Capabilities" title="Services" subtitle="A tight suite of offerings designed to create measurable business value.">
        <Services />
      </Section>

      <Section id="portfolio" dark eyebrow="Selected Work" title="Portfolio" subtitle="A snapshot of recent builds. Ask for the private deck for more.">
        <Portfolio />
      </Section>

      <Section id="why-us" eyebrow="Differentiators" title="Why Choose Us" subtitle="Premium standards. Strategic thinking. Reliable delivery.">
        <WhyUs />
      </Section>

      <Section id="testimonials" dark eyebrow="Social Proof" title="Testimonials" subtitle="Trusted by founders, executives, and global teams.">
        <Testimonials />
      </Section>

      <div className="bg-black py-6">
        <div className="mx-auto max-w-7xl px-6">
          <CTA />
        </div>
      </div>

      <Section id="contact" eyebrow="Get in Touch" title="Contact" subtitle="Tell us about your vision. We’ll craft the plan and bring it to life.">
        <Contact />
      </Section>

      <footer className="border-t border-white/10 bg-black/60">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between text-sm text-white/60">
          <div>© {new Date().getFullYear()} WebOsmos. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#portfolio" className="hover:text-white">Portfolio</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
