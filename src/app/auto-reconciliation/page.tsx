"use client"

import Container from "@/components/ui/Container"
import MainCTA from "@/components/ui/mainCTA"
import CardFAQ from "@/components/sections/CardFAQ"
import { motion } from "framer-motion"
import { RefreshCcw, FileCheck } from "lucide-react"
import {
  GitMerge,
  AlertTriangle,
  ShieldCheck,
  FileText,
  CheckCircle
} from "lucide-react"


/* ================= FLOATING MATCH CARD ================= */

function ReconciliationCard() {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity }}
      className="bg-white rounded-2xl shadow-xl border border-emerald-200 p-6 w-full max-w-md"
    >
      <div className="flex justify-between text-sm text-gray-400 mb-4">
        <span>Reconciliation</span>
        <span className="text-emerald-600 font-medium">✓ Synced</span>
      </div>

      {[
        ["Invoices", "124"],
        ["Matched", "120"],
        ["Mismatched", "4"],
      ].map(([label, value]) => (
        <div key={label} className="flex justify-between text-sm py-1">
          <span className="text-gray-600">{label}</span>
          <span
            className={`font-semibold ${
              label === "Matched"
                ? "text-emerald-600"
                : label === "Mismatched"
                ? "text-red-500"
                : "text-gray-800"
            }`}
          >
            {value}
          </span>
        </div>
      ))}

      <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-emerald-500"
          initial={{ width: 0 }}
          whileInView={{ width: "92%" }}
          transition={{ duration: 1.2 }}
        />
      </div>
    </motion.div>
  )
}



/* ================= ALERT CARD ================= */

function AlertCard() {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity }}
      className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md"
    >
      <p className="text-sm text-gray-400 mb-4">Recent Alerts</p>

      {[
        ["Invoice #784 mismatch", "Needs review"],
        ["Duplicate payment detected", "Resolved"],
        ["Settlement variance", "Investigating"],
      ].map(([title, status]) => (
        <div
          key={title}
          className="flex justify-between text-sm py-2 border-b last:border-none"
        >
          <span className="text-gray-700">{title}</span>
          <span
            className={`font-medium ${
              status === "Resolved"
                ? "text-emerald-600"
                : "text-amber-500"
            }`}
          >
            {status}
          </span>
        </div>
      ))}
    </motion.div>
  )
}



export default function AutoReconciliationPage() {
  const faqs = [
    {
      question: "How does auto reconciliation work?",
      answer:
        "Transactions are automatically matched with invoices, settlements, and bank records to ensure accuracy without manual effort.",
    },
    {
      question: "Can mismatched transactions be detected?",
      answer:
        "Yes. The system instantly flags discrepancies, duplicates, and unmatched entries for quick resolution.",
    },
    {
      question: "Is reconciliation audit-ready?",
      answer:
        "Every reconciliation is logged with timestamps and records, making audits and compliance reporting seamless.",
    },
    {
      question: "Will automation reduce accounting workload?",
      answer:
        "Auto reconciliation eliminates manual matching, saving hours of accounting time and reducing errors.",
    },
    {
      question: "Does it support large transaction volumes?",
      answer:
        "Yes. The system is designed to reconcile high-volume transactions with speed and accuracy.",
    },
  ]

  return (
    <>
      {/* ================= HERO ================= */}
      
      <section className="bg-[#020506]">
        <Container className="py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-6xl font-bold text-white leading-tight">
                Auto{" "}
                <span className="bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
                  Reconciliation
                </span>
              </h1>

              <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                Automatically match payments with invoices and settlements
                to eliminate manual reconciliation, prevent discrepancies,
                and ensure financial accuracy.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  { icon: RefreshCcw, text: "Automatic transaction matching" },
                  { icon: FileCheck, text: "Invoice & settlement verification" },
                  { icon: AlertTriangle, text: "Mismatch & duplicate detection" },
                  { icon: ShieldCheck, text: "Audit-ready compliance logs" },
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-9 h-9 rounded-lg bg-emerald-500/15 flex items-center justify-center">
                        <Icon size={18} className="text-emerald-400" />
                      </div>
                      <span className="text-gray-300">{item.text}</span>
                    </motion.li>
                  )
                })}
              </ul>

              <div className="mt-10">
                <MainCTA label="Automate Reconciliation" destination="/contact" />
              </div>
            </motion.div>

            <ReconciliationCard />

          </div>
        </Container>
      </section>


    

      {/* ================= SMART MATCH + AUDIT ================= */}
      {/* ================= MATCHING, AUDIT & COMPLIANCE ================= */}

<section className="py-28 bg-gray-100">
  <Container>

    {/* SECTION HEADER */}
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-semibold text-black">
        Intelligent Matching & Audit Transparency
      </h2>
      <p className="mt-4 text-gray-600 text-lg leading-relaxed">
        Automates reconciliation workflows while ensuring financial visibility,
        compliance readiness, and real-time discrepancy detection.
      </p>
    </div>


    <div className="mt-20 space-y-28">

      {/* ===================================================== */}
      {/* SMART MATCHING ENGINE */}
      {/* ===================================================== */}
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* UNIQUE VISUAL: MATCH FLOW */}
        <div className="relative">

          <div className="bg-white border border-emerald-200 rounded-2xl shadow-xl p-10">
            <p className="text-sm text-gray-400 mb-8 text-center">
              Payment → Invoice → Settlement Matching Flow
            </p>

            <div className="flex items-center justify-between text-xs text-gray-600">

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-2">
                  ₹
                </div>
                Payments
              </div>

              <div className="flex-1 h-[2px] bg-emerald-300 mx-4 relative">
                <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -top-[5px] left-1/2 animate-pulse"></div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                  📄
                </div>
                Invoices
              </div>

              <div className="flex-1 h-[2px] bg-emerald-300 mx-4 relative">
                <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -top-[5px] left-1/2 animate-pulse"></div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-2">
                  ✓
                </div>
                Settled
              </div>

            </div>
          </div>

          {/* floating stat badge */}
          <div className="absolute -bottom-8 right-8 bg-white shadow-lg rounded-lg px-4 py-2 text-sm border border-emerald-200">
            92% auto-matched
          </div>

        </div>


        {/* CONTENT */}
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
              <GitMerge className="text-emerald-600" size={20} />
            </div>
            <h3 className="text-2xl font-semibold text-black">
              Smart Matching Engine
            </h3>
          </div>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Automatically match payments with invoices and settlements to
            eliminate discrepancies and maintain accurate financial records.
          </p>

          <ul className="mt-6 space-y-3">
            {[
              "Invoice-to-payment matching",
              "Settlement & payout validation",
              "Duplicate & anomaly detection",
              "Instant reconciliation updates",
              "Real-time sync across systems",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle size={18} className="text-emerald-500" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>

          <button className="mt-8 px-6 py-2.5 border border-emerald-500 text-emerald-600 rounded-lg hover:bg-emerald-50 transition">
            Learn More →
          </button>
        </div>
      </div>



      {/* ===================================================== */}
      {/* ERROR DETECTION & AUDIT */}
      {/* ===================================================== */}
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* CONTENT */}
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
             <AlertTriangle className="text-amber-600" size={20} />
            </div>
            <h3 className="text-2xl font-semibold text-black">
              Error Detection & Audit Trail
            </h3>
          </div>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Detect mismatches instantly and maintain a complete audit trail
            for transparency, compliance, and faster financial reviews.
          </p>

          <ul className="mt-6 space-y-3">
            {[
              "Real-time mismatch alerts",
              "Compliance-ready audit logs",
              "Transaction-level history",
              "Fraud & anomaly detection",
              "Financial transparency & traceability",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle size={18} className="text-emerald-500" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>

          <button className="mt-8 px-6 py-2.5 border border-emerald-500 text-emerald-600 rounded-lg hover:bg-emerald-50 transition">
            Explore Compliance →
          </button>
        </div>


        {/* ALERT PANEL */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">

          <div className="flex justify-between text-sm text-gray-400 mb-4">
            <span>System Monitoring</span>
            <span className="text-emerald-600 font-medium">Live</span>
          </div>

          {[
            ["Invoice mismatch detected", "Needs review"],
            ["Duplicate payment prevented", "Resolved"],
            ["Settlement variance flagged", "Investigating"],
          ].map(([title, status], i) => (
            <div
              key={i}
              className="flex justify-between py-3 border-b last:border-none text-sm"
            >
              <span className="text-gray-700">{title}</span>
              <span className={`font-medium ${
                status === "Resolved"
                  ? "text-emerald-600"
                  : "text-amber-500"
              }`}>
                {status}
              </span>
            </div>
          ))}

          <div className="mt-5 text-xs text-gray-400">
            Alerts are automatically logged for compliance records.
          </div>
        </div>
      </div>



      {/* ===================================================== */}
      {/* COMPLIANCE & FINANCIAL TRANSPARENCY (NEW) */}
      {/* ===================================================== */}
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* VISUAL */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">

          <div className="flex justify-between text-sm text-gray-400 mb-4">
            <span>Compliance Status</span>
            <span className="text-emerald-600 font-medium">Secure</span>
          </div>

          {[
            ["PCI DSS compliance", "Verified"],
            ["Encrypted data storage", "Active"],
            ["Audit logs secured", "Protected"],
          ].map(([title, status], i) => (
            <div
              key={i}
              className="flex justify-between py-3 border-b last:border-none text-sm"
            >
              <span className="text-gray-700">{title}</span>
              <span className="text-emerald-600 font-medium">{status}</span>
            </div>
          ))}

          <p className="mt-4 text-xs text-gray-400">
            Security controls ensure financial data integrity and compliance readiness.
          </p>
        </div>


        {/* CONTENT */}
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
              <ShieldCheck className="text-emerald-600" size={20} />
            </div>
            <h3 className="text-2xl font-semibold text-black">
              Compliance & Financial Transparency
            </h3>
          </div>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Maintain regulatory compliance and financial transparency with
            encrypted data protection, secure audit records, and reporting
            standards designed for financial accountability.
          </p>

          <ul className="mt-6 space-y-3">
            {[
              "PCI DSS & security compliance support",
              "Encrypted transaction & customer data",
              "Secure audit record retention",
              "Regulatory reporting readiness",
              "Trust & accountability for stakeholders",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <FileText size={18} className="text-emerald-500" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>

          <button className="mt-8 px-6 py-2.5 border border-emerald-500 text-emerald-600 rounded-lg hover:bg-emerald-50 transition">
            View Security Standards →
          </button>
        </div>

      </div>

    </div>
  </Container>
</section>


      {/* FAQ */}
      <CardFAQ faqs={faqs} />

      {/* FINAL CTA */}
      <section className="py-24 text-center bg-[#020506]">
        <h3 className="text-4xl text-white font-semibold">
          Eliminate reconciliation errors today
        </h3>
        <p className="text-gray-400 mt-4">
          Automate matching, reduce errors, and ensure financial accuracy.
        </p>
        <div className="mt-8 flex justify-center">
          <MainCTA label="Start Automation" destination="/contact" />
        </div>
      </section>
    </>
  )
}