import Container from "@/components/ui/Container"
import MainCTA from "@/components/ui/mainCTA"
import CardFAQ from "@/components/sections/CardFAQ"
import Image from "next/image"
import PartnershipBenefits from "@/components/sections/PartnershipBenefits"


import {
  Banknote,
  ShieldCheck,
  Network,
  TrendingUp,
  Globe,
  Layers,
  CheckCircle2,
} from "lucide-react"

const bankingFAQs = [
  {
    question: "What type of banks can partner with us?",
    answer:
      "We collaborate with commercial banks, NBFCs, neo-banks, and regulated financial institutions looking to expand digital payment capabilities.",
  },
  {
    question: "How does integration work?",
    answer:
      "Our API-first infrastructure enables fast integration with your core banking systems, enabling seamless deployment of payment and expense solutions.",
  },
  {
    question: "Is the platform compliant and secure?",
    answer:
      "Yes. Our infrastructure follows RBI guidelines, data encryption standards, and enterprise-grade fraud protection protocols.",
  },
  {
    question: "What revenue opportunities exist for partner banks?",
    answer:
      "Banks can generate new revenue through payment processing, float management, lending enablement, and value-added financial services.",
  },
  {
    question: "Can we customize solutions for our customers?",
    answer:
      "Yes. Solutions can be white-labeled and tailored to meet your customer segments and product strategy.",
  },
  {
    question: "How long does onboarding take?",
    answer:
      "Most banking partners go live within a few weeks depending on integration scope and compliance approvals.",
  },
]

export default function BankingPartnershipsPage() {
  return (
    <>
      {/* HERO */}
      <section className="py-24 bg-gradient-to-b from-[#0F0F0F] to-[#0C1F18]">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">

            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Banking{" "}
                <span className="bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
                  Partnerships
                </span>
              </h1>

              <p className="text-gray-300 mt-6 text-lg leading-relaxed">
                Empower your customers with next-generation payment infrastructure,
                embedded finance capabilities, and secure digital banking tools.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Expand digital banking capabilities",
                  "Launch payment & expense solutions",
                  "Unlock new revenue streams",
                  "Deliver secure & compliant infrastructure",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="text-emerald-400" size={15} />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <MainCTA label="Become  Partner" destination="/contact" />
              </div>
            </div>

            {/* HERO IMAGE */}
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <Image
                src="/placeholder-bank.jpg"
                alt="Banking partnership preview"
                width={700}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>

          </div>
        </Container>
      </section>



      
      {/* SOLUTION PANEL */}
<section className="py-24 bg-[#0F0F0F]">
  <Container>
    <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-12 overflow-hidden">

      {/* subtle glow */}
      <div className="absolute inset-0 bg-radial-emerald-soft opacity-10 pointer-events-none" />

      <h2 className="text-3xl md:text-4xl font-semibold text-white">
        Unified Infrastructure {" "}
        <span className="bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
          for Modern Banks
        </span>
      </h2>

      <p className="text-gray-300 mt-4 max-w-2xl leading-relaxed">
        Deploy a full-stack financial ecosystem built for speed, compliance,
        and scalability — designed for next-generation banking experiences.
      </p>

     <div className="grid md:grid-cols-2 gap-6 mt-12">
  {[
    {
      title: "Expense & corporate card management",
      img: "/placeholders/cards.png",
    },
    {
      title: "Digital payment orchestration",
      img: "/placeholders/payments.png",
    },
    {
      title: "Vendor & supplier payouts",
      img: "/placeholders/payouts.png",
    },
    {
      title: "Cashflow & reconciliation automation",
      img: "/placeholders/reconciliation.png",
    },
    {
      title: "Embedded finance & lending enablement",
      img: "/placeholders/embedded.png",
    },
    {
      title: "Advanced analytics & risk monitoring",
      img: "/placeholders/analytics.png",
    },
  ].map((item, i) => (
    <div
      key={i}
      className="flex items-center justify-between gap-6
      bg-white/5 border border-white/10 rounded-2xl
      p-6 md:p-8
      hover:border-emerald-400/40
      hover:shadow-[0_0_25px_rgba(0,239,100,0.15)]
      transition duration-300"
    >
      {/* LEFT TEXT */}
      <div className="flex items-start gap-3 max-w-xs">
        <CheckCircle2 size={20} className="text-emerald-400 mt-1" />
        <p className="text-gray-200 leading-relaxed">
          {item.title}
        </p>
      </div>

      {/* RIGHT IMAGE PLACEHOLDER */}
      <div className="w-44 h-26 rounded-lg bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center text-xs text-gray-500">
        Image
      </div>
    </div>
  ))}
</div>


      <div className="mt-12">
        <MainCTA
          label="Explore Integration "
          destination="/contact"
        />
      </div>
    </div>
  </Container>
</section>

     <PartnershipBenefits />


      {/* PARTNERSHIP STEPS */}
     <section className="relative py-28 overflow-hidden">

  {/* 🔹 BACKGROUND IMAGE PLACEHOLDER */}
  <div className="absolute inset-0">
    <Image
      src="/placeholder-partnership-bg.jpg"
      alt="partnership background"
      fill
      className="object-cover opacity-20"
    />
  </div>

  {/* 🔹 DARK OVERLAY for readability */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F]/90 to-[#0C1F18]/95" />

  <Container className="relative z-10">

    {/* TITLE */}
    <h2 className="text-4xl text-center font-semibold text-white">
      Partnership Journey
    </h2>

    {/* STEPS */}
    <div className="grid md:grid-cols-3 gap-8 mt-14">
      {[
        {
          title: "Connect & Discover",
          desc: "Discuss strategic goals and integration scope with our partnerships team.",
        },
        {
          title: "Customize & Integrate",
          desc: "Deploy APIs and tailor financial solutions for your customer segments.",
        },
        {
          title: "Launch & Scale",
          desc: "Go live and grow adoption with co-marketing and ongoing support.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl
          hover:border-emerald-400/40 transition duration-300"
        >
          <p className="text-emerald-400 text-sm font-semibold">
            Step {i + 1}
          </p>

          <h3 className="text-white text-xl mt-2 font-semibold">
            {item.title}
          </h3>

          <p className="text-gray-400 mt-3">
            {item.desc}
          </p>
        </div>
      ))}
    </div>

    {/* ✅ BUTTON */}
    <div className="text-center mt-14">
      <MainCTA
        label="Start Partnership Discussion"
        destination="/contact"
      />
    </div>

  </Container>
</section>


      {/* CTA BANNER */}
      <section className="py-20">
        <Container>
          <div className="relative rounded-3xl overflow-hidden border border-white/10">
            <Image
              src="/placeholder-partner.jpg"
              alt="Partner success"
              width={1200}
              height={400}
              className="object-cover w-full h-full opacity-60"
            />
            <div className="absolute inset-0 flex flex-col justify-center p-10 bg-black/40">
              <h3 className="text-3xl text-white font-semibold">
                Build the future of digital banking
              </h3>
              <p className="text-gray-300 mt-2">
                Partner with us to deliver secure, scalable financial innovation.
              </p>
              <div className="mt-6">
                <MainCTA label="Become a Partner" destination="/contact" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <CardFAQ faqs={bankingFAQs} />
    </>
  )
}
