import Container from "@/components/ui/Container"
import MainCTA from "@/components/ui/mainCTA"
import FAQAccordion from "@/components/ui/FAQAccordion"
import PartnershipBenefits from "@/components/sections/PartnershipBenefits"
import { bankingPartnershipFAQs } from "@/data/faqs"
import {
  Banknote,
  Layers,
  CheckCircle2,
  RefreshCcw,
  BarChart3,
  CreditCard,
  Zap,
} from "lucide-react"


const solutions = [
  { icon: CreditCard, title: "Expense & Corporate Card Management" },
  { icon: Zap, title: "Digital Payment Orchestration" },
  { icon: Banknote, title: "Vendor & Supplier Payouts" },
  { icon: RefreshCcw, title: "Cashflow & Reconciliation Automation" },
  { icon: Layers, title: "Embedded Finance & Lending Enablement" },
  { icon: BarChart3, title: "Advanced Analytics & Risk Monitoring" },
]

const heroStats = [
  { value: "99.9%", label: "Platform Uptime" },
  { value: "RBI", label: "Compliant" },
  { value: "50+", label: "API Endpoints" },
  { value: "<50ms", label: "Avg Response" },
]

export default function BankingPartnershipsPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="py-24 bg-gradient-to-b from-[#060D0A] to-[#0C1F18]">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div>
              <span className="inline-block text-emerald-400 rf-label mb-4 border border-emerald-400/30 rounded-full px-4 py-1">
                Banking Partnerships
              </span>

              <h1 className="rf-h1 text-white leading-tight mt-2">
                Banking{" "}
                <span className="bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
                  Partnerships
                </span>
              </h1>

              <p className="rf-lead text-gray-300 mt-6 max-w-lg">
                Empower your customers with next-generation payment infrastructure,
                embedded finance capabilities, and secure digital banking tools.
              </p>

              <ul className="mt-8 space-y-3">
                {[
                  "Expand digital banking capabilities",
                  "Launch payment & expense solutions",
                  "Unlock new revenue streams",
                  "Deliver secure & compliant infrastructure",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 rf-body text-gray-300">
                    <CheckCircle2 className="text-emerald-400 shrink-0" size={16} />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <MainCTA label="Become a Partner" destination="/contact" />
              </div>
            </div>

            {/* RIGHT — stats visual */}
            <div className="relative hidden md:flex flex-col gap-4">
              {/* API pill */}
              <div className="self-end bg-[#0F2419] border border-emerald-500/30 rounded-2xl px-5 py-3 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="rf-caption text-emerald-300 font-mono">POST /v1/payments/create</span>
                <span className="bg-emerald-500/20 text-emerald-400 rf-caption px-2 py-0.5 rounded-full">200 OK</span>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {heroStats.map(({ value, label }) => (
                  <div
                    key={label}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-1 hover:border-emerald-400/30 transition duration-300"
                  >
                    <p className="rf-h2 text-white font-bold">{value}</p>
                    <p className="rf-caption text-gray-400">{label}</p>
                  </div>
                ))}
              </div>

              {/* Compliance badges */}
              <div className="flex flex-wrap gap-2 mt-1">
                {["PCI DSS", "ISO 27001", "RBI Licensed", "NPCI Certified"].map((b) => (
                  <span
                    key={b}
                    className="flex items-center gap-1.5 bg-white/5 border border-white/10 text-gray-300 rf-caption rounded-full px-3 py-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {b}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ── SOLUTION PANEL ── */}
      <section className="py-24 bg-[#0A0F0D]">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="rf-h2 text-white">
              Unified Infrastructure{" "}
              <span className="bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
                for Modern Banks
              </span>
            </h2>
            <p className="rf-lead text-gray-400 mt-4">
              Deploy a full-stack financial ecosystem built for speed, compliance,
              and scalability — designed for next-generation banking experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map(({ icon: Icon, title }) => (
              <div
                key={title}
                className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6
                  hover:border-emerald-400/40 hover:shadow-[0_0_25px_rgba(0,239,100,0.1)]
                  transition duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/25 transition duration-300">
                  <Icon size={20} className="text-emerald-400" />
                </div>
                <p className="rf-body text-gray-200 leading-snug mt-1">{title}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <MainCTA label="Explore Integration" destination="/contact" />
          </div>
        </Container>
      </section>

      {/* ── WHY PARTNER ── */}
      <PartnershipBenefits />

      {/* ── PARTNERSHIP JOURNEY ── */}
      <section className="py-24 bg-[#0A0F0D]">
        <Container>
          <div className="text-center mb-14">
            <h2 className="rf-h2 text-white">Partnership Journey</h2>
            <p className="rf-lead text-gray-400 mt-4 max-w-xl mx-auto">
              A structured process designed for fast time-to-value and long-term growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Connect & Discover",
                desc: "Discuss strategic goals and integration scope with our partnerships team.",
              },
              {
                step: "02",
                title: "Customize & Integrate",
                desc: "Deploy APIs and tailor financial solutions for your customer segments.",
              },
              {
                step: "03",
                title: "Launch & Scale",
                desc: "Go live and grow adoption with co-marketing and ongoing support.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative bg-white/5 border border-white/10 rounded-2xl p-8
                  hover:border-emerald-400/40 hover:shadow-[0_0_30px_rgba(0,239,100,0.1)]
                  transition duration-300"
              >
                <p className="text-5xl font-black text-emerald-400/20 leading-none mb-4">
                  {item.step}
                </p>
                <h3 className="rf-h3 text-white">{item.title}</h3>
                <p className="rf-body text-gray-400 mt-3">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <MainCTA label="Start Partnership Discussion" destination="/contact" />
          </div>
        </Container>
      </section>

      {/* ── BOTTOM CTA BAND ── */}
      <section className="py-20 bg-gradient-to-r from-[#0C1F18] to-[#0a1a0f]">
        <Container>
          <div className="rounded-3xl border border-emerald-500/20 bg-white/5 p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="rf-h2 text-white">Build the future of digital banking</h3>
              <p className="rf-lead text-gray-400 mt-3 max-w-xl">
                Partner with us to deliver secure, scalable financial innovation to your customers.
              </p>
            </div>
            <div className="shrink-0">
              <MainCTA label="Become a Partner" destination="/contact" />
            </div>
          </div>
        </Container>
      </section>

      {/* ── FAQ ── */}
      <FAQAccordion faqs={bankingPartnershipFAQs} subtitle="Common questions about partnering with RupeeFlow." />
    </>
  )
}
