'use client'

import Container from "@/components/ui/Container"
import MainCTA from "@/components/ui/mainCTA"
import CardFAQ from "@/components/sections/CardFAQ"
import Image from "next/image"
import PartnershipBenefits from "@/components/sections/PartnershipBenefits"
import { motion } from 'framer-motion'
import { useState } from 'react'

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
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  // Enhanced infrastructure features with bullet points
  const infrastructureFeatures = [
    {
      id: 1,
      title: "Expense & corporate card management",
      description: "Complete corporate expense solution with smart card controls",
      icon: Banknote,
      color: "emerald",
      features: [
        "Real-time expense tracking & approval",
        "Smart corporate cards with spending limits",
        "Automated receipt capture & categorization",
        "Integration with accounting systems"
      ],
      image: "/images/banking/corporate-cards.png"
    },
    {
      id: 2,
      title: "Digital payment orchestration",
      description: "Unified payment processing across all channels",
      icon: Network,
      color: "blue",
      features: [
        "UPI, IMPS, NEFT, RTGS integration",
        "Real-time payment processing",
        "Multi-bank connectivity",
        "Advanced fraud detection engine"
      ],
      image: "/images/banking/payment-orchestration.png"
    },
    {
      id: 3,
      title: "Vendor & supplier payouts",
      description: "Automated bulk payment processing for businesses",
      icon: TrendingUp,
      color: "purple",
      features: [
        "Bulk payout processing",
        "Automated invoice matching",
        "Multi-currency support",
        "Real-time status tracking"
      ],
      image: "/images/banking/vendor-payouts.png"
    },
    {
      id: 4,
      title: "Cashflow & reconciliation automation",
      description: "Intelligent financial reconciliation and reporting",
      icon: Layers,
      color: "orange",
      features: [
        "Automated bank reconciliation",
        "Cash flow forecasting",
        "Real-time financial insights",
        "Regulatory reporting automation"
      ],
      image: "/images/banking/cashflow-automation.png"
    },
    {
      id: 5,
      title: "Embedded finance & lending enablement",
      description: "Seamless lending and credit facilities integration",
      icon: Globe,
      color: "cyan",
      features: [
        "API-first lending platform",
        "Credit scoring & underwriting",
        "Digital loan disbursement",
        "Automated EMI processing"
      ],
      image: "/images/banking/embedded-finance.png"
    },
    {
      id: 6,
      title: "Advanced analytics & risk monitoring",
      description: "AI-powered risk assessment and business intelligence",
      icon: ShieldCheck,
      color: "red",
      features: [
        "Real-time risk monitoring",
        "AI-powered fraud detection",
        "Business intelligence dashboard",
        "Compliance reporting tools"
      ],
      image: "/images/banking/analytics-risk.png"
    }
  ]

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



      
      {/* SOLUTION PANEL - ENHANCED */}
      <section className="py-24 bg-gradient-to-b from-[#0F0F0F] to-[#0C1F18]">
        <Container>
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Unified Infrastructure{" "}
              <span className="bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
                for Modern Banks
              </span>
            </h2>

            <p className="text-gray-300 mt-4 max-w-3xl mx-auto leading-relaxed">
              Deploy a full-stack financial ecosystem built for speed, compliance,
              and scalability — designed for next-generation banking experiences.
            </p>
          </motion.div>

          {/* Enhanced Infrastructure Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {infrastructureFeatures.map((feature, index) => (
              <motion.div
                key={feature.id}
                className={`group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-${feature.color}-400/40 hover:shadow-[0_0_30px_rgba(0,239,100,0.2)] transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden`}
                onMouseEnter={() => setHoveredCard(feature.id)}
                onMouseLeave={() => setHoveredCard(null)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className={`w-14 h-14 bg-${feature.color}-500/20 rounded-xl flex items-center justify-center text-${feature.color}-400 mb-4 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                  >
                    <feature.icon size={24} />
                  </motion.div>

                  {/* Title */}
                  <h3 className={`text-white text-lg font-bold mb-2 group-hover:text-${feature.color}-400 transition-colors duration-300`}>
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-2 mb-4">
                    {feature.features.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        className="flex items-start gap-2 text-xs text-gray-300"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ 
                          opacity: hoveredCard === feature.id ? 1 : 0.6, 
                          x: hoveredCard === feature.id ? 0 : -10 
                        }}
                        transition={{ duration: 0.2, delay: itemIndex * 0.05 }}
                      >
                        <CheckCircle2 
                          size={8} 
                          className={`text-${feature.color}-400 mt-1 flex-shrink-0`} 
                        />
                        <span className="leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Image placeholder with animation */}
                  <motion.div
                    className="w-full h-32 rounded-lg bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-center">
                      <div className={`w-12 h-12 bg-${feature.color}-500/20 rounded-lg flex items-center justify-center mx-auto mb-2`}>
                        <feature.icon size={20} className={`text-${feature.color}-400`} />
                      </div>
                      <p className="text-xs text-gray-400">Feature Preview</p>
                    </div>
                  </motion.div>

                  {/* Hover indicator */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 bg-${feature.color}-400 rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: hoveredCard === feature.id ? '100%' : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced CTA Button */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MainCTA
                label="Explore Integration"
                destination="/contact"
              />
            </motion.div>
          </motion.div>
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
