import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Stats from "../components/Stats"
import Clients from "../components/Clients"
import AccredianEdge from "../components/AccredianEdge"
import CAT from "../components/CAT"
import Testimonials from "../components/Testimonials"
import FAQ from "../components/FAQ"
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <Stats />

      {/* Clients / Partnerships */}
      <Clients />

      {/* Accredian Edge + Domain + Segmentation */}
      <AccredianEdge />

      {/* CAT Framework + How it works */}
      <CAT />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </>
  )
}