import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const details = [
  { label: 'Call us', value: '+91 00000 00000' },
  { label: 'Email us', value: 'hello@mintslot.in' },
  { label: 'Visit us', value: '123 Main Street, Your City' },
  { label: 'Hours', value: 'Mon\u2013Sat, 9am\u20136pm' },
]

export default function Contact() {
  return (
    <>
      <Navbar />
      <section className="bg-surface px-6">
        <div className="max-w-3xl mx-auto text-center py-20">
          <h1 className="text-4xl font-semibold text-primary-dark">Let's talk.</h1>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            {details.map((d) => (
              <div key={d.label} className="mb-6">
                <p className="text-xs uppercase tracking-widest text-primary font-semibold">
                  {d.label}
                </p>
                <p className="text-primary-mid text-sm mt-1">{d.value}</p>
              </div>
            ))}
          </div>
          <div className="bg-border-green rounded-2xl h-80 flex items-center justify-center text-primary-mid text-sm">
            Map embed goes here
          </div>
        </div>
      </section>

      <p className="text-center text-primary-mid text-sm pb-8">
        Prefer quick contact? WhatsApp us or email directly.
      </p>

      <Footer />
    </>
  )
}
