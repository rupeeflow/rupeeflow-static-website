import Container from '@/components/ui/Container'
import MainCTA from '@/components/ui/mainCTA'
import Image from 'next/image'
import { expenseFAQs } from "@/data/expenseCardFaqs"
import {
  Check,
  Receipt,
  ClipboardCheck,
  Users,
  BarChart4,
  ShieldCheck,
  Workflow,
} from 'lucide-react'
import CardFAQ from '@/components/sections/CardFAQ'

export default function ExpenseManagementCardsPage() {
  return (
    <>
      {/* HERO */}
      <Container className="py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <h1 className="text-6xl font-bold text-white leading-tight">
              Expense Management{" "}
              <span className="bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
                Cards
              </span>
            </h1>

            <p className="mt-6 text-gray-300 text-lg leading-relaxed">
              Simplify business expense tracking with smart cards designed to
              automate approvals, enforce policies, and provide real-time
              financial visibility across your organization.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                { icon: Receipt, text: "Auto-capture receipts & match expenses" },
                { icon: ClipboardCheck, text: "Policy-based approvals & workflows" },
                { icon: Users, text: "Assign cards by team, role, or project" },
                { icon: ShieldCheck, text: "Ensure compliance & audit readiness" },
                { icon: BarChart4, text: "Live expense insights & reporting" },
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
              <MainCTA label="Get Expense Cards" destination="/contact" />
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl">
            <Image
              src="/expense-management-hero.png"
              alt="Expense management dashboard preview"
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
          <h2 className="text-5xl font-semibold text-white">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
              Expense Cards
            </span>
            ?
          </h2>

          <p className="mt-3 text-xl text-gray-300">
            Automate expense workflows while maintaining complete financial control.
          </p>
        </div>

        <div className="mt-14 max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Automated Workflows",
              desc: "Streamline expense approvals and eliminate manual processes.",
            },
            {
              title: "Policy Enforcement",
              desc: "Ensure compliance with company spending policies in real time.",
            },
            {
              title: "Audit & Compliance Ready",
              desc: "Maintain accurate records and simplify audits effortlessly.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-7 rounded-2xl border border-white/10 bg-[#0F0F0F]
              hover:-translate-y-1 transition
              hover:border-emerald-400/40
              hover:shadow-[0_0_25px_rgba(0,239,100,0.15)]"
            >
              <h3 className="text-white font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-400 mt-3">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURE SECTIONS */}
      <div className="py-24 bg-gradient-to-b from-[#0F0F0F] to-[#0C1F18]">
        <div className="max-w-6xl mx-auto px-6 space-y-28">

          {[
            {
              title: "Receipt Automation",
              desc: "Capture receipts instantly and match them with transactions.",
              points: ["Mobile receipt capture", "Auto expense matching", "Digital storage"],
              image: "Receipt Capture Preview",
            },
            {
              title: "Approval Workflows",
              desc: "Route expenses through automated approval hierarchies.",
              points: ["Multi-level approvals", "Custom workflows", "Faster reimbursements"],
              image: "Workflow Preview",
            },
            {
              title: "Policy Enforcement",
              desc: "Control spending with rules and real-time policy checks.",
              points: ["Spending categories", "Limit enforcement", "Real-time alerts"],
              image: "Policy Control Preview",
            },
            {
              title: "Expense Analytics",
              desc: "Gain insights to optimize budgets and reduce unnecessary spend.",
              points: ["Spend breakdown", "Trend analysis", "Exportable reports"],
              image: "Analytics Preview",
            },
          ].map((item, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-14 items-center">

              {/* IMAGE */}
              <div className={`${i % 2 ? "md:order-2" : ""} bg-white/5 border border-white/10 rounded-2xl aspect-video flex items-center justify-center text-gray-500`}>
                {item.image}
              </div>

              {/* TEXT */}
              <div className={`${i % 2 ? "md:order-1" : ""}`}>
                <h3 className="text-2xl font-semibold text-white">
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
      <div className="py-14 border-y border-white/10 text-center">
        <p className="text-lg font-medium bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
          Built for finance teams seeking control, compliance, and efficiency.
        </p>
      </div>


      <CardFAQ faqs={expenseFAQs} />

      {/* FINAL CTA */}
      <div className="py-28 text-center">
        <h3 className="text-4xl text-white font-semibold">
          Transform your expense management today
        </h3>
        <p className="text-gray-400 mt-4">
          Automate workflows, enforce policies, and gain real-time visibility.
        </p>

        <div className="mt-8 flex justify-center">
          <MainCTA label="Get Expense Cards" destination="/contact" />
        </div>
      </div>
    </>
  )
}
