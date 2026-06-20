export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Pick your slot',
      desc: 'Browse available times and choose one that fits your schedule.',
    },
    {
      num: '02',
      title: 'Enter your details',
      desc: 'Just your name, phone, and email. Done in under a minute.',
    },
    {
      num: '03',
      title: "You're confirmed",
      desc: 'Get an instant confirmation to your inbox. No follow-up needed.',
    },
  ]

  return (
    <section id="how-it-works" className="bg-surface py-20 px-6">
      <div id="services" className="max-w-4xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-primary font-semibold text-center">
          How it works
        </p>
        <h2 className="text-3xl font-semibold text-primary-dark text-center mt-2">
          Book in three simple steps.
        </h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="bg-white border border-border-green rounded-2xl p-8">
              <p className="text-5xl font-semibold text-muted leading-none">{step.num}</p>
              <h3 className="text-lg font-semibold text-primary-dark mt-4">{step.title}</h3>
              <p className="text-sm text-primary-mid mt-2 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
