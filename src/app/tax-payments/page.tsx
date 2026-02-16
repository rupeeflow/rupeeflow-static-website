import Link from 'next/link'
import TaxPaymentsFaq from '@/components/sections/taxPayments/TaxPaymentsFaq'

export default function TaxPaymentsPage() {
  return (
    <div className="w-full relative">
      {/* ── HERO SECTION ── */}
      <section className="relative py-24 md:py-32 bg-[#f4f8fb] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          {/* Breadcrumb */}
          {/* <nav className="flex items-center gap-2 text-sm fontbody2 text-gray-400 mb-8">
            <Link href="/" className="hover:text-emerald-500 transition-colors">Home</Link>
            <span>&rsaquo;</span>
            <span>Make Payments</span>
            <span>&rsaquo;</span>
            <span className="text-emerald-500">GST Payments</span>
          </nav> */}

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left: Text */}
            <div className="flex-1">
              <span className="text-emerald-500 text-sm fontheading tracking-wide">
                GST Challan Payment
              </span>
              <h1 className="fontheading text-3xl sm:text-4xl md:text-[2.8rem] lg:text-[3.2rem] leading-tight text-gray-900 mt-4">
                Pay Your GST On Time
                <br />
                with Confidence
              </h1>
              <p className="mt-6 text-gray-500 text-base md:text-lg fontbody2 leading-relaxed max-w-lg">
                Make sure every online GST payment is completed on time through
                a secure and streamlined process that offers full control and clear
                visibility at every step.
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
                {/* Main person placeholder */}
                <div className="w-full h-[460px] bg-gray-200/60 rounded-2xl border border-gray-200 flex items-center justify-center">
                  <svg className="w-20 h-20 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>

                {/* Floating card: Processing Amount */}
                <div className="absolute top-4 right-[-10px] bg-white rounded-xl shadow-md px-4 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 fontbody2">Processing Amount</p>
                    <p className="text-sm fontheading text-gray-900">{'\u20B9'}12,000</p>
                  </div>
                </div>

                {/* Floating card: GST Challan */}
                <div className="absolute top-20 right-[-20px] bg-white rounded-xl shadow-md px-4 py-3 w-[200px]">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-xs fontheading text-gray-900">GST Challan</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1 h-2 bg-emerald-200 rounded-full" />
                    <div className="flex-1 h-2 bg-emerald-400 rounded-full" />
                    <div className="flex-1 h-2 bg-emerald-300 rounded-full" />
                  </div>
                </div>

                {/* Floating card: Payment Options */}
                <div className="absolute bottom-12 left-[-20px] bg-white rounded-xl shadow-md px-5 py-4 w-[240px]">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs fontheading text-gray-900">Payment Options</p>
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                        <span className="text-[8px] fontheading text-emerald-600">{'\u20B9'}</span>
                      </div>
                      <div>
                        <p className="text-[9px] text-gray-500 fontbody2">Total Amount</p>
                        <p className="text-xs fontheading text-gray-900">{'\u20B9'}12,000</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['VISA', 'Airtel', 'HDFC', 'MC', 'RuPay', 'UPI', 'Simpl'].map((m) => (
                      <div key={m} className="w-8 h-5 bg-gray-100 rounded flex items-center justify-center">
                        <span className="text-[6px] text-gray-500 fontbody2">{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW GST PAYMENT WORKS ── */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="fontheading text-3xl md:text-4xl text-gray-900">
              How <span className="text-emerald-500">GST Payment</span> Works with Rupeeflow
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left: Steps */}
            <div className="flex-1 space-y-8 w-full max-w-lg">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 shrink-0 rounded-full border-2 border-emerald-500 flex items-center justify-center">
                  <span className="fontheading text-emerald-500 text-sm">1</span>
                </div>
                <div>
                  <h3 className="fontheading text-lg text-gray-900">Generate GST Challan</h3>
                  <p className="text-sm text-gray-500 mt-1 fontbody2">
                    Create your GST challan directly from the Rupeeflow dashboard with pre-filled GSTIN details.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 shrink-0 rounded-full border-2 border-emerald-500 flex items-center justify-center">
                  <span className="fontheading text-emerald-500 text-sm">2</span>
                </div>
                <div>
                  <h3 className="fontheading text-lg text-gray-900">Choose Payment Method</h3>
                  <p className="text-sm text-gray-500 mt-1 fontbody2">
                    Pay via net banking, debit card, credit card, UPI, or NEFT/RTGS — whichever suits you best.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 shrink-0 rounded-full border-2 border-emerald-500 flex items-center justify-center">
                  <span className="fontheading text-emerald-500 text-sm">3</span>
                </div>
                <div>
                  <h3 className="fontheading text-lg text-gray-900">Confirm & Pay</h3>
                  <p className="text-sm text-gray-500 mt-1 fontbody2">
                    Review the challan details, verify the amount, and complete the payment securely.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 bg-gray-50 rounded-2xl p-6 -ml-6">
                <div className="w-12 h-12 shrink-0 rounded-full border-2 border-emerald-500 flex items-center justify-center">
                  <span className="fontheading text-emerald-500 text-sm">4</span>
                </div>
                <div>
                  <h3 className="fontheading text-lg text-gray-900">Get Instant Confirmation</h3>
                  <p className="text-sm text-gray-500 mt-1 fontbody2">
                    Receive an instant payment receipt with CIN number for your records and GST portal update.
                  </p>
                </div>
              </div>

              <div className="pt-2">
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
              <div className="w-full max-w-[460px] h-[480px] bg-gray-100 rounded-2xl border border-gray-200 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY RUPEEFLOW FOR GST PAYMENTS ── */}
      <section className="relative py-24 bg-[#f4f8fb] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="fontheading text-3xl md:text-4xl text-gray-900">
              Why Rupeeflow for <span className="text-emerald-500">GST Payments?</span>
            </h2>
          </div>

          <div className="space-y-24">

            {/* 1. Never Miss a GST Deadline */}
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">Never Miss a GST Deadline</h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Set up automated reminders and scheduled payments to ensure your GST challans are
                  always paid on time. Avoid late fees, penalties, and interest charges with Rupeeflow&apos;s
                  smart scheduling and notification system.
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

            {/* 2. Multiple Payment Options */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">Multiple Payment Options</h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Pay your GST using credit cards, debit cards, net banking, UPI, or NEFT/RTGS. Rupeeflow
                  supports all major payment methods so you can choose the most convenient option for
                  your business without any restrictions.
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

            {/* 3. Instant CIN Generation */}
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">Instant CIN Generation</h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Get your Challan Identification Number (CIN) instantly after successful payment.
                  Download digital receipts and maintain a complete audit trail for all your GST
                  transactions directly from the Rupeeflow dashboard.
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

            {/* 4. Secure & Compliant */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">Secure & Compliant Platform</h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Every GST payment through Rupeeflow is protected with bank-grade encryption and
                  processed through RBI-authorized payment channels. Your financial data stays secure
                  with PCI DSS compliance and multi-factor authentication.
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

      {/* ── GST PAYMENT FEATURES GRID ── */}
      <section className="relative py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="fontheading text-3xl md:text-4xl text-gray-900">
              Rupeeflow <span className="text-emerald-500">Tax Payment</span> Features
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-md transition-shadow">
              <svg className="w-10 h-10 text-emerald-500 mb-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="fontheading text-lg text-gray-900 mb-3">Auto Challan Generation</h3>
              <p className="text-sm text-gray-500 fontbody2 leading-relaxed">
                Generate GST challans with pre-filled GSTIN and tax details in seconds.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-md transition-shadow">
              <svg className="w-10 h-10 text-emerald-500 mb-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="fontheading text-lg text-gray-900 mb-3">Payment Scheduling</h3>
              <p className="text-sm text-gray-500 fontbody2 leading-relaxed">
                Schedule recurring tax payments with automated reminders before due dates.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-md transition-shadow">
              <svg className="w-10 h-10 text-emerald-500 mb-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h3 className="fontheading text-lg text-gray-900 mb-3">Tax Analytics Dashboard</h3>
              <p className="text-sm text-gray-500 fontbody2 leading-relaxed">
                Track all tax payments, view history, and download reports from one dashboard.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-md transition-shadow">
              <svg className="w-10 h-10 text-emerald-500 mb-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <h3 className="fontheading text-lg text-gray-900 mb-3">Bank-Grade Security</h3>
              <p className="text-sm text-gray-500 fontbody2 leading-relaxed">
                256-bit encryption with PCI DSS compliance for every tax transaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <TaxPaymentsFaq />
    </div>
  )
}
