"use client"

import Container from "@/components/ui/Container"
import MainCTA from "@/components/ui/mainCTA"
import CardFAQ from "@/components/sections/CardFAQ"

import {
  IndianRupee,
  TrendingUp,
  AlertTriangle,
  BarChart3,
  CheckCircle,
  ShieldCheck
} from "lucide-react"

export default function PayableAnalyticsPage() {

  const faqs = [
    {
      question: "Can I track upcoming payables in real time?",
      answer:
        "Yes. Monitor upcoming dues, payment schedules, and outstanding balances from a unified dashboard.",
    },
    {
      question: "Does payable analytics help prevent cash shortages?",
      answer:
        "Forecast upcoming obligations and plan working capital to maintain healthy liquidity.",
    },
    {
      question: "Can I analyze vendor payment trends?",
      answer:
        "Yes. Identify spending patterns and optimize vendor payment cycles for better financial control.",
    },
    {
      question: "Will this improve financial planning?",
      answer:
        "Real-time insights help finance teams make smarter budgeting and cash flow decisions.",
    },
    {
      question: "Are insights updated instantly?",
      answer:
        "Yes. Data updates in real time to ensure accurate financial visibility.",
    },
  ]

  return (
    <>
      {/* HERO */}
      <Container className="py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <h1 className="text-6xl font-bold text-white leading-tight">
              Payable{" "}
              <span className="bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
                Analytics
              </span>
            </h1>

            <p className="mt-6 text-gray-400 text-lg leading-relaxed">
              Gain complete visibility into outgoing payments, forecast financial
              obligations, and optimize vendor settlements to maintain strong
              liquidity and financial control.
            </p>

            {/* FEATURES */}
            <ul className="mt-8 space-y-4">
              {[
                { icon: IndianRupee, text: "Track upcoming payment obligations" },
                { icon: TrendingUp, text: "Forecast cash requirements" },
                { icon: BarChart3, text: "Analyze vendor payment trends" },
                { icon: AlertTriangle, text: "Prevent liquidity shortfalls" },
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
              <MainCTA label="View Payable Insights" destination="/contact" />
            </div>
          </div>

          {/* RIGHT PREVIEW (single → white) */}
          <div className="bg-white rounded-2xl border border-emerald-200 shadow-xl aspect-video flex items-center justify-center hover:shadow-[0_0_30px_rgba(0,239,100,0.25)] transition">
            <span className="text-emerald-500 text-sm font-medium">
              Payables Dashboard Preview
            </span>
          </div>

        </div>
      </Container>

      {/* WHY CHOOSE */}
      <section className="py-20 bg-gradient-to-b from-[#0F0F0F] to-[#020506]">
        <div className="text-center max-w-3xl mx-auto px-6">
          <h2 className="text-5xl font-semibold text-white">
            Why Finance Teams Choose{" "}
            <span className="text-emerald-400">Payable Analytics</span>
          </h2>

          <p className="mt-4 text-xl text-gray-300">
            Improve financial planning while maintaining strong vendor relationships.
          </p>
        </div>

        <div className="mt-14 max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Prevent Cash Shortages",
              desc: "Forecast obligations to maintain healthy liquidity.",
            },
            {
              title: "Optimize Payment Cycles",
              desc: "Identify optimal payment timing for vendors.",
            },
            {
              title: "Improve Financial Control",
              desc: "Gain complete visibility into outgoing funds.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-7 rounded-2xl border border-white/10 bg-[#020506]
              hover:border-emerald-400/40
              hover:shadow-[0_0_20px_rgba(0,239,100,0.15)]
              transition"
            >
              <h3 className="text-white font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-400 mt-3">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURE DETAILS (dual preview → gray) */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 space-y-20">

          {/* ROW 1 */}
          <div className="grid md:grid-cols-2 gap-14 items-center">

            <div className="bg-gray-100 border border-gray-200 rounded-2xl aspect-video flex items-center justify-center">
              <span className="text-gray-500 text-sm">Preview</span>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-black">
                Real-Time Payable Visibility
              </h3>

              <p className="text-gray-600 mt-4">
                Monitor outstanding dues, vendor obligations, and payment schedules
                in one centralized financial dashboard.
              </p>

              <ul className="mt-6 space-y-3">
                {["Outstanding dues tracking", "Vendor schedules", "Due date alerts"].map((p, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-emerald-500" />
                    <span className="text-gray-700">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ROW 2 */}
          <div className="grid md:grid-cols-2 gap-14 items-center">

            <div>
              <h3 className="text-2xl font-semibold text-black">
                Forecast & Optimize Cash Requirements
              </h3>

              <p className="text-gray-600 mt-4">
                Predict upcoming financial obligations and optimize payment timing
                to maintain strong liquidity and operational stability.
              </p>

              <ul className="mt-6 space-y-3">
                {["Cashflow forecasting", "Liquidity planning", "Expense pattern insights"].map((p, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-emerald-500" />
                    <span className="text-gray-700">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-100 border border-gray-200 rounded-2xl aspect-video flex items-center justify-center">
              <span className="text-gray-500 text-sm">Preview</span>
            </div>
          </div>

        </div>
      </section>

      {/* VALUE SECTION */}
      <section className="py-24 bg-[#EAF0F2]">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-semibold text-black">
            Smarter Outgoing Payments. Stronger Financial Control.
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Payable analytics empowers finance teams with the insights needed to
            optimize cash flow, reduce risk, and maintain strong vendor partnerships.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <CardFAQ faqs={faqs} />

      {/* FINAL CTA */}
      <section className="py-24 text-center">
        <h3 className="text-4xl text-white font-semibold">
          Take control of your outgoing payments
        </h3>

        <p className="text-gray-400 mt-4">
          Forecast obligations, optimize payments, and maintain financial stability.
        </p>

        <div className="mt-8 flex justify-center">
          <MainCTA label="Get Started Today" destination="/contact" />
        </div>
      </section>
    </>
  )
}