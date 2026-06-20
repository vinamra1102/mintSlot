export default function CTABanner() {
  return (
    <section className="bg-primary py-16 px-6 text-center">
      <h2 className="text-3xl font-semibold text-white">
        Ready to claim your slot?
      </h2>
      <p className="text-green-100 text-sm mt-3">
        Join hundreds of clients who book with MintSlot every month.
      </p>
      <a
        href="#booking"
        className="inline-block bg-white text-primary font-semibold rounded-full px-8 py-3 mt-8 hover:bg-surface transition"
      >
        Book My Slot
      </a>
    </section>
  )
}
