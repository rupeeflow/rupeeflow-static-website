"use client"

import Container from "@/components/ui/Container"
import MainCTA from "@/components/ui/mainCTA"
import CardFAQ from "@/components/sections/CardFAQ"
import { motion } from "framer-motion"

import {
  Users,
  CalendarClock,
  ShieldCheck,
  Wallet,
  BarChart3,
  CheckCircle,
  FileText,
  TrendingUp,
  BellRing,
  ClipboardCheck,
  Layers,
  Zap,
  Eye
} from "lucide-react"

/* ================= FLOATING INSIGHT CARDS ================= */

function VendorSpendCard() {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity }}
    >
      <p className="text-sm text-gray-400">Vendor Spend</p>
      <p className="text-2xl font-bold text-gray-900 mt-2">₹8.4L</p>

      <div className="mt-4 h-2 bg-gray-200 rounded overflow-hidden">
        <div className="h-full bg-emerald-500" style={{ width: "72%" }} />
      </div>

      <p className="text-xs text-gray-400 mt-2">Monthly budget utilization</p>
    </motion.div>
  )
}

function VendorPerformanceCard() {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 7, repeat: Infinity }}
    >
      <p className="text-sm text-gray-400 mb-3">Vendor Performance</p>

      {[
        ["On-time Delivery", "94%"],
        ["Quality Score", "92%"],
        ["Compliance", "100%"],
      ].map(([label, value], i) => (
        <div key={i} className="flex justify-between text-sm py-1">
          <span className="text-gray-600">{label}</span>
          <span className="font-semibold text-emerald-600">{value}</span>
        </div>
      ))}
    </motion.div>
  )
}

function DuePaymentsCard() {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm"
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 5, repeat: Infinity }}
    >
      <p className="text-sm text-gray-400">Upcoming Payments</p>

      <div className="mt-3 space-y-2 text-sm">
        <div className="flex justify-between">
          <span>ABC Supplies</span>
          <span className="text-amber-500">Due Tomorrow</span>
        </div>
        <div className="flex justify-between">
          <span>Global Metals</span>
          <span className="text-gray-600">Due in 3 days</span>
        </div>
      </div>
    </motion.div>
  )
}

/* ================= PAGE ================= */

export default function VendorManagementPage() {

  const faqs = [
    {
      question: "Can I manage all vendor data in one place?",
      answer: "Yes. Store vendor contacts, contracts, payment terms, and compliance documents securely."
    },
    {
      question: "Can vendor payments be automated?",
      answer: "Schedule recurring and one-time payments to ensure timely vendor settlements."
    },
    {
      question: "Does the system track outstanding dues?",
      answer: "Track liabilities, due dates, and payment status from a centralized dashboard."
    },
    {
      question: "Is vendor information secure and compliant?",
      answer: "All vendor data is encrypted and stored securely to meet compliance standards."
    },
  ]

  return (
    <>
      {/* HERO */}
      <section className="bg-[#020506] text-white">
        <Container className="py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <h1 className="text-6xl font-bold">
                Vendor{" "}
                <span className="bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
                  Management
                </span>
              </h1>

              <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                Streamline onboarding, automate vendor payments, and gain
                real-time financial visibility with a centralized vendor ecosystem.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  { icon: Users, text: "Centralized vendor directory & profiles" },
                  { icon: CalendarClock, text: "Automated & scheduled vendor payments" },
                  { icon: Wallet, text: "Real-time outstanding dues tracking" },
                  { icon: ShieldCheck, text: "Secure & compliance-ready storage" },
                ].map((item,i)=>{
                  const Icon = item.icon
                  return(
                    <li key={i} className="flex items-center gap-4">
                      <div className="w-9 h-9 bg-emerald-500/15 rounded-lg flex items-center justify-center">
                        <Icon size={18} className="text-emerald-400"/>
                      </div>
                      <span className="text-gray-300">{item.text}</span>
                    </li>
                  )
                })}
              </ul>

              <div className="mt-10">
                <MainCTA label="Manage Vendors" destination="/contact"/>
              </div>
            </div>

            {/* animated insight cards */}
            <div className="space-y-6 flex flex-col items-center">
              <VendorSpendCard />
              <VendorPerformanceCard />
              <DuePaymentsCard />
            </div>

          </div>
        </Container>
      </section>

      {/* KPI STRIP */}
      <section className="py-16 bg-[#0C1F18]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center">
          {[
            { value: "40%", label: "Faster Vendor Processing" },
            { value: "100%", label: "Payment Transparency" },
            { value: "60%", label: "Reduced Manual Work" },
            { value: "24/7", label: "Vendor Visibility" },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-4xl font-bold text-white">{stat.value}</p>
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VENDOR INTELLIGENCE */}
      <section className="py-24 bg-gray-100">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">

            <div>
              <h3 className="text-2xl font-semibold">Vendor Intelligence & Insights</h3>
              <p className="text-gray-600 mt-4">
                Gain complete visibility into vendor performance, payment trends,
                and operational reliability to strengthen procurement decisions.
              </p>

              <ul className="mt-6 space-y-2 text-gray-700">
                <li className="flex gap-2"><CheckCircle size={18}/> Vendor performance scoring</li>
                <li className="flex gap-2"><CheckCircle size={18}/> Payment & pricing trend analysis</li>
                <li className="flex gap-2"><CheckCircle size={18}/> Reliability & delivery tracking</li>
                <li className="flex gap-2"><CheckCircle size={18}/> Spend analytics & optimization</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg aspect-video" />
          </div>
        </Container>
      </section>

      {/* AUTOMATION & WORKFLOWS */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">

            <div className="bg-white rounded-2xl shadow-lg aspect-video" />

            <div>
              <h3 className="text-2xl font-semibold">Automation & Workflow Control</h3>
              <p className="text-gray-600 mt-4">
                Reduce manual workload and eliminate delays with automated workflows
                designed for finance and procurement teams.
              </p>

              <ul className="mt-6 space-y-2 text-gray-700">
                <li className="flex gap-2"><CheckCircle size={18}/> Approval workflows & payment routing</li>
                <li className="flex gap-2"><CheckCircle size={18}/> Smart payment scheduling</li>
                <li className="flex gap-2"><CheckCircle size={18}/> Reminder & escalation automation</li>
                <li className="flex gap-2"><CheckCircle size={18}/> Exception handling alerts</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* COMPLIANCE & RISK */}
      <section className="py-24 bg-gray-100">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">

            <div>
              <h3 className="text-2xl font-semibold">Compliance & Risk Management</h3>
              <p className="text-gray-600 mt-4">
                Protect your financial operations with compliance monitoring,
                audit-ready documentation, and fraud detection tools.
              </p>

              <ul className="mt-6 space-y-2 text-gray-700">
                <li className="flex gap-2"><CheckCircle size={18}/> Compliance document storage</li>
                <li className="flex gap-2"><CheckCircle size={18}/> Audit-ready vendor records</li>
                <li className="flex gap-2"><CheckCircle size={18}/> Fraud & anomaly detection</li>
                <li className="flex gap-2"><CheckCircle size={18}/> Risk alerts & monitoring</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg aspect-video" />
          </div>
        </Container>
      </section>

      <CardFAQ faqs={faqs}/>

      {/* FINAL CTA */}
      <section className="py-24 text-center bg-[#020506]">
        <h3 className="text-4xl text-white font-semibold">
          Build stronger vendor relationships with smarter management
        </h3>
        <p className="text-gray-400 mt-4">
          Automates payments, ensures compliance, and gives full vendor visibility.
        </p>
        <div className="mt-8 flex justify-center">
          <MainCTA label="Start Managing Vendors" destination="/contact"/>
        </div>
      </section>
    </>
  )
}