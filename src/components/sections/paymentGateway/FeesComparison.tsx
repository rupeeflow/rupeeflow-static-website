'use client'

import { motion } from 'framer-motion'
import AllinOneIcon from '../../../../public/icons/payment-gateway/AllinOneIcon'
import DeepTransactionData from '../../../../public/icons/payment-gateway/DeepTransactionsData'
import ReconcilationIcon from '../../../../public/icons/payment-gateway/Reconcilation'
import SmartDashboardIcon from '../../../../public/icons/payment-gateway/SmartDashboardIcon'

const features = [
  {
    Icon: AllinOneIcon as React.ComponentType<React.SVGProps<SVGSVGElement>>,
    title: 'Financial Tracking',
    desc: 'Centralized data hub for all your incoming and outgoing financial streams in one unified view.',
    checks: 2,
  },
  {
    Icon: DeepTransactionData as React.ComponentType<React.SVGProps<SVGSVGElement>>,
    title: 'Deep Transaction Data',
    desc: 'Deep-dive analytics into customer behavior and payment processing performance metrics.',
    checks: 3,
  },
  {
    Icon: ReconcilationIcon as React.ComponentType<React.SVGProps<SVGSVGElement>>,
    title: 'Financial Reconciliation',
    desc: 'Automated real-time bank reconciliation to ensure your balances are always accurate.',
    checks: 2,
  },
  {
    Icon: SmartDashboardIcon as React.ComponentType<React.SVGProps<SVGSVGElement>>,
    title: 'All-in-One Dashboard',
    desc: 'High-performance user experience designed for speed and clarity in data-heavy tasks.',
    checks: 2,
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.1, ease: 'easeOut' as const },
  }),
}

export default function FeesComparison() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Total Payment Transparency
          </h2>
          <p className="text-gray-500 mt-4 text-base max-w-2xl mx-auto leading-relaxed">
            Rupee Flow&apos;s delivers powerful analytics and reporting tools, giving you deep
            visibility into transaction performance, settlement status, and core business metrics.
          </p>
        </motion.div>

        {/* Content Row */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left: 2×2 Feature Cards */}
          <div className="flex-1 grid grid-cols-2 gap-5">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                  boxShadow: '0 20px 48px rgba(48,243,188,0.16)',
                  borderColor: '#30F3BC',
                }}
                transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-3 cursor-default"
                style={{ transformStyle: 'preserve-3d', perspective: 800 }}
              >
                {/* Icon */}
                <feature.Icon style={{ width: 48, height: 48 }} />

                {/* Title */}
                <h4 className="font-bold text-gray-900 text-base leading-snug">{feature.title}</h4>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>

                {/* Checkmarks */}
                <div className="flex flex-col gap-1.5 mt-1">
                  {Array.from({ length: feature.checks }).map((_, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="8" fill="#30F3BC" fillOpacity="0.2" />
                        <path
                          d="M5 8l2 2 4-4"
                          stroke="#029789"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="h-2 w-24 bg-gray-100 rounded-full" />
                    </div>
                  ))}
                </div>

                {/* Learn More */}
                <a
                  href="#"
                  className="flex items-center gap-1 text-[#029789] text-sm font-semibold mt-auto hover:gap-2 transition-all"
                >
                  Learn More
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Right: Payment Trends Dashboard Card */}
          <motion.div
            className="flex-shrink-0 lg:w-[430px] w-full"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            <motion.div
              className="bg-white rounded-3xl border border-gray-100 shadow-2xl p-6 overflow-hidden"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              style={{ boxShadow: '0 32px 64px rgba(0,0,0,0.1), 0 8px 24px rgba(48,243,188,0.06)' }}
            >
              {/* Card Header */}
              <div className="flex items-start justify-between mb-5">
                <div>
                  <h3 className="font-bold text-gray-900 text-base">Payment Trends</h3>
                  <p className="text-gray-400 text-xs mt-0.5">
                    Transaction volume vs settlement speed
                  </p>
                </div>
                {/* Day/Week/Month Toggle */}
                <div className="flex items-center bg-gray-100 rounded-lg p-0.5 text-xs font-semibold">
                  {['Day', 'Week', 'Month'].map((tab) => (
                    <button
                      key={tab}
                      className={`px-3 py-1 rounded-md transition-all ${
                        tab === 'Week'
                          ? 'bg-white text-gray-900 shadow-sm'
                          : 'text-gray-400 hover:text-gray-600'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chart Area */}
              <div className="relative rounded-2xl bg-[#f8fffe] border border-[#e6faf6] p-4">
                {/* Financial Monitoring Badge */}
                <div className="absolute top-3 right-3 bg-white rounded-lg px-3 py-1.5 shadow-sm border border-gray-100 flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#30F3BC]" />
                  <span className="text-xs font-semibold text-gray-700">Financial Monitoring</span>
                </div>

                {/* SVG Area Chart */}
                <svg
                  width="100%"
                  viewBox="0 0 360 160"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-4"
                >
                  {/* Gradient definition */}
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#30F3BC" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#30F3BC" stopOpacity="0.02" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal grid lines */}
                  {[40, 72, 104, 136].map((y) => (
                    <line
                      key={y}
                      x1="0"
                      y1={y}
                      x2="360"
                      y2={y}
                      stroke="#e6faf6"
                      strokeWidth="1"
                    />
                  ))}

                  {/* Area fill path */}
                  <path
                    d="M0 145 C30 140 50 135 70 120 C90 105 100 85 120 60 C140 38 155 30 180 28 C205 26 220 35 240 45 C260 55 280 65 300 72 C320 79 340 82 360 80 L360 155 L0 155 Z"
                    fill="url(#chartGrad)"
                  />

                  {/* Line path */}
                  <path
                    d="M0 145 C30 140 50 135 70 120 C90 105 100 85 120 60 C140 38 155 30 180 28 C205 26 220 35 240 45 C260 55 280 65 300 72 C320 79 340 82 360 80"
                    stroke="#30F3BC"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />

                  {/* Peak dot */}
                  <circle cx="180" cy="28" r="5" fill="#30F3BC" />
                  <circle cx="180" cy="28" r="9" fill="#30F3BC" fillOpacity="0.2" />
                </svg>

                {/* X-axis labels */}
                <div className="flex justify-between mt-2 px-1">
                  {['08:00 AM', '10:00 AM', '12:00 PM', '02:00 PM', '04:00 PM', '06:00 PM', '08:00 PM'].map(
                    (t) => (
                      <span key={t} className="text-[9px] text-gray-400 font-medium">
                        {t}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-between mt-5">
                <button className="flex items-center gap-2 px-4 py-2 bg-[#30F3BC] text-[#235065] rounded-xl text-xs font-bold hover:bg-[#22e0a8] transition-all shadow-sm">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M6 2v6M3 6l3 3 3-3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Export Report
                </button>
                <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2" />
                    <path
                      d="M6 3.5V6l1.5 1.5"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                  Last 30 Days
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
