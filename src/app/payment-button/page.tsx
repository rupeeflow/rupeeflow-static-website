import Link from 'next/link'
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
      <section className="relative min-h-screen bg-[#020506] overflow-hidden">

        {/* Left spotlight glow (same as payment-links) */}
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

        {/* Decorative rounded strip — bottom left area */}
        <div className="absolute bottom-0 left-0 w-full pointer-events-none">
          <PaymentButtonRoundedStripIcon className="w-full h-auto opacity-60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center pt-28 px-6">
          <h1 className="fontheading text-3xl sm:text-4xl md:text-[2.5rem] lg:text-[4rem] leading-tight text-white">
            Collect Smarter with Custom
            <br />
            <span className="text-emerald-400">Payment Button</span>
          </h1>

          <p className="mt-8 text-gray-400 max-w-2xl mx-auto text-base md:text-lg fontbody2 leading-relaxed">
            Create a payment button in minutes and embed it on your website or app to accept fast,
            seamless, and secure online payments. No complex integrations or coding required.
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold text-sm hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg shadow-emerald-500/20"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-white/80" />
              Create Your Button
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-emerald-500 text-white font-semibold text-sm hover:bg-emerald-500/10 transition-all duration-300"
            >
              Documentation
            </Link>
          </div>

          {/* Dashboard + Mobile mockup placeholders */}
          <div className="relative mt-1 mb-[-2px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/payment-button/payment-button-menn.png"
              alt="Dashboard"
              className="w-full h-[743px]"
            />
            {/* Browser window mockup */}
            <div className="max-w-3xl mx-auto bg-[#2a2a2a] rounded-t-xl shadow-2xl overflow-hidden">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#1e1e1e]">
                <span className="w-3 h-3 rounded-full bg-gray-500" />
                <span className="w-3 h-3 rounded-full bg-blue-400" />
                <span className="w-3 h-3 rounded-full bg-red-400" />
              </div>

              {/* Content area */}
              {/* <div className="p-8"> */}
                {/* <h3 className="text-white fontheading text-xl mb-6 text-left">Order Summary</h3> */}
                {/* Product placeholders */}
                {/* <div className="flex gap-4 mb-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-24 h-20 bg-gray-600 rounded-lg" />
                  ))}
                </div> */}
                {/* Info bars */}
                {/* <div className="w-48 h-3 bg-gray-500 rounded mb-4" />
                <div className="w-72 h-3 bg-gray-500 rounded mb-6" /> */}
                {/* Pay button */}
                {/* <div className="w-36 py-2.5 bg-emerald-500 rounded-lg text-center text-white text-sm font-semibold">
                  Pay Here
                </div> */}
              {/* </div> */}
            </div>

            {/* Mobile mockup — overlapping right */}
            <div className="absolute -right-4 md:right-[10%] bottom-0 w-[180px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              <div className="p-4">
                {/* <p className="text-xs font-semibold text-gray-800 mb-3">Order Summary</p> */}
                {/* Mini product rows */}
                <div className="space-y-2 mb-3">
                  {/* {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gray-200 rounded" />
                      <div className="flex-1 space-y-1">
                        <div className="w-full h-1.5 bg-gray-200 rounded" />
                        <div className="w-2/3 h-1.5 bg-gray-200 rounded" />
                      </div>
                    </div>
                  ))} */}
                </div>
                {/* <div className="flex justify-between items-center mb-23">
                  <span className="text-[10px] text-gray-500">Total :</span>
                  <span className="text-xs font-bold text-gray-800">&#8377;4030</span>
                </div> */}
                {/* <div className="w-full py-1.5 bg-emerald-500 rounded-md text-center text-white text-[10px] font-semibold">
                  Pay Here
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW TO CREATE PAYMENT BUTTON ── */}
      <div className="relative bg-white overflow-hidden">

        {/* Decorative strip spanning both sections */}
        <div className="absolute inset-0 pointer-events-none">
          <PaymentButtonRoundedStripIcon
            className="absolute w-full h-full"
            style={{ opacity: 0.8 }}
          />
        </div>

        <section className="relative z-10 py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="fontheading text-3xl md:text-4xl text-gray-900">
                How to create <span className="text-emerald-500">Payment Button</span>
              </h2>
              <p className="mt-3 text-gray-500 text-sm md:text-base">
                Get Started in 3 Simple Steps
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              {/* Left: 3 Steps */}
              <div className="flex-1 space-y-6 w-full max-w-lg">
                <div className="flex items-start gap-5 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <CreatePaymentButton className="w-16 h-16 shrink-0" />
                  <div>
                    <h3 className="fontheading text-xl text-gray-900">Create</h3>
                    <p className="text-sm text-gray-500 mt-1 fontbody2">
                      Design your button using Rupeeflow&apos;s intuitive dashboard.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <CopyButtonIcon className="w-16 h-16 shrink-0" />
                  <div>
                    <h3 className="fontheading text-xl text-gray-900">Copy</h3>
                    <p className="text-sm text-gray-500 mt-1 fontbody2">
                      Auto-generate code customized for your button.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <ButtonSettingsIcon className="w-16 h-16 shrink-0" />
                  <div>
                    <h3 className="fontheading text-xl text-gray-900">Integrate</h3>
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
                  <div className="absolute top-6 left-0 bg-white rounded-full px-4 py-1.5 shadow-lg border border-gray-100 text-[11px] font-medium text-gray-700">
                    3 Simple Steps
                  </div>

                  {/* Floating badge: Create Copy Integrate */}
                  <div className="absolute top-16 left-4 bg-white rounded-lg px-3 py-2 shadow-lg border border-gray-100 flex items-center gap-2">
                    <span className="w-4 h-4 rounded bg-emerald-500 flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <span className="text-[11px] font-semibold text-gray-800">Create</span>
                    <span className="text-[11px] text-gray-400">Copy</span>
                    <span className="text-[11px] text-gray-400">Integrate</span>
                  </div>

                  {/* Floating badge: Quick Setup */}
                  <div className="absolute top-12 -right-4 bg-white rounded-lg px-3 py-1.5 shadow-lg border border-gray-100 text-[11px]">
                    <span className="text-gray-600">Quick </span>
                    <span className="text-emerald-500 font-semibold">Setup</span>
                  </div>

                  {/* Floating badge: Payment ₹5000 */}
                  <div className="absolute top-[55%] left-0 bg-white rounded-lg px-3 py-2 shadow-lg border border-gray-100">
                    <p className="text-[10px] text-gray-400">Payment</p>
                    <p className="text-sm font-bold text-gray-800">&#8377; 5000</p>
                  </div>

                  {/* Floating badge: Received */}
                  <div className="absolute top-[65%] left-10 bg-emerald-500 rounded-md px-3 py-1 shadow-lg">
                    <span className="text-[10px] font-semibold text-white">Received</span>
                  </div>

                  {/* Chat icon */}
                  <div className="absolute top-10 -right-2 w-7 h-7 bg-emerald-500 rounded-lg flex items-center justify-center shadow-md">
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v7a2 2 0 01-2 2H6l-4 4V5z" /></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── JUST ONE CLICK IS ENOUGH ── */}
        <section className="relative z-10 py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="fontheading text-3xl md:text-4xl text-gray-900">
                Just one <span className="text-emerald-500">click</span> is enough.
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              {/* Left: 3x2 feature cards */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-5">
                {/* Quick Setup */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-shadow">
                  <LightingIcon className="w-10 h-10 mb-3" />
                  <h3 className="fontheading text-sm text-gray-900 mb-3">Quick Setup</h3>
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
                  <h3 className="fontheading text-sm text-gray-900 mb-3">Copy &amp; Paste</h3>
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
                  <h3 className="fontheading text-sm text-gray-900 mb-3">Accept Payments</h3>
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
                  <h3 className="fontheading text-sm text-gray-900 mb-3">Style Your Button</h3>
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
                  <h3 className="fontheading text-sm text-gray-900 mb-3">Fits Any Device</h3>
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
                  <h3 className="fontheading text-sm text-gray-900 mb-3">Safe And Secure</h3>
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
                  <div className="absolute top-[15%] -left-4 bg-white rounded-md px-3 py-1.5 shadow-lg border border-gray-100 text-[11px] font-medium text-gray-700">
                    Copied
                  </div>

                  {/* Floating badge: Approved */}
                  <div className="absolute top-[15%] -right-4 bg-white rounded-md px-3 py-1.5 shadow-lg border border-gray-100 text-[11px] font-medium text-gray-700">
                    Approved
                  </div>

                  {/* Floating badge: Fits Any Device */}
                  <div className="absolute top-[35%] -left-8 bg-white rounded-md px-3 py-1.5 shadow-lg border border-gray-100 flex items-center gap-1.5">
                    <svg className="w-3 h-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                    <span className="text-[11px] font-medium text-gray-700">Fits Any Device</span>
                  </div>

                  {/* Floating badge: Active Now */}
                  <div className="absolute top-[45%] -right-6 bg-white rounded-md px-3 py-1.5 shadow-lg border border-gray-100 text-[11px] font-medium text-gray-700">
                    Active Now
                  </div>

                  {/* Floating badge: Safe And Secure */}
                  <div className="absolute top-[55%] -left-8 bg-white rounded-md px-3 py-1.5 shadow-lg border border-gray-100 flex items-center gap-1.5">
                    <svg className="w-3 h-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                    <span className="text-[11px] font-medium text-gray-700">Safe And Secure</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ONE BUTTON FOR ALL PAYMENT TYPES ── */}
        <section className="relative z-10 py-24 bg-[#f5f5f5]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="fontheading text-3xl md:text-4xl text-gray-900">
                <span className="text-emerald-500">One Button</span> for All Payment Types
              </h2>
              <p className="mt-3 text-gray-500 text-sm md:text-base fontbody2">
                Choose the right payment button for your business needs.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              {/* Left: 4 payment type cards */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Quick Pay Button */}
                <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <QuickPayButtonIcon className="w-14 h-14 mb-4" />
                  <h3 className="fontheading text-base text-gray-900 mb-3">Quick Pay Button</h3>
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
                  <button className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500 text-white text-xs font-semibold hover:bg-emerald-600 transition-colors">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    Pay Now
                  </button>
                </div>

                {/* Checkout Button */}
                <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <CheckoutButtonIcon className="w-14 h-14 mb-4" />
                  <h3 className="fontheading text-base text-gray-900 mb-3">Checkout Button</h3>
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
                  <button className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500 text-white text-xs font-semibold hover:bg-emerald-600 transition-colors">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM7.2 14.6l.1-.1L8.5 12h7.2c.7 0 1.4-.4 1.7-1l3.9-7-1.7-1-3.9 7H8.5L4.3 2H1v2h2l3.6 7.6L5.2 14c-.1.3-.2.6-.2 1 0 1.1.9 2 2 2h12v-2H7.4c-.1 0-.2-.1-.2-.2v-.2z" /></svg>
                    Checkout
                  </button>
                </div>

                {/* Donate Button */}
                <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <DonateButtonIcon className="w-14 h-14 mb-4" />
                  <h3 className="fontheading text-base text-gray-900 mb-3">Donate Button</h3>
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
                  <button className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500 text-white text-xs font-semibold hover:bg-emerald-600 transition-colors">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                    Donate
                  </button>
                </div>

                {/* Custom Button */}
                <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <SettingsButtonIcon className="w-14 h-14 mb-4" />
                  <h3 className="fontheading text-base text-gray-900 mb-3">Custom Button</h3>
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
                  <button className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500 text-white text-xs font-semibold hover:bg-emerald-600 transition-colors">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.49.49 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 00-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6A3.6 3.6 0 1112 8.4a3.6 3.6 0 010 7.2z" /></svg>
                    Custom Pay
                  </button>
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
                    <div className="absolute inset-3 z-0 " style={{ borderRadius: '70px', margin: '3px' }}>

                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/payment-button/personalOptions.png"
                        alt="Payment button options"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* Floating card: Button types list (left side) */}
                  {/* <div className="absolute top-[15%] -left-[40%] md:-left-[50%] bg-white rounded-xl px-5 py-5 shadow-xl border border-gray-100 z-20 w-[200px]">
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
                      <button className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#3a9e7e] text-white text-[11px] font-semibold">
                        Checkout <span className="text-white/80">&gt;</span>
                      </button>
                      <button className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gray-200 text-gray-600 text-[11px] font-medium">
                        Payment <span className="text-gray-400">&gt;</span>
                      </button>
                    </div>
                  </div> */}

                  {/* Floating badge: Explore Payment Types (top right) */}
                  <div className="absolute top-[8%] -right-[25%] bg-white rounded-lg px-4 py-2.5 shadow-lg border border-gray-200 z-20">
                    <span className="text-sm font-semibold text-gray-800">Explore Payment Types</span>
                  </div>

                  {/* Floating badge: One Click Pay (right middle) */}
                  <div className="absolute top-[45%] -right-[20%] bg-white rounded-lg px-4 py-2 shadow-lg border border-gray-200 z-20">
                    <span className="text-xs font-semibold text-gray-700">One Click Pay</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FAQAccordion faqs={paymentButtonFAQs} subtitle="Everything you need to know about RupeeFlow Payment Button." />
      </div>
    </div>
  )
}
