'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import SettingsIcon from '../../../public/icons/payment-link/SettingsIcon'
import SharingIcon from '../../../public/icons/payment-link/SharingIcon'
import PaidIcon from '../../../public/icons/payment-link/PaidIcon'
import DashboardInsightsIcon from '../../../public/icons/payment-link/DashboardInsights'
import BulkUploadIcon from '../../../public/icons/payment-link/BulkUploadIcon'
import WebhookIcon from '../../../public/icons/payment-link/WebhookIcon'
import PaymentRoundedStripIcon from '../../../public/icons/payment-link/PaymentRoundedStrip'
import FooterStripIcon from '../../../public/icons/payment-link/FooterStripIcon'
import IntegrateSection from '@/components/sections/paymentLinks/IntegrateSection'
import MerchantUseCases from '@/components/sections/paymentLinks/MerchantUseCases'


/* ─────────────────────────────────────────────────
   "Get Paid with a Single Link" — Mockup components
───────────────────────────────────────────────── */

function CopyIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="flex-shrink-0">
      <rect x="4.5" y="1" width="8.5" height="10" rx="1.5" stroke="#5AABFF" strokeWidth="1.2" />
      <rect x="2" y="4" width="8.5" height="10" rx="1.5" fill="white" stroke="#5AABFF" strokeWidth="1.2" />
    </svg>
  )
}

/* ── Card 1: Payment Link ── */
function PaymentLinkMockup() {
  return (
    <div className="relative flex flex-col items-center gap-3 w-full py-6 px-4">
      {/* API badge */}
      <div className="absolute top-4 left-6 bg-white border border-blue-300 rounded-lg px-3 py-1 text-blue-500 text-[11px] font-bold shadow-sm z-20">
        API
      </div>

      {/* Main floating card */}
      <motion.div
        className="w-[290px] bg-white rounded-2xl shadow-xl p-5 z-10"
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="flex items-center justify-between mb-4">
          <p className="font-bold text-gray-800 text-sm">Payment Link</p>
          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-xs font-medium">Share</span>
            <span className="text-gray-400 text-sm leading-none">✕</span>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5">
          <p className="text-gray-400 text-[11px] flex-1 truncate">
            https://www.rupeeflow.in/pay/NlfVhYygR9mada/
          </p>
          <CopyIcon />
        </div>
      </motion.div>

      {/* Peeking second card */}
      <div className="w-[265px] bg-white rounded-2xl shadow-md h-12 opacity-40 -mt-1" />
    </div>
  )
}

/* ── Card 2: Share With ── */
type SocialEntry = { label: string; active: boolean; icon: string }
const sharesData: SocialEntry[] = [
  { label: 'Chat',     active: false, icon: 'chat' },
  { label: 'Telegram', active: false, icon: 'telegram' },
  { label: 'Twitter',  active: false, icon: 'twitter' },
  { label: 'Whatsapp', active: false, icon: 'whatsapp' },
  { label: 'E-mail',   active: true,  icon: 'email' },
  { label: 'More',     active: false, icon: 'more' },
]

function SocialIcon({ type, active }: { type: string; active: boolean }) {
  const c = active ? '#4DA6FF' : '#9CA3AF'
  if (type === 'chat')
    return <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><path d="M2.5 2.5h12a1 1 0 011 1v8a1 1 0 01-1 1H8.5l-5 2.5V3.5a1 1 0 011-1z" stroke={c} strokeWidth="1.3" strokeLinejoin="round" /></svg>
  if (type === 'telegram')
    return <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><path d="M2 8.5L15 2 10 15 7.5 10 2 8.5z" stroke={c} strokeWidth="1.3" strokeLinejoin="round" /><path d="M7.5 10l2-2" stroke={c} strokeWidth="1.3" strokeLinecap="round" /></svg>
  if (type === 'twitter')
    return <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><path d="M3 3l11 11M14 3L3 14" stroke={c} strokeWidth="1.8" strokeLinecap="round" /></svg>
  if (type === 'whatsapp')
    return <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><circle cx="8.5" cy="8.5" r="6.5" stroke={c} strokeWidth="1.3" /><path d="M5.5 8.5c0 1.7 1.3 3 3 3" stroke={c} strokeWidth="1.3" strokeLinecap="round" /></svg>
  if (type === 'email')
    return <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><circle cx="8.5" cy="8.5" r="2.3" stroke={c} strokeWidth="1.3" /><path d="M10.8 8.5V7A2.3 2.3 0 008.5 4.7" stroke={c} strokeWidth="1.3" strokeLinecap="round" /><circle cx="8.5" cy="8.5" r="6.5" stroke={c} strokeWidth="1.3" /></svg>
  if (type === 'more')
    return <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><path d="M8.5 3v8M6 6l2.5-3L11 6M5 12v2.5h7V12" stroke={c} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
  return null
}

function ShareWithMockup() {
  return (
    <div className="flex flex-col items-center gap-3 w-full py-4 px-4">
      <motion.div
        className="w-[300px] bg-white rounded-2xl shadow-xl p-5"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="flex items-center justify-between mb-5">
          <p className="font-semibold text-gray-800 text-sm">Share with</p>
          <span className="text-gray-400 text-sm">✕</span>
        </div>
        <div className="flex justify-between">
          {sharesData.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1.5">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  s.active ? 'bg-blue-50' : 'bg-gray-100'
                }`}
              >
                <SocialIcon type={s.icon} active={s.active} />
              </div>
              <p className={`text-[9px] font-medium ${s.active ? 'text-blue-500' : 'text-gray-400'}`}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* URL bar below */}
      <motion.div
        className="w-[300px] bg-white rounded-xl shadow-md flex items-center gap-2 px-3 py-2.5 border border-gray-100"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
      >
        <p className="text-gray-400 text-[10px] flex-1 truncate">
          https://www.rupeeflow.in/pay/NlfVhYygR9mAQasassdsada/
        </p>
        <CopyIcon />
      </motion.div>
    </div>
  )
}

/* ── Card 3: Payment Options ── */
const payBrands = [
  { label: 'LOGO1', bg: '#f3f4f6', fg: '#6b7280' },
  { label: 'LOGO2', bg: '#f3f4f6', fg: '#6b7280' },
  { label: 'LOGO3', bg: '#f3f4f6', fg: '#6b7280' },
  { label: 'LOGO4', bg: '#f3f4f6', fg: '#6b7280' },
  { label: 'LOGO5', bg: '#f3f4f6', fg: '#6b7280' },
  { label: 'LOGO6', bg: '#f3f4f6', fg: '#6b7280' },
  { label: 'LOGO7', bg: '#f3f4f6', fg: '#6b7280' },
]

function PaymentOptionsMockup() {
  return (
    <div className="flex flex-col items-center gap-2 w-full py-4 px-4">
      {/* Peek top */}
      <div className="w-[300px] bg-white rounded-b-2xl h-9 shadow-sm opacity-35 flex items-center px-4">
        <div className="h-2 w-20 bg-gray-200 rounded-full" />
      </div>

      <motion.div
        className="w-[300px] bg-white rounded-2xl shadow-xl p-5"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <p className="font-bold text-gray-800 mb-4 text-sm">Payment Options</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
              <span className="text-blue-500 font-bold text-lg">₹</span>
            </div>
            <div>
              <p className="text-[10px] text-gray-400">Total Amount</p>
              <p className="font-bold text-gray-900 text-base">₹12,000</p>
            </div>
          </div>
          <div className="bg-gray-100 rounded-full px-3 py-1.5 text-xs font-bold text-gray-600 border border-gray-200">
            UPI
          </div>
        </div>
      </motion.div>

      {/* Brand logo row */}
      <div className="flex gap-1.5 mt-1">
        {payBrands.map((b, i) => (
          <motion.div
            key={b.label}
            className="w-10 h-10 rounded-full shadow-sm flex items-center justify-center text-[7px] font-extrabold"
            style={{ backgroundColor: b.bg, color: b.fg }}
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.12 }}
          >
            {b.label}
          </motion.div>
        ))}
        <div className="w-10 h-10 rounded-full bg-gray-100 shadow-sm opacity-20" />
      </div>
    </div>
  )
}

/* ── Shared browser chrome for cards 4 & 5 ── */
function BrowserChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[320px] bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="px-4 py-2.5 flex items-center gap-2 border-b border-gray-100">
        <div className="flex-1 bg-gray-100 rounded-full h-[18px]" />
        <div className="flex gap-1.5 flex-shrink-0">
          {[0, 1, 2].map((k) => (
            <div key={k} className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          ))}
        </div>
      </div>
      {children}
    </div>
  )
}

/* ── Card 4: Amount Received ── */
function AmountReceivedMockup() {
  return (
    <div className="flex items-center justify-center w-full py-6 px-4">
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <BrowserChrome>
          <div className="p-5 flex items-center gap-4 relative min-h-[110px]">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
              <span className="text-blue-400 font-bold text-xl">₹</span>
            </div>
            <div className="flex-1">
              <p className="text-gray-400 text-xs mb-0.5">Amount Received</p>
              <p className="font-bold text-gray-900 text-xl">₹12,000</p>
              <div className="mt-2.5 flex gap-1 items-center">
                <motion.div
                  className="h-1.5 bg-blue-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: 96 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
                />
                <div className="h-1.5 w-14 bg-gray-200 rounded-full" />
              </div>
            </div>
            {/* Lightning bolt */}
            <div className="absolute right-5 top-4">
              <svg width="28" height="38" viewBox="0 0 28 38" fill="none">
                <path d="M16 2L2 22h11L11 36l17-22H17L19 2z" fill="#22C997" />
              </svg>
            </div>
          </div>
        </BrowserChrome>
      </motion.div>
    </div>
  )
}

/* ── Card 5: Processing Amount ── */
function ProcessingAmountMockup() {
  return (
    <div className="flex items-center justify-center w-full py-6 px-4">
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
      >
        <BrowserChrome>
          <div className="p-5 flex items-center gap-4 relative min-h-[110px]">
            {/* Spinning loader */}
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <circle cx="11" cy="11" r="8" stroke="#DBEAFE" strokeWidth="2.5" />
                  <path d="M11 3a8 8 0 018 8" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </motion.div>
            </div>
            <div className="flex-1">
              <p className="text-gray-400 text-xs mb-0.5">Processing Amount</p>
              <p className="font-bold text-gray-900 text-xl">₹12,000</p>
              <div className="mt-2.5">
                <motion.div
                  className="h-1.5 bg-blue-400 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: '60%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.4, ease: 'easeOut' }}
                />
              </div>
            </div>
            {/* Shield */}
            <div className="absolute right-5 top-4">
              <svg width="28" height="34" viewBox="0 0 28 34" fill="none">
                <path d="M14 2L2 7v9c0 7 4.8 13.5 12 15.5C21.2 29.5 26 23 26 16V7L14 2z" fill="#22C997" />
                <path d="M9 17l3 3 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </BrowserChrome>
      </motion.div>
    </div>
  )
}

export default function PaymentLinksPage() {
  return (
    <div className="w-full relative">
      {/* ── HERO SECTION ── */}
      <section className="relative min-h-screen bg-[#020506] overflow-hidden flex items-center">

        {/* Animated blob 1 — top-left */}
        <motion.div
          className="absolute -left-[100px] top-[10%] w-[420px] h-[420px] rounded-full blur-[130px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #109F58 0%, #055949 40%, transparent 70%)' }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.45, 0.6, 0.45] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Animated blob 2 — mid-left */}
        <motion.div
          className="absolute left-[5%] top-[40%] w-[480px] h-[480px] rounded-full blur-[110px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #109F58 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.22, 0.38, 0.22] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        />

        {/* Animated blob 3 — right glow accent */}
        <motion.div
          className="absolute right-[8%] top-[20%] w-[320px] h-[320px] rounded-full blur-[100px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #30F3BC 0%, transparent 65%)' }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.18, 0.08] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        />

        {/* ── Content row ── */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 py-36 lg:py-0 min-h-screen">

          {/* LEFT — text content */}
          <motion.div
            className="flex-1 text-left max-w-xl"
            initial={{ opacity: 0, x: -48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge */}
            <motion.span
              className="inline-block mb-5 px-4 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              No-code payment collection
            </motion.span>

            <h1 className="fontheading text-2xl sm:text-3xl lg:text-[2.6rem] leading-tight text-white">
              Accept Payments Instantly with{' '}
              <span className="text-emerald-400">Payment Links</span>
            </h1>

            <p className="mt-6 text-gray-400 text-base md:text-lg fontbody2 leading-relaxed max-w-lg">
              Create payment links effortlessly — no website or app needed.
              Share via SMS, WhatsApp, email, or social media and accept
              payments through 100+ methods, no coding required.
            </p>

            {/* Stats row */}
            <motion.div
              className="mt-8 flex items-center gap-6"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              {[
                { value: '100+', label: 'Payment methods' },
                { value: '< 2s', label: 'Processing time' },
                { value: '99.9%', label: 'Uptime' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-emerald-400 font-bold text-xl">{s.value}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold text-sm hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg shadow-emerald-500/25"
              >
                <motion.span
                  className="w-2.5 h-2.5 rounded-full bg-white/80"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                />
                Set Up Your Link
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT — banner image */}

          <motion.div
            className="flex-1  w-full justify-center "
            initial={{ opacity: 0, x: 60, scale: 0.94 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
              style={{
                /* Radial mask: opaque in the phone/card area, fades to transparent at edges
                   so the image's own baked-in background disappears into the page bg */
                WebkitMaskImage:
                  'radial-gradient(ellipse 72% 80% at 58% 42%, black 38%, rgba(0,0,0,0.6) 58%, transparent 80%)',
                maskImage:
                  'radial-gradient(ellipse 72% 80% at 58% 42%, black 38%, rgba(0,0,0,0.6) 58%, transparent 80%)',
              }}
            >
              <Image
                src="/images/payment-link/bannerImg.png"
                alt="Payment Links preview"
                width={620}
                height={620}
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── WRAPPER: "How to create" + "Integrate" with shared decorative strip ── */}
      <div className="relative bg-white overflow-hidden">
        {/* PaymentRoundedStrip spanning both sections */}
        <div className="absolute inset-0 pointer-events-none">
          <PaymentRoundedStripIcon
            className="absolute w-full h-full"
            style={{ opacity: 0.85 }}
          />
        </div>

        {/* ── HOW TO CREATE PAYMENT LINKS ── */}
        <section className="relative z-10 py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="fontheading text-3xl md:text-4xl text-gray-900">
                How to create <span className="text-emerald-500">Payment Links</span>
              </h2>
              <p className="mt-3 text-gray-500 text-sm md:text-base">
                Follow these simple steps to get paid using links
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              {/* Left: Steps */}
              <div className="flex-1 space-y-6 w-full max-w-lg">
                <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                  <SettingsIcon className="w-14 h-14 shrink-0" />
                  <div>
                    <h3 className="fontheading text-lg text-gray-900">Generate Payment Links</h3>
                    <p className="text-sm text-gray-500 mt-1 fontbody2">
                      Use the Rupeeflow dashboard or APIs to generate payment links with ease.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                  <SharingIcon className="w-14 h-14 shrink-0" />
                  <div>
                    <h3 className="fontheading text-lg text-gray-900">Share Payment Links</h3>
                    <p className="text-sm text-gray-500 mt-1 fontbody2">
                      Send the link via SMS, email, WhatsApp, or social media.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                  <PaidIcon className="w-14 h-14 shrink-0" />
                  <div>
                    <h3 className="fontheading text-lg text-gray-900">Get Paid</h3>
                    <p className="text-sm text-gray-500 mt-1 fontbody2">
                      Customers pay using their preferred payment method, and you get notified instantly.
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-500 text-white text-sm font-semibold hover:bg-emerald-600 transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-white/80" />
                    Get Started
                  </Link>
                </div>
              </div>

              <div className="flex-1 flex justify-center">
                  <Image src="/images/payment-link/creatingLink.jpeg" alt="How to create payment links" width={500} height={1000} className="object-contain rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* ── ANYONE CAN INTEGRATE EASILY ── */}
        <section className="relative z-10 py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="fontheading text-3xl md:text-4xl text-gray-900">
                Anyone can <span className="text-emerald-500">Integrate</span> easily
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
              {/* Left: 2x2 feature cards */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <SettingsIcon className="w-12 h-12 mb-4" />
                  <h3 className="fontheading text-base text-gray-900">Custom Branding</h3>
                  <p className="text-sm text-gray-500 mt-2 fontbody2">
                    Personalize payment links with your logo and brand colors.
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <DashboardInsightsIcon className="w-12 h-12 mb-4" />
                  <h3 className="fontheading text-base text-gray-900">Dashboard Insights</h3>
                  <p className="text-sm text-gray-500 mt-2 fontbody2">
                    Monitor your payment trends, track revenues, and optimize cash flow.
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <BulkUploadIcon className="w-12 h-12 mb-4" />
                  <h3 className="fontheading text-base text-gray-900">Bulk Upload</h3>
                  <p className="text-sm text-gray-500 mt-2 fontbody2">
                    Generate multiple payment links at once with simple CSV file.
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <WebhookIcon className="w-12 h-12 mb-4" />
                  <h3 className="fontheading text-base text-gray-900">Webhooks and APIs</h3>
                  <p className="text-sm text-gray-500 mt-2 fontbody2">
                    Automate payment processes and integrate seamlessly with your existing systems.
                  </p>
                </div>
              </div>

              {/* Right: Integrate image */}
              <div className="flex-1 flex justify-center items-center">
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="w-full max-w-md"
                >
                  <Image
                    src="/images/payment-link/integrate.png"
                    alt="Anyone can integrate easily"
                    width={480}
                    height={380}
                    className="w-full h-auto object-contain rounded-2xl"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── GET PAID WITH A SINGLE LINK ── */}
      <section className="bg-gradient-to-b from-[#f2f6fb] to-[#f8fafc] py-28">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section heading */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="fontheading text-3xl md:text-4xl text-gray-900">
              Get Paid with a{' '}
              <span className="text-emerald-500">Single Link</span>
            </h2>
            <p className="mt-3 text-gray-400 text-sm">
              One link. Every payment method. Zero friction.
            </p>
          </motion.div>

          <div className="space-y-6">

            <motion.div
              className="bg-white rounded-3xl overflow-hidden border border-emerald-500 shadow-sm"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
            >
              <div className="flex flex-col md:flex-row min-h-[300px]">
                <div className="md:w-[45%] flex items-center justify-center">
                  <PaymentLinkMockup />
                </div>
                <div className="md:w-[55%] p-10 flex flex-col justify-center">
                  <h3 className="fontheading text-2xl md:text-3xl text-gray-900">Quick and Easy Setup</h3>
                  <p className="mt-4 text-gray-500 fontbody2 text-sm md:text-base leading-relaxed">
                    Generate payment links effortlessly from the dashboard or through APIs in just a
                    few clicks. No technical expertise required — merchants of all sizes can start
                    collecting payments immediately.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ── Row 2: No Website Required  (text LEFT, mockup RIGHT) ── */}
            <motion.div
              className="bg-white rounded-3xl overflow-hidden border border-emerald-500 shadow-sm"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.05, ease: 'easeOut' }}
            >
              <div className="flex flex-col md:flex-row-reverse min-h-[300px]">
                <div className="md:w-[45%] flex items-center justify-center">
                  <ShareWithMockup />
                </div>
                <div className="md:w-[55%] p-10 flex flex-col justify-center">
                  <h3 className="fontheading text-2xl md:text-3xl text-gray-900">No Website Required</h3>
                  <p className="mt-4 text-gray-500 fontbody2 text-sm md:text-base leading-relaxed">
                    Rupeeflow Payment Links are perfect for merchants without an online presence.
                    Collect payments via SMS, WhatsApp, email, or social media — no website or
                    app needed. Bridge the gap between offline and online seamlessly.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-3xl overflow-hidden border border-emerald-500 shadow-sm"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
            >
              <div className="flex flex-col md:flex-row min-h-[300px]">
                <div className="md:w-[45%]  flex items-center justify-center">
                  <PaymentOptionsMockup />
                </div>
                <div className="md:w-[55%] p-10 flex flex-col justify-center">
                  <h3 className="fontheading text-2xl md:text-3xl text-gray-900">100+ Payment Options</h3>
                  <p className="mt-4 text-gray-500 fontbody2 text-sm md:text-base leading-relaxed">
                    Offer your customers the flexibility to pay using their preferred method — UPI,
                    net banking, credit/debit cards, wallets, and more. Ensure a smooth checkout
                    experience that boosts satisfaction and conversions.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ── Row 4: Real-Time Notifications  (text LEFT, mockup RIGHT) ── */}
            <motion.div
              className="bg-white rounded-3xl overflow-hidden border border-emerald-500 shadow-sm"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.15, ease: 'easeOut' }}
            >
              <div className="flex flex-col md:flex-row-reverse min-h-[300px]">
                <div className="md:w-[45%] flex items-center justify-center">
                  <AmountReceivedMockup />
                </div>
                <div className="md:w-[55%] p-10 flex flex-col justify-center">
                  <h3 className="fontheading text-2xl md:text-3xl text-gray-900">Real-Time Notifications</h3>
                  <p className="mt-4 text-gray-500 fontbody2 text-sm md:text-base leading-relaxed">
                    Stay in the loop with instant alerts for every successful payment. Gain visibility
                    into your transactions, enabling faster decision-making and improved financial
                    management across all devices.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-3xl overflow-hidden border border-emerald-500 shadow-sm"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2, ease: 'easeOut' }}
            >
              <div className="flex flex-col md:flex-row min-h-[300px]">
                <div className="md:w-[45%] flex items-center justify-center">
                  <ProcessingAmountMockup />
                </div>
                <div className="md:w-[55%] p-10 flex flex-col justify-center">
                  <h3 className="fontheading text-2xl md:text-3xl text-gray-900">Secure Transactions</h3>
                  <p className="mt-4 text-gray-500 fontbody2 text-sm md:text-base leading-relaxed">
                    Built on PCI DSS compliance and advanced encryption, Rupeeflow Payment Links
                    ensure every transaction is safe and secure. Protect sensitive customer data while
                    delivering a trustworthy payment experience.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Get Started CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' }}
          >
            <Link
              href="#"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-emerald-500 text-white text-sm font-semibold hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20"
            >
              <span className="w-2 h-2 rounded-full bg-white/80" />
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>
      {/* ── INTEGRATE WITH EASE ── */}
      <IntegrateSection />

      {/* ── MERCHANT USE CASES ── */}
      <MerchantUseCases />

      {/* <UseCaseTabs
        heading="Use Cases"
        headingHighlight="Explore payment link scenarios"
        tabs={[
          { id: 1, label: 'E-commerce', icon: 'E-commerce payment links content', image: 'ecommerce-image.jpg', items: [{id: 1, title: 'Product 1'}, {id: 2, title: 'Product 2'}] },
          { id: 2, label: 'Subscriptions', icon: 'Subscriptions payment links content', image: 'subscriptions-image.jpg', items: [{id: 3, title: 'Subscription 1'}, {id: 4, title: 'Subscription 2'}] },
          { id: 3, label: 'Donations', icon: 'Donations payment links content', image: 'donations-image.jpg', items: [{id: 5, title: 'Donation 1'}, {id: 6, title: 'Donation 2'}] },
        ] as any}
      /> */}

      {/* ── GET PAID CTA BANNER ── */}
      <section className="relative bg-[#0e1311] overflow-hidden">
        {/* Decorative wave strip */}
        <div className="absolute inset-0 flex items-center pointer-events-none">
          <FooterStripIcon className="w-full h-auto" />
        </div>

        <div className="relative z-10 text-center py-16 md:py-20 px-6">
          <h2 className="fontheading text-2xl md:text-4xl text-white mb-8">
            Get Paid with more Ease
          </h2>
          <Link
            href="#"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 text-white font-semibold text-sm hover:from-emerald-500 hover:to-emerald-600 transition-all duration-300 shadow-lg shadow-emerald-500/20"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-white/80" />
            Setup Your Link
          </Link>
        </div>
      </section>
    </div>
  )
}