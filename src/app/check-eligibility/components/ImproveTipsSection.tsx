'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Container from '@/components/ui/Container'

const tips = [
  {
    step: '1',
    title: 'Improve Your Credit Score',
    tips: [
      'Pay all bills and EMIs on time',
      'Keep credit utilization below 30%',
      'Don\'t apply for multiple loans simultaneously',
      'Check credit report for errors and dispute them',
    ],
    timeframe: '3-6 months',
  },
  {
    step: '2',
    title: 'Increase Your Income',
    tips: [
      'Add additional income sources (freelancing, rental)',
      'Include spouse income as co-applicant',
      'Show consistent income growth over time',
      'Maintain proper documentation of all income',
    ],
    timeframe: 'Immediate',
  },
  {
    step: '3',
    title: 'Reduce Existing Debts',
    tips: [
      'Pay off high-interest debts first',
      'Close unused credit cards',
      'Consolidate multiple loans if possible',
      'Avoid taking new loans before applying',
    ],
    timeframe: '1-3 months',
  },
  {
    step: '4',
    title: 'Maintain Stable Employment',
    tips: [
      'Stay in current job for at least 1 year',
      'Avoid job changes during loan application',
      'Keep employment documents updated',
      'Show consistent work history',
    ],
    timeframe: 'Ongoing',
  },
]

export default function ImproveTipsSection() {
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
            How to{' '}
            <span className="bg-gradient-to-r from-[#10b981] to-[#14b8a6] bg-clip-text text-transparent">
              Improve Eligibility
            </span>
          </h2>
          <p className="fontbody2 text-gray-600 text-lg max-w-3xl mx-auto">
            Actionable steps to increase your chances of loan approval
          </p>
        </motion.div>

        {/* Improve Eligibility Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="w-full max-w-[800px] rounded-3xl border-2 border-gray-200 shadow-xl relative">
            <div className="rounded-3xl overflow-hidden">
              <Image
                src="/check-eligibility/improve-eligi.jpeg"
                alt="How to Improve Eligibility"
                width={800}
                height={320}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating animated feature cards */}
            <motion.div
              className="absolute top-4 right-4 z-20"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              animate={{ y: [0, -10, 0] }}
              style={{ animationDuration: '3s', animationIterationCount: 'infinite' }}
            >
              <div className="bg-white rounded-2xl shadow-2xl border-2 border-emerald-500/30 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Credit Score</div>
                    <div className="text-xs text-gray-500">750+ Ideal</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-4 left-4 z-20"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              animate={{ y: [0, 10, 0] }}
              style={{ animationDuration: '4s', animationIterationCount: 'infinite' }}
            >
              <div className="bg-white rounded-2xl shadow-2xl border-2 border-teal-500/30 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Stable Income</div>
                    <div className="text-xs text-gray-500">Key Factor</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute top-1/2 -translate-y-1/2 -left-4 z-20 hidden lg:block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              animate={{ x: [0, -8, 0] }}
              style={{ animationDuration: '3.5s', animationIterationCount: 'infinite' }}
            >
              <div className="bg-white rounded-2xl shadow-2xl border-2 border-emerald-500/30 p-3 backdrop-blur-sm">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-bold text-gray-900">Low DTI</div>
                    <div className="text-xs text-gray-500">&lt;40%</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute top-1/2 -translate-y-1/2 -right-4 z-20 hidden lg:block"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
              animate={{ x: [0, 8, 0] }}
              style={{ animationDuration: '4s', animationIterationCount: 'infinite' }}
            >
              <div className="bg-white rounded-2xl shadow-2xl border-2 border-teal-500/30 p-3 backdrop-blur-sm">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-bold text-gray-900">Documents</div>
                    <div className="text-xs text-gray-500">Ready</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                {tip.step}
              </div>

              {/* Content */}
              <div className="mt-4">
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-gray-900 text-xl font-bold pr-4">
                    {tip.title}
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200 whitespace-nowrap">
                    {tip.timeframe}
                  </span>
                </div>

                {/* Tips List */}
                <ul className="space-y-3">
                  {tip.tips.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-3xl p-6 md:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h4 className="text-gray-900 text-lg font-bold mb-2">
                Need Personalized Advice?
              </h4>
              <p className="text-gray-700 fontbody2 text-sm leading-relaxed mb-4">
                Our loan experts can review your profile and provide customized recommendations to improve your eligibility. 
                Book a free consultation today.
              </p>
              <a
                href="/support"
                className="inline-block px-6 py-2.5 rounded-xl bg-white text-emerald-600 font-semibold text-sm hover:bg-emerald-50 transition-all duration-300 border border-emerald-200 hover:border-emerald-300"
              >
                Talk to Expert
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
