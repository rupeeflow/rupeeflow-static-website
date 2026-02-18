'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen h-screen bg-gradient-to-b from-[#020506] via-[#0a1a15] to-[#020506] overflow-visible">
      {/* Background Glows */}
      <div className="absolute top-[-200px] left-[-200px] w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(3,151,137,0.2),transparent_60%)] pointer-events-none animate-glow-pulse" />
      <div className="absolute bottom-[-100px] right-[10%] w-[900px] h-[900px] bg-[radial-gradient(circle_at_center,rgba(48,243,188,0.18),transparent_60%)] pointer-events-none z-0 animate-glow-pulse-delayed" />

      {/* Decorative Icons - Hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none z-20 hidden lg:block">
        {/* Left Side Icons */}
        <img
          src="/home/rupee.svg"
          className="absolute left-[4%] top-[42%] w-[60px] lg:w-[85px] opacity-0 animate-slide-in-left"
          alt="Rupee icon"
        />
        <img
          src="/payments/upi-collections.svg"
          className="absolute left-[9%] top-[54%] w-[70px] lg:w-[95px] opacity-0 animate-slide-in-left-delayed"
          alt="UPI icon"
        />

        {/* UPI Text */}
        <div className="absolute left-[11%] top-[60%] text-[#ffffff] text-xl lg:text-2xl font-bold opacity-0 animate-fade-in-delayed">
          UPI
        </div>

        {/* Right Side Icons */}
        <img
          src="/home/wallet.svg"
          className="absolute right-[4%] top-[42%] w-[60px] lg:w-[85px] opacity-0 animate-slide-in-right"
          alt="Wallet icon"
        />
        <img
          src="/home/globe.svg"
          className="absolute right-[8%] top-[54%] w-[60px] lg:w-[85px] opacity-0 animate-slide-in-right-delayed"
          alt="Globe icon"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[100vh] px-4 sm:px-6 pt-16 sm:pt-20 sm:pb-32">
        {/* Pills */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-4 sm:mb-6 flex-wrap opacity-0 animate-fade-in mt-6">
          {['Payment Gateway', 'Credits', 'Lending'].map(item => (
            <span
              key={item}
              className="border border-[#029789]/50 bg-[#029789]/10 rounded-full px-3 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-xs text-[#30f3bc] backdrop-blur-sm"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-[#ffffff] font-bold leading-tight text-center max-w-5xl opacity-0 animate-fade-in-up px-4">
          India&apos;s{' '}
          <span className="text-[#30f3bc]">Complete Financial</span>
          <br />
          <span className="text-[#30f3bc]">Platform</span> for Businesses
        </h1>

        {/* Subtext */}
        <p className="mt-4 sm:mt-6 text-gray-400 text-sm sm:text-base lg:text-lg text-center max-w-3xl opacity-0 animate-fade-in-up-delayed px-4">
          Accept payments, Make payouts. Get instant credit – All In One App
        </p>

        {/* Decorative Frame */}
        <div className="w-full max-w-[98vw] -mt-4 sm:-mt-6 lg:-mt-36 mb-6 sm:mb-8 opacity-0 animate-scale-in">
          <img
            src="/Frame.svg"
            alt="decorative wave"
            className="w-full h-auto"
          />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 opacity-0 animate-fade-in-stagger px-4">
          <Link
            href="#"
            className="relative px-5 sm:px-8 py-2.5 sm:py-3 rounded-full bg-transparent text-[#ffffff] transition-all duration-300 text-xs sm:text-sm hover:scale-105 overflow-hidden group"
          >
            <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#53BEC2] via-[#00EF64] to-[#53BEC2] bg-[length:200%_100%] animate-border-flow">
              <span className="flex h-full w-full items-center justify-center rounded-full bg-[#020506] group-hover:bg-[#01222D] transition-colors duration-300"></span>
            </span>
            <span className="relative z-10">Start Getting Paid</span>
          </Link>

          <Link
            href="#"
            className="relative px-5 sm:px-8 py-2.5 sm:py-3 rounded-full bg-transparent text-[#ffffff] transition-all duration-300 text-xs sm:text-sm hover:scale-105 overflow-hidden group"
          >
            <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#53BEC2] via-[#00EF64] to-[#53BEC2] bg-[length:200%_100%] animate-border-flow-delayed">
              <span className="flex h-full w-full items-center justify-center rounded-full bg-[#020506] group-hover:bg-[#01222D] transition-colors duration-300"></span>
            </span>
            <span className="relative z-10">Make Bulk Payouts</span>
          </Link>

          <Link
            href="#"
            className="relative px-5 sm:px-8 py-2.5 sm:py-3 rounded-full bg-transparent text-[#ffffff] transition-all duration-300 text-xs sm:text-sm hover:scale-105 overflow-hidden group"
          >
            <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#53BEC2] via-[#00EF64] to-[#53BEC2] bg-[length:200%_100%] animate-border-flow-delayed-2">
              <span className="flex h-full w-full items-center justify-center rounded-full bg-[#020506] group-hover:bg-[#01222D] transition-colors duration-300"></span>
            </span>
            <span className="relative z-10">Get instant 5L Credit</span>
          </Link>
        </div>

        {/* Stats Cards - Modern Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl w-full mb-12 sm:mb-16 px-4">
          <div className="group relative overflow-hidden border border-[#029789]/30 bg-gradient-to-br from-[#020506]/80 to-[#029789]/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:border-[#30f3bc]/50 hover:shadow-[0_0_30px_rgba(48,243,188,0.15)] opacity-0 animate-fade-in-up-stagger-1">
            <div className="absolute inset-0 bg-gradient-to-br from-[#30f3bc]/0 to-[#30f3bc]/0 group-hover:from-[#30f3bc]/5 group-hover:to-[#029789]/5 transition-all duration-500" />
            <div className="relative">
              <h3 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#ffffff] to-[#30f3bc] bg-clip-text text-transparent">
                100K+
              </h3>
              <p className="text-gray-400 mt-2 sm:mt-3 text-xs sm:text-sm">
                Businesses Onboard
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden border border-[#029789]/30 bg-gradient-to-br from-[#020506]/80 to-[#029789]/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:border-[#30f3bc]/50 hover:shadow-[0_0_30px_rgba(48,243,188,0.15)] opacity-0 animate-fade-in-up-stagger-2 sm:col-span-2 md:col-span-1">
            <div className="absolute inset-0 bg-gradient-to-br from-[#30f3bc]/0 to-[#30f3bc]/0 group-hover:from-[#30f3bc]/5 group-hover:to-[#029789]/5 transition-all duration-500" />
            <div className="relative">
              <h3 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#ffffff] to-[#30f3bc] bg-clip-text text-transparent">
                150 Cr+
              </h3>
              <p className="text-gray-400 mt-2 sm:mt-3 text-xs sm:text-sm">
                Credit Disbursed
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden border border-[#029789]/30 bg-gradient-to-br from-[#020506]/80 to-[#029789]/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:border-[#30f3bc]/50 hover:shadow-[0_0_30px_rgba(48,243,188,0.15)] opacity-0 animate-fade-in-up-stagger-3 sm:col-span-2 md:col-span-1">
            <div className="absolute inset-0 bg-gradient-to-br from-[#30f3bc]/0 to-[#30f3bc]/0 group-hover:from-[#30f3bc]/5 group-hover:to-[#029789]/5 transition-all duration-500" />
            <div className="relative">
              <h3 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#ffffff] to-[#30f3bc] bg-clip-text text-transparent">
                50+
              </h3>
              <p className="text-gray-400 mt-2 sm:mt-3 text-xs sm:text-sm">
                Partnerships
              </p>
            </div>
          </div>
        </div>

        {/* Modern Animated Scroll Indicator */}
        <div className="flex flex-col items-center gap-2 sm:gap-3 opacity-0 animate-fade-in-scroll">
          <div className="relative w-[26px] sm:w-[30px] h-[44px] sm:h-[50px] border-2 border-[#029789]/60 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-2 bg-[#30f3bc] rounded-full animate-scroll-bounce" />
          </div>
          <p className="text-[#029789] text-[10px] sm:text-xs tracking-wider">
            SCROLL
          </p>
        </div>
      </div>
    </section>
  )
}
