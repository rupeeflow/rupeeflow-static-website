"use client"

import Container from "@/components/ui/Container"
import MainCTA from "@/components/ui/mainCTA"
import CardFAQ from "@/components/sections/CardFAQ"

import {
  RefreshCcw,
  FileCheck,
  ShieldCheck,
  AlertTriangle,
  CheckCircle
} from "lucide-react"

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
      {/* HERO */}
      <Container className="py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <h1 className="text-6xl font-bold text-white leading-tight">
              Auto{" "}
              <span className="bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
                Reconciliation
              </span>
            </h1>

            <p className="mt-6 text-gray-400 text-lg leading-relaxed">
              Automatically match payments with invoices and settlements to
              eliminate manual reconciliation, prevent financial discrepancies,
              and ensure accounting accuracy.
            </p>

            {/* FEATURES */}
            <ul className="mt-8 space-y-4">
              {[
                { icon: RefreshCcw, text: "Automatic transaction matching" },
                { icon: FileCheck, text: "Invoice & settlement verification" },
                { icon: AlertTriangle, text: "Mismatch & duplicate detection" },
                { icon: ShieldCheck, text: "Audit-ready compliance logs" },
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
              <MainCTA label="Automate Reconciliation" destination="/contact" />
            </div>
          </div>

          {/* RIGHT PREVIEW (single → white) */}
          <div className="bg-white rounded-2xl border border-emerald-200 shadow-xl aspect-video flex items-center justify-center hover:shadow-[0_0_30px_rgba(0,239,100,0.25)] transition">
            <span className="text-emerald-500 text-sm font-medium">
              Reconciliation Dashboard Preview
            </span>
          </div>

        </div>
      </Container>

      {/* WHY CHOOSE */}
      <section className="py-20 bg-gradient-to-b from-[#0F0F0F] to-[#020506]">
        <div className="text-center max-w-3xl mx-auto px-6">
          <h2 className="text-5xl font-semibold text-white">
            Why Businesses Choose{" "}
            <span className="text-emerald-400">Auto Reconciliation</span>
          </h2>

          <p className="mt-4 text-xl text-gray-300">
            Ensure financial accuracy while eliminating manual accounting work.
          </p>
        </div>

        <div className="mt-14 max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Save Accounting Hours",
              desc: "Eliminate manual matching and repetitive reconciliation tasks.",
            },
            {
              title: "Prevent Financial Errors",
              desc: "Detect mismatches and duplicates instantly.",
            },
            {
              title: "Audit-Ready Records",
              desc: "Maintain complete logs for compliance and reporting.",
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
                Smart Matching Engine
              </h3>

              <p className="text-gray-600 mt-4">
                Automatically match payments with invoices and bank settlements
                to eliminate discrepancies and ensure accurate financial records.
              </p>

              <ul className="mt-6 space-y-3">
                {["Invoice matching", "Settlement validation", "Duplicate detection"].map((p, i) => (
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
                Error Detection & Audit Trail
              </h3>

              <p className="text-gray-600 mt-4">
                Identify mismatches instantly and maintain detailed logs
                for audit readiness and financial transparency.
              </p>

              <ul className="mt-6 space-y-3">
                {["Mismatch alerts", "Compliance-ready logs", "Transaction history"].map((p, i) => (
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
            Financial Accuracy Without Manual Effort
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Auto reconciliation improves accounting accuracy, reduces financial risk,
            and ensures compliance while saving valuable operational time.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <CardFAQ faqs={faqs} />

      {/* FINAL CTA */}
      <section className="py-24 text-center">
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