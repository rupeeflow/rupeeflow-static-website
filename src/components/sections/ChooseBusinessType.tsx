'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

gsap.registerPlugin(useGSAP)

const businessCards = [
  {
    title: 'MSME / SMBs',
    items: ['Payment Gateway', 'Bulk Payouts', 'Invoice Financing', 'Business Current Account'],
    image: '/business/msme.svg',
    active: true,
    link: '/solutions/msme',
  },
  {
    title: 'Kirana Store / Small Merchant',
    items: ['Kirana POS', 'Merchant Cash', 'Bill Payments', 'Voice Payments'],
    image: '/business/kirana.svg',
    link: '/solutions/kirana',
  },
  {
    title: 'NRI / Overseas Indian',
    items: ['Cross-border Remittance', 'NRI Emergency Loans', 'Direct bill Payments to India', 'Multi-currency support'],
    image: '/business/nri.svg',
    link: '/solutions/nri',
  },
  {
    title: 'Developer / Platform',
    items: ['Payment Gateway APIs', 'Payouts APIs', 'Verification APIs', 'Banking-as-a-Service'],
    image: '/business/developer.svg',
    link: '/solutions/developer',
  },
]

export default function ChooseBusinessType() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    // Heading fades up
    gsap.fromTo('.cbt-heading',
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.65, ease: 'power2.out',
        scrollTrigger: { trigger: '.cbt-heading', start: 'top 92%', once: true },
      }
    )

    // Cards stagger up
    gsap.fromTo('.cbt-card',
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: '.cbt-cards', start: 'top 92%', once: true },
      }
    )

    ScrollTrigger.refresh()
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="relative bg-white py-8 overflow-hidden">

      {/* BIG WAVE — hidden on mobile to avoid overflow */}
      <Image
        src="/wave.png"
        alt="wave"
        width={1500}
        height={200}
        className="absolute top-[160px] left-0 w-[1500px] z-[1] pointer-events-none hidden md:block"
      />

      {/* CONTENT */}
      <div className="relative z-[10] max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">

        {/* Heading */}
        <div className="cbt-heading text-center text-black mb-8 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Choose Your Business Type
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Which option best describe your business?
          </p>
        </div>

        {/* Cards — single col on mobile, 2 cols on sm+ */}
        <div className="cbt-cards grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 md:gap-10">
          {businessCards.map((card, i) => (
            <div
              key={i}
              className={`cbt-card relative rounded-[18px] sm:rounded-[22px] border p-5 sm:p-7 md:p-10 min-h-[200px] sm:min-h-[260px] overflow-hidden
              ${
                card.active
                  ? 'border-emerald-500 border-2 bg-white'
                  : 'border-gray-300 bg-white/70 backdrop-blur-[12px]'
              }`}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 pr-28 sm:pr-32 md:pr-40 text-black">
                {card.title}
              </h3>

              <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base pr-28 sm:pr-32 md:pr-40">
                {card.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Card image — repositioned for mobile */}
              <Image
                src={card.image}
                alt={card.title}
                width={180}
                height={180}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-[100px] sm:w-[130px] md:w-[160px] pointer-events-none"
              />

              <Link
                href={card.link}
                className="mt-5 sm:mt-0 sm:absolute sm:bottom-4 sm:right-6 z-20
                           inline-flex items-center gap-2
                           px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm
                           bg-gradient-to-r from-[#054C38] to-[#2AB871]
                           text-white
                           transition-all duration-300
                           hover:scale-105 hover:shadow-lg
                           active:scale-95"
              >
                See Solution →
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
