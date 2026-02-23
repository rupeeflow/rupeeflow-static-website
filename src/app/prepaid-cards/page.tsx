import Container from '@/components/ui/Container'
import MainCTA from '@/components/ui/mainCTA'
import Image from 'next/image'
import { Check, Wallet, ShieldCheck, Users, Settings, BarChart3 } from 'lucide-react'
import { prepaidFAQs } from "@/data/prepaidCardFaqs"
import CardFAQ from '@/components/sections/CardFAQ'

export default function PrepaidCardsPage() {
  return (
    <>
      {/* HERO */}
      <Container className="py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <h1 className="text-6xl font-bold text-white leading-tight">
              Prepaid{" "}
              <span className="bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
                Cards
              </span>
            </h1>

            <p className="mt-6 text-gray-300 text-lg leading-relaxed">
              Enable secure, pre-funded spending with complete control over budgets,
              eliminating overspending risks while simplifying expense management.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                { icon: Wallet, text: "Pre-load funds for controlled spending" },
                { icon: ShieldCheck, text: "Eliminate credit risk & overspending" },
                { icon: Users, text: "Ideal for employees, vendors & incentives" },
                { icon: Settings, text: "Set limits & usage rules instantly" },
                { icon: BarChart3, text: "Track spending in real time" },
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
              <MainCTA label="Get Prepaid Cards" destination="/contact" />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl">
            <Image
              src="/prepaid-card-hero.png"
              alt="Prepaid card preview"
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
              Prepaid Cards
            </span>
            ?
          </h2>

          <p className="mt-3 text-xl text-gray-300">
            Control spending, prevent misuse, and manage budgets with zero credit exposure.
          </p>
        </div>

        <div className="mt-14 max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Budget Control",
              desc: "Predefine spending amounts and eliminate overspending risks.",
            },
            {
              title: "Risk-Free Spending",
              desc: "Avoid credit exposure while ensuring secure transactions.",
            },
            {
              title: "Instant Issuance",
              desc: "Create and distribute cards instantly to employees or vendors.",
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
              title: "Controlled Budget Distribution",
              desc: "Allocate prepaid funds across teams and projects with precision.",
              points: ["Department budgets", "Project allocation", "Spend caps"],
              image: "Budget Distribution Preview",
            },
            {
              title: "Secure & Safe Transactions",
              desc: "Ensure funds are used only for approved purposes.",
              points: ["Merchant restrictions", "Usage controls", "Secure payments"],
              image: "Secure Payment Preview",
            },
            {
              title: "Instant Card Issuance",
              desc: "Create and distribute prepaid cards in seconds.",
              points: ["Virtual & physical cards", "Instant activation", "Bulk issuance"],
              image: "Card Issuance Preview",
            },
            {
              title: "Real-Time Spend Visibility",
              desc: "Monitor transactions and optimize budgets instantly.",
              points: ["Live dashboards", "Expense alerts", "Downloadable reports"],
              image: "Spend Insights Preview",
            },
          ].map((item, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-14 items-center">

              <div className={`${i % 2 ? "md:order-2" : ""} bg-white/5 border border-white/10 rounded-2xl aspect-video flex items-center justify-center text-gray-500`}>
                {item.image}
              </div>

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
          Trusted by finance teams for secure, controlled prepaid spending.
        </p>
      </div>


      <CardFAQ faqs={prepaidFAQs} />

      {/* FINAL CTA */}
      <div className="py-28 text-center">
        <h3 className="text-4xl text-white font-semibold">
          Simplify prepaid spending today
        </h3>
        <p className="text-gray-400 mt-4">
          Control budgets, reduce risk, and empower teams with secure prepaid cards.
        </p>

        <div className="mt-8 flex justify-center">
          <MainCTA label="Get Prepaid Cards" destination="/contact" />
        </div>
      </div>
    </>
  )
}
