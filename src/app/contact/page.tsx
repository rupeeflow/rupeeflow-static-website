'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CrossCheckSVG } from '@/components/ui/icon/CrossCheckSVG'

const businessTypes = [
  'Startup',
  'Small & Medium Enterprise (SME)',
  'Large Enterprise',
  'E-commerce',
  'Fintech / Payments',
  'NBFC / Banking',
  'Healthcare',
  'Education',
  'Retail / Kirana',
  'Logistics',
  'Other',
]

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email us',
    value: 'support@rupeeflow.co',
    href: 'mailto:support@rupeeflow.co',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Call us',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Office',
    value: 'Bengaluru, Karnataka, India',
    href: '#',
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', organisation: '', businessType: '', email: '' })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const isComplete = form.name && form.organisation && form.businessType && form.email

  return (
    <div className="w-full relative">
      <section className="relative min-h-screen bg-[#020506] overflow-hidden flex items-center">

        {/* Spotlights */}
        <div
          className="absolute -left-[80px] top-[10%] w-[450px] h-[450px] rounded-full opacity-50 blur-[130px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #109F58 0%, #055949 40%, transparent 70%)' }}
        />
        <div
          className="absolute right-[-60px] bottom-[15%] w-[380px] h-[380px] rounded-full opacity-25 blur-[110px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #109F58 0%, transparent 70%)' }}
        />

        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-32 pb-20 flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* ── LEFT: Copy & Contact Info ── */}
          <motion.div
            className="flex-1 text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-1.5 mb-7"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-xs font-semibold tracking-wide uppercase">Get in Touch</span>
            </motion.div>

            <h1 className="fontheading text-4xl sm:text-5xl lg:text-[3.2rem] leading-[1.15] text-white mb-5">
              Let&apos;s Build Something{' '}
              <span className="text-emerald-400">Great Together</span>
            </h1>

            <p className="text-gray-400 max-w-md text-base md:text-lg fontbody2 leading-relaxed mb-10">
              Tell us about your business and our team will get back to you within one business day
              with a tailored solution for your payment needs.
            </p>

            {/* Contact info */}
            <div className="space-y-5 mb-10">
              {contactInfo.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition-colors shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-500 font-medium uppercase tracking-wide">{item.label}</p>
                    <p className="text-sm text-gray-300 font-medium group-hover:text-emerald-400 transition-colors">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Trust badges */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              {['RBI Registered', 'PCI DSS', '256-bit SSL', 'ISO 27001'].map((badge) => (
                <span
                  key={badge}
                  className="text-[11px] font-semibold text-emerald-400/80 border border-emerald-500/20 bg-emerald-500/5 rounded-full px-3 py-1"
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Form Card ── */}
          <motion.div
            className="w-full lg:w-[480px] shrink-0"
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl shadow-black/40">
              {!submitted ? (
                <>
                  <div className="mb-8">
                    <h2 className="fontheading text-xl text-white mb-1.5">Send us a message</h2>
                    <p className="text-sm text-gray-400 fontbody2">We typically respond within 24 hours.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                        Full Name <span className="text-emerald-400">*</span>
                      </label>
                      <div className={`relative rounded-xl border transition-all duration-200 ${focused === 'name' ? 'border-emerald-500 bg-emerald-500/5' : 'border-white/10 bg-white/5'}`}>
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <input
                          type="text" name="name" value={form.name}
                          onChange={handleChange} onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                          placeholder="Rahul Sharma" required
                          className="w-full bg-transparent pl-10 pr-4 py-3.5 text-sm text-white placeholder-gray-600 outline-none rounded-xl"
                        />
                      </div>
                    </div>

                    {/* Organisation Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                        Organisation Name <span className="text-emerald-400">*</span>
                      </label>
                      <div className={`relative rounded-xl border transition-all duration-200 ${focused === 'organisation' ? 'border-emerald-500 bg-emerald-500/5' : 'border-white/10 bg-white/5'}`}>
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <input
                          type="text" name="organisation" value={form.organisation}
                          onChange={handleChange} onFocus={() => setFocused('organisation')} onBlur={() => setFocused(null)}
                          placeholder="Acme Pvt. Ltd." required
                          className="w-full bg-transparent pl-10 pr-4 py-3.5 text-sm text-white placeholder-gray-600 outline-none rounded-xl"
                        />
                      </div>
                    </div>

                    {/* Type of Business */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                        Type of Business <span className="text-emerald-400">*</span>
                      </label>
                      <div className={`relative rounded-xl border transition-all duration-200 ${focused === 'businessType' ? 'border-emerald-500 bg-emerald-500/5' : 'border-white/10 bg-white/5'}`}>
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <select
                          name="businessType" value={form.businessType}
                          onChange={handleChange} onFocus={() => setFocused('businessType')} onBlur={() => setFocused(null)}
                          required
                          className="w-full bg-transparent pl-10 pr-10 py-3.5 text-sm text-white outline-none rounded-xl appearance-none cursor-pointer"
                          style={{ colorScheme: 'dark' }}
                        >
                          <option value="" disabled className="bg-[#0d1a14] text-gray-400">Select business type</option>
                          {businessTypes.map((type) => (
                            <option key={type} value={type} className="bg-[#0d1a14] text-white">{type}</option>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Company Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                        Company Email <span className="text-emerald-400">*</span>
                      </label>
                      <div className={`relative rounded-xl border transition-all duration-200 ${focused === 'email' ? 'border-emerald-500 bg-emerald-500/5' : 'border-white/10 bg-white/5'}`}>
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <input
                          type="email" name="email" value={form.email}
                          onChange={handleChange} onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                          placeholder="you@company.com" required
                          className="w-full bg-transparent pl-10 pr-4 py-3.5 text-sm text-white placeholder-gray-600 outline-none rounded-xl"
                        />
                      </div>
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={!isComplete}
                      className={`w-full py-4 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-2.5 ${
                        isComplete
                          ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/25 hover:from-emerald-600 hover:to-emerald-700 cursor-pointer'
                          : 'bg-white/5 text-gray-600 border border-white/10 cursor-not-allowed'
                      }`}
                      whileTap={isComplete ? { scale: 0.97 } : {}}
                    >
                      {isComplete && <span className="w-2 h-2 rounded-full bg-white/80" />}
                      Submit Request
                      {isComplete && (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      )}
                    </motion.button>

                    <p className="text-center text-[11px] text-gray-600 fontbody2">
                      By submitting, you agree to our{' '}
                      <Link href="/legal/privacy" className="text-emerald-500/70 hover:text-emerald-400 transition-colors">Privacy Policy</Link>
                      {' '}and{' '}
                      <Link href="/legal/terms" className="text-emerald-500/70 hover:text-emerald-400 transition-colors">Terms of Service</Link>.
                    </p>
                  </form>
                </>
              ) : (
                <motion.div
                  className="flex flex-col items-center text-center py-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div
                    className="mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1, type: 'spring', stiffness: 200 }}
                  >
                    <CrossCheckSVG width={64} height={64} />
                  </motion.div>
                  <h3 className="fontheading text-2xl text-white mb-3">Request Received!</h3>
                  <p className="text-sm text-gray-400 fontbody2 leading-relaxed max-w-xs mb-8">
                    Thanks, <span className="text-emerald-400">{form.name}</span>. Our team will reach out to{' '}
                    <span className="text-emerald-400">{form.email}</span> within one business day.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', organisation: '', businessType: '', email: '' }) }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-emerald-500/30 text-emerald-400 text-sm font-semibold hover:bg-emerald-500/10 transition-colors"
                  >
                    Submit another request
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  )
}
