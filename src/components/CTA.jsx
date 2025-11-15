export default function CTA() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600 via-fuchsia-600 to-amber-500 p-[1px]">
      <div className="rounded-3xl bg-black p-8 sm:p-12">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <div className="mb-3 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
              The Next Leap
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-white">Expand Your Digital Universe with WebOsmos</h3>
            <p className="mt-2 text-white/70 max-w-xl">Partner with a team that crafts premium, future-proof experiences built to scale globally.</p>
          </div>
          <a href="#contact" className="inline-flex items-center rounded-full bg-white text-black px-6 py-3 font-semibold hover:bg-white/90 transition">
            Let's Build Together
          </a>
        </div>
      </div>
    </div>
  )
}
