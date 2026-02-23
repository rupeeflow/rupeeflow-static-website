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
        "Yes. Configure reminders before due dates, on due dates, or after overdue thresholds to match your collection workflow."
    },
    {
      question: "Which channels are supported?",
      answer:
        "Reminders can be delivered via SMS, email, and in-app notifications to ensure maximum reach."
    },
    {
      question: "Will customers receive multiple reminders?",
      answer:
        "You control reminder frequency, escalation timing, and tone to maintain professionalism."
    },
    {
      question: "Can I track reminder delivery status?",
      answer:
        "Yes. Track delivery, opens, clicks, and payment responses directly from the dashboard."
    },
    {
      question: "How do reminders improve cash flow?",
      answer:
        "Automated reminders reduce overdue invoices and accelerate payment cycles, improving liquidity."
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
                Automate reminders for upcoming, due, and overdue invoices.
                Maintain healthy cash flow, eliminate manual follow-ups,
                and improve payment behavior with intelligent automation.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  { icon: BellRing, text: "Automated due-date alerts" },
                  { icon: CalendarClock, text: "Flexible reminder scheduling" },
                  { icon: Mail, text: "SMS, email & in-app notifications" },
                  { icon: ShieldCheck, text: "Secure & professional follow-ups" },
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
                <MainCTA label="Start Automating" destination="/contact" />
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

      {/* COLLECTION REMINDERS CONTENT (NEW SECTION) */}

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
            Send invoice reminders or automated payment reminders based on
            customer behavior and payment timelines.
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
          <h3 className="text-xl font-bold text-black">Absolute Visibility</h3>
          <p className="mt-4 text-gray-600">
            Understand customer payment patterns and history to improve
            collection strategies.
          </p>
          <button className="mt-6 border border-emerald-500 text-emerald-600 px-5 py-2 rounded-lg text-sm font-bold hover:bg-emerald-50 transition">
            Get Started →
          </button>
        </div>
      </div>

      {/* 3 */}
      <div className="grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h3 className="text-xl font-bold text-black">Embedded Payment Links</h3>
          <p className="mt-4 text-gray-600">
            Include secure payment links inside reminders to encourage
            instant payments.
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
          <h3 className="text-xl font-bold text-black">Total Control & Flexibility</h3>
          <p className="mt-4 text-gray-600">
            Choose channels such as SMS, email, and in-app notifications
            while defining reminder timing rules.
          </p>
          <button className="mt-6 border border-emerald-500 text-emerald-600 px-5 py-2 rounded-lg text-sm font-bold hover:bg-emerald-50 transition">
            Get Started →
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
          desc: "Understand habits to improve collection strategies.",
        },
        {
          title: "Predict Late Payments",
          desc: "Identify at-risk invoices early.",
        },
        {
          title: "Automated Escalations",
          desc: "Trigger workflows for overdue invoices.",
        },
        {
          title: "Customer Risk Scoring",
          desc: "Segment customers based on reliability.",
        },
        {
          title: "Collection Performance Analytics",
          desc: "Measure reminder effectiveness.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="
          group
          bg-black
          border border-white/10
          p-7
          rounded-xl
          text-left
          transition-all duration-300
          hover:-translate-y-2
          hover:border-emerald-400/40
          hover:bg-gradient-to-br
          hover:from-[#02140f]
          hover:to-black
          hover:shadow-[0_0_25px_rgba(0,239,100,0.25)]
          "
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

      
      {/* ===== ADVANCED COLLECTION REMINDERS ===== */}
<section className="py-24 bg-gray-100">
  <div className="max-w-6xl mx-auto px-6">

    {/* TITLE */}
    <h2 className="text-4xl md:text-5xl font-semibold text-center text-gray-900">
      Automated Reminders for Collection
    </h2>

    <p className="text-center text-gray-500 mt-4 max-w-2xl mx-auto">
      Accelerate collections, improve customer engagement, and gain real-time visibility
      into payment behavior with intelligent reminder automation.
    </p>

    <div className="mt-20 space-y-24">

      {/* ROW 1 */}
      <div className="grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h3 className="text-3xl font-bold text-black">Automation</h3>
          <p className="mt-4 text-gray-800 leading-relaxed">
            Automate reminder workflows and eliminate manual follow-ups.
            Timely alerts ensure faster collections and improved cash flow.
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
            Embed secure payment links directly inside reminders to enable
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
            Reduce Days Sales Outstanding by triggering timely reminders
            and guiding customers toward faster payments.
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
            Understand customer payment behavior to strengthen relationships
            while maintaining professional communication.
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
            Monitor payment responses, delivery status, and collection
            performance from a centralized dashboard.
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