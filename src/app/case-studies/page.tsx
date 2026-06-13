'use client'

import { useEffect, useRef, useState } from 'react'
import Container from '@/components/ui/Container'
import MainCTA from '@/components/ui/mainCTA'
import {
  AlertTriangle,
  BarChart3,
  Banknote,
  CheckCircle2,
  Clock,
  CreditCard,
  RefreshCcw,
  Shield,
  TrendingUp,
  Users,
  Wallet,
  Zap,
  Building2,
  ArrowRight,
  Target,
  Quote,
} from 'lucide-react'

// ── Animated counter ──────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1800, triggered: boolean) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!triggered) return
    let start: number | null = null
    const tick = (ts: number) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(eased * target))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [triggered, target, duration])
  return value
}

function CounterBlock({
  prefix = '',
  target,
  suffix = '',
  label,
  sublabel,
}: {
  prefix?: string
  target: number
  suffix?: string
  label: string
  sublabel?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [triggered, setTriggered] = useState(false)
  const value = useCountUp(target, 1800, triggered)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setTriggered(true) },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="text-center px-4 py-6 sm:py-8">
      <p className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent leading-none tracking-tight">
        {prefix}{value}{suffix}
      </p>
      <p className="text-[var(--foreground)] font-semibold mt-3 text-sm sm:text-base">{label}</p>
      {sublabel && <p className="text-gray-500 text-xs sm:text-sm mt-1">{sublabel}</p>}
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function CaseStudyPage() {
  return (
    <>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          1. HERO — dark brand
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-[#060D0A] to-[#0C1F18] overflow-hidden"
      >
        {/* subtle grid overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <Container>
          {/* breadcrumb + badges */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <span className="inline-flex items-center gap-1.5 text-xs text-gray-400">
              Case Studies
              <ArrowRight size={12} className="text-gray-600" />
            </span>
            <span className="inline-block bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold rounded-full px-3 py-1">
              B2B Marketplace
            </span>
            <span className="inline-block bg-[var(--card)] border border-[var(--border)] text-gray-400 text-xs rounded-full px-3 py-1">
              Collections · Payouts · Prepaid Cards · Lending
            </span>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-[var(--foreground)] leading-[1.12] tracking-tight">
              From 79% to{' '}
              <span className="bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
                97% Collection Rate
              </span>{' '}
              — How NexaCommerce Scaled to ₹12Cr Monthly GMV
            </h1>

            <p className="text-gray-400 mt-5 text-base sm:text-lg leading-relaxed max-w-2xl">
              A B2B marketplace connecting 2,400+ manufacturers and distributors
              overhauled its entire financial stack — collections, payouts, corporate
              cards, and embedded lending — in under 8 weeks with RupeeFlow.
            </p>
          </div>

          {/* hero metric strip */}
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-3xl">
            {[
              { value: '+18%', label: 'Collection Success Rate', accent: true },
              { value: '₹12Cr+', label: 'Monthly GMV Processed', accent: false },
              { value: '18 Min', label: 'Avg. Payout Turnaround', accent: false },
              { value: '4.2×', label: 'Revenue Growth (YoY)', accent: false },
            ].map(({ value, label, accent }) => (
              <div
                key={label}
                className={`rounded-2xl border p-4 sm:p-5 ${accent
                  ? 'bg-emerald-500/10 border-emerald-500/30'
                  : 'bg-[var(--card)] border-[var(--border)]'
                  }`}
              >
                <p className={`text-xl sm:text-2xl font-black ${accent ? 'text-emerald-400' : 'text-[var(--foreground)]'}`}>
                  {value}
                </p>
                <p className="text-gray-400 text-xs mt-1 leading-snug">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <MainCTA label="Book a Demo" destination="/contact" />
            <a
              href="#results"
              className="inline-flex items-center gap-2 h-11 px-7 rounded-full border border-white/20 text-gray-300 text-sm font-semibold hover:border-white/40 hover:text-[var(--foreground)] transition duration-200"
            >
              See Full Results
              <ArrowRight size={15} />
            </a>
          </div>
        </Container>
      </section>


      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          2. CLIENT SNAPSHOT — white
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-10 sm:py-12 bg-[var(--card)] border-b border-gray-100">
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">

            {/* logo placeholder */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0">
              <Building2 size={32} className="text-gray-400" />
            </div>

            <div className="flex-1">
              <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-1">Client</p>
              <h2 className="text-gray-900 text-xl sm:text-2xl font-bold">NexaCommerce Technologies</h2>
              <p className="text-gray-500 text-sm mt-1">B2B Marketplace · Manufacturers & Distributors</p>
            </div>

            {/* snapshot pills */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {[
                { icon: Target, label: 'Industry', value: 'B2B Marketplace' },
                { icon: BarChart3, label: 'Monthly GMV', value: '₹12Cr+' },
                { icon: Users, label: 'Active Users', value: '2,400+' },
                { icon: Building2, label: 'Business Model', value: 'B2B + B2C' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-2.5 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5">
                  <Icon size={15} className="text-emerald-600 shrink-0" />
                  <div>
                    <p className="text-gray-400 text-[10px] font-semibold uppercase tracking-wide">{label}</p>
                    <p className="text-gray-900 text-sm font-bold leading-tight">{value}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </Container>
      </section>


      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          3. THE CHALLENGE — gray-50
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="inline-block text-rose-500 text-xs font-semibold tracking-widest uppercase border border-rose-200 rounded-full px-4 py-1 mb-4 bg-rose-50">
              The Challenge
            </span>
            <h2 className="rf-h2 text-gray-900">
              Four Critical{' '}
              <span className="bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent">
                Bottlenecks
              </span>{' '}
              Holding Growth Back
            </h2>
            <p className="rf-lead text-gray-500 mt-4">
              NexaCommerce was growing fast — but its legacy financial infrastructure was
              creating friction at every stage of the transaction lifecycle.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              {
                icon: Zap,
                color: 'bg-rose-50 border-rose-100',
                iconColor: 'text-rose-500',
                title: 'High UPI & Card Failure Rates',
                desc: 'Payment success rates languished at 79% due to bank routing failures and no retry logic — directly costing GMV on every checkout.',
              },
              {
                icon: Clock,
                color: 'bg-orange-50 border-orange-100',
                iconColor: 'text-orange-500',
                title: 'Slow & Manual Vendor Payouts',
                desc: 'Distributor settlements took 4+ hours through manual NEFT batch files. Disputes and reconciliation consumed the entire finance team\'s bandwidth.',
              },
              {
                icon: CreditCard,
                color: 'bg-amber-50 border-amber-100',
                iconColor: 'text-amber-500',
                title: 'Zero Expense Control',
                desc: 'Field sales teams used personal cards and reimbursements. No spending caps, no real-time visibility, no category-level controls.',
              },
              {
                icon: Wallet,
                color: 'bg-red-50 border-red-100',
                iconColor: 'text-red-500',
                title: 'No Embedded Credit for Buyers',
                desc: 'Buyers couldn\'t access working capital at checkout. Orders were lost when distributors couldn\'t pay upfront, limiting GMV and order size.',
              },
            ].map(({ icon: Icon, color, iconColor, title, desc }) => (
              <div
                key={title}
                className={`flex items-start gap-5 rounded-2xl border p-6 sm:p-7 bg-[var(--card)] ${color} hover:shadow-md transition duration-300`}
              >
                <div className={`w-11 h-11 rounded-xl ${color} border flex items-center justify-center shrink-0`}>
                  <Icon size={20} className={iconColor} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle size={13} className="text-rose-400 shrink-0" />
                    <h3 className="text-gray-900 font-bold text-base">{title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>


      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          4. THE SOLUTION — white
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-12 sm:py-16 lg:py-24 bg-[var(--card)]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="inline-block text-emerald-600 text-xs font-semibold tracking-widest uppercase border border-emerald-200 rounded-full px-4 py-1 mb-4 bg-emerald-50">
              The Solution
            </span>
            <h2 className="rf-h2 text-gray-900">
              One Platform.{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Four Modules.
              </span>{' '}
              8-Week Deployment.
            </h2>
            <p className="rf-lead text-gray-500 mt-4">
              RupeeFlow replaced four disconnected tools with a single unified
              financial infrastructure — no engineering re-build required.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              {
                icon: Zap,
                module: 'Collections',
                tag: 'UPI + Card',
                desc: 'Intelligent payment orchestration with smart routing, auto-retry logic, and real-time success monitoring across all payment methods.',
                features: [
                  'Smart bank routing with failover',
                  'Auto-retry on soft declines',
                  'UPI Intent, Collect & QR',
                  'Card + NetBanking + Wallets',
                  'Real-time webhook alerts',
                ],
                gradient: 'from-emerald-500 to-teal-500',
              },
              {
                icon: RefreshCcw,
                module: 'Payouts',
                tag: 'Instant Settlements',
                desc: 'Fully automated vendor disbursements via IMPS/NEFT/UPI with bulk upload, approval workflows, and real-time status tracking.',
                features: [
                  'Bulk payout via CSV / API',
                  'IMPS 24×7 instant transfers',
                  'Multi-level approval workflows',
                  'Automated reconciliation',
                  'Real-time payout status',
                ],
                gradient: 'from-teal-500 to-cyan-500',
              },
              {
                icon: CreditCard,
                module: 'Prepaid Corporate Cards',
                tag: 'Expense Control',
                desc: 'Virtual and physical prepaid cards for every team and use-case — with category-level spend controls, real-time alerts, and automated expense reports.',
                features: [
                  'Instant virtual card issuance',
                  'Merchant category controls',
                  'Per-card spend limits',
                  'Real-time transaction alerts',
                  'Auto expense categorisation',
                ],
                gradient: 'from-cyan-500 to-blue-500',
              },
              {
                icon: Banknote,
                module: 'Embedded Lending',
                tag: 'B2B BNPL + Working Capital',
                desc: 'Credit-at-checkout for distributor buyers and working capital lines for sellers — underwritten on transaction history, no collateral needed.',
                features: [
                  'BNPL at checkout (0-click)',
                  'Credit lines up to ₹50L',
                  'UPI-based repayment',
                  'AI-driven credit assessment',
                  'White-labelled buyer experience',
                ],
                gradient: 'from-violet-500 to-purple-500',
              },
            ].map(({ icon: Icon, module, tag, desc, features, gradient }) => (
              <div
                key={module}
                className="group relative bg-[var(--card)] border border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-500/10 transition duration-300 overflow-hidden"
              >
                {/* subtle gradient bg on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`} />

                <div className="relative">
                  {/* header */}
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shrink-0`}>
                      <Icon size={22} className="text-[var(--foreground)]" />
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 rounded-full px-2.5 py-1 uppercase tracking-wide">
                      {tag}
                    </span>
                  </div>

                  <h3 className="text-gray-900 text-lg font-bold mb-2">{module}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{desc}</p>

                  {/* feature list */}
                  <ul className="space-y-2">
                    {features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-gray-600">
                        <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>


      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          5. RESULTS & IMPACT — dark
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="results" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-[#060D0A] to-[#0C1F18]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="inline-block text-emerald-400 text-xs font-semibold tracking-widest uppercase border border-emerald-400/30 rounded-full px-4 py-1 mb-4">
              Results & Impact
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--foreground)] leading-tight">
              Numbers That{' '}
              <span className="bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
                Speak for Themselves
              </span>
            </h2>
            <p className="text-gray-400 mt-4 text-base sm:text-lg">
              Measured across the first 90 days post-deployment.
            </p>
          </div>

          {/* animated counters */}
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/10 border border-[var(--border)] rounded-2xl overflow-hidden mb-12 sm:mb-16">
            <CounterBlock target={97} suffix="%" label="Collection Success Rate" sublabel="Up from 79%" />
            <CounterBlock prefix="₹" target={12} suffix="Cr+" label="Monthly GMV Processed" sublabel="Up from ₹3.2Cr" />
            <CounterBlock target={18} suffix=" Min" label="Average Payout Time" sublabel="Down from 4+ hours" />
            <CounterBlock target={68} suffix="%" label="Expense Leakage Reduced" sublabel="Via prepaid card controls" />
          </div>

          {/* before / after comparison */}
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-gray-500 text-sm font-semibold uppercase tracking-widest mb-6">
              Before vs. After Comparison
            </p>

            {/* header row */}
            <div className="grid grid-cols-[1fr_1fr_1fr] gap-px bg-[var(--card)] rounded-t-2xl overflow-hidden text-xs font-bold uppercase tracking-widest">
              <div className="bg-[#0a1a0f] px-4 sm:px-6 py-3 text-gray-500">Metric</div>
              <div className="bg-[#0a1a0f] px-4 sm:px-6 py-3 text-gray-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0" />
                Before
              </div>
              <div className="bg-[#0a1a0f] px-4 sm:px-6 py-3 text-emerald-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                After RupeeFlow
              </div>
            </div>

            {/* data rows */}
            {[
              {
                metric: 'Collection Success Rate',
                before: '79%',
                after: '97%',
                delta: '+18pp',
              },
              {
                metric: 'Avg. Payout Processing',
                before: '4+ hours',
                after: '< 20 minutes',
                delta: '93% faster',
              },
              {
                metric: 'Buyer Credit Access',
                before: '₹0 (none)',
                after: '₹45L credit line',
                delta: 'New capability',
              },
              {
                metric: 'Expense Visibility',
                before: 'Manual spreadsheets',
                after: 'Real-time dashboard',
                delta: 'Full control',
              },
              {
                metric: 'Monthly GMV',
                before: '₹3.2 Cr',
                after: '₹12 Cr+',
                delta: '4.2× growth',
              },
              {
                metric: 'Finance Team Hours/Week',
                before: '~40 hrs (manual ops)',
                after: '~6 hrs (oversight only)',
                delta: '85% saved',
              },
            ].map((row, i) => (
              <div
                key={row.metric}
                className={`grid grid-cols-[1fr_1fr_1fr] gap-px ${i % 2 === 0 ? 'bg-[var(--card)]/[0.04]' : 'bg-[var(--card)]/[0.02]'}`}
              >
                <div className="px-4 sm:px-6 py-4 text-gray-300 text-sm font-medium border-t border-white/5">{row.metric}</div>
                <div className="px-4 sm:px-6 py-4 text-rose-400 text-sm border-t border-white/5">{row.before}</div>
                <div className="px-4 sm:px-6 py-4 border-t border-white/5">
                  <span className="text-emerald-400 text-sm font-semibold">{row.after}</span>
                  <span className="ml-2 text-[10px] bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 rounded-full px-2 py-0.5 font-semibold">
                    {row.delta}
                  </span>
                </div>
              </div>
            ))}

            <div className="h-1 bg-gradient-to-r from-[#00EF64] to-[#53BEC2] rounded-b-2xl" />
          </div>
        </Container>
      </section>


      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          6. TESTIMONIAL — white
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-12 sm:py-16 lg:py-24 bg-[var(--card)]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="relative bg-gray-50 border border-gray-200 rounded-3xl p-8 sm:p-12 overflow-hidden">

              {/* large quote mark */}
              <Quote
                size={80}
                className="absolute -top-2 -left-2 text-emerald-100 rotate-180"
                aria-hidden="true"
              />

              <div className="relative">
                <p className="text-gray-900 text-lg sm:text-xl lg:text-2xl font-semibold leading-relaxed mb-8">
                  "RupeeFlow transformed our financial stack in under 8 weeks — no painful migration, no engineering bottleneck.
                  Our collection success jumped to 97%, settlements now happen in minutes, and our buyers love the BNPL checkout
                  option. This is what modern B2B finance infrastructure should look like."
                </p>

                <div className="flex items-center gap-4">
                  {/* avatar placeholder */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shrink-0 text-[var(--foreground)] font-bold text-lg">
                    R
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold">Rajan Mehta</p>
                    <p className="text-gray-500 text-sm">CFO, NexaCommerce Technologies</p>
                  </div>

                  {/* company logo placeholder */}
                  <div className="ml-auto hidden sm:flex items-center gap-2 bg-[var(--card)] border border-gray-200 rounded-xl px-4 py-2.5">
                    <Building2 size={16} className="text-gray-400" />
                    <span className="text-gray-600 text-sm font-semibold">NexaCommerce</span>
                  </div>
                </div>

                {/* verified metrics row */}
                <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap gap-4">
                  {[
                    { icon: TrendingUp, text: '4.2× revenue growth in 12 months' },
                    { icon: Shield, text: 'RBI-compliant infrastructure' },
                    { icon: Zap, text: '8-week deployment' },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-2 text-gray-500 text-sm">
                      <Icon size={14} className="text-emerald-500 shrink-0" />
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>


      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          7. FINAL CTA — dark
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-[#0C1F18] to-[#0a1a0f]">
        <Container>
          <div className="rounded-3xl border border-emerald-500/20 bg-[var(--card)] p-6 sm:p-10 lg:p-14">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">

              <div className="max-w-xl">
                <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-3">
                  Ready to scale your financial stack?
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[var(--foreground)] leading-tight">
                  Get the Same Results for{' '}
                  <span className="bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
                    Your Business
                  </span>
                </h2>
                <p className="text-gray-400 mt-4 text-sm sm:text-base leading-relaxed">
                  Join hundreds of B2B and B2C businesses using RupeeFlow to collect faster,
                  pay instantly, control expenses, and unlock embedded credit — all from one platform.
                </p>

                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'No integration backlog required',
                    'Live in as fast as 2 weeks',
                    'Dedicated onboarding team',
                    'RBI-compliant & ISO 27001',
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
                <p className="text-gray-600 text-xs text-center mt-1">
                  Free consultation · No commitment
                </p>
              </div>

            </div>
          </div>
        </Container>
      </section>

    </>
  )
}
