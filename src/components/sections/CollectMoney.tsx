'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Container from '@/components/ui/Container'

const cards = [
  {
    title: 'Payment Gateway',
    desc: 'Accept all payment modes — cards, UPI, net banking, wallets. Developer-friendly APIs',
    icon: '/payments/payment-gateway.svg',
    href: '/payment-gateway',
  },
  {
    title: 'Payment Links',
    desc: 'Share payment links via WhatsApp/SMS, get paid instantly without website.',
    icon: '/payments/payment-links.svg',
    href: '/payment-links',
  },
  {
    title: 'UPI Collections',
    desc: 'Accept UPI payments with instant settlement. Voice + Offline enabled',
    icon: '/payments/upi-collections.svg',
    href: '/upi-collections',
  },
  {
    title: 'Cross-Border Collections',
    desc: 'Receive payments from 15+ countries. Real-time forex, instant settlement',
    icon: '/payments/cross-border-payments.svg',
    href: '/cross-border-payments',
  },
]

export default function CollectMoney() {
  const sectionRef = useRef<HTMLElement>(null)

  // useGSAP(() => {
  //   // Heading fades up
  //   gsap.from('.cm-heading', {
  //     y: 40,
  //     opacity: 0,
  //     duration: 0.7,
  //     ease: 'power2.out',
  //     scrollTrigger: {
  //       trigger: '.cm-heading',
  //       start: 'top 85%',
  //       once: true,
  //     },
  //   })

  //   // Pill slides in from left
  //   gsap.from('.cm-pill', {
  //     x: -50,
  //     opacity: 0,
  //     duration: 0.65,
  //     ease: 'power3.out',
  //     scrollTrigger: {
  //       trigger: '.cm-pill',
  //       start: 'top 90%',
  //       once: true,
  //     },
  //   })

  //   // Cards stagger — each fades up independently, no parent opacity conflict
  //   gsap.from('.cm-card', {
  //     y: 45,
  //     opacity: 0,
  //     duration: 0.6,
  //     stagger: 0.12,
  //     ease: 'power2.out',
  //     scrollTrigger: {
  //       trigger: '.cm-cards',
  //       start: 'top 85%',
  //       once: true,
  //     },
  //   })
  // }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      className="relative bg-black pt-8 sm:pt-10 pb-8 sm:pb-10 overflow-hidden min-h-screen flex items-center"
    >
      <Container className="relative">
        {/* Hero */}
        <div className="cm-heading relative text-center mb-12 md:mb-20 z-10 px-4">
          <h1 className="rf-h1 text-white max-w-6xl mx-auto text-center">
            India&apos;s First Platform with{' '}
            <span className="bg-gradient-to-r from-[#53BEC2] to-[#00EF64] bg-clip-text text-transparent">
              End-to-End Payments
            </span>{' '}
            &{' '}
            <span className="bg-gradient-to-r from-[#53BEC2] to-[#00EF64] bg-clip-text text-transparent">
              Lending
            </span>{' '}
            together
          </h1>

          <p className="mt-4 md:mt-6 rf-lead text-gray-400 text-center">
            Everything Your Business Needs In One Place
          </p>

          <Image
            src="/home/man.svg"
            alt="man collecting money"
            width={500}
            height={500}
            priority
            className="hidden lg:block absolute right-[20px] top-32 z-0 pointer-events-none"
          />
        </div>

        {/* Collect Money Pill */}
        <div className="cm-pill relative w-[260px] sm:w-[320px] h-[46px] sm:h-[60px] mt-8 sm:mt-16 md:mt-40 z-10 mx-4 md:mx-0">
          <div className="absolute inset-0 rounded-[18px] rounded-tr-[260px] sm:rounded-tr-[320px] bg-gradient-to-r from-[#055949] to-[#109F58]" />
          <span className="absolute left-5 sm:left-8 top-1/2 -translate-y-1/2 text-white text-[14px] sm:text-[20px] font-semibold tracking-wide">
            COLLECT MONEY
          </span>
        </div>

        {/* Cards */}
        <div className="cm-cards grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-10 md:gap-y-8 relative z-50 px-4 md:px-0">
          {cards.map((card, i) => (
            <div
              key={i}
              className="cm-card group relative min-h-[200px] md:h-[220px] flex flex-col backdrop-blur-sm rounded-2xl p-5 md:p-6 overflow-hidden transition-all duration-300 ease-in-out hover:shadow-[0_0_40px_rgba(83,190,194,0.3)] hover:-translate-y-1"
              style={{ background: '#122427BF' }}
            >
              {/* Border — white at rest, gradient on hover */}
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

                <h3 className="rf-h3 text-white">
                  {card.title}
                </h3>

                <p className="rf-body text-gray-100 mt-5 max-w-[80%]">
                  {card.desc}
                </p>

                <div className="mt-auto pt-4">
                  <button className="rounded-full px-5 md:px-6 py-2 text-xs md:text-sm font-medium flex items-center gap-2 bg-gradient-to-r from-[#054C38] to-[#2AB871] text-white transition-all duration-300 ease-in-out group-hover:from-[#53BEC2] group-hover:to-[#00EF64] group-hover:text-black">
                    Learn more →
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
