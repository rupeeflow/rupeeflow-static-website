'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [showSolutions, setShowSolutions] = useState(false)
  const [showDev, setShowDev] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  // Scroll effect for background
  useEffect(() => {
    const handleScroll = () =>
      setScrolled(window.scrollY > window.innerHeight * 0.8)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [mobileMenuOpen])

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header className="flex fixed top-0 z-[99] w-full justify-center">
      <div
        className={`flex transition-all duration-300 ${
          scrolled
            ? 'w-full bg-white/90 shadow-md backdrop-blur-md'
            : 'w-[90%] bg-white rounded-2xl mt-4'
        } mx-auto items-center justify-between px-6`}
        style={{ maxWidth: scrolled ? '100%' : '1200px' }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 hover:translate-x-2 transition duration-200 ease-in-out"
        >
          <Image src="/rflogowhitebg.svg" alt="Logo" width={180} height={36} />
        </Link>

        {/* Desktop Nav (only on large screens) */}
        <nav className="hidden lg:flex space-x-8 text-sm fontbody relative">
          <Link
            href="/product"
            className={`transition-colors flex items-center h-14 ${
              isActive('/product')
                ? 'text-emerald-600 pb-1'
                : 'text-black hover:text-emerald-600'
            }`}
          >
            PRODUCT
          </Link>

          {/* SOLUTIONS */}
          <div
            className="relative"
            onMouseEnter={() => setShowSolutions(true)}
            onMouseLeave={() => setShowSolutions(false)}
          >
            <button
              className={`group flex items-center h-14 gap-1 transition-colors ${
                showSolutions
                  ? 'text-emerald-600 pb-1'
                  : 'text-black hover:text-emerald-600'
              }`}
            >
              SOLUTIONS{' '}
              <ChevronDown
                strokeWidth={2.5}
                className="w-5 h-5 group-hover:rotate-180 duration-300 ease-in-out"
              />
            </button>
            {showSolutions && (
              <div className="absolute top-full left-0 bg-white overflow-hidden shadow-lg rounded-lg border border-gray-200 w-48 z-50">
                <ul className="flex flex-col text-sm text-gray-800">
                  {[
                    ['kirana', 'Kirana'],
                    ['neft', 'NEFT Payment'],
                    ['imps', 'IMPS Payment'],
                    ['aeps', 'AEPS'],
                    ['dmt', 'DMT'],
                    ['upi-switch', 'UPI Switch'],
                    ['verification', 'Verification'],
                  ].map(([path, label]) => (
                    <li key={path}>
                      <Link
                        href={`/solutions/${path}`}
                        className="block px-4 py-2 hover:bg-gray-50 hover:text-emerald-600"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Link
            href="/pricing"
            className={`transition-colors flex items-center h-14 ${
              isActive('/pricing')
                ? 'text-emerald-600 pb-1'
                : 'text-black hover:text-emerald-600'
            }`}
          >
            PRICING
          </Link>

          {/* DEV */}
          <div
            className="relative"
            onMouseEnter={() => setShowDev(true)}
            onMouseLeave={() => setShowDev(false)}
          >
            <button
              className={`group flex items-center h-14 gap-1 transition-colors ${
                showDev
                  ? 'text-emerald-600 pb-1'
                  : 'text-black hover:text-emerald-600'
              }`}
            >
              DEV{' '}
              <ChevronDown
                strokeWidth={2.5}
                className="w-5 h-5 group-hover:rotate-180 duration-300 ease-in-out"
              />
            </button>
            {showDev && (
              <div className="absolute top-full overflow-hidden left-0 bg-white shadow-lg rounded-lg border border-gray-200 w-48 z-50">
                <ul className="flex flex-col text-sm text-gray-800">
                  {[
                    ['/comingsoon', 'API Documentation'],
                    ['/comingsoon', 'SDK Downloads'],
                    ['/comingsoon', 'Developer Support'],
                  ].map(([path, label]) => (
                    <li key={label}>
                      <Link
                        href={path}
                        className="block px-4 py-2 hover:bg-gray-50 hover:text-emerald-600"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Link
            href="/blog"
            className={`transition-colors flex items-center h-14 ${
              isActive('/blog')
                ? 'text-emerald-600 pb-1'
                : 'text-black hover:text-emerald-600'
            }`}
          >
            BLOG
          </Link>

          <Link
            href="/support"
            className={`transition-colors flex items-center h-14 ${
              isActive('/support')
                ? 'text-emerald-600 pb-1'
                : 'text-black hover:text-emerald-600'
            }`}
          >
            SUPPORT
          </Link>
        </nav>

        {/* Desktop Buttons (only on large screens) */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            href="/login"
            className="px-5 py-1.5 border border-emerald-600 rounded-full text-sm font-semibold hover:bg-emerald-50 transition"
          >
            LOGIN
          </Link>
          <Link
            href="/signup"
            className="px-5 py-1.5 bg-emerald-600 text-white rounded-full text-sm font-semibold hover:bg-emerald-700 transition"
          >
            SIGN UP
          </Link>
        </div>

        {/* Mobile + Tablet Hamburger Menu */}
        <button
          className="lg:hidden p-2 rounded-md border border-gray-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="text-lg">☰</span>
        </button>
      </div>
      {/* Mobile Menu */}
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="absolute top-0 right-0 w-3/4 sm:w-1/2 h-[100vh] bg-white shadow-lg border-t border-gray-200 flex flex-col items-start px-6 pt-16 pb-8 space-y-4 text-sm font-semibold lg:hidden z-[98] overflow-y-auto "
        >
          {/* Close Button */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>

          {/* PRODUCT */}
          <Link
            href="/product"
            className="text-black hover:text-emerald-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            PRODUCT
          </Link>

          {/* SOLUTIONS */}
          <div className="w-full">
            <button
              onClick={() => setShowSolutions(!showSolutions)}
              className="flex items-center justify-between w-full text-black hover:text-emerald-600"
            >
              SOLUTIONS
              <ChevronDown
                className={`w-5 h-5 transform transition-transform ${
                  showSolutions ? 'rotate-180' : ''
                }`}
              />
            </button>

            {showSolutions && (
              <ul className="ml-4 mt-2 space-y-2 text-gray-700">
                {[
                  ['kirana', 'Kirana'],
                  ['neft', 'NEFT Payment'],
                  ['imps', 'IMPS Payment'],
                  ['aeps', 'AEPS'],
                  ['dmt', 'DMT'],
                  ['upi-switch', 'UPI Switch'],
                  ['verification', 'Verification'],
                ].map(([path, label]) => (
                  <li key={path}>
                    <Link
                      href={`/solutions/${path}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 hover:text-emerald-600"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* PRICING */}
          <Link
            href="/pricing"
            className="text-black hover:text-emerald-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            PRICING
          </Link>

          {/* DEV */}
          <div className="w-full">
            <button
              onClick={() => setShowDev(!showDev)}
              className="flex items-center justify-between w-full text-black hover:text-emerald-600"
            >
              DEV
              <ChevronDown
                className={`w-5 h-5 transform transition-transform ${
                  showDev ? 'rotate-180' : ''
                }`}
              />
            </button>

            {showDev && (
              <ul className="ml-4 mt-2 space-y-2 text-gray-700">
                {[
                  ['/comingsoon', 'API Documentation'],
                  ['/comingsoon', 'SDK Downloads'],
                  ['/comingsoon', 'Developer Support'],
                ].map(([path, label]) => (
                  <li key={label}>
                    <Link
                      href={path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 hover:text-emerald-600"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* BLOG + SUPPORT */}
          <Link
            href="/blog"
            className="text-black hover:text-emerald-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            BLOG
          </Link>

          <Link
            href="/support"
            className="text-black hover:text-emerald-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            SUPPORT
          </Link>

          {/* LOGIN + SIGNUP */}
          <div className="flex flex-col gap-2 pt-4 w-full">
            <Link
              href="/login"
              className="w-full text-center border border-emerald-600 text-emerald-700 py-2 rounded-full font-semibold hover:bg-emerald-50 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              LOGIN
            </Link>
            <Link
              href="/signup"
              className="w-full text-center bg-emerald-600 text-white py-2 rounded-full font-semibold hover:bg-emerald-700 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              SIGN UP
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
