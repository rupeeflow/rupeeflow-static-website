import Container from '@/components/ui/Container'
import MainCTA from '@/components/ui/mainCTA'
import Image from 'next/image'
import { rewardsFAQs } from "@/data/rewardsCardFaqs"

import {
  Check,
  Gift,
  Trophy,
  Smile,
  Star,
  Wallet,
  HeartHandshake,
} from 'lucide-react'
import CardFAQ from '@/components/sections/CardFAQ'

export default function RewardsCardsPage() {
  return (
    <>
      {/* HERO */}
      <Container className="py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <h1 className="text-6xl font-bold text-[var(--foreground)] leading-tight">
              Rewards{" "}
              <span className="bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
                Cards
              </span>
            </h1>

            <p className="mt-6 text-gray-300 text-lg leading-relaxed">
              Motivate employees and strengthen workplace culture with smart
              rewards cards designed for incentives, recognition, and
              performance-based benefits.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                { icon: Gift, text: "Instant rewards & incentive distribution" },
                { icon: Trophy, text: "Recognize performance & milestones" },
                { icon: Smile, text: "Boost employee satisfaction & engagement" },
                { icon: Wallet, text: "Tax-efficient perks & benefit programs" },
                { icon: HeartHandshake, text: "Strengthen retention & company culture" },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <li key={i} className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-emerald-500/15">
                      <Icon size={18} className="text-emerald-400" />
                    </div>
                    <span className="text-gray-300">{item.text}</span>
                  </li>
                )
              })}
            </ul>

            <div className="mt-10">
              <MainCTA label="Issue Rewards Cards" destination="/contact" />
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="relative rounded-2xl overflow-hidden border border-[var(--border)] shadow-xl">
            <Image
              src="/rewards-cards-hero.png"
              alt="Employee rewards card preview"
              width={700}
              height={500}
              className="object-cover w-full h-full"
              priority
            />
          </div>

        </div>
      </Container>

      {/* WHY CHOOSE */}
      <div className="py-20 bg-gradient-to-b from-[#0F0F0F] to-[#0C1F18]">
        <div className="text-center max-w-3xl mx-auto px-6">
          <h2 className="text-5xl font-semibold text-[var(--foreground)]">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
              Rewards Cards
            </span>
            ?
          </h2>

          <p className="mt-3 text-xl text-gray-300">
            Recognize achievements, motivate teams, and build a high-performance culture.
          </p>
        </div>

        <div className="mt-14 max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Boost Engagement",
              desc: "Reward employees instantly and improve workplace motivation.",
            },
            {
              title: "Performance Incentives",
              desc: "Encourage excellence with milestone and achievement rewards.",
            },
            {
              title: "Flexible Redemption",
              desc: "Allow employees to spend rewards anywhere they prefer.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-7 rounded-2xl border border-[var(--border)] bg-[#0F0F0F]
              hover:-translate-y-1 transition
              hover:border-emerald-400/40
              hover:shadow-[0_0_25px_rgba(0,239,100,0.15)]"
            >
              <h3 className="text-[var(--foreground)] font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-400 mt-3">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <div className="py-24 bg-gradient-to-b from-[#0F0F0F] to-[#0C1F18]">
        <div className="max-w-6xl mx-auto px-6 space-y-28">

          {[
            {
              title: "Instant Rewards Distribution",
              desc: "Send incentives and bonuses instantly to employees.",
              points: ["One-click reward issuance", "Bulk distribution", "Real-time delivery"],
              image: "Rewards Distribution Preview",
            },
            {
              title: "Employee Recognition",
              desc: "Celebrate achievements and milestones effortlessly.",
              points: ["Milestone rewards", "Performance bonuses", "Peer recognition"],
              image: "Recognition Dashboard",
            },
            {
              title: "Flexible Spending",
              desc: "Give employees the freedom to redeem rewards anywhere.",
              points: ["Universal acceptance", "Online & offline use", "Mobile wallet support"],
              image: "Flexible Spend Preview",
            },
            {
              title: "Insights & Engagement Metrics",
              desc: "Measure program effectiveness and employee participation.",
              points: ["Usage insights", "Engagement tracking", "Reward impact analysis"],
              image: "Engagement Analytics",
            },
          ].map((item, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-14 items-center">

              {/* IMAGE */}
              <div className={`${i % 2 ? "md:order-2" : ""} bg-[var(--card)] border border-[var(--border)] rounded-2xl aspect-video flex items-center justify-center text-gray-500`}>
                {item.image}
              </div>

              {/* TEXT */}
              <div className={`${i % 2 ? "md:order-1" : ""}`}>
                <h3 className="text-2xl font-semibold text-[var(--foreground)]">
                  {item.title.split(" ").slice(0, -1).join(" ")}{" "}
                  <span className="bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
                    {item.title.split(" ").slice(-1)}
                  </span>
                </h3>

                <p className="text-gray-400 mt-4">{item.desc}</p>

                <ul className="mt-6 space-y-3">
                  {item.points.map((p, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/15">
                        <Check size={14} className="text-emerald-400" />
                      </span>
                      <span className="text-gray-300">{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <MainCTA label="Learn More" destination="#" size="w-40 h-10" />
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* TRUST STRIP */}
      <div className="py-14 border-y border-[var(--border)] text-center">
        <p className="text-lg font-medium bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
          Empower teams with meaningful recognition and performance-driven rewards.
        </p>
      </div>

      <CardFAQ faqs={rewardsFAQs} />

      {/* FINAL CTA */}
      <div className="py-28 text-center">
        <h3 className="text-4xl text-[var(--foreground)] font-semibold">
          Inspire performance with smarter rewards
        </h3>
        <p className="text-gray-400 mt-4">
          Motivate employees, strengthen culture, and drive engagement.
        </p>

        <div className="mt-8 flex justify-center">
          <MainCTA label="Start Rewards Program" destination="/contact" />
        </div>
      </div>
    </>
  )
}
