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

const steps = [
  {
    number: '01',
    title: 'Apply Online',
    desc: 'Fill out a simple application form with your business details and UPI transaction history. Takes less than 5 minutes.',
    icon: '/payments/payment-links.svg',
  },
  {
    number: '02',
    title: 'Instant Assessment',
    desc: 'Our AI analyzes your credit history and daily collections. Get approval decision in just 3 minutes.',
    icon: '/Developer-friendly/api-card.svg',
  },
  {
    number: '03',
    title: 'Receive Funds',
    desc: 'Once approved, funds are transferred to your account within 24 hours. No waiting, no hassle.',
    icon: '/home/wallet.svg',
  },
  {
    number: '04',
    title: 'Auto Repayment',
    desc: 'Repayment is automatically deducted from your daily sales. Flexible based on your business performance.',
    icon: '/payments/upi-collections.svg',
  },
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative bg-gray-50 py-20 md:py-28 overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="fontheading text-3xl md:text-5xl text-gray-900 mb-4">
            How It{' '}
            <span className="bg-gradient-to-r from-[#10b981] to-[#14b8a6] bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="fontbody2 text-gray-600 text-lg max-w-3xl mx-auto">
            Get funded in 4 simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-emerald-300 to-transparent z-0" />
              )}

              <div className="relative bg-[var(--card)] rounded-3xl p-6 border-2 border-gray-100 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 group hover:-translate-y-1">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-[var(--foreground)] font-bold text-lg shadow-lg z-10">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={36}
                    height={36}
                    className="w-9 h-9"
                  />
                </div>

                {/* Content */}
                <h3 className="text-gray-900 text-xl font-bold mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600 fontbody2 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="w-full max-w-5xl h-[400px] md:h-[500px] bg-gray-100 rounded-3xl flex items-center justify-center border-2 border-gray-200">
            <ImagePlaceholder size="1200x500" />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
