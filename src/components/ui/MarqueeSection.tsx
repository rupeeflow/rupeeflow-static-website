'use client'

import Image from 'next/image'

export default function Marquee() {
  const logos = [
    '/rflogo-darkbg.svg',
    '/rflogo-darkbg.svg',
    '/rflogo-darkbg.svg',
    '/rflogo-darkbg.svg',
    '/rflogo-darkbg.svg',
    '/rflogo-darkbg.svg',
  ]

  return (
    <section className="w-full ">
      <div className="flex w-full overflow-hidden bg-[#181818] border-b border-gray-700 py-4  ">
        <div className="flex  flex-shrink-0 w-max animate-scroll">
          {/* Track 1 */}
          {logos.map((logo, idx) => (
            <div
              key={`track1-${idx}`}
              className="flex items-center justify-center px-12 relative"
            >
              <Image
                src={logo}
                alt="RFTech Logo"
                width={140}
                height={60}
                className="object-contain"
              />
              <span className="absolute right-0 top-1/2 -translate-y-1/2 h-12 w-[1px] bg-white/70"></span>
            </div>
          ))}

          {/* Track 2 (duplicate for seamless loop) */}
          {logos.map((logo, idx) => (
            <div
              key={`track2-${idx}`}
              className="flex items-center justify-center px-12 relative"
            >
              <Image
                src={logo}
                alt="RFTech Logo"
                width={140}
                height={60}
                className="object-contain"
              />
              <span className="absolute right-0 top-1/2 -translate-y-1/2 h-12 w-[1px] bg-white/70"></span>
            </div>
          ))}

          {/* Track 2 (duplicate for seamless loop) */}
          {logos.map((logo, idx) => (
            <div
              key={`track2-${idx}`}
              className="flex items-center justify-center px-12 relative"
            >
              <Image
                src={logo}
                alt="RFTech Logo"
                width={140}
                height={60}
                className="object-contain"
              />
              <span className="absolute right-0 top-1/2 -translate-y-1/2 h-12 w-[1px] bg-white/70"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
