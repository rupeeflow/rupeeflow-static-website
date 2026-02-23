'use client'

import Container from "@/components/ui/Container"
import MainCTA from "@/components/ui/mainCTA"
import CardFAQ from "@/components/sections/CardFAQ"
import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const affiliateFAQs = [
  {
    question: "Who can join the affiliate partner program?",
    answer:
      "Consultants, agencies, fintech influencers, SaaS platforms, and professionals serving business clients can join.",
  },
  {
    question: "How do affiliates earn revenue?",
    answer:
      "Affiliates earn recurring commissions and referral incentives based on successful client onboarding and usage.",
  },
  {
    question: "Is there a cost to join?",
    answer:
      "No. The affiliate partner program is free to join.",
  },
  {
    question: "Do you provide marketing support?",
    answer:
      "Yes. Partners receive co-branded materials, sales enablement resources, and onboarding support.",
  },
  {
    question: "How quickly can I start referring clients?",
    answer:
      "Most partners can begin referring clients immediately after onboarding.",
  },
]

export default function AffiliatePartnersPage() {
  return (
    <>
      {/* HERO */}
      <section className="py-29 bg-gradient-to-b from-[#0F0F0F] to-[#0C1F18]">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">

            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Grow With India’s Leading{" "}
                <span className="bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
                   Payments Platform
                </span>
              </h1>

              <p className="text-gray-300 mt-6 text-lg leading-relaxed">
                Join our affiliate partner network and unlock new revenue
                opportunities while helping businesses streamline payments,
                expenses, and financial operations.
              </p>

              <div className="mt-10">
                <MainCTA label="Become a Partner" destination="/contact" />
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <Image
                src="/placeholder-affiliate.jpg"
                alt="Affiliate preview"
                width={700}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>

          </div>
        </Container>
      </section>

      {/* BUILT FOR BOLD PARTNERS */}
      <section className="py-20 bg-[#0F0F0F]">
        <Container>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
            <h2 className="text-3xl font-semibold text-white">
              Built for Bold Partners{" "}
              <span className="text-emerald-400">with Bigger Goals</span>
            </h2>
            

            <div className="mt-8 space-y-4 text-gray-300">
              
              {[
                "Startups & founders serving SMBs",
                "Business consultants & CFO networks",
                "Affiliate marketers with relevant traffic",
                "Fintech influencers & industry bloggers",
                "Existing partners expanding service offerings",
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-center">
                  <CheckCircle2 size={18} className="text-emerald-400" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <MainCTA label="Join the Network" destination="/contact" />
            </div>
          </div>
        </Container>
      </section>

      {/* TYPES OF PARTNERS */}
     <section className="py-24 bg-[#0F0F0F]">
  <Container>

    {/* SECTION TITLE */}
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-5xl md:text-6xl font-semibold text-white">
        Types of{" "}
        <span className="bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
          Partner Programs
        </span>
      </h2>

      <p className="text-gray-400 mt-5">
        Flexible partnership models tailored for different business ecosystems.
      </p>
    </div>

    {/* CARDS */}
    <div className="grid md:grid-cols-2 gap-10 mt-16">

      {[
        {
          title: "Accounting & Advisory Partners",
          desc: "Expand services beyond compliance and help clients optimize financial operations.",
        },
        {
          title: "Referral & Network Partners",
          desc: "Leverage your business network to generate new revenue streams.",
        },
        {
          title: "Consulting Partners",
          desc: "Deliver finance automation and operational efficiency solutions.",
        },
        {
          title: "Technology & SaaS Partners",
          desc: "Integrate financial workflows into your software ecosystem.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-10 flex gap-8 items-center transition duration-500 hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]"
        >
          
          {/* LARGE IMAGE PLACEHOLDER */}
          <div className="w-56 h-46 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center text-gray-500 text-xs tracking-widest uppercase group-hover:scale-105 transition">
            IMAGE
          </div>

          {/* TEXT */}
          <div>
            <h3 className="text-white text-2xl font-semibold group-hover:text-emerald-300 transition">
              {item.title}
            </h3>

            <p className="text-gray-400 mt-3 leading-relaxed">
              {item.desc}
            </p>
          </div>

          {/* subtle glow overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-r from-emerald-500/10 via-transparent to-transparent" />
        </div>
      ))}
    </div>

  </Container>
</section>


      {/* HOW IT WORKS */}


     <section className="py-24 bg-[#0F0F0F]">
  <Container>

    {/* TITLE */}
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-4xl md:text-5xl text-white font-semibold">
        Get Started in{" "}
        <span className="bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
          3 Easy Steps
        </span>
      </h2>

      <p className="text-gray-400 mt-4">
        A simple journey designed to help you start earning and growing with minimal effort.
      </p>
    </div>

    {/* STEPS */}
    <div className="grid md:grid-cols-3 gap-8 mt-16">

      {[
        {
          step: "Step 1",
          title: "Join the Partner Network",
          desc: "Create your partner account and get guided onboarding from our success team.",
          link: "/contact",
        },
        {
          step: "Step 2",
          title: "Refer & Solve Client Needs",
          desc: "Introduce businesses to smart spend and payment solutions that simplify operations.",
          link: "/contact",
        },
        {
          step: "Step 3",
          title: "Earn & Grow",
          desc: "Generate recurring revenue while helping clients streamline financial workflows.",
          link: "/contact",
        },
      ].map((item, i) => (
        <a
          key={i}
          href={item.link}
          className="group relative block rounded-2xl border border-white/10 bg-white/5 p-8 transition duration-500 hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-[0_0_35px_rgba(16,185,129,0.15)]"
        >
          {/* IMAGE PLACEHOLDER */}
          <div className="w-full h-36 mb-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center text-gray-500 text-xs tracking-widest uppercase group-hover:scale-[1.02] transition">
            IMAGE
          </div>

          <p className="text-emerald-400 text-sm font-semibold">
            {item.step}
          </p>

          <h3 className="text-white text-xl font-semibold mt-2 group-hover:text-emerald-300 transition">
            {item.title}
          </h3>

          <p className="text-gray-400 mt-3 leading-relaxed">
            {item.desc}
          </p>

          {/* subtle glow overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-r from-emerald-500/10 via-transparent to-transparent" />
        </a>
      ))}
    </div>

    {/* CTA BUTTON */}
    <div className="text-center mt-14">
  <a
    href="/contact"
    className="group relative inline-flex items-center justify-center
      rounded-full font-semibold text-black
    bg-emerald-500 overflow-hidden
    transition-all duration-300
    hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(16,185,129,0.35)]"
  >
    {/* glow layer */}
   <div className="text-center ">
  <MainCTA
    label="Start Partnership Journey"
    destination="/contact"
    size="w-72 h-14"
    fontSize="text-xl"
  />
</div>
  </a>
</div>

  </Container>
</section>



      {/* CTA + FORM */}
      <section className="py-24 bg-gradient-to-b from-[#0C1F18] to-[#0F0F0F]">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">

            <div>
              <h2 className="text-4xl font-semibold text-white">
                Ready to Earn More & Grow Faster?
              </h2>

              <ul className="mt-8 space-y-4 text-gray-300">
                <li className="flex gap-3"><CheckCircle2 className="text-emerald-400"/> Industry-leading commissions</li>
                <li className="flex gap-3"><CheckCircle2 className="text-emerald-400"/> Fast partner activation</li>
                <li className="flex gap-3"><CheckCircle2 className="text-emerald-400"/> Dedicated growth support</li>
              </ul>
            </div>

            {/* FORM PLACEHOLDER */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-38 mt-23">
              <p className="text-gray-400">Partner onboarding </p>
            </div>

          </div>
        </Container>
      </section>

      {/* FAQ */}
      <CardFAQ faqs={affiliateFAQs} />
    </>
  )
}
