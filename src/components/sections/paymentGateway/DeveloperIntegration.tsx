'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import CodeSnippetsIcon from '../../../../public/icons/payment-gateway/CodeSnippetsIcon'
import SecurityFirstIcon from '../../../../public/icons/payment-gateway/SecurityFirstIcon'
import SmartDashboardIcon from '../../../../public/icons/payment-gateway/SmartDashboardIcon'
import InstantSettlement from '../../../../public/icons/payment-gateway/InstantSettlement'

const features = [
  {
    Icon: CodeSnippetsIcon as React.ComponentType<React.SVGProps<SVGSVGElement>>,
    title: 'Powerful APIs',
    points: ['RESTful APIs', 'Webhooks for real-time updates', 'Detailed documentation'],
  },
  {
    Icon: InstantSettlement as React.ComponentType<React.SVGProps<SVGSVGElement>>,
    title: 'Quick Setup',
    points: ['5-minute integration', 'Pre-built plugins', 'Mobile SDKs (Android, iOS)'],
  },
  {
    Icon: SecurityFirstIcon as React.ComponentType<React.SVGProps<SVGSVGElement>>,
    title: 'Security First',
    points: ['PCI DSS compliant', '256-bit encryption', 'Fraud detection built-in'],
  },
  {
    Icon: SmartDashboardIcon as React.ComponentType<React.SVGProps<SVGSVGElement>>,
    title: 'Smart Dashboard',
    points: ['Real-time analytics', 'Transaction reports', 'Reconciliation tools'],
  },
]

const floatingCards = [
  {
    title: 'Powerful APIs',
    Icon: CodeSnippetsIcon as React.ComponentType<React.SVGProps<SVGSVGElement>>,
    style: { top: '24%', left: '2%' },
    floatDuration: 5,
    floatDelay: 0,
  },
  {
    title: 'Security First',
    Icon: SecurityFirstIcon as React.ComponentType<React.SVGProps<SVGSVGElement>>,
    style: { top: '35%', right: '-2%' },
    floatDuration: 5.5,
    floatDelay: 0.8,
  },
  {
    title: 'Smart Dashboard',
    Icon: SmartDashboardIcon as React.ComponentType<React.SVGProps<SVGSVGElement>>,
    style: { top: '48%', left: '0%' },
    floatDuration: 4.8,
    floatDelay: 0.4,
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' as const },
  }),
}

function GreenCheck() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="flex-shrink-0">
      <circle cx="7.5" cy="7.5" r="7.5" fill="#30F3BC" fillOpacity="0.25" />
      <path
        d="M5 7.5l2 2 3.5-3.5"
        stroke="#029789"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function DeveloperIntegration() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#fafafa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Developer-Friendly Integration
          </h2>
          <p className="text-gray-500 mt-3 text-base sm:text-lg">
            Easy and secure to integrate with any platform
          </p>
        </motion.div>

        {/* Content Row */}
        <div className="mt-8 sm:mt-12 lg:mt-16 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left: 2x2 Feature Cards */}
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
                  y: -8,
                  rotateX: 4,
                  rotateY: i % 2 === 0 ? -4 : 4,
                  boxShadow: '0 24px 48px rgba(48, 243, 188, 0.15)',
                  borderColor: '#30F3BC',
                }}
                transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm cursor-default"
                style={{ transformStyle: 'preserve-3d', perspective: 800 }}
              >
                {/* Icon Container */}
                <div className="mb-4 w-14 h-14 bg-[#f0fdf9] rounded-2xl flex items-center justify-center shadow-sm">
                  <feature.Icon style={{ width: 34, height: 34 }} />
                </div>

                <h4 className="font-bold text-gray-900 text-base mb-3">{feature.title}</h4>

                <ul className="space-y-2">
                  {feature.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-gray-600">
                      <GreenCheck />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Shine overlay */}
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(255,255,255,0.5) 0%, transparent 55%)',
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Right: Woman Image + Floating Cards - desktop only */}
          <motion.div
            className="hidden lg:block flex-shrink-0 relative"
            style={{ width: 440, height: 560 }}
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
          >
            {/* Woman Image */}
            <Image
              src="/images/payment-gateway/DeveloperFriendlyImg.png"
              alt="Developer Friendly"
              fill
              className="object-contain object-bottom"
              priority
            />

            {/* Floating Feature Cards */}
            {floatingCards.map((card) => (
              <FloatingFeatureCard
                key={card.title}
                title={card.title}
                Icon={card.Icon}
                cardStyle={card.style}
                floatDuration={card.floatDuration}
                floatDelay={card.floatDelay}
              />
            ))}

            {/* Developer Friendly bottom badge */}
            <motion.div
              className="absolute bottom-6 right-2 bg-white rounded-2xl shadow-xl p-4 z-20 w-[180px]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              style={{ boxShadow: '0 16px 40px rgba(0,0,0,0.12)' }}
            >
              <p className="font-bold text-gray-900 text-xs mb-1">Developer Friendly</p>
              <p className="text-[10px] text-gray-500 leading-relaxed">
                Track payments, customers and on chain transactions.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function FloatingFeatureCard({
  title,
  Icon,
  cardStyle,
  floatDuration,
  floatDelay,
}: {
  title: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  cardStyle: React.CSSProperties
  floatDuration: number
  floatDelay: number
}) {
  return (
    <motion.div
      className="absolute bg-white rounded-xl shadow-xl z-20 flex items-center gap-2.5 px-3 py-2.5 min-w-[150px]"
      style={{
        ...cardStyle,
        boxShadow: '0 12px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(48,243,188,0.08)',
      }}
      animate={{ y: [0, -12, 0] }}
      transition={{
        duration: floatDuration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: floatDelay,
      }}
      whileHover={{
        scale: 1.06,
        rotateY: 8,
        boxShadow: '0 20px 48px rgba(48,243,188,0.2)',
      }}
    >
      <div className="w-9 h-9 bg-[#f0fdf9] rounded-lg flex items-center justify-center flex-shrink-0">
        <Icon style={{ width: 22, height: 22 }} />
      </div>
      <div>
        <p className="font-semibold text-gray-900 text-xs leading-tight">{title}</p>
        <div className="flex items-center gap-1 mt-0.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#30F3BC]" />
          <span className="text-[9px] text-gray-400 font-medium">RupeeFlow</span>
        </div>
      </div>
    </motion.div>
  )
}
