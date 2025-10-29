'use client'

import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import {
  Fingerprint,
  IdCard,
  FileCheck,
  Car,
  ShieldCheck,
  FileText,
  Server,
  Code2,
  FileJson,
  CheckCircle2,
} from 'lucide-react'
import FaqSection from '@/components/sections/FAQ';
import faq from '@/data/top-faqs.json'


export default function VerificationPage() {
  // Animation Variants
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  }

  const content: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const verifications = [
    {
      icon: Fingerprint,
      title: 'Aadhaar Verification API',
      desc: 'Verify users instantly using their Aadhaar details with RupeeFlow’s secure API. Enable instant onboarding, KYC, and authentication across fintech and e-commerce platforms.',
    },
    {
      icon: IdCard,
      title: 'PAN Verification API',
      desc: 'Authenticate PAN information directly from the Income Tax database. Detect fraud and simplify tax-related validation for compliance-heavy applications.',
    },
    {
      icon: FileCheck,
      title: 'Voter ID Verification API',
      desc: 'Validate user identities via Voter ID using Election Commission data. Useful for KYC, onboarding, and e-governance integrations.',
    },
    {
      icon: ShieldCheck,
      title: 'Driving License Verification API',
      desc: 'Instantly verify driver credentials using government-issued license data. Ideal for mobility, delivery, and vehicle finance platforms.',
    },
    {
      icon: FileText,
      title: 'Passport Verification API',
      desc: 'Cross-check customer passport information to enable verified onboarding for travel, remittance, and banking services.',
    },
    {
      icon: Car,
      title: 'Vehicle RC Verification API',
      desc: 'Validate vehicle ownership and registration details directly from the RTO database, ensuring transparency for loans and insurance providers.',
    },
  ]

  const steps = [
    {
      icon: FileJson,
      title: '1. Get API Credentials',
      desc: 'Register your business on RupeeFlow and get access to sandbox and production credentials for verification APIs.',
    },
    {
      icon: Server,
      title: '2. Connect API Endpoints',
      desc: 'Integrate RupeeFlow Verification APIs into your onboarding system using RESTful endpoints and secure tokens.',
    },
    {
      icon: Code2,
      title: '3. Send Verification Requests',
      desc: 'Submit customer details for Aadhaar, PAN, or ID verification and receive structured real-time verification responses.',
    },
    {
      icon: CheckCircle2,
      title: '4. Go Live & Monitor',
      desc: 'Enable live environment and monitor verification accuracy and speed directly from your RupeeFlow dashboard.',
    },
  ]

  return (
    <main className="relative w-full bg-black text-white overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(16,185,129,0.25),transparent_70%)] blur-3xl" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1, duration: 0.7 }}
        className="absolute bottom-[10%] right-[20%] w-[400px] h-[400px] bg-radial-emerald-soft rounded-full blur-3xl"
      ></motion.div>

      {/* Hero Section */}
      <section className="relative z-10 text-center py-28 px-6 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="fontheading2 text-5xl md:text-6xl text-gradient-teal-emerald mb-6"
        >
          Verification APIs — Secure & Instant KYC
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="fontbody2 text-gray-400 max-w-3xl mx-auto text-lg"
        >
          Verify customers across Aadhaar, PAN, Voter ID, Driving License,
          Passport, and Vehicle RC instantly. RupeeFlow ensures fast, compliant,
          and AI-optimized verification for every industry.
        </motion.p>
      </section>

      {/* Verification Types Section */}
      <section className="relative z-10 pb-24 px-6 bg-black-emerald/40 backdrop-blur-md">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto text-center"
        >
          <motion.h2
            variants={content}
            className="fontheadingthin text-5xl text-white mb-16"
          >
            Types of Verification APIs
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {verifications.map((v, i) => (
              <motion.div
                key={i}
                variants={content}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:shadow-[0_0_15px_rgba(34,197,94,0.25)] transition text-left flex flex-col justify-between"
              >
                <div>
                  <v.icon
                    className="w-12 h-12 text-emerald-400 mb-4"
                    strokeWidth={1.5}
                  />
                  <h3 className="fontheading2 text-2xl mb-3">{v.title}</h3>
                  <p className="fontbody2 text-gray-400 text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Integration Steps Section */}
      <section className="relative z-10 py-24 px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto text-center"
        >
          <motion.h2
            variants={content}
            className="fontheadingthin text-5xl md:text-6xl text-white mb-16"
          >
            Verification API Integration Steps
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                variants={content}
                className="p-8 rounded-2xl border border-white/80 backdrop-blur-md bg-gray-500/10 hover:bg-white/10 hover:shadow-[0_0_10px_rgba(34,197,94,0.3)] transition"
              >
                <s.icon
                  className="w-10 h-10 text-emerald-400 mb-3"
                  strokeWidth={1.5}
                />
                <h3 className="fontheading2 text-2xl mb-2">{s.title}</h3>
                <p className="fontbody2 text-gray-400 text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24 bg-neutral-200 text-black text-center">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={content} className="fontheading2 text-4xl mb-6">
            Ready to Integrate Verification APIs?
          </motion.h2>
          <motion.p
            variants={content}
            className="fontbody2 text-lg text-gray-900 mb-10"
          >
            Simplify KYC and identity verification using RupeeFlow’s APIs.
            Access documentation, sandbox environments, and go live with
            enterprise-grade compliance.
          </motion.p>

          <motion.div variants={content}>
            <Link
              href="https://rupeeflow.org/"
              className="inline-block px-8 py-3 bg-black text-white font-semibold rounded-full hover:bg-neutral-900 transition"
            >
              Get Started →
            </Link>
          </motion.div>
        </motion.div>
      </section>
      <FaqSection faqs={faq} />
    </main>
  )
}
