import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="bg-surface min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
          Appointments made simple
        </p>
        <h1 className="text-5xl md:text-6xl font-semibold text-primary-dark leading-tight">
          Your slot is waiting.
        </h1>
        <p className="text-primary-mid text-base mt-4 leading-relaxed">
          MintSlot makes booking appointments effortless. No calls, no waiting — just pick your time and go.
        </p>
        <div className="mt-8 gap-4 flex flex-wrap justify-center">
          <a
            href="#booking"
            className="bg-primary text-white rounded-full px-7 py-3 font-semibold hover:bg-primary-dark transition"
          >
            Book My Slot
          </a>
          <a
            href="#how-it-works"
            className="border border-primary text-primary rounded-full px-7 py-3 font-semibold hover:bg-white transition"
          >
            See how it works
          </a>
        </div>
        <div className="mt-10 flex gap-6 justify-center flex-wrap text-sm text-primary-mid">
          <span>✓ Free to book</span>
          <span>✓ Instant confirmation</span>
          <span>✓ Easy rescheduling</span>
        </div>
      </div>
    </section>
  )
}
