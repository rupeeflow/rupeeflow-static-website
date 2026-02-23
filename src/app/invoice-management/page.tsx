"use client"
import { ReactNode } from "react"
import { motion } from "framer-motion"
import {
  TrendingUp,
  ShieldAlert,
  BarChart3,
  Eye,
  FileBarChart,
  BrainCircuit,
  Activity,
  Sparkles,
  AlertTriangle
} from "lucide-react"

type InsightBlockProps = {
  icon: ReactNode
  title: string
  bullets: string[]
}

export default function InvoiceInsightsSection() {
  {/* ================= ANALYTICS HERO (ADD FIRST) ================= */}

<section className="bg-[#020506] text-white pt-28 pb-24 overflow-hidden">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <div>
      <h1 className="text-5xl font-bold leading-tight">
        Payment{" "}
        <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
          Analytics
        </span>
      </h1>

      <p className="mt-6 text-gray-400 text-lg leading-relaxed">
        Transform financial data into actionable insights and make smarter
        decisions with real-time payment intelligence.
      </p>

      <ul className="mt-8 space-y-4">
        {[
          "Real-time financial dashboards",
          "Trend & performance tracking",
          "Visual insights & reporting",
          "Secure & reliable data access",
        ].map((text, i) => (
          <li key={i} className="flex items-center gap-4">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/15 flex items-center justify-center">
              <BarChart3 size={18} className="text-emerald-400" />
            </div>
            <span className="text-gray-300">{text}</span>
          </li>
        ))}
      </ul>

      <button className="mt-10 px-8 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition">
        View Insights
      </button>
    </div>

    {/* RIGHT DASHBOARD PREVIEW */}
    <div className="relative">

      {/* main dashboard */}
      <div className="bg-white/90 backdrop-blur rounded-2xl h-[260px] shadow-2xl" />

      {/* floating card 1 */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute -top-6 left-10 bg-white text-black px-5 py-3 rounded-xl shadow-lg text-sm"
      >
        <div className="text-gray-500 text-xs">Revenue Trend</div>
        <div className="flex items-end gap-1 mt-1">
          {[6, 10, 8, 14, 12].map((h, i) => (
            <div key={i} className="w-2 bg-emerald-500 rounded" style={{ height: h * 2 }} />
          ))}
        </div>
      </motion.div>

      {/* floating card 2 */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute -bottom-8 right-8 bg-white text-black px-6 py-4 rounded-xl shadow-lg"
      >
        <div className="text-xs text-gray-500">Collection Rate</div>
        <div className="text-lg font-semibold text-emerald-600">92%</div>
      </motion.div>

      {/* floating card 3 */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-24 -right-8 bg-white text-black px-5 py-3 rounded-xl shadow-lg flex items-center gap-2"
      >
        <TrendingUp size={16} className="text-emerald-600" />
        <span className="text-sm">Growth +18%</span>
      </motion.div>

    </div>

  </div>
</section>
  return (
    
    <section className="bg-gray-100 py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-semibold text-gray-900">
            Invoice Performance Insights
          </h2>
          <p className="text-gray-500 mt-4">
            Monitor invoice volume, approval speed, and payment efficiency in real time.
            Gain actionable insights to improve financial operations.
          </p>
        </div>

        {/* ================= KPI CARDS ================= */}
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {[
            { label: "Avg Approval Time", value: "2.3 hrs" },
            { label: "Invoices Processed", value: "1,284" },
            { label: "On-time Payments", value: "92%" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-7 text-center"
            >
              <p className="text-sm text-gray-500">{item.label}</p>
              <p className="text-3xl font-semibold text-emerald-600 mt-2">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ================= VOLUME TREND ================= */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-white mt-10 rounded-2xl border border-gray-200 shadow-sm p-10"
        >
          <p className="text-sm text-gray-400 mb-6">Invoice Volume Trend</p>

          <div className="flex items-end gap-4 h-36">
            {[35, 60, 45, 75, 70, 95].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: i * 0.1 }}
                className="w-7 rounded bg-gradient-to-t from-emerald-500 to-emerald-400 shadow"
              />
            ))}
          </div>
        </motion.div>

        {/* ================= AI RISK DETECTION ================= */}
        <div className="grid md:grid-cols-2 gap-16 items-center mt-24">

          {/* risk panel */}
          <motion.div
            whileHover={{ y: -6 }}
            className="bg-white rounded-2xl shadow-md border border-gray-200 p-7"
          >
            <p className="text-sm text-gray-400 mb-4">Risk Monitoring</p>

            {[
              ["Duplicate invoice pattern", "Low"],
              ["Unusual amount variance", "Medium"],
              ["Vendor mismatch", "High"],
            ].map(([title, level], i) => (
              <div
                key={i}
                className="flex justify-between py-3 border-b last:border-none text-sm"
              >
                <span className="text-gray-700">{title}</span>
                <span
                  className={`font-semibold ${
                    level === "Low"
                      ? "text-emerald-600"
                      : level === "Medium"
                      ? "text-amber-500"
                      : "text-red-500"
                  }`}
                >
                  {level}
                </span>
              </div>
            ))}
          </motion.div>

          {/* content */}
          <div>
            <div className="flex items-center gap-3">
              <ShieldAlert className="text-amber-600" size={24} />
              <h3 className="text-2xl font-semibold text-gray-900">
                AI Risk Detection & Fraud Prevention
              </h3>
            </div>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Identify anomalies, prevent duplicate invoices, and reduce financial
              risk using intelligent pattern recognition and AI-driven monitoring.
            </p>

            <ul className="mt-6 space-y-2 text-gray-700">
              <li>• Detect duplicate & fraudulent invoices</li>
              <li>• Flag abnormal invoice patterns</li>
              <li>• Prevent payment leakage & errors</li>
              <li>• Strengthen internal financial controls</li>
            </ul>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-6 px-6 py-2.5 border border-emerald-500 text-emerald-600 rounded-lg hover:bg-emerald-50 transition"
            >
              Enable Protection →
            </motion.button>
          </div>
        </div>

        {/* ================= FINANCIAL INSIGHTS ================= */}
        <div className="mt-32">
          <h2 className="text-3xl font-semibold text-center text-gray-900">
            Financial Insights for <span className="text-emerald-600">Smarter Decisions</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-16 mt-16">
            <InsightBlock
              icon={<BarChart3 />}
              title="Real-Time Dashboards"
              bullets={[
                "Live revenue & payment tracking",
                "Instant invoice status updates",
                "Multi-device dashboard access",
                "Centralized financial visibility"
              ]}
            />

            <InsightBlock
              icon={<TrendingUp />}
              title="Trend Analysis"
              bullets={[
                "Seasonal trend identification",
                "Predict future cash inflows",
                "Performance comparison metrics",
                "Revenue pattern insights"
              ]}
            />

            <InsightBlock
              icon={<Eye />}
              title="Customer Insights"
              bullets={[
                "Reliable vs risky customers",
                "Late payment detection",
                "Behavior analytics & segmentation",
                "Improve collection strategy"
              ]}
            />

            <InsightBlock
              icon={<FileBarChart />}
              title="Performance Reports"
              bullets={[
                "Exportable financial reports",
                "Audit-ready documentation",
                "Cash flow & aging summaries",
                "Compliance reporting support"
              ]}
            />
          </div>
        </div>

        {/* ================= PREDICTIVE INTELLIGENCE ================= */}
        <div className="mt-28 text-center">
          <h3 className="text-3xl font-semibold text-gray-900">
            Predict the Future of Your Revenue
          </h3>
          <p className="text-gray-500 mt-3">
            AI-powered insights anticipate cash flow gaps and growth opportunities.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              "Forecast revenue trends",
              "Detect payment slowdowns",
              "Identify growth opportunities",
            ].map((text, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="relative overflow-hidden bg-white rounded-xl shadow border border-gray-200 py-6 font-medium"
              >
                <div className="absolute inset-0 opacity-0 bg-emerald-300/20 blur-2xl transition group-hover:opacity-100" />
                {text}
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= SMART ANALYTICS ================= */}
        <div className="mt-28">
          <h3 className="text-2xl font-semibold text-center text-gray-900">
            Smart Analytics Intelligence
          </h3>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              ["Revenue Forecasting", <TrendingUp />],
              ["Risk Detection", <AlertTriangle />],
              ["Performance Metrics", <Activity />],
              ["Customer Segmentation", <Eye />],
              ["Growth Insights", <BrainCircuit />],
              ["Predictive Intelligence", <Sparkles />],
            ].map(([title, icon], i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden bg-slate-900 text-white p-6 rounded-xl shadow-md cursor-pointer"
              >
                <div className="absolute inset-0 opacity-0 bg-emerald-400/20 blur-2xl transition group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="text-emerald-400 mb-3">{icon}</div>
                  {title}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

/* reusable insight block */

function InsightBlock({ icon, title, bullets }: InsightBlockProps) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-3 text-gray-900">
        <div className="text-emerald-600">{icon}</div>
        <h4 className="font-semibold text-lg">{title}</h4>
      </div>

      <ul className="space-y-2 text-gray-600">
        {bullets.map((b, i) => (
          <li key={i}>• {b}</li>
        ))}
      </ul>

      <motion.button
        whileHover={{ scale: 1.05 }}
        className="mt-4 px-4 py-2 border border-emerald-500 text-emerald-600 rounded-md text-sm hover:bg-emerald-50"
      >
        Learn More →
      </motion.button>
    </div>
  )
}