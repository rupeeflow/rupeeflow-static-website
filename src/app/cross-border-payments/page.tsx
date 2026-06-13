'use client'

import Link from 'next/link'
import Button from '@/components/ui/Button'
import Image from 'next/image'
import { motion } from 'framer-motion'
import FAQAccordion from '@/components/ui/FAQAccordion'
import { crossBorderFAQs } from '@/data/faqs'

export default function CrossBorderPaymentsPage() {
  return (
    <div className="w-full relative">

      {/* ── HERO SECTION ── */}
      <section className="relative bg-[var(--background)] overflow-hidden">
        {/* Spotlights */}
        <div
          className="absolute -left-[100px] top-[10%] w-[500px] h-[500px] rounded-full opacity-40 blur-[130px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #109F58 0%, #055949 40%, transparent 70%)' }}
        />
        <div
          className="absolute right-[-50px] top-[20%] w-[400px] h-[400px] rounded-full opacity-25 blur-[100px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #109F58 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-36 pb-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-10">

          {/* Left: Text */}
          <motion.div
            className="flex-1 text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-1.5 mb-6"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-xs font-semibold tracking-wide uppercase">Cross-Border Payments</span>
            </motion.div>

            <h1 className="fontheading text-3xl sm:text-4xl lg:text-[2.8rem] leading-[1.2] text-[var(--foreground)] mb-5">
              Seamless{' '}
              <span className="text-emerald-400">Cross-Border</span>{' '}
              Payments, Simplified
            </h1>

            <p className="text-gray-400 max-w-lg text-sm md:text-base fontbody2 leading-relaxed mb-7">
              Send and receive international payments effortlessly with competitive
              exchange rates, real-time tracking, and full regulatory compliance
              across 100+ countries.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-8">
              {[
                { value: '100+', label: 'Countries' },
                { value: '30+', label: 'Currencies' },
                { value: '1–2', label: 'Day Settlement' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="fontheading text-xl text-emerald-400">{s.value}</p>
                  <p className="text-xs text-gray-500 fontbody2 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            <Button href="#" className="inline-flex items-center gap-3 px-8 py-3.5 text-sm font-semibold">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--card)]" />
              Get Started
            </Button>
          </motion.div>

          {/* Right: Map + floating transaction cards */}
          <motion.div
            className="w-full lg:flex-1 relative flex justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="relative w-full max-w-[500px] h-[320px] sm:h-[380px] lg:h-[420px]">
              {/* Map image — fixed height, centered */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <img
                  src="/images/cross-border/map.png"
                  alt="Global Payment Network"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </motion.div>

              {/* Floating: Sent from India */}
              <motion.div
                className="absolute top-[10%] left-[-10px] bg-[var(--card)] backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 flex items-center gap-3"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-2xl">🇮🇳</span>
                <div>
                  <p className="text-[10px] text-gray-400 fontbody2">Sent from India</p>
                  <p className="text-sm font-bold text-[var(--foreground)] fontheading">₹4,15,000</p>
                </div>
              </motion.div>

              {/* Floating: Received in USA */}
              <motion.div
                className="absolute top-[15%] right-[-10px] bg-[var(--card)] backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 flex items-center gap-3"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <span className="text-2xl">🇺🇸</span>
                <div>
                  <p className="text-[10px] text-gray-400 fontbody2">Received in USA</p>
                  <p className="text-sm font-bold text-[var(--foreground)] fontheading">$5,000</p>
                </div>
              </motion.div>

              {/* Floating: Exchange rate */}
              <motion.div
                className="absolute bottom-[20%] left-[5%] bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 rounded-2xl px-4 py-3"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <p className="text-[10px] text-emerald-300 fontbody2 mb-0.5">Live Rate</p>
                <p className="text-sm font-bold text-[var(--foreground)] fontheading">1 USD = ₹83.21</p>
                <p className="text-[10px] text-emerald-400 mt-0.5">↑ 0.12% today</p>
              </motion.div>

              {/* Floating: Settlement status */}
              <motion.div
                className="absolute bottom-[10%] right-[5%] bg-[var(--card)] backdrop-blur-md border border-white/20 rounded-xl px-3 py-2 flex items-center gap-2"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
              >
                <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                  <svg className="w-3 h-3 text-[var(--foreground)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-xs font-semibold text-[var(--foreground)] fontheading">Settled</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── HOW CROSS-BORDER PAYMENTS WORK ── */}
      <section className="relative py-24 bg-[var(--card)] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="fontheading text-3xl md:text-4xl text-gray-900">
              How <span className="text-emerald-500">Cross-Border Payments</span> Work
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left: Steps */}
            <div className="flex-1 space-y-8 w-full max-w-lg">
              {[
                {
                  icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
                  title: 'Create Your Account',
                  desc: 'Sign up on Rupeeflow, complete your KYC verification, and get onboarded in minutes.',
                },
                {
                  icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
                  title: 'Add Beneficiary Details',
                  desc: "Enter the recipient's bank details, currency, and country for seamless transfers.",
                },
                {
                  icon: 'M13 10V3L4 14h7v7l9-11h-7z',
                  title: 'Initiate Payment',
                  desc: 'Choose the amount and currency, review the exchange rate, and confirm the transaction.',
                },
              ].map((step, i) => (
                <motion.div
                  key={step.title}
                  className="flex items-start gap-5"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="w-12 h-12 shrink-0 rounded-full border-2 border-emerald-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="fontheading text-lg text-gray-900">{step.title}</h3>
                    <p className="text-sm text-gray-500 mt-1 fontbody2">{step.desc}</p>
                  </div>
                </motion.div>
              ))}

              <motion.div
                className="flex items-start gap-5 bg-gray-50 rounded-2xl p-6 -ml-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="w-12 h-12 shrink-0 rounded-full border-2 border-emerald-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="fontheading text-lg text-gray-900">Track & Settle</h3>
                  <p className="text-sm text-gray-500 mt-1 fontbody2">
                    Monitor your payment in real time and get notified when funds are settled to the recipient.
                  </p>
                </div>
              </motion.div>

              <div className="pt-2">
                {/* <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors"
                >
                  Get started
                </Link> */}
              </div>
            </div>

            {/* Right: payment-button.jpeg with gradient blends */}
            <motion.div
              className="w-full lg:flex-1 flex justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="relative w-full max-w-[480px] h-[380px] sm:h-[440px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/payment-button/payment-button.jpeg"
                  alt="Cross-Border Payment Process"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
                {/* 4-sided gradient blends */}
                <div className="absolute inset-x-0 top-0 h-[25%] bg-gradient-to-b from-white to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-[25%] bg-gradient-to-t from-white to-transparent" />
                <div className="absolute inset-y-0 left-0 w-[18%] bg-gradient-to-r from-white to-transparent" />
                <div className="absolute inset-y-0 right-0 w-[18%] bg-gradient-to-l from-white to-transparent" />

                {/* Floating transfer badge */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-[var(--card)] rounded-2xl shadow-xl px-5 py-3 flex items-center gap-4 z-10">
                  <span className="text-xl">🇮🇳</span>
                  <div className="flex items-center gap-2">
                    <div className="h-0.5 w-10 bg-emerald-400" />
                    <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    <div className="h-0.5 w-10 bg-emerald-400" />
                  </div>
                  <span className="text-xl">🇬🇧</span>
                  <div className="ml-2 border-l border-gray-200 pl-3">
                    <p className="text-[10px] text-gray-500 fontbody2">Transfer</p>
                    <p className="text-sm font-bold text-gray-900 fontheading">£2,400</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHY RUPEEFLOW FOR CROSS-BORDER PAYMENTS ── */}
      <section className="relative py-24 bg-[#f4f8fb] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="fontheading text-3xl md:text-4xl text-gray-900">
              Why Rupeeflow for <span className="text-emerald-500">Cross-Border Payments?</span>
            </h2>
          </div>

          <div className="space-y-24">

            {/* 1. Multi-Currency Support */}
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <motion.div
                className="flex-1"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--foreground)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">Multi-Currency Support Across 100+ Countries</h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Send and receive payments in over 30 currencies across 100+ countries. Rupeeflow handles
                  currency conversion automatically with competitive exchange rates, eliminating the complexity
                  of managing multiple foreign accounts.
                </p>
                {/* <Link href="#" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors">
                  Get Started
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link> */}
              </motion.div>

              {/* Live forex rates card */}
              <motion.div
                className="lg:w-[45%] flex justify-center"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <div className="w-full max-w-[380px] bg-[var(--card)] rounded-2xl border border-gray-200 shadow-lg p-5">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm fontheading text-gray-800">Live Exchange Rates</p>
                    <span className="flex items-center gap-1.5 text-[10px] text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live
                    </span>
                  </div>
                  <div className="space-y-2.5">
                    {[
                      { flag: '🇺🇸', pair: 'USD → INR', rate: '₹83.21', change: '+0.12%', up: true },
                      { flag: '🇬🇧', pair: 'GBP → INR', rate: '₹105.40', change: '+0.08%', up: true },
                      { flag: '🇪🇺', pair: 'EUR → INR', rate: '₹89.76', change: '-0.05%', up: false },
                      { flag: '🇦🇪', pair: 'AED → INR', rate: '₹22.65', change: '+0.03%', up: true },
                      { flag: '🇸🇬', pair: 'SGD → INR', rate: '₹61.80', change: '+0.15%', up: true },
                    ].map((r) => (
                      <div key={r.pair} className="flex items-center gap-3 py-2 border-b border-gray-50 last:border-0">
                        <span className="text-lg shrink-0">{r.flag}</span>
                        <span className="text-xs text-gray-500 fontbody2 flex-1">{r.pair}</span>
                        <span className="text-sm font-bold text-gray-900 fontheading">{r.rate}</span>
                        <span className={`text-[10px] font-semibold ${r.up ? 'text-emerald-600' : 'text-red-500'}`}>{r.change}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* 2. Competitive Exchange Rates */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
              <motion.div
                className="flex-1"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--foreground)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">Competitive Exchange Rates & Low Fees</h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Save on every international transaction with our transparent pricing model. Rupeeflow
                  offers real-time exchange rates with minimal markup and no hidden charges, ensuring you
                  always get best value compared to traditional banking channels.
                </p>
                {/* <Link href="#" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors">
                  Get Started
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link> */}
              </motion.div>

              {/* Fee comparison card */}
              <motion.div
                className="lg:w-[45%] flex justify-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <div className="w-full max-w-[380px] bg-[var(--card)] rounded-2xl border border-gray-200 shadow-lg p-5">
                  <p className="text-xs text-gray-500 fontbody2 mb-4">Fee Comparison — $1,000 transfer</p>
                  <div className="space-y-3">
                    {[
                      { name: 'Traditional Bank', fee: '$25–$45', fx: '2.5–3%', total: '~$75', highlight: false },
                      { name: 'Rupeeflow', fee: '$0', fx: '0.5%', total: '~$5', highlight: true },
                      { name: 'Wire Transfer', fee: '$15–$30', fx: '2–2.5%', total: '~$55', highlight: false },
                    ].map((row) => (
                      <div
                        key={row.name}
                        className={`flex items-center gap-3 rounded-xl px-4 py-3 ${row.highlight ? 'bg-emerald-50 border border-emerald-200' : 'bg-gray-50'}`}
                      >
                        <div className="flex-1">
                          <p className={`text-xs font-semibold fontheading ${row.highlight ? 'text-emerald-700' : 'text-gray-700'}`}>{row.name}</p>
                          <p className="text-[10px] text-gray-400 fontbody2 mt-0.5">Fee: {row.fee} · FX: {row.fx}</p>
                        </div>
                        <div className={`text-sm font-bold fontheading ${row.highlight ? 'text-emerald-600' : 'text-gray-500'}`}>
                          {row.total}
                        </div>
                        {row.highlight && (
                          <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                            <svg className="w-3.5 h-3.5 text-[var(--foreground)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] text-center text-emerald-600 mt-3 font-semibold">Save up to 93% on every transfer</p>
                </div>
              </motion.div>
            </div>

            {/* 3. Regulatory Compliance */}
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <motion.div
                className="flex-1"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--foreground)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">Built-in Regulatory Compliance & KYC</h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Navigate the complexities of international payment regulations effortlessly. Rupeeflow is
                  fully compliant with RBI guidelines, FEMA regulations, and global AML/KYC standards,
                  ensuring every cross-border transaction meets all legal requirements.
                </p>
                {/* <Link href="#" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors">
                  Get Started
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link> */}
              </motion.div>

              {/* Compliance badges card */}
              <motion.div
                className="lg:w-[45%] flex justify-center"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <div className="w-full max-w-[380px] bg-[var(--card)] rounded-2xl border border-gray-200 shadow-lg p-5">
                  <p className="text-xs text-gray-500 fontbody2 mb-4">Compliance & Certifications</p>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {[
                      { badge: 'RBI Authorized', sub: 'Payment Gateway', color: 'bg-emerald-50 border-emerald-200 text-emerald-700' },
                      { badge: 'FEMA Compliant', sub: 'Cross-Border Payments', color: 'bg-blue-50 border-blue-200 text-blue-700' },
                      { badge: 'AML / KYC', sub: 'Global Standards', color: 'bg-purple-50 border-purple-200 text-purple-700' },
                      { badge: 'ISO 27001', sub: 'Security Certified', color: 'bg-orange-50 border-orange-200 text-orange-700' },
                    ].map((c) => (
                      <div key={c.badge} className={`border rounded-xl p-3.5 ${c.color}`}>
                        <div className="flex items-center gap-1.5 mb-1">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          <p className="text-xs font-bold fontheading">{c.badge}</p>
                        </div>
                        <p className="text-[10px] opacity-70 fontbody2">{c.sub}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gray-50 rounded-xl px-4 py-3 flex items-center gap-3">
                    <svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-[11px] text-gray-600 fontbody2">Transactions auto-reported under LRS guidelines</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* 4. Real-time Tracking */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
              <motion.div
                className="flex-1"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--foreground)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">Real-time Payment Tracking & Notifications</h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Know exactly where your money is at every step. Rupeeflow provides end-to-end visibility
                  into your cross-border transactions with real-time status updates, instant notifications
                  on settlement, and detailed audit trails.
                </p>
                {/* <Link href="#" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors">
                  Get Started
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link> */}
              </motion.div>

              {/* Payment tracking timeline card */}
              <motion.div
                className="lg:w-[45%] flex justify-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <div className="w-full max-w-[380px] bg-[var(--card)] rounded-2xl border border-gray-200 shadow-lg p-5">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm fontheading text-gray-800">Transfer #TXN-78432</p>
                    <span className="text-[10px] bg-emerald-50 text-emerald-600 border border-emerald-200 px-2.5 py-0.5 rounded-full font-semibold">Settled</span>
                  </div>
                  <div className="flex items-center justify-between mb-5 bg-gray-50 rounded-xl px-4 py-2.5">
                    <div>
                      <p className="text-[10px] text-gray-500 fontbody2">Sending</p>
                      <p className="text-sm font-bold text-gray-900 fontheading">₹4,15,000</p>
                    </div>
                    <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    <div className="text-right">
                      <p className="text-[10px] text-gray-500 fontbody2">Receiving</p>
                      <p className="text-sm font-bold text-gray-900 fontheading">$5,000</p>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="space-y-0">
                    {[
                      { label: 'Payment Initiated', time: '10:02 AM', done: true },
                      { label: 'KYC Verified', time: '10:03 AM', done: true },
                      { label: 'Forex Conversion', time: '10:04 AM', done: true },
                      { label: 'In Transit (SWIFT)', time: '10:15 AM', done: true },
                      { label: 'Settled to Recipient', time: '11:40 AM', done: true },
                    ].map((step, i, arr) => (
                      <div key={step.label} className="flex items-start gap-3">
                        <div className="flex flex-col items-center">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${step.done ? 'bg-emerald-500' : 'bg-gray-200'}`}>
                            {step.done && (
                              <svg className="w-3 h-3 text-[var(--foreground)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                          {i < arr.length - 1 && <div className="w-px h-6 bg-emerald-200 my-0.5" />}
                        </div>
                        <div className="flex-1 pb-1">
                          <div className="flex items-center justify-between">
                            <p className={`text-[11px] font-semibold fontheading ${step.done ? 'text-gray-800' : 'text-gray-400'}`}>{step.label}</p>
                            <p className="text-[10px] text-gray-400 fontbody2">{step.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* 5. Seamless API Integration */}
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <motion.div
                className="flex-1"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--foreground)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4m-8-8L2 12l4 4" />
                    </svg>
                  </div>
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">Seamless API Integration for Your Platform</h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Integrate cross-border payment capabilities directly into your platform with Rupeeflow&apos;s developer-friendly APIs. Our comprehensive documentation, SDKs, and sandbox environment make it easy to build and test international payment workflows tailored to your business needs.
                </p>
                {/* <Link href="#" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors">
                  Get Started
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link> */}
              </motion.div>

              {/* API snippet card */}
              <motion.div
                className="lg:w-[45%] flex justify-center"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <div className="w-full max-w-[380px] bg-[#0F1117] rounded-2xl border border-gray-700 shadow-xl overflow-hidden">
                  {/* Terminal header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-[#1A1D27] border-b border-gray-700">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-2 text-[11px] text-gray-400 fontbody2">rupeeflow-api.js</span>
                  </div>
                  {/* Code */}
                  <div className="p-4 text-[11px] leading-relaxed font-mono">
                    <p className="text-gray-500">{'// Initiate cross-border transfer'}</p>
                    <p className="mt-2">
                      <span className="text-purple-400">const</span>
                      <span className="text-[var(--foreground)]"> transfer </span>
                      <span className="text-purple-400">= await</span>
                      <span className="text-emerald-400"> rupeeflow</span>
                      <span className="text-[var(--foreground)]">.</span>
                      <span className="text-blue-400">transfers</span>
                      <span className="text-[var(--foreground)]">.</span>
                      <span className="text-yellow-400">create</span>
                      <span className="text-[var(--foreground)]">{'({'}</span>
                    </p>
                    <p className="ml-4 text-[var(--foreground)]">
                      <span className="text-blue-300">amount</span>
                      <span className="text-gray-400">: </span>
                      <span className="text-orange-300">500000</span>
                      <span className="text-gray-400">,</span>
                    </p>
                    <p className="ml-4 text-[var(--foreground)]">
                      <span className="text-blue-300">currency</span>
                      <span className="text-gray-400">: </span>
                      <span className="text-green-300">&apos;USD&apos;</span>
                      <span className="text-gray-400">,</span>
                    </p>
                    <p className="ml-4 text-[var(--foreground)]">
                      <span className="text-blue-300">recipient</span>
                      <span className="text-gray-400">: </span>
                      <span className="text-green-300">&apos;rec_8Xk2mNp3&apos;</span>
                      <span className="text-gray-400">,</span>
                    </p>
                    <p className="ml-4 text-[var(--foreground)]">
                      <span className="text-blue-300">purpose</span>
                      <span className="text-gray-400">: </span>
                      <span className="text-green-300">&apos;EXPORT_SERVICES&apos;</span>
                    </p>
                    <p className="text-[var(--foreground)]">{'})'}</p>
                    <p className="mt-3 text-gray-500">{'// Response'}</p>
                    <p className="text-emerald-400">{'{ status: "initiated",'}</p>
                    <p className="text-emerald-400 ml-2">{'txn_id: "TXN-78432",'}</p>
                    <p className="text-emerald-400 ml-2">{'rate: 83.21 }'}</p>
                  </div>
                  {/* Bottom badges */}
                  <div className="flex gap-2 px-4 pb-4">
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">REST API</span>
                    <span className="text-[10px] bg-blue-500/20 text-blue-400 border border-blue-500/30 px-2.5 py-0.5 rounded-full">Webhooks</span>
                    <span className="text-[10px] bg-purple-500/20 text-purple-400 border border-purple-500/30 px-2.5 py-0.5 rounded-full">Sandbox</span>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CROSS-BORDER PAYMENT FEATURES ── */}
      <section className="relative py-24 bg-[var(--card)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="fontheading text-3xl md:text-4xl text-gray-900">
              Rupeeflow <span className="text-emerald-500">Cross-Border Features</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[var(--card)] border border-gray-200 rounded-2xl p-7 hover:shadow-md transition-shadow">
              <svg className="w-10 h-10 text-emerald-500 mb-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="fontheading text-lg text-gray-900 mb-3">Instant Settlements</h3>
              <p className="text-sm text-gray-500 fontbody2 leading-relaxed">
                Receive international payments faster with same-day or next-day settlement across supported corridors.
              </p>
            </div>

            <div className="bg-[var(--card)] border border-gray-200 rounded-2xl p-7 hover:shadow-md transition-shadow">
              <svg className="w-10 h-10 text-emerald-500 mb-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <h3 className="fontheading text-lg text-gray-900 mb-3">Multi-Currency Wallet</h3>
              <p className="text-sm text-gray-500 fontbody2 leading-relaxed">
                Hold balances in multiple currencies and convert when the rates are favorable for your business.
              </p>
            </div>

            <div className="bg-[var(--card)] border border-gray-200 rounded-2xl p-7 hover:shadow-md transition-shadow">
              <svg className="w-10 h-10 text-emerald-500 mb-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7" />
              </svg>
              <h3 className="fontheading text-lg text-gray-900 mb-3">Automated Reconciliation</h3>
              <p className="text-sm text-gray-500 fontbody2 leading-relaxed">
                Automatically match incoming international payments with invoices and generate detailed settlement reports.
              </p>
            </div>

            <div className="bg-[var(--card)] border border-gray-200 rounded-2xl p-7 hover:shadow-md transition-shadow">
              <svg className="w-10 h-10 text-emerald-500 mb-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h3 className="fontheading text-lg text-gray-900 mb-3">Compliance Dashboard</h3>
              <p className="text-sm text-gray-500 fontbody2 leading-relaxed">
                Monitor all regulatory requirements, documentation status, and transaction limits from a centralized dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion faqs={crossBorderFAQs} subtitle="Everything you need to know about RupeeFlow Cross-Border Payments." />
    </div>
  )
}
