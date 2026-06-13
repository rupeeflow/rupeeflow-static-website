'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Image from 'next/image'

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

        {/* Success Stories Review Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12 relative"
        >
          <div className="w-full max-w-[900px] rounded-3xl border-2 border-gray-200 shadow-lg relative">
            <div className="rounded-3xl overflow-hidden">
              <Image
                src="/merchant-cash-advance/review.jpeg"
                alt="Real success stories and customer reviews"
                width={900}
                height={350}
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
              animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
              style={{ animationDuration: '3s', animationIterationCount: 'infinite' }}
            >
              <div className="bg-[var(--card)] rounded-2xl shadow-2xl border-2 border-emerald-500/30 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[var(--foreground)]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">4.8/5 Rating</div>
                    <div className="text-xs text-gray-500">10,000+ Reviews</div>
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
              animate={{ y: [0, 10, 0], rotate: [0, -2, 0] }}
              style={{ animationDuration: '4s', animationIterationCount: 'infinite' }}
            >
              <div className="bg-[var(--card)] rounded-2xl shadow-2xl border-2 border-teal-500/30 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[var(--foreground)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">3x Growth</div>
                    <div className="text-xs text-gray-500">Average in 6 months</div>
                  </div>
                </div>
              </div>
            </motion.div>
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
              className="bg-[var(--card)] rounded-3xl p-8 border-2 border-gray-100 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10"
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
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-[var(--foreground)] font-semibold text-base hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--card)] animate-pulse" />
            Get Funded Now
          </a>
        </motion.div>
      </Container>
    </section>
  )
}
