'use client'

import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'
import FAQAccordion from '@/components/ui/FAQAccordion'
import { upiCollectionsFAQs } from '@/data/faqs'
import GpayIcon from '../../../public/icons/upi-collections/GpayIcon'
import PhonePayIcon from '../../../public/icons/upi-collections/PhonePayIcon'
import PaytmIcon from '../../../public/icons/upi-collections/PaytmIcon'
import BhimUPIIcon from '../../../public/icons/upi-collections/Bhimupi'
import UPIStripIcon from '../../../public/icons/upi-collections/UpiStripIcon'
import ProfileIcon from '../../../public/icons/upi-collections/ProfileIcon'
import ProfileSearchIcon from '../../../public/icons/upi-collections/ProfileSerachIcon'
import UpiSolutionsStack from '../../components/sections/upiCollections/UpiSolutionsStack'

export default function UpiCollectionsPage() {
  return (
    <div className="w-full relative">
      {/* ── HERO SECTION ── */}
      <section className="relative min-h-screen bg-[var(--background)] overflow-hidden">
        {/* Background glows */}
        <div
          className="absolute -left-[100px] top-[10%] w-[500px] h-[500px] rounded-full opacity-30 blur-[130px] pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(0,107,79,0.12) 0%, rgba(0,107,79,0.06) 40%, transparent 70%)',
          }}
        />
        <div
          className="absolute right-[5%] top-[20%] w-[350px] h-[350px] rounded-full opacity-14 blur-[100px] pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(0,107,79,0.08) 0%, transparent 70%)',
          }}
        />

        {/* Decorative UPI strip */}
        <div className="absolute bottom-0 left-0 w-full pointer-events-none z-[5]">
          <UPIStripIcon className="w-full h-auto opacity-70" />
        </div>

        {/* ── Hero content: LEFT text | RIGHT phone mockup ── */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-24 flex flex-col lg:flex-row items-center gap-10 lg:gap-8">
          {/* LEFT: Heading + description + UPI badges + CTA */}
          <motion.div
            className="flex-1 text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Badge pill */}
            <motion.div
              className="inline-flex items-center gap-2 bg-[var(--card)]/70 border border-[var(--border)] rounded-full px-4 py-1.5 mb-6"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[var(--primary)] text-xs font-semibold tracking-wide uppercase">
                UPI Collections
              </span>
            </motion.div>

            <h1 className="fontheading text-4xl sm:text-5xl lg:text-[3.5rem] leading-tight text-[var(--foreground)] mb-6">
              Simplify cashflow with{' '}
              <span className="text-[var(--primary)]">UPI</span> powered{' '}
              <span className="text-[var(--primary)]">Rupeeflow</span>
            </h1>

            <p className="text-[var(--muted)] max-w-xl text-base md:text-lg fontbody2 leading-relaxed mb-8">
              Effortless UPI payment. Whether it&apos;s BHIM, PhonePe, WhatsApp,
              or any UPI-supported app, experience smooth transactions without
              the hassle of SMS notifications or remembering VPAs.
            </p>

            {/* UPI app badges */}
            <motion.div
              className="flex flex-wrap items-center gap-3 mb-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {[
                { Icon: GpayIcon },
                { Icon: PhonePayIcon },
                { Icon: PaytmIcon },
                { Icon: BhimUPIIcon },
              ].map(({ Icon }) => (
                <div
                  key={Icon.name}
                  className="flex items-center justify-center bg-[var(--card)] rounded-full p-2 shadow-lg w-13 h-13"
                >
                  <div className="flex items-center justify-center bg-[var(--surface)] rounded-full p-2 shadow-sm w-13 h-13">
                    <Icon className="w-10 h-10" />
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
                <Button href="#" className="px-8 py-3.5 text-sm font-semibold shadow-lg">
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--surface)]/90" />
                  Start Accepting Payments
                </Button>
            </motion.div>
          </motion.div>

          {/* RIGHT: Phone QR mockup */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              {/* Floating glow behind phone */}
              <div className="absolute inset-0 rounded-[2rem] bg-emerald-500/15 blur-3xl scale-110 pointer-events-none" />

              {/* NPCI logo — top-left of phone */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/upi-collections/npci.png"
                alt="NPCI"
                className="hidden sm:block absolute -left-[55%] -top-[12%] w-[180px] md:w-[240px] h-auto z-20 pointer-events-none"
              />

              {/* Phone body */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative bg-[var(--card)] rounded-[2rem] shadow-2xl overflow-hidden border border-gray-200 w-[230px] md:w-[270px] z-10"
              >
                {/* Green header */}
                <div
                  className="bg-emerald-600 px-5 pt-7 pb-5"
                  style={{
                    borderBottomLeftRadius: '0.5rem',
                    borderBottomRightRadius: '0.5rem',
                  }}
                >
                  <h3 className="text-[var(--foreground)] font-bold text-base text-left">
                    Scan QR
                  </h3>
                  <p className="text-emerald-200 text-xs text-left mt-0.5">
                    Make payment
                  </p>
                </div>

                {/* QR Code area */}
                <div className="bg-gray-100 px-6 py-8 flex items-center justify-center">
                  <div className="relative">
                    {/* Scanner brackets */}
                    <div className="absolute -top-3 -left-3 w-6 h-6 border-t-[3px] border-l-[3px] border-emerald-500 rounded-tl-sm" />
                    <div className="absolute -top-3 -right-3 w-6 h-6 border-t-[3px] border-r-[3px] border-emerald-500 rounded-tr-sm" />
                    <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-[3px] border-l-[3px] border-emerald-500 rounded-bl-sm" />
                    <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-[3px] border-r-[3px] border-emerald-500 rounded-br-sm" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/upi-collections/qr.png"
                      alt="QR Code"
                      className="w-[140px] h-[140px] md:w-[160px] md:h-[160px]"
                    />
                  </div>
                </div>

                {/* Bottom icons */}
                <div className="flex items-center justify-center gap-8 py-4 bg-[var(--card)]">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── HOW TO USE UPI PAYMENTS ── */}
      <section className="relative bg-gray-50 overflow-hidden py-12 sm:py-16 lg:py-24">
        {/* Decorative strip */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <UPIStripIcon
            className="absolute w-full h-full"
            style={{ opacity: 0.5 }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-8 sm:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="fontheading text-3xl md:text-4xl text-gray-900">
              How to use <span className="text-emerald-500">UPI payments</span>
            </h2>
            <p className="mt-3 text-gray-500 text-sm md:text-base fontbody2">
              Follow these simple steps to get paid using links
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
            {/* Left: Steps */}
            <motion.div
              className="flex-1 space-y-4 sm:space-y-5 w-full max-w-lg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {[
                {
                  icon: (
                    <ProfileIcon className="w-12 h-12 sm:w-14 sm:h-14 shrink-0" />
                  ),
                  title: 'Sign-up',
                  desc: 'Register with Rupeeflow and integrate the UPI payment gateway on your website or app.',
                },
                {
                  icon: (
                    <ProfileSearchIcon className="w-12 h-12 sm:w-14 sm:h-14 shrink-0" />
                  ),
                  title: 'KYC',
                  desc: 'Ensure compliance and enable secure transactions by completing the simple KYC process.',
                },
                {
                  icon: (
                    <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 bg-emerald-50 rounded-xl flex items-center justify-center">
                      <svg
                        className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                        />
                      </svg>
                    </div>
                  ),
                  title: 'Collect',
                  desc: 'Start receiving payments through UPI apps — directly into your bank account.',
                },
              ].map((step, i) => (
                <motion.div
                  key={step.title}
                  className="flex items-start gap-4 sm:gap-5 bg-[var(--card)] border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {step.icon}
                  <div>
                    <h3 className="fontheading text-base sm:text-lg text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 fontbody2">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}

              <div className="pt-2">
                {/* <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-500 text-[var(--foreground)] text-sm font-semibold hover:bg-emerald-600 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-[var(--card)]" />
                  Get Started
                </Link> */}
              </div>
            </motion.div>

            {/* Right: KYC Image */}
            <motion.div
              className="flex-1 flex justify-center w-full"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="relative w-full max-w-[480px] h-[280px] sm:h-[380px] lg:h-[480px] rounded-2xl overflow-hidden border border-gray-200 shadow-xl">
                <motion.div
                  className="absolute inset-0 overflow-hidden"
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/upi-collections/kycImage.jpeg"
                      alt="KYC Process"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 440px"
                      priority
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── UPI PAYMENT GATEWAY FOR BUSINESSES ── */}
      <section className="relative py-12 sm:py-16 lg:py-24 bg-[#f0f0f0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-8 sm:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="fontheading text-3xl md:text-4xl text-gray-900">
              <span className="text-emerald-500">UPI Payment</span> Gateway for
              Businesses
            </h2>
          </motion.div>

          <div className="space-y-10">
            {[
              {
                title: 'Effortless Integration',
                desc: 'Generate payment links effortlessly from the dashboard or through APIs in just a few clicks. No technical expertise is required, allowing merchants of all sizes to start quickly. Focus on running your business while we simplify your payment collection process.',
                image: '/images/upi-collections/effortlessIntegration.jpeg',
                imageLeft: true,
              },
              {
                title: 'Instant Settlement',
                desc: 'Rupeeflow Payment Links are perfect for merchants without an online presence. Collect payments via SMS, WhatsApp, email, or social media, eliminating the need for a website or app. This solution bridges the gap between offline and online payment experiences seamlessly.',
                image: '/images/upi-collections/instantSettelement.png',
                imageLeft: false,
              },
              {
                title: 'Prioritize Secure Transactions',
                desc: 'Offer your customers the flexibility to pay using their preferred method, including UPI, net banking, credit/debit cards, wallets, and more. Rupeeflow Payment Links ensure a smooth checkout experience for everyone, boosting customer satisfaction and increasing conversions.',
                image: '/images/upi-collections/securetransactions.jpeg',
                imageLeft: true,
              },
              {
                title: 'No More Payment Failures',
                desc: 'Stay in the loop with instant alerts for every successful payment. Gain better control and visibility into your transactions, enabling faster decision-making and improved financial management. Receive updates across all devices to keep your operations running smoothly.',
                image: '/images/upi-collections/failure.jpeg',
                imageLeft: false,
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                className={`bg-[var(--card)] rounded-2xl border border-gray-200 overflow-hidden shadow-sm flex flex-col ${card.imageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-stretch`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                {/* Image panel — fixed height so image is always fully visible */}
                <div className="relative md:w-[48%] w-full h-[260px] sm:h-[300px] md:h-[360px] shrink-0 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 overflow-hidden"
                    animate={{ scale: [1, 1.04, 1] }}
                    transition={{
                      duration: 9 + i,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 48vw"
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Text panel */}
                <div className="flex-1 flex flex-col justify-center p-5 sm:p-8 md:p-14">
                  <div className="w-10 h-1 bg-emerald-500 rounded-full mb-5" />
                  <h3 className="fontheading text-2xl md:text-3xl text-gray-900 mb-4">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Get Started button */}
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* <Link
              href="#"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-emerald-500 text-[var(--foreground)] text-sm font-semibold hover:bg-emerald-600 transition-colors"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--card)]" />
              Get Started
            </Link> */}
          </motion.div>
        </div>
      </section>

      {/* ── POWERFUL UPI PAYMENT SOLUTIONS (Sticky Stacking) ── */}
      <UpiSolutionsStack />
      <FAQAccordion
        faqs={upiCollectionsFAQs}
        subtitle="Everything you need to know about RupeeFlow UPI Collections."
      />
    </div>
  )
}
