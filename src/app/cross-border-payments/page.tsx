'use client'

import Link from 'next/link'
import FAQAccordion from '@/components/ui/FAQAccordion'
import { crossBorderFAQs } from '@/data/faqs'

export default function CrossBorderPaymentsPage() {
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
            Seamless
            <br />
            <span className="text-emerald-400">Cross-Border Payments</span>
          </h1>

          <p className="mt-8 text-gray-400 max-w-2xl mx-auto text-base md:text-lg fontbody2 leading-relaxed">
            Send and receive international payments effortlessly with competitive exchange
            rates, real-time tracking, and full regulatory compliance across 100+ countries.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center mt-12">
            <Link
              href="#"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold text-sm hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg shadow-emerald-500/20 border border-emerald-400/30"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-white/80" />
              Get Started
            </Link>
          </div>

          {/* Map Image */}
          <div className="relative mt-16 max-w-4xl mx-auto">
            <img
              src="/images/cross-border/map.png"
              alt="Global Payment Network"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ── HOW CROSS-BORDER PAYMENTS WORK ── */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="fontheading text-3xl md:text-4xl text-gray-900">
              How <span className="text-emerald-500">Cross-Border Payments</span> Work
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left: Steps */}
            <div className="flex-1 space-y-8 w-full max-w-lg">
              {/* Step 1 */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 shrink-0 rounded-full border-2 border-emerald-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="fontheading text-lg text-gray-900">Create Your Account</h3>
                  <p className="text-sm text-gray-500 mt-1 fontbody2">
                    Sign up on Rupeeflow, complete your KYC verification, and get onboarded in minutes.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 shrink-0 rounded-full border-2 border-emerald-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="fontheading text-lg text-gray-900">Add Beneficiary Details</h3>
                  <p className="text-sm text-gray-500 mt-1 fontbody2">
                    Enter the recipient&apos;s bank details, currency, and country for seamless transfers.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 shrink-0 rounded-full border-2 border-emerald-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="fontheading text-lg text-gray-900">Initiate Payment</h3>
                  <p className="text-sm text-gray-500 mt-1 fontbody2">
                    Choose the amount and currency, review the exchange rate, and confirm the transaction.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start gap-5 bg-gray-50 rounded-2xl p-6 -ml-6">
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

            {/* Right: Map Image */}
            <div className="flex-1 flex justify-center">
              <div className="w-full max-w-[460px] h-[480px] relative">
                <img
                  src="/images/cross-border/map.png"
                  alt="Cross-Border Payment Flow"
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
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

            {/* 1. Multi-Currency Support — icon+text left, animated image right */}
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center animate-pulse">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 012 2h1.064M15 20a2 2 0 002-2h3.945a1 1 0 00.95-.682l1.163-2.091A1 1 0 0019.5 16.5c0 1.376.312-2.5 1.5-2.5S20.876 11 19.5 11s-2.5.624-2.5 1.5z" />
                    </svg>
                  </div>
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">Multi-Currency Support Across 100+ Countries</h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Send and receive payments in over 30 currencies across 100+ countries. Rupeeflow handles currency conversion automatically with competitive exchange rates, eliminating the complexity of managing multiple foreign accounts and reducing conversion costs for your business.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-all duration-300 hover:scale-105"
                >
                  Get Started
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
              <div className="lg:w-[40%] flex justify-center">
                <div className="w-full max-w-[340px] h-[260px] bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl border border-blue-200 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
                  {/* Animated Currency Background */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-4 gap-2 p-4">
                      {['$', '€', '£', '¥'].map((currency, i) => (
                        <div key={i} className="text-2xl font-bold text-blue-600/30 animate-spin" style={{ animationDelay: `${i * 0.2}s` }}>
                          {currency}
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Currency Globe Icon */}
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md animate-bounce">
                      <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 012 2h1.064M15 20a2 2 0 002-2h3.945a1 1 0 00.95-.682l1.163-2.091A1 1 0 0019.5 16.5c0 1.376.312-2.5 1.5-2.5S20.876 11 19.5 11s-2.5.624-2.5 1.5z" />
                      </svg>
                    </div>
                    <div className="mt-2 text-center">
                      <p className="text-xs font-semibold text-blue-600">30+ Currencies</p>
                      <p className="text-xs text-gray-500">100+ Countries</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Competitive Exchange Rates — animated chart left, icon+text right */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center animate-pulse">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">Competitive Exchange Rates & Low Fees</h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Save on every international transaction with our transparent pricing model. Rupeeflow offers real-time exchange rates with minimal markup and no hidden charges, ensuring you always get best value for your cross-border transfers compared to traditional banking channels.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-all duration-300 hover:scale-105"
                >
                  Get Started
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
              <div className="lg:w-[40%] flex justify-center">
                <div className="w-full max-w-[340px] h-[260px] bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl border border-green-200 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
                  {/* Animated Chart Background */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="grid grid-cols-3 gap-1 p-2">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="h-8 bg-green-300/40 rounded animate-pulse" style={{ animationDelay: `${i * 0.1}s`, height: `${Math.random() * 100}%` }} />
                      ))}
                    </div>
                  </div>
                  {/* Exchange Rate Icon */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md animate-bounce">
                      <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div className="mt-2 text-center">
                      <p className="text-sm font-bold text-green-600">Best Rates</p>
                      <p className="text-xs text-gray-500">No Hidden Fees</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Regulatory Compliance — shield icon+text left, security animation right */}
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center animate-pulse">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 01-2 2H5a2 2 0 01-2 2v6a2 2 0 002 2h2a2 2 0 002 2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002 2zm0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">Built-in Regulatory Compliance & KYC</h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Navigate the complexities of international payment regulations effortlessly. Rupeeflow is fully compliant with RBI guidelines, FEMA regulations, and global AML/KYC standards, ensuring every cross-border transaction meets all legal requirements without you having to worry about compliance.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-all duration-300 hover:scale-105"
                >
                  Get Started
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
              <div className="lg:w-[40%] flex justify-center">
                <div className="w-full max-w-[340px] h-[260px] bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl border border-purple-200 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
                  {/* Animated Security Background */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-2 gap-2 p-4">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="h-4 bg-purple-300/30 rounded animate-pulse" style={{ animationDelay: `${i * 0.15}s` }} />
                      ))}
                    </div>
                  </div>
                  {/* Security Shield Icon */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md animate-bounce">
                      <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4-6 6" />
                        <circle cx="12" cy="12" r="3" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4-6 6" />
                      </svg>
                    </div>
                    <div className="mt-2 text-center">
                      <p className="text-sm font-bold text-purple-600">Compliance</p>
                      <p className="text-xs text-gray-500">RBI & FEMA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Real-time Tracking — tracking animation left, icon+text right */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center animate-pulse">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 006 0m0 7.544a1.5 1.5 0 000-3 0 3-3 0 00-3 0" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 4.518 7 3.646 7.036 4.518 7 3.646 7.036c0-3.586 0-6.958-3.586-6.958 0 6.958 4.342 4.342 0 6.958-4.342 6.958 0 6.958 4.342 0 6.958-4.342 6.958z" />
                    </svg>
                  </div>
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">Real-time Payment Tracking & Notifications</h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Know exactly where your money is at every step. Rupeeflow provides end-to-end visibility into your cross-border transactions with real-time status updates, instant notifications on settlement, and detailed audit trails for complete financial transparency.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-all duration-300 hover:scale-105"
                >
                  Get Started
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
              <div className="lg:w-[40%] flex justify-center">
                <div className="w-full max-w-[340px] h-[260px] bg-gradient-to-br from-orange-50 to-red-100 rounded-xl border border-orange-200 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
                  {/* Animated Tracking Background */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-3 gap-2 p-4">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className="h-6 bg-orange-300/30 rounded-full animate-ping" style={{ animationDelay: `${i * 0.2}s` }} />
                      ))}
                    </div>
                  </div>
                  {/* Tracking Map Icon */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md animate-spin">
                      <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 006 0m0 7.544a1.5 1.5 0 000-3 0 3-3 0 00-3 0" />
                        <circle cx="12" cy="12" r="3" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 4.518 7 3.646 7.036 4.518 7 3.646 7.036c0-3.586 0-6.958-3.586-6.958 0 6.958 4.342 4.342 0 6.958-4.342 6.958 0 6.958 4.342 0 6.958-4.342 6.958z" />
                      </svg>
                    </div>
                    <div className="mt-2 text-center">
                      <p className="text-sm font-bold text-orange-600">Live Tracking</p>
                      <p className="text-xs text-gray-500">24/7 Monitor</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Seamless API Integration — code animation left, icon+text right */}
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center animate-pulse">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="fontheading text-xl md:text-2xl text-gray-900">Seamless API Integration for Your Platform</h3>
                </div>
                <p className="text-sm md:text-base text-gray-500 fontbody2 leading-relaxed mb-6 max-w-xl">
                  Integrate cross-border payment capabilities directly into your platform with Rupeeflow&apos;s developer-friendly APIs. Our comprehensive documentation, SDKs, and sandbox environment make it easy to build and test international payment workflows tailored to your business needs.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-all duration-300 hover:scale-105"
                >
                  Get Started
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
              <div className="lg:w-[40%] flex justify-center">
                <div className="w-full max-w-[340px] h-[260px] bg-gradient-to-br from-cyan-50 to-blue-100 rounded-xl border border-cyan-200 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
                  {/* Animated Code Background */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-4 gap-1 p-2">
                      {[...Array(16)].map((_, i) => (
                        <div key={i} className="h-4 bg-cyan-300/40 rounded animate-pulse" style={{ 
                          animationDelay: `${i * 0.1}s`,
                          width: `${Math.random() > 0.5 ? '100%' : '20%'}`,
                          marginLeft: `${Math.random() > 0.5 ? 'auto' : '0'}`
                        }} />
                      ))}
                    </div>
                  </div>
                  {/* API Code Icon */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md animate-bounce">
                      <svg className="w-8 h-8 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4-4-6 6" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 3h6m-6 0v6" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 3h6m-6 0v6" />
                      </svg>
                    </div>
                    <div className="mt-2 text-center">
                      <p className="text-sm font-bold text-cyan-600">API Ready</p>
                      <p className="text-xs text-gray-500">REST & SDK</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CROSS-BORDER PAYMENT FEATURES ── */}
      <section className="relative py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="fontheading text-3xl md:text-4xl text-gray-900">
              Rupeeflow <span className="text-emerald-500">Cross-Border Features</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Instant Settlements */}
            <div className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-md transition-shadow">
              <svg className="w-10 h-10 text-emerald-500 mb-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="fontheading text-lg text-gray-900 mb-3">Instant Settlements</h3>
              <p className="text-sm text-gray-500 fontbody2 leading-relaxed">
                Receive international payments faster with same-day or next-day settlement across supported corridors.
              </p>
            </div>

            {/* Multi-Currency Wallet */}
            <div className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-md transition-shadow">
              <svg className="w-10 h-10 text-emerald-500 mb-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <h3 className="fontheading text-lg text-gray-900 mb-3">Multi-Currency Wallet</h3>
              <p className="text-sm text-gray-500 fontbody2 leading-relaxed">
                Hold balances in multiple currencies and convert when the rates are favorable for your business.
              </p>
            </div>

            {/* Automated Reconciliation */}
            <div className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-md transition-shadow">
              <svg className="w-10 h-10 text-emerald-500 mb-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7" />
              </svg>
              <h3 className="fontheading text-lg text-gray-900 mb-3">Automated Reconciliation</h3>
              <p className="text-sm text-gray-500 fontbody2 leading-relaxed">
                Automatically match incoming international payments with invoices and generate detailed settlement reports.
              </p>
            </div>

            {/* Compliance Dashboard */}
            <div className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-md transition-shadow">
              <svg className="w-10 h-10 text-emerald-500 mb-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h3 className="fontheading text-lg text-gray-900 mb-3">Compliance Dashboard</h3>
              <p className="text-sm text-gray-500 fontbody2 leading-relaxed">
                Monitor all regulatory requirements, documentation status, and transaction limits from a centralized compliance dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>
      <FAQAccordion faqs={crossBorderFAQs} subtitle="Everything you need to know about RupeeFlow Cross-Border Payments." />
    </div>
  )
}
