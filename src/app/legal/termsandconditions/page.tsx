'use client'

import { motion } from 'framer-motion'

export default function TermsAndConditions() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden py-32 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(16,185,129,0.15),transparent_70%)] blur-3xl" />

      <section className="relative z-10 max-w-4xl mx-auto space-y-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="fontheadingthin text-5xl md:text-6xl text-gradient-teal-emerald text-center mb-10"
        >
          Terms & Conditions
        </motion.h1>

        <p className="fontbody2 text-gray-300 text-lg text-center max-w-2xl mx-auto mb-10">
          Welcome to RupeeFlow. These Terms govern your access and use of our
          digital payment and fintech services.
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="fontheadingthin text-2xl text-emerald-400 mb-3">
              1. Acceptance of Terms
            </h2>
            <p className="fontbody2 text-gray-300">
              By using RupeeFlow, you agree to these Terms and Conditions. If
              you disagree with any part, please discontinue use immediately.
            </p>
          </section>

          <section>
            <h2 className="fontheadingthin text-2xl text-emerald-400 mb-3">
              2. Services Overview
            </h2>
            <p className="fontbody2 text-gray-300">
              RupeeFlow provides UPI-based payments, API integrations, and
              fintech tools to enable secure, fast, and compliant financial
              transactions for individuals and businesses.
            </p>
          </section>

          <section>
            <h2 className="fontheadingthin text-2xl text-emerald-400 mb-3">
              3. User Responsibilities
            </h2>
            <p className="fontbody2 text-gray-300">
              Users must ensure accurate account information, maintain
              confidentiality of credentials, and comply with all applicable RBI
              and NPCI regulations.
            </p>
          </section>

          <section>
            <h2 className="fontheadingthin text-2xl text-emerald-400 mb-3">
              4. Data & Security
            </h2>
            <p className="fontbody2 text-gray-300">
              We maintain high standards of encryption and data protection.
              RupeeFlow does not store your UPI PIN or bank passwords. Our
              platform follows the RBI and DPDP data security frameworks.
            </p>
          </section>

          <section>
            <h2 className="fontheadingthin text-2xl text-emerald-400 mb-3">
              5. Termination
            </h2>
            <p className="fontbody2 text-gray-300">
              RupeeFlow reserves the right to suspend or terminate accounts
              violating these terms or engaging in suspicious activity.
            </p>
          </section>

          <section>
            <h2 className="fontheadingthin text-2xl text-emerald-400 mb-3">
              6. Governing Law
            </h2>
            <p className="fontbody2 text-gray-300">
              These Terms are governed by Indian law and subject to the
              jurisdiction of the courts of Bengaluru, Karnataka.
            </p>
          </section>
        </div>
      </section>
    </main>
  )
}
