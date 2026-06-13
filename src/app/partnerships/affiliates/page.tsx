'use client'

import Container from "@/components/ui/Container"
import MainCTA from "@/components/ui/mainCTA"
import FAQAccordion from "@/components/ui/FAQAccordion"
import PartnershipBenefits from "@/components/sections/PartnershipBenefits"
import { affiliatePartnerFAQs } from "@/data/faqs"
import {
  CheckCircle2,
  TrendingUp,
  Users,
  Laptop,
  Briefcase,
  Globe,
} from "lucide-react"


const partnerTypes = [
  {
    icon: Briefcase,
    title: "Accounting & Advisory Partners",
    desc: "Expand services beyond compliance and help clients optimize financial operations.",
  },
  {
    icon: Users,
    title: "Referral & Network Partners",
    desc: "Leverage your business network to generate new revenue streams.",
  },
  {
    icon: Globe,
    title: "Consulting Partners",
    desc: "Deliver finance automation and operational efficiency solutions to businesses.",
  },
  {
    icon: Laptop,
    title: "Technology & SaaS Partners",
    desc: "Integrate financial workflows directly into your software ecosystem.",
  },
]

const whoIsItFor = [
  "Startups & founders serving SMBs",
  "Business consultants & CFO networks",
  "Affiliate marketers with relevant traffic",
  "Fintech influencers & industry bloggers",
  "Existing partners expanding service offerings",
]

const steps = [
  {
    step: "01",
    title: "Join the Partner Network",
    desc: "Create your partner account and get guided onboarding from our success team.",
  },
  {
    step: "02",
    title: "Refer & Solve Client Needs",
    desc: "Introduce businesses to smart spend and payment solutions that simplify operations.",
  },
  {
    step: "03",
    title: "Earn & Grow",
    desc: "Generate recurring revenue while helping clients streamline financial workflows.",
  },
]

export default function AffiliatePartnersPage() {
  return (
    <>
      {/* ── HERO — dark brand ── */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-[#060D0A] to-[#0C1F18]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* LEFT — text */}
            <div>
              <span className="inline-block text-emerald-400 rf-label mb-4 border border-emerald-400/30 rounded-full px-4 py-1">
                Affiliate Program
              </span>

              <h1 className="rf-h1 text-[var(--foreground)] leading-tight mt-2">
                Grow With India&apos;s Leading{" "}
                <span className="bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
                  Payments Platform
                </span>
              </h1>

              <p className="rf-lead text-gray-300 mt-6 max-w-lg">
                Join our affiliate partner network and unlock new revenue
                opportunities while helping businesses streamline payments,
                expenses, and financial operations.
              </p>

              <ul className="mt-8 space-y-3">
                {[
                  "Industry-leading commissions",
                  "Fast partner activation",
                  "Dedicated growth support",
                  "Free to join — no upfront cost",
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

            {/* RIGHT — earnings visual (visible all screens) */}
            <div className="flex flex-col gap-4">
              {/* Earnings card */}
              <div className="bg-[#0F2419] border border-emerald-500/30 rounded-2xl p-5 sm:p-6">
                <p className="rf-caption text-gray-400 mb-1">Your earnings this month</p>
                <p className="text-2xl sm:text-3xl font-bold text-[var(--foreground)]">₹1,24,500</p>
                <div className="flex items-center gap-2 mt-2">
                  <TrendingUp size={14} className="text-emerald-400" />
                  <span className="text-emerald-400 rf-caption font-semibold">+34% vs last month</span>
                </div>
                <div className="mt-4 space-y-3">
                  {[
                    { label: "Referral commissions", value: "₹74,500", pct: "60%" },
                    { label: "Recurring revenue", value: "₹50,000", pct: "40%" },
                  ].map(({ label, value, pct }) => (
                    <div key={label}>
                      <div className="flex justify-between rf-caption text-gray-400 mb-1">
                        <span>{label}</span>
                        <span className="text-[var(--foreground)] font-semibold">{value}</span>
                      </div>
                      <div className="w-full bg-[var(--card)] rounded-full h-1.5">
                        <div className="h-1.5 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500" style={{ width: pct }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stat pills */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: "₹0", label: "Cost to Join" },
                  { value: "24h", label: "Activation" },
                  { value: "∞", label: "Earning Potential" },
                ].map(({ value, label }) => (
                  <div
                    key={label}
                    className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-3 sm:p-4 text-center hover:border-emerald-400/30 transition duration-300"
                  >
                    <p className="text-lg sm:text-xl font-bold text-emerald-400">{value}</p>
                    <p className="rf-caption text-gray-500 mt-0.5 text-[11px] sm:text-xs">{label}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ── WHO IS IT FOR — white bg ── */}
      <section className="py-12 sm:py-16 lg:py-24 bg-[var(--card)]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            <div>
              <span className="inline-block text-emerald-600 text-xs font-semibold tracking-widest uppercase border border-emerald-500/30 rounded-full px-4 py-1 mb-4">
                Who Is It For
              </span>
              <h2 className="rf-h2 text-gray-900 mt-2">
                Built for Bold Partners{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  with Bigger Goals
                </span>
              </h2>
              <p className="rf-lead text-gray-500 mt-4 max-w-lg">
                Whether you&apos;re a consultant, influencer, or platform — there&apos;s a
                place for you in the RupeeFlow partner ecosystem.
              </p>
              <div className="mt-8">
                <MainCTA label="Join the Network" destination="/contact" />
              </div>
            </div>

            <div className="space-y-3">
              {whoIsItFor.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-xl px-5 py-4
                    hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 transition duration-300"
                >
                  <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                  <span className="rf-body text-gray-700">{item}</span>
                </div>
              ))}
            </div>

          </div>
        </Container>
      </section>

      {/* ── PARTNER PROGRAM TYPES — gray-50 bg ── */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <Container>

          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-14">
            <h2 className="rf-h2 text-gray-900">
              Types of{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Partner Programs
              </span>
            </h2>
            <p className="rf-lead text-gray-500 mt-4">
              Flexible partnership models tailored for different business ecosystems.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {partnerTypes.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group flex items-start gap-5 bg-[var(--card)] border border-gray-200 rounded-2xl p-5 sm:p-7
                  hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/10
                  hover:-translate-y-0.5 transition duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 transition duration-300">
                  <Icon size={22} className="text-emerald-600" />
                </div>
                <div>
                  <h3 className="rf-h3 text-gray-900 group-hover:text-emerald-600 transition duration-300">
                    {title}
                  </h3>
                  <p className="rf-body text-gray-500 mt-2">{desc}</p>
                </div>
              </div>
            ))}
          </div>

        </Container>
      </section>

      {/* ── WHY PARTNER ── */}
      <PartnershipBenefits />

      {/* ── HOW IT WORKS — white bg ── */}
      <section className="py-12 sm:py-16 lg:py-24 bg-[var(--card)]">
        <Container>

          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-14">
            <h2 className="rf-h2 text-gray-900">
              Get Started in{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                3 Easy Steps
              </span>
            </h2>
            <p className="rf-lead text-gray-500 mt-4">
              A simple journey designed to help you start earning and growing with minimal effort.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            {steps.map((item) => (
              <div
                key={item.step}
                className="relative bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8
                  hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/10
                  hover:-translate-y-0.5 transition duration-300 group"
              >
                <p className="text-5xl font-black text-emerald-500/20 group-hover:text-emerald-500/30 leading-none mb-4 transition duration-300">
                  {item.step}
                </p>
                <h3 className="rf-h3 text-gray-900">{item.title}</h3>
                <p className="rf-body text-gray-500 mt-3">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA row */}
          <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-center justify-between gap-5 border-t border-gray-200 pt-10 sm:pt-12">
            <p className="text-gray-500 text-sm sm:text-base max-w-md text-center sm:text-left">
              Our team typically responds within{" "}
              <span className="text-gray-900 font-semibold">24 hours</span>{" "}
              to get your account activated.
            </p>
            <MainCTA label="Start Partnership Journey" destination="/contact" />
          </div>

        </Container>
      </section>

      {/* ── BOTTOM CTA BAND — dark ── */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-[#0C1F18] to-[#0a1a0f]">
        <Container>
          <div className="rounded-3xl border border-emerald-500/20 bg-[var(--card)] p-6 sm:p-8 lg:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">

            <div>
              <h3 className="rf-h2 text-[var(--foreground)]">Ready to Earn More &amp; Grow Faster?</h3>
              <ul className="mt-5 space-y-3">
                {[
                  "Industry-leading commissions",
                  "Fast partner activation",
                  "Dedicated growth support",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 rf-body text-gray-300">
                    <CheckCircle2 className="text-emerald-400 shrink-0" size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="shrink-0 flex flex-col gap-3 items-start md:items-end">
              <MainCTA label="Join the Affiliate Program" destination="/contact" />
              <p className="rf-caption text-gray-500">Free to join. No commitment required.</p>
            </div>

          </div>
        </Container>
      </section>

      {/* ── FAQ ── */}
      <FAQAccordion faqs={affiliatePartnerFAQs} subtitle="Common questions about the RupeeFlow Affiliate Partner Program." />
    </>
  )
}
