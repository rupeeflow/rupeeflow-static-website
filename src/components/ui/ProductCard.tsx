'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import Image from 'next/image'

interface InfoCardProps {
  title: string
  description: string
  imageUrl: string
  features: { icon: LucideIcon; label: string }[]
  isActive?: boolean
}

export default function InfoCard({
  title,
  description,
  imageUrl,
  features,
  isActive,
}: InfoCardProps) {
  return (
    <motion.div
      animate={{ scale: isActive ? 1 : 1 }}
      transition={{ duration: 0.4 }}
      className={`w-full mx-auto rounded-[32px] border ${
        isActive ? 'border-emerald-200/50' : 'border-white/10'
      } bg-neutral-600/30 backdrop-blur-lg text-white p-2 md:p-4 flex portrait:flex-col landscape:flex-row justify-center items-center gap-8 portrait:h-[80vh] landscape:h-auto `}
    >
      {/* left Side */}
      <div className="portrait:w-full portrait:h-[35%] landscape:w-[50%] landscape:h-full flex relative overflow-hidden rounded-3xl">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover w-full h-full"
        />
      </div>

      {/* right Side */}
      <div className="flex flex-col portrait:w-full portrait:h-[65%] landscape:w-[50%] landscape:h-full gap-8 py-6  px-12 items-center">
        <h3 className="text-2xl md:text-5xl lg:text-[4vw] ">{title}</h3>
        <p className="text-gray-300 text-base text-sm md:text-lg pr-2">
          {description}
        </p>
        <div className="flex  justify-center gap-8 mt-6 md:mt-0 ">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center w-[30%]"
            >
              <div className="w-8 h-8 flex items-center justify-center rounded-full mb-2">
                <f.icon className="w-6 h-6 text-neutral-400" />
              </div>
              <p className="text-gray-400 text-xs md:text-xs">{f.label}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
