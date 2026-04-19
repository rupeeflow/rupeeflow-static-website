'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaXTwitter, FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa6'

/* ── Link data ──────────────────────────────────────────── */
const whatsappBankingLinks = [
  { label: 'Send Money', href: '/whatsapp-banking' },
  { label: 'Pay Bills', href: '/whatsapp-banking' },
  { label: 'Get Credit via WhatsApp', href: '/whatsapp-banking' },
  { label: 'Check Balance', href: '/whatsapp-banking' },
  { label: 'Voice Payments', href: '/whatsapp-banking' },
  { label: 'Supported Languages', href: '/whatsapp-banking' },
]

const collectLinks = [
  { label: 'Payment Gateway', href: '/payment-gateway' },
  { label: 'Payment Links', href: '/payment-links' },
  { label: 'Payment Button', href: '/payment-button' },
  { label: 'Payment Page', href: '/products/collections' },
  { label: 'UPI Payments', href: '/upi-collections' },
  { label: 'QR Code', href: '/qr-code' },
  { label: 'Auto Collect', href: '/payment-reminders' },
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
  { label: 'About Us', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Media Coverage', href: '/media' },
  { label: 'Contact Us', href: '/support' },
  { label: 'Corporate Information', href: '/corporate' },
]

const legalLinks = [
  { label: 'Terms & Conditions', href: '/legal/terms' },
  { label: 'Privacy Policy', href: '/legal/privacy' },
  { label: 'Refund Policy', href: '/legal/refund' },
  { label: 'Fair Practices', href: '/legal/fair-practices' },
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
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[2fr_1.1fr_1.1fr_1.1fr_1.1fr_1.1fr] gap-x-8 gap-y-10 border-b border-white/[0.06]">

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

          {/* Email & WhatsApp Support */}
          <div className="flex items-center gap-2.5 mb-3">
            <svg className="w-3.5 h-3.5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <Link href="mailto:support@rupeeflow.co" className="text-xs text-gray-300 hover:text-emerald-400 transition-colors">
              support@rupeeflow.co
            </Link>
          </div>

          <div className="flex items-center gap-2.5 mb-5">
            <svg className="w-3.5 h-3.5 text-[#25D366] shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <Link href="https://wa.me/+91XXXXXXXXX" target="_blank" className="text-xs text-gray-300 hover:text-[#25D366] transition-colors">
              +91-XXXXXXXXX (WhatsApp Support)
            </Link>
          </div>

          {/* App download */}
          <Link
            href="https://play.google.com/store/apps/details?id=co.rupeeflow"
            target="_blank"
            className="inline-flex items-center gap-2 border border-emerald-500/40 rounded-lg px-4 py-2 hover:bg-emerald-500/10 hover:border-emerald-400 transition-all duration-200 group mb-6"
          >
            <Image src="/icons/google-play.png" alt="" width={16} height={16} />
            <span className="font-semibold text-white text-[11px] tracking-wide group-hover:text-emerald-300 transition-colors">DOWNLOAD THE APP</span>
          </Link>

          {/* Compliance badges — inline pills in brand column */}
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-400 mb-2">
            Compliance
          </p>
          <div className="flex flex-wrap gap-1.5">
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-gray-300 border border-white/20 rounded-full px-2.5 py-1">
              <span className="w-1 h-1 rounded-full bg-emerald-500" />
              PCI DSS Compliant
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-gray-300 border border-white/20 rounded-full px-2.5 py-1">
              <span className="w-1 h-1 rounded-full bg-emerald-500" />
              SSL Secured
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-gray-300 border border-white/20 rounded-full px-2.5 py-1">
              <span className="w-1 h-1 rounded-full bg-emerald-500" />
              ISO 27001
            </span>
          </div>
        </div>

        {/* ── COL 2: WHATSAPP BANKING ── */}
        <FooterGroup title="WhatsApp Banking" links={whatsappBankingLinks} />

        {/* ── COL 3: COLLECT PAYMENTS ── */}
        <FooterGroup title="Collect Payments" links={collectLinks} />

        {/* ── COL 4: MAKE PAYMENTS ── */}
        <FooterGroup title="Make Payments" links={payLinks} />

        {/* ── COL 5: GET CREDIT + PARTNERSHIPS ── */}
        <div>
          <FooterGroup title="Get Credit" links={creditLinks} />
          <FooterGroup title="Partnerships" links={partnerLinks} className="mt-8" />
        </div>

        {/* ── COL 6: COMPANY + RESOURCES + LEGAL ── */}
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
