'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Image from 'next/image'

const benefits = [
  {
    title: 'Tax Benefits',
    desc: 'Education loans eligible for tax deduction under Section 80E',
    icon: '/home/rupee.svg',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Moratorium Period',
    desc: 'Start repayment after course completion or 6 months grace period',
    icon: '/features/clock.svg',
    gradient: 'from-teal-500 to-cyan-500',
  },
  {
    title: 'Direct Payment',
    desc: 'Loan amount paid directly to institution or hospital',
    icon: '/payments/payment-gateway.svg',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Top-up Facility',
    desc: 'Get additional funds on existing loan without new application',
    icon: '/home/wallet.svg',
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'Co-applicant Support',
    desc: 'Add parent or spouse as co-applicant for higher loan amount',
    icon: '/business/msme.svg',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'Insurance Coverage',
    desc: 'Optional loan protection insurance for peace of mind',
    icon: '/features/shield.svg',
    gradient: 'from-purple-500 to-pink-500',
  },
]

export default function BenefitsGrid() {
  return (
    <section className="relative bg-white py-20 md:py-28 overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="fontheading text-3xl md:text-5xl text-gray-900 mb-4">
            Additional{' '}
            <span className="bg-gradient-to-r from-[#10b981] to-[#14b8a6] bg-clip-text text-transparent">
              Benefits
            </span>
          </h2>
          <p className="fontbody2 text-gray-600 text-lg max-w-3xl mx-auto">
            More reasons to choose our education and medical loans
          </p>
        </motion.div>

        {/* Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="w-full max-w-[900px] h-[350px] bg-gray-100 rounded-3xl flex items-center justify-center border-2 border-gray-200">
            <div className="text-center text-gray-400">
              <svg className="w-14 h-14 mx-auto mb-2 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
              </svg>
              <p className="text-xs">900x350</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-transparent transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 group-hover:bg-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                  <Image 
                    src={benefit.icon} 
                    alt={benefit.title} 
                    width={32} 
                    height={32}
                    className="w-8 h-8 group-hover:brightness-0 group-hover:invert transition-all duration-300"
                  />
                </div>

                {/* Title */}
                <h3 className="text-gray-900 group-hover:text-white text-xl font-bold mb-3 transition-colors duration-300">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 group-hover:text-white/90 fontbody2 text-sm leading-relaxed transition-colors duration-300">
                  {benefit.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
