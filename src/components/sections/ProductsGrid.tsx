'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, X, Check } from 'lucide-react'

/* ─── Product data from PRD ─────────────────────────────────────── */
const products = [
  {
    id: 'ai-credit',
    title: 'AI Credit Scoring\nfor Bharat',
    shortDesc:
      'Score 190M unbanked Indians using UPI behaviour, GST data & alternative signals.',
    gradient: 'from-[#1e1b4b] via-[#312e81] to-[#4338ca]',
    accent: '#a5b4fc',
    span: 'lg:col-span-2',
    href: '/merchant-cash-advance',
    expandedTitle: 'AI Credit Scoring for Bharat',
    expandedDesc:
      'Score 190 million credit-invisible Indians with zero CIBIL history — using UPI transaction patterns, GST filings, utility bill punctuality, and 5 more alternative data signals. A three-layer ML ensemble outputs a 0–850 score, mapped to loan eligibility in real time.',
    bullets: [
      'Score users with zero CIBIL history via 8 alternative data sources',
      'XGBoost + neural net + RBI-compliant rule-based guardrails',
      'Starter loan programme — 70% graduate to larger loans in 6 months',
      'Own the next 200M Indian borrowers — no competitor at scale',
    ],
    cta: 'Explore AI Credit',
    stat: { value: '190M', label: 'Credit-invisible Indians scored' },
  },
  {
    id: 'embedded-finance',
    title: 'Embedded Finance\nas a Service',
    shortDesc:
      'Let Zoho, Vyapar, Shopify India plug in RupeeFlow credit & payments via 3-line SDK.',
    gradient: 'from-[#022c22] via-[#065f46] to-[#059669]',
    accent: '#6ee7b7',
    span: 'lg:col-span-1',
    href: '/payment-gateway',
    expandedTitle: 'Embedded Finance as a Service',
    expandedDesc:
      'RupeeFlow becomes the invisible financial engine inside the tools SMBs already use daily — Zoho Books, Vyapar, Tally, Shopify India. Three lines of SDK code is all it takes to embed payments, credit, and payouts inside any partner app.',
    bullets: [
      'White-label JS/Android/iOS SDK — 3 lines to integrate',
      'Revenue-share model: partners earn on every transaction',
      'Payment widget, invoice credit, vendor payouts, GST payments',
      'Becomes Stripe for Indian B2B SaaS — invisible infrastructure play',
    ],
    cta: 'Explore Embedded Finance',
    stat: { value: '500+', label: 'Partner integrations via open API' },
  },
  {
    id: 'whatsapp-banking',
    title: 'WhatsApp-Native\nBanking',
    shortDesc:
      'Full banking inside WhatsApp — payments, credit, bills in 12 Indian languages.',
    gradient: 'from-[#14532d] via-[#166534] to-[#16a34a]',
    accent: '#86efac',
    span: 'lg:col-span-1',
    href: '/upi-collections',
    expandedTitle: 'WhatsApp-Native Banking',
    expandedDesc:
      'India has 500M+ WhatsApp users. Banking should live where people already are. A user types "500 bhejo Suresh ko" in Hindi and the NLP engine understands, confirms, and executes the UPI payment — all without leaving WhatsApp.',
    bullets: [
      'Send money, check balance, pay bills via natural language',
      'NLP intent engine fine-tuned on 50K+ Indian financial commands',
      'Supports 12 Indian languages with voice and text input',
      'Zero app download friction — reach 500M users instantly',
    ],
    cta: 'Explore WhatsApp Banking',
    stat: { value: '500M+', label: 'WhatsApp users in India' },
  },
  {
    id: 'supply-chain',
    title: 'Supply Chain\nFinance Platform',
    shortDesc:
      'Finance small vendors of D-Mart, Tata, Reliance via invoices — anchor-backed risk.',
    gradient: 'from-[#0c1a3a] via-[#1e3a8a] to-[#1d4ed8]',
    accent: '#93c5fd',
    span: 'lg:col-span-1',
    href: '/invoicing-financing',
    expandedTitle: 'Supply Chain Finance Platform',
    expandedDesc:
      "Finance the small vendors who supply India's largest anchors — D-Mart, Tata, Reliance. Every invoice is backed by an anchor PO, eliminating default risk. TReDS integration + e-invoicing APIs make disbursals instant.",
    bullets: [
      'Anchor-backed risk model — invoice = collateral',
      'TReDS + OCEN + e-invoicing API integration',
      'High ticket size, low default risk — anchor de-risks every loan',
      '63M MSMEs with $530B unmet credit demand',
    ],
    cta: 'Explore Supply Chain Finance',
    stat: { value: '$530B', label: 'MSME unmet credit demand' },
  },
  {
    id: 'nri-superapp',
    title: 'NRI Financial\nSuper-App',
    shortDesc:
      'One app for 32M NRIs: remit, invest, manage family finances, get NRI loans.',
    gradient: 'from-[#431407] via-[#9a3412] to-[#ea580c]',
    accent: '#fdba74',
    span: 'lg:col-span-1',
    href: '/nri-emergency-loans',
    expandedTitle: 'NRI Financial Super-App',
    expandedDesc:
      'The 32M-strong NRI diaspora sends $100B+ to India annually — yet no single app owns this journey. RupeeFlow offers cross-border UPI, FEMA-compliant multi-currency accounts, family finance management, and NRI emergency loans in one place.',
    bullets: [
      'Cross-border UPI + FEMA-compliant multi-currency accounts',
      "Family finance dashboard — manage relatives' bills from abroad",
      'NRI emergency loans disbursed in 2 hours',
      'Underserved $100B+ remittance market — no dominant player',
    ],
    cta: 'Explore NRI Super-App',
    stat: { value: '$100B+', label: 'Annual NRI remittances to India' },
  },
  {
    id: 'ai-treasury',
    title: 'AI Treasury\nfor SMBs',
    shortDesc:
      'Predict cash flow gaps, auto-invest idle funds, pre-approve credit proactively.',
    gradient: 'from-[#0f172a] via-[#1e293b] to-[#334155]',
    accent: '#94a3b8',
    span: 'lg:col-span-1',
    href: '/analytics',
    expandedTitle: 'AI Treasury for SMBs',
    expandedDesc:
      "Most SMBs don't have a CFO. RupeeFlow's AI Treasury becomes their intelligent finance co-pilot — predicting cash flow gaps 30 days ahead, sweeping idle funds into liquid mutual funds overnight, and pre-approving credit before a crunch hits.",
    bullets: [
      'Predictive ML forecasts cash flow gaps 30 days ahead',
      'Auto-sweep idle funds to liquid MFs overnight',
      'Account Aggregator data for real-time business health scoring',
      'Makes RupeeFlow indispensable — not just useful, but critical',
    ],
    cta: 'Explore AI Treasury',
    stat: { value: '30 days', label: 'Cash flow prediction horizon' },
  },
  {
    id: 'gig-worker',
    title: 'Gig Worker\nFinancial OS',
    shortDesc:
      'Earned wage access, daily payouts, micro-insurance & BNPL for 80M gig workers.',
    gradient: 'from-[#4a044e] via-[#7e22ce] to-[#a855f7]',
    accent: '#d8b4fe',
    span: 'lg:col-span-2',
    href: '/salary-disbursements',
    expandedTitle: 'Gig Worker Financial OS',
    expandedDesc:
      "India's 80M+ gig workers (Swiggy, Ola, Urban Company) earn daily but are paid weekly or monthly. RupeeFlow gives them earned wage access, daily payouts via UPI AutoPay, IRDAI micro-insurance, and BNPL credit — all without a salary slip.",
    bullets: [
      "Earned wage access — withdraw today's earnings today",
      'UPI AutoPay daily payouts — no waiting for payday',
      'IRDAI micro-insurance APIs — health + accident cover',
      'BNPL credit engine — buy now, repay from future earnings',
    ],
    cta: 'Explore Gig Worker OS',
    stat: { value: '80M+', label: 'Gig workers in India' },
  },
]

/* ─── Placeholder visual per product ────────────────────────────── */
function CardVisual({ id, accent }: { id: string; accent: string }) {
  const visuals: Record<string, React.ReactNode> = {
    'ai-credit': (
      <div className="flex flex-col gap-2 w-full">
        {[85, 65, 45, 30].map((w, i) => (
          <div key={i} className="flex items-center gap-2">
            <div
              className="text-[10px] font-mono opacity-60 w-8"
              style={{ color: accent }}
            >
              {['UPI', 'GST', 'UTIL', 'AGR'][i]}
            </div>
            <div
              className="h-1.5 rounded-full opacity-40 transition-all"
              style={{ width: `${w}%`, background: accent }}
            />
          </div>
        ))}
        <div className="mt-2 text-xs font-bold" style={{ color: accent }}>
          Score: 742 / 850
        </div>
      </div>
    ),
    'embedded-finance': (
      <div
        className="font-mono text-[10px] leading-relaxed opacity-70"
        style={{ color: accent }}
      >
        <div>import RupeeFlow from</div>
        <div className="ml-2 opacity-60">&apos;@rupeeflow/sdk&apos;</div>
        <div className="mt-1">const rf = RupeeFlow.init{'({'}</div>
        <div className="ml-2 opacity-60">
          partnerKey: &apos;pk_live_xxxx&apos;
        </div>
        <div>{'})'}</div>
        <div>rf.mount(&apos;#invoice&apos;)</div>
      </div>
    ),
    'whatsapp-banking': (
      <div className="flex flex-col gap-1.5 w-full">
        {[
          { msg: '500 bhejo Suresh ko', type: 'out' },
          { msg: 'Sending ₹500 to Suresh via UPI. Confirm?', type: 'in' },
          { msg: 'Haan', type: 'out' },
          { msg: '✓ ₹500 sent! Ref: RF29481', type: 'in' },
        ].map((m, i) => (
          <div
            key={i}
            className={`text-[10px] px-2 py-1 rounded-lg max-w-[80%] ${m.type === 'out' ? 'ml-auto' : ''}`}
            style={{
              background: m.type === 'in' ? `${accent}22` : `${accent}44`,
              color: accent,
            }}
          >
            {m.msg}
          </div>
        ))}
      </div>
    ),
    'supply-chain': (
      <div className="flex flex-col gap-2 w-full">
        <div
          className="flex justify-between text-[10px]"
          style={{ color: accent }}
        >
          <span className="opacity-60">Vendor Invoice</span>
          <span className="font-bold">₹4,80,000</span>
        </div>
        <div
          className="h-px w-full opacity-20"
          style={{ background: accent }}
        />
        <div className="text-[10px] opacity-60" style={{ color: accent }}>
          Anchor: D-Mart Ltd
        </div>
        <div className="flex gap-1 mt-1">
          <div
            className="h-1.5 flex-1 rounded-full opacity-70"
            style={{ background: accent }}
          />
          <div
            className="h-1.5 w-8 rounded-full opacity-30"
            style={{ background: accent }}
          />
        </div>
        <div className="text-[10px] font-bold mt-1" style={{ color: accent }}>
          Disbursed in 4 hrs
        </div>
      </div>
    ),
    'nri-superapp': (
      <div className="flex flex-col gap-2 w-full">
        <div className="text-[10px] opacity-60" style={{ color: accent }}>
          Transfer
        </div>
        <div className="text-lg font-bold" style={{ color: accent }}>
          $2,400
        </div>
        <div className="text-[10px] opacity-60" style={{ color: accent }}>
          → ₹2,00,160 • 2 min
        </div>
        <div className="flex gap-2 mt-1">
          {['UAE', 'USA', 'UK', 'SG'].map(c => (
            <div
              key={c}
              className="text-[9px] px-1.5 py-0.5 rounded border opacity-50"
              style={{ borderColor: accent, color: accent }}
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    ),
    'ai-treasury': (
      <div className="flex flex-col gap-1 w-full">
        <div className="text-[10px] opacity-60" style={{ color: accent }}>
          Cash Flow Forecast
        </div>
        <div className="flex items-end gap-0.5 h-10">
          {[40, 55, 35, 65, 45, 75, 30, 60, 50, 80].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm opacity-60 transition-all"
              style={{
                height: `${h}%`,
                background: i > 6 ? `${accent}55` : accent,
              }}
            />
          ))}
        </div>
        <div className="text-[10px] font-bold mt-1" style={{ color: accent }}>
          Gap alert: Day 18 ↓
        </div>
      </div>
    ),
    'gig-worker': (
      <div className="flex flex-col gap-2 w-full">
        <div
          className="flex justify-between text-[10px]"
          style={{ color: accent }}
        >
          <span className="opacity-60">Today&apos;s earnings</span>
          <span className="font-bold">₹1,240</span>
        </div>
        <div
          className="h-1.5 rounded-full w-full opacity-20"
          style={{ background: accent }}
        >
          <div
            className="h-full rounded-full w-3/4 opacity-90"
            style={{ background: accent }}
          />
        </div>
        <div className="text-[10px] opacity-60" style={{ color: accent }}>
          Available to withdraw now
        </div>
        <div
          className="text-[10px] px-2 py-1 rounded-lg text-center font-semibold mt-1 opacity-80"
          style={{ background: `${accent}33`, color: accent }}
        >
          Withdraw ₹1,240
        </div>
      </div>
    ),
  }
  return <div className="w-full">{visuals[id]}</div>
}

/* ─── Expanded panel visual ──────────────────────────────────────── */
function ExpandedVisual({ product }: { product: (typeof products)[0] }) {
  return (
    <div
      className={`w-full h-64 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center p-8`}
    >
      <CardVisual id={product.id} accent={product.accent} />
    </div>
  )
}

/* ─── Main component ─────────────────────────────────────────────── */
export default function ProductsGrid() {
  const [expanded, setExpanded] = useState<string | null>(null)
  const active = products.find(p => p.id === expanded)

  return (
    <section className="border-t border-gray-200">
      {/* ── Section header ── */}
      <div className="border-b border-gray-200 px-8 py-12 md:px-12">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-gray-400">
          Platform
        </p>
        <h2 className="text-3xl font-extrabold tracking-tight text-[#0B1628] md:text-4xl">
          Everything your business needs
          <br />
          to grow financially.
        </h2>
      </div>

      {/* ── Product grid — border-separated, title top, visual fills card ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((p, i) => (
          <motion.div
            key={p.id}
            whileHover={{ backgroundColor: '#fafafa' }}
            className={`group relative flex flex-col cursor-pointer transition-colors bg-white
              border-b border-gray-200
              ${i % 2 === 0 ? 'md:border-r' : ''}
              ${i % 3 !== 2 ? 'lg:border-r' : 'lg:border-r-0'}
              ${i >= 5 ? 'md:border-b-0' : ''}
            `}
            onClick={() => setExpanded(p.id)}
          >
            {/* ── Card header: title + expand icon ── */}
            <div className="flex items-start justify-between gap-4 p-6 md:p-8">
              <h3 className="text-lg font-extrabold leading-snug tracking-tight text-[#0B1628] whitespace-pre-line">
                {p.title}
              </h3>
              <button
                className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-lg border border-gray-200 text-gray-400 transition group-hover:border-[#00875A] group-hover:text-[#00875A]"
                onClick={e => {
                  e.stopPropagation()
                  setExpanded(p.id)
                }}
              >
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* ── Visual — fills the rest of the card ── */}
            <div
              className={`mx-6 mb-6 md:mx-8 md:mb-8 flex-1 overflow-hidden rounded-xl bg-gradient-to-br ${p.gradient} p-6 min-h-[220px] flex items-center`}
            >
              <CardVisual id={p.id} accent={p.accent} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Expanded overlay ── */}
      <AnimatePresence>
        {active && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[200] bg-white/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setExpanded(null)}
            />

            {/* Panel wrapper — flex centering, no transform conflict */}
            <div className="fixed inset-0 z-[201] flex items-center justify-center p-4 md:p-8">
              <motion.div
                className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto overflow-x-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Close */}
                <button
                  onClick={() => setExpanded(null)}
                  className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:border-gray-400 hover:text-gray-800"
                >
                  <X className="h-4 w-4" />
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Left: content */}
                  <div className="border-b border-gray-200 p-8 lg:border-b-0 lg:border-r md:p-10">
                    <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-[#0B1628] md:text-3xl">
                      {active.expandedTitle}
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-gray-500 md:text-base">
                      {active.expandedDesc}
                    </p>

                    {/* Key points */}
                    <ul className="mt-6 space-y-2.5">
                      {active.bullets.map((b, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-[#0B1628]"
                        >
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#00875A]" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    {/* Stat */}
                    <div className="mt-6 rounded-xl border border-gray-100 bg-gray-50 px-5 py-4">
                      <div className="text-2xl font-extrabold text-[#0B1628]">
                        {active.stat.value}
                      </div>
                      <div className="text-xs text-gray-400">
                        {active.stat.label}
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link
                        href={active.href}
                        onClick={() => setExpanded(null)}
                        className="rounded-full bg-[#0B1628] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#00875A]"
                      >
                        {active.cta} →
                      </Link>
                      <Link
                        href="/pricing"
                        onClick={() => setExpanded(null)}
                        className="rounded-full border border-gray-200 px-5 py-2.5 text-sm font-semibold text-[#0B1628] transition hover:border-[#00875A] hover:text-[#00875A]"
                      >
                        See pricing
                      </Link>
                    </div>
                  </div>

                  {/* Right: visual placeholder */}
                  <div className="flex flex-col items-center justify-center p-8 md:p-10">
                    <ExpandedVisual product={active} />
                    <p className="mt-4 text-center text-xs text-gray-400">
                      Product visual — placeholder
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
