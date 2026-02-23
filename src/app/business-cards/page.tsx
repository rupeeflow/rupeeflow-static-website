"use client"

import { cardPages } from "@/constants/cardPages"
import MainCTA from "@/components/ui/mainCTA"
import Container from "@/components/ui/Container"
import CardFAQ from "@/components/sections/CardFAQ"
import RotatingDevice from "@/components/RotatingDevice"

import { Check, ShieldCheck, Eye, BarChart3, Wallet, Settings } from "lucide-react"

export default function BusinessCardsPage() {
  const content = cardPages.business

  const businessFAQs = [
    {
      question: "What are business cards used for?",
      answer:
        "Business cards help companies control employee spending with limits, real-time tracking, and policy enforcement.",
    },
    {
      question: "Can I set spending limits per employee?",
      answer:
        "Yes. You can define limits by employee, department, merchant category, or transaction type.",
    },
    {
      question: "Do I get real-time transaction visibility?",
      answer:
        "Every transaction is recorded instantly and visible in your dashboard.",
    },
    {
      question: "How secure are business cards?",
      answer:
        "They include enterprise-grade fraud protection, usage controls, and advanced security safeguards.",
    },
    {
      question: "Can business cards be used internationally?",
      answer:
        "Yes. Cards can be enabled for international transactions with configurable controls and compliance safeguards.",
    },
    {
      question: "Do business cards integrate with accounting software?",
      answer:
        "Transactions can sync with accounting systems to simplify reconciliation and financial reporting.",
    },
    {
      question: "Can I block or freeze a card instantly?",
      answer:
        "Yes. Cards can be paused, blocked, or reissued instantly from the admin dashboard.",
    },
  ]

  return (
    <>
      {/* HERO */}
      <Container className="py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-6xl font-bold text-white leading-tight">
              Business{" "}
              <span className="bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
                Cards
              </span>
            </h1>

            <p className="mt-6 text-gray-300 text-lg leading-relaxed">
              {content.description}
            </p>

            {/* FEATURES */}
            <ul className="mt-8 space-y-4">
              {[
                { icon: Wallet, text: "Set spending limits per employee" },
                { icon: Eye, text: "Real-time transaction visibility" },
                { icon: Settings, text: "Automated expense categorization" },
                { icon: ShieldCheck, text: "Fraud protection & secure controls" },
                { icon: BarChart3, text: "Detailed spending analytics" },
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
              <MainCTA
                label={content.ctaLabel}
                destination={content.ctaLink}
              />
            </div>
          </div>

          {/* RIGHT SIDE — ROTATING DEVICE */}
          <RotatingDevice />

        </div>
      </Container>

      {/* WHY CHOOSE */}
      <section className="py-20 bg-gradient-to-b from-[#0F0F0F] to-[#0C1F18]">
        <div className="text-center max-w-3xl mx-auto px-6">
          <h2 className="text-5xl font-semibold text-white">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
              Business Cards
            </span>
          </h2>

          <p className="mt-3 text-xl text-gray-300">
            Gain full visibility and control over expenses while empowering teams to spend responsibly.
          </p>
        </div>

        <div className="mt-14 max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Full Spend Control",
              desc: "Set limits and policies to ensure disciplined spending.",
            },
            {
              title: "Real-Time Visibility",
              desc: "Track transactions instantly across teams.",
            },
            {
              title: "Secure & Compliant",
              desc: "Protect company funds with enterprise-grade security.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-7 rounded-2xl border border-white/10 bg-[#0F0F0F]
              transition hover:-translate-y-1
              hover:border-emerald-400/40
              hover:shadow-[0_0_25px_rgba(0,239,100,0.15)]"
            >
              <h3 className="text-white font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-400 mt-3">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURE DETAILS */}
      <section className="py-24 bg-gradient-to-b from-[#0F0F0F] to-[#0C1F18]">
        <div className="max-w-6xl mx-auto px-6 space-y-28">

          {[
            {
              title: "Real-Time Expense Tracking",
              desc: "Monitor transactions instantly and gain visibility into spending patterns.",
              points: ["Instant alerts", "Auto categorization", "Live dashboards"],
            },
            {
              title: "Smart Spending Controls",
              desc: "Set limits and enforce policies to prevent overspending.",
              points: ["Department limits", "Merchant controls", "Budget enforcement"],
            },
            {
              title: "Receipt & Approval Automation",
              desc: "Automate expense approvals with receipt matching.",
              points: ["Receipt capture", "Auto approvals", "Audit-ready logs"],
            },
            {
              title: "Analytics & Insights",
              desc: "Identify trends and uncover cost-saving opportunities.",
              points: ["Spend insights", "Trend analysis", "Exportable reports"],
            },
          ].map((item, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-14 items-center">

              <div className="bg-white/5 border border-white/10 rounded-2xl aspect-video flex items-center justify-center text-gray-500">
                Preview
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white">
                  {item.title}
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
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="py-14 border-y border-white/10 text-center">
        <p className="text-lg font-medium bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
          Trusted by finance teams, startups, and enterprises for secure and intelligent spend management.
        </p>
      </div>

      {/* FAQ */}
      <CardFAQ faqs={businessFAQs} />

      {/* FINAL CTA */}
      <section className="py-28 text-center">
        <h3 className="text-4xl text-white font-semibold">
          Take control of business spending today
        </h3>
        <p className="text-gray-400 mt-4">
          Issue cards instantly and empower your team with smarter expense management.
        </p>

        <div className="mt-8 flex justify-center">
          <MainCTA label="Get Business Cards" destination="/contact" />
        </div>
      </section>
    </>
  )
}