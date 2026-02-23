"use client"

import { useRef } from "react"
import { Globe, Network, ShieldCheck, TrendingUp } from "lucide-react"

const benefits = [
  {
    icon: Globe,
    title: "Wider Market Reach",
    desc: "Expand into new regions and digital segments with scalable financial infrastructure.",
  },
  {
    icon: Network,
    title: "Go-To-Market Acceleration",
    desc: "Launch co-branded financial products quickly using ready-to-deploy APIs.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted & Compliant",
    desc: "Enterprise-grade security, regulatory compliance, and risk controls.",
  },
  {
    icon: TrendingUp,
    title: "New Revenue Streams",
    desc: "Unlock monetization through embedded finance and value-added services.",
  },
]

export default function PartnershipBenefits() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    })
  }

  return (
    <section className="py-28 bg-gradient-to-b from-[#0F0F0F] to-[#0C1F18] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT TEXT */}
          <div>
            <h2 className="text-4xl md:text-6xl font-semibold text-white leading-tight">
              WHY PARTNER{" "}
              <span className="bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
                WITH US
              </span>
            </h2>

            <p className="text-gray-400 mt-5 leading-relaxed">
              Accelerate innovation, enhance customer value, and unlock new growth
              opportunities with a modern financial infrastructure platform.
            </p>

            {/* arrows */}
            <div className="flex gap-3 mt-8">
              <button
                onClick={() => scroll("left")}
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-emerald-400/40"
              >
                ←
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-emerald-400/40"
              >
                →
              </button>
            </div>
          </div>

          {/* RIGHT SLIDER */}
          <div className="relative">

            {/* glow background */}
            <div className="absolute -inset-20 bg-radial-emerald-soft opacity-20 blur-3xl pointer-events-none" />

            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-2"
            >
              {benefits.map((item, i) => {
                const Icon = item.icon
                return (
                  <div
                    key={i}
                    className="min-w-[280px] bg-[#0F0F0F] border border-white/10 rounded-2xl p-7
                    hover:border-emerald-400/40
                    hover:shadow-[0_0_25px_rgba(0,239,100,0.15)]
                    transition duration-300"
                  >
                    <Icon className="text-emerald-400" size={28} />
                    <h3 className="text-white mt-4 font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                )
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
