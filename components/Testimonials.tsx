'use client'

export default function Testimonials() {
  const testimonials = [
    {
      company: "ADP",
      text: "We would like to thank Accredian for the wonderful support and beautiful journey.",
    },
    {
      company: "Bayer",
      text: "Accredian’s commitment to excellence is unmatched and highly reliable.",
    },
  ]

  return (
    <section id="testimonials" className="py-16 bg-white text-center">
      <h2 className="section-title">
        Testimonials from <span className="highlight">Our Partners</span>
      </h2>

      <div className="mt-10 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="card text-left">
            <h3 className="font-bold text-primary mb-2">{t.company}</h3>
            <p className="text-gray-600 text-sm">"{t.text}"</p>
          </div>
        ))}
      </div>
    </section>
  )
}