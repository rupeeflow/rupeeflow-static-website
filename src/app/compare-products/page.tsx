'use client'

import { useState } from 'react'
import Container from '@/components/ui/Container'
import MainCTA from '@/components/ui/mainCTA'
import Link from 'next/link'
import {
  CheckCircle2,
  X,
  Minus,
  ArrowRight,
  Zap,
  RefreshCcw,
  Banknote,
  TrendingUp,
  Shield,
  Clock,
  Star,
} from 'lucide-react'

// ── Types ─────────────────────────────────────────────────────────────────────
type CellValue = true | false | null | string

interface CompRow {
  feature: string
  category?: string
  rupeeflow: CellValue
  [key: string]: CellValue | string | undefined
}

interface Category {
  id: string
  label: string
  icon: React.ElementType
  tagline: string
  competitors: { id: string; name: string; tagline: string }[]
  rows: CompRow[]
  wins: { icon: React.ElementType; title: string; desc: string }[]
}

// ── Data ──────────────────────────────────────────────────────────────────────
const categories: Category[] = [
  {
    id: 'payments',
    label: 'Payments',
    icon: Zap,
    tagline: 'vs Razorpay · Cashfree · PayU',
    competitors: [
      { id: 'razorpay', name: 'Razorpay', tagline: 'payments' },
      { id: 'cashfree', name: 'Cashfree', tagline: 'payments' },
      { id: 'payu', name: 'PayU', tagline: 'payments' },
    ],
    rows: [
      { feature: 'UPI Rate', category: 'Pricing', rupeeflow: '0.65%', razorpay: '0.80%', cashfree: '0.75%', payu: '0.80%' },
      { feature: 'Credit Card Rate', category: 'Pricing', rupeeflow: '1.80%', razorpay: '2.00%', cashfree: '1.95%', payu: '2.10%' },
      { feature: 'Debit Card Rate', category: 'Pricing', rupeeflow: '0.90%', razorpay: '0.90%', cashfree: '0.90%', payu: '0.90%' },
      { feature: 'Net Banking', category: 'Pricing', rupeeflow: '₹10/txn', razorpay: '₹15/txn', cashfree: '₹12/txn', payu: '₹15/txn' },
      { feature: 'Settlement Cycle', category: 'Settlement', rupeeflow: 'T+1', razorpay: 'T+2', cashfree: 'T+1', payu: 'T+2' },
      { feature: 'Instant Settlement', category: 'Settlement', rupeeflow: true, razorpay: 'Add-on fee', cashfree: 'Add-on fee', payu: false },
      { feature: 'Smart Retry Logic', category: 'Features', rupeeflow: true, razorpay: true, cashfree: true, payu: false },
      { feature: 'Payment Links', category: 'Features', rupeeflow: true, razorpay: true, cashfree: true, payu: true },
      { feature: 'QR Code', category: 'Features', rupeeflow: true, razorpay: true, cashfree: true, payu: true },
      { feature: 'Payment Button', category: 'Features', rupeeflow: true, razorpay: true, cashfree: true, payu: true },
      { feature: 'Prepaid Corporate Cards', category: 'Ecosystem', rupeeflow: true, razorpay: false, cashfree: false, payu: false },
      { feature: 'Embedded Lending', category: 'Ecosystem', rupeeflow: true, razorpay: false, cashfree: false, payu: false },
      { feature: 'B2B BNPL at Checkout', category: 'Ecosystem', rupeeflow: true, razorpay: false, cashfree: false, payu: false },
      { feature: 'NRI Payment Support', category: 'Ecosystem', rupeeflow: true, razorpay: false, cashfree: false, payu: false },
    ],
    wins: [
      { icon: TrendingUp, title: 'Lower UPI Rates', desc: 'Save up to 18% on every UPI transaction vs Razorpay and PayU — compounds at scale.' },
      { icon: Zap, title: 'T+1 Settlement', desc: 'Get funds in your account a day faster, improving your working capital cycle.' },
      { icon: Banknote, title: 'Embedded Lending Built-in', desc: 'Only RupeeFlow offers credit-at-checkout, B2B BNPL, and merchant cash advance as part of the same stack.' },
      { icon: Shield, title: 'All-in-One Platform', desc: 'Payments + Payouts + Cards + Credit under one API. Competitors require 3–4 separate vendors.' },
    ],
  },
  {
    id: 'payouts',
    label: 'Payouts',
    icon: RefreshCcw,
    tagline: 'vs RazorpayX · Cashfree Payouts · Open Money',
    competitors: [
      { id: 'razorpayx', name: 'RazorpayX', tagline: 'payouts' },
      { id: 'cashfreep', name: 'Cashfree', tagline: 'payouts' },
      { id: 'openmoney', name: 'Open Money', tagline: 'payouts' },
    ],
    rows: [
      { feature: 'UPI Payout Rate', category: 'Pricing', rupeeflow: '₹3/txn', razorpayx: '₹4/txn', cashfreep: '₹3/txn', openmoney: '₹5/txn' },
      { feature: 'IMPS Rate', category: 'Pricing', rupeeflow: '₹5/txn', razorpayx: '₹6/txn', cashfreep: '₹5/txn', openmoney: '₹7/txn' },
      { feature: 'NEFT Rate', category: 'Pricing', rupeeflow: '₹2.50/txn', razorpayx: '₹3/txn', cashfreep: '₹2.50/txn', openmoney: '₹3/txn' },
      { feature: 'Bulk Payout Upload', category: 'Features', rupeeflow: true, razorpayx: true, cashfreep: true, openmoney: true },
      { feature: 'Approval Workflows', category: 'Features', rupeeflow: true, razorpayx: true, cashfreep: true, openmoney: false },
      { feature: 'Salary Disbursements', category: 'Features', rupeeflow: true, razorpayx: true, cashfreep: true, openmoney: true },
      { feature: 'Vendor Management', category: 'Features', rupeeflow: true, razorpayx: true, cashfreep: true, openmoney: false },
      { feature: 'Auto-Reconciliation', category: 'Features', rupeeflow: true, razorpayx: true, cashfreep: true, openmoney: false },
      { feature: 'Real-time Status API', category: 'Features', rupeeflow: true, razorpayx: true, cashfreep: true, openmoney: true },
      { feature: 'Prepaid Card Payouts', category: 'Advanced', rupeeflow: true, razorpayx: false, cashfreep: false, openmoney: false },
      { feature: 'Embedded Credit for Payouts', category: 'Advanced', rupeeflow: true, razorpayx: false, cashfreep: false, openmoney: false },
      { feature: 'Collections + Payouts Bundle', category: 'Advanced', rupeeflow: true, razorpayx: false, cashfreep: false, openmoney: false },
    ],
    wins: [
      { icon: RefreshCcw, title: 'Cheaper IMPS & UPI', desc: 'Save Rs.1-2 per transaction over RazorpayX — at 10,000 payouts/month that is Rs.10,000-Rs.20,000 saved.' },
      { icon: Shield, title: 'Card-based Payouts', desc: 'Disburse directly to prepaid cards for better expense control — unique to RupeeFlow.' },
      { icon: Banknote, title: 'Credit Float for Payouts', desc: 'Delay disbursements using embedded credit lines. No other payout platform offers this.' },
      { icon: Zap, title: 'Unified Stack', desc: 'Collect, pay out, and lend from the same dashboard — no stitching together multiple tools.' },
    ],
  },
  {
    id: 'credit',
    label: 'Credit & Lending',
    icon: Banknote,
    tagline: 'vs Capital Float · Lendingkart · Indifi · FlexiLoans',
    competitors: [
      { id: 'capitalfloat', name: 'Capital Float', tagline: 'lending' },
      { id: 'lendingkart', name: 'Lendingkart', tagline: 'lending' },
      { id: 'indifi', name: 'Indifi', tagline: 'lending' },
    ],
    rows: [
      { feature: 'Merchant Cash Advance', category: 'Products', rupeeflow: true, capitalfloat: true, lendingkart: true, indifi: true },
      { feature: 'Invoice Financing', category: 'Products', rupeeflow: true, capitalfloat: true, lendingkart: true, indifi: true },
      { feature: 'B2B BNPL (Embedded)', category: 'Products', rupeeflow: true, capitalfloat: false, lendingkart: false, indifi: false },
      { feature: 'NRI Emergency Loans', category: 'Products', rupeeflow: true, capitalfloat: false, lendingkart: false, indifi: false },
      { feature: 'Personal Credit Line', category: 'Products', rupeeflow: true, capitalfloat: true, lendingkart: false, indifi: false },
      { feature: 'Approval Time', category: 'Speed', rupeeflow: '3 minutes', capitalfloat: '24–48 hrs', lendingkart: '24–72 hrs', indifi: '48 hrs' },
      { feature: 'Embedded at Checkout', category: 'Speed', rupeeflow: true, capitalfloat: false, lendingkart: false, indifi: false },
      { feature: 'No Collateral Required', category: 'Terms', rupeeflow: true, capitalfloat: true, lendingkart: false, indifi: false },
      { feature: 'UPI-based Repayment', category: 'Terms', rupeeflow: true, capitalfloat: false, lendingkart: false, indifi: false },
      { feature: 'Tied to Transaction History', category: 'Terms', rupeeflow: true, capitalfloat: false, lendingkart: false, indifi: false },
      { feature: 'Credit + Payments Bundle', category: 'Ecosystem', rupeeflow: true, capitalfloat: false, lendingkart: false, indifi: false },
      { feature: 'White-label Lending API', category: 'Ecosystem', rupeeflow: true, capitalfloat: false, lendingkart: false, indifi: false },
    ],
    wins: [
      { icon: Clock, title: '3-Minute Approval', desc: 'AI-powered underwriting on live transaction data. Competitors still run 24–72 hour manual assessments.' },
      { icon: Zap, title: 'Credit at Checkout', desc: 'Only RupeeFlow embeds B2B BNPL directly into your payment flow — zero friction for buyers.' },
      { icon: RefreshCcw, title: 'UPI Auto-Repayment', desc: 'Repayments deducted automatically from daily sales. No chasing, no missed EMIs.' },
      { icon: TrendingUp, title: 'One Ecosystem', desc: 'Credit underwritten on your own RupeeFlow transaction history — no external bureau delay.' },
    ],
  },
]

// ── Cell renderer ─────────────────────────────────────────────────────────────
function Cell({ value, highlight }: { value: CellValue; highlight?: boolean }) {
  if (value === true)
    return <CheckCircle2 size={17} className={`mx-auto ${highlight ? 'text-emerald-400' : 'text-emerald-500'}`} />
  if (value === false)
    return <X size={15} className="mx-auto text-gray-300" />
  if (value === null)
    return <Minus size={14} className="mx-auto text-gray-300" />
  return (
    <span className={`text-xs font-semibold ${highlight ? 'text-emerald-400' : 'text-gray-600'}`}>
      {value}
    </span>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function CompareProductsPage() {
  const [activeTab, setActiveTab] = useState('payments')
  const cat = categories.find((c) => c.id === activeTab)!

  return (
    <>
      {/* ── HERO — dark ── */}
      <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-[#060D0A] to-[#0C1F18] overflow-hidden">
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
            <span className="inline-block text-emerald-400 text-xs font-semibold tracking-widest uppercase border border-emerald-400/30 rounded-full px-4 py-1 mb-5">
              Compare Products
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight">
              Why Businesses{' '}
              <span className="bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
                Switch to RupeeFlow
              </span>
            </h1>
            <p className="text-gray-400 mt-5 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              See how our Payments, Payouts, and Credit stack compares to
              Razorpay, Cashfree, PayU, and leading lending platforms — side by side.
            </p>

            {/* quick win pills */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {[
                '0.65% UPI rate — lowest in class',
                'T+1 settlement',
                '3-min credit approval',
                'Payments + Lending in one platform',
              ].map((t) => (
                <span
                  key={t}
                  className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs rounded-full px-3 py-1 font-medium"
                >
                  <Star size={10} className="fill-emerald-400 text-emerald-400" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── CATEGORY TABS + TABLE — white ── */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <Container>

          {/* Tab switcher */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
            {categories.map(({ id, label, icon: Icon, tagline }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition duration-200 ${
                  activeTab === id
                    ? 'bg-gradient-to-b from-[#060D0A] to-[#0C1F18] text-white border-emerald-500/40 shadow-lg shadow-emerald-500/10'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-emerald-400 hover:text-emerald-600'
                }`}
              >
                <Icon size={15} />
                {label}
                <span className={`text-[10px] font-normal ${activeTab === id ? 'text-gray-400' : 'text-gray-400'}`}>
                  {tagline}
                </span>
              </button>
            ))}
          </div>

          {/* competitor intro strip */}
          <div className="mb-6 overflow-x-auto">
            <div className="min-w-[640px] grid gap-px bg-gray-100 rounded-2xl overflow-hidden"
              style={{ gridTemplateColumns: `1fr repeat(${cat.competitors.length + 1}, 1fr)` }}
            >
              <div className="bg-gray-50 px-4 py-4" />

              {/* RupeeFlow header */}
              <div className="bg-gradient-to-b from-[#060D0A] to-[#0C1F18] px-4 py-4 text-center">
                <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-500/30 rounded-full px-2.5 py-0.5 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 text-[10px] font-bold uppercase tracking-wider">You are here</span>
                </div>
                <p className="text-white font-black text-base">RupeeFlow</p>
                <p className="text-gray-400 text-xs mt-0.5">Full-stack fintech</p>
              </div>

              {/* Competitor headers */}
              {cat.competitors.map((c) => (
                <div key={c.id} className="bg-white px-4 py-4 text-center">
                  <p className="text-gray-900 font-bold text-base">{c.name}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{c.tagline}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison rows */}
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full" style={{ minWidth: `${cat.competitors.length * 130 + 280}px` }}>
              <thead className="sr-only">
                <tr>
                  <th>Feature</th>
                  <th>RupeeFlow</th>
                  {cat.competitors.map((c) => <th key={c.id}>{c.name}</th>)}
                </tr>
              </thead>
              <tbody>
                {cat.rows.map((row, i) => {
                  const isNewCategory =
                    i === 0 || cat.rows[i - 1].category !== row.category

                  return (
                    <>
                      {isNewCategory && row.category && (
                        <tr key={`cat-${row.category}`} className="bg-gray-50">
                          <td
                            colSpan={cat.competitors.length + 2}
                            className="px-5 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest"
                          >
                            {row.category}
                          </td>
                        </tr>
                      )}
                      <tr
                        key={row.feature}
                        className={`border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}`}
                      >
                        {/* Feature name */}
                        <td className="px-5 py-3.5 text-gray-700 text-sm font-medium w-[220px] sm:w-[260px]">
                          {row.feature}
                        </td>

                        {/* RupeeFlow — highlighted */}
                        <td className="px-4 py-3.5 text-center bg-emerald-500/[0.04] border-x border-emerald-500/10">
                          <Cell value={row.rupeeflow} highlight />
                        </td>

                        {/* Competitors */}
                        {cat.competitors.map((c) => (
                          <td key={c.id} className="px-4 py-3.5 text-center">
                            <Cell value={row[c.id] as CellValue} />
                          </td>
                        ))}
                      </tr>
                    </>
                  )
                })}
              </tbody>
            </table>
          </div>

          <p className="text-center text-gray-400 text-xs mt-4">
            Rates are approximate market rates as of 2024. Competitor pricing may vary by plan and volume.
          </p>
        </Container>
      </section>

      {/* ── WHERE RUPEEFLOW WINS — gray-50 ── */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="inline-block text-emerald-600 text-xs font-semibold tracking-widest uppercase border border-emerald-200 rounded-full px-4 py-1 mb-4 bg-white">
              Where RupeeFlow Wins
            </span>
            <h2 className="rf-h2 text-gray-900">
              The Advantages That{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Actually Matter
              </span>
            </h2>
            <p className="rf-lead text-gray-500 mt-4">
              Select a category above to see specific advantages, or see the common themes below.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {cat.wins.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group flex items-start gap-5 bg-white border border-gray-200 rounded-2xl p-6 sm:p-7
                  hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/10 transition duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition duration-300">
                  <Icon size={20} className="text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-gray-900 font-bold text-base mb-1.5">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── QUICK LINKS — white ── */}
      <section className="py-12 sm:py-16 bg-white border-y border-gray-100">
        <Container>
          <p className="text-center text-gray-400 text-xs font-bold uppercase tracking-widest mb-8">
            Explore Our Products
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              { label: 'Payment Gateway', href: '/payment-gateway' },
              { label: 'UPI Collections', href: '/upi-collections' },
              { label: 'Payment Links', href: '/payment-links' },
              { label: 'QR Code', href: '/qr-code' },
              { label: 'Merchant Cash Advance', href: '/merchant-cash-advance' },
              { label: 'Invoice Financing', href: '/invoicing-financing' },
              { label: 'Personal Credit Line', href: '/personal-credit-line' },
              { label: 'Bulk Payouts', href: '/bulk-payouts' },
              { label: 'NRI Emergency Loans', href: '/nri-emergency-loans' },
              { label: 'Pricing', href: '/pricing' },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center justify-between gap-2 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:border-emerald-400 hover:text-emerald-600 hover:bg-emerald-50 transition duration-200 group"
              >
                {label}
                <ArrowRight size={13} className="shrink-0 opacity-0 group-hover:opacity-100 transition duration-200" />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA — dark ── */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-[#0C1F18] to-[#0a1a0f]">
        <Container>
          <div className="rounded-3xl border border-emerald-500/20 bg-white/5 p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-3">
                Ready to switch?
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                Get Lower Rates &{' '}
                <span className="bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
                  More Products
                </span>{' '}
                in One Platform
              </h2>
              <p className="text-gray-400 mt-4 text-sm sm:text-base leading-relaxed">
                Join businesses saving on transaction fees while unlocking payments, payouts,
                cards, and credit — all from a single RupeeFlow integration.
              </p>
              <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'Migrate in under 2 weeks',
                  'Dedicated migration support',
                  'Match your current rates + more',
                  'No downtime during switch',
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
              <MainCTA label="View Pricing" destination="/pricing" />
              <p className="text-gray-600 text-xs text-center">Free migration consultation</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
