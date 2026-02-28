'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Container from '@/components/ui/Container'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const bankingCards = [
  {
    title: 'Business Current Account',
    desc: 'Open Account in 10 min, Zero balance. Free NEFT/RTGS, virtual accounts',
    cta: 'Open Account →',
    icon: '/business/business-current-account.svg',
  },
  {
    title: 'API Banking',
    desc: 'Build financial products on our platform. Collections, Payouts, Credit, Verification APIs.',
    cta: 'Read Docs →',
    icon: '/business/api-banking.svg',
  },
]

export default function BusinessBanking() {
  const sectionRef = useRef<HTMLElement>(null)

  // useGSAP(() => {
  //   // Pill slides in from the right
  //   gsap.from('.bb-pill', {
  //     x: 60,
  //     opacity: 0,
  //     duration: 0.75,
  //     ease: 'power3.out',
  //     scrollTrigger: {
  //       trigger: '.bb-pill',
  //       start: 'top 90%',
  //       once: true,
  //     },
  //   })

  //   // Cards stagger up
  //   gsap.from('.bb-card', {
  //     y: 50,
  //     opacity: 0,
  //     duration: 0.65,
  //     stagger: 0.15,
  //     ease: 'power2.out',
  //     scrollTrigger: {
  //       trigger: '.bb-cards',
  //       start: 'top 85%',
  //       once: true,
  //     },
  //   })
  // }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="relative bg-black pt-10 md:pt-18 pb-16 md:pb-24 overflow-hidden">
      <Container className="relative">
        {/* ================= TOP VISUAL ================= */}
        <div className="relative h-[80px] sm:h-[100px] md:h-[190px] mb-6 sm:mb-8 px-4 md:px-0">
          {/* Man LEFT - Hidden on mobile */}
          <Image
            src="/home/businessmen.png"
            alt="man"
            width={495}
            height={495}
            priority
            className="hidden md:block absolute left-[91px] -top-[35px] z-0 pointer-events-none"
          />

          {/* BUSINESS BANKING Pill RIGHT */}
          <div className="bb-pill absolute right-0 top-[36px] sm:top-[50px] md:top-28 w-[270px] sm:w-[340px] md:w-[360px] h-[46px] sm:h-[60px] z-10">
            <div className="absolute inset-0 rounded-[18px] rounded-tl-[270px] sm:rounded-tl-[340px] md:rounded-tl-[360px] bg-gradient-to-r from-[#055949] to-[#109F58]" />
            <span className="absolute right-5 sm:right-8 top-1/2 -translate-y-1/2 text-white text-[12px] sm:text-[18px] md:text-[20px] font-semibold">
              BUSINESS BANKING
            </span>
          </div>
        </div>

        {/* ================= CARDS ================= */}
        <div className="bb-cards grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-10 relative z-50 px-4 md:px-0">
          {bankingCards.map((card, i) => (
            <div
              key={i}
              className="bb-card group relative min-h-[200px] md:h-[240px] flex flex-col backdrop-blur-sm rounded-2xl p-5 md:p-6 overflow-hidden transition-all duration-300 ease-in-out hover:shadow-[0_0_40px_rgba(83,190,194,0.3)] hover:-translate-y-1"
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
                    <span className="flex items-center gap-2">{card.cta}</span>
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
