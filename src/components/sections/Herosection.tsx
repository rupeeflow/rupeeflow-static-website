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
        
        {/* Navigation Pills */}
        <div className="flex gap-3 mb-8 opacity-0 animate-fade-in-up">
          <Link href="/credit" className="px-6 py-2 rounded-full border border-[#30f3bc]/40 text-[#30f3bc] font-inter text-sm hover:bg-[#30f3bc]/10 transition-all duration-300">
            Credits
          </Link>
          <Link href="/lending" className="px-6 py-2 rounded-full border border-[#30f3bc]/40 text-[#30f3bc] font-inter text-sm hover:bg-[#30f3bc]/10 transition-all duration-300">
            Lending
          </Link>
        </div>

        {/* Heading */}
        {/* <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#ffffff] text-center max-w-5xl opacity-0 animate-fade-in-up px-4 leading-tight">
          <span className="block">Bank on <span className="text-[#25D366]">WhatsApp</span> In <span className="text-[#F5A623]">Hindi</span></span>
          <span className="block">In Seconds</span>
        </h1> */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#ffffff] text-center max-w-5xl opacity-0 animate-fade-in-up px-4 leading-tight">
          <span className="block">India's <span className="text-[#30f3bc]">Complete Financial</span></span>
          <span className="block"><span className="text-[#30f3bc]">Platform</span> for Businesses</span>
        </h1>

        {/* Subtext */}
        <p className="mt-3 sm:mt-4 lg:mt-6 text-sm sm:text-base lg:text-lg text-gray-400 text-center max-w-3xl opacity-0 animate-fade-in-up-delayed px-4">
          Accept payments, Make payouts, Get instant credit - All In One App
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
            href="https://wa.me/919876543210?text=Hi, I want to start banking on WhatsApp"
            className="relative px-8 sm:px-12 lg:px-16 py-4 sm:py-5 rounded-full bg-[#25D366] text-white font-jakarta font-bold text-base sm:text-lg transition-all duration-300 hover:bg-[#128C7E] hover:scale-105 hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] overflow-hidden group text-center"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Banking on WhatsApp
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
            {/* Shimmer effect */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
          </Link>

          <button
            onClick={() => {
              const demoSection = document.getElementById('demo-section')
              demoSection?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="relative px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full bg-transparent border-2 border-white text-white font-jakarta font-semibold text-base sm:text-lg transition-all duration-300 hover:bg-white/10 hover:scale-105 text-center"
          >
            <span className="flex items-center gap-2">
              See How It Works
              <span className="inline-block">↓</span>
            </span>
          </button>
        </div>

        {/* Stats Cards - 4 Cards in a Row with Dividers */}
        <div className="flex flex-wrap justify-center items-stretch gap-0 max-w-5xl w-full mb-0 px-4 opacity-0 animate-fade-in-up-stagger-1">
          <div className="relative bg-white/[0.08] backdrop-blur-sm rounded-l-2xl px-4 sm:px-6 py-6 sm:py-8 flex-1 min-w-[140px] transition-all duration-300 hover:bg-white/[0.12]">
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-jakarta font-bold text-white leading-tight mb-2">
                500+
              </h3>
              <p className="text-xs sm:text-sm font-inter text-gray-300">
                Businesses
              </p>
            </div>
          </div>

          <div className="w-[1px] bg-white/20 self-stretch"></div>

          <div className="relative bg-white/[0.08] backdrop-blur-sm px-4 sm:px-6 py-6 sm:py-8 flex-1 min-w-[140px] transition-all duration-300 hover:bg-white/[0.12]">
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-jakarta font-bold text-white leading-tight mb-2">
                10 Cr+
              </h3>
              <p className="text-xs sm:text-sm font-inter text-gray-300">
                Credit Disbursed
              </p>
            </div>
          </div>

          <div className="w-[1px] bg-white/20 self-stretch"></div>

          <div className="relative bg-white/[0.08] backdrop-blur-sm px-4 sm:px-6 py-6 sm:py-8 flex-1 min-w-[140px] transition-all duration-300 hover:bg-white/[0.12]">
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-jakarta font-bold text-white leading-tight mb-2">
                12
              </h3>
              <p className="text-xs sm:text-sm font-inter text-gray-300">
                Indian Languages
              </p>
            </div>
          </div>

          <div className="w-[1px] bg-white/20 self-stretch"></div>

          <div className="relative bg-white/[0.08] backdrop-blur-sm rounded-r-2xl px-4 sm:px-6 py-6 sm:py-8 flex-1 min-w-[140px] transition-all duration-300 hover:bg-white/[0.12]">
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-jakarta font-bold text-white leading-tight mb-2">
                150 Cr+
              </h3>
              <p className="text-xs sm:text-sm font-inter text-gray-300">
                Payments Processed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}