'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaXTwitter, FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa6'

/* ── Link data ──────────────────────────────────────────── */
const collectLinks = [
  { label: 'Payment Gateway', href: '/payment-gateway' },
  { label: 'Payment Links', href: '/payment-links' },
  { label: 'Payment Button', href: '/payment-button' },
  { label: 'Payment Page', href: '/products/collections' },
  { label: 'Smart POS Machine', href: '/smart-pos' },
  { label: 'Merchant QR Code', href: '/qr-code' },
  { label: 'UPI Payments', href: '/upi-collections' },
  { label: 'Auto Collect', href: '/payment-reminders' },
  { label: 'e-NACH', href: '/comingsoon' },
  { label: 'Instant Settlements', href: '/comingsoon' },
]

const payLinks = [
  { label: 'Business Bill Payments', href: '/bill-payments' },
  { label: 'Vendor Payment', href: '/vendor-payments' },
  { label: 'Rental Payment', href: '/rental-payments' },
  { label: 'Invoice Management', href: '/invoice-management' },
  { label: 'Payroll Processing', href: '/salary-disbursements' },
  { label: 'Bulk Pay', href: '/bulk-payouts' },
  { label: 'Vendor Management', href: '/vendor-management' },
  { label: 'GST Payment', href: '/tax-payments' },
  { label: 'Payable Analytics', href: '/payable-analytics' },
]

const creditLinks = [
  { label: 'Merchant Cash Advance', href: '/merchant-cash-advance' },
  { label: 'NRI Loans', href: '/nri-emergency-loans' },
  { label: 'Invoice Financing', href: '/invoicing-financing' },
  { label: 'Credit Line', href: '/personal-credit-line' },
  { label: 'Education Loans', href: '/education-medical-loan' },
]

const partnerLinks = [
  { label: 'For Banks', href: '/partnerships/banking' },
  { label: 'Affiliate Program', href: '/partnerships/affiliates' },
  // { label: 'Co-branded Cards', href: '/business-cards' },
  // { label: 'Co-branded Digital Wallet', href: '/comingsoon' },
  { label: 'Payment Gateway', href: '/payment-gateway' },
  // { label: 'Bharat Connect', href: '/comingsoon' },
]

const resourceLinks = [
  { label: 'Blogs', href: '/blog' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'API Docs', href: '/docs' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Help Center', href: '/support' },
]

const companyLinks = [
  { label: 'About Us', href: '/comingsoon' },
  { label: 'Careers', href: '/careers' },
  { label: 'Media Coverage', href: '/comingsoon' },
  { label: 'Contact Us', href: '/support' },
  { label: 'Corporate Information', href: '/comingsoon' },
]

const legalLinks = [
  { label: 'Terms & Conditions', href: '/legal/terms' },
  { label: 'Privacy Policy', href: '/legal/privacy' },
  { label: 'Refund Policy', href: '/legal/refund' },
  { label: 'Fair Practices', href: '/comingsoon' },
]

const socials = [
  { Icon: FaXTwitter, href: '#', label: 'X / Twitter' },
  { Icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  { Icon: FaInstagram, href: '#', label: 'Instagram' },
  { Icon: FaFacebookF, href: '#', label: 'Facebook' },
  { Icon: FaYoutube, href: '#', label: 'YouTube' },
]

// const badges = ['PCI DSS', 'SSL Secured', 'ISO 27001', 'RBI Licensed', 'NPCI Certified']

/* ── Reusable link-group block ─────────────────────────── */
function FooterGroup({
  title,
  links,
  className = '',
}: {
  title: string
  links: { label: string; href: string }[]
  className?: string
}) {
  return (
    <div className={className}>
      <h4 className="text-[11px] font-bold uppercase tracking-[0.12em] text-emerald-400 mb-4">
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              className="text-sm text-gray-300 hover:text-white transition-colors duration-150 leading-relaxed"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ── Footer ────────────────────────────────────────────── */
export default function Footer() {
  return (
    <footer className="w-full bg-[#0c1a13] text-gray-300">

      {/* Thin emerald top accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />

      {/* ── CTA BAND ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/[0.06]">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-emerald-400 mb-1">
            Get Started Today
          </p>
          <h2 className="fontheading text-2xl md:text-3xl text-white leading-snug">
            Scale your business with{' '}
            <span className="text-emerald-400">RupeeFlow</span> payments
          </h2>
        </div>
        <div className="flex flex-wrap gap-3 shrink-0">
          <Link
            href="#"
            className="px-6 py-2.5 rounded-full bg-emerald-500 text-black font-semibold text-sm hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
          >
            Start for Free
          </Link>
          <Link
            href="/support"
            className="px-6 py-2.5 rounded-full border border-emerald-500/70 text-white font-semibold text-sm hover:bg-emerald-500/10 transition-colors"
          >
            Talk to Expert →
          </Link>
        </div>
      </div>

      {/* ── MAIN LINK GRID ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[2fr_1.1fr_1.1fr_1.1fr_1.1fr] gap-x-8 gap-y-10 border-b border-white/[0.06]">

        {/* ── BRAND COLUMN ── */}
        <div className="col-span-2 md:col-span-1">
          <Image src="/rflogo-darkbg.svg" alt="RupeeFlow" width={160} height={36} className="mb-4" />

          <p className="text-sm text-gray-300 leading-relaxed max-w-[260px] mb-6">
            Providing Indian businesses and NRIs better financial solutions — fast, secure, and built for scale.
          </p>

          {/* Offices */}
          {[
            {
              label: 'Registered Office — Bangalore',
              lines: ['No. 112, AKR Tech Park,', 'Bommanahalli, Bangalore South,', 'Karnataka — 560068, India'],
            },
            {
              label: 'Branch Office — Hyderabad',
              lines: ['Coworkzone, 4th Floor, Plot No. 63,', 'Jubilee Hills, Hyderabad — 500033,', 'Telangana, India'],
            },
          ].map((office) => (
            <div key={office.label} className="flex items-start gap-2.5 mb-4">
              <svg className="w-3.5 h-3.5 text-emerald-500 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <p className="text-xs font-semibold text-gray-100 mb-0.5">{office.label}</p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {office.lines.map((line, i) => (
                    <span key={i}>{line}{i < office.lines.length - 1 && <br />}</span>
                  ))}
                </p>
              </div>
            </div>
          ))}

          {/* Email */}
          <div className="flex items-center gap-2.5 mb-5">
            <svg className="w-3.5 h-3.5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <Link href="mailto:support@rupeeflow.co" className="text-xs text-gray-300 hover:text-emerald-400 transition-colors">
              support@rupeeflow.co
            </Link>
          </div>

          {/* App download */}
          <Link
            href="https://play.google.com"
            target="_blank"
            className="inline-flex items-center gap-2 border border-emerald-500/40 rounded-lg px-4 py-2 hover:bg-emerald-500/10 hover:border-emerald-400 transition-all duration-200 group mb-6"
          >
            <Image src="/icons/google-play.png" alt="" width={16} height={16} />
            <span className="font-semibold text-white text-[11px] tracking-wide group-hover:text-emerald-300 transition-colors">DOWNLOAD THE APP</span>
          </Link>

          {/* Compliance badges — inline pills in brand column */}
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-400 mb-2">
            Licenses &amp; Certificates
          </p>
          {/* <div className="flex flex-wrap gap-1.5">
            {badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1 text-[10px] font-semibold text-gray-300 border border-white/20 rounded-full px-2.5 py-1"
              >
                <span className="w-1 h-1 rounded-full bg-emerald-500" />
                {badge}
              </span>
            ))}
          </div> */}
        </div>

        {/* ── COL 2: COLLECT PAYMENTS ── */}
        <FooterGroup title="Collect Payments" links={collectLinks} />

        {/* ── COL 3: MAKE PAYMENTS ── */}
        <FooterGroup title="Make Payments" links={payLinks} />

        {/* ── COL 4: GET CREDIT + PARTNERSHIPS ── */}
        <div>
          <FooterGroup title="Get Credit" links={creditLinks} />
          <FooterGroup title="Partnerships" links={partnerLinks} className="mt-8" />
        </div>

        {/* ── COL 5: COMPANY + RESOURCES + LEGAL ── */}
        <div>
          <FooterGroup title="Company" links={companyLinks} />
          <FooterGroup title="Resources" links={resourceLinks} className="mt-8" />
          <FooterGroup title="Legal" links={legalLinks} className="mt-8" />
        </div>

      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-4">

        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} RupeeFlow Finance Pvt Ltd. All Rights Reserved.
          <span className="hidden md:inline ml-4 text-gray-500">CIN: U64990KA2025PTC209485</span>
        </p>

        <div className="flex items-center gap-4 text-xs text-gray-400">
          <Link href="/legal/privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
          <span className="w-px h-3 bg-white/10" />
          <Link href="/legal/terms" className="hover:text-emerald-400 transition-colors">Terms</Link>
          <span className="w-px h-3 bg-white/10" />
          <Link href="/legal/cookies" className="hover:text-emerald-400 transition-colors">Cookie Policy</Link>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-1.5">
          {socials.map(({ Icon, href, label }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              className="w-7 h-7 flex items-center justify-center rounded-full border border-white/15 text-gray-400 hover:bg-emerald-500/20 hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-200"
            >
              <Icon className="w-3 h-3" />
            </Link>
          ))}
        </div>

      </div>

    </footer>
  )
}
