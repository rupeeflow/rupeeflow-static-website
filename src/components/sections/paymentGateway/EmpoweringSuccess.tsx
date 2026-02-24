'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

/* ── Inline 48×48 teal-square icons matching the design ── */
function ClockIcon() {
  return (
    <svg width={48} height={48} viewBox="0 0 48 48" fill="none">
      <rect width={48} height={48} rx={8} fill="#30F3BC" />
      <circle cx={24} cy={25} r={10} stroke="#235065" strokeWidth={2} />
      <path
        d="M24 19v6l3.5 3.5"
        stroke="#235065"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ShieldCheckIcon() {
  return (
    <svg width={48} height={48} viewBox="0 0 48 48" fill="none">
      <rect width={48} height={48} rx={8} fill="#30F3BC" />
      <path
        d="M24 13l-10 4v7c0 5.5 4.3 10.7 10 12 5.7-1.3 10-6.5 10-12v-7l-10-4z"
        stroke="#235065"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5 24l2.5 2.5 4.5-4.5"
        stroke="#235065"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function AnalyticsSearchIcon() {
  return (
    <svg width={48} height={48} viewBox="0 0 48 48" fill="none">
      <rect width={48} height={48} rx={8} fill="#30F3BC" />
      <path
        d="M14 32l5-6 4 3 5-8 4 5"
        stroke="#235065"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={32} cy={20} r={5} stroke="#235065" strokeWidth={2} />
      <path
        d="M35.5 23.5L38 26"
        stroke="#235065"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  )
}

function GridPlusIcon() {
  return (
    <svg width={48} height={48} viewBox="0 0 48 48" fill="none">
      <rect width={48} height={48} rx={8} fill="#30F3BC" />
      <rect x={13} y={13} width={9} height={9} rx={2} stroke="#235065" strokeWidth={2} />
      <rect x={26} y={13} width={9} height={9} rx={2} stroke="#235065" strokeWidth={2} />
      <rect x={13} y={26} width={9} height={9} rx={2} stroke="#235065" strokeWidth={2} />
      <path
        d="M30.5 26v9M26 30.5h9"
        stroke="#235065"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  )
}

/* ── Feature cards data ── */
const features = [
  {
    Icon: ClockIcon,
    title: 'Always-On Technical Help',
    desc: '24/7 assistance for all your technical integrations, regardless of time zone.',
    checks: 2,
  },
  {
    Icon: ShieldCheckIcon,
    title: 'Expert Business Guidance',
    desc: 'Dedicated specialists who understand your specific business industry and needs.',
    checks: 2,
  },
  {
    Icon: AnalyticsSearchIcon,
    title: 'Active System Guard',
    desc: 'We identify and fix problems before they impact your sales using predictive monitoring.',
    checks: 3,
  },
  {
    Icon: GridPlusIcon,
    title: 'Long-Term Success Plan',
    desc: 'Seamless tools built to make managing your store and customer data effortless.',
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

/* ── Chat message bubble ── */
function ChatBubble({
  message,
  time,
  isUser,
}: {
  message: string
  time: string
  isUser?: boolean
}) {
  return (
    <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} gap-1 mb-3`}>
      <div
        className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm leading-snug ${
          isUser
            ? 'bg-[#30F3BC] text-[#235065] font-medium rounded-br-sm'
            : 'bg-[#3a3a3a] text-white rounded-bl-sm'
        }`}
      >
        {message}
      </div>
      <span className="text-[10px] text-gray-400">{time}</span>
    </div>
  )
}

export default function EmpoweringSuccess() {
  return (
    <section className="py-24 bg-[#fafafa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Empowering Your Success
          </h2>
          <p className="text-gray-500 mt-4 text-base max-w-2xl mx-auto leading-relaxed">
            Experience seamless operations with Rupee flow&apos;s expert support. We offer dedicated
            teams that prioritize your business and respond with speed and precision.
          </p>
        </motion.div>

        {/* Content Row */}
        <div className="flex flex-col lg:flex-row gap-10 items-center">
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
                <feature.Icon />

                {/* Title */}
                <h4 className="font-bold text-gray-900 text-base leading-snug">{feature.title}</h4>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>

                {/* Placeholder checkmarks */}
                <div className="flex flex-col gap-1.5 mt-1">
                  {Array.from({ length: feature.checks }).map((_, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <svg width="16"
                       height="16"
                        viewBox="0 0 16 16"
                         fill="none">
                        <circle cx="8" cy="8" r="8" fill="#30F3BC" fillOpacity="0.2" />
                        <path
                          d="M5 8l2 2 4-4"
                          stroke="#029789"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="h-2 w-20 bg-gray-100 rounded-full" />
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

          {/* Right: Chat Card + Woman Image */}
          <motion.div
            className="flex-shrink-0 relative lg:w-[480px] w-full"
            style={{ height: 540 }}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            {/* Floating Chat Card */}
            <motion.div
              className="absolute top-0 left-0 w-[310px] bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden z-20"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ boxShadow: '0 32px 64px rgba(0,0,0,0.12), 0 8px 24px rgba(48,243,188,0.08)' }}
            >
              {/* Chat Header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100 bg-white">
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#30F3BC] flex items-center justify-center font-bold text-[#235065] text-sm">
                    JD
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Technical Specialist</p>
                  <p className="text-[11px] text-green-500 font-medium">● Online</p>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="px-5 py-4 bg-white min-h-[200px]">
                <ChatBubble
                  message="Hi! I'm Jaydev  How can I help your merchant account today?"
                  time="10:24 AM"
                />
                <ChatBubble
                  message="I need help integrating the new API for my checkout."
                  time="10:25 AM"
                  isUser
                />
              </div>

              {/* Chat Input */}
              <div className="px-5 pb-5">
                <div className="flex items-center gap-3 border border-gray-200 rounded-2xl px-4 py-3 bg-gray-50">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 bg-transparent text-sm text-gray-500 outline-none placeholder:text-gray-400"
                    readOnly
                  />
                  <button className="w-9 h-9 rounded-xl bg-[#30F3BC] flex items-center justify-center flex-shrink-0 hover:bg-[#22e0a8] transition-colors shadow-sm">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M14 2L2 7l5 2 2 5 5-12z"
                        fill="#235065"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Woman Image (EmpoweringSuccess.png) */}

            <motion.div
              className="absolute bottom-10 left-20 w-[460px] h-[890px]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            >
              <Image
                src="/images/payment-gateway/EmpoweringSuccess.png"
                alt="Expert Support"
                fill
                className="object-contain object-bottom mt-23"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
