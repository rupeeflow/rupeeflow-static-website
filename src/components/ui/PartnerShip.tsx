'use client'
import Image from 'next/image'

export default function PartnershipSection() {
  // You can easily add or remove partners here ↓
  const partners = [
    { name: 'UPI', logo: '/partners/upi.png' },
    { name: 'BBPS', logo: '/partners/bbps.png' },
    { name: 'NPCI', logo: '/partners/npci.png' },
    { name: 'RBI', logo: '/partners/rbi.png' },
  ]

  return (
    <section className="relative overflow-hidden py-16 bg-white">
      {/* Optional radial glow */}

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 ">
          In Partnership with
        </h2>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 md:gap-14 max-w-6xl">
          {partners.map(partner => (
            <div
              key={partner.name}
              className="flex items-center justify-center w-28 md:w-36 transition-transform hover:scale-105"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={150}
                height={60}
                className="object-contain w-full h-auto"
              />
            </div>
          ))}
        </div>

        <p className="mt-10 text-md text-gray-700 ">
          Backed by trusted institutions and leading technology partners
        </p>
      </div>
    </section>
  )
}
