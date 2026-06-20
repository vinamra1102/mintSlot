export default function BookingEmbed() {
  const pills = [
    { text: 'Instant confirmation' },
    { text: 'Free to book' },
    { text: 'No account needed' },
  ]

  return (
    <section id="booking" className="bg-surface py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-primary font-semibold text-center">
          Book now
        </p>
        <h2 className="text-3xl font-semibold text-primary-dark text-center mt-2">
          Grab your slot.
        </h2>
        <p className="text-primary-mid text-sm text-center mt-2">
          Pick a time below — it takes less than 2 minutes.
        </p>

        <div className="flex items-center justify-center gap-3 mt-6 mb-10">
          {pills.map((pill) => (
            <div
              key={pill.text}
              className="border border-border-green rounded-full px-4 py-1.5 text-xs font-medium text-primary-mid bg-white"
            >
              <span className="text-primary">●</span> {pill.text}
            </div>
          ))}
        </div>

        <div className="bg-white border border-border-green rounded-3xl overflow-hidden p-2">
          <div className="rounded-2xl overflow-hidden">
            <iframe
              src="https://demoproject.setmore.com"
              width="100%"
              height="680"
              frameBorder="0"
              title="Book a slot with MintSlot"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 mt-4">
          <div className="flex-1 h-px bg-border-green" />
          <span className="text-xs text-primary-mid flex-shrink-0">
            Secured by Setmore · Your data stays private
          </span>
          <div className="flex-1 h-px bg-border-green" />
        </div>
      </div>
    </section>
  )
}
