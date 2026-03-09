'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import {
  CheckCircle2,
  Zap,
  ArrowRight,
  Shield,
  Headphones,
  BarChart3,
  CreditCard,
  RefreshCcw,
} from 'lucide-react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

gsap.registerPlugin(useGSAP)

const plans = [
  {
    name: 'Starter',
    badge: null,
    monthlyPrice: '₹0',
    annualPrice: '₹0',
    period: '/month',
    desc: 'Pay-as-you-go for early-stage businesses. No setup fee, no monthly commitment.',
    cta: 'Get Started Free',
    ctaHref: '/contact',
    highlight: false,
    features: [
      'UPI Collections at 0.90% per txn',
      'Payouts at ₹5 per transaction',
      'Payment Links & QR Code',
      'Virtual Cards (up to 2)',
      'Standard API access',
      'Email & chat support',
      'Basic analytics dashboard',
    ],
  },
  {
    name: 'Growth',
    badge: 'Most Popular',
    monthlyPrice: '₹2,499',
    annualPrice: '₹1,999',
    period: '/month',
    desc: 'Built for scaling teams that need lower rates, cards, and advanced tooling.',
    cta: 'Start Growth Plan',
    ctaHref: '/contact',
    highlight: true,
    features: [
      'UPI Collections at 0.65% per txn',
      'Payouts at ₹3 per transaction',
      'All Payment Methods (Card, NB, Wallet)',
      'Prepaid & Virtual Cards (up to 50)',
      'Bulk Payouts & Salary Disbursements',
      'Advanced analytics + reconciliation',
      'Priority support (4-hr response)',
      'Dedicated onboarding manager',
    ],
  },
  {
    name: 'Enterprise',
    badge: 'Custom',
    monthlyPrice: 'Custom',
    annualPrice: 'Custom',
    period: '',
    desc: 'Custom rates, white-label options, and embedded lending for high-volume operations.',
    cta: 'Talk to Sales',
    ctaHref: '/contact',
    highlight: false,
    features: [
      'Negotiated transaction rates',
      'Unlimited cards issuance',
      'Embedded Lending & B2B BNPL',
      'White-label payment infrastructure',
      'Multi-entity & marketplace support',
      'Custom API SLA & 99.9% uptime SLA',
      '24×7 dedicated account manager',
      'Custom compliance & reporting',
    ],
  },
]

const baseline = [
  { icon: Shield, label: 'RBI & PCI DSS Compliant' },
  { icon: Zap, label: '99.9% Platform Uptime' },
  { icon: RefreshCcw, label: 'Real-time Webhooks' },
  { icon: BarChart3, label: 'Unified Dashboard' },
  { icon: CreditCard, label: 'Multi-mode Collections' },
  { icon: Headphones, label: 'Onboarding Support' },
]

export default function PricingSection() {
  const [annual, setAnnual] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLElement>(null)

  // Hero section — animate on mount (above the fold)
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })

    tl.fromTo('.ph-badge',   { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
      .fromTo('.ph-heading', { y: 35, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65 }, '-=0.3')
      .fromTo('.ph-subtext', { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.35')
      .fromTo('.ph-pill',    { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, stagger: 0.07 }, '-=0.3')
      .fromTo('.ph-toggle',  { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45 }, '-=0.25')
  }, { scope: heroRef })

  // Cards section — ScrollTrigger (below fold)
  useGSAP(() => {
    gsap.fromTo('.ph-plan-card',
      { y: 55, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.7, stagger: 0.14, ease: 'power2.out',
        scrollTrigger: { trigger: '.ph-cards-grid', start: 'top 92%', once: true },
      }
    )

    gsap.fromTo('.ph-baseline-item',
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power2.out',
        scrollTrigger: { trigger: '.ph-baseline', start: 'top 92%', once: true },
      }
    )

    ScrollTrigger.refresh()
  }, { scope: cardsRef })

  return (
    <>
      {/* ── HERO — dark ── */}
      <section ref={heroRef} className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-[#060D0A] to-[#0C1F18] overflow-hidden">
        {/* grid overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <span className="ph-badge inline-block text-emerald-400 text-xs font-semibold tracking-widest uppercase border border-emerald-400/30 rounded-full px-4 py-1 mb-5">
              Pricing
            </span>

            <h1 className="ph-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight">
              Built for Scale.{' '}
              <span className="bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
                Priced for Growth.
              </span>
            </h1>

            <p className="ph-subtext text-gray-400 mt-5 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Transparent, usage-based pricing across collections, payouts, cards,
              and credit — with zero hidden fees.
            </p>

            {/* trust pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-7">
              {['No setup fee', 'No lock-in', 'Cancel anytime'].map((t) => (
                <span
                  key={t}
                  className="ph-pill flex items-center gap-1.5 bg-white/5 border border-white/10 text-gray-300 text-xs rounded-full px-3 py-1"
                >
                  <CheckCircle2 size={11} className="text-emerald-400" />
                  {t}
                </span>
              ))}
            </div>

            {/* billing toggle */}
            <div className="ph-toggle flex items-center justify-center gap-3 mt-8">
              <span className={`text-sm font-medium transition ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
              <button
                onClick={() => setAnnual((v) => !v)}
                className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none ${
                  annual ? 'bg-emerald-500' : 'bg-white/20'
                }`}
                aria-label="Toggle annual billing"
              >
                <span
                  className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow transition-transform duration-300 ${
                    annual ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
              <span className={`text-sm font-medium transition ${annual ? 'text-white' : 'text-gray-500'}`}>
                Annual
                <span className="ml-1.5 bg-emerald-500/20 text-emerald-400 text-[10px] font-bold rounded-full px-2 py-0.5 border border-emerald-500/30">
                  Save 20%
                </span>
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* ── PLAN CARDS — white ── */}
      <section ref={cardsRef} className="py-12 sm:py-16 lg:py-20 bg-white">
        <Container>
          <div className="ph-cards-grid grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 -mt-10 sm:-mt-16 relative z-10">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`ph-plan-card relative flex flex-col rounded-2xl border transition duration-300 ${
                  plan.highlight
                    ? 'bg-gradient-to-b from-[#060D0A] to-[#0C1F18] border-emerald-500/40 shadow-2xl shadow-emerald-500/15 ring-1 ring-emerald-500/20'
                    : 'bg-white border-gray-200 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-500/10'
                }`}
              >
                {/* badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider rounded-full px-3.5 py-1 ${
                        plan.highlight
                          ? 'bg-gradient-to-r from-[#00EF64] to-[#53BEC2] text-black'
                          : 'bg-gray-900 text-white'
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  {/* plan name */}
                  <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${plan.highlight ? 'text-emerald-400' : 'text-gray-400'}`}>
                    {plan.name}
                  </p>

                  {/* price */}
                  <div className="mb-2">
                    <span className={`text-4xl sm:text-5xl font-black ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                      {annual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    {plan.period && (
                      <span className={`text-sm ml-1 ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                        {plan.period}
                      </span>
                    )}
                  </div>

                  {plan.name === 'Growth' && annual && (
                    <p className="text-emerald-400 text-xs font-semibold mb-1">Billed ₹23,988/year · Save ₹6,000</p>
                  )}

                  <p className={`text-sm leading-relaxed mb-6 ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                    {plan.desc}
                  </p>

                  {/* features */}
                  <ul className="space-y-2.5 flex-1 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className={`flex items-start gap-2.5 text-sm ${plan.highlight ? 'text-gray-300' : 'text-gray-600'}`}>
                        <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  {plan.highlight ? (
                    <Link
                      href={plan.ctaHref}
                      className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-[#00EF64] to-[#53BEC2] text-black hover:opacity-90 transition duration-200"
                    >
                      {plan.cta}
                      <ArrowRight size={15} />
                    </Link>
                  ) : (
                    <Link
                      href={plan.ctaHref}
                      className={`inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm border transition duration-200 ${
                        plan.name === 'Enterprise'
                          ? 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
                          : 'border-emerald-500 text-emerald-600 hover:bg-emerald-50'
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight size={15} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* baseline features strip */}
          <div className="ph-baseline mt-12 sm:mt-16 border border-gray-200 rounded-2xl p-6 sm:p-8">
            <p className="text-center text-gray-400 text-xs font-bold uppercase tracking-widest mb-6">
              All plans include
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {baseline.map(({ icon: Icon, label }) => (
                <div key={label} className="ph-baseline-item flex flex-col items-center text-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                    <Icon size={18} className="text-emerald-600" />
                  </div>
                  <p className="text-gray-600 text-xs font-medium leading-snug">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
