'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Container from '@/components/ui/Container'

const stats = [
  { number: '500+', label: 'B2B Companies Funded' },
  { number: '₹1000Cr+', label: 'Invoices Financed' },
  { number: '24hrs', label: 'Average Approval' },
  { number: '99%', label: 'Collection Rate' },
]

export default function ClientLogosSection() {
  return (
    <section className="relative bg-gray-50 py-20 md:py-28 overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="fontheading text-3xl md:text-5xl text-gray-900 mb-4">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-[#10b981] to-[#14b8a6] bg-clip-text text-transparent">
              Leading Businesses
            </span>
          </h2>
          <p className="fontbody2 text-gray-600 text-lg max-w-3xl mx-auto">
            Join hundreds of B2B companies improving their cash flow
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white rounded-2xl p-6 border-2 border-gray-100"
            >
              <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Client Logos Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="w-full max-w-[1000px] rounded-3xl overflow-hidden border-2 border-gray-200 shadow-xl">
            <Image
              src="/invoicing-financing/trusted.png"
              alt="Trusted by Leading Businesses"
              width={1000}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
