"use client"

import { Globe, Network, ShieldCheck, TrendingUp } from "lucide-react"
import MainCTA from "@/components/ui/mainCTA"

const benefits = [
  {
    icon: Globe,
    title: "Wider Market Reach",
    desc: "Expand into new regions and digital segments with scalable financial infrastructure that grows with your business.",
  },
  {
    icon: Network,
    title: "Go-To-Market Acceleration",
    desc: "Launch co-branded financial products quickly using ready-to-deploy APIs with full sandbox and onboarding support.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted & Compliant",
    desc: "Enterprise-grade security, RBI-licensed infrastructure, regulatory compliance, and robust risk controls built in.",
  },
  {
    icon: TrendingUp,
    title: "New Revenue Streams",
    desc: "Unlock monetization through embedded finance, value-added services, and revenue-share partnership models.",
  },
]

export default function PartnershipBenefits() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-[#060D0A] to-[#0C1F18]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="inline-block text-emerald-400 text-xs font-semibold tracking-widest uppercase border border-emerald-400/30 rounded-full px-4 py-1 mb-4">
            Why Partner With Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Built for{" "}
            <span className="bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
              Growth Together
            </span>
          </h2>
          <p className="text-gray-400 mt-4 leading-relaxed">
            Accelerate innovation, enhance customer value, and unlock new growth
            opportunities with a modern financial infrastructure platform.
          </p>
        </div>

        {/* 2×2 Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {benefits.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={i}
                className="group flex gap-5 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8
                  hover:border-emerald-400/40 hover:bg-white/[0.07]
                  hover:shadow-[0_0_30px_rgba(0,239,100,0.08)]
                  transition duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 transition duration-300">
                  <Icon className="text-emerald-400" size={22} />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-white font-semibold text-base sm:text-lg leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA row */}
        <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-center justify-between gap-5 border-t border-white/10 pt-10 sm:pt-12">
          <p className="text-gray-400 text-sm sm:text-base max-w-md text-center sm:text-left">
            Ready to build the future of financial services together?{" "}
            <span className="text-white font-medium">Join our partner ecosystem.</span>
          </p>
          <MainCTA label="Become a Partner" destination="/contact" />
        </div>

      </div>
    </section>
  )
}
