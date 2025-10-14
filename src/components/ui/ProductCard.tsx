'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface InfoCardProps {
  title: string
  description: string
  features: { icon: LucideIcon; label: string }[]
  isActive?: boolean
}

export default function InfoCard({
  title,
  description,
  features,
  isActive,
}: InfoCardProps) {
  return (
    <motion.div
      animate={{ scale: isActive ? 1 : 1 }}
      transition={{ duration: 0.4 }}
      className={`min-w-[90%] md:min-w-[75%] lg:min-w-[65%] h-[54vh]  mx-auto rounded-[32px] border ${
        isActive ? 'border-green-400' : 'border-white/10'
      } bg-emerald-900/40 backdrop-blur-lg text-white p-8 grid md:grid-cols-2 items-center gap-8`}
    >
      {/* Left Side */}

      <h3 className="text-5xl md:text-6xl lg:text-[5vw] py-10  mb-4 px-8">
        {title}
      </h3>

      {/* Right Side */}
      <div className="flex flex-col  px-3 gap-15  items-center">
        <p className="text-gray-300 text-base md:text-lg px-5">{description}</p>
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-6 md:mt-0 ">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center w-[30%]"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full mb-2">
                <f.icon className="w-10 h-10 text-green-400" />
              </div>
              <p className="text-gray-400 text-xs md:text-sm">{f.label}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
