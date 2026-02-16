import Link from 'next/link'
import FaqSection from '@/components/sections/collections/FaqSection'

export default function CollectPayments() {
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
          className="absolute right-[-50px] top-[20%] w-[500px] h-[500px] rounded-full opacity-30 blur-[100px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #109F58 0%, transparent 70%)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center pt-48 px-6">
          <h1 className="fontheading text-3xl sm:text-4xl md:text-[2.5rem] lg:text-[4rem] leading-tight text-white">
            Accept Payments the Smarter
            <br />
            Way with <span className="text-emerald-400">Rupeeflow</span>
          </h1>

          <p className="mt-8 text-gray-400 max-w-3xl mx-auto text-base md:text-lg fontbody2 leading-relaxed">
            No more chasing, no more delays &ndash; Payment Collection Solutions
            for Merchants Who Want to Make Money
          </p>

          {/* CTA Button */}
          <div className="flex justify-center mt-12">
            <Link
              href="#"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold text-sm hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg shadow-emerald-500/20 border border-emerald-400/30"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-white/80" />
              Talk to Us
            </Link>
          </div>

          {/* Hero Image Placeholders — mimicking payment summary + analytics + person */}
          <div className="relative mt-16 max-w-4xl mx-auto">
            <div className="flex items-end justify-center gap-6">
              {/* Collection Analytics placeholder (left) */}
              <div className="hidden md:flex w-[280px] h-[260px] bg-[#1a1a1a] rounded-xl border border-gray-700/50 flex-col p-5 shrink-0">
                <p className="text-white text-sm fontheading mb-4">Collection Analytics</p>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-gray-500 text-xs fontbody2">Hold</span>
                </div>
                <div className="flex-1 flex items-end gap-3 px-2">
                  {[40, 25, 55, 35, 70, 45, 60, 50].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm"
                      style={{
                        height: `${h}%`,
                        backgroundColor: i < 2 ? '#10b981' : '#374151',
                      }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-2 px-1">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'].map(
                    (m) => (
                      <span key={m} className="text-[8px] text-gray-600">
                        {m}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Payment Summary placeholder (center) */}
              <div className="w-[320px] md:w-[380px] bg-[#1a1a1a] rounded-xl border border-gray-700/50 p-5 shrink-0">
                {/* Browser dots */}
                <div className="flex gap-1.5 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-600" />
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-600" />
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-600" />
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="fontheading text-sm text-gray-900 mb-3">Payment Summary</p>
                  <div className="border border-gray-200 rounded-lg overflow-hidden mb-3">
                    <div className="flex items-center justify-between px-3 py-2 bg-gray-50">
                      <span className="text-xs text-gray-500 fontbody2">Contact Details</span>
                      <span className="text-xs text-emerald-500 fontheading">EDIT</span>
                    </div>
                    <div className="px-3 py-1.5 flex justify-between">
                      <span className="text-xs text-gray-500 fontbody2">Mobile</span>
                      <span className="text-xs text-gray-700 fontbody2">893180513512</span>
                    </div>
                    <div className="px-3 py-1.5 flex justify-between">
                      <span className="text-xs text-gray-500 fontbody2">Email</span>
                      <span className="text-xs text-gray-700 fontbody2">user@rupeeflow.com</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 bg-emerald-100 rounded flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-xs text-gray-700 fontbody2">Payment Details</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500 fontbody2">Amount</span>
                      <span className="text-gray-900 fontbody2">1,000.00</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500 fontbody2">Convenience Fee</span>
                      <span className="text-gray-900 fontbody2">100.00</span>
                    </div>
                    <div className="flex justify-between text-xs border-t border-gray-200 pt-2 mt-2">
                      <span className="text-emerald-500 fontheading">Total Payable</span>
                      <span className="text-gray-900 fontheading">1,100.00</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Person placeholder (right, overlapping) */}
              <div className="hidden lg:block w-[200px] h-[320px] bg-gray-700/30 rounded-xl -ml-10 mb-0 relative z-20 border border-gray-600/30">
                <div className="flex items-center justify-center h-full">
                  <svg className="w-16 h-16 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS SECTION — Payments Rolling In Automatically ── */}
      <section className="relative py-20 overflow-hidden">
        {/* Background placeholder (office image) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332] via-[#2a3444] to-[#1a2540]">
          <div className="absolute inset-0 bg-[#1a2540]/70" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h2 className="fontheading text-2xl md:text-4xl text-white mb-12">
            Payments Rolling In Automatically, Every Time.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl px-8 py-10 shadow-lg">
              <h3 className="fontheading text-4xl md:text-5xl text-gray-900">100%</h3>
              <p className="text-gray-500 fontbody2 mt-2">Transaction Success Rate</p>
            </div>
            <div className="bg-white rounded-2xl px-8 py-10 shadow-lg">
              <h3 className="fontheading text-4xl md:text-5xl text-gray-900">99.9%</h3>
              <p className="text-gray-500 fontbody2 mt-2">Uptime</p>
            </div>
            <div className="bg-white rounded-2xl px-8 py-10 shadow-lg">
              <h3 className="fontheading text-4xl md:text-5xl text-gray-900">100+</h3>
              <p className="text-gray-500 fontbody2 mt-2">Payment Options</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FASTER, SMOOTHER, SMARTER PAYMENTS COLLECTION ── */}
      <section className="relative py-24 bg-[#f4f8fb] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="fontheading text-3xl md:text-4xl text-gray-900">
              <span className="text-emerald-500">Faster, Smoother, Smarter</span> Payments Collection
            </h2>
          </div>

          <div className="space-y-24">

            {/* 1. Payment Gateway — icon+text left, placeholder right */}
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">Payment Gateway</h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  A high-performance gateway that enables merchants to accept payments through
                  multiple methods such as credit cards, debit cards, UPI, net banking, and digital wallets,
                  ensuring seamless transactions with exceptional success rates and security.
                </p>
                <Link
                  href="/payment-gateway"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors"
                >
                  Learn more
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

            {/* 2. Payment Links — placeholder left, icon+text right */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">Payment Links</h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Generate and share secure payment links instantly via SMS, email, WhatsApp, or social
                  media, allowing merchants to collect payments from customers without requiring a
                  website, ensuring quick and hassle-free transactions.
                </p>
                <Link
                  href="/payment-links"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors"
                >
                  Learn more
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

            {/* 3. Payment Button — icon+text left, placeholder right */}
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  </div>
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">Payment Button</h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Easily integrate a payment button on your website, app, or digital platform, providing
                  customers with a seamless checkout experience that enhances conversions while
                  simplifying payment collection for merchants of all sizes.
                </p>
                <Link
                  href="/payment-button"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors"
                >
                  Learn more
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

            {/* 4. Payment Page — placeholder left, icon+text right */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">Payment Page</h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Create a professional, branded payment page in just minutes, enabling merchants
                  without a website to collect online payments efficiently while providing customers with
                  a secure and user-friendly payment experience.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors"
                >
                  Learn more
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

            {/* 5. UPI Payments — icon+text left, placeholder right */}
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">UPI Payments</h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Enable customers to make instant payments using UPI, ensuring a fast, secure, and
                  seamless checkout process that reduces transaction friction and improves the overall
                  user experience for both merchants and consumers alike.
                </p>
                <Link
                  href="/upi-collections"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors"
                >
                  Learn more
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

            {/* 6. QR Code Payments — placeholder left, icon+text right */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                    </svg>
                  </div>
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">QR Code Payments</h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Generate unique static or dynamic QR codes for merchants to accept payments
                  instantly in retail stores, restaurants, and events, allowing customers to make secure
                  and contactless payments with ease.
                </p>
                <Link
                  href="/qr-code"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors"
                >
                  Learn more
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

      {/* ── WHY WAIT? UNLOCK YOUR FUNDS IN REAL-TIME ── */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left: Text */}
            <div className="flex-1">
              <h2 className="fontheading text-3xl md:text-4xl text-gray-900 mb-2">
                Why Wait? Unlock <span className="text-emerald-500">Your Funds in Real-time</span>
              </h2>

              <div className="mt-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">Instant Settlement</h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Get immediate access to your funds after each transaction, minimizing cash
                  flow delays, improving business liquidity, and ensuring better financial
                  planning while enabling seamless operations with real-time settlement
                  capabilities.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors"
                >
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right: Image placeholder */}
            <div className="flex-1 flex justify-center">
              <div className="w-full max-w-[420px] h-[460px] bg-gray-100 rounded-2xl border border-gray-200 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AFFORDABILITY SUITE ── */}
      <section className="relative py-24 bg-[#f4f8fb] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
            {/* Right: Text */}
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="fontheading text-xl md:text-2xl text-gray-900">Affordability Suite</h3>
              </div>
              <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                Empower customers with flexible payment options such as EMI and pay-later solutions,
                making high-value transactions more accessible while improving purchasing power and
                boosting sales for businesses.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors"
              >
                Learn more
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            {/* Left: Image placeholder */}
            <div className="flex-1 flex justify-center">
              <div className="w-full max-w-[420px] h-[460px] bg-white rounded-2xl border border-gray-200 flex items-center justify-center shadow-sm">
                <svg className="w-16 h-16 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <FaqSection />
    </div>
  )
}
