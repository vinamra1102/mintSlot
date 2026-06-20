export default function TrustBar() {
  const stats = [
    { number: '500+', label: 'Slots booked' },
    { number: '4.9★', label: 'Average rating' },
    { number: '2 min', label: 'To book a slot' },
  ]

  return (
    <section className="bg-white py-12 border-y border-border-green">
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-center gap-12 flex-wrap">
        {stats.map((stat, i) => (
          <div key={i} className="flex items-center gap-12">
            <div className="text-center">
              <p className="text-3xl font-semibold text-primary">{stat.number}</p>
              <p className="text-sm text-primary-mid mt-1">{stat.label}</p>
            </div>
            {i < stats.length - 1 && (
              <div className="hidden md:block w-px bg-border-green h-10" />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
