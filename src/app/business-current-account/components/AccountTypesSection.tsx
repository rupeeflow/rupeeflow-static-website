'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const accountTypes = [
  {
    title: 'Sole Proprietorship',
    description: 'Perfect for individual business owners and freelancers',
    features: [
      'Single owner control',
      'Quick account opening',
      'Minimal documentation',
      'Full digital access',
    ],
  },
  {
    title: 'Partnership Firm',
    description: 'Designed for businesses with multiple partners',
    features: [
      'Multi-partner access',
      'Joint signing options',
      'Partnership deed support',
      'Flexible permissions',
    ],
  },
  {
    title: 'Private Limited Company',
    description: 'Comprehensive banking for registered companies',
    features: [
      'Corporate governance',
      'Board resolution support',
      'Multiple authorized signatories',
      'Advanced reporting',
    ],
  },
  {
    title: 'LLP & Others',
    description: 'Tailored solutions for LLPs and other business entities',
    features: [
      'LLP agreement support',
      'Designated partner access',
      'Compliance ready',
      'Custom configurations',
    ],
  },
]

export default function AccountTypesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Account Types for Every Business
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the account type that fits your business structure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {accountTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-emerald-500"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {type.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {type.description}
              </p>
              <ul className="space-y-3">
                {type.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
