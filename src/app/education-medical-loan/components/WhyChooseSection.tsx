'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Image from 'next/image'

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
    title: 'Competitive Interest Rates',
    desc: 'Starting from 12.5% per annum with special rates for women and students',
    icon: '/home/rupee.svg',
    stat: '12.5%',
    statLabel: 'Interest Rate',
  },
  {
    title: 'Quick Approval',
    desc: 'Get approved in 48 hours with minimal documentation and hassle-free process',
    icon: '/features/clock.svg',
    stat: '48hrs',
    statLabel: 'Approval Time',
  },
  {
    title: 'Flexible Tenure',
    desc: 'Repayment period from 1 to 7 years based on your financial comfort',
    icon: '/payments/payment-gateway.svg',
    stat: '7 Years',
    statLabel: 'Max Tenure',
  },
  {
    title: 'No Hidden Charges',
    desc: 'Transparent pricing with zero processing fees and prepayment penalties',
    icon: '/features/shield.svg',
    stat: '₹0',
    statLabel: 'Hidden Fees',
  },
]

export default function WhyChooseSection() {
  return (
    <section className="relative bg-gray-50 py-20 md:py-28 overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="w-full max-w-[550px] rounded-3xl overflow-hidden border-2 border-gray-200 shadow-xl mx-auto">
              <Image
                src="/edu-medi-loan/why rupeeflowloan.jpeg"
                alt="Why Choose RupeeFlow"
                width={550}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Right: Features */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="fontheading text-3xl md:text-5xl text-gray-900 mb-4">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-[#10b981] to-[#14b8a6] bg-clip-text text-transparent">
                RupeeFlow?
              </span>
            </h2>
            <p className="fontbody2 text-gray-600 text-lg mb-10">
              We make education and healthcare accessible with our customer-first approach
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 bg-white rounded-2xl p-5 border-2 border-gray-100 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg group"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Image src={feature.icon} alt={feature.title} width={24} height={24} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-gray-900 text-lg font-bold mb-1 group-hover:text-emerald-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 fontbody2 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>

                  {/* Stat */}
                  <div className="text-right flex-shrink-0">
                    <div className="text-emerald-600 text-xl font-bold">{feature.stat}</div>
                    <div className="text-gray-500 text-xs">{feature.statLabel}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
