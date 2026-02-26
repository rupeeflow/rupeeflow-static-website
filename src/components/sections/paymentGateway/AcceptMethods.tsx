'use client'

import { motion } from 'framer-motion'
import UPIIcon from '../../../../public/icons/payment-gateway/UPIIcon'
import NetBankingIcon from '../../../../public/icons/payment-gateway/NetBankingIcon'
import WalletIcon from '../../../../public/icons/payment-gateway/WalletIcon'
import DebitCardsIcon from '../../../../public/icons/payment-gateway/DebitCards'
import CreditCardsIcon from '../../../../public/icons/payment-gateway/CreditCard'

const methods = [
  {
    Icon: UPIIcon as React.ComponentType<React.SVGProps<SVGSVGElement>>,
    title: 'UPI',
    subtitle: 'PhonePe, GPay, Paytm, etc.',
    isBNPL: false,
  },
  {
    Icon: NetBankingIcon as React.ComponentType<React.SVGProps<SVGSVGElement>>,
    title: 'Net Banking',
    subtitle: '50+ banks',
    isBNPL: false,
  },
  {
    Icon: WalletIcon as React.ComponentType<React.SVGProps<SVGSVGElement>>,
    title: 'Wallets',
    subtitle: 'Paytm, Amazon Pay,etc',
    isBNPL: false,
  },
  {
    Icon: DebitCardsIcon as React.ComponentType<React.SVGProps<SVGSVGElement>>,
    title: 'Debit Cards',
    subtitle: '(All banks)',
    isBNPL: false,
  },
  {
    Icon: CreditCardsIcon as React.ComponentType<React.SVGProps<SVGSVGElement>>,
    title: 'Credit Cards',
    subtitle: 'Visa, Mastercard, Amex',
    isBNPL: false,
  },
  {
    Icon: null,
    title: 'BNPL',
    subtitle: 'Buy Now Pay Later',
    isBNPL: true,
  },
]

function BNPLBadge() {
  return (
    <div className="flex items-center gap-1.5 bg-[#235065] rounded-lg px-3 py-2 w-fit shadow-md">
      <span className="text-[#30F3BC] font-extrabold text-sm tracking-wide">BNPL</span>
      <div className="w-5 h-5 rounded-full bg-[#30F3BC] flex items-center justify-center">
        <span className="text-[#235065] font-bold text-xs">₹</span>
      </div>
    </div>
  )
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' as const },
  }),
}

export default function AcceptMethods() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white overflow-hidden">
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
            Accept Every Payment Method
          </h2>
          <p className="text-gray-500 mt-3 text-base sm:text-lg">
            No matter what app, platform or card you use
          </p>
        </motion.div>

        {/* Content Row */}
        <div className="mt-8 sm:mt-12 lg:mt-16 flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          {/* Left: Payment Method Grid */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {methods.map((method, i) => (
              <motion.div
                key={method.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  rotateX: 6,
                  rotateY: method.isBNPL ? 4 : -4,
                  boxShadow: '0 24px 48px rgba(48, 243, 188, 0.18)',
                  borderColor: '#30F3BC',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="relative border border-gray-100 rounded-2xl p-3 sm:p-5 bg-white shadow-sm cursor-default"
                style={{ transformStyle: 'preserve-3d', perspective: 800 }}
              >
                {/* Icon */}
                <div className="mb-4 w-14 h-14 flex items-center justify-center rounded-xl bg-[#f0fdf9]">
                  {method.isBNPL ? (
                    <BNPLBadge />
                  ) : (
                    method.Icon && <method.Icon style={{ width: 40, height: 40 }} />
                  )}
                </div>

                <h4 className="font-bold text-gray-900 text-base leading-tight">{method.title}</h4>
                <p className="text-gray-500 text-sm mt-1 leading-snug">{method.subtitle}</p>

                {/* 3-D shine layer */}
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 60%)',
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Right: Floating Payment Summary UI - desktop only */}
          <motion.div
            className="hidden lg:block flex-shrink-0 relative"
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            <PaymentSummaryMockup />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function PaymentSummaryMockup() {
  return (
    <div className="relative" style={{ width: 340, height: 420 }}>
      {/* Main Payment Summary Card */}
      <motion.div
        className="absolute top-0 left-0 w-full bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 z-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          boxShadow: '0 32px 64px rgba(0,0,0,0.12), 0 8px 24px rgba(48,243,188,0.08)',
        }}
      >
        {/* Back button */}
        <button className="flex items-center gap-1.5 text-gray-400 text-xs mb-5 hover:text-gray-600 transition-colors">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M9 11L5 7l4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Cancel Transaction
        </button>

        <h3 className="font-bold text-gray-900 text-base mb-5">Payment Summary</h3>

        {/* Contact Details */}
        <div className="mb-4">
          <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold mb-2.5">
            Contact Details
          </p>
          <Row label="Mobile" value="+91 98765 43210" />
          <Row label="Email" value="Anishasingh@gmail.com" />
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 my-4" />

        {/* Payment Details */}
        <div>
          <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold mb-2.5">
            Payment Details
          </p>
          <Row label="Amount" value="₹18,500.00" bold />
          <Row label="Convenience Fee" value="₹92.50" />
          <Row label="GST on Fee" value="₹16.65" />
        </div>
      </motion.div>

      {/* Select Payment Method Card */}
      <motion.div
        className="absolute bottom-0 left-6 right-0 bg-white rounded-2xl border border-gray-100 p-4 z-20"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        style={{
          boxShadow: '0 20px 48px rgba(0,0,0,0.14), 0 4px 12px rgba(48,243,188,0.1)',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#30F3BC] rounded-full flex items-center justify-center">
              <span className="text-[#235065] font-extrabold text-xs">₹</span>
            </div>
            <div>
              <p className="text-xs font-extrabold text-gray-900 leading-tight">RupeeFlow</p>
              <p className="text-[9px] text-[#029789] font-medium">✓ Trusted Payment Gateway</p>
            </div>
          </div>
          <span className="font-extrabold text-gray-900 text-sm">₹18,609</span>
        </div>

        <p className="text-[10px] text-gray-700 font-semibold mb-2.5">Select Payment Method</p>

        <div className="flex gap-2">
          {['Credit Cards', 'Net Banking', 'BNPL'].map((tab, i) => (
            <div
              key={tab}
              className={`flex-1 rounded-xl py-2 px-1 text-center text-[9px] font-semibold border transition-all ${
                i === 0
                  ? 'border-[#30F3BC] bg-[#f0fdf9] text-[#235065]'
                  : 'border-gray-100 text-gray-400 bg-gray-50'
              }`}
            >
              {tab}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

function Row({
  label,
  value,
  bold,
}: {
  label: string
  value: string
  bold?: boolean
}) {
  return (
    <div className="flex justify-between items-center mb-2">
      <span className="text-xs text-gray-500">{label}</span>
      <span className={`text-xs ${bold ? 'font-bold text-gray-900' : 'text-gray-700'}`}>
        {value}
      </span>
    </div>
  )
}
