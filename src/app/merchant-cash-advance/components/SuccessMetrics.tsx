'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'

const metrics = [
  {
    before: '₹50K',
    after: '₹2.5L',
    label: 'Monthly Revenue',
    business: 'Kirana Store, Mumbai',
    duration: '6 months',
  },
  {
    before: '₹30K',
    after: '₹1.8L',
    label: 'Monthly Income',
    business: 'Delivery Partner, Delhi',
    duration: '4 months',
  },
  {
    before: '₹80K',
    after: '₹3.2L',
    label: 'Monthly Sales',
    business: 'Restaurant, Bangalore',
    duration: '8 months',
  },
]

export default function SuccessMetrics() {
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
            Real{' '}
            <span className="bg-gradient-to-r from-[#10b981] to-[#14b8a6] bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="fontbody2 text-gray-600 text-lg max-w-3xl mx-auto">
            See how businesses grew after getting funded
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10"
            >
              {/* Before/After */}
              <div className="flex items-center justify-center gap-6 mb-6">
                <div className="text-center">
                  <div className="text-gray-500 text-xs mb-1">Before</div>
                  <div className="text-gray-600 text-2xl font-bold">{metric.before}</div>
                </div>
                
                <div className="flex items-center">
                  <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>

                <div className="text-center">
                  <div className="text-emerald-600 text-xs mb-1">After</div>
                  <div className="text-emerald-600 text-2xl font-bold">{metric.after}</div>
                </div>
              </div>

              {/* Label */}
              <div className="text-center mb-6">
                <div className="text-gray-900 font-bold text-lg mb-1">{metric.label}</div>
                <div className="text-gray-600 text-sm">{metric.business}</div>
              </div>

              {/* Duration Badge */}
              <div className="text-center">
                <div className="inline-block px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200">
                  <span className="text-emerald-700 text-xs font-semibold">
                    Growth in {metric.duration}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 fontbody2 mb-6">
            Ready to grow your business like them?
          </p>
          <a
            href="#apply"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold text-base hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-white/90 animate-pulse" />
            Get Funded Now
          </a>
        </motion.div>
      </Container>
    </section>
  )
}
