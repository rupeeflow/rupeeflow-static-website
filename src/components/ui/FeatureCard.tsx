'use client'

import { motion } from 'motion/react'
import { useState } from 'react'
import { Check } from 'lucide-react'
import Link from 'next/link'

interface FeatureCardProps {
  title: string
  icon: React.ReactNode
  heading: string

  points: string[]
}

export default function FeatureCard({
  title,
  icon,
  heading,

  points,
}: FeatureCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      className="relative z-20 flex flex-col justify-between backdrop-blur-lg  bg-neutral-600/30
      rounded-3xl p-6 text-white  border border-white/60 hover:border-white
      w-full max-w-sm h-[56vh] group hover:shadow-[0_0_10px_rgba(34,197,94,0.3)]"
    >
      <div>
        {/* Top Badge */}
        <div className="bg-[#0E4E3A] inline-block px-4 py-1 rounded-full text-sm font-semibold mb-6">
          {title}
        </div>

        {/* Icon */}
        <motion.div
          animate={{ scale: hovered ? 0.85 : 1 }}
          className="text-6xl text-green-400 mb-4"
        >
          {icon}
        </motion.div>

        {/* Heading */}
        <h3 className="text-md text-left mb-3">{heading}</h3>

        {/* Bullet Points */}
        <ul className="flex flex-col font-thin space-y-1 gap-3 text-[0.8rem] text-left text-gray-400">
          {points.map((p, idx) => (
            <li key={idx} className="flex items-start gap-1">
              <Check className="w-4 h-4 text-green-400 mt-0.5" />
              {p}
            </li>
          ))}
        </ul>
      </div>

      {/* Explore Button */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: hovered ? 0 : 60, opacity: hovered ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className="absolute bottom-6 left-0 w-full flex justify-center"
      >
        <Link
          href="/product"
          className="cursor-pointer bg-teal-emerald hover:bg-green-600 text-white font-semibold rounded-xl px-6 py-2 transition"
        >
          EXPLORE MORE
        </Link>
      </motion.div>
    </motion.div>
  )
}
