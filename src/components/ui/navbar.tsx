'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/product', label: 'PRODUCT' },
    { href: '/pricing', label: 'PRICING' },
    { href: '/about', label: 'ABOUT' },
    { href: '/support', label: 'SUPPORT' },
  ]

  return (
    <header className="flex fixed top-0 z-[99] w-full justify-center">
      <div
        className={`flex transition-all duration-300 ${
          scrolled
            ? 'w-full bg-white/90 shadow-md backdrop-blur-md'
            : 'w-[90%] md:w-[80%] bg-white rounded-2xl mt-4'
        } mx-auto flex items-center justify-between px-6 py-3`}
        style={{
          maxWidth: scrolled ? '100%' : '1200px',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 hover:translate-x-2 transition duration-200 ease-in-out"
        >
          <Image src="/rflogowhitebg.svg" alt="Logo" width={200} height={40} />
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-8 text-sm font-semibold">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`transition-colors ${
                  isActive
                    ? 'text-emerald-600  pb-1'
                    : 'text-black hover:text-emerald-600'
                }`}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-4">
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

        {/* Mobile Menu Placeholder */}
        <button className="md:hidden p-2 rounded-md border border-gray-300">
          <span className="sr-only">Open menu</span>☰
        </button>
      </div>
    </header>
  )
}
