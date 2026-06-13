'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'

const languages = [
  'Hindi', 'Tamil', 'Telugu', 'Malayalam', 'Kannada', 'Bengali',
  'Marathi', 'Gujarati', 'Punjabi', 'Odia', 'Urdu', 'English'
]

export default function LanguageSupportSection() {
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
            Support in{' '}
            <span className="bg-gradient-to-r from-[#10b981] to-[#14b8a6] bg-clip-text text-transparent">
              12 Languages
            </span>
          </h2>
          <p className="fontbody2 text-gray-600 text-lg max-w-3xl mx-auto">
            Communicate in your preferred language for better understanding
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {languages.map((lang, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-[var(--card)] rounded-xl p-4 border-2 border-gray-100 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg text-center group"
              >
                <span className="text-gray-900 group-hover:text-emerald-600 font-semibold transition-colors">
                  {lang}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-3xl p-8"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-[var(--card)] flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-gray-900 text-xl font-bold mb-2">
                  24/7 Multilingual Support
                </h3>
                <p className="text-gray-700 fontbody2 text-sm">
                  Our support team is available round the clock in all 12 languages. Call, chat, or email us anytime for assistance with your loan application or queries.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
