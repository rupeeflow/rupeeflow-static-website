'use client';

import { motion } from 'framer-motion';
import { Code, Zap, Shield, Smartphone } from 'lucide-react';
import IntegrationMockup from './IntegrationMockup';

/**
 * Integration Showcase Component
 * Shows integration capabilities and API features
 * Requirements: 2.5, 12.5
 */
export default function IntegrationShowcase() {
  const integrationFeatures = [
    {
      icon: Code,
      title: 'Developer Friendly',
      description: 'RESTful APIs with comprehensive documentation and SDKs for all major languages',
    },
    {
      icon: Zap,
      title: 'Quick Integration',
      description: 'Get started in minutes with our plug-and-play SDKs and detailed guides',
    },
    {
      icon: Shield,
      title: 'Secure & Compliant',
      description: 'ISO 27001 certified with 256-bit encryption and fraud detection',
    },
    {
      icon: Smartphone,
      title: 'Mobile Ready',
      description: 'Native SDKs for iOS and Android with seamless mobile payment experience',
    },
  ];

  const integrationLogos = [
    { name: 'React', color: 'text-blue-500' },
    { name: 'Node.js', color: 'text-green-600' },
    { name: 'Python', color: 'text-yellow-500' },
    { name: 'PHP', color: 'text-purple-600' },
    { name: 'Java', color: 'text-red-600' },
    { name: 'Ruby', color: 'text-red-500' },
  ];

  return (
    <section className="py-20 bg-[var(--background)] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-4">
            Integrate in <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Minutes</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Powerful APIs and SDKs that developers love. Get started quickly with our comprehensive documentation
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {integrationFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 p-4 rounded-xl bg-[var(--card)] border border-[var(--border)] hover:bg-[var(--card)] transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shrink-0">
                  <feature.icon className="w-6 h-6 text-[var(--foreground)]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--foreground)] mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right - Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <IntegrationMockup />
          </motion.div>
        </div>

        {/* Supported Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-400 text-sm mb-6">Supported Languages & Frameworks</p>
          <div className="flex flex-wrap justify-center gap-8">
            {integrationLogos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex flex-col items-center gap-2"
              >
                <div className={`w-12 h-12 rounded-xl bg-[var(--card)] border border-white/20 flex items-center justify-center ${logo.color} hover:bg-[var(--card)] transition-colors`}>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <span className="text-xs text-gray-400">{logo.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
