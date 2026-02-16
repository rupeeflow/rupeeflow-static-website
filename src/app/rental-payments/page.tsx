import Link from 'next/link'
import RentalMarquee from '@/components/sections/rentalPayments/RentalMarquee'
import RentalFaq from '@/components/sections/rentalPayments/RentalFaq'

export default function RentalPaymentsPage() {
  return (
    <div className="w-full relative">
      {/* ── HERO SECTION ── */}
      <section className="relative py-24 md:py-32 bg-[#f4f8fb] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left: Text */}
            <div className="flex-1">
              <span className="text-emerald-500 text-sm fontheading tracking-wide">
                Rent Payments
              </span>
              <h1 className="fontheading text-3xl sm:text-4xl md:text-[2.8rem] lg:text-[3.2rem] leading-tight text-gray-900 mt-4">
                Hassle-Free Rent Payments
                <br />
                with <span className="text-emerald-500">Rupeeflow</span>
              </h1>
              <p className="mt-6 text-gray-500 text-base md:text-lg fontbody2 leading-relaxed max-w-lg">
                Say goodbye to delays and manual effort. Rupeeflow accelerates rent
                payments, ensuring they are fast, secure, and convenient.
              </p>

              {/* CTA */}
              <div className="mt-8">
                <Link
                  href="#"
                  className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold text-sm hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg shadow-emerald-500/20 border border-emerald-400/30"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-white/80" />
                  Get Started
                </Link>
              </div>
            </div>

            {/* Right: Image placeholder with floating cards */}
            <div className="flex-1 flex justify-center">
              <div className="relative w-full max-w-[480px]">
                {/* Main placeholder */}
                <div className="w-full h-[460px] bg-gray-200/60 rounded-2xl border border-gray-200 flex items-center justify-center">
                  <svg className="w-20 h-20 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>

                {/* Floating: Rent Payment badge */}
                <div className="absolute top-[35%] left-[-10px] bg-white rounded-lg shadow-md px-4 py-2.5 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <span className="text-xs fontheading text-gray-900">Rent Payment</span>
                </div>

                {/* Floating: Amount Disbursed */}
                <div className="absolute bottom-16 right-[-10px] bg-white rounded-xl shadow-md px-5 py-3 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center">
                    <span className="text-sm fontheading text-emerald-600">{'\u20B9'}</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 fontbody2">Amount Disbursed</p>
                    <p className="text-sm fontheading text-gray-900">{'\u20B9'}12,03,300</p>
                    <div className="w-full h-1 bg-emerald-400 rounded-full mt-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW TO SETUP RENT PAYMENTS AUTOMATION ── */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="fontheading text-3xl md:text-4xl text-gray-900">
              How To Setup <span className="text-emerald-500">Rent Payments</span> Automation
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left: Steps */}
            <div className="flex-1 space-y-6 w-full max-w-lg">
              {/* Step 1: Sign Up */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center">
                  <span className="fontheading text-emerald-600 text-sm">{'\u20B9'}</span>
                </div>
                <div>
                  <h3 className="fontheading text-lg text-gray-900">Sign Up</h3>
                  <p className="text-sm text-gray-500 mt-1 fontbody2">
                    Create your Rupeeflow account in just a few clicks.
                  </p>
                </div>
              </div>

              {/* Step 2: Add Payment Details (highlighted) */}
              <div className="flex items-start gap-5 bg-gray-50 rounded-2xl p-6 -ml-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div>
                  <h3 className="fontheading text-lg text-gray-900">Add Payment Details</h3>
                  <p className="text-sm text-gray-500 mt-1 fontbody2">
                    Link your rental agreements and landlord information.
                  </p>
                </div>
              </div>

              {/* Step 3: Automate and Pay */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center">
                  <span className="fontheading text-emerald-600 text-sm">A</span>
                </div>
                <div>
                  <h3 className="fontheading text-lg text-gray-900">Automate and Pay</h3>
                  <p className="text-sm text-gray-500 mt-1 fontbody2">
                    Schedule recurring payments or pay on the go with
                    automated reminders.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors"
                >
                  Get started
                </Link>
              </div>
            </div>

            {/* Right: Placeholder */}
            <div className="flex-1 flex justify-center">
              <div className="w-full max-w-[460px] h-[460px] bg-gray-100 rounded-2xl border border-gray-200 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PUT AN END TO RENTAL PAYMENT WOES ── */}
      <section className="relative py-24 bg-[#f4f8fb] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="fontheading text-3xl md:text-4xl text-gray-900">
              Put an End to Rental Payment Woes with <span className="text-emerald-500">Rupeeflow</span>
            </h2>
          </div>

          <div className="space-y-24">

            {/* 1. Eliminate Late Payment Penalties */}
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">Eliminate Late Payment Penalties</h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Avoid the stress and cost of missing due dates. Rupeeflow&apos;s automated reminders and
                  recurring payment options ensure your rent is paid on time, every time. Say goodbye
                  to late fees and improve your cash flow with a solution designed to keep you
                  punctual without constant follow-ups.
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

            {/* 2. Multiple Payment Modes */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">Multiple Payment Modes</h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Pay your rent your way. Choose from UPI, NEFT, RTGS, credit cards, or digital wallets
                  to make your rental payments. Whether you want instant processing or flexibility in
                  managing funds, Rupeeflow has a payment mode that works for you&mdash;and your landlord
                  will thank you for it!
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

            {/* 3. Streamlined Payment Tracking */}
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">Streamlined Payment Tracking</h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Say goodbye to messy spreadsheets and fragmented payment records. Rupeeflow&apos;s
                  centralized dashboard gives you a real-time view of all your rent transactions. Know
                  what&apos;s paid, what&apos;s pending, and what&apos;s overdue&mdash;all in one intuitive platform. Gain
                  control and transparency like never before.
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

            {/* 4. Instant Reconciliation */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">Instant Reconciliation</h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Save hours of effort with automatic reconciliation. Rupeeflow links your payments to
                  corresponding invoices seamlessly, so you can track rent settlements without lifting a
                  finger. No more manual matching, no more errors&mdash;just accurate records and peace
                  of mind.
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

            {/* 5. Secure Transactions */}
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">Secure Transactions</h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Your security is our priority. Rupeeflow uses multi-layered encryption, fraud detection,
                  and bank-grade protocols to safeguard every transaction. Whether you pay rent via
                  credit card, UPI, or any other method, you can trust that your data and funds are
                  protected.
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

      {/* ── MARQUEE — One Platform for All Rental Needs ── */}
      <RentalMarquee />

      {/* ── FAQ SECTION ── */}
      <RentalFaq />
    </div>
  )
}
