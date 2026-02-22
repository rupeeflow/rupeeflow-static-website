import Link from 'next/link'
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
import UseCaseTabs from '@/components/ui/UseCaseTabs'

const ImagePlaceholder = ({ size }: { size?: string }) => (
  <div className="text-center text-gray-400">
    <svg className="w-14 h-14 mx-auto mb-2 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
    </svg>
    {size && <p className="text-xs">{size}</p>}
  </div>
)

export default function PaymentLinksPage() {
  return (
    <div className="w-full relative">
      {/* ── HERO SECTION ── */}
      <section className="relative min-h-screen bg-[#020506] overflow-hidden">
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
        <div className="relative z-10 max-w-5xl mx-auto text-center pt-48 pb-32 px-6">
          <h4 className="fontheading text-2xl sm:text-4xl md:text-[2.5rem] lg:text-[4rem] leading-tight text-white">
            Accept Payments Instantly
            <br />
            with <span className="text-emerald-400">Payment Links</span>
          </h4>
          <p className="mt-8 text-gray-400 max-w-2xl mx-auto text-base md:text-lg fontbody2 leading-relaxed">
            Create payment link effortlessly no website or app needed. Share via
            SMS, WhatsApp, email, or social media, and accept payments through
            100+ methods - no coding required.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold text-sm hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg shadow-emerald-500/20"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-white/80" />
              Set Up Your Link
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-emerald-500 text-white font-semibold text-sm hover:bg-emerald-500/10 transition-all duration-300"
            >
              Documentation
            </Link>
          </div>
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

              {/* Right: Interactive Image */}
              <div className="flex-1 flex justify-center items-center">
                <div className="relative w-full max-w-[700px] h-[500px] md:h-[648px] group">
                  {/* Main character - positioned on the right */}
                  <div className="absolute top-0 right-0 w-[60%] md:w-[65%] h-full z-10 transition-transform duration-500 ease-out group-hover:scale-[1.02]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/payment-links/mainchar.svg"
                      alt="Payment Links Character"
                      className="w-full h-full object-contain object-top"
                    />
                  </div>

                  {/* Menu card - positioned center-right, overlapping with character */}
                  <div className="absolute top-[50%] right-[15%] md:right-[18%] w-[45%] md:w-[50%] z-20 transition-all duration-500 ease-out group-hover:translate-x-[6px] group-hover:translate-y-[-6px] group-hover:scale-[1.08]" style={{ perspective: '1000px' }}>
                    <div className="relative transform-gpu transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-emerald-500/30 group-hover:rotate-[2deg]" style={{ transformStyle: 'preserve-3d' }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/payment-links/menu.svg"
                        alt="Payment Menu"
                        className="w-full h-auto object-contain drop-shadow-xl"
                      />
                      
                      {/* 3D card glow effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 via-emerald-500/0 to-emerald-600/0 group-hover:from-white/5 group-hover:via-emerald-500/10 group-hover:to-emerald-600/5 transition-all duration-500 pointer-events-none" />
                      
                      {/* Enhanced shadow for depth */}
                      <div className="absolute -inset-2 rounded-2xl bg-emerald-500/0 group-hover:bg-emerald-500/10 blur-xl transition-all duration-500 -z-10" />
                    </div>
                  </div>

                  {/* Ambient glow effect behind menu */}
                  <div className="absolute top-[40%] right-[25%] w-[200px] h-[200px] rounded-full bg-emerald-500/0 group-hover:bg-emerald-500/20 blur-3xl transition-all duration-700 pointer-events-none z-0" />
                  
                  {/* Connecting line effect (subtle) */}
                  <div className="absolute top-[45%] right-[35%] w-[80px] h-[2px] bg-gradient-to-r from-emerald-400/0 via-emerald-400/0 to-transparent group-hover:from-emerald-400/30 group-hover:via-emerald-400/20 transition-all duration-500 z-5" />
                </div>
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

              {/* Right: Image placeholder */}
              <div className="flex-1 flex justify-center items-center">
                <div className="w-full max-w-md h-[380px] bg-gray-100 rounded-2xl flex items-center justify-center">
                  <ImagePlaceholder />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── GET PAID WITH A SINGLE LINK ── */}
      <section className="bg-[#f0f0f0] py-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section heading */}
          <div className="text-center mb-16">
            <h2 className="fontheading text-3xl md:text-4xl text-gray-900">
              Get Paid with a <span className="text-emerald-500">Single Link</span>
            </h2>
          </div>

          <div className="space-y-8">
            {/* Card 1 — Quick and Easy Setup (image left, text right) */}
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-[40%] bg-gray-100 min-h-[250px] flex items-center justify-center">
                  <ImagePlaceholder />
                </div>
                <div className="md:w-[60%] p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="fontheading text-2xl md:text-3xl text-gray-900">Quick and Easy Setup</h3>
                  <p className="mt-4 text-gray-500 fontbody2 text-sm md:text-base leading-relaxed">
                    Generate payment links effortlessly from the dashboard or through APIs in just a
                    few clicks. No technical expertise is required, allowing merchants of all sizes to start
                    quickly. Focus on running your business while we simplify your payment collection
                    process.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 — No Website Required (text left, image right) */}
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-[60%] p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="fontheading text-2xl md:text-3xl text-gray-900">No Website Required</h3>
                  <p className="mt-4 text-gray-500 fontbody2 text-sm md:text-base leading-relaxed">
                    Rupeeflow Payment Links are perfect for merchants without an online presence.
                    Collect payments via SMS, WhatsApp, email, or social media, eliminating the need
                    for a website or app. This solution bridges the gap between offline and online
                    payment experiences seamlessly.
                  </p>
                </div>
                <div className="md:w-[40%] bg-gray-100 min-h-[250px] flex items-center justify-center">
                  <ImagePlaceholder />
                </div>
              </div>
            </div>

            {/* Card 3 — 100+ Payment Options (image left, text right) */}
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-[40%] bg-gray-100 min-h-[250px] flex items-center justify-center">
                  <ImagePlaceholder />
                </div>
                <div className="md:w-[60%] p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="fontheading text-2xl md:text-3xl text-gray-900">100+ Payment Options</h3>
                  <p className="mt-4 text-gray-500 fontbody2 text-sm md:text-base leading-relaxed">
                    Offer your customers the flexibility to pay using their preferred method, including
                    UPI, net banking, credit/debit cards, wallets, and more. Rupeeflow Payment Links
                    ensure a smooth checkout experience for everyone, boosting customer satisfaction
                    and increasing conversions.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 — Real-Time Notifications (text left, image right) */}
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-[60%] p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="fontheading text-2xl md:text-3xl text-gray-900">Real-Time Notifications</h3>
                  <p className="mt-4 text-gray-500 fontbody2 text-sm md:text-base leading-relaxed">
                    Stay in the loop with instant alerts for every successful payment. Gain better
                    control and visibility into your transactions, enabling faster decision-making and
                    improved financial management. Receive updates across all devices to keep your
                    operations running smoothly.
                  </p>
                </div>
                <div className="md:w-[40%] bg-gray-100 min-h-[250px] flex items-center justify-center">
                  <ImagePlaceholder />
                </div>
              </div>
            </div>

            {/* Card 5 — Secure Transactions (image left, text right) */}
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-[40%] bg-gray-100 min-h-[250px] flex items-center justify-center">
                  <ImagePlaceholder />
                </div>
                <div className="md:w-[60%] p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="fontheading text-2xl md:text-3xl text-gray-900">Secure Transactions</h3>
                  <p className="mt-4 text-gray-500 fontbody2 text-sm md:text-base leading-relaxed">
                    Built on a foundation of PCI DSS compliance and advanced encryption protocols,
                    Rupeeflow Payment Links ensure every transaction is safe and secure. Protect
                    sensitive customer data while providing a trustworthy payment experience,
                    strengthening customer confidence in your business.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Get Started button */}
          <div className="text-center mt-14">
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-emerald-500 text-white text-sm font-semibold hover:bg-emerald-600 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-white/80" />
              Get Started
            </Link>
          </div>
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
