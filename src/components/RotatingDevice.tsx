"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function RotatingDevice() {
  const [index, setIndex] = useState(0)
  const [tilt, setTilt] = useState(false)

  const screens = [
    {
      title: "Smart Spend Controls",
      desc: "Set limits, budgets and merchant restrictions.",
      img: "/screens/spend.png",
    },
    {
      title: "Real-Time Visibility",
      desc: "Track every transaction instantly.",
      img: "/screens/visibility.png",
    },
    {
      title: "Expense Automation",
      desc: "Auto categorize & approve faster.",
      img: "/screens/automation.png",
    },
    {
      title: "Enterprise Security",
      desc: "Fraud detection & instant card freeze.",
      img: "/screens/security.png",
    },
  ]

  // PineLabs-style motion: tilt → swap → pause
  useEffect(() => {
    const cycle = () => {
      setTilt(true)

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % screens.length)
      }, 900)

      setTimeout(() => {
        setTilt(false)
      }, 1800)
    }

    const interval = setInterval(cycle, 4200)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative flex justify-center items-center perspective-[1800px]">

      {/* ambient glow */}
      <div className="absolute w-[420px] h-[420px] bg-emerald-400/20 blur-[140px] opacity-40" />

      <div className="animate-float">

        {/* phone body */}
        <div
          className="relative w-[300px] h-[610px] rounded-[52px]
          bg-gradient-to-b from-[#111] to-[#000]
          border border-[var(--border)]
          shadow-[0_60px_120px_rgba(0,0,0,0.7)]
          transition-transform duration-[1200ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            transform: tilt
              ? "rotateY(22deg) rotateX(4deg) scale(1.02)"
              : "rotateY(0deg) rotateX(2deg) scale(1)",
          }}
        >
          {/* glass reflection sweep */}
          <div className="absolute inset-0 rounded-[52px] overflow-hidden pointer-events-none">
            <div className="absolute -left-1/2 top-0 w-1/2 h-full bg-gradient-to-r from-white/20 to-transparent opacity-40 animate-reflect" />
          </div>

          {/* edge highlight */}
          <div className="absolute inset-0 rounded-[52px] bg-gradient-to-tr from-white/10 to-transparent opacity-40 pointer-events-none" />

          {/* screen */}
          <div className="absolute inset-3 rounded-[40px] overflow-hidden bg-[#0C1F18]">

            {/* SCREEN IMAGE — perfectly fitted */}
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <Image
  src={screens[index].img}
  alt=""
  width={1080}
  height={2160}
  quality={100}
  priority
  className="w-full h-full object-contain"
/>
            </div>

            {/* screen depth shadow */}
            <div className="absolute inset-0 shadow-[inset_0_-40px_80px_rgba(0,0,0,0.6)] pointer-events-none" />

            {/* glass overlay */}
            <div className="absolute inset-0 bg-[var(--card)] backdrop-blur-[1px] pointer-events-none" />

            {/* text overlay */}
            <div className="absolute bottom-10 left-0 right-0 text-center px-6">
              <h3 className="text-[var(--foreground)] text-xl font-semibold mb-2">
                {screens[index].title}
              </h3>
              <p className="text-gray-700 text-sm">
                {screens[index].desc}
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}