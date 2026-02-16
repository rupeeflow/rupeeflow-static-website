'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-[1000px] bg-gradient-to-b from-[#020506] via-black to-black ">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.35),transparent_60%)]" />

      {/* Content Wrapper */}
      <div className="max-w-6xl mx-auto text-center pt-40 px-6 relative z-10">

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl  text-white leading-tight font-weight-100">
          Accept Payments with cutting edge <br />
          <span className="bg-gradient-to-r from-[#53BEC2] to-[#00EF64] bg-clip-text text-transparent">
  Payment Gateway
</span>

        </h1>

        {/* Sub Text */}
        <p className="mt-6  text-gray-400 max-w-2xl mx-auto">
          Accept online payments instantly with a RBI-authorized payment gateway, 
          <br>
          </br>whether you are a NRI, SMB or a vendor. From Anyone, Anywhere.
        </p>

        {/* ICON ROW */}
        <div className="mt-12 flex justify-center gap-16 md:gap-24">
          <Feature icon="/uptime.svg" text="99.9% Uptime" />
          <Feature icon="/speed.svg" text="< 2 Sec Processing" />
          <Feature icon="/settlement.svg" text="Instant Settlement" />
          <Feature icon="/support.svg" text="24/7 Support" />
        </div>

        {/* Buttons */}
        <div className="mt-12 flex justify-center gap-6">
          <Link
            href="#"
            className="px-12 py-3 mt-6 rounded-full bg-emerald-500 text-black font-semibold hover:opacity-90 transition"
          >
            Start Accepting Payments
          </Link>

          <Link
            href="#"
            className="px-8 py-3 mt-6 rounded-full border border-emerald-500 text-white hover:bg-emerald-500/10 transition"
          >
            Documentation
          </Link>
        </div>
      </div>

      {/* Dashboard Image */}
      <div className="absolute -bottom-[60px] left-1/2 -translate-x-1/2 z-20">
        <Image
          src="/Dashboard 2.svg"
          alt="dashboard"
          width={680}
          height={390}
          className="rounded-xl shadow-xl"
        />
      </div>

      {/* Mobile Image */}
      <div className="absolute -bottom-[152px] right-[27%] z-30">
        <Image
          src="/image 11.svg"
          alt="mobile"
          width={220}
          height={360}
        />
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <img
          src="/wave.png"
          alt="wave"
          className="w-full scale-110"
        />
      </div>

    </section>
  )
}

/* Feature Component */
function Feature({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <img
        src={icon}
        alt={text}
        className="w-10 h-10 object-contain"
      />
      <p className="text-sm text-gray-400">{text}</p>
    </div>
  )
}
