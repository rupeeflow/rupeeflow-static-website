'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MessageCircle, Wallet, CreditCard, Send, Building2 } from 'lucide-react'
import { useState } from 'react'

const products = [
  {
    id: 'collect-money',
    title: 'Collect Money',
    description: 'Accept payments via UPI, cards, net banking & wallets with instant settlement',
    icon: Wallet,
    color: '#12A05C',
    href: '/products/collect-payments',
    features: ['Payment Gateway', 'UPI Collections', 'Payment Links', 'QR Codes']
  },
  {
    id: 'make-payments',
    title: 'Make Payments',
    description: 'Pay vendors, employees & partners instantly via NEFT, RTGS, IMPS & UPI',
    icon: Send,
    color: '#0E9F58',
    href: '/products/make-payments',
    features: ['Vendor Payments', 'Salary Disbursement', 'Bulk Payouts', 'Bill Payments']
  },
  {
    id: 'get-credit',
    title: 'Get Credit',
    description: 'Instant business credit up to ₹50L with AI-powered approval in minutes',
    icon: CreditCard,
    color: '#0A8F4E',
    href: '/credit',
    features: ['Business Loans', 'Invoice Financing', 'Merchant Cash Advance', 'Credit Line']
  },
  {
    id: 'business-banking',
    title: 'Business Banking',
    description: 'Complete banking solution with current account, cards & expense management',
    icon: Building2,
    color: '#067F44',
    href: '/business-current-account',
    features: ['Current Account', 'Corporate Cards', 'Expense Management', 'Accounting Integration']
  },
  {
    id: 'whatsapp-banking',
    title: 'WhatsApp Banking',
    description: 'Send money, check balance, pay bills and apply for credit just by typing a message. Supports voice notes in 12 languages.',
    icon: MessageCircle,
    color: '#25D366',
    href: '/whatsapp-banking',
    features: ['Send Money (P2P & P2M via UPI)', 'Check Balance & Statement', 'Pay Bills (electricity, mobile, water)', 'Apply for Instant Credit', 'Voice Payments in 12 Languages'],
    isNew: true
  }
]

export default function ProductGrid() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="rf-h2 font-jakarta text-gray-900">
            Payments. Credit. WhatsApp Banking. <span className="text-emerald-500">All in one platform.</span>
          </h2>
          <p className="rf-lead font-inter text-gray-500 mt-4 max-w-3xl mx-auto">
            Everything your business needs to collect, pay, and grow — seamlessly connected.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative group ${product.id === 'whatsapp-banking' ? 'md:col-span-2 lg:col-span-3' : ''}`}
            >
              <Link href={product.href}>
                <div 
                  className="relative h-full border-2 rounded-2xl p-6 sm:p-8 transition-all duration-200 ease-out overflow-hidden"
                  style={{
                    borderColor: hoveredCard === product.id ? product.color : '#E0E0DC',
                    transform: hoveredCard === product.id ? 'translateY(-4px)' : 'translateY(0)',
                    boxShadow: hoveredCard === product.id ? `0 8px 24px ${product.color}33` : 'none'
                  }}
                >
                  {/* New Badge */}
                  {product.isNew && (
                    <div className="absolute top-4 right-4 bg-[#25D366] text-white text-xs font-jakarta font-bold px-3 py-1 rounded-full">
                      NEW
                    </div>
                  )}

                  {/* Icon */}
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-200"
                    style={{
                      backgroundColor: hoveredCard === product.id ? product.color : `${product.color}15`
                    }}
                  >
                    <product.icon 
                      className="w-7 h-7 transition-colors duration-200" 
                      style={{ color: hoveredCard === product.id ? 'white' : product.color }}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="rf-h3 font-jakarta text-gray-900 mb-3">
                    {product.title}
                  </h3>
                  <p className="rf-body font-inter text-gray-600 mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm font-inter text-gray-600">
                        <span 
                          className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: product.color }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <div 
                    className="inline-flex items-center gap-2 font-jakarta font-semibold text-sm transition-all duration-200"
                    style={{ 
                      color: hoveredCard === product.id ? product.color : '#6B7280'
                    }}
                  >
                    Learn more
                    <motion.span
                      animate={{ x: hoveredCard === product.id ? 5 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
