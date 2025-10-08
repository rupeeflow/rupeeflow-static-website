'use client'

import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Navbar = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger)

      gsap.to('#navbar', {
        scale: 0.9,
        transformOrigin: 'center',
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: '700vh top',
          scrub: 0.6,
        },
      })
    }

    const sections = document.querySelectorAll<HTMLElement>('[data-section]')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const theme = entry.target.getAttribute('data-theme')
            setIsDark(theme === 'dark')
          }
        })
      },
      { threshold: 0.6 } // fire when 60% of a section is visible
    )

    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="flex items-center w-full h-24 p-6 border border-white fixed top-0 z-50">
      <div
        id="navbar"
        className={`flex w-full items-center justify-center h-[4rem]  rounded-lg transition-[colors, background-color] duration-300 ease-in-out ${
          isDark ? 'bg-black text-white' : 'bg-white text-black'
        }`}
      >
        <h1>Hello worls</h1>
      </div>
    </div>
  )
}

export default Navbar
