'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function PartnershipSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  // Banking infrastructure features
  const infrastructureFeatures = [
    {
      id: 1,
      title: "Core Banking System",
      description: "Next-generation core banking platform with real-time processing",
      icon: "🏦",
      color: "emerald",
      features: [
        "Real-time transaction processing",
        "Multi-branch connectivity",
        "Automated reconciliation",
        "Regulatory compliance built-in"
      ]
    },
    {
      id: 2,
      title: "Payment Gateway Integration",
      description: "Seamless integration with all major payment networks",
      icon: "💳",
      color: "blue",
      features: [
        "UPI, IMPS, NEFT, RTGS support",
        "Real-time settlement",
        "Multi-currency processing",
        "Advanced fraud detection"
      ]
    },
    {
      id: 3,
      title: "Digital Banking Suite",
      description: "Complete digital banking experience for modern customers",
      icon: "📱",
      color: "purple",
      features: [
        "Mobile banking app",
        "Internet banking portal",
        "API-first architecture",
        "Omnichannel experience"
      ]
    },
    {
      id: 4,
      title: "Risk Management System",
      description: "Advanced risk assessment and compliance monitoring",
      icon: "🛡️",
      color: "orange",
      features: [
        "AI-powered risk scoring",
        "AML/KYC compliance",
        "Real-time monitoring",
        "Automated reporting"
      ]
    }
  ]

  // Partners
  const partners = [
    { name: 'UPI', logo: '/partners/upi.png' },
    { name: 'BBPS', logo: '/partners/bbps.png' },
    { name: 'NPCI', logo: '/partners/npci.png' },
    { name: 'RBI', logo: '/partners/rbi.png' },
  ]

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Main heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="fontheading text-3xl md:text-4xl text-gray-900 mb-6">
            Unified Infrastructure for <span className="text-emerald-500">Modern Banks</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto fontbody2 leading-relaxed">
            Deploy a full-stack financial ecosystem built for speed, compliance, and scalability — designed for next-generation banking experiences.
          </p>
        </motion.div>

        {/* Infrastructure Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {infrastructureFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              className={`group relative bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden`}
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}-50 to-${feature.color}-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 bg-${feature.color}-100 rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                >
                  {feature.icon}
                </motion.div>

                {/* Title */}
                <h3 className={`fontheading text-lg font-bold text-gray-900 mb-2 group-hover:text-${feature.color}-600 transition-colors duration-300`}>
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 fontbody2 leading-relaxed">
                  {feature.description}
                </p>

                {/* Features list */}
                <ul className="space-y-2">
                  {feature.features.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      className="flex items-start gap-2 text-xs text-gray-600 fontbody2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ 
                        opacity: hoveredCard === feature.id ? 1 : 0.7, 
                        x: hoveredCard === feature.id ? 0 : -10 
                      }}
                      transition={{ duration: 0.2, delay: itemIndex * 0.05 }}
                    >
                      <span className={`w-1.5 h-1.5 bg-${feature.color}-500 rounded-full mt-1.5 flex-shrink-0`} />
                      {item}
                    </motion.li>
                  ))}
                </ul>

                {/* Hover indicator */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-${feature.color}-500 rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: hoveredCard === feature.id ? '100%' : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partners Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="fontheading text-2xl md:text-3xl text-gray-900 mb-4">
            In Partnership with
          </h3>
          <p className="text-gray-600 mb-10 fontbody2">
            Backed by trusted institutions and leading technology partners
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                className="flex items-center justify-center w-28 md:w-36 bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="object-contain w-full h-auto"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
