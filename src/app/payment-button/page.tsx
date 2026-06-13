'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import FAQAccordion from '@/components/ui/FAQAccordion'
import { paymentButtonFAQs } from '@/data/faqs'
import PaymentButtonRoundedStripIcon from '../../../public/icons/payment-button/PaymentButtonRoundedStrip'
import CreatePaymentButton from '../../../public/icons/payment-button/CreateButtonIcon'
import CopyButtonIcon from '../../../public/icons/payment-button/CopyButtonIcon'
import ButtonSettingsIcon from '../../../public/icons/payment-button/ButtonSettingsIcon'
import LightingIcon from '../../../public/icons/payment-button/LightingIcon'
import CopyIcon from '../../../public/icons/payment-button/C&PIcon'
import AcceptingIcon from '../../../public/icons/payment-button/AcceptingIcon'
import DrawingIcon from '../../../public/icons/payment-button/DrawingIcon'
import FitsIcon from '../../../public/icons/payment-button/FitsIcon'
import SafeAndSecureIcon from '../../../public/icons/payment-button/Safe&Secure'
import CheckMarkIcon from '../../../public/icons/payment-button/CheckMarkIcon'
import QuickPayButtonIcon from '../../../public/icons/payment-button/QuickPayButton'
import CheckoutButtonIcon from '../../../public/icons/payment-button/CheckoutButton'
import DonateButtonIcon from '../../../public/icons/payment-button/DonateButtonIcon'
import SettingsButtonIcon from '../../../public/icons/payment-button/SettingsButton'
import PhoneFooterIcon from '../../../public/icons/payment-button/PhoneFooterIcon'

export default function PaymentButtonPage() {
  return (
    <div className="w-full relative">
      {/* ── HERO SECTION ── */}
      <section className="relative bg-[var(--background)] overflow-hidden">
        {/* Background glows */}
        <div
          className="absolute -left-[100px] top-[10%] w-[420px] h-[420px] rounded-full opacity-40 blur-[130px] pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(0,135,90,0.12) 0%, rgba(42,184,113,0.08) 40%, transparent 70%)',
          }}
        />
        <div
          className="absolute left-[5%] top-[40%] w-[480px] h-[480px] rounded-full opacity-18 blur-[110px] pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(0,135,90,0.08) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute right-[10%] top-[20%] w-[300px] h-[300px] rounded-full opacity-08 blur-[90px] pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(42,184,113,0.06) 0%, transparent 65%)',
          }}
        />

        {/* ── Two-column content ── */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-10 lg:gap-14 pt-24 pb-10 sm:pt-28 sm:pb-14 lg:pt-24 lg:pb-20">
          {/* LEFT — text */}
          <motion.div
            className="lg:w-[46%] w-full text-left"
            initial={{ opacity: 0, x: -48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full text-xs font-semibold bg-[var(--card)]/70 text-[var(--primary)] border border-[var(--border)]"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              No-code embed
            </motion.span>

            <h1 className="text-[46px] text-[var(--foreground)] leading-tight">
              Collect Smarter with{' '}
              <span className="text-[var(--primary)]">Custom Payment</span>{' '}
              Button
            </h1>

            <p className="mt-6 rf-lead text-[var(--muted)] max-w-lg leading-relaxed">
              Create a payment button in minutes and embed it on any website or
              app. Accept fast, secure payments — no complex integrations or
              coding required.
            </p>

            {/* Stats */}
            <motion.div
              className="mt-8 flex items-center gap-8"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                { value: '100+', label: 'Payment modes' },
                { value: '< 2s', label: 'Load time' },
                { value: '99.9%', label: 'Uptime' },
              ].map(s => (
                <div key={s.label} className="text-center">
                  <p className="text-emerald-400 font-bold text-xl">
                    {s.value}
                  </p>
                  <p className="text-gray-500 text-xs mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              {/* <Link
                href="#"
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-[var(--foreground)] font-semibold text-sm hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg shadow-emerald-500/20"
              >
                <motion.span
                  className="w-2.5 h-2.5 rounded-full bg-[var(--card)]"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                />
                Create Your Button
              </Link> */}
              {/* <Link
                href="#"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-emerald-500/60 text-[var(--foreground)] font-semibold text-sm hover:bg-emerald-500/10 transition-all duration-300"
              >
                Documentation →
              </Link> */}
            </motion.div>
          </motion.div>

          {/* RIGHT — image + floating dashboard cards */}
          <motion.div
            className="lg:w-[54%] w-full flex items-center justify-center"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-full max-w-[580px] mx-auto">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[var(--border)] bg-[var(--card)]">
                <Image
                  src="/images/payment-button/payment-button.jpeg"
                  alt="RupeeFlow Payment Button"
                  width={700}
                  height={480}
                  className="w-full object-cover"
                  priority
                />
                {/* Dark overlay to blend into page bg */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-x-0 top-0 h-[20%] bg-gradient-to-b from-[var(--background)] to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 h-[20%] bg-gradient-to-t from-[var(--background)] to-transparent" />
                  <div className="absolute inset-y-0 left-0 w-[12%] bg-gradient-to-r from-[var(--background)] to-transparent" />
                  <div className="absolute inset-y-0 right-0 w-[12%] bg-gradient-to-l from-[var(--background)] to-transparent" />
                </div>
              </div>

              {/* Floating card 1 — Configure (top-right, above the right edge) */}
              <motion.div
                className="hidden sm:block absolute -top-2 right-4 z-20 bg-[var(--card)] border border-[var(--border)] rounded-2xl p-4 w-[200px] shadow-xl"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Image
                    src="/rflogo-darkbg.svg"
                    alt="RupeeFlow"
                    width={80}
                    height={18}
                  />
                </div>
                <p className="text-[10px] text-[var(--muted)] font-semibold uppercase tracking-widest mb-2">
                  Step 1 — Configure
                </p>
                <div className="space-y-1.5">
                  <div className="bg-[var(--card)]/80 border border-[var(--border)] rounded-lg px-2.5 py-1.5">
                    <p className="text-[10px] text-[var(--muted)]">Label</p>
                    <p className="text-xs text-[var(--foreground)] font-medium">
                      Pay Now
                    </p>
                  </div>
                  <div className="bg-[var(--card)]/80 border border-[var(--border)] rounded-lg px-2.5 py-1.5">
                    <p className="text-[10px] text-[var(--muted)]">Amount</p>
                    <p className="text-xs text-[var(--primary)] font-bold">
                      ₹ 500
                    </p>
                  </div>
                </div>
                <div className="mt-3 w-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-lg py-1.5 text-center text-[10px] text-[var(--surface)] font-semibold">
                  Generate →
                </div>
              </motion.div>

              {/* Floating card 2 — Code snippet (right side, middle) */}
              <motion.div
                className="hidden xl:block absolute -right-48 top-[36%] z-20 bg-[var(--card)] border border-[var(--border)] rounded-2xl p-4 w-[210px] shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.8,
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-md bg-emerald-500/20 flex items-center justify-center">
                    <span className="text-emerald-400 text-[10px] font-bold">{`</>`}</span>
                  </div>
                  <p className="text-xs text-[var(--foreground)] font-semibold">
                    Step 2 — Copy Code
                  </p>
                </div>
                <div className="bg-[var(--card)]/80 rounded-lg p-2.5 font-mono text-[9px] text-[var(--muted)] leading-relaxed border border-[var(--border)]">
                  {`<script\n  src="rupeeflow.js"\n  data-key="rf_live_***"\n  data-amount="500"\n/>`}
                </div>
                <div className="mt-2.5 flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-2.5 py-1.5 cursor-pointer">
                  <span className="text-[10px] text-emerald-400 font-semibold">
                    Copy snippet
                  </span>
                  <span className="text-emerald-400 text-[10px]">⎘</span>
                </div>
              </motion.div>

              {/* Floating card 3 — Live badge (bottom-right) */}
              <motion.div
                className="hidden sm:block absolute -bottom-6 right-6 z-20 bg-[var(--card)] rounded-2xl shadow-xl p-4 w-[190px] border border-[var(--border)]"
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1.4,
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <p className="text-xs font-bold text-gray-800">
                    Step 3 — Button Live!
                  </p>
                </div>
                <div className="w-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full py-2 text-center text-[var(--surface)] text-xs font-semibold shadow-md">
                  Pay Now →
                </div>
                <div className="mt-2 flex justify-between text-[10px] text-gray-400">
                  <span>Clicks today</span>
                  <span className="text-emerald-600 font-bold">127</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── HOW TO CREATE PAYMENT BUTTON ── */}
      <div className="relative bg-[var(--card)] overflow-hidden">
        {/* Decorative strip spanning both sections */}
        <div className="absolute inset-0 pointer-events-none">
          <PaymentButtonRoundedStripIcon
            className="absolute w-full h-full"
            style={{ opacity: 0.8 }}
          />
        </div>

        <section className="relative z-10 py-12 sm:py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="fontheading text-3xl md:text-4xl text-gray-900">
                How to create{' '}
                <span className="text-emerald-500">Payment Button</span>
              </h2>
              <p className="mt-3 text-gray-500 text-sm md:text-base">
                Get Started in 3 Simple Steps
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              {/* Left: 3 Steps */}
              <div className="flex-1 space-y-6 w-full max-w-lg">
                <div className="flex items-start gap-5 bg-[var(--card)] border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <CreatePaymentButton className="w-16 h-16 shrink-0" />
                  <div>
                    <h3 className="fontheading text-xl text-gray-900">
                      Create
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 fontbody2">
                      Design your button using Rupeeflow&apos;s intuitive
                      dashboard.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 bg-[var(--card)] border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <CopyButtonIcon className="w-16 h-16 shrink-0" />
                  <div>
                    <h3 className="fontheading text-xl text-gray-900">Copy</h3>
                    <p className="text-sm text-gray-500 mt-1 fontbody2">
                      Auto-generate code customized for your button.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 bg-[var(--card)] border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <ButtonSettingsIcon className="w-16 h-16 shrink-0" />
                  <div>
                    <h3 className="fontheading text-xl text-gray-900">
                      Integrate
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 fontbody2">
                      Start receiving payments through UPI apps — directly into
                      your bank account.
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  {/* <Link
                    href="#"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-500 text-[var(--foreground)] text-sm font-semibold hover:bg-emerald-600 transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-[var(--card)]" />
                    Get Started
                  </Link> */}
                </div>
              </div>

              {/* Right: Person image with floating UI badges */}
              <div className="flex-1 flex justify-center">
                <div className="relative w-full max-w-[480px]">
                  {/* Phone frame */}
                  <div className="w-[300px] md:w-[340px] mx-auto h-[440px] md:h-[500px]  overflow-hidden bg-gray-50 relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/payment-button/personStanding.png"
                      alt="Person using payment button"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Floating badge: 3 Simple Steps */}
                  <div className="absolute top-6 left-0 bg-[var(--card)] rounded-full px-4 py-1.5 shadow-lg border border-gray-100 text-[11px] font-medium text-gray-700">
                    3 Simple Steps
                  </div>

                  {/* Floating badge: Create Copy Integrate */}
                  <div className="absolute top-16 left-4 bg-[var(--card)] rounded-lg px-3 py-2 shadow-lg border border-gray-100 flex items-center gap-2">
                    <span className="w-4 h-4 rounded bg-emerald-500 flex items-center justify-center">
                      <svg
                        className="w-2.5 h-2.5 text-[var(--foreground)]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="text-[11px] font-semibold text-gray-800">
                      Create
                    </span>
                    <span className="text-[11px] text-gray-400">Copy</span>
                    <span className="text-[11px] text-gray-400">Integrate</span>
                  </div>

                  {/* Floating badge: Quick Setup */}
                  <div className="hidden sm:block absolute top-12 -right-4 bg-[var(--card)] rounded-lg px-3 py-1.5 shadow-lg border border-gray-100 text-[11px]">
                    <span className="text-gray-600">Quick </span>
                    <span className="text-emerald-500 font-semibold">
                      Setup
                    </span>
                  </div>

                  {/* Floating badge: Payment ₹5000 */}
                  <div className="absolute top-[55%] left-0 bg-[var(--card)] rounded-lg px-3 py-2 shadow-lg border border-gray-100">
                    <p className="text-[10px] text-gray-400">Payment</p>
                    <p className="text-sm font-bold text-gray-800">
                      &#8377; 5000
                    </p>
                  </div>

                  {/* Floating badge: Received */}
                  <div className="absolute top-[65%] left-10 bg-emerald-500 rounded-md px-3 py-1 shadow-lg">
                    <span className="text-[10px] font-semibold text-[var(--foreground)]">
                      Received
                    </span>
                  </div>

                  {/* Chat icon */}
                  <div className="absolute top-10 -right-2 w-7 h-7 bg-emerald-500 rounded-lg flex items-center justify-center shadow-md">
                    <svg
                      className="w-3.5 h-3.5 text-[var(--foreground)]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v7a2 2 0 01-2 2H6l-4 4V5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── JUST ONE CLICK IS ENOUGH ── */}
        <section className="relative z-10 py-12 sm:py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="fontheading text-3xl md:text-4xl text-gray-900">
                Just one <span className="text-emerald-500">click</span> is
                enough.
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              {/* Left: 3x2 feature cards */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* Quick Setup */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-shadow">
                  <LightingIcon className="w-10 h-10 mb-3" />
                  <h3 className="fontheading text-sm text-gray-900 mb-3">
                    Quick Setup
                  </h3>
                  <ul className="space-y-1.5">
                    <li className="flex items-start gap-2 text-xs text-gray-500 fontbody2">
                      <CheckMarkIcon className="w-4 h-4 mt-0.5 shrink-0" />
                      Add the button to your site.
                    </li>
                    <li className="flex items-start gap-2 text-xs text-gray-500 fontbody2">
                      <CheckMarkIcon className="w-4 h-4 mt-0.5 shrink-0" />
                      Create your button &amp; copy the code.
                    </li>
                    <li className="flex items-start gap-2 text-xs text-gray-500 fontbody2">
                      <CheckMarkIcon className="w-4 h-4 mt-0.5 shrink-0" />
                      No developer needed.
                    </li>
                  </ul>
                </div>

                {/* Copy & Paste */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-shadow">
                  <CopyIcon className="w-10 h-10 mb-3" />
                  <h3 className="fontheading text-sm text-gray-900 mb-3">
                    Copy &amp; Paste
                  </h3>
                  <ul className="space-y-1.5">
                    <li className="flex items-start gap-2 text-xs text-gray-500 fontbody2">
                      <CheckMarkIcon className="w-4 h-4 mt-0.5 shrink-0" />
                      Copy &amp; paste one line of code.
                    </li>
                    <li className="flex items-start gap-2 text-xs text-gray-500 fontbody2">
                      <CheckMarkIcon className="w-4 h-4 mt-0.5 shrink-0" />
                      Integrates smoothly with any website.
                    </li>
                  </ul>
                </div>

                {/* Accept Payments */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-shadow">
                  <AcceptingIcon className="w-10 h-10 mb-3" />
                  <h3 className="fontheading text-sm text-gray-900 mb-3">
                    Accept Payments
                  </h3>
                  <ul className="space-y-1.5">
                    <li className="flex items-start gap-2 text-xs text-gray-500 fontbody2">
                      <CheckMarkIcon className="w-4 h-4 mt-0.5 shrink-0" />
                      Accept one-time or recurring payments.
                    </li>
                    <li className="flex items-start gap-2 text-xs text-gray-500 fontbody2">
                      <CheckMarkIcon className="w-4 h-4 mt-0.5 shrink-0" />
                      Easy for customers to pay.
                    </li>
                  </ul>
                </div>

                {/* Style Your Button */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-shadow">
                  <DrawingIcon className="w-10 h-10 mb-3" />
                  <h3 className="fontheading text-sm text-gray-900 mb-3">
                    Style Your Button
                  </h3>
                  <ul className="space-y-1.5">
                    <li className="flex items-start gap-2 text-xs text-gray-500 fontbody2">
                      <CheckMarkIcon className="w-4 h-4 mt-0.5 shrink-0" />
                      Change colours and text.
                    </li>
                    <li className="flex items-start gap-2 text-xs text-gray-500 fontbody2">
                      <CheckMarkIcon className="w-4 h-4 mt-0.5 shrink-0" />
                      Make it fit your website.
                    </li>
                  </ul>
                </div>

                {/* Fits Any Device */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-shadow">
                  <FitsIcon className="w-10 h-10 mb-3" />
                  <h3 className="fontheading text-sm text-gray-900 mb-3">
                    Fits Any Device
                  </h3>
                  <ul className="space-y-1.5">
                    <li className="flex items-start gap-2 text-xs text-gray-500 fontbody2">
                      <CheckMarkIcon className="w-4 h-4 mt-0.5 shrink-0" />
                      Fully responsive on mobile, desktop.
                    </li>
                    <li className="flex items-start gap-2 text-xs text-gray-500 fontbody2">
                      <CheckMarkIcon className="w-4 h-4 mt-0.5 shrink-0" />
                      Smooth experience on all screens.
                    </li>
                    <li className="flex items-start gap-2 text-xs text-gray-500 fontbody2">
                      <CheckMarkIcon className="w-4 h-4 mt-0.5 shrink-0" />
                      Works everywhere.
                    </li>
                  </ul>
                </div>

                {/* Safe And Secure */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-shadow">
                  <SafeAndSecureIcon className="w-10 h-10 mb-3" />
                  <h3 className="fontheading text-sm text-gray-900 mb-3">
                    Safe And Secure
                  </h3>
                  <ul className="space-y-1.5">
                    <li className="flex items-start gap-2 text-xs text-gray-500 fontbody2">
                      <CheckMarkIcon className="w-4 h-4 mt-0.5 shrink-0" />
                      Payments are protected.
                    </li>
                    <li className="flex items-start gap-2 text-xs text-gray-500 fontbody2">
                      <CheckMarkIcon className="w-4 h-4 mt-0.5 shrink-0" />
                      Customer information is safe.
                    </li>
                    <li className="flex items-start gap-2 text-xs text-gray-500 fontbody2">
                      <CheckMarkIcon className="w-4 h-4 mt-0.5 shrink-0" />
                      Build trust with your users.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right: Woman image with floating badges */}
              <div className="lg:w-[40%] flex justify-center">
                <div className="relative w-full max-w-[380px]">
                  {/* Phone frame with person */}
                  <div className="w-[260px] md:w-[300px] mx-auto h-[380px] md:h-[440px] 2 border-emerald-400 rounded-[3.6rem] overflow-hidden bg-gray-50 relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/payment-button/womenStanding.png"
                      alt="Woman using payment button"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Floating badge: Copied */}
                  <div className="hidden sm:block absolute top-[15%] -left-4 bg-[var(--card)] rounded-md px-3 py-1.5 shadow-lg border border-gray-100 text-[11px] font-medium text-gray-700">
                    Copied
                  </div>

                  {/* Floating badge: Approved */}
                  <div className="hidden sm:block absolute top-[15%] -right-4 bg-[var(--card)] rounded-md px-3 py-1.5 shadow-lg border border-gray-100 text-[11px] font-medium text-gray-700">
                    Approved
                  </div>

                  {/* Floating badge: Fits Any Device */}
                  <div className="hidden sm:flex absolute top-[35%] -left-8 bg-[var(--card)] rounded-md px-3 py-1.5 shadow-lg border border-gray-100 items-center gap-1.5">
                    <svg
                      className="w-3 h-3 text-emerald-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-[11px] font-medium text-gray-700">
                      Fits Any Device
                    </span>
                  </div>

                  {/* Floating badge: Active Now */}
                  <div className="hidden sm:block absolute top-[45%] -right-6 bg-[var(--card)] rounded-md px-3 py-1.5 shadow-lg border border-gray-100 text-[11px] font-medium text-gray-700">
                    Active Now
                  </div>

                  {/* Floating badge: Safe And Secure */}
                  <div className="hidden sm:flex absolute top-[55%] -left-8 bg-[var(--card)] rounded-md px-3 py-1.5 shadow-lg border border-gray-100 items-center gap-1.5">
                    <svg
                      className="w-3 h-3 text-emerald-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    <span className="text-[11px] font-medium text-gray-700">
                      Safe And Secure
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ONE BUTTON FOR ALL PAYMENT TYPES ── */}
        <section className="relative z-10 py-12 sm:py-16 lg:py-24 bg-[#f5f5f5]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="fontheading text-3xl md:text-4xl text-gray-900">
                <span className="text-emerald-500">One Button</span> for All
                Payment Types
              </h2>
              <p className="mt-3 text-gray-500 text-sm md:text-base fontbody2">
                Choose the right payment button for your business needs.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              {/* Left: 4 payment type cards */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Quick Pay Button */}
                <div className="bg-[var(--card)] border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <QuickPayButtonIcon className="w-14 h-14 mb-4" />
                  <h3 className="fontheading text-base text-gray-900 mb-3">
                    Quick Pay Button
                  </h3>
                  <ul className="space-y-2 mb-5">
                    <li className="flex items-start gap-2 text-xs text-gray-500 fontbody2">
                      <CheckMarkIcon className="w-4 h-4 mt-0.5 shrink-0" />
                      One-click instant payments.
                    </li>
                    <li className="flex items-start gap-2 text-xs text-gray-500 fontbody2">
                      <CheckMarkIcon className="w-4 h-4 mt-0.5 shrink-0" />
                      Best for fixed-price items.
                    </li>
                    <li className="flex items-start gap-2 text-xs text-gray-500 fontbody2">
                      <CheckMarkIcon className="w-4 h-4 mt-0.5 shrink-0" />
                      Fast checkout experience.
                    </li>
                  </ul>

                  {/* <button className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500 text-[var(--foreground)] text-xs font-semibold hover:bg-emerald-600 transition-colors">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    Pay Now
                  </button> */}
                </div>

                {/* Checkout Button */}
                <div className="bg-[var(--card)] border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <CheckoutButtonIcon className="w-14 h-14 mb-4" />
                  <h3 className="fontheading text-base text-gray-900 mb-3">
                    Checkout Button
                  </h3>
                  <ul className="space-y-2 mb-5">
                    <li className="flex items-start gap-2 text-xs text-gray-500 fontbody2">
                      <CheckMarkIcon className="w-4 h-4 mt-0.5 shrink-0" />
                      Cart-based checkout flow.
                    </li>
                    <li className="flex items-start gap-2 text-xs text-gray-500 fontbody2">
                      <CheckMarkIcon className="w-4 h-4 mt-0.5 shrink-0" />
                      Supports multiple items.
                    </li>
                    <li className="flex items-start gap-2 text-xs text-gray-500 fontbody2">
                      <CheckMarkIcon className="w-4 h-4 mt-0.5 shrink-0" />
                      Great for e-commerce stores.
                    </li>
                  </ul>

                  {/* <button className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500 text-[var(--foreground)] text-xs font-semibold hover:bg-emerald-600 transition-colors">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM7.2 14.6l.1-.1L8.5 12h7.2c.7 0 1.4-.4 1.7-1l3.9-7-1.7-1-3.9 7H8.5L4.3 2H1v2h2l3.6 7.6L5.2 14c-.1.3-.2.6-.2 1 0 1.1.9 2 2 2h12v-2H7.4c-.1 0-.2-.1-.2-.2v-.2z" /></svg>
                    Checkout
                  </button> */}
                </div>

                {/* Donate Button */}
                <div className="bg-[var(--card)] border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <DonateButtonIcon className="w-14 h-14 mb-4" />
                  <h3 className="fontheading text-base text-gray-900 mb-3">
                    Donate Button
                  </h3>
                  <ul className="space-y-2 mb-5">
                    <li className="flex items-start gap-2 text-xs text-gray-500 fontbody2">
                      <CheckMarkIcon className="w-4 h-4 mt-0.5 shrink-0" />
                      Accept donations easily.
                    </li>
                    <li className="flex items-start gap-2 text-xs text-gray-500 fontbody2">
                      <CheckMarkIcon className="w-4 h-4 mt-0.5 shrink-0" />
                      Custom or flexible amounts.
                    </li>
                    <li className="flex items-start gap-2 text-xs text-gray-500 fontbody2">
                      <CheckMarkIcon className="w-4 h-4 mt-0.5 shrink-0" />
                      Perfect for NGOs &amp; causes.
                    </li>
                  </ul>

                  {/* <button className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500 text-[var(--foreground)] text-xs font-semibold hover:bg-emerald-600 transition-colors">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                    Donate
                  </button> */}
                </div>

                {/* Custom Button */}
                <div className="bg-[var(--card)] border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <SettingsButtonIcon className="w-14 h-14 mb-4" />
                  <h3 className="fontheading text-base text-gray-900 mb-3">
                    Custom Button
                  </h3>
                  <ul className="space-y-2 mb-5">
                    <li className="flex items-start gap-2 text-xs text-gray-500 fontbody2">
                      <CheckMarkIcon className="w-4 h-4 mt-0.5 shrink-0" />
                      Fully customisable design.
                    </li>
                    <li className="flex items-start gap-2 text-xs text-gray-500 fontbody2">
                      <CheckMarkIcon className="w-4 h-4 mt-0.5 shrink-0" />
                      Set your own payment logic.
                    </li>
                    <li className="flex items-start gap-2 text-xs text-gray-500 fontbody2">
                      <CheckMarkIcon className="w-4 h-4 mt-0.5 shrink-0" />
                      Tailored for your workflow.
                    </li>
                  </ul>

                  {/* <button className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500 text-[var(--foreground)] text-xs font-semibold hover:bg-emerald-600 transition-colors">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.49.49 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 00-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6A3.6 3.6 0 1112 8.4a3.6 3.6 0 010 7.2z" /></svg>
                    Custom Pay
                  </button> */}
                </div>
              </div>

              {/* Right: PhoneFooterIcon frame with person image + floating elements */}
              <div className="lg:w-[45%] flex justify-center">
                <div className="relative w-full max-w-[460px]">
                  {/* Phone frame container */}
                  <div className="relative w-[330px] md:w-[350px] mx-auto">
                    {/* PhoneFooterIcon as the frame */}
                    <PhoneFooterIcon className="w-full h-auto relative " />

                    {/* Person image inside the frame */}
                    <div
                      className="absolute inset-3 z-0 "
                      style={{ borderRadius: '70px', margin: '3px' }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/payment-button/personalOptions.png"
                        alt="Payment button options"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* Floating card: Button types list (left side) */}
                  {/* <div className="absolute top-[15%] -left-[40%] md:-left-[50%] bg-[var(--card)] rounded-xl px-5 py-5 shadow-xl border border-gray-100 z-20 w-[200px]">
                    <ul className="space-y-3 mb-4">
                      <li className="flex items-center gap-2.5">
                        <span className="w-3 h-3 rounded-full border-2 border-gray-300 shrink-0" />
                        <span className="text-xs font-medium text-gray-700">Quick Pay Button</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="w-3 h-3 rounded-full border-2 border-gray-300 shrink-0" />
                        <span className="text-xs font-medium text-gray-700">Checkout Button</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="w-3 h-3 rounded-full border-2 border-gray-300 shrink-0" />
                        <span className="text-xs font-medium text-gray-700">Donate Button</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="w-3 h-3 rounded-full border-2 border-gray-300 shrink-0" />
                        <span className="text-xs font-medium text-gray-700">Custom Button</span>
                      </li>
                    </ul>
                    <div className="space-y-2">
                      <button className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#3a9e7e] text-[var(--foreground)] text-[11px] font-semibold">
                        Checkout <span className="text-[var(--foreground)]">&gt;</span>
                      </button>
                      <button className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gray-200 text-gray-600 text-[11px] font-medium">
                        Payment <span className="text-gray-400">&gt;</span>
                      </button>
                    </div>
                  </div> */}

                  {/* Floating badge: Explore Payment Types (top right) */}
                  <div className="hidden lg:block absolute top-[8%] -right-[25%] bg-[var(--card)] rounded-lg px-4 py-2.5 shadow-lg border border-gray-200 z-20">
                    <span className="text-sm font-semibold text-gray-800">
                      Explore Payment Types
                    </span>
                  </div>

                  {/* Floating badge: One Click Pay (right middle) */}
                  <div className="hidden lg:block absolute top-[45%] -right-[20%] bg-[var(--card)] rounded-lg px-4 py-2 shadow-lg border border-gray-200 z-20">
                    <span className="text-xs font-semibold text-gray-700">
                      One Click Pay
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FAQAccordion
          faqs={paymentButtonFAQs}
          subtitle="Everything you need to know about RupeeFlow Payment Button."
        />
      </div>
    </div>
  )
}
