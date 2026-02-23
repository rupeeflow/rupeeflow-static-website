"use client"

import Container from "@/components/ui/Container"
import MainCTA from "@/components/ui/mainCTA"
import CardFAQ from "@/components/sections/CardFAQ"

import {
  Wallet,
  TrendingUp,
  TrendingDown,
  LineChart,
  CheckCircle,
  ShieldCheck
} from "lucide-react"

export default function CashflowAnalyticsPage() {

  const faqs = [
    {
      question: "Can I track my real-time cash position?",
      answer:
        "Yes. Monitor real-time inflows, outflows, and available balances from a unified dashboard.",
    },
    {
      question: "Does cashflow analytics forecast future liquidity?",
      answer:
        "Predict future cash positions based on historical trends and upcoming financial obligations.",
    },
    {
      question: "Can I detect potential cash shortages early?",
      answer:
        "Yes. Intelligent alerts help you identify liquidity gaps before they impact operations.",
    },
    {
      question: "Does this support financial planning?",
      answer:
        "Cashflow insights enable better budgeting, planning, and long-term financial stability.",
    },
    {
      question: "Is data updated in real time?",
      answer:
        "Yes. Your dashboard reflects real-time financial activity for accurate decision-making.",
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
              Cashflow{" "}
              <span className="bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
                Analytics
              </span>
            </h1>

            <p className="mt-6 text-gray-400 text-lg leading-relaxed">
              Monitor inflows, track expenses, and forecast future liquidity
              with real-time insights that help you maintain financial stability
              and make confident business decisions.
            </p>

            {/* FEATURES */}
            <ul className="mt-8 space-y-4">
              {[
                { icon: Wallet, text: "Real-time cash position visibility" },
                { icon: TrendingUp, text: "Income & revenue forecasting" },
                { icon: TrendingDown, text: "Expense & outflow monitoring" },
                { icon: LineChart, text: "Financial trend analysis & insights" },
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
              <MainCTA label="Track Cashflow" destination="/contact" />
            </div>
          </div>

          {/* RIGHT PREVIEW (single → white) */}
          <div className="bg-white rounded-2xl border border-emerald-200 shadow-xl aspect-video flex items-center justify-center hover:shadow-[0_0_30px_rgba(0,239,100,0.25)] transition">
            <span className="text-emerald-500 text-sm font-medium">
              Cashflow Dashboard Preview
            </span>
          </div>

        </div>
      </Container>

      {/* WHY CHOOSE */}
      <section className="py-20 bg-gradient-to-b from-[#0F0F0F] to-[#020506]">
        <div className="text-center max-w-3xl mx-auto px-6">
          <h2 className="text-5xl font-semibold text-white">
            Why Businesses Rely on{" "}
            <span className="text-emerald-400">Cashflow Analytics</span>
          </h2>

          <p className="mt-4 text-xl text-gray-300">
            Maintain financial stability with real-time insights and predictive forecasting.
          </p>
        </div>

        <div className="mt-14 max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Prevent Liquidity Gaps",
              desc: "Forecast cash needs and avoid financial shortfalls.",
            },
            {
              title: "Improve Financial Planning",
              desc: "Make smarter decisions with real-time financial insights.",
            },
            {
              title: "Optimize Spending",
              desc: "Understand expense trends and control costs effectively.",
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
                Real-Time Cash Position
              </h3>

              <p className="text-gray-600 mt-4">
                Track available balances, incoming payments, and outgoing expenses
                to maintain complete financial visibility at all times.
              </p>

              <ul className="mt-6 space-y-3">
                {["Live balance tracking", "Incoming payment visibility", "Outgoing expense monitoring"].map((p, i) => (
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
                Forecast & Plan Future Liquidity
              </h3>

              <p className="text-gray-600 mt-4">
                Predict future cash positions using trend analysis and upcoming obligations
                to support smarter financial planning.
              </p>

              <ul className="mt-6 space-y-3">
                {["Liquidity forecasting", "Expense trend insights", "Financial planning support"].map((p, i) => (
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
            Financial Stability Through Intelligent Insights
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Cashflow analytics empowers businesses to anticipate financial needs,
            reduce risk, and maintain sustainable growth with data-driven decisions.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <CardFAQ faqs={faqs} />

      {/* FINAL CTA */}
      <section className="py-24 text-center">
        <h3 className="text-4xl text-white font-semibold">
          Take control of your cashflow today
        </h3>

        <p className="text-gray-400 mt-4">
          Monitor liquidity, forecast trends, and make confident financial decisions.
        </p>

        <div className="mt-8 flex justify-center">
          <MainCTA label="Start Tracking" destination="/contact" />
        </div>
      </section>
    </>
  )
}