export default function BookingEmbed() {
  const steps = [
    { label: 'Pick a date', desc: 'Choose any available slot' },
    { label: 'Fill details', desc: 'Name, phone, email only' },
    { label: 'Get confirmed', desc: 'Instant email confirmation' },
  ]

  return (
    <section id="booking" className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-primary font-semibold text-center">
          Book now
        </p>
        <h2 className="text-3xl font-semibold text-primary-dark text-center mt-2">
          Grab your slot.
        </h2>
        <p className="text-primary-mid text-sm text-center mt-2">
          Pick a time below — it takes less than 2 minutes.
        </p>

        <div className="bg-surface rounded-2xl border border-border-green p-6 max-w-4xl mx-auto mb-6 mt-8">
          <div className="grid grid-cols-3 gap-4 text-center">
            {steps.map((step, i) => (
              <div key={step.label} className={i < 2 ? 'md:border-r border-border-green' : ''}>
                <span className="text-primary text-xl">●</span>
                <p className="text-xs uppercase tracking-widest text-primary font-semibold mt-2">{step.label}</p>
                <p className="text-xs text-primary-mid mt-1">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto border border-border-green rounded-3xl overflow-hidden p-2">
          <iframe
            src="https://demoproject.setmore.com"
            width="100%"
            height="750"
            frameBorder="0"
            title="Book a slot with MintSlot"
            style={{ display: 'block' }}
          />
        </div>

        <div className="flex items-center gap-3 mt-4 max-w-4xl mx-auto">
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
