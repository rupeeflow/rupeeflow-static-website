'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Container from '@/components/ui/Container'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const creditCards = [
  {
    title: 'Merchant Cash Advance',
    desc: '10k–5L based on daily UPI collections. 3 minute approval, auto-repay from sales.',
    icon: '/credit/merchant-cash-advance.svg',
  },
  {
    title: 'Invoice Financing',
    desc: '1L–50L for unpaid B2B invoices. Get 80% upfront, 24 hour approval.',
    icon: '/credit/invoicing-financing.svg',
  },
  {
    title: 'NRI Emergency Loans',
    desc: '50K–10L for family in India. Apply in 12 languages, pay only when used.',
    icon: '/credit/nri-emergency-loans.svg',
  },
  {
    title: 'Personal Credit Line',
    desc: '5k–50K revolving credit, voice-enabled. Apply in 12 languages.',
    icon: '/credit/personal-credit-line.svg',
  },
]

export default function GetCredit() {
  const sectionRef = useRef<HTMLElement>(null)

  // useGSAP(() => {
  //   // Pill slides in from the left
  //   gsap.from('.gc-pill', {
  //     x: -60,
  //     opacity: 0,
  //     duration: 0.75,
  //     ease: 'power3.out',
  //     scrollTrigger: {
  //       trigger: '.gc-pill',
  //       start: 'top 90%',
  //       once: true,
  //     },
  //   })

  //   // Cards stagger up
  //   gsap.from('.gc-card', {
  //     y: 50,
  //     opacity: 0,
  //     duration: 0.65,
  //     stagger: 0.12,
  //     ease: 'power2.out',
  //     scrollTrigger: {
  //       trigger: '.gc-cards',
  //       start: 'top 85%',
  //       once: true,
  //     },
  //   })
  // }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="relative bg-black pt-10 md:pt-15 pb-16 md:pb-24 overflow-hidden">
      <Container className="relative">
        {/* ================= TOP VISUAL BLOCK ================= */}
        <div className="relative h-[90px] sm:h-[120px] md:h-[200px] mb-8 sm:mb-12 md:mb-16 px-4 md:px-0">
          {/* GET CREDIT Pill */}
          <div className="gc-pill absolute left-0 top-[40px] sm:top-[60px] md:top-40 w-[260px] sm:w-[320px] h-[46px] sm:h-[60px] z-10">
            <div className="absolute inset-0 rounded-[18px] rounded-tr-[260px] sm:rounded-tr-[320px] bg-gradient-to-r from-[#055949] to-[#109F58]" />
            <span className="absolute left-5 sm:left-8 top-1/2 -translate-y-1/2 text-white text-[14px] sm:text-[20px] font-semibold">
              GET CREDIT
            </span>
          </div>

          {/* Man - Hidden on mobile */}
          <Image
            src="/home/mencc.png"
            alt="man"
            width={525}
            height={525}
            priority
            className="hidden md:block absolute right-[71px] -top-[45px] z-0 pointer-events-none"
          />
        </div>

        {/* ================= CARDS ================= */}
        <div className="gc-cards grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-10 md:gap-y-12 relative z-50 px-4 md:px-0">
          {creditCards.map((card, i) => (
            <div
              key={i}
              className="gc-card group relative min-h-[200px] md:h-[240px] flex flex-col backdrop-blur-sm rounded-2xl p-5 md:p-6 overflow-hidden transition-all duration-300 ease-in-out hover:shadow-[0_0_40px_rgba(83,190,194,0.3)] hover:-translate-y-1"
              style={{ background: '#122427BF' }}
            >
              {/* White border that becomes gradient on hover */}
              <div className="absolute inset-0 rounded-2xl p-[2px] transition-all duration-300 ease-in-out bg-gradient-to-r from-white/20 via-white/20 to-white/20 group-hover:from-[#53BEC2] group-hover:via-[#00EF64] group-hover:to-[#53BEC2]">
                <div
                  className="h-full w-full rounded-2xl transition-all duration-300 ease-in-out"
                  style={{ background: '#122427BF' }}
                />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                <Image
                  src={card.icon}
                  alt=""
                  width={48}
                  height={48}
                  className="absolute top-0 right-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 transition-transform duration-300 ease-in-out group-hover:scale-110"
                />

                <h3 className="text-white text-lg md:text-xl font-semibold pr-12 transition-colors duration-300 ease-in-out group-hover:text-[#30f3bc]">
                  {card.title}
                </h3>

                <p className="text-gray-400 text-sm mt-2 leading-relaxed pr-2 md:max-w-[85%] transition-colors duration-300 ease-in-out group-hover:text-gray-300">
                  {card.desc}
                </p>

                <div className="mt-auto pt-4">
                  <button className="rounded-full px-5 md:px-6 py-2 text-xs md:text-sm font-medium flex items-center gap-2 bg-gradient-to-r from-[#054C38] to-[#2AB871] text-white transition-all duration-300 ease-in-out group-hover:bg-gradient-to-r group-hover:from-[#53BEC2] group-hover:to-[#00EF64] group-hover:text-black">
                    <span className="flex items-center gap-2">Apply now →</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
