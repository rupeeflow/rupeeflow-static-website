'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import BulkPayoutsFaq from '@/components/sections/bulkPayouts/BulkPayoutsFaq'

/* ── Mockup: Save Time & Boost Efficiency ── */
function AutomationMockup() {
  const tasks = [
    { label: 'Salary Disbursement', status: 'Done', count: '1,240 transfers' },
    { label: 'Vendor Payments', status: 'Done', count: '320 transfers' },
    { label: 'Commission Payouts', status: 'Running', count: '85 / 200' },
  ]
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 w-full max-w-[360px]">
      <div className="flex items-center justify-between mb-5">
        <p className="fontheading text-gray-900 text-base">Automated Batch</p>
        <span className="text-xs bg-emerald-100 text-emerald-700 font-semibold px-3 py-1 rounded-full">Today</span>
      </div>
      <div className="space-y-3">
        {tasks.map((t, i) => (
          <motion.div
            key={t.label}
            className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + i * 0.12, duration: 0.4 }}
          >
            <div>
              <p className="text-sm font-semibold text-gray-800">{t.label}</p>
              <p className="text-[10px] text-gray-400 mt-0.5">{t.count}</p>
            </div>
            <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${t.status === 'Done' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700 animate-pulse'}`}>
              {t.status}
            </span>
          </motion.div>
        ))}
      </div>
      <div className="mt-5 border-t border-gray-100 pt-4 flex justify-between text-xs">
        <span className="text-gray-400">Time saved</span>
        <span className="font-bold text-emerald-600">~14 hours / week</span>
      </div>
    </div>
  )
}

/* ── Mockup: Enhance Vendor Relationships ── */
function VendorRelationMockup() {
  const vendors = [
    { name: 'Sharma & Co.', tag: 'On Time', streak: '12 months' },
    { name: 'TechVendors Ltd.', tag: 'On Time', streak: '8 months' },
    { name: 'FastSupply Inc.', tag: 'On Time', streak: '6 months' },
  ]
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 w-full max-w-[360px]">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-2 h-2 rounded-full bg-emerald-500" />
        <p className="fontheading text-gray-900 text-base">Vendor Trust Score</p>
      </div>
      <div className="space-y-3 mb-5">
        {vendors.map((v, i) => (
          <motion.div
            key={v.name}
            className="flex items-center justify-between"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.12, duration: 0.4 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-xs font-bold text-emerald-600">
                {v.name[0]}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">{v.name}</p>
                <p className="text-[10px] text-gray-400">{v.streak} streak</p>
              </div>
            </div>
            <span className="text-[10px] bg-emerald-100 text-emerald-700 font-semibold px-2 py-1 rounded-full">{v.tag}</span>
          </motion.div>
        ))}
      </div>
      <div className="bg-emerald-50 rounded-xl px-4 py-3 text-center">
        <p className="text-xs text-gray-500 fontbody2">All vendors paid on time this month</p>
        <p className="text-emerald-600 font-bold text-sm mt-0.5">100% On-Time Rate</p>
      </div>
    </div>
  )
}

/* ── Mockup: Strengthen Financial Control ── */
function FinancialControlMockup() {
  const steps = [
    { label: 'Initiator Submits', done: true },
    { label: 'Maker Reviews', done: true },
    { label: 'Checker Approves', done: true },
    { label: 'Payment Released', done: false },
  ]
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 w-full max-w-[360px]">
      <div className="flex items-center justify-between mb-5">
        <p className="fontheading text-gray-900 text-base">Approval Workflow</p>
        <span className="text-xs bg-blue-100 text-blue-700 font-semibold px-3 py-1 rounded-full">In Progress</span>
      </div>
      <div className="space-y-4 mb-5">
        {steps.map((s, i) => (
          <motion.div
            key={s.label}
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + i * 0.15, duration: 0.4 }}
          >
            <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${s.done ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-400 animate-pulse'}`}>
              {s.done ? '✓' : '…'}
            </div>
            <p className={`text-sm font-medium ${s.done ? 'text-gray-900' : 'text-gray-400'}`}>{s.label}</p>
          </motion.div>
        ))}
      </div>
      <div className="border-t border-gray-100 pt-3 flex justify-between text-xs">
        <span className="text-gray-400">Batch: ₹18,40,000</span>
        <span className="text-gray-500 font-semibold">320 payees</span>
      </div>
    </div>
  )
}

/* ── Mockup: Improve Cash Flow Management ── */
function CashFlowMockup() {
  const bars = [60, 80, 55, 90, 70, 95, 75]
  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 w-full max-w-[360px]">
      <div className="flex items-center justify-between mb-2">
        <p className="fontheading text-gray-900 text-base">Cash Flow</p>
        <span className="text-xs text-emerald-600 font-semibold">This Week</span>
      </div>
      <p className="text-2xl font-bold text-gray-900 mb-5">₹42,80,000 <span className="text-sm text-emerald-500 font-semibold">↑ 18%</span></p>
      <div className="flex items-end gap-2 h-24 mb-3">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-t-md bg-emerald-500/80"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: 'easeOut' }}
            style={{ height: `${h}%`, transformOrigin: 'bottom' }}
          />
        ))}
      </div>
      <div className="flex justify-between text-[10px] text-gray-400">
        {labels.map(l => <span key={l}>{l}</span>)}
      </div>
    </div>
  )
}

/* ── Mockup: Seamless Integrations ── */
function IntegrationsMockup() {
  const integrations = [
    { name: 'SAP ERP', color: 'bg-blue-100 text-blue-700' },
    { name: 'Tally', color: 'bg-purple-100 text-purple-700' },
    { name: 'Zoho Books', color: 'bg-orange-100 text-orange-700' },
    { name: 'QuickBooks', color: 'bg-green-100 text-green-700' },
    { name: 'Razorpay', color: 'bg-indigo-100 text-indigo-700' },
    { name: 'REST API', color: 'bg-gray-100 text-gray-700' },
  ]
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 w-full max-w-[360px]">
      <p className="fontheading text-gray-900 text-base mb-2">Connected Platforms</p>
      <p className="text-xs text-gray-400 fontbody2 mb-5">Plug into your existing stack in minutes</p>
      <div className="grid grid-cols-3 gap-3 mb-5">
        {integrations.map((item, i) => (
          <motion.div
            key={item.name}
            className={`${item.color} rounded-xl px-2 py-3 text-center`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.05 + i * 0.08, duration: 0.35 }}
          >
            <p className="text-[10px] font-bold">{item.name}</p>
          </motion.div>
        ))}
      </div>
      <div className="flex items-center gap-2 bg-emerald-50 rounded-xl px-4 py-2.5">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-xs text-emerald-700 font-semibold">All integrations active</span>
      </div>
    </div>
  )
}

/* ── Mockup: Secure & Reliable Platform ── */
function SecurityMockup() {
  const checks = [
    '256-bit AES Encryption',
    'PCI DSS Compliant',
    'Multi-factor Auth',
    'Real-time Fraud Detection',
    '99.9% Uptime SLA',
  ]
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 w-full max-w-[360px]">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <div>
          <p className="fontheading text-gray-900 text-base">Security Shield</p>
          <p className="text-[10px] text-emerald-600 font-semibold">All systems protected</p>
        </div>
      </div>
      <div className="space-y-2.5">
        {checks.map((c, i) => (
          <motion.div
            key={c}
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
          >
            <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm text-gray-700 font-medium">{c}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

/* ── Mockup: Customizable Solutions ── */
function CustomizationMockup() {
  const options = [
    { label: 'Approval Levels', value: '3-tier', active: true },
    { label: 'Payment Schedule', value: 'Daily 9 AM', active: true },
    { label: 'Notification', value: 'Email + SMS', active: true },
    { label: 'Currency', value: 'INR / USD', active: false },
  ]
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 w-full max-w-[360px]">
      <p className="fontheading text-gray-900 text-base mb-5">Workflow Settings</p>
      <div className="space-y-3 mb-5">
        {options.map((o, i) => (
          <motion.div
            key={o.label}
            className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
          >
            <div>
              <p className="text-[10px] text-gray-400 font-medium">{o.label}</p>
              <p className="text-sm font-semibold text-gray-900">{o.value}</p>
            </div>
            <div className={`w-10 h-5 rounded-full transition-colors ${o.active ? 'bg-emerald-500' : 'bg-gray-300'} relative`}>
              <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all ${o.active ? 'right-0.5' : 'left-0.5'}`} />
            </div>
          </motion.div>
        ))}
      </div>
      <button className="w-full py-2 rounded-full bg-emerald-500 text-white text-xs font-semibold">
        Save Configuration
      </button>
    </div>
  )
}

const features = [
  {
    icon: (
      <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center">
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    ),
    title: 'Save Time and Boost Efficiency',
    desc: 'Spend less time on manual payment processes and optimize cash flow with Rupeeflow. Automate recurring and bulk payments, ensure timely transactions, and eliminate errors using a centralized system that integrates seamlessly with your existing tools and processes.',
    mockup: <AutomationMockup />,
    imageLeft: false,
  },
  {
    icon: (
      <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center">
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      </div>
    ),
    title: 'Enhance Vendor Relationships',
    desc: 'Build trust with vendors through consistent on-time payments. Foster better partnerships by maintaining transparency and resolving payment queries faster with a reliable payment system.',
    mockup: <VendorRelationMockup />,
    imageLeft: true,
  },
  {
    icon: (
      <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center">
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      </div>
    ),
    title: 'Strengthen Financial Control',
    desc: 'Gain real-time visibility into your transactions. Monitor payment statuses, generate detailed reports, and stay compliant with customizable approval workflows tailored to your organization\'s needs.',
    mockup: <FinancialControlMockup />,
    imageLeft: false,
  },
  {
    icon: (
      <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center">
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    ),
    title: 'Improve Cash Flow Management',
    desc: 'Ensure smooth operations with faster processing times. Manage recurring expenses like rent, utilities, and vendor payments efficiently to improve cash flow and operational stability.',
    mockup: <CashFlowMockup />,
    imageLeft: true,
  },
  {
    icon: (
      <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center">
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      </div>
    ),
    title: 'Seamless Integrations',
    desc: 'Connect Rupeeflow Express Pay with your ERP, accounting software, or HRMS to simplify workflows and eliminate data silos. Enhance productivity with a fully integrated payment solution.',
    mockup: <IntegrationsMockup />,
    imageLeft: false,
  },
  {
    icon: (
      <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center">
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>
    ),
    title: 'Secure and Reliable Platform',
    desc: 'Keep your business secure with robust fraud detection, data encryption, and multi-layered access controls. Rely on industry-leading uptime and performance for uninterrupted operations.',
    mockup: <SecurityMockup />,
    imageLeft: true,
  },
  {
    icon: (
      <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center">
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
    ),
    title: 'Customizable Solutions for Your Needs',
    desc: 'Adapt the platform to your unique business requirements. From approval hierarchies to payment scheduling, Rupeeflow Express Pay offers unparalleled flexibility.',
    mockup: <CustomizationMockup />,
    imageLeft: false,
  },
]

export default function BulkPayoutsPage() {
  return (
    <div className="w-full relative">

      {/* ── HERO SECTION ── */}
      <section className="relative py-24 md:py-32 bg-[#f4f8fb] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* Left: Text */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <motion.span
                className="text-emerald-500 text-sm fontheading tracking-wide"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Bulk Payout
              </motion.span>
              <h1 className="fontheading text-3xl sm:text-4xl md:text-[2.8rem] lg:text-[3.2rem] leading-tight text-gray-900 mt-4">
                Simplify Bulk Payments
                with <span className="text-emerald-500">Rupeeflow</span> Bulk Pay
              </h1>
              <p className="mt-6 text-gray-500 text-base md:text-lg fontbody2 leading-relaxed max-w-lg">
                Streamline your business disbursements with Rupeeflow&apos;s Express
                Pay. Automate payments, save time, and gain control over your
                cash flow.
              </p>

              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >

                {/* <Link
                  href="#"
                  className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold text-sm hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg shadow-emerald-500/20 border border-emerald-400/30"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-white/80" />
                  Get Started
                </Link> */}

              </motion.div>
            </motion.div>

            {/* Right: vendorHero image + floating cards */}
            <motion.div
              className="flex-1 flex justify-center"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative w-full max-w-[480px]">

                {/* Main image */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Image
                    src="/images/vendor-payments/vendorHero.jpeg"
                    alt="Bulk Payouts made simple"
                    width={480}
                    height={480}
                    className="w-full h-auto rounded-2xl"
                    priority
                  />
                </motion.div>

                {/* Floating card: Maker Approved */}
                <motion.div
                  className="absolute top-4 right-[-20px] bg-white rounded-lg shadow-md px-4 py-2.5 flex items-center gap-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p className="text-xs fontheading text-gray-900">Maker Approved</p>
                </motion.div>

                {/* Floating card: Checker Approved */}
                <motion.div
                  className="absolute top-20 right-[-30px] bg-white rounded-lg shadow-md px-4 py-2.5"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.75 }}
                >
                  <p className="text-xs fontheading text-gray-900">Checker Approved</p>
                </motion.div>

                {/* Floating card: Payment Done */}
                <motion.div
                  className="absolute top-36 right-[-20px] bg-emerald-500 rounded-full px-4 py-1.5 flex items-center gap-2 shadow-md"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <span className="text-xs text-white fontheading">Payment Done</span>
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>

                {/* Floating card: Automated Invoice */}
                <motion.div
                  className="absolute bottom-40 left-[-30px] bg-white rounded-lg shadow-md px-4 py-2.5 flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  <span className="text-xs fontheading text-gray-900">Automated Invoice</span>
                </motion.div>

                {/* Floating card: 2 Sec Transfer */}
                <motion.div
                  className="absolute bottom-28 left-[-20px] bg-white rounded-lg shadow-md px-4 py-2.5 flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.85 }}
                >
                  <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm fontheading text-emerald-500">2 Sec</p>
                    <p className="text-[9px] text-gray-500 fontbody2">Average Transfer</p>
                  </div>
                </motion.div>

                {/* Floating card: Bulk Transfers */}
                <motion.div
                  className="absolute bottom-16 right-[-10px] bg-white rounded-lg shadow-md px-4 py-2.5 flex items-center gap-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7" />
                  </svg>
                  <span className="text-xs fontheading text-gray-900">Bulk Transfers</span>
                </motion.div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── INNOVATIVE BULK PAYMENTS SOLUTIONS FOR ENTERPRISES ── */}
      <section className="relative py-24 bg-[#f4f8fb] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="fontheading text-3xl md:text-4xl text-gray-900">
              Innovative <span className="text-emerald-500">Bulk Payments</span> Solutions for Enterprises
            </h2>
          </motion.div>

          <div className="space-y-24">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className={`flex flex-col ${f.imageLeft ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-16`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.05 * i }}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    {f.icon}
                    <h3 className="fontheading text-xl md:text-2xl text-gray-900">{f.title}</h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                    {f.desc}
                  </p>

                  {/* <Link
                    href="#"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors"
                  >
                    Get Started
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link> */}
                  
                </div>
                <div className="lg:w-[45%] flex justify-center">
                  {f.mockup}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <BulkPayoutsFaq />
    </div>
  )
}
