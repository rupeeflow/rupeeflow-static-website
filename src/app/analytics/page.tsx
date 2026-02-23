"use client"

import Container from "@/components/ui/Container"
import MainCTA from "@/components/ui/mainCTA"
import CardFAQ from "@/components/sections/CardFAQ"

import {
  BarChart3,
  LineChart,
  PieChart,
  Eye,
  Zap,
  ShieldCheck,
  TrendingUp,
  Database
} from "lucide-react"

export default function AnalyticsPage() {

  const faqs = [
    {
      question: "What insights can I track with analytics?",
      answer:
        "Monitor payment trends, customer behavior, cash flow performance, and operational efficiency in real time."
    },
    {
      question: "Can I generate financial reports?",
      answer:
        "Yes. Export detailed reports for reconciliation, audits, and strategic planning."
    },
    {
      question: "Does analytics help improve cash flow?",
      answer:
        "Advanced insights help identify delays, optimize collections, and predict incoming revenue."
    },
    {
      question: "Can I track customer payment behavior?",
      answer:
        "Yes. Identify reliable customers, late payers, and risk patterns to improve decision-making."
    },
    {
      question: "Is my financial data secure?",
      answer:
        "All analytics data is encrypted and protected with enterprise-grade security standards."
    },
  ]

  return (
    <>
      {/* HERO */}
      <section className="bg-[#020506] text-white">
        <Container className="py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <h1 className="text-6xl font-bold leading-tight">
                Payment{" "}
                <span className="bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
                  Analytics
                </span>
              </h1>

              <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                Transform financial data into actionable insights.
                Track trends, monitor performance, and make smarter
                decisions with real-time payment intelligence.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  { icon: BarChart3, text: "Real-time financial dashboards" },
                  { icon: LineChart, text: "Trend & performance tracking" },
                  { icon: PieChart, text: "Visual insights & reporting" },
                  { icon: ShieldCheck, text: "Secure & reliable data access" },
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <li key={i} className="flex items-center gap-4">
                      <div className="w-9 h-9 rounded-lg bg-emerald-500/15 flex items-center justify-center">
                        <Icon size={18} className="text-emerald-400" />
                      </div>
                      <span className="text-gray-300">{item.text}</span>
                    </li>
                  )
                })}
              </ul>

              <div className="mt-10">
                <MainCTA label="View Insights" destination="/contact" />
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-emerald-500 shadow-xl aspect-video flex items-center justify-center">
              <span className="text-emerald-500 text-sm font-medium">
                Analytics Dashboard Preview
              </span>
            </div>

          </div>
        </Container>
      </section>

      {/* ANALYTICS OVERVIEW */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-6xl mx-auto px-6">

            <h2 className="text-4xl font-semibold text-center text-black">
              Financial Insights for <span className="text-emerald-600">Smarter Decisions</span>
            </h2>

            <div className="mt-20 space-y-24">

              {/* 1 */}
              <div className="grid md:grid-cols-2 gap-14 items-center">
                <div>
                  <h3 className="text-xl font-bold text-black">Real-Time Dashboards</h3>
                  <p className="mt-4 text-gray-600">
                    Monitor payments, collections, and revenue streams
                    from a unified dashboard updated in real time.
                  </p>
                  <button className="mt-6 border border-emerald-500 text-emerald-600 px-5 py-2 rounded-lg text-sm font-bold hover:bg-emerald-50 transition">
                    Get Started →
                  </button>
                </div>

                <div className="bg-gray-200 rounded-2xl aspect-video flex items-center justify-center">
                  Preview
                </div>
              </div>

              {/* 2 */}
              <div className="grid md:grid-cols-2 gap-14 items-center">
                <div className="order-2 md:order-1 bg-gray-200 rounded-2xl aspect-video flex items-center justify-center">
                  Preview
                </div>

                <div className="order-1 md:order-2">
                  <h3 className="text-xl font-bold text-black">Trend Analysis</h3>
                  <p className="mt-4 text-gray-600">
                    Identify payment patterns, seasonal trends, and
                    performance changes to forecast future revenue.
                  </p>
                  <button className="mt-6 border border-emerald-500 text-emerald-600 px-5 py-2 rounded-lg text-sm font-bold hover:bg-emerald-50 transition">
                    Learn More →
                  </button>
                </div>
              </div>

              {/* 3 */}
              <div className="grid md:grid-cols-2 gap-14 items-center">
                <div>
                  <h3 className="text-xl font-bold text-black">Customer Insights</h3>
                  <p className="mt-4 text-gray-600">
                    Understand payment behavior to identify reliable customers
                    and detect high-risk accounts early.
                  </p>
                  <button className="mt-6 border border-emerald-500 text-emerald-600 px-5 py-2 rounded-lg text-sm font-bold hover:bg-emerald-50 transition">
                    Get Started →
                  </button>
                </div>

                <div className="bg-gray-200 rounded-2xl aspect-video flex items-center justify-center">
                  Preview
                </div>
              </div>

              {/* 4 */}
              <div className="grid md:grid-cols-2 gap-14 items-center">
                <div className="order-2 md:order-1 bg-gray-200 rounded-2xl aspect-video flex items-center justify-center">
                  Preview
                </div>

                <div className="order-1 md:order-2">
                  <h3 className="text-xl font-bold text-black">Performance Reports</h3>
                  <p className="mt-4 text-gray-600">
                    Generate detailed financial reports for audits,
                    reconciliation, and strategic planning.
                  </p>
                  <button className="mt-6 border border-emerald-500 text-emerald-600 px-5 py-2 rounded-lg text-sm font-bold hover:bg-emerald-50 transition">
                    Learn More →
                  </button>
                </div>
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* SMART ANALYTICS INTELLIGENCE */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-6xl mx-auto px-6 text-center">

            <h2 className="text-3xl font-semibold text-black">
              Smart Analytics Intelligence
            </h2>

            <div className="mt-14 grid md:grid-cols-3 gap-8">

              {[
                { title: "Revenue Forecasting", desc: "Predict future cash flow trends." },
                { title: "Risk Detection", desc: "Identify payment risks early." },
                { title: "Performance Metrics", desc: "Track operational efficiency." },
                { title: "Customer Segmentation", desc: "Group customers by behavior." },
                { title: "Growth Insights", desc: "Uncover opportunities to scale." },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group bg-black border border-white/10 p-7 rounded-xl text-left transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400/40 hover:bg-gradient-to-br hover:from-[#02140f] hover:to-black hover:shadow-[0_0_25px_rgba(0,239,100,0.25)]"
                >
                  <h3 className="font-semibold text-gray-200 group-hover:text-white transition">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-2 leading-relaxed group-hover:text-gray-200 transition">
                    {item.desc}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-gray-300 py-24">
        <Container>
          <CardFAQ faqs={faqs} />
        </Container>
      </section>

    </>
  )
}