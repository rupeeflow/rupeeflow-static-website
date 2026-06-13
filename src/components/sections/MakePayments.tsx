'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const cards = [
  {
    title: 'Bulk Payouts',
    desc: 'Pay 100+ vendors/employees in one click. CSV upload or API. No daily limits.',
    icon: '/payouts/bulk-payouts.svg',
    href: '/bulk-payouts',
  },
  {
    title: 'Vendor Payments',
    desc: 'Automated supplier payments with approval. Multi-level workflows, auto-reconciliation',
    icon: '/payouts/vendor-payments.svg',
    href: '/vendor-payments',
  },
  {
    title: 'Salary Disbursements',
    desc: 'Process monthly salaries via UPI/NEFT. Bulk upload, instant processing',
    icon: '/payouts/salary-disbursements.svg',
    href: '/salary-disbursements',
  },
  {
    title: 'Bill Payments',
    desc: 'Pay electricity, water, telecom, GST bills. Set reminders, schedule recurring.',
    icon: '/payouts/bill-payments.svg',
    href: '/bill-payments',
  },
]

export default function MakePayments() {
  const sectionRef = useRef<HTMLElement>(null)

  // useGSAP(() => {
  //   // Pill slides in from the right
  //   gsap.from('.mp-pill', {
  //     x: 60,
  //     opacity: 0,
  //     duration: 0.75,
  //     ease: 'power3.out',
  //     scrollTrigger: {
  //       trigger: '.mp-pill',
  //       start: 'top 90%',
  //       once: true,
  //     },
  //   })

  //   // Cards stagger up
  //   gsap.from('.mp-card', {
  //     y: 50,
  //     opacity: 0,
  //     duration: 0.65,
  //     stagger: 0.12,
  //     ease: 'power2.out',
  //     scrollTrigger: {
  //       trigger: '.mp-cards',
  //       start: 'top 85%',
  //       once: true,
  //     },
  //   })
  // }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      className="relative bg-[var(--background)] pt-10 md:pt-19 pb-10 md:pb-16 overflow-hidden"
    >
      <Container className="relative">
        {/* ================= HERO AREA ================= */}
        <div className="relative h-[70px] sm:h-[80px] md:h-[110px] mb-10 sm:mb-16 md:mb-28 px-4 md:px-0">
          {/* Pill RIGHT */}
            <div className="mp-pill absolute right-0 md:right-[10px] top-[40px] sm:top-[60px] md:top-[110px] w-[260px] sm:w-[320px] h-[46px] sm:h-[60px] z-10">
            <div className="absolute inset-0 rounded-[18px] rounded-tl-[260px] sm:rounded-tl-[320px] bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]" />
            <span className="absolute right-5 sm:right-8 top-1/2 -translate-y-1/2 text-black text-[14px] sm:text-[20px] font-semibold">
              MAKE PAYMENTS
            </span>
          </div>

          {/* Man LEFT - Hidden on mobile */}
          <Image
            src="/home/mann.png"
            alt="man"
            width={306}
            height={306}
            priority
            className="hidden md:block absolute left-[41px] -top-[89px] z-0 pointer-events-none"
          />
        </div>

        {/* ================= CARDS ================= */}
        <div className="mp-cards grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-10 md:gap-y-12 relative z-50 px-4 md:px-0">
          {cards.map((card, i) => (
            <div
              key={i}
              className="mp-card group relative min-h-[200px] md:h-[240px] flex flex-col rounded-2xl p-5 md:p-6 overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 bg-[var(--card)] border border-[var(--border)]"
            >
              {/* White border that becomes gradient on hover */}
              <div className="absolute inset-0 rounded-2xl p-[2px] transition-all duration-300 ease-in-out bg-[var(--card)]">
                <div className="h-full w-full rounded-2xl transition-all duration-300 ease-in-out bg-[var(--card)]" />
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

                <h3 className="text-[var(--foreground)] text-lg md:text-xl font-semibold pr-12 transition-colors duration-300 ease-in-out group-hover:text-[var(--primary)]">
                  {card.title}
                </h3>

                <p className="text-black text-sm mt-2 leading-relaxed pr-2 md:max-w-[85%] transition-colors duration-300 ease-in-out">
                  {card.desc}
                </p>

                <div className="mt-auto pt-4">
                  <Button href={card.href} className="inline-flex rounded-full px-5 md:px-6 py-2 text-xs md:text-sm font-medium items-center gap-2">Learn more →</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
