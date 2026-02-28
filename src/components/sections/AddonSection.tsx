'use client'

import { useRef } from 'react'
import Container from '@/components/ui/Container'
import MainCTA from '@/components/ui/mainCTA'
import {
  CheckCircle2,
  Zap,
  RefreshCcw,
  CreditCard,
  Banknote,
  X,
} from 'lucide-react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

gsap.registerPlugin(useGSAP)

const serviceRates = [
  {
    category: 'Collections',
    desc: 'Accept payments via every channel',
    color: 'from-emerald-500 to-teal-500',
    iconColor: 'text-emerald-600',
    bgColor: 'bg-emerald-50 border-emerald-100',
    icon: Zap,
    services: [
      { name: 'UPI Collections', rate: '0.65–0.90%', note: 'per transaction', tag: 'Most used' },
      { name: 'Credit Card', rate: '1.80%', note: 'per transaction', tag: null },
      { name: 'Debit Card', rate: '0.90%', note: 'per transaction', tag: null },
      { name: 'Net Banking', rate: '₹10', note: 'per transaction', tag: null },
      { name: 'UPI QR Code', rate: 'UPI rates', note: 'apply', tag: 'Free issuance' },
      { name: 'Payment Links', rate: '1.20%', note: 'per transaction', tag: null },
    ],
  },
  {
    category: 'Payouts',
    desc: 'Instant transfers to any bank or UPI',
    color: 'from-teal-500 to-cyan-500',
    iconColor: 'text-teal-600',
    bgColor: 'bg-teal-50 border-teal-100',
    icon: RefreshCcw,
    services: [
      { name: 'UPI Payouts', rate: '₹3', note: 'per transaction', tag: 'Instant' },
      { name: 'IMPS', rate: '₹5', note: 'per transaction', tag: '24×7' },
      { name: 'NEFT', rate: '₹2.50', note: 'per transaction', tag: null },
      { name: 'RTGS', rate: '₹20', note: 'per transaction', tag: 'High value' },
      { name: 'Bulk Payouts', rate: '₹2', note: 'per txn · min 100', tag: 'Volume discount' },
      { name: 'Salary Disbursements', rate: '₹2', note: 'per txn · min 50', tag: null },
    ],
  },
  {
    category: 'Cards',
    desc: 'Prepaid, virtual & corporate cards',
    color: 'from-cyan-500 to-blue-500',
    iconColor: 'text-cyan-700',
    bgColor: 'bg-cyan-50 border-cyan-100',
    icon: CreditCard,
    services: [
      { name: 'Virtual Card Issuance', rate: '₹0', note: 'free issuance', tag: 'Instant' },
      { name: 'Physical Prepaid Card', rate: '₹150', note: 'per card', tag: null },
      { name: 'Corporate Card', rate: '₹499', note: 'per card/year', tag: null },
      { name: 'Business Card', rate: '₹299', note: 'per card/year', tag: null },
      { name: 'Expense Management', rate: 'Included', note: 'in Growth+', tag: null },
      { name: 'Rewards Card', rate: 'Custom', note: 'contact sales', tag: null },
    ],
  },
  {
    category: 'Credit & Lending',
    desc: 'Embedded finance for businesses & buyers',
    color: 'from-violet-500 to-purple-500',
    iconColor: 'text-violet-600',
    bgColor: 'bg-violet-50 border-violet-100',
    icon: Banknote,
    services: [
      { name: 'Merchant Cash Advance', rate: '1.5–3.5%', note: 'processing fee', tag: 'No collateral' },
      { name: 'Invoice Financing', rate: '1–2%', note: 'per month', tag: null },
      { name: 'Personal Credit Line', rate: 'Custom', note: 'contact sales', tag: null },
      { name: 'NRI Emergency Loan', rate: 'Custom', note: 'contact sales', tag: null },
      { name: 'B2B BNPL (Embedded)', rate: 'Commission', note: 'based model', tag: 'Enterprise' },
      { name: 'Education / Medical', rate: 'Custom', note: 'contact sales', tag: null },
    ],
  },
]

const comparison = [
  { feature: 'UPI Collection Rate', starter: '0.90%', growth: '0.65%', enterprise: 'Custom' },
  { feature: 'Payout Rate (UPI)', starter: '₹5/txn', growth: '₹3/txn', enterprise: 'Custom' },
  { feature: 'Virtual Cards', starter: '2 cards', growth: '50 cards', enterprise: 'Unlimited' },
  { feature: 'Physical Cards', starter: false, growth: true, enterprise: true },
  { feature: 'Bulk Payouts', starter: false, growth: true, enterprise: true },
  { feature: 'Embedded Lending', starter: false, growth: false, enterprise: true },
  { feature: 'White-label APIs', starter: false, growth: false, enterprise: true },
  { feature: 'Advanced Analytics', starter: false, growth: true, enterprise: true },
  { feature: 'Reconciliation', starter: 'Basic', growth: 'Automated', enterprise: 'Custom' },
  { feature: 'Support SLA', starter: 'Email', growth: '4-hr priority', enterprise: '24×7 dedicated' },
  { feature: 'Onboarding', starter: 'Self-serve', growth: 'Guided', enterprise: 'White-glove' },
]

export default function AddonsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // ── Service Rates section ──
    gsap.fromTo('.as-rates-header',
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.65, ease: 'power2.out',
        scrollTrigger: { trigger: '.as-rates-header', start: 'top 92%', once: true },
      }
    )

    gsap.fromTo('.as-rate-card',
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: '.as-rate-grid', start: 'top 92%', once: true },
      }
    )

    // ── Comparison table section ──
    gsap.fromTo('.as-comp-header',
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.65, ease: 'power2.out',
        scrollTrigger: { trigger: '.as-comp-header', start: 'top 92%', once: true },
      }
    )

    gsap.fromTo('.as-table-row',
      { x: -20, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 0.4, stagger: 0.045, ease: 'power2.out',
        scrollTrigger: { trigger: '.as-table', start: 'top 92%', once: true },
      }
    )

    // ── CTA section ──
    gsap.fromTo('.as-cta-inner',
      { y: 35, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: '.as-cta-inner', start: 'top 92%', once: true },
      }
    )

    ScrollTrigger.refresh()
  }, { scope: sectionRef })

  return (
    <div ref={sectionRef}>
      {/* ── SERVICE RATES — gray-50 ── */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <Container>
          <div className="as-rates-header text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="inline-block text-emerald-600 text-xs font-semibold tracking-widest uppercase border border-emerald-200 rounded-full px-4 py-1 mb-4 bg-white">
              Service Rates
            </span>
            <h2 className="rf-h2 text-gray-900">
              Pay Only for{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                What You Use
              </span>
            </h2>
            <p className="rf-lead text-gray-500 mt-4">
              Per-transaction rates across all services. No hidden fees. Volume discounts available on Growth and Enterprise plans.
            </p>
          </div>

          <div className="as-rate-grid grid sm:grid-cols-2 gap-5 sm:gap-6">
            {serviceRates.map(({ category, desc, icon: Icon, iconColor, bgColor, color, services }) => (
              <div
                key={category}
                className="as-rate-card bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/10 transition duration-300"
              >
                {/* card header */}
                <div className={`flex items-center gap-4 px-6 py-5 border-b border-gray-100`}>
                  <div className={`w-10 h-10 rounded-xl ${bgColor} border flex items-center justify-center shrink-0`}>
                    <Icon size={18} className={iconColor} />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-bold text-base">{category}</h3>
                    <p className="text-gray-400 text-xs">{desc}</p>
                  </div>
                  <div className={`ml-auto w-1 h-8 rounded-full bg-gradient-to-b ${color} opacity-60`} />
                </div>

                {/* rate rows */}
                <div className="divide-y divide-gray-50">
                  {services.map(({ name, rate, note, tag }) => (
                    <div key={name} className="flex items-center justify-between px-6 py-3.5 hover:bg-gray-50 transition duration-150">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="text-gray-700 text-sm font-medium truncate">{name}</span>
                        {tag && (
                          <span className="shrink-0 text-[10px] font-semibold bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-full px-2 py-0.5">
                            {tag}
                          </span>
                        )}
                      </div>
                      <div className="text-right shrink-0 ml-4">
                        <span className="text-gray-900 font-bold text-sm">{rate}</span>
                        <span className="text-gray-400 text-xs ml-1">{note}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-400 text-xs mt-6">
            GST applicable as per government norms. All rates are exclusive of taxes. Volume discounts negotiated on Enterprise plan.
          </p>
        </Container>
      </section>


      {/* ── COMPARISON TABLE — white ── */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <Container>
          <div className="as-comp-header text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <h2 className="rf-h2 text-gray-900">
              Compare{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                All Plans
              </span>
            </h2>
            <p className="rf-lead text-gray-500 mt-4">
              See exactly what&apos;s included at every tier — no surprises.
            </p>
          </div>

          <div className="as-table overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left px-6 py-4 text-gray-400 text-xs font-bold uppercase tracking-widest w-[40%]">
                    Feature
                  </th>
                  <th className="px-4 py-4 text-center">
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Starter</p>
                    <p className="text-gray-900 font-black text-lg mt-0.5">₹0</p>
                    <p className="text-gray-400 text-xs">/month</p>
                  </th>
                  <th className="px-4 py-4 text-center bg-gradient-to-b from-[#060D0A] to-[#0C1F18] rounded-t-xl relative">
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold bg-gradient-to-r from-[#00EF64] to-[#53BEC2] text-black rounded-full px-3 py-0.5">
                      Popular
                    </span>
                    <p className="text-emerald-400 text-xs font-bold uppercase tracking-wider">Growth</p>
                    <p className="text-white font-black text-lg mt-0.5">₹2,499</p>
                    <p className="text-gray-400 text-xs">/month</p>
                  </th>
                  <th className="px-4 py-4 text-center">
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Enterprise</p>
                    <p className="text-gray-900 font-black text-lg mt-0.5">Custom</p>
                    <p className="text-gray-400 text-xs">contact sales</p>
                  </th>
                </tr>
              </thead>

              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.feature} className={`as-table-row border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                    <td className="px-6 py-3.5 text-gray-700 text-sm font-medium">{row.feature}</td>

                    {/* Starter */}
                    <td className="px-4 py-3.5 text-center">
                      {row.starter === true ? (
                        <CheckCircle2 size={16} className="text-emerald-500 mx-auto" />
                      ) : row.starter === false ? (
                        <X size={16} className="text-gray-300 mx-auto" />
                      ) : (
                        <span className="text-gray-600 text-xs font-medium">{row.starter}</span>
                      )}
                    </td>

                    {/* Growth */}
                    <td className="px-4 py-3.5 text-center bg-[#060D0A]/[0.02]">
                      {row.growth === true ? (
                        <CheckCircle2 size={16} className="text-emerald-500 mx-auto" />
                      ) : row.growth === false ? (
                        <X size={16} className="text-gray-300 mx-auto" />
                      ) : (
                        <span className="text-emerald-600 text-xs font-semibold">{row.growth}</span>
                      )}
                    </td>

                    {/* Enterprise */}
                    <td className="px-4 py-3.5 text-center">
                      {row.enterprise === true ? (
                        <CheckCircle2 size={16} className="text-emerald-500 mx-auto" />
                      ) : row.enterprise === false ? (
                        <X size={16} className="text-gray-300 mx-auto" />
                      ) : (
                        <span className="text-gray-600 text-xs font-medium">{row.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>


      {/* ── BOTTOM CTA — dark ── */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-[#0C1F18] to-[#0a1a0f]">
        <Container>
          <div className="as-cta-inner rounded-3xl border border-emerald-500/20 bg-white/5 p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">

            <div className="max-w-xl">
              <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-3">
                Not sure which plan?
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                Talk to Us — We&apos;ll Build the{' '}
                <span className="bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
                  Right Plan
                </span>{' '}
                for You
              </h2>
              <p className="text-gray-400 mt-4 text-sm sm:text-base leading-relaxed">
                Our team will analyse your transaction volume, product mix, and growth goals to
                recommend the most cost-effective pricing structure.
              </p>

              <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'Free 30-min pricing consultation',
                  'Custom rate modelling',
                  'Live sandbox access',
                  'No commitment required',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-gray-300 text-sm">
                    <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3 shrink-0">
              <MainCTA label="Book a Demo" destination="/contact" />
              <MainCTA label="Talk to Sales" destination="/contact" />
              <p className="text-gray-600 text-xs text-center">Typically responds in &lt; 2 hours</p>
            </div>

          </div>
        </Container>
      </section>
    </div>
  )
}
