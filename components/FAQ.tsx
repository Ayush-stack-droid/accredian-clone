'use client'

import { useState } from 'react'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  const faqs = [
    {
      q: "What types of corporate training programs does Accredian offer?",
      a: "We offer tailored programs across multiple industries and skill levels.",
    },
    {
      q: "What domain specializations are available?",
      a: "We provide expertise in AI, Data, Leadership, Fintech, and more.",
    },
  ]

  return (
    <section id="faqs" className="py-16 bg-gray-50">
      <h2 className="section-title">Frequently Asked Questions</h2>

      <div className="max-w-3xl mx-auto mt-8">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b py-4">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left font-semibold"
            >
              {faq.q}
            </button>
            {open === i && (
              <p className="text-gray-600 mt-2 text-sm">{faq.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}