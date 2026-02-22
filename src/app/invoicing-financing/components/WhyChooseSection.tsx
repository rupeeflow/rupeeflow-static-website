'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Container from '@/components/ui/Container'

const ImagePlaceholder = ({ size }: { size?: string }) => (
  <div className="text-center text-gray-400">
    <svg className="w-14 h-14 mx-auto mb-2 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
    </svg>
    {size && <p className="text-xs">{size}</p>}
  </div>
)

const features = [
  {
    title: 'Quick Cash Release',
    desc: 'Get 80% of invoice value within 24 hours of approval. No waiting for customer payment cycles.',
    icon: '/features/clock.svg',
  },
  {
    title: 'No Debt on Books',
    desc: 'Invoice financing is not a loan. It does not appear as debt on your balance sheet.',
    icon: '/features/shield.svg',
  },
  {
    title: 'Flexible Terms',
    desc: 'Finance single invoices or set up a revolving facility for ongoing needs. You choose.',
    icon: '/home/wallet.svg',
  },
  {
    title: 'Customer Relationship',
    desc: 'We handle collections professionally without damaging your customer relationships.',
    icon: '/payments/payment-gateway.svg',
  },
]

export default function WhyChooseSection() {
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
            Why Choose{' '}
            <span className="bg-gradient-to-r from-[#10b981] to-[#14b8a6] bg-clip-text text-transparent">
              Invoice Financing
            </span>
          </h2>
          <p className="fontbody2 text-gray-600 text-lg max-w-3xl mx-auto">
            Designed for B2B businesses that need immediate cash flow without taking on debt
          </p>
        </motion.div>

        {/* Features + Image Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Feature Cards */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-3xl p-6 border-2 border-gray-100 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2"
              >
                {/* Icon Container */}
                <div className="mb-4 relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  </div>
                  {/* Decorative dot */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-gray-900 text-lg font-bold mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 fontbody2 text-sm leading-relaxed">
                  {feature.desc}
                </p>

                {/* Decorative gradient on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/0 via-teal-500/0 to-emerald-500/0 group-hover:from-emerald-500/5 group-hover:via-teal-500/5 group-hover:to-emerald-500/5 transition-all duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* Right: Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center items-center w-full"
          >
            <div className="w-full max-w-[500px] h-[400px] md:h-[500px] bg-gray-100 rounded-3xl flex items-center justify-center border-2 border-gray-200">
              <ImagePlaceholder size="500x500" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
