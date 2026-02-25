'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Container from '@/components/ui/Container'

const cards = [
  {
    title: 'Payment Gateway',
    desc: 'Accept all payment modes — cards, UPI, net banking, wallets. Developer-friendly APIs',
    icon: '/payments/payment-gateway.svg',
  },
  {
    title: 'Payment Links',
    desc: 'Share payment links via WhatsApp/SMS, get paid instantly without website.',
    icon: '/payments/payment-links.svg',
  },
  {
    title: 'UPI Collections',
    desc: 'Accept UPI payments with instant settlement. Voice + Offline enabled',
    icon: '/payments/upi-collections.svg',
  },
  {
    title: 'Cross-Border Collections',
    desc: 'Receive payments from 15+ countries. Real-time forex, instant settlement',
    icon: '/payments/cross-border-payments.svg',
  },
]

export default function CollectMoney() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const currentSection = sectionRef.current
    
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (currentSection) {
      observer.observe(currentSection)
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection)
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative bg-black pt-10 pb-10 overflow-hidden min-h-screen flex items-center"
    >
      <Container
        className={`relative transition-all duration-600 ${isVisible ? 'animate-fade-in-section' : 'opacity-0'}`}
      >
        {/* Hero */}
        <div className="relative text-center mb-12 md:mb-20 z-10 px-4">
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
        <div className="relative w-[280px] sm:w-[320px] h-[50px] sm:h-[60px] mt-20 md:mt-40 z-10 mx-4 md:mx-0">
          <div className="absolute inset-0 rounded-[18px] rounded-tr-[280px] sm:rounded-tr-[320px] bg-gradient-to-r from-[#055949] to-[#109F58]" />
          <span className="absolute left-6 sm:left-8 top-1/2 -translate-y-1/2 text-white text-[16px] sm:text-[20px] font-semibold tracking-wide">
            COLLECT MONEY
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-10 md:gap-y-8 relative z-50 px-4 md:px-0">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`group relative min-h-[200px] md:h-[220px] flex flex-col backdrop-blur-sm rounded-2xl p-5 md:p-6 overflow-hidden transition-all duration-300 ease-in-out hover:shadow-[0_0_40px_rgba(83,190,194,0.3)] hover:-translate-y-1 ${isVisible ? `animate-card-${i + 1}` : 'opacity-0'}`}
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

              <h3 className="rf-h3 text-white">
                {card.title}
              </h3>

              <p className="rf-body text-gray-100 mt-5 max-w-[80%]">
                {card.desc}
              </p>

                <div className="mt-auto pt-4">
                  <button className="rounded-full px-5 md:px-6 py-2 text-xs md:text-sm font-medium flex items-center gap-2 bg-gradient-to-r from-[#054C38] to-[#2AB871] text-white transition-all duration-300 ease-in-out group-hover:bg-gradient-to-r group-hover:from-[#53BEC2] group-hover:to-[#00EF64] group-hover:text-black">
                    <span className="flex items-center gap-2">
                      Learn more →
                    </span>
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
