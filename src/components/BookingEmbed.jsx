export default function BookingEmbed() {
  return (
    <section id="booking" className="bg-white py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-primary font-semibold text-center">
          Book now
        </p>
        <h2 className="text-3xl font-semibold text-primary-dark text-center mt-2">
          Grab your slot.
        </h2>
        <p className="text-primary-mid text-sm text-center mt-2">
          Pick a time below — it takes less than 2 minutes.
        </p>
        <div className="mt-10 border border-border-green rounded-2xl overflow-hidden">
          <iframe
            src="https://app.setmore.com/bookingpage/YOUR_SETMORE_LINK"
            width="100%"
            height="700"
            frameBorder="0"
            title="Book a slot with MintSlot"
          />
        </div>
        <p className="text-xs text-primary-mid text-center mt-4">
          Secured by Setmore · Your data stays private
        </p>
      </div>
    </section>
  )
}
