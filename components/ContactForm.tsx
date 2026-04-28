'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
  })

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const res = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    const data = await res.json()
    alert(data.message)
  }

  return (
    <section id="contact" className="py-20 bg-white text-center">
      <h2 className="section-title">Get in Touch</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-8 flex flex-col gap-4"
      >
        <input
          placeholder="Name"
          className="border p-3 rounded"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Email"
          className="border p-3 rounded"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          placeholder="Company"
          className="border p-3 rounded"
          onChange={(e) => setForm({ ...form, company: e.target.value })}
        />

        <button className="btn-primary">Submit</button>
      </form>
    </section>
  )
}