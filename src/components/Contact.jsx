import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const data = Object.fromEntries(form.entries())
    setStatus('Sending...')
    try {
      // This demo just simulates a send. Hook up to backend/email later.
      await new Promise((res) => setTimeout(res, 800))
      setStatus('Thanks! We will get back to you shortly.')
      e.currentTarget.reset()
    } catch (e) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <form onSubmit={handleSubmit} className="rounded-2xl border border-black/10 bg-white p-6 dark:bg-black dark:border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-black/70 dark:text-white/70">Name</label>
              <input name="name" required className="mt-1 w-full rounded-lg border border-black/10 bg-transparent px-3 py-2 text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm text-black/70 dark:text-white/70">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-lg border border-black/10 bg-transparent px-3 py-2 text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" placeholder="you@company.com" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm text-black/70 dark:text-white/70">Message</label>
            <textarea name="message" rows="5" required className="mt-1 w-full rounded-lg border border-black/10 bg-transparent px-3 py-2 text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" placeholder="Tell us about your project..." />
          </div>
          <div className="mt-6 flex items-center gap-4">
            <button className="inline-flex items-center rounded-full bg-black text-white px-6 py-3 font-semibold dark:bg-white dark:text-black hover:opacity-90 transition">Send Inquiry</button>
            <div className="text-sm text-black/60 dark:text-white/60">{status}</div>
          </div>
        </form>
      </div>
      <div className="rounded-2xl border border-black/10 bg-white p-6 dark:bg-black dark:border-white/10">
        <h4 className="text-lg font-semibold">Contact</h4>
        <p className="mt-2 text-black/70 dark:text-white/70">business@webosmos.com</p>
        <div className="mt-4 text-sm text-black/60 dark:text-white/60">Follow</div>
        <div className="mt-2 flex items-center gap-3 text-sm text-black/70 dark:text-white/70">
          <a href="#" className="hover:opacity-80">Twitter/X</a>
          <span>•</span>
          <a href="#" className="hover:opacity-80">LinkedIn</a>
          <span>•</span>
          <a href="#" className="hover:opacity-80">Instagram</a>
        </div>
      </div>
    </div>
  )
}
