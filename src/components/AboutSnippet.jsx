import { Link } from 'react-router-dom'

export default function AboutSnippet() {
  return (
    <section className="bg-surface py-20 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs uppercase tracking-widest text-primary font-semibold">
            About MintSlot
          </p>
          <h2 className="text-3xl font-semibold text-primary-dark mt-2">
            Built for people who value their time.
          </h2>
          <p className="text-primary-mid text-base mt-4 leading-relaxed">
            MintSlot was built to remove the friction from booking appointments. We connect clients with service providers in seconds, not minutes.
          </p>
          <p className="text-primary-mid text-base mt-3 leading-relaxed">
            No phone tag. No hold music. Just a clean, fast booking experience that works on any device.
          </p>
          <Link
            to="/about"
            className="text-primary font-semibold mt-6 inline-block hover:underline"
          >
            Meet the team →
          </Link>
        </div>
        <div className="bg-border-green rounded-2xl h-72 w-full flex items-center justify-center text-primary-mid text-sm">
          Owner photo
        </div>
      </div>
    </section>
  )
}
