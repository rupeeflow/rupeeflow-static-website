import Link from 'next/link'
import Image from 'next/image'
import CardsIcon from '../../../public/icons/vendor-payments/CardsIcon'
import CheckIcon from '../../../public/icons/vendor-payments/CheckIcon'
import ColoredSettingIcon from '../../../public/icons/vendor-payments/ColoredSettingIcon'
import InstantReconIcon from '../../../public/icons/vendor-payments/InstantReconIcon'
import InvoicingIcon from '../../../public/icons/vendor-payments/InvoicingIcon'
import LightingFastIcon from '../../../public/icons/vendor-payments/LightingFastIcon'
import LiveTrackingIcon from '../../../public/icons/vendor-payments/LiveTrackingIcon'
import PayInstantIcon from '../../../public/icons/vendor-payments/PayInstantIcon'
import ReconcileIcon from '../../../public/icons/vendor-payments/ReconcileIcon'
import ReportsIcon from '../../../public/icons/vendor-payments/ReportsIcon'
import SafeGuardIcon from '../../../public/icons/vendor-payments/SafeGuardIcon'
import SecurityIcon from '../../../public/icons/vendor-payments/SecurityIcon'
import WebIcon from '../../../public/icons/vendor-payments/WebIcon'
import VendorPaymentsFaq from '@/components/sections/vendorPayments/VendorPaymentsFaq'

export default function VendorPaymentPage() {
  return (
    <div className="w-full relative">
      {/* ── HERO SECTION ── */}
      <section className="relative min-h-screen bg-[#020506] overflow-hidden">
        {/* Spotlights */}
        <div
          className="absolute -left-[100px] top-[10%] w-[400px] h-[400px] rounded-full opacity-50 blur-[120px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #109F58 0%, #055949 40%, transparent 70%)',
          }}
        />
        <div
          className="absolute right-[-50px] top-[25%] w-[500px] h-[500px] rounded-full opacity-30 blur-[100px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #109F58 0%, transparent 70%)',
          }}
        />

        {/* Green swoosh decoration — left */}
        <div className="absolute left-[-60px] bottom-[25%] w-[180px] h-[300px] pointer-events-none z-[5]">
          <div
            className="w-full h-full rounded-[50%] border-[3px] border-emerald-500/60"
            style={{ transform: 'rotate(-20deg)' }}
          />
        </div>

        {/* Green swoosh decoration — bottom right */}
        <div className="absolute right-[-40px] bottom-[5%] w-[200px] h-[350px] pointer-events-none z-[5]">
          <div
            className="w-full h-full rounded-[50%] border-[3px] border-emerald-500/40"
            style={{ transform: 'rotate(25deg)' }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center pt-48 px-6">
          <h1 className="fontheading text-3xl sm:text-4xl md:text-[2.5rem] lg:text-[3.5rem] leading-tight text-white">
            Efficient <span className="text-emerald-400">Vendor Payments</span>
            <br />
            with Rupeeflow
          </h1>

          <p className="mt-8 text-gray-400 max-w-xl mx-auto text-base md:text-lg fontbody2 leading-relaxed">
            Transform your vendor payments with a single click and get complete
            control with real-time updates.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center mt-10">
            <Link
              href="#"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold text-sm hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg shadow-emerald-500/20 border border-emerald-400/30"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-white/80" />
              Start Paying Today
            </Link>
          </div>

          {/* Browser mockup + Floating customer cards */}
          <div className="relative mt-14 max-w-4xl mx-auto pb-8">
            {/* Browser window */}
            <div className="relative z-10 bg-[#2a2a2a] rounded-xl shadow-2xl overflow-hidden w-[70%] md:w-[60%] mx-auto md:ml-[8%]">
              {/* Browser top bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#333]">
                <span className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="w-3 h-3 rounded-full bg-blue-400" />
                <span className="w-3 h-3 rounded-full bg-red-400" />
              </div>

              {/* Browser content — Pay Your Vendors */}
              <div className="px-6 py-6">
                <h3 className="fontheading text-white text-lg text-left mb-6">Pay Your Vendors</h3>

                {/* Form field rows */}
                <div className="space-y-4 mb-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-600 rounded shrink-0" />
                      <div className="flex-1 space-y-1.5">
                        <div className="h-2.5 bg-gray-500 rounded-full w-full" />
                        <div className="h-2.5 bg-gray-600 rounded-full w-[75%]" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Send Payments button */}
                <div className="flex justify-start">
                  <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500 text-white text-xs fontheading">
                    Send Payments
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating customer cards — stacked on the right */}
            <div className="absolute right-[2%] md:right-[8%] top-[8%] z-20 space-y-3">
              {/* Customer 1 — Manish Kumar */}
              <div className="w-[180px] md:w-[220px] ml-auto">
                <Image
                  src="/images/vendor-payments/customer1.png"
                  alt="Manish Kumar - Payment Sent ₹5,920"
                  width={220}
                  height={80}
                  className="w-full h-auto drop-shadow-lg"
                />
              </div>

              {/* Customer 2 — Riya Roshan */}
              <div className="w-[180px] md:w-[220px] ml-auto mr-4">
                <Image
                  src="/images/vendor-payments/customer2.png"
                  alt="Riya Roshan - Payment Sent ₹12,000"
                  width={220}
                  height={80}
                  className="w-full h-auto drop-shadow-lg"
                />
              </div>

              {/* Customer 3 — Ritesh Agarwal */}
              <div className="w-[180px] md:w-[220px] ml-auto mr-8">
                <Image
                  src="/images/vendor-payments/customer3.png"
                  alt="Ritesh Agarwal - Payment Sent ₹8,000"
                  width={220}
                  height={80}
                  className="w-full h-auto drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY RUPEEFLOW FOR VENDOR PAYMENTS ── */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left: Man holding laptop image */}
            <div className="flex-1 flex justify-center">
              <div className="w-full max-w-[420px]">
                <Image
                  src="/images/vendor-payments/menholdiglaptop.png"
                  alt="Vendor payments made easy"
                  width={420}
                  height={500}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>

            {/* Right: Text content */}
            <div className="flex-1">
              <h2 className="fontheading text-3xl md:text-4xl text-gray-900 mb-6">
                Why Rupeeflow for <span className="text-emerald-500">Vendor Payments?</span>
              </h2>
              <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-8 max-w-xl">
                Rupeeflow simplifies vendor payment management for businesses of all sizes.
                From automated bulk transfers to real-time tracking, our platform ensures
                every payment is accurate, on time, and fully reconciled.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <CheckIcon className="w-10 h-10 shrink-0" />
                  <div>
                    <h4 className="fontheading text-base text-gray-900">One-Click Bulk Payments</h4>
                    <p className="text-sm text-gray-500 fontbody2 mt-1">Pay hundreds of vendors simultaneously with a single upload.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <LightingFastIcon className="w-10 h-10 shrink-0" />
                  <div>
                    <h4 className="fontheading text-base text-gray-900">Lightning-Fast Transfers</h4>
                    <p className="text-sm text-gray-500 fontbody2 mt-1">Process payments via IMPS, NEFT, RTGS, or UPI in seconds.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <SafeGuardIcon className="w-10 h-10 shrink-0" />
                  <div>
                    <h4 className="fontheading text-base text-gray-900">Enterprise-Grade Security</h4>
                    <p className="text-sm text-gray-500 fontbody2 mt-1">PCI DSS compliant with multi-layer encryption and fraud protection.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors"
                >
                  Get Started
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── POWERFUL VENDOR PAYMENT FEATURES ── */}
      <section className="relative py-24 bg-[#f4f8fb] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="fontheading text-3xl md:text-4xl text-gray-900">
              Powerful <span className="text-emerald-500">Vendor Payment</span> Features
            </h2>
          </div>

          <div className="space-y-24">

            {/* 1. Pay Instantly via Multiple Channels — text left, placeholder right */}
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <PayInstantIcon className="w-14 h-14 shrink-0" />
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">Pay Instantly via Multiple Channels</h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Disburse vendor payments through NEFT, RTGS, IMPS, or UPI with just a few clicks.
                  Rupeeflow ensures your payments reach vendors instantly, reducing delays and
                  strengthening business relationships.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors"
                >
                  Get Started
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
              <div className="lg:w-[40%] flex justify-center">
                <div className="w-full max-w-[340px] h-[260px] bg-white rounded-xl border border-gray-200 flex items-center justify-center shadow-sm">
                  <svg className="w-14 h-14 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* 2. Automated Invoicing & Approvals — placeholder left, text right */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <InvoicingIcon className="w-14 h-14 shrink-0" />
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">Automated Invoicing & Approvals</h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Streamline your accounts payable with automated invoice processing and configurable
                  maker-checker approval workflows. Reduce manual effort and ensure compliance
                  with every vendor payment.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors"
                >
                  Get Started
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
              <div className="lg:w-[40%] flex justify-center">
                <div className="w-full max-w-[340px] h-[260px] bg-white rounded-xl border border-gray-200 flex items-center justify-center shadow-sm">
                  <svg className="w-14 h-14 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* 3. Live Payment Tracking — text left, placeholder right */}
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <LiveTrackingIcon className="w-14 h-14 shrink-0" />
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">Live Payment Tracking</h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Track every vendor payment in real time from initiation to settlement. Get instant
                  notifications on payment status, failed transactions, and successful settlements
                  to maintain complete visibility over your outflows.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors"
                >
                  Get Started
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
              <div className="lg:w-[40%] flex justify-center">
                <div className="w-full max-w-[340px] h-[260px] bg-white rounded-xl border border-gray-200 flex items-center justify-center shadow-sm">
                  <svg className="w-14 h-14 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* 4. Instant Reconciliation — placeholder left, text right */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <InstantReconIcon className="w-14 h-14 shrink-0" />
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">Instant Reconciliation</h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Automatically match vendor payments with invoices and purchase orders in real time.
                  Eliminate manual reconciliation effort, reduce errors, and close your books faster
                  with Rupeeflow&apos;s smart reconciliation engine.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors"
                >
                  Get Started
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
              <div className="lg:w-[40%] flex justify-center">
                <div className="w-full max-w-[340px] h-[260px] bg-white rounded-xl border border-gray-200 flex items-center justify-center shadow-sm">
                  <svg className="w-14 h-14 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── EVERYTHING YOU NEED — Feature Grid ── */}
      <section className="relative py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="fontheading text-3xl md:text-4xl text-gray-900">
              Everything You Need for <span className="text-emerald-500">Vendor Payments</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card Payments */}
            <div className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-md transition-shadow">
              <CardsIcon className="w-12 h-12 mb-5" />
              <h3 className="fontheading text-lg text-gray-900 mb-3">Card Payments</h3>
              <p className="text-sm text-gray-500 fontbody2 leading-relaxed">
                Pay vendors via credit or debit cards with secure tokenized transactions.
              </p>
            </div>

            {/* Lightning-Fast Payouts */}
            <div className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-md transition-shadow">
              <LightingFastIcon className="w-12 h-12 mb-5" />
              <h3 className="fontheading text-lg text-gray-900 mb-3">Lightning-Fast Payouts</h3>
              <p className="text-sm text-gray-500 fontbody2 leading-relaxed">
                Process vendor payments in under 2 seconds via IMPS for instant settlements.
              </p>
            </div>

            {/* Smart Reconciliation */}
            <div className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-md transition-shadow">
              <ReconcileIcon className="w-12 h-12 mb-5" />
              <h3 className="fontheading text-lg text-gray-900 mb-3">Smart Reconciliation</h3>
              <p className="text-sm text-gray-500 fontbody2 leading-relaxed">
                Auto-match payments with invoices and generate settlement reports instantly.
              </p>
            </div>

            {/* Advanced Security */}
            <div className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-md transition-shadow">
              <SecurityIcon className="w-12 h-12 mb-5" />
              <h3 className="fontheading text-lg text-gray-900 mb-3">Advanced Security</h3>
              <p className="text-sm text-gray-500 fontbody2 leading-relaxed">
                256-bit encryption, PCI DSS compliance, and multi-layer fraud protection.
              </p>
            </div>

            {/* Detailed Reports */}
            <div className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-md transition-shadow">
              <ReportsIcon className="w-12 h-12 mb-5" />
              <h3 className="fontheading text-lg text-gray-900 mb-3">Detailed Reports</h3>
              <p className="text-sm text-gray-500 fontbody2 leading-relaxed">
                Generate comprehensive payout reports with transaction-level detail and analytics.
              </p>
            </div>

            {/* Customizable Workflows */}
            <div className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-md transition-shadow">
              <ColoredSettingIcon className="w-12 h-12 mb-5" />
              <h3 className="fontheading text-lg text-gray-900 mb-3">Customizable Workflows</h3>
              <p className="text-sm text-gray-500 fontbody2 leading-relaxed">
                Configure approval hierarchies, payment schedules, and notification rules.
              </p>
            </div>

            {/* Global Payouts */}
            <div className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-md transition-shadow">
              <WebIcon className="w-12 h-12 mb-5" />
              <h3 className="fontheading text-lg text-gray-900 mb-3">Global Payouts</h3>
              <p className="text-sm text-gray-500 fontbody2 leading-relaxed">
                Pay international vendors with multi-currency support and competitive FX rates.
              </p>
            </div>

            {/* Fraud Protection */}
            <div className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-md transition-shadow">
              <SafeGuardIcon className="w-12 h-12 mb-5" />
              <h3 className="fontheading text-lg text-gray-900 mb-3">Fraud Protection</h3>
              <p className="text-sm text-gray-500 fontbody2 leading-relaxed">
                AI-powered fraud detection safeguards every transaction against unauthorized access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <VendorPaymentsFaq />
    </div>
  )
}
