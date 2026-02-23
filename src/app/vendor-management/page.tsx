"use client"

import Container from "@/components/ui/Container"
import MainCTA from "@/components/ui/mainCTA"
import CardFAQ from "@/components/sections/CardFAQ"
import { Users, CalendarClock, ShieldCheck, Wallet, CheckCircle } from "lucide-react"

export default function VendorManagementPage() {

  const faqs = [
    {
      question: "Can I store vendor details securely?",
      answer: "Yes. Vendor data is encrypted and securely stored for safe access and compliance."
    },
    {
      question: "Can vendor payments be scheduled?",
      answer: "Schedule payments in advance to avoid delays and maintain strong vendor relationships."
    },
    {
      question: "Does it track vendor payment history?",
      answer: "Yes. View complete payment history and outstanding dues in one dashboard."
    },
    {
      question: "Can I receive alerts for due payments?",
      answer: "Automated reminders ensure you never miss vendor payment deadlines."
    },
  ]

  return (
    <>
      <Container className="py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h1 className="text-6xl font-bold text-white">
              Vendor{" "}
              <span className="bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
                Management
              </span>
            </h1>

            <p className="mt-6 text-gray-400 text-lg">
              Manage vendors, schedule payments, and maintain transparent financial relationships from one centralized dashboard.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                { icon: Users, text: "Centralized vendor directory" },
                { icon: CalendarClock, text: "Schedule vendor payments" },
                { icon: Wallet, text: "Track outstanding dues" },
                { icon: ShieldCheck, text: "Secure & compliant data storage" },
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

          {/* single preview */}
          <div className="bg-white border border-emerald-200 rounded-2xl shadow-xl aspect-video flex items-center justify-center">
            <span className="text-gray-400 text-sm">Vendor Dashboard Preview</span>
          </div>
        </div>
      </Container>

      {/* dual preview → gray */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 space-y-20">

          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div className="bg-gray-100 border border-gray-200 rounded-2xl aspect-video flex items-center justify-center">Preview</div>
            <div>
              <h3 className="text-2xl font-semibold">Centralized Vendor Insights</h3>
              <p className="text-gray-600 mt-4">View vendor balances, transaction history, and due schedules in one place.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <h3 className="text-2xl font-semibold">Timely & Automated Payments</h3>
              <p className="text-gray-600 mt-4">Automate recurring vendor payments to maintain trust and prevent delays.</p>
            </div>
            <div className="bg-gray-100 border border-gray-200 rounded-2xl aspect-video flex items-center justify-center">Preview</div>
          </div>

        </div>
      </section>

      <CardFAQ faqs={faqs}/>

      <section className="py-24 text-center">
        <h3 className="text-4xl text-white font-semibold">
          Simplify vendor payments and relationships
        </h3>
        <p className="text-gray-400 mt-4">
          Automate scheduling and maintain transparency with every vendor.
        </p>
        <div className="mt-8 flex justify-center">
          <MainCTA label="Get Started" destination="/contact"/>
        </div>
      </section>
    </>
  )
}