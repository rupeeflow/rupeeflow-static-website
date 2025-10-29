'use client'

import { motion } from 'framer-motion'
import FaqSection from '@/components/sections/FAQ'
import faq from '@/data/top-faqs.json'

export default function CookiePolicy() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden py-32 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.2),transparent_70%)] blur-3xl" />

      <section className="relative z-10 max-w-4xl mx-auto space-y-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="fontheadingthin text-5xl md:text-6xl text-gradient-teal-emerald text-center mb-10"
        >
          Cookie Policy
        </motion.h1>

        <p className="fontbody2 text-gray-300 text-lg text-center max-w-2xl mx-auto mb-10">
          RupeeFlow uses cookies and similar technologies to improve your
          experience and optimize platform performance.
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="fontheadingthin text-2xl text-emerald-400 mb-3">
              1. What Are Cookies?
            </h2>
            <p className="fontbody2 text-gray-300">
              Cookies are small text files stored on your device that help us
              analyze usage patterns and personalize your experience.
            </p>
          </section>

          <section>
            <h2 className="fontheadingthin text-2xl text-emerald-400 mb-3">
              2. How We Use Cookies
            </h2>
            <p className="fontbody2 text-gray-300">
              We use cookies for session management, analytics, fraud
              prevention, and remembering user preferences.
            </p>
          </section>

          <section>
            <h2 className="fontheadingthin text-2xl text-emerald-400 mb-3">
              3. Managing Cookies
            </h2>
            <p className="fontbody2 text-gray-300">
              You can manage or disable cookies from your browser settings. Note
              that some features may not function correctly if cookies are
              disabled.
            </p>
          </section>

          <section>
            <h2 className="fontheadingthin text-2xl text-emerald-400 mb-3">
              4. Third-Party Cookies
            </h2>
            <p className="fontbody2 text-gray-300">
              We may use third-party tools (like analytics and payment
              processors) that set their own cookies for legitimate operational
              purposes.
            </p>
          </section>
        </div>
      </section>
      <FaqSection faqs={faq} />
    </main>
  )
}
