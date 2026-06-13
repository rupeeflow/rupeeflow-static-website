'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

/* ─── Animated Mockups ─────────────────────────────── */

function BulkUploadMockup() {
  const rows = [
    { name: 'Rahul Sharma',  amount: '₹5,000',  done: true },
    { name: 'Priya Patel',   amount: '₹12,500', done: true },
    { name: 'Amit Kumar',    amount: '₹8,200',  done: false },
  ]
  return (
    <div className="w-full space-y-3 p-2">
      {/* CSV indicator */}
      <motion.div
        className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-2xl p-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-11 h-13 bg-emerald-100 rounded-xl flex items-center justify-center px-2 py-3">
          <span className="text-emerald-600 text-xs font-extrabold tracking-tight">CSV</span>
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-gray-800">payment_links.csv</p>
          <p className="text-xs text-gray-400 mt-0.5">2,500 records · 1.2 MB</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2.5 7l3 3 6-6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </motion.div>

      {/* Progress */}
      <div className="flex items-center gap-3 px-1">
        <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-emerald-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: '68%' }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
          />
        </div>
        <span className="text-xs text-gray-500 font-medium flex-shrink-0">1,700 / 2,500</span>
      </div>

      {/* Generated rows */}
      <div className="space-y-2">
        {rows.map((row, i) => (
          <motion.div
            key={row.name}
            className="flex items-center gap-3 bg-[var(--card)] rounded-xl p-3 shadow-sm border border-gray-100"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.15 }}
          >
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-gray-500">{row.name[0]}</span>
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold text-gray-800">{row.name}</p>
              <p className="text-[10px] text-gray-400">rupeeflow.in/pay/…</p>
            </div>
            <span className="text-xs font-bold text-gray-900">{row.amount}</span>
            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${row.done ? 'bg-emerald-500' : 'bg-gray-200'}`}>
              {row.done && (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function WebhooksMockup() {
  const events = [
    { type: 'payment.captured', time: '10:24:01', color: '#22c55e' },
    { type: 'payment.failed',   time: '10:23:47', color: '#ef4444' },
    { type: 'refund.created',   time: '10:23:12', color: '#f59e0b' },
  ]
  return (
    <div className="w-full space-y-3 p-2">
      {/* Code snippet */}
      <motion.div
        className="bg-[#1e293b] rounded-2xl p-4 font-mono text-xs overflow-hidden"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-gray-400">POST /webhook/payment-link</p>
        <div className="mt-2 space-y-0.5">
          <p><span className="text-emerald-400">{'{'}</span></p>
          <p className="ml-4"><span className="text-blue-300">&quot;event&quot;</span><span className="text-gray-400">: </span><span className="text-yellow-300">&quot;payment.captured&quot;</span><span className="text-gray-400">,</span></p>
          <p className="ml-4"><span className="text-blue-300">&quot;amount&quot;</span><span className="text-gray-400">: </span><span className="text-orange-300">12000</span><span className="text-gray-400">,</span></p>
          <p className="ml-4"><span className="text-blue-300">&quot;currency&quot;</span><span className="text-gray-400">: </span><span className="text-yellow-300">&quot;INR&quot;</span></p>
          <p><span className="text-emerald-400">{'}'}</span></p>
        </div>
      </motion.div>

      {/* Live event feed */}
      <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest px-1">Live Events</p>
      <div className="space-y-2">
        {events.map((e, i) => (
          <motion.div
            key={e.type}
            className="flex items-center gap-3 bg-[var(--card)] rounded-xl px-3 py-2.5 shadow-sm border border-gray-100"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.15 }}
          >
            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: e.color }} />
            <p className="text-xs font-mono font-medium text-gray-700 flex-1">{e.type}</p>
            <span className="text-[10px] text-gray-400">{e.time}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function DashboardMockup() {
  const bars = [40, 65, 50, 80, 55, 90, 70, 95, 60, 75, 85, 100]
  return (
    <div className="w-full space-y-3 p-2">
      {/* Stat cards */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { value: '₹2.4L', label: 'Revenue',  color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { value: '1,284', label: 'Payments', color: 'text-blue-600',    bg: 'bg-blue-50'    },
          { value: '94%',   label: 'Success',  color: 'text-violet-600',  bg: 'bg-violet-50'  },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            className={`${s.bg} rounded-2xl p-3 text-center`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <p className={`text-base font-extrabold ${s.color}`}>{s.value}</p>
            <p className="text-[10px] text-gray-500 mt-0.5">{s.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Mini bar chart */}
      <motion.div
        className="bg-[var(--card)] rounded-2xl p-4 shadow-sm border border-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.35 }}
      >
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-semibold text-gray-700">Revenue Trend</p>
          <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">+28% ↑</span>
        </div>
        <div className="flex items-end gap-1 h-16">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 bg-emerald-400 rounded-t-sm"
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.05, ease: 'easeOut' }}
              style={{ opacity: 0.4 + (h / 100) * 0.6 }}
            />
          ))}
        </div>
        <div className="flex justify-between mt-1.5">
          {['Jan', 'Apr', 'Jul', 'Oct', 'Dec'].map((m) => (
            <span key={m} className="text-[9px] text-gray-400">{m}</span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

/* ─── Feature config ─────────────────────────────── */
const features = [
  {
    id: 'branding',
    label: 'Custom Branding',
    description:
      'Personalize payment links with your logo and brand colors to strengthen customer trust and reinforce your brand identity. Stand out with a professional payment experience tailored to your business.',
    type: 'image' as const,
    src: '/images/payment-link/brandlogo.jpeg',
  },
  {
    id: 'partial',
    label: 'Partial Payments',
    description:
      'Allow customers to pay in installments or make partial payments on invoices. Offer flexible payment terms that improve collection rates and enhance the customer experience.',
    type: 'image' as const,
    src: '/images/payment-link/partialPayments.png',
  },
  {
    id: 'bulk',
    label: 'Bulk Upload',
    description:
      'Generate multiple payment links at once by uploading a simple CSV file. Save time and streamline operations when dealing with large volumes of transactions.',
    type: 'mockup' as const,
    Mockup: BulkUploadMockup,
  },
  {
    id: 'webhooks',
    label: 'Webhooks and APIs',
    description:
      'Automate payment processes and integrate seamlessly with your existing systems. Get real-time event notifications and build custom workflows using our developer-friendly APIs.',
    type: 'mockup' as const,
    Mockup: WebhooksMockup,
  },
  {
    id: 'dashboard',
    label: 'Dashboard Insights',
    description:
      'Monitor your payment trends, track revenues, and optimize cash flow with a powerful analytics dashboard. Make data-driven decisions with real-time reporting and visualizations.',
    type: 'mockup' as const,
    Mockup: DashboardMockup,
  },
]

/* ─── Panel background per feature ─────────────── */
const panelBg: Record<string, string> = {
  branding:  'from-[#edf4fb] to-[#f5f9ff]',
  partial:   'from-[#edf4fb] to-[#f5f9ff]',
  bulk:      'from-[#f0fdf4] to-[#f5fff9]',
  webhooks:  'from-[#f8faff] to-[#eef2ff]',
  dashboard: 'from-[#faf5ff] to-[#f3e8ff]',
}

/* ─── Main Section ──────────────────────────────── */
export default function IntegrateSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = features[activeIndex]

  return (
    <section className="bg-[#f4f6f9] py-12 sm:py-16 lg:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="fontheading text-3xl md:text-4xl lg:text-5xl text-gray-900">
            Integrate with Ease.{' '}
            <span className="text-emerald-500">Connect Without Gaps.</span>
          </h2>
          <p className="mt-4 text-gray-500 text-base max-w-xl">
            Everything you need to collect payments through links — customisable, automated, and insight-driven.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

          {/* ── LEFT: Feature accordion ── */}
          <div className="lg:w-[44%] space-y-1">
            {features.map((feature, index) => {
              const isActive = activeIndex === index
              return (
                <div key={feature.id}>
                  <button
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={`w-full flex items-center gap-4 py-4 text-left transition-all duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-50 hover:opacity-80'
                    }`}
                  >
                    {/* Circle indicator */}
                    <span
                      className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 ${
                        isActive ? 'bg-emerald-500 shadow-emerald-500/30' : 'bg-[var(--card)]'
                      }`}
                    >
                      <ChevronUp
                        className={`w-5 h-5 transition-all duration-300 ${
                          isActive ? 'text-[var(--foreground)] rotate-0' : 'text-emerald-500 rotate-180'
                        }`}
                      />
                    </span>

                    <span
                      className={`fontheading text-lg md:text-xl transition-colors duration-300 ${
                        isActive ? 'text-gray-900' : 'text-gray-500'
                      }`}
                    >
                      {feature.label}
                    </span>
                  </button>

                  {/* Expandable description + progress line */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isActive ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pl-14 pb-4 pr-2">
                      {/* Animated underline */}
                      <motion.div
                        className="h-0.5 bg-emerald-500 rounded-full mb-3"
                        initial={{ width: 0 }}
                        animate={{ width: isActive ? '100%' : 0 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                      />
                      <p className="text-gray-500 fontbody2 text-sm md:text-base leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  {index < features.length - 1 && (
                    <div className="h-px bg-gray-200 ml-14" />
                  )}
                </div>
              )
            })}
          </div>

          {/* ── RIGHT: Animated panel ── */}
          <div className="w-full lg:w-[42%] lg:sticky lg:top-44">
            <div className="relative w-full rounded-3xl overflow-hidden h-[320px] sm:h-[460px] lg:h-[540px] border-2 border-gray-200 shadow-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  className={`absolute inset-0 bg-gradient-to-br ${panelBg[active.id]} flex items-center justify-center ${
                    active.type === 'image' ? 'p-0' : 'p-8'
                  }`}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  {active.type === 'image' ? (
                    /* Real image — covers the entire panel edge-to-edge, floats gently */
                    <motion.div
                      className="absolute inset-0 overflow-hidden"
                      animate={{ scale: [1, 1.025, 1] }}
                      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={(active as { src: string }).src}
                          alt={active.label}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 56vw"
                          priority
                        />
                      </div>
                    </motion.div>
                  ) : (
                    /* Animated JSX mockup */
                    <div className="w-full max-w-sm">
                      {(() => {
                        const { Mockup } = active as { Mockup: React.ComponentType }
                        return <Mockup />
                      })()}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
