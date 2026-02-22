'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'

const steps = [
  {
    number: '01',
    title: 'Choose Loan Type',
    desc: 'Select education or medical loan based on your requirement',
    time: '2 min',
  },
  {
    number: '02',
    title: 'Fill Application',
    desc: 'Complete online form with basic personal and financial details',
    time: '5 min',
  },
  {
    number: '03',
    title: 'Upload Documents',
    desc: 'Submit required documents digitally through our secure portal',
    time: '10 min',
  },
  {
    number: '04',
    title: 'Get Approved',
    desc: 'Receive approval within 48 hours after verification',
    time: '48 hrs',
  },
  {
    number: '05',
    title: 'Receive Funds',
    desc: 'Loan amount disbursed directly to your account or institution',
    time: '24 hrs',
  },
]

export default function ProcessSection() {
  return (
    <section className="relative bg-white py-20 md:py-28 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="fontheading text-3xl md:text-5xl text-gray-900 mb-4">
            Simple{' '}
            <span className="bg-gradient-to-r from-[#10b981] to-[#14b8a6] bg-clip-text text-transparent">
              Application Process
            </span>
          </h2>
          <p className="fontbody2 text-gray-600 text-lg max-w-3xl mx-auto">
            Get your loan in 5 easy steps
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
          <div className="w-full max-w-[800px] h-[300px] bg-gray-100 rounded-3xl flex items-center justify-center border-2 border-gray-200">
            <div className="text-center text-gray-400">
              <svg className="w-14 h-14 mx-auto mb-2 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
              </svg>
              <p className="text-xs">800x300</p>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-200 via-teal-200 to-cyan-200 -translate-y-1/2" />

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step Card */}
                <div className="relative bg-white rounded-3xl p-6 border-2 border-gray-100 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-2 group">
                  {/* Number Badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="mt-6 text-center">
                    <h3 className="text-gray-900 text-base font-bold mb-2 group-hover:text-emerald-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 fontbody2 text-sm leading-relaxed mb-4">
                      {step.desc}
                    </p>
                    
                    {/* Time Badge */}
                    <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
                      <span className="text-emerald-700 text-xs font-semibold">
                        {step.time}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Arrow (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 -translate-y-1/2 z-20">
                    <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#apply"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold text-base hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-white/90 animate-pulse" />
            Start Your Application
          </a>
        </motion.div>
      </Container>
    </section>
  )
}
