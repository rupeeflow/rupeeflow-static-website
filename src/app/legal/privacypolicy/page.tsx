'use client'

import { motion } from 'framer-motion'

export default function PrivacyPolicy() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden py-32 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(45,212,191,0.2),transparent_70%)] blur-3xl" />

      <section className="relative z-10 max-w-4xl mx-auto space-y-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="fontheadingthin text-5xl md:text-6xl text-gradient-teal-emerald text-center mb-10"
        >
          Privacy Policy
        </motion.h1>

        <p className="fontbody2 text-gray-300 text-lg text-center max-w-2xl mx-auto mb-10">
          Your privacy matters to us. This policy outlines how RupeeFlow
          collects, uses, and protects your personal and financial data.
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="fontheadingthin text-2xl text-emerald-400 mb-3">
              1. Data We Collect
            </h2>
            <p className="fontbody2 text-gray-300">
              We collect limited personal and financial data such as contact
              information, transaction details, and KYC documents to provide
              payment services.
            </p>
          </section>

          <section>
            <h2 className="fontheadingthin text-2xl text-emerald-400 mb-3">
              2. Purpose of Data Use
            </h2>
            <p className="fontbody2 text-gray-300">
              Data is used for payment processing, fraud detection, regulatory
              compliance, and product enhancement. We never sell or misuse your
              information.
            </p>
          </section>

          <section>
            <h2 className="fontheadingthin text-2xl text-emerald-400 mb-3">
              3. Data Security
            </h2>
            <p className="fontbody2 text-gray-300">
              RupeeFlow employs encryption, tokenization, and multi-layer
              authentication to protect user data in compliance with RBI and
              DPDP guidelines.
            </p>
          </section>

          <section>
            <h2 className="fontheadingthin text-2xl text-emerald-400 mb-3">
              4. User Rights
            </h2>
            <p className="fontbody2 text-gray-300">
              Users may access, update, or request deletion of their data under
              the Data Protection Act, 2023. Requests can be made via our
              support portal.
            </p>
          </section>

          <section>
            <h2 className="fontheadingthin text-2xl text-emerald-400 mb-3">
              5. Retention & Compliance
            </h2>
            <p className="fontbody2 text-gray-300">
              We retain user data only as long as required by law or for
              legitimate business purposes aligned with NPCI and RBI mandates.
            </p>
          </section>
        </div>
      </section>
    </main>
  )
}
