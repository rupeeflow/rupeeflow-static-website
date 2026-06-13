import Container from '@/components/ui/Container'
import MainCTA from '@/components/ui/mainCTA'
import Image from 'next/image'
import { virtualFAQs } from "@/data/virtualCardFaqs"

import {
  Check,
  CreditCard,
  Shield,
  Smartphone,
  Lock,
  Globe,
  Zap,
} from 'lucide-react'
import CardFAQ from '@/components/sections/CardFAQ'

export default function VirtualCardsPage() {
  return (
    <>
      {/* HERO */}
      <Container className="py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <h1 className="text-6xl font-bold text-[var(--foreground)] leading-tight">
              Virtual{" "}
              <span className="bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
                Cards
              </span>
            </h1>

            <p className="mt-6 text-gray-300 text-lg leading-relaxed">
              Issue secure, instantly deployable virtual cards for online payments,
              subscriptions, and vendor transactions — eliminating fraud risks
              while maintaining full spending control.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                { icon: Zap, text: "Instant card creation & activation" },
                { icon: Shield, text: "Reduce fraud with tokenized transactions" },
                { icon: Smartphone, text: "Perfect for SaaS & online payments" },
                { icon: Lock, text: "Set usage limits & expiry controls" },
                { icon: Globe, text: "Enable secure global transactions" },
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
              <MainCTA label="Get Virtual Cards" destination="/contact" />
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="relative rounded-2xl overflow-hidden border border-[var(--border)] shadow-xl">
            <Image
              src="/virtual-card-hero.png"
              alt="Virtual card digital payments preview"
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
          <h2 className="text-5xl font-semibold text-[var(--foreground)]">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
              Virtual Cards
            </span>
            ?
          </h2>

          <p className="mt-3 text-xl text-gray-300">
            Enhance payment security, eliminate fraud exposure, and control online spending.
          </p>
        </div>

        <div className="mt-14 max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Fraud Protection",
              desc: "Use tokenized virtual cards to prevent misuse and data theft.",
            },
            {
              title: "Subscription Control",
              desc: "Assign cards to SaaS tools and prevent unauthorized renewals.",
            },
            {
              title: "Instant Deployment",
              desc: "Create and deactivate cards instantly for vendors or teams.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-7 rounded-2xl border border-[var(--border)] bg-[#0F0F0F]
              hover:-translate-y-1 transition
              hover:border-emerald-400/40
              hover:shadow-[0_0_25px_rgba(0,239,100,0.15)]"
            >
              <h3 className="text-[var(--foreground)] font-semibold text-lg">{item.title}</h3>
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
              title: "Secure Online Payments",
              desc: "Protect sensitive card data with tokenized virtual transactions.",
              points: ["Tokenized card numbers", "Reduced fraud exposure", "Secure checkout"],
              image: "Secure Payment Preview",
            },
            {
              title: "Subscription Spend Control",
              desc: "Prevent unexpected charges and manage recurring payments.",
              points: ["Vendor-specific cards", "Auto-expiry dates", "Spending caps"],
              image: "Subscription Control Preview",
            },
            {
              title: "Instant Vendor Payments",
              desc: "Pay vendors quickly without exposing primary account details.",
              points: ["Single-use cards", "Controlled payment amounts", "Secure sharing"],
              image: "Vendor Payment Preview",
            },
            {
              title: "Global Digital Transactions",
              desc: "Enable secure payments for international SaaS and services.",
              points: ["Multi-currency usage", "Cross-border security", "Global acceptance"],
              image: "Global Payments Preview",
            },
          ].map((item, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-14 items-center">

              {/* IMAGE */}
              <div className={`${i % 2 ? "md:order-2" : ""} bg-[var(--card)] border border-[var(--border)] rounded-2xl aspect-video flex items-center justify-center text-gray-500`}>
                {item.image}
              </div>

              {/* TEXT */}
              <div className={`${i % 2 ? "md:order-1" : ""}`}>
                <h3 className="text-2xl font-semibold text-[var(--foreground)]">
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
      <div className="py-14 border-y border-[var(--border)] text-center">
        <p className="text-lg font-medium bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
          Trusted for secure digital payments and subscription control.
        </p>
      </div>


      <CardFAQ faqs={virtualFAQs} />

      {/* FINAL CTA */}
      <div className="py-28 text-center">
        <h3 className="text-4xl text-[var(--foreground)] font-semibold">
          Secure your digital payments today
        </h3>
        <p className="text-gray-400 mt-4">
          Issue virtual cards instantly and protect every online transaction.
        </p>

        <div className="mt-8 flex justify-center">
          <MainCTA label="Get Virtual Cards" destination="/contact" />
        </div>
      </div>
    </>
  )
}
