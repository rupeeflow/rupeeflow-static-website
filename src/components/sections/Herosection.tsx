'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#020506] via-[#0a1a15] to-[#020506] overflow-hidden pb-0">
      {/* Background Glows */}
      <div className="absolute top-[-200px] left-[-200px] w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(3,151,137,0.2),transparent_60%)] pointer-events-none animate-glow-pulse" />
      <div className="absolute bottom-[-100px] right-[10%] w-[900px] h-[900px] bg-[radial-gradient(circle_at_center,rgba(48,243,188,0.18),transparent_60%)] pointer-events-none z-0 animate-glow-pulse-delayed" />

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-start px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-28 pb-8 sm:pb-12 lg:pb-16">
        {/* Pills */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-3 sm:mb-4 lg:mb-6 flex-wrap opacity-0 animate-fade-in mt-4 sm:mt-6">
          {['Payment Gateway', 'Credits', 'Lending'].map(item => (
            <span
              key={item}
              className="border border-[#029789]/50 bg-[#029789]/10 rounded-full px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 text-[10px] sm:text-xs text-[#30f3bc] backdrop-blur-sm"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#ffffff] text-center max-w-5xl opacity-0 animate-fade-in-up px-4 leading-tight">
          India&apos;s{' '}
          <span className="text-[#30f3bc]">Complete Financial</span>
          <br />
          <span className="text-[#30f3bc]">Platform</span> for Businesses
        </h1>

        {/* Subtext */}
        <p className="mt-3 sm:mt-4 lg:mt-6 text-sm sm:text-base lg:text-lg text-gray-400 text-center max-w-3xl opacity-0 animate-fade-in-up-delayed px-4">
          Accept payments, Make payouts. Get instant credit – All In One App
        </p>

        {/* Decorative Frame */}
        <div className="w-full max-w-[98vw] mt-2 sm:mt-0 lg:-mt-20 xl:-mt-36 mb-4 sm:mb-6 lg:mb-8 opacity-0 animate-scale-in">
          <Image
            src="/Frame.svg"
            alt="decorative wave"
            width={1920}
            height={400}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-12 opacity-0 animate-fade-in-stagger px-4">
          <Link
            href="#"
            className="relative px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-full bg-transparent text-[#ffffff] transition-all duration-300 text-xs sm:text-sm hover:scale-105 overflow-hidden group text-center"
          >
            <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#53BEC2] via-[#00EF64] to-[#53BEC2] bg-[length:200%_100%] animate-border-flow">
              <span className="flex h-full w-full items-center justify-center rounded-full bg-white group-hover:bg-white transition-colors duration-300"></span>
            </span>
            <span className="relative z-10">Start Getting Paid</span>
          </Link>

          <Link
            href="#"
            className="relative px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-full bg-transparent text-[#ffffff] transition-all duration-300 text-xs sm:text-sm hover:scale-105 overflow-hidden group text-center"
          >
            <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#53BEC2] via-[#00EF64] to-[#53BEC2] bg-[length:200%_100%] animate-border-flow-delayed">
              <span className="flex h-full w-full items-center justify-center rounded-full bg-white group-hover:bg-white transition-colors duration-300"></span>
            </span>
            <span className="relative z-10">Make Bulk Payouts</span>
          </Link>

          <Link
            href="#"
            className="relative px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-full bg-transparent text-[#ffffff] transition-all duration-300 text-xs sm:text-sm hover:scale-105 overflow-hidden group text-center"
          >
            <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#53BEC2] via-[#00EF64] to-[#53BEC2] bg-[length:200%_100%] animate-border-flow-delayed-2">
              <span className="flex h-full w-full items-center justify-center rounded-full bg-white group-hover:bg-white transition-colors duration-300"></span>
            </span>
            <span className="relative z-10">Get instant 5L Credit</span>
          </Link>
        </div>

        {/* Stats Cards - Modern Design */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-4xl w-full mb-0 px-4">
          <div className="group relative border border-[#029789]/30 bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 transition-all duration-500 hover:border-[#30f3bc]/50 hover:shadow-[0_0_30px_rgba(48,243,188,0.15)] opacity-0 animate-fade-in-up-stagger-1">
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                100K<span className="text-[#30f3bc]">+</span>
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-400 mt-1 sm:mt-2 lg:mt-3 leading-snug">
                Businesses Onboard
              </p>
            </div>
          </div>

          <div className="group relative border border-[#029789]/30 bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 transition-all duration-500 hover:border-[#30f3bc]/50 hover:shadow-[0_0_30px_rgba(48,243,188,0.15)] opacity-0 animate-fade-in-up-stagger-2">
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                10&nbsp;<span className="text-[#30f3bc]">Cr+</span>
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-400 mt-1 sm:mt-2 lg:mt-3 leading-snug">
                Credit Disbursed
              </p>
            </div>
          </div>

          <div className="group relative border border-[#029789]/30 bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 transition-all duration-500 hover:border-[#30f3bc]/50 hover:shadow-[0_0_30px_rgba(48,243,188,0.15)] opacity-0 animate-fade-in-up-stagger-3">
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                5<span className="text-[#30f3bc]">+</span>
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-400 mt-1 sm:mt-2 lg:mt-3 leading-snug">
                Partnerships
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
