import Link from 'next/link'
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
      <section className="relative min-h-screen bg-[#020506] overflow-hidden">

        {/* Left spotlight glow */}
        <div
          className="absolute -left-[100px] top-[10%] w-[400px] h-[400px] rounded-full opacity-50 blur-[120px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #109F58 0%, #055949 40%, transparent 70%)',
          }}
        />
        <div
          className="absolute left-[5%] top-[30%] w-[500px] h-[500px] rounded-full opacity-30 blur-[100px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #109F58 0%, transparent 70%)',
          }}
        />

        {/* Decorative UPI strip — curves across bottom */}
        <div className="absolute bottom-0 left-0 w-full pointer-events-none z-[5]">
          <UPIStripIcon className="w-full h-auto opacity-70" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center pt-48 px-6">
          <h1 className="fontheading text-3xl sm:text-4xl md:text-[2.5rem] lg:text-[4rem] leading-tight text-white">
            Simplify cashflow with{' '}
            <span className="text-emerald-400">UPI</span>
            <br />
            powered{' '}
            <span className="text-emerald-400">Rupeeflow</span>
          </h1>

          <p className="mt-8 text-gray-400 max-w-2xl mx-auto text-base md:text-lg fontbody2 leading-relaxed">
            Effortless UPI payment. Whether it&apos;s BHIM, PhonePe, WhatsApp, or any UPI-supported app,
            experience smooth transactions without the hassle of SMS notifications or remembering VPAs.
          </p>

          {/* UPI Logos + Scan and Pay + Phone Mockup area */}
          <div className="relative mt-16 pb-12">

            {/* Google Pay — top-left */}
            <div className="absolute left-[2%] md:left-[6%] top-[0%] w-[65px] h-[65px] md:w-[80px] md:h-[80px] bg-white rounded-2xl shadow-xl flex items-center justify-center z-20">
              <GpayIcon className="w-[45px] h-[45px] md:w-[55px] md:h-[55px]" />
            </div>

            {/* PhonePe — left-middle with label */}
            <div className="absolute left-[10%] md:left-[16%] top-[22%] w-[72px] h-[88px] md:w-[85px] md:h-[105px] bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center gap-1 z-20">
              <PhonePayIcon className="w-[36px] h-[36px] md:w-[44px] md:h-[44px]" />
              <span className="text-[9px] md:text-[11px] font-semibold text-[#5f259f]">PhonePe</span>
            </div>

            {/* BHIM UPI — top-right */}
            <div className="absolute right-[2%] md:right-[6%] top-[0%] w-[65px] h-[65px] md:w-[80px] md:h-[80px] bg-white rounded-2xl shadow-xl flex items-center justify-center z-20">
              <BhimUPIIcon className="w-[45px] h-[45px] md:w-[55px] md:h-[55px]" />
            </div>

            {/* Paytm — right-middle */}
            <div className="absolute right-[8%] md:right-[13%] top-[25%] w-[65px] h-[65px] md:w-[80px] md:h-[80px] bg-white rounded-2xl shadow-xl flex items-center justify-center z-20">
              <PaytmIcon className="w-[45px] h-[45px] md:w-[55px] md:h-[55px]" />
            </div>

            {/* Scan and Pay pill button */}
            <div className="flex justify-center mb-8">
              <Link
                href="#"
                className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold text-sm hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg shadow-emerald-500/20"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-white/80" />
                Scan and Pay
              </Link>
            </div>

            {/* Phone mockup with QR scanner */}
            <div className="relative mx-auto w-[220px] md:w-[260px]">
              {/* Dashed vertical center line behind phone */}
              <div className="absolute left-1/2 -translate-x-1/2 -top-12 h-[calc(100%+48px)] border-l border-dashed border-gray-500/30 pointer-events-none z-0" />

              {/* Phone body */}
              <div className="relative bg-white rounded-[1.8rem] shadow-2xl overflow-hidden border border-gray-200 z-10">
                {/* Green header */}
                <div className="bg-emerald-600 px-5 pt-6 pb-5" style={{ borderBottomLeftRadius: '0.5rem', borderBottomRightRadius: '0.5rem' }}>
                  <h3 className="text-white font-bold text-base text-left">Scan QR</h3>
                  <p className="text-emerald-200 text-xs text-left mt-0.5">Make payment</p>
                </div>

                {/* QR Code area */}
                <div className="bg-gray-100 px-6 py-8 flex items-center justify-center">
                  <div className="relative">
                    {/* Corner scanner brackets */}
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

                {/* Bottom icons — gallery & flashlight */}
                <div className="flex items-center justify-center gap-8 py-4 bg-white">
                  {/* Gallery icon */}
                  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {/* Flashlight icon */}
                  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>

              {/* Green arrow image — above and to the left of phone */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/upi-collections/npci.png"
                alt="Arrow"
                className="absolute -left-[55%] md:-left-[65%] -top-[15%] w-[180px] md:w-[240px] h-auto z-[15] pointer-events-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW TO USE UPI PAYMENTS + CUTTING EDGE SECTIONS ── */}
      <div className="relative bg-white overflow-hidden">
        {/* Decorative strip spanning both sections */}
        <div className="absolute inset-0 pointer-events-none">
          <UPIStripIcon
            className="absolute w-full h-full"
            style={{ opacity: 0.8 }}
          />
        </div>

        {/* ── HOW TO USE UPI PAYMENTS ── */}
        <section className="relative z-10 py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="fontheading text-3xl md:text-4xl text-gray-900">
                How to use <span className="text-emerald-500">UPI payments</span>
              </h2>
              <p className="mt-3 text-gray-500 text-sm md:text-base fontbody2">
                Follow these simple steps to get paid using links
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              {/* Left: 3 Steps */}
              <div className="flex-1 space-y-5 w-full max-w-lg">
                {/* Sign-up */}
                <div className="flex items-start gap-5 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <ProfileIcon className="w-14 h-14 shrink-0" />
                  <div>
                    <h3 className="fontheading text-lg text-gray-900">Sign-up</h3>
                    <p className="text-sm text-gray-500 mt-1 fontbody2">
                      Register with Rupeeflow and integrate the UPI payment gateway on your website or app.
                    </p>
                  </div>
                </div>

                {/* KYC */}
                <div className="flex items-start gap-5 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <ProfileSearchIcon className="w-14 h-14 shrink-0" />
                  <div>
                    <h3 className="fontheading text-lg text-gray-900">KYC</h3>
                    <p className="text-sm text-gray-500 mt-1 fontbody2">
                      Ensure compliance and enable secure transactions by completing the simple KYC process.
                    </p>
                  </div>
                </div>

                {/* Collect */}
                <div className="flex items-start gap-5 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 shrink-0 bg-emerald-50 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="fontheading text-lg text-gray-900">Collect</h3>
                    <p className="text-sm text-gray-500 mt-1 fontbody2">
                      Start receiving payments through UPI apps — directly into your bank account.
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

              {/* Right: Image placeholder */}
              <div className="flex-1 flex justify-center">
                <div className="w-full max-w-[420px] h-[380px] bg-gray-100 rounded-2xl border border-gray-200 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* ── UPI PAYMENT GATEWAY FOR BUSINESSES ── */}
      <section className="relative py-24 bg-[#f0f0f0]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="fontheading text-3xl md:text-4xl text-gray-900">
              <span className="text-emerald-500">UPI Payment</span> Gateway for Businesses
            </h2>
          </div>

          <div className="space-y-10">
            {/* Card 1: Effortless Integration — image left, text right */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-[40%] w-full h-[220px] bg-gray-100 rounded-xl border-2 border-emerald-600/30 flex items-center justify-center shrink-0">
                <svg className="w-14 h-14 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="fontheading text-2xl text-gray-900 mb-3">Effortless Integration</h3>
                <p className="text-sm text-gray-500 fontbody2 leading-relaxed">
                  Generate payment links effortlessly from the dashboard or through APIs in just a few clicks. No technical expertise is required, allowing merchants of all sizes to start quickly. Focus on running your business while we simplify your payment collection process.
                </p>
              </div>
            </div>

            {/* Card 2: Instant Settlement — text left, image right */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="fontheading text-2xl text-gray-900 mb-3">Instant Settlement</h3>
                <p className="text-sm text-gray-500 fontbody2 leading-relaxed">
                  Rupeeflow Payment Links are perfect for merchants without an online presence. Collect payments via SMS, WhatsApp, email, or social media, eliminating the need for a website or app. This solution bridges the gap between offline and online payment experiences seamlessly.
                </p>
              </div>
              <div className="md:w-[40%] w-full h-[220px] bg-gray-100 rounded-xl border border-gray-200 flex items-center justify-center shrink-0">
                <svg className="w-14 h-14 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            {/* Card 3: Prioritize Secure Transactions — image left, text right */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-[40%] w-full h-[220px] bg-gray-100 rounded-xl border border-gray-200 flex items-center justify-center shrink-0">
                <svg className="w-14 h-14 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="fontheading text-2xl text-gray-900 mb-3">Prioritize Secure Transactions</h3>
                <p className="text-sm text-gray-500 fontbody2 leading-relaxed">
                  Offer your customers the flexibility to pay using their preferred method, including UPI, net banking, credit/debit cards, wallets, and more. Rupeeflow Payment Links ensure a smooth checkout experience for everyone, boosting customer satisfaction and increasing conversions.
                </p>
              </div>
            </div>

            {/* Card 4: No More Payment Failures — text left, image right */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="fontheading text-2xl text-gray-900 mb-3">No More Payment Failures</h3>
                <p className="text-sm text-gray-500 fontbody2 leading-relaxed">
                  Stay in the loop with instant alerts for every successful payment. Gain better control and visibility into your transactions, enabling faster decision-making and improved financial management. Receive updates across all devices to keep your operations running smoothly.
                </p>
              </div>
              <div className="md:w-[40%] w-full h-[220px] bg-gray-100 rounded-xl border border-gray-200 flex items-center justify-center shrink-0">
                <svg className="w-14 h-14 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Get Started button */}
          <div className="flex justify-center mt-12">
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-emerald-500 text-white text-sm font-semibold hover:bg-emerald-600 transition-colors"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-white/80" />
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* ── POWERFUL UPI PAYMENT SOLUTIONS (Sticky Stacking) ── */}
      <UpiSolutionsStack />
    </div>
  )
}
