'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaXTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa6' // ✅ modern replacements

export default function Footer() {
  const sections = [
    {
      title: 'Sitemap',
      links: [
        { label: 'Home', href: '/' },
        { label: 'Product', href: '/product' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Blog', href: '/blog' },
        { label: 'Support', href: '/support' },
      ],
    },
    {
      title: 'Product',
      links: [
        { label: 'NEFT', href: '/solutions/neft' },
        { label: 'Kirana', href: '/solutions/kirana' },
        { label: 'AEPS', href: '/solutions/aeps' },
        { label: 'DMT', href: '/solutions/dmt' },
        { label: 'IMPS', href: '/solutions/imps' },
        { label: 'Verification', href: '/solutions/verification' },
        { label: 'UPI Switch', href: '/solutions/upi-switch' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Dev Support', href: '/comingsoon' },
        { label: 'Help Center', href: '/support' },
        { label: 'FAQs', href: '/faqs' },
        { label: 'Contact Us', href: '/support' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Terms & Conditions', href: '/legal/terms' },
        { label: 'Privacy Policy', href: '/legal/privacy' },
        { label: 'Cookie Policy', href: '/legal/cookies' },
        { label: 'Refund Policy', href: '/legal/refund' },
      ],
    },
  ]

  return (
    <footer className="w-full bg-black-emerald text-gray-300 pt-16 pb-8">
      <div className="w-full flex flex-col lg:flex-row justify-between border-b border-green-900/40 pb-10 px-6 md:px-20">
        {/* Left: Logo and App Download */}
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-4">
            <Image
              src="/rflogo-darkbg.svg"
              alt="RupeeFlow"
              width={300}
              height={56}
              className="object-contain"
            />
          </div>
          <p className="text-sm text-gray-400 mb-6 max-w-sm">
            Providing Indian Businesses and NRIs better financial solutions.
          </p>

          <Link
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 border border-green-500 px-4 py-2 rounded-md hover:bg-green-600/20 transition"
          >
            <Image
              src="/icons/google-play.png"
              alt="Google Play"
              width={24}
              height={24}
            />
            <span className="text-sm font-semibold text-white">
              DOWNLOAD THE APP
            </span>
          </Link>
        </div>

        {/* Right: Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 flex-1 mt-10 lg:mt-0">
          {sections.map(section => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm">
                {section.links.map(link => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-green-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="w-full mt-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400 px-6 md:px-16">
        <p className="text-center md:text-left">
          © 2025 RupeeFlow. All Rights Reserved.
        </p>

        <p className="text-xs italic text-center md:text-left max-w-sm">
          Disclaimer: UPI services powered by NPCI. All transactions are secured
          and regulated under RBI guidelines.
        </p>

        {/* Social Links */}
        <div className="flex space-x-4">
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-full hover:bg-green-500/20 transition"
          >
            <FaXTwitter className="w-4 h-4 text-white" />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-full hover:bg-green-500/20 transition"
          >
            <FaLinkedinIn className="w-4 h-4 text-white" />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-full hover:bg-green-500/20 transition"
          >
            <FaInstagram className="w-4 h-4 text-white" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
