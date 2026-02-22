'use client'

import { motion } from 'framer-motion'
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

        {/* Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="w-full max-w-[800px] h-[320px] bg-gray-100 rounded-3xl flex items-center justify-center border-2 border-gray-200">
            <div className="text-center text-gray-400">
              <svg className="w-14 h-14 mx-auto mb-2 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
              </svg>
              <p className="text-xs">800x320</p>
            </div>
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
