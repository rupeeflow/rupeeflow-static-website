'use client';

import Link from 'next/link';


export default function Hero() {
  return (
    <section className="relative w-full min-h-[100vh] sm:min-h-[90vh] bg-gradient-to-b from-[#0a2f23] via-black to-black flex items-center justify-center overflow-hidden py-8 sm:py-12 md:py-16">
     {/* Animated gradient background */}
     <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.25),transparent_60%)] pointer-events-none" />
     
     {/* Animated grid pattern */}
     <div className="absolute inset-0 -z-10 opacity-20">
       <div className="absolute inset-0" style={{
         backgroundImage: `linear-gradient(rgba(16,185,129,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.1) 1px, transparent 1px)`,
         backgroundSize: '50px 50px'
       }} />
     </div>

{/* LEFT ICONS - Hidden on mobile and tablet, visible on extra large screens */}
<img
  src="/home/rupee.svg"
  className="hidden xl:block absolute left-[240px] top-[55%] w-[70px] opacity-90 animate-float"
  alt="Rupee icon"
/>

<img
  src="/payments/upi-collections.svg"
  className="hidden xl:block absolute left-[290px] top-[65%] w-[80px] opacity-90 animate-float"
  style={{ animationDelay: '0.5s' }}
  alt="UPI collections icon"
/>

{/* RIGHT ICONS - Hidden on mobile and tablet, visible on extra large screens */}
<img
  src="/home/wallet.svg"
  className="hidden xl:block absolute right-[240px] top-[55%] w-[70px] opacity-90 animate-float"
  style={{ animationDelay: '1s' }}
  alt="Wallet icon"
/>

<img
  src="/home/globe.svg"
  className="hidden xl:block absolute right-[290px] top-[65%] w-[70px] opacity-90 animate-float"
  style={{ animationDelay: '1.5s' }}
  alt="Globe icon"
/>


      <div className="relative z-10 w-full max-w-full sm:max-w-5xl mx-auto text-center px-3 sm:px-6">

        {/* Pills with animation */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8 flex-wrap">
          {['Payment Gateway', 'Credits', 'Cards'].map((item, index) => (
            <span
              key={item}
              className="border border-emerald-400/40 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-emerald-300 whitespace-nowrap backdrop-blur-sm bg-emerald-950/30 hover:bg-emerald-900/40 hover:border-emerald-400/60 transition-all duration-300 cursor-pointer transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item}
            </span>
          ))}
        </div>
        

        {/* Heading with gradient text */}
      
  <h1 className="text-[1.75rem] leading-[2.25rem] sm:text-3xl sm:leading-[3rem] md:text-4xl md:leading-[3.5rem] lg:text-5xl lg:leading-[4rem] xl:text-6xl xl:leading-[4.5rem] text-white font-weight-900 mb-4 sm:mb-6">
    India's <span className="text-emerald-400 relative inline-block">
      Complete Financial
      <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-transparent opacity-50"></span>
    </span>
    <br className="hidden sm:block" />
    <span className="text-emerald-400 relative inline-block">
      Platform
      <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-transparent opacity-50"></span>
    </span> for Businesses
  </h1>




        <p className="mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
  Accept payments, Make payouts. Get instant credit – All In One App
</p>


{/* Decorative Wave - Hidden on mobile, visible on larger screens */}
<div className="hidden md:flex justify-center my-8 lg:my-10 w-full overflow-hidden">
  <img
    src="/wave1.png"
    alt="decorative wave"
    className="w-full max-w-[1200px] lg:max-w-[1800px] opacity-50"
  />
</div>


        {/* Buttons with enhanced styling */}
       
        <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
          <Link href="#" className="group relative px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full border-2 border-emerald-400 text-white text-xs sm:text-sm md:text-base transition-all duration-300 whitespace-nowrap overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span>Start Getting Paid</span>
              <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
          </Link>

          <Link href="#" className="group relative px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full border-2 border-emerald-400 text-white text-xs sm:text-sm md:text-base transition-all duration-300 whitespace-nowrap overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span>Make Bulk Payouts</span>
              <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
          </Link>

          <Link href="#" className="group relative px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xs sm:text-sm md:text-base transition-all duration-300 whitespace-nowrap hover:shadow-lg hover:shadow-emerald-500/50 transform hover:scale-105">
            <span className="flex items-center justify-center gap-2">
              <span>Get instant 5L Credit</span>
              <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
          </Link>
        </div>
        
        

        


        {/* Stats - Enhanced with 2-1 layout */}
<div className="mt-10 sm:mt-14 md:mt-16 space-y-4 sm:space-y-6">
  
  {/* Top row - 2 stats */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
    
    <div className="group relative auto-hover border-2 border-emerald-400/60 rounded-2xl p-5 sm:p-6 md:p-7 transition-all duration-500 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-500/20 bg-gradient-to-br from-emerald-950/40 to-transparent backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative">
        <div className="flex items-center justify-center mb-2">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center mb-2">
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </div>
        <h3 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold mb-2">100K+</h3>
        <p className="text-gray-400 text-xs sm:text-sm md:text-base">Businesses Onboard</p>
      </div>
    </div>

    <div className="group relative auto-hover border-2 border-emerald-400/60 rounded-2xl p-5 sm:p-6 md:p-7 transition-all duration-500 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-500/20 bg-gradient-to-br from-emerald-950/40 to-transparent backdrop-blur-sm" style={{ animationDelay: '0.2s' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative">
        <div className="flex items-center justify-center mb-2">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center mb-2">
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <h3 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold mb-2">150 Cr+</h3>
        <p className="text-gray-400 text-xs sm:text-sm md:text-base">Credit Disbursed</p>
      </div>
    </div>

  </div>

  {/* Bottom row - 1 stat centered */}
  <div className="flex justify-center">
    <div className="group relative auto-hover border-2 border-emerald-400/60 rounded-2xl p-5 sm:p-6 md:p-7 transition-all duration-500 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-500/20 bg-gradient-to-br from-emerald-950/40 to-transparent backdrop-blur-sm w-full sm:w-auto sm:min-w-[300px] md:min-w-[350px]" style={{ animationDelay: '0.4s' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative">
        <div className="flex items-center justify-center mb-2">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center mb-2">
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </div>
        </div>
        <h3 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold mb-2">50+</h3>
        <p className="text-gray-400 text-xs sm:text-sm md:text-base">Partnerships</p>
      </div>
    </div>
  </div>

</div>

        
      </div>
    </section>
  );
}
