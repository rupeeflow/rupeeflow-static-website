"use client"

import Container from "@/components/ui/Container"
import MainCTA from "@/components/ui/mainCTA"
import CardFAQ from "@/components/sections/CardFAQ"

import {
  BellRing,
  CalendarClock,
  Mail,
  ShieldCheck,
  LineChart,
  Zap,
  Eye,
  Link as LinkIcon,
  Layers
} from "lucide-react"

export default function PaymentRemindersPage() {

  const faqs = [
    {
      question: "Can I customize reminder schedules?",
      answer:
        "Yes. Configure reminder workflows aligned with billing cycles, customer risk profiles, and compliance requirements."
    },
    {
      question: "Which channels are supported?",
      answer:
        "Reminders can be delivered via SMS, email, and in-app notifications through secure and verified delivery infrastructure."
    },
    {
      question: "Will customers receive multiple reminders?",
      answer:
        "You control reminder cadence, escalation timing, and communication tone to maintain professionalism and regulatory compliance."
    },
    {
      question: "Can I track reminder delivery status?",
      answer:
        "Yes. Monitor delivery status, engagement metrics, and payment responses in real time from a centralized dashboard."
    },
    {
      question: "How do reminders improve cash flow?",
      answer:
        "Automated reminders reduce payment delays, accelerate settlements, and improve working capital efficiency."
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
                  Reminders
                </span>
              </h1>

              <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                Automate payment follow-ups with compliant, enterprise-grade reminder workflows. Improve collection efficiency, maintain professional customer communication, and accelerate cash flow with secure and intelligent automation.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  { icon: BellRing, text: "Intelligent due-date & overdue alerts" },
                  { icon: CalendarClock, text: "Custom scheduling & escalation rules" },
                  { icon: Mail, text: "Multi-channel delivery with verified routing" },
                  { icon: ShieldCheck, text: "Secure, compliant & professional communication" },
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
                <MainCTA label="Start Secure Automation" destination="/contact" />
              </div>
            </div>

            {/* IMAGE PLACEHOLDER */}
            <div className="bg-white rounded-2xl border border-emerald-500 shadow-xl aspect-video flex items-center justify-center">
              <span className="text-emerald-500 text-sm font-medium">
                Dashboard Preview
              </span>
            </div>

          </div>
        </Container>
      </section>

      {/* COLLECTION REMINDERS CONTENT */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-semibold text-center text-black">
      Collection Reminders for <span className="text-emerald-600">All Business Types</span>
    </h2>

    <div className="mt-20 space-y-24">

      {/* 1 */}
      <div className="grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h3 className="text-xl font-bold text-black">Choice of Reminder Types</h3>
          <p className="mt-4 text-gray-600">
            Configure intelligent reminder workflows based on billing cycles,
            customer behavior, and payment risk profiles.
          </p>
          <button className="mt-6 border border-emerald-500 text-emerald-600 px-5 py-2 rounded-lg text-sm font-bold hover:bg-emerald-50 transition">
            Start Setup →
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
          <h3 className="text-xl font-bold text-black">Absolute Visibility</h3>
          <p className="mt-4 text-gray-600">
            Gain real-time insights into payment patterns, reminder performance,
            and receivable risk indicators.
          </p>
          <button className="mt-6 border border-emerald-500 text-emerald-600 px-5 py-2 rounded-lg text-sm font-bold hover:bg-emerald-50 transition">
            View Insights →
          </button>
        </div>
      </div>

      {/* 3 */}
      <div className="grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h3 className="text-xl font-bold text-black">Embedded Payment Links</h3>
          <p className="mt-4 text-gray-600">
            Deliver secure, bank-grade payment links within reminders to enable
            instant settlements through trusted payment channels.
          </p>
          <button className="mt-6 border border-emerald-500 text-emerald-600 px-5 py-2 rounded-lg text-sm font-bold hover:bg-emerald-50 transition">
            Enable Payments →
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
          <h3 className="text-xl font-bold text-black">Total Control & Flexibility</h3>
          <p className="mt-4 text-gray-600">
            Define channels, escalation logic, and timing rules while ensuring
            compliance and consistent customer communication.
          </p>
          <button className="mt-6 border border-emerald-500 text-emerald-600 px-5 py-2 rounded-lg text-sm font-bold hover:bg-emerald-50 transition">
            Customize Workflow →
          </button>
        </div>
      </div>

    </div>
  </div>
        </Container>
      </section>

      {/* SMART PAYMENT INTELLIGENCE */}
      <section className="py-24 bg-white">
        <Container>
         <div className="max-w-6xl mx-auto px-6 text-center">

    <h2 className="text-3xl font-semibold text-black">
      Smart Payment Intelligence
    </h2>

    <div className="mt-14 grid md:grid-cols-3 gap-8">

      {[
        {
          title: "Payment Behavior Insights",
          desc: "Analyze customer payment patterns to optimize collection strategies.",
        },
        {
          title: "Predict Late Payments",
          desc: "Identify high-risk invoices using intelligent indicators.",
        },
        {
          title: "Automated Escalations",
          desc: "Trigger compliant follow-ups for overdue receivables.",
        },
        {
          title: "Customer Risk Scoring",
          desc: "Segment customers based on payment reliability.",
        },
        {
          title: "Collection Performance Analytics",
          desc: "Measure recovery efficiency and workflow effectiveness.",
        },
      ].map((item, i) => (
        <div key={i} className="group bg-black border border-white/10 p-7 rounded-xl text-left transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400/40 hover:bg-gradient-to-br hover:from-[#02140f] hover:to-black hover:shadow-[0_0_25px_rgba(0,239,100,0.25)]">
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


{/* ===== ADVANCED COLLECTION REMINDERS ===== */}
<section className="py-24 bg-gray-100">
  <div className="max-w-6xl mx-auto px-6">

    {/* TITLE */}
    <h2 className="text-4xl md:text-5xl font-semibold text-center text-gray-900">
      Automated Reminders for Collection
    </h2>

    <p className="text-center text-gray-500 mt-4 max-w-2xl mx-auto">
      Accelerate collections, strengthen customer engagement, and gain real-time visibility
      into payment behavior with intelligent reminder automation.
    </p>

    <div className="mt-20 space-y-24">

      {/* ROW 1 */}
      <div className="grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h3 className="text-3xl font-bold text-black">Automation</h3>
          <p className="mt-4 text-gray-800 leading-relaxed">
            Automate reminder workflows and eliminate manual follow-ups while ensuring
            timely notifications that improve collection efficiency and cash flow.
          </p>

          <button className="mt-6 border border-emerald-500 text-emerald-500 px-6 py-2 rounded-lg text-sm font-bold hover:bg-emerald-500/10 transition">
            Get Started →
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 aspect-video flex items-center justify-center">
          <span className="text-gray-400 text-sm">Preview</span>
        </div>
      </div>

      {/* ROW 2 */}
      <div className="grid md:grid-cols-2 gap-14 items-center">
        <div className="order-2 md:order-1 bg-white rounded-2xl shadow-lg border border-gray-200 aspect-video flex items-center justify-center">
          <span className="text-gray-400 text-sm">Preview</span>
        </div>

        <div className="order-1 md:order-2">
          <h3 className="text-2xl font-bold text-black">Payment Links</h3>
          <p className="mt-4 text-gray-800 leading-relaxed">
            Embed secure, bank-grade payment links directly within reminders to enable
            instant customer payments and faster settlements.
          </p>

          <button className="mt-6 border border-emerald-500 text-emerald-500 px-6 py-2 rounded-lg text-sm font-bold hover:bg-emerald-500/10 transition">
            Learn More →
          </button>
        </div>
      </div>

      {/* ROW 3 */}
      <div className="grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h3 className="text-2xl font-bold text-black">DSO Reduction</h3>
          <p className="mt-4 text-gray-800 leading-relaxed">
            Reduce Days Sales Outstanding through proactive reminders and frictionless
            payment experiences that encourage faster settlements.
          </p>

          <button className="mt-6 border border-emerald-500 text-emerald-500 px-6 py-2 rounded-lg text-sm font-bold hover:bg-emerald-500/10 transition">
            Get Started →
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 aspect-video flex items-center justify-center">
          <span className="text-gray-400 text-sm">Preview</span>
        </div>
      </div>

      {/* ROW 4 */}
      <div className="grid md:grid-cols-2 gap-14 items-center">
        <div className="order-2 md:order-1 bg-white rounded-2xl shadow-lg border border-gray-200 aspect-video flex items-center justify-center">
          <span className="text-gray-500 text-sm">Preview</span>
        </div>

        <div className="order-1 md:order-2">
          <h3 className="text-2xl font-bold text-black">Customer Relationship Insights</h3>
          <p className="mt-4 text-gray-800 leading-relaxed">
            Understand customer payment behavior to strengthen relationships while
            maintaining professional, compliant communication.
          </p>

          <button className="mt-6 border border-emerald-500 text-emerald-500 px-6 py-2 rounded-lg text-sm font-bold hover:bg-emerald-500/10 transition">
            Learn More →
          </button>
        </div>
      </div>

      {/* ROW 5 */}
      <div className="grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h3 className="text-2xl font-bold text-black">Real-time Insights</h3>
          <p className="mt-4 text-gray-800 leading-relaxed">
            Monitor payment responses, delivery status, and collection performance
            from a centralized, audit-ready dashboard.
          </p>

          <button className="mt-6 border border-emerald-500 text-emerald-500 px-6 py-2 rounded-lg text-sm font-bold hover:bg-emerald-500/10 transition">
            Get Started →
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 aspect-video flex items-center justify-center">
          <span className="text-gray-400 text-sm">Preview</span>
        </div>
      </div>

    </div>
  </div>
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