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

  useGSAP(
    () => {
      gsap.fromTo(
        '.pb-content',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 92%',
            once: true,
          },
        }
      )

      ScrollTrigger.refresh()
    },
    { scope: sectionRef }
  )

  return (
    <div ref={sectionRef}>
      {/* ════════════════════════════════════════
          MOBILE LAYOUT  (hidden on lg+)
      ════════════════════════════════════════ */}
      <section className="lg:hidden relative py-5 px-4 overflow-hidden">
        <div className="relative rounded-2xl overflow-hidden">
          {/* Background Image */}
          <div className="relative h-[560px] sm:h-[620px]">
            <Image
              src="/home/partnership-banner.png"
              alt="Partnership"
              fill
              priority
              className="object-cover object-[70%_center] brightness-[0.95]"
            />

            {/* Minimal gradient overlay - slightly stronger at bottom for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)]/95 via-transparent to-transparent" />
          </div>

          {/* Content pinned to bottom */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 pb-8">
            {/* Badge */}
            <div className="pb-content inline-flex items-center gap-2 text-[var(--primary)] text-xs font-semibold uppercase tracking-widest border border-[var(--primary)]/30 rounded-full px-4 py-1.5 mb-5 self-start bg-[var(--card)]/70 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Partnerships
            </div>

            {/* Heading */}
            <h2 className="pb-content text-3xl sm:text-4xl font-black text-[var(--foreground)] leading-tight mb-3">
              Want to do a{' '}
              <span className="bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
                Partnership?
              </span>
            </h2>

            {/* Subtext */}
            <p className="pb-content text-[var(--foreground)] text-sm leading-relaxed mb-5 max-w-xs">
              Co-build, co-market, and grow together with RupeeFlow&apos;s
              financial infrastructure. Unlock new revenue streams with embedded
              finance.
            </p>

            {/* Benefit bullets */}
            <ul className="pb-content space-y-2 mb-6">
              {[
                'Revenue-share partnership models',
                'Ready-to-deploy APIs with full sandbox',
                'RBI-licensed & enterprise-grade security',
              ].map(item => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-[var(--foreground)] text-xs drop-shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="pb-content grid grid-cols-3 gap-2 mb-6">
              {stats.map(s => (
                <div
                  key={s.label}
                  className="bg-[var(--card)]/80 backdrop-blur-sm border border-[var(--border)] rounded-xl p-3 text-center"
                >
                  <p className="text-[var(--foreground)] font-black text-lg">
                    {s.val}
                  </p>
                  <p className="text-[var(--muted)] text-xs mt-0.5">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/partnerships/banking"
              className="pb-content relative inline-flex items-center justify-center overflow-hidden px-8 py-3.5 rounded-full font-semibold text-[var(--surface)] group"
            >
              <span className="absolute inset-0 bg-[var(--surface)] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              <span className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] group-hover:opacity-0 transition-opacity duration-300" />
              <span className="relative z-10 transition-all duration-300 group-hover:-translate-x-2">
                Connect With Us →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          DESKTOP LAYOUT  (hidden below lg)
      ════════════════════════════════════════ */}
      <section className="hidden lg:block relative w-full py-6 px-6">
        <div className="relative max-w-[1400px] mx-auto h-[600px] xl:h-[680px] rounded-2xl overflow-hidden">
          {/* Background Image - person visible on right */}
          <Image
            src="/home/partnership-banner.png"
            alt="Partnership"
            fill
            priority
            className="object-cover object-center brightness-125"
          />

          {/* Minimal gradient overlay - slightly stronger on left for improved contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--card)]/90 via-transparent via-40% to-transparent" />

          {/* Content — left side, narrower to not cover the person */}
          <div className="absolute inset-0 flex items-center pl-12">
            <div className="pb-content bg-[var(--card)]/95 backdrop-blur-9xl rounded-3xl p-8 xl:p-10 max-w-md border border-[var(--border)] shadow-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 text-[var(--primary)] text-xs font-semibold uppercase tracking-widest mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Partnerships
              </div>

              {/* Heading */}
              <h2 className="text-3xl xl:text-4xl font-black text-[var(--foreground)] leading-tight mb-3">
                Want to do a Partnership?
              </h2>

              {/* Subtext */}
              <p className="text-[var(--foreground)] text-sm mb-5">
                Co-build, co-market, and grow together with RupeeFlow&apos;s
                financial infrastructure. Unlock new revenue streams with
                embedded finance.
              </p>

              {/* Benefit bullets */}
              <ul className="space-y-2 mb-6">
                {[
                  'Revenue-share partnership models',
                  'Ready-to-deploy APIs with full sandbox',
                  'RBI-licensed & enterprise-grade security',
                ].map(item => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-[var(--foreground)] text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Stats row */}
              <div className="flex gap-6 mb-7 border-t border-[var(--border)] pt-5">
                {stats.map(s => (
                  <div key={s.label}>
                    <p className="text-[var(--foreground)] font-black text-xl">
                      {s.val}
                    </p>
                    <p className="text-[var(--muted)] text-xs mt-0.5">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/partnerships/banking"
                className="relative inline-flex items-center overflow-hidden px-8 py-3.5 rounded-full font-semibold text-[var(--surface)] group"
              >
                <span className="absolute inset-0 bg-[var(--surface)] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                <span className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] group-hover:opacity-0 transition-opacity duration-300" />
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
