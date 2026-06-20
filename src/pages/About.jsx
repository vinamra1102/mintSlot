import Navbar from '../components/Navbar'
import CTABanner from '../components/CTABanner'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Navbar />
      <section className="bg-surface py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-primary-dark leading-tight">
            We built MintSlot so booking never gets in the way.
          </h1>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary-mid text-base leading-relaxed">
              MintSlot started with a simple observation: booking appointments should not feel like a chore. We saw businesses losing clients to clunky calendars and endless email threads, so we set out to build something better.
            </p>
            <p className="text-primary-mid text-base mt-4 leading-relaxed">
              Our platform strips away the friction. Clients see real-time availability, book in seconds, and get instant confirmations — no sign-up required. For service providers, MintSlot means fewer no-shows and more time for what matters.
            </p>
            <p className="text-primary-mid text-base mt-4 leading-relaxed">
              Today, MintSlot helps dozens of businesses across India manage their appointments. We are a small, focused team that believes great software should feel like it disappears.
            </p>
          </div>
          <div className="bg-border-green rounded-2xl h-72 w-full flex items-center justify-center text-primary-mid text-sm">
            Team photo
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </>
  )
}
