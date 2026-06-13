'use client';

import { motion } from 'framer-motion';

/**
 * Comparison Section Component
 * Compares different payment methods side-by-side
 * Requirements: 2.4, 12.4
 */
export default function ComparisonSection() {
  const comparisons = [
    {
      method: 'Payment Links',
      bestFor: 'Quick invoicing & one-time payments',
      features: [
        { name: 'Setup Time', value: '< 5 minutes' },
        { name: 'Technical Knowledge', value: 'None required' },
        { name: 'Integration', value: 'No code' },
        { name: 'Payment Modes', value: 'All modes' },
        { name: 'Customization', value: 'Limited' },
        { name: 'Best Use Case', value: 'Invoicing, freelancers' },
      ],
    },
    {
      method: 'Payment Gateway',
      bestFor: 'E-commerce & online businesses',
      featured: true,
      features: [
        { name: 'Setup Time', value: '1-2 days' },
        { name: 'Technical Knowledge', value: 'Basic coding' },
        { name: 'Integration', value: 'API/SDK' },
        { name: 'Payment Modes', value: 'All modes' },
        { name: 'Customization', value: 'Full control' },
        { name: 'Best Use Case', value: 'E-commerce, SaaS' },
      ],
    },
    {
      method: 'Bulk Payouts',
      bestFor: 'Vendor payments & refunds',
      features: [
        { name: 'Setup Time', value: '3-5 days' },
        { name: 'Technical Knowledge', value: 'Basic API' },
        { name: 'Integration', value: 'API/Excel' },
        { name: 'Payment Modes', value: 'Bank transfers' },
        { name: 'Customization', value: 'Workflows' },
        { name: 'Best Use Case', value: 'B2B, marketplaces' },
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Compare <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Payment Methods</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find the perfect payment solution for your business needs
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {comparisons.map((comparison, index) => (
            <motion.div
              key={comparison.method}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-[var(--card)] rounded-2xl p-8 border-2 ${
                comparison.featured 
                  ? 'border-emerald-500 shadow-2xl shadow-emerald-500/20 scale-105' 
                  : 'border-gray-200 hover:border-emerald-200 hover:shadow-xl'
              } transition-all duration-300`}
            >
              {/* Featured Badge */}
              {comparison.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-[var(--foreground)] text-xs font-bold rounded-full">
                  MOST POPULAR
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                  <svg className="w-8 h-8 text-[var(--foreground)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{comparison.method}</h3>
                <p className="text-sm text-emerald-600 font-semibold">{comparison.bestFor}</p>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                {comparison.features.map((feature, idx) => (
                  <div key={idx} className="flex justify-between items-start gap-4">
                    <span className="text-sm text-gray-600 font-medium">{feature.name}</span>
                    <span className="text-sm text-gray-900 font-semibold text-right">{feature.value}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className={`w-full mt-8 px-6 py-3 rounded-xl font-semibold transition-all ${
                comparison.featured
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-[var(--foreground)] hover:shadow-lg hover:shadow-emerald-500/30'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600">
            Not sure which one to choose?{' '}
            <a href="/support" className="text-emerald-600 font-semibold hover:text-emerald-700">
              Talk to our experts →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
