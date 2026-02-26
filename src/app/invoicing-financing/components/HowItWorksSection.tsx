'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'

const steps = [
  {
    number: '01',
    title: 'Submit Invoice',
    desc: 'Upload your B2B invoice and client details through our secure portal',
  },
  {
    number: '02',
    title: 'Quick Verification',
    desc: 'We verify the invoice and assess your client\'s creditworthiness',
  },
  {
    number: '03',
    title: 'Get 80% Upfront',
    desc: 'Receive 80% of invoice value within 24 hours in your account',
  },
  {
    number: '04',
    title: 'Client Pays',
    desc: 'Your client pays the invoice amount to us on the due date',
  },
  {
    number: '05',
    title: 'Receive Balance',
    desc: 'Get remaining 18% (minus 2% fee) after client payment',
  },
]

export default function HowItWorksSection() {
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
            How It{' '}
            <span className="bg-gradient-to-r from-[#10b981] to-[#14b8a6] bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="fontbody2 text-gray-600 text-lg max-w-3xl mx-auto">
            Simple 5-step process to get funded
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-6 bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                {step.number}
              </div>
              <div className="flex-1">
                <h3 className="text-gray-900 text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 fontbody2 text-sm">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
