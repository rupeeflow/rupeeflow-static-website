'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  const sections = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '/features' },
        { label: 'Solutions', href: '/solutions' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'For Businesses', href: '/business' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Blog', href: '/blog' },
        { label: 'Careers', href: '/careers' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', href: '/help' },
        { label: 'FAQs', href: '/faqs' },
        { label: 'Contact Us', href: '/contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Terms & Conditions', href: '/terms' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Cookie Policy', href: '/cookies' },
        { label: 'Refund Policy', href: '/refund' },
      ],
    },
  ]

  return (
    <footer className="w-full bg-black-emerald text-gray-300 pt-16 pb-8">
      <div className="w-full flex flex-col lg:flex-row justify-between border-b border-green-900/40 pb-10 px-20">
        {/* Left: Logo and App Download */}
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-4">
            <Image
              src="/rflogo-darkbg.svg" // Replace with your logo file
              alt="RupeeFlow"
              width={300}
              height={56}
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
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 flex-1">
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
      <div className="w-full mt-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400 px-16">
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
            <Twitter className="w-4 h-4 text-white" />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-full hover:bg-green-500/20 transition"
          >
            <Linkedin className="w-4 h-4 text-white" />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-full hover:bg-green-500/20 transition"
          >
            <Instagram className="w-4 h-4 text-white" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
