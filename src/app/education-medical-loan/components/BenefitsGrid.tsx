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
    <section className="relative bg-[var(--card)] py-20 md:py-28 overflow-hidden">
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

        {/* Benefits Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="w-full max-w-[900px] rounded-3xl overflow-hidden border-2 border-gray-200 shadow-xl">
            <Image
              src="/edu-medi-loan/edu loan.jpeg"
              alt="Additional Benefits"
              width={900}
              height={350}
              className="w-full h-auto object-cover"
            />
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
              className="group relative bg-[var(--card)] rounded-3xl p-8 border-2 border-gray-100 hover:border-transparent transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 group-hover:bg-[var(--card)] flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                  <Image 
                    src={benefit.icon} 
                    alt={benefit.title} 
                    width={32} 
                    height={32}
                    className="w-8 h-8 group-hover:brightness-0 group-hover:invert transition-all duration-300"
                  />
                </div>

                {/* Title */}
                <h3 className="text-gray-900 group-hover:text-[var(--foreground)] text-xl font-bold mb-3 transition-colors duration-300">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 group-hover:text-[var(--foreground)] fontbody2 text-sm leading-relaxed transition-colors duration-300">
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
