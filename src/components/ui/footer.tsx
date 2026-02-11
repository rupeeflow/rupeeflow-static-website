'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaXTwitter, FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-[#020d09] via-[#061613] to-[#020d09] text-gray-300">

      {/* MAIN */}
      <div className="max-w-[1600px] mx-auto px-20 py-20 grid grid-cols-1 lg:grid-cols-6 gap-12 border-b border-white/10">

        {/* BRAND */}
        <div className="col-span-2">
          <Image src="/rflogo-darkbg.svg" alt="RupeeFlow" width={220} height={48} />

          <p className="text-sm text-gray-400 mt-6 max-w-xs">
            Providing Indian Businesses and NRIs better financial solutions.
          </p>

          <Link
            href="https://play.google.com"
            target="_blank"
            className="inline-flex items-center gap-3 border border-emerald-400 rounded-lg px-6 py-3 mt-8 hover:bg-emerald-400/10 transition"
          >
            <Image src="/icons/google-play.png" alt="" width={22} height={22} />
            <span className="font-semibold text-white text-sm">DOWNLOAD THE APP</span>
          </Link>
        </div>

        {/* COLLECT */}
        <FooterColumn title="Collect Payment" items={[
          'Payment Gateway','Payment Links','Payment Button','Payment Page',
          'UPI Payments','QR Code','Auto Collect','e-NACH',
          'Instant Settlements','Affordability Suite'
        ]} />

        {/* MAKE */}
        <FooterColumn title="Make Payments" items={[
          'Business Bill Payments','Vendor Payment','Rental Payment',
          'Invoice Management','Payroll Processing','Bulk Pay',
          'Vendor Management','GST Payment','Payable Analytics'
        ]} />

        {/* RESOURCES */}
        <FooterColumn title="Resources" items={[
          'Blogs','Case Studies','API Docs','Pricing','Help Center'
        ]} />

        {/* COMPANY */}
        <FooterColumn title="Company" items={[
          'About Us','Careers','Media Coverage','Contact Us','Corporate Information'
        ]} />

      </div>

      {/* SECOND ROW */}
      <div className="max-w-[1600px] mx-auto px-20 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10">

        <FooterColumn title="Get Credit" items={[
          'Merchant Cash Advance','NRI Loans','Invoice Financing',
          'Credit Line','Education Loans'
        ]} />

        <FooterColumn title="Partnerships" items={[
          'For Banks','Affiliate Program','Co-branded Cards',
          'Co-branded Digital Wallet','Payment Gateway','Bharat Connect'
        ]} />

        <FooterColumn title="Legal" items={[
          'Terms & Conditions','Privacy Policy','Refund Policy','Fair Practices'
        ]} />

      </div>

      {/* BOTTOM */}
      <div className="max-w-[1600px] mx-auto px-20 py-6 flex justify-between items-center text-sm text-gray-400">

        <p>© 2025 RupeeFlow. All Rights Reserved.</p>

        <div className="flex gap-4">
          {[FaXTwitter, FaLinkedinIn, FaFacebookF, FaInstagram].map((Icon, i) => (
            <Link key={i} href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 hover:bg-emerald-500/20">
              <Icon className="text-white w-4 h-4" />
            </Link>
          ))}
        </div>

      </div>
    </footer>
  )
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-white mb-6 font-semibold">{title}</h4>

      <ul className="space-y-3 text-sm">
        {items.map(i => (
          <li key={i} className="hover:text-emerald-400 cursor-pointer">
            {i}
          </li>
        ))}
      </ul>
    </div>
  )
}
