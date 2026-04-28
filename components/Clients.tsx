import Image from "next/image"

const clients = [
  { name: "Reliance", src: "/logos/reliance.png" },
  { name: "HCL", src: "/logos/hcl.png" },
  { name: "IBM", src: "/logos/ibm.png" },
  { name: "CRIF", src: "/logos/crif.png" },
  { name: "ADP", src: "/logos/adp.png" },
  { name: "Bayer", src: "/logos/bayer.png" },
]

export default function Clients() {
  return (
    <section id="clients" className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold">
        Our Proven <span className="text-blue-600">Partnerships</span>
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-12 mt-10">
        {clients.map((client) => (
          <div key={client.name} className="w-32 h-16 relative">
            <Image
              src={client.src}
              alt={client.name}
              fill
              className="object-contain transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  )
}