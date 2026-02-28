'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

gsap.registerPlugin(useGSAP)

const stats = [
  { val: '50+', label: 'Partners' },
  { val: '₹150Cr+', label: 'Processed' },
  { val: '12+', label: 'States' },
]

export default function PartnershipBanner() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.fromTo('.pb-content',
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 92%', once: true },
      }
    )

    ScrollTrigger.refresh()
  }, { scope: sectionRef })

  return (
    <div ref={sectionRef}>

      {/* ════════════════════════════════════════
          MOBILE LAYOUT  (hidden on lg+)
      ════════════════════════════════════════ */}
      <section className="lg:hidden relative bg-gradient-to-b from-[#071a0f] via-[#0C1F18] to-[#060D0A] py-16 px-5 overflow-hidden">

        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-teal-500/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-lg mx-auto text-center">

          {/* Badge */}
          <div className="pb-content inline-flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-widest border border-emerald-400/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Partnerships
          </div>

          {/* Heading */}
          <h2 className="pb-content text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
            Want to do a{' '}
            <span className="bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
              Partnership?
            </span>
          </h2>

          {/* Subtext */}
          <p className="pb-content text-gray-400 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
            Co-build, co-market, and grow together with RupeeFlow&apos;s financial infrastructure.
          </p>

          {/* Stats */}
          <div className="pb-content grid grid-cols-3 gap-3 mb-8">
            {stats.map(s => (
              <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-3">
                <p className="text-white font-black text-lg">{s.val}</p>
                <p className="text-gray-500 text-xs mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/partnerships/banking"
            className="pb-content relative inline-flex items-center justify-center w-full overflow-hidden px-8 py-3.5 rounded-full font-semibold text-black group"
          >
            <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            <span className="absolute inset-0 bg-gradient-to-r from-[#0bbf7d] to-[#4ade80] group-hover:opacity-0 transition-opacity duration-300" />
            <span className="relative z-10 transition-all duration-300 group-hover:-translate-x-2">
              Connect With Us →
            </span>
          </Link>
        </div>
      </section>

      {/* ════════════════════════════════════════
          DESKTOP LAYOUT  (hidden below lg)
      ════════════════════════════════════════ */}
      <section className="hidden lg:block relative w-full py-6 px-6">
        <div className="relative max-w-[1400px] mx-auto h-[600px] xl:h-[680px] rounded-2xl overflow-hidden">

          {/* Background Image */}
          <Image
            src="/home/partnership-banner.png"
            alt="Partnership"
            fill
            priority
            className="object-cover"
          />

          {/* Gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

          {/* Content — bottom left glass box */}
          <div className="absolute inset-0 flex items-end pb-12 pl-12">
            <div className="pb-content bg-black/50 backdrop-blur-xl rounded-3xl p-8 xl:p-10 max-w-lg border border-white/10">

              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Partnerships
              </div>

              {/* Heading */}
              <h2 className="text-4xl xl:text-5xl font-black text-white leading-tight mb-3">
                Want to do a Partnership?
              </h2>

              {/* Subtext */}
              <p className="text-gray-300 text-base mb-6">
                Join 50+ brands who are partnered with us
              </p>

              {/* Stats row */}
              <div className="flex gap-6 mb-7 border-t border-white/10 pt-5">
                {stats.map(s => (
                  <div key={s.label}>
                    <p className="text-white font-black text-xl">{s.val}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/partnerships/banking"
                className="relative inline-flex items-center overflow-hidden px-8 py-3.5 rounded-full font-semibold text-black group"
              >
                <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                <span className="absolute inset-0 bg-gradient-to-r from-[#0bbf7d] to-[#4ade80] group-hover:opacity-0 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2 transition-all duration-300 group-hover:-translate-x-2">
                  Connect With Us →
                </span>
              </Link>

            </div>
          </div>

        </div>
      </section>

    </div>
  )
}
