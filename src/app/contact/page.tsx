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
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Office',
    value: 'Bengaluru, Karnataka, India',
    href: '#',
  },
]

type FormFields = {
  name: string
  organisation: string
  businessType: string
  email: string
  mobileNumber: string
}

type FormErrors = Partial<Record<keyof FormFields, string>>

function validateForm(form: FormFields): FormErrors {
  const errors: FormErrors = {}

  if (!form.name.trim()) {
    errors.name = 'Full name is required'
  }

  if (!form.organisation.trim()) {
    errors.organisation = 'Organisation name is required'
  }

  if (!form.businessType) {
    errors.businessType = 'Please select a business type'
  }

  if (!form.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = 'Enter a valid email address'
  }

  if (!form.mobileNumber.trim()) {
    errors.mobileNumber = 'Mobile number is required'
  } else if (!/^\d{10}$/.test(form.mobileNumber.trim())) {
    errors.mobileNumber = 'Enter a valid 10-digit mobile number'
  }

  return errors
}

const emptyForm: FormFields = { name: '', organisation: '', businessType: '', email: '', mobileNumber: '' }

export default function ContactPage() {
  const [form, setForm] = useState<FormFields>(emptyForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof FormFields, boolean>>>({})
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    const updated = { ...form, [name]: value }
    setForm(updated)
    if (touched[name as keyof FormFields]) {
      setErrors(validateForm(updated))
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name } = e.target
    setFocused(null)
    setTouched((prev) => ({ ...prev, [name]: true }))
    setErrors(validateForm({ ...form }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const allTouched = Object.fromEntries(
      (Object.keys(emptyForm) as (keyof FormFields)[]).map((k) => [k, true])
    ) as Record<keyof FormFields, boolean>
    setTouched(allTouched)

    const validationErrors = validateForm(form)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setLoading(true)
    setApiError(null)

    try {
      const res = await fetch('https://api.rupeeflow.co/api/v1/users/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          organizationName: form.organisation.trim(),
          businessType: form.businessType,
          email: form.email.trim(),
          mobileNumber: form.mobileNumber.trim(),
        }),
      })

      const data = await res.json()

      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Something went wrong. Please try again.')
      }

      setSubmitted(true)
    } catch (err) {
      setApiError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const isComplete = form.name && form.organisation && form.businessType && form.email && form.mobileNumber

  const fieldBorderClass = (field: keyof FormFields) => {
    if (errors[field] && touched[field]) return 'border-red-400 bg-red-50'
    if (focused === field) return 'border-emerald-500 bg-emerald-50'
    return 'border-emerald-400 bg-gray-50'
  }

  return (
    <div className="w-full relative">
      <section className="relative min-h-screen bg-[var(--card)] overflow-hidden flex items-center">

        {/* Spotlights */}
        <div
          className="absolute -left-[80px] top-[10%] w-[450px] h-[450px] rounded-full opacity-20 blur-[130px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #109F58 0%, #055949 40%, transparent 70%)' }}
        />
        <div
          className="absolute right-[-60px] bottom-[15%] w-[380px] h-[380px] rounded-full opacity-15 blur-[110px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #109F58 0%, transparent 70%)' }}
        />

        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(circle, #000000 1px, transparent 1px)', backgroundSize: '32px 32px' }}
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

            <h1 className="fontheading text-4xl sm:text-5xl lg:text-[3.2rem] leading-[1.15] text-gray-900 mb-5">
              Let&apos;s Build Something{' '}
              <span className="text-emerald-600">Great Together</span>
            </h1>

            <p className="text-gray-600 max-w-md text-base md:text-lg fontbody2 leading-relaxed mb-10">
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
                    <p className="text-sm text-gray-700 font-medium group-hover:text-emerald-600 transition-colors">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Form Card ── */}
          <motion.div
            className="w-full lg:w-[480px] shrink-0"
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-[var(--card)] backdrop-blur-md border border-gray-200 rounded-3xl p-8 md:p-10 shadow-2xl">
              {!submitted ? (
                <>
                  <div className="mb-8">
                    <h2 className="fontheading text-xl text-gray-900 mb-1.5">Send us a message</h2>
                    <p className="text-sm text-gray-600 fontbody2">We typically respond within 24 hours.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>

                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                        Full Name <span className="text-emerald-400">*</span>
                      </label>
                      <div className={`relative rounded-xl border-2 transition-all duration-200 ${fieldBorderClass('name')}`}>
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <input
                          type="text" name="name" value={form.name}
                          onChange={handleChange}
                          onFocus={() => setFocused('name')}
                          onBlur={handleBlur}
                          placeholder="Rahul Sharma" required
                          className="w-full bg-transparent pl-10 pr-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 outline-none rounded-xl"
                        />
                      </div>
                      {errors.name && touched.name && (
                        <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Organisation Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                        Organisation Name <span className="text-emerald-400">*</span>
                      </label>
                      <div className={`relative rounded-xl border-2 transition-all duration-200 ${fieldBorderClass('organisation')}`}>
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <input
                          type="text" name="organisation" value={form.organisation}
                          onChange={handleChange}
                          onFocus={() => setFocused('organisation')}
                          onBlur={handleBlur}
                          placeholder="Acme Pvt. Ltd." required
                          className="w-full bg-transparent pl-10 pr-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 outline-none rounded-xl"
                        />
                      </div>
                      {errors.organisation && touched.organisation && (
                        <p className="text-xs text-red-500 mt-1">{errors.organisation}</p>
                      )}
                    </div>

                    {/* Type of Business */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                        Type of Business <span className="text-emerald-400">*</span>
                      </label>
                      <div className={`relative rounded-xl border-2 transition-all duration-200 ${fieldBorderClass('businessType')}`}>
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <select
                          name="businessType" value={form.businessType}
                          onChange={handleChange}
                          onFocus={() => setFocused('businessType')}
                          onBlur={handleBlur}
                          required
                          className="w-full bg-transparent pl-10 pr-10 py-3.5 text-sm text-gray-900 outline-none rounded-xl appearance-none cursor-pointer"
                        >
                          <option value="" disabled className="bg-[var(--card)] text-gray-400">Select business type</option>
                          {businessTypes.map((type) => (
                            <option key={type} value={type} className="bg-[var(--card)] text-gray-900">{type}</option>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                      {errors.businessType && touched.businessType && (
                        <p className="text-xs text-red-500 mt-1">{errors.businessType}</p>
                      )}
                    </div>

                    {/* Company Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                        Company Email <span className="text-emerald-400">*</span>
                      </label>
                      <div className={`relative rounded-xl border-2 transition-all duration-200 ${fieldBorderClass('email')}`}>
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <input
                          type="email" name="email" value={form.email}
                          onChange={handleChange}
                          onFocus={() => setFocused('email')}
                          onBlur={handleBlur}
                          placeholder="you@company.com" required
                          className="w-full bg-transparent pl-10 pr-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 outline-none rounded-xl"
                        />
                      </div>
                      {errors.email && touched.email && (
                        <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                      )}
                    </div>

                    {/* Mobile Number */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                        Mobile Number <span className="text-emerald-400">*</span>
                      </label>
                      <div className={`relative rounded-xl border-2 transition-all duration-200 ${fieldBorderClass('mobileNumber')}`}>
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <input
                          type="tel" name="mobileNumber" value={form.mobileNumber}
                          onChange={handleChange}
                          onFocus={() => setFocused('mobileNumber')}
                          onBlur={handleBlur}
                          placeholder="9876543210"
                          maxLength={10}
                          required
                          className="w-full bg-transparent pl-10 pr-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 outline-none rounded-xl"
                        />
                      </div>
                      {errors.mobileNumber && touched.mobileNumber && (
                        <p className="text-xs text-red-500 mt-1">{errors.mobileNumber}</p>
                      )}
                    </div>

                    {/* API Error */}
                    {apiError && (
                      <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                        {apiError}
                      </div>
                    )}

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={!isComplete || loading}
                      className={`w-full py-4 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-2.5 ${
                        isComplete && !loading
                          ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-[var(--foreground)] shadow-lg shadow-emerald-500/25 hover:from-emerald-600 hover:to-emerald-700 cursor-pointer'
                          : 'bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed'
                      }`}
                      whileTap={isComplete && !loading ? { scale: 0.97 } : {}}
                    >
                      {loading ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        <>
                          {isComplete && <span className="w-2 h-2 rounded-full bg-[var(--card)]" />}
                          Submit Request
                          {isComplete && (
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          )}
                        </>
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
                  <h3 className="fontheading text-2xl text-gray-900 mb-3">Request Received!</h3>
                  <p className="text-sm text-gray-600 fontbody2 leading-relaxed max-w-xs mb-8">
                    Thanks, <span className="text-emerald-600">{form.name}</span>. Our team will reach out to{' '}
                    <span className="text-emerald-600">{form.email}</span> within one business day.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setForm(emptyForm)
                      setErrors({})
                      setTouched({})
                      setApiError(null)
                    }}
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
