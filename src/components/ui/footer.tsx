'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaXTwitter, FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa6'

const collectLinks = [
  { label: 'Payment Gateway', href: '/payment-gateway' },
  { label: 'Payment Links', href: '/payment-links' },
  { label: 'Payment Button', href: '#' },
  { label: 'Payment Page', href: '#' },
  { label: 'UPI Payments', href: '/upi-collections' },
  { label: 'QR Code', href: '#' },
  { label: 'Auto Collect', href: '#' },
  { label: 'e-NACH', href: '#' },
  { label: 'Instant Settlements', href: '#' },
]

const payLinks = [
  { label: 'Business Bill Payments', href: '#' },
  { label: 'Vendor Payment', href: '/vendor-payments' },
  { label: 'Rental Payment', href: '#' },
  { label: 'Invoice Management', href: '#' },
  { label: 'Payroll Processing', href: '#' },
  { label: 'Bulk Pay', href: '/bulk-payouts' },
  { label: 'Vendor Management', href: '#' },
  { label: 'GST Payment', href: '#' },
]

const resourceLinks = [
  { label: 'Blogs', href: '#' },
  { label: 'Case Studies', href: '#' },
  { label: 'API Docs', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'Help Center', href: '#' },
]

const companyLinks = [
  { label: 'About Us', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Media Coverage', href: '#' },
  { label: 'Contact Us', href: '#' },
  { label: 'Corporate Information', href: '#' },
]

const creditLinks = [
  { label: 'Merchant Cash Advance', href: '#' },
  { label: 'NRI Loans', href: '#' },
  { label: 'Invoice Financing', href: '#' },
  { label: 'Credit Line', href: '#' },
  { label: 'Education Loans', href: '#' },
]

const partnerLinks = [
  { label: 'For Banks', href: '#' },
  { label: 'Affiliate Program', href: '#' },
  { label: 'Co-branded Cards', href: '#' },
  { label: 'Co-branded Digital Wallet', href: '#' },
  { label: 'Payment Gateway', href: '#' },
  { label: 'Bharat Connect', href: '#' },
]

const legalLinks = [
  { label: 'Terms & Conditions', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Refund Policy', href: '#' },
  { label: 'Fair Practices', href: '#' },
]

const socials = [
  { Icon: FaXTwitter, href: '#', label: 'X / Twitter' },
  { Icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  { Icon: FaInstagram, href: '#', label: 'Instagram' },
  { Icon: FaFacebookF, href: '#', label: 'Facebook' },
  { Icon: FaYoutube, href: '#', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="w-full bg-[#0c1a13] text-gray-300">

      {/* ── Thin emerald top accent ── */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />

      {/* ── PRE-FOOTER CTA BAND ── */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-emerald-500/10 to-teal-600/20 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-sm text-emerald-400 font-semibold uppercase tracking-widest mb-2">Get Started Today</p>
            <h2 className="fontheading text-2xl md:text-3xl text-white leading-snug">
              Scale your business with<br className="hidden md:block" />{' '}
              <span className="text-emerald-400">RupeeFlow</span> payments
            </h2>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <Link
              href="#"
              className="px-7 py-3 rounded-full bg-emerald-500 text-black font-semibold text-sm hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
            >
              Start for Free
            </Link>
            <Link
              href="#"
              className="px-7 py-3 rounded-full border border-emerald-500/50 text-white font-semibold text-sm hover:bg-emerald-500/10 transition-colors"
            >
              Talk to Expert →
            </Link>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-white/[0.06]" />

      {/* ── MAIN LINK GRID ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 border-b border-white/[0.06]">

        {/* BRAND COLUMN */}
        <div className="col-span-2">
          <Image src="/rflogo-darkbg.svg" alt="RupeeFlow" width={180} height={40} className="mb-5" />

          <p className="text-sm text-gray-200 leading-relaxed max-w-[280px] mb-7">
            Providing Indian businesses and NRIs better financial solutions — fast, secure, and built for scale.
          </p>

          {/* Address pin icon shared SVG */}
          {[
            {
              label: 'Registered Office — Bangalore',
              lines: ['No. 112, AKR Tech Park,', 'Krishna Reddy Industrial Area,', 'Bommanahalli, Bangalore South,', 'Karnataka — 560068, India'],
            },
            {
              label: 'Branch Office — Hyderabad',
              lines: ['Coworkzone, 4th Floor, Plot No. 63,', 'Beside Xenex, Kavuri Hills Phase 1,', 'Jubilee Hills, Hyderabad — 500033,', 'Telangana, India'],
            },
          ].map((office) => (
            <div key={office.label} className="flex items-start gap-3 mb-5">
              <svg className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <p className="text-sm font-semibold text-gray-100 mb-1">{office.label}</p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {office.lines.map((line, i) => (
                    <span key={i}>{line}{i < office.lines.length - 1 && <br />}</span>
                  ))}
                </p>
              </div>
            </div>
          ))}

          {/* Email */}
          <div className="flex items-center gap-3 mb-6">
            <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <Link href="mailto:support@rupeeflow.co" className="text-sm text-gray-200 hover:text-emerald-400 transition-colors">
              support@rupeeflow.co
            </Link>
          </div>

          {/* App download */}
          <Link
            href="https://play.google.com"
            target="_blank"
            className="inline-flex items-center gap-2.5 border border-emerald-500/40 rounded-lg px-5 py-2.5 hover:bg-emerald-500/10 hover:border-emerald-400 transition-all duration-200 group"
          >
            <Image src="/icons/google-play.png" alt="" width={18} height={18} />
            <span className="font-semibold text-white text-xs group-hover:text-emerald-300 transition-colors">DOWNLOAD THE APP</span>
          </Link>
        </div>

        {/* COLLECT */}
        <FooterColumn title="Collect Payment" links={collectLinks} />

        {/* MAKE */}
        <FooterColumn title="Make Payments" links={payLinks} />

        {/* RESOURCES */}
        <FooterColumn title="Resources" links={resourceLinks} />

        {/* COMPANY */}
        <FooterColumn title="Company" links={companyLinks} />

      </div>

      {/* ── SECOND ROW ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-white/[0.06]">
        <FooterColumn title="Get Credit" links={creditLinks} />
        <FooterColumn title="Partnerships" links={partnerLinks} />
        <FooterColumn title="Legal" links={legalLinks} />
      </div>

      {/* ── COMPLIANCE BADGES ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 flex flex-wrap items-center gap-3 border-b border-white/[0.06]">
        {['PCI DSS', 'SSL Secured', 'ISO 27001', 'RBI Licensed', 'NPCI Certified'].map((badge) => (
          <span
            key={badge}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-200 border border-white/25 rounded-full px-3 py-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            {badge}
          </span>
        ))}
        <span className="text-xs text-gray-300 ml-auto hidden md:block">
          RUPEEFLOW FINANCE PVT LTD · CIN: U65999KA2024PTC188XXX
        </span>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

        <p className="text-sm text-gray-300">
          © {new Date().getFullYear()} RupeeFlow Finance Pvt Ltd. All Rights Reserved.
        </p>

        <div className="flex items-center gap-4 text-sm text-gray-300">
          <Link href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
          <span className="w-px h-3 bg-white/10" />
          <Link href="#" className="hover:text-emerald-400 transition-colors">Terms</Link>
          <span className="w-px h-3 bg-white/10" />
          <Link href="#" className="hover:text-emerald-400 transition-colors">Cookie Policy</Link>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-2">
          {socials.map(({ Icon, href, label }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 text-gray-400 hover:bg-emerald-500/20 hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-200"
            >
              <Icon className="w-3.5 h-3.5" />
            </Link>
          ))}
        </div>

      </div>

    </footer>
  )
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-white text-base font-semibold mb-5 tracking-wide">{title}</h4>
      <ul className="space-y-3.5">
        {links.map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              className="text-sm text-gray-300 hover:text-emerald-400 transition-colors duration-150 leading-relaxed"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
