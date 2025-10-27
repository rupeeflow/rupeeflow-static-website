'use client'

import { motion } from 'framer-motion'

export default function RefundPolicy() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden py-32 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(34,197,94,0.2),transparent_70%)] blur-3xl" />

      <section className="relative z-10 max-w-4xl mx-auto space-y-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="fontheadingthin text-5xl md:text-6xl text-gradient-teal-emerald text-center mb-10"
        >
          Refund Policy
        </motion.h1>

        <p className="fontbody2 text-gray-300 text-lg text-center max-w-2xl mx-auto mb-10">
          Our refund policy ensures fair handling of payments and transparency
          in every transaction.
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="fontheadingthin text-2xl text-emerald-400 mb-3">
              1. Eligibility
            </h2>
            <p className="fontbody2 text-gray-300">
              Refunds are processed only for failed or duplicate transactions
              verified by our payment partners and NPCI.
            </p>
          </section>

          <section>
            <h2 className="fontheadingthin text-2xl text-emerald-400 mb-3">
              2. Refund Process
            </h2>
            <p className="fontbody2 text-gray-300">
              Eligible refunds are initiated within 7 working days after
              verification. Users are notified through their registered email or
              SMS.
            </p>
          </section>

          <section>
            <h2 className="fontheadingthin text-2xl text-emerald-400 mb-3">
              3. Non-Refundable Transactions
            </h2>
            <p className="fontbody2 text-gray-300">
              Transactions successfully processed, service fees, or government
              charges are non-refundable as per RBI and NPCI guidelines.
            </p>
          </section>

          <section>
            <h2 className="fontheadingthin text-2xl text-emerald-400 mb-3">
              4. Contact Support
            </h2>
            <p className="fontbody2 text-gray-300">
              For refund assistance, contact our support team at{' '}
              <span className="text-emerald-400">support@rupeeflow.in</span>{' '}
              with transaction details.
            </p>
          </section>
        </div>
      </section>
    </main>
  )
}
