'use client'

import Container from '@/components/ui/Container'
import MainCTA from '@/components/ui/mainCTA'
import CardFAQ from '@/components/sections/CardFAQ'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

import {
  BarChart3,
  LineChart,
  PieChart,
  ShieldCheck,
  TrendingUp,
  Eye,
  Zap,
  Database,
} from 'lucide-react'

/* ---------------- REAL-TIME REVENUE CARD ---------------- */

function RevenueCard() {
  return (
    <motion.div
      className="bg-[var(--card)] rounded-2xl shadow-xl p-6 w-full max-w-md"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity }}
    >
      <div className="flex justify-between mb-4">
        <span className="text-xs text-gray-400">Payments</span>
        <TrendingUp className="text-emerald-500" size={18} />
      </div>

      <p className="text-2xl font-bold text-gray-900">₹12,000</p>

      <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-emerald-500"
          initial={{ width: 0 }}
          whileInView={{ width: '70%' }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>
    </motion.div>
  )
}

/* ---------------- TREND CHART ---------------- */

function TrendChart() {
  const bars = [35, 55, 48, 70, 62, 80]

  return (
    <motion.div
      className="bg-[var(--card)] rounded-2xl shadow-xl p-6 w-full max-w-md"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity }}
    >
      <p className="text-sm text-gray-400 mb-4">Revenue Trend</p>

      <div className="flex items-end gap-2 h-32">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="bg-emerald-500 rounded"
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            style={{ width: 12 }}
          />
        ))}
      </div>
    </motion.div>
  )
}

/* ---------------- CUSTOMER INSIGHTS ---------------- */

function CustomerInsightsCard() {
  return (
    <motion.div
      className="bg-[var(--card)] rounded-2xl shadow-xl p-6 w-full max-w-md space-y-4"
      animate={{ y: [0, -9, 0] }}
      transition={{ duration: 6, repeat: Infinity }}
    >
      {[
        { label: 'Reliable Customers', value: '82%', color: 'bg-emerald-500' },
        { label: 'Late Payments', value: '11%', color: 'bg-yellow-400' },
        { label: 'High Risk', value: '7%', color: 'bg-red-400' },
      ].map((item, i) => (
        <div key={i}>
          <div className="flex justify-between text-sm text-gray-600">
            <span>{item.label}</span>
            <span>{item.value}</span>
          </div>
          <div className="h-2 bg-gray-200 rounded mt-1 overflow-hidden">
            <div
              className={`h-full ${item.color}`}
              style={{ width: item.value }}
            />
          </div>
        </div>
      ))}
    </motion.div>
  )
}

/* ---------------- REPORT SUMMARY ---------------- */

function ReportCard() {
  return (
    <motion.div
      className="bg-[var(--card)] rounded-2xl shadow-xl p-6 w-full max-w-md"
      animate={{ y: [0, -7, 0] }}
      transition={{ duration: 6, repeat: Infinity }}
    >
      <p className="text-sm text-gray-400">Monthly Summary</p>

      <div className="mt-4 space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Revenue</span>
          <span className="font-semibold">₹3.2L</span>
        </div>
        <div className="flex justify-between">
          <span>Collected</span>
          <span className="font-semibold">₹2.8L</span>
        </div>
        <div className="flex justify-between">
          <span>Pending</span>
          <span className="font-semibold text-red-500">₹40K</span>
        </div>
      </div>
    </motion.div>
  )
}

/* ================= PAGE ================= */

export default function AnalyticsPage() {
  const faqs = [
    {
      question: 'What insights can I track with analytics?',
      answer:
        'Monitor payment trends, customer behavior, cash flow performance, and operational efficiency in real time.',
    },
    {
      question: 'Can I generate financial reports?',
      answer:
        'Yes. Export detailed reports for reconciliation, audits, and strategic planning.',
    },
    {
      question: 'Does analytics help improve cash flow?',
      answer:
        'Advanced insights help identify delays, optimize collections, and predict incoming revenue.',
    },
    {
      question: 'Can I track customer payment behavior?',
      answer:
        'Yes. Identify reliable customers, late payers, and risk patterns to improve decision-making.',
    },
    {
      question: 'Is my financial data secure?',
      answer:
        'All analytics data is encrypted and protected with enterprise-grade security standards.',
    },
  ]

  return (
    <>
      {/* HERO */}
      <section className="bg-[var(--background)] text-[var(--foreground)]">
        <Container className="py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-6xl font-bold leading-tight">
                Payment{' '}
                <span className="bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
                  Analytics
                </span>
              </h1>

              <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                Transform financial data into actionable insights and make
                smarter decisions with real-time payment intelligence.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  { icon: BarChart3, text: 'Real-time financial dashboards' },
                  { icon: LineChart, text: 'Trend & performance tracking' },
                  { icon: PieChart, text: 'Visual insights & reporting' },
                  { icon: ShieldCheck, text: 'Secure & reliable data access' },
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <li key={i} className="flex items-center gap-4">
                      <div className="w-9 h-9 rounded-lg bg-emerald-500/15 flex items-center justify-center">
                        <Icon size={18} className="text-emerald-400" />
                      </div>
                      <span className="text-gray-300">{item.text}</span>
                    </li>
                  )
                })}
              </ul>

              <div className="mt-10">
                <MainCTA label="View Insights" destination="/contact" />
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div
                className="
    w-full max-w-lg
    bg-[var(--card)]
    rounded-2xl
    shadow-2xl
    border border-gray-100
    aspect-video
    flex items-center justify-center
    overflow-hidden
  "
              >
                {/* Placeholder text — remove later */}
                <span className="text-gray-400 text-sm">
                  Analytics Preview Image
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FINANCIAL INSIGHTS */}
      <section className="py-8 bg-[var(--card)]">
        <Container>
          <h2 className="text-4xl font-semibold text-center">
            Financial Insights for{' '}
            <span className="text-emerald-600">Smarter Decisions</span>
          </h2>

          <div className="mt-20 space-y-28">
            {/* Real Time */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <RevenueCard />
              <FeatureContent
                title="Real-Time Dashboards"
                desc="Monitor payments and revenue from a unified dashboard updated instantly."
                bullets={[
                  'Live revenue tracking',
                  'Instant payment updates',
                  'Multi-device access',
                ]}
              />
            </div>

            {/* Trend */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <FeatureContent
                title="Trend Analysis"
                desc="Identify patterns and forecast future revenue."
                bullets={[
                  'Seasonal trend insights',
                  'Predict future inflows',
                  'Performance comparisons',
                ]}
              />
              <TrendChart />
            </div>

            {/* Customer */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <CustomerInsightsCard />
              <FeatureContent
                title="Customer Insights"
                desc="Understand behavior and detect risk early."
                bullets={[
                  'Reliable vs risky users',
                  'Late payment detection',
                  'Behavior analytics',
                ]}
              />
            </div>

            {/* Reports */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <FeatureContent
                title="Performance Reports"
                desc="Generate financial reports for planning & audits."
                bullets={[
                  'Exportable reports',
                  'Audit-ready statements',
                  'Cash flow summaries',
                ]}
              />
              <ReportCard />
            </div>
          </div>
        </Container>
      </section>

      {/* PREDICTIVE INTELLIGENCE */}
      <section className="py-28 bg-gradient-to-b from-white to-emerald-50">
        <Container className="text-center max-w-4xl">
          <h2 className="text-3xl font-semibold">
            Predict the Future of Your Revenue
          </h2>

          <p className="mt-4 text-gray-600">
            AI-powered insights anticipate cash flow gaps and growth
            opportunities.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              'Forecast revenue trends',
              'Detect payment slowdowns',
              'Identify growth opportunities',
            ].map((text, i) => (
              <div
                key={i}
                className="
      group relative overflow-hidden rounded-xl p-6 text-center
      bg-[var(--card)] shadow-md cursor-pointer
      transition-all duration-500 ease-out
      hover:-translate-y-2
      "
              >
                {/* Emerald glow background */}
                <div
                  className="
        absolute inset-0 opacity-0
        bg-gradient-to-br from-emerald-400/25 via-emerald-300/10 to-transparent
        blur-2xl transition duration-500
        group-hover:opacity-100
        "
                />

                {/* animated highlight sweep */}
                <div
                  className="
        absolute inset-0 opacity-0
        bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent
        translate-x-[-120%]
        group-hover:translate-x-[120%]
        group-hover:opacity-100
        transition-all duration-700 ease-out
        "
                />

                {/* content */}
                <div className="relative z-10 font-medium text-gray-800 group-hover:text-emerald-700 transition">
                  {text}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SMART ANALYTICS */}
      <section className="py-28 bg-gray-200">
        <Container>
          <h2 className="text-4xl font-bold text-center text-black">
            Smart Analytics Intelligence
          </h2>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: 'Revenue Forecasting' },
              { icon: Eye, title: 'Risk Detection' },
              { icon: Database, title: 'Performance Metrics' },
              { icon: PieChart, title: 'Customer Segmentation' },
              { icon: Zap, title: 'Growth Insights' },
            ].map((item, i) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  animate={{ y: [0, -6, 0] }}
                  className="
              group relative overflow-hidden rounded-xl p-7
              bg-gray-800
              border border-[var(--border)]
              cursor-pointer
              transition-all duration-500 ease-out
              hover:-translate-y-2
              hover:border-emerald-400/40
              hover:shadow-[0_0_35px_rgba(16,185,129,0.35)]
            "
                >
                  {/* emerald glow bloom */}
                  <div
                    className="
              absolute inset-0 opacity-0
              bg-gradient-to-br from-emerald-400/20 via-emerald-300/10 to-transparent
              blur-2xl transition duration-500
              group-hover:opacity-100
              "
                  />

                  {/* light sweep animation */}
                  <div
                    className="
              absolute inset-0 opacity-0
              bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent
              translate-x-[-120%]
              group-hover:translate-x-[120%]
              group-hover:opacity-100
              transition-all duration-700 ease-out
              "
                  />

                  {/* content */}
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 15,
                      }}
                      className="mb-4 text-emerald-400"
                    >
                      <Icon size={26} />
                    </motion.div>

                    <h3 className="font-semibold text-gray-200 group-hover:text-[var(--foreground)] transition">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-gray-200 py-24">
        <Container>
          <CardFAQ faqs={faqs} />
        </Container>
      </section>
    </>
  )
}

/* ---------- reusable feature text block ---------- */
type FeatureContentProps = {
  title: string
  desc: string
  bullets: string[]
}

function FeatureContent({ title, desc, bullets }: FeatureContentProps) {
  return (
    <div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-4 text-gray-600">{desc}</p>

      <ul className="mt-4 space-y-2">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
            {b}
          </li>
        ))}
      </ul>

      <Button className="mt-6 px-5 py-2 text-sm font-bold">Learn More →</Button>
    </div>
  )
}
