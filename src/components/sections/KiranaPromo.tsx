'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function KiranaPromo() {
  return (
    <section className="relative bg-black text-white py-24 px-6 overflow-hidden">
      {/* Gradient glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(16,185,129,0.2),transparent_70%)] blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-between gap-12 lg:gap-14">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center  lg:text-left"
        >
          <h2 className="fontheadingthin text-4xl md:text-6xl text-center mb-8 leading-tight">
            Empowering Bharat’s Small Businesses with <br />
            <span className=" fontheading2 text-gradient-teal-emerald">
              RupeeFlow Kirana
            </span>
          </h2>

          <p className=" text-gray-300  text-md text-center  max-w-4xl mx-auto lg:mx-0">
            The first offline-first <strong>UPI POS Lite</strong> app for small
            merchants, kirana stores, and tea stalls. Accept payments anytime
            even without internet, with voice, QR, and NFC. Built for Bharat’s
            60M+ small vendors.
          </p>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 w-full lg:w-1/2 relative"
        >
          <div className="rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">
            <Image
              src="/images/kirana-promo.png"
              alt="Shopkeeper using RupeeFlow Kirana UPI POS"
              width={800}
              height={500}
              className="object-cover w-full h-full rounded-[2rem]"
              priority
            />
          </div>
        </motion.div>
        <Link
          href="/solutions/kirana"
          className="inline-block px-8 py-3 rounded-full bg-teal-emerald-dark text-white font-semibold text-md md:text-base md:text-lg transition"
        >
          Know More About Kirana →
        </Link>
      </div>
    </section>
  )
}
