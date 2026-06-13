 'use client'

import Container from '@/components/ui/Container'
import MainCTA from '@/components/ui/mainCTA'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Check,
  Wallet,
  ShieldCheck,
  Users,
  Settings,
  BarChart3,
} from 'lucide-react'
import { prepaidFAQs } from '@/data/prepaidCardFaqs'
import CardFAQ from '@/components/sections/CardFAQ'

export default function PrepaidCardsPage() {
  return (
    <>
      {/* HERO */}
      <Container className="py-16">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          {/* LEFT: compact intro */}
          <div className="flex-1 max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--foreground)] leading-tight">
              Prepaid <span className="text-emerald-400">Cards</span>
            </h1>

            <p className="mt-6 text-[var(--muted)] text-lg leading-relaxed">
              Secure, pre-funded cards to control spending across teams, vendors,
              and programs — with instant issuance and real-time visibility.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Wallet, text: 'Pre-load funds for controlled spending' },
                { icon: ShieldCheck, text: 'Eliminate credit risk & overspending' },
                { icon: Users, text: 'Ideal for employees, vendors & incentives' },
                { icon: Settings, text: 'Set limits & usage rules instantly' },
              ].map((it, idx) => {
                const Icon = it.icon
                return (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-500/10">
                      <Icon size={18} className="text-emerald-400" />
                    </div>
                    <div className="text-[var(--muted)] text-sm">{it.text}</div>
                  </div>
                )
              })}
            </div>

                <div className="mt-6">
                  <MainCTA label="Learn More" destination="#" size="h-10 px-6" noBullet={true} showArrow={false} />
                </div>
          </div>

          {/* RIGHT: visible hero with background and overlays */}
          <div className="flex-1 max-w-xl">
            <div className="relative rounded-2xl overflow-hidden border border-[var(--border)] shadow-xl bg-gradient-to-tr from-white/5 to-white/3 p-6">
              <div className="relative w-full h-[360px] md:h-[460px] rounded-lg overflow-hidden">
                <Image
                  src="/prepaid cards/home screen image.png"
                  alt="Prepaid card preview"
                  fill
                  className="object-cover w-full h-full"
                  priority
                />
              </div>

              <div className="absolute top-4 left-4 w-44 h-28 rounded-lg shadow-md overflow-hidden bg-[var(--card)]/95 border border-[var(--border)] flex items-center justify-center">
                <Image src="/prepaid%20cards/prepaid%20cards%20logo.png" alt="prepaid logo" width={176} height={112} className="object-contain" />
              </div>

              <div className="absolute bottom-4 right-4 w-44 h-28 rounded-lg shadow-md overflow-hidden bg-[var(--card)]/95 border border-[var(--border)] flex items-center justify-center">
                <Image src="/prepaid cards/spend_insights.png" alt="spend insights" width={180} height={112} className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* WHY CHOOSE */}
      <div className="py-20 bg-gradient-to-b from-[var(--card)] to-[var(--background)]">
        <div className="text-center max-w-3xl mx-auto px-6">
          <h2 className="text-5xl font-semibold text-[var(--foreground)]">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
              Prepaid Cards
            </span>
            ?
          </h2>

          <p className="mt-3 text-xl text-[var(--muted)]">
            Control spending, prevent misuse, and manage budgets with zero
            credit exposure.
          </p>
        </div>

        <div className="mt-14 max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Budget Control',
              desc: 'Predefine spending amounts and eliminate overspending risks.',
            },
            {
              title: 'Risk-Free Spending',
              desc: 'Avoid credit exposure while ensuring secure transactions.',
            },
            {
              title: 'Instant Issuance',
              desc: 'Create and distribute cards instantly to employees or vendors.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-7 rounded-2xl border border-[var(--border)] bg-[var(--card)]
              hover:-translate-y-1 transition
              hover:border-emerald-400/40
              hover:shadow-[0_0_25px_rgba(42,184,113,0.12)]"
            >
              <h3 className="text-[var(--foreground)] font-semibold text-lg">
                {item.title}
              </h3>
              <p className="text-[var(--muted)] mt-3">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      {/* FEATURE SECTIONS - Redesigned: two-column blocks with visible images */}
      <div className="py-20 bg-[var(--background)]">
        <div className="max-w-6xl mx-auto px-6 space-y-20">
          {[
            {
              title: 'Controlled Budget Distribution',
              desc: 'Allocate prepaid funds across teams and projects with precision.',
              points: ['Department budgets', 'Project allocation', 'Spend caps'],
              img: '/prepaid cards/Controlled Budget Distribution.png',
            },
            {
              title: 'Secure & Safe Transactions',
              desc: 'Ensure funds are used only for approved purposes.',
              points: ['Merchant restrictions', 'Usage controls', 'Secure payments'],
              img: '/prepaid cards/Secure & Safe Transactions.png',
            },
            {
              title: 'Instant Card Issuance',
              desc: 'Create and distribute prepaid cards in seconds.',
              points: ['Virtual & physical cards', 'Instant activation', 'Bulk issuance'],
              img: '/prepaid cards/Instant Card Issuance.png',
            },
          ].map((item, i) => (
            <div key={i} className={`grid gap-8 items-center ${i % 2 ? 'md:grid-cols-2 md:grid-flow-dense' : 'md:grid-cols-2'}`}>
              <div className={`${i % 2 ? 'md:col-start-2' : ''} bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 flex items-center justify-center relative`}> 
                <div className="relative w-full h-[260px] md:h-[320px] rounded-lg overflow-hidden">
                  <Image src={item.img} alt={item.title} fill className="object-cover w-full h-full" />
                </div>
                <div className="absolute top-4 left-4 w-28 h-16 rounded-md overflow-hidden bg-[var(--card)]/90 border border-[var(--border)] flex items-center justify-center">
                  <Image src="/prepaid%20cards/prepaid%20cards%20logo.png" alt="prepaid logo" width={112} height={64} className="object-contain" />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-[var(--foreground)]">
                  {item.title}
                </h3>
                <p className="text-gray-500">{item.desc}</p>

                <ul className="mt-4 space-y-2">
                  {item.points.map((p, pi) => (
                    <li key={pi} className="flex items-center gap-3 text-gray-600">
                      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500/10 text-emerald-400">✓</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <MainCTA label="Learn More" destination="#" showArrow={false} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TRUST STRIP */}
      <div className="py-14 border-y border-[var(--border)] text-center">
        <p className="text-lg font-medium bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
          Trusted by finance teams for secure, controlled prepaid spending.
        </p>
      </div>

      <CardFAQ faqs={prepaidFAQs} />

      {/* FINAL CTA */}
      <div className="py-28 text-center">
        <h3 className="text-4xl text-[var(--foreground)] font-semibold">
          Simplify prepaid spending today
        </h3>
        <p className="text-gray-400 mt-4">
          Control budgets, reduce risk, and empower teams with secure prepaid
          cards.
        </p>

        <div className="mt-8 flex justify-center">
          <MainCTA label="Get Prepaid Cards" destination="/contact" showArrow={false} />
        </div>
      </div>
    </>
  )
}
