'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Laptop, Users, Briefcase, Building2, Smartphone } from 'lucide-react';

/**
 * Use Cases Section Component
 * Shows different industries and scenarios where payment methods are used
 * Requirements: 2.6, 12.6, 15.2
 */
export default function UseCasesSection() {
  const useCases = [
    {
      icon: ShoppingCart,
      industry: 'E-commerce',
      description: 'Accept payments from customers worldwide with multiple payment options',
      recommendedMethods: ['Payment Gateway', 'Payment Links', 'QR Codes'],
    },
    {
      icon: Laptop,
      industry: 'SaaS & Software',
      description: 'Recurring billing and subscription management for your software products',
      recommendedMethods: ['Payment Gateway', 'UPI Collections', 'Payment Links'],
    },
    {
      icon: Users,
      industry: 'Marketplaces',
      description: 'Split payments between sellers and handle bulk payouts efficiently',
      recommendedMethods: ['Payment Gateway', 'Bulk Payouts', 'Vendor Payments'],
    },
    {
      icon: Briefcase,
      industry: 'Freelancers',
      description: 'Send invoices and receive payments quickly without any hassle',
      recommendedMethods: ['Payment Links', 'UPI Collections', 'QR Codes'],
    },
    {
      icon: Building2,
      industry: 'Enterprises',
      description: 'Manage vendor payments, payroll, and bill payments at scale',
      recommendedMethods: ['Bulk Payouts', 'Vendor Payments', 'Salary Disbursements'],
    },
    {
      icon: Smartphone,
      industry: 'Mobile Apps',
      description: 'Seamless in-app payments with native SDK integration',
      recommendedMethods: ['Payment Gateway', 'UPI Collections', 'Payment Links'],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
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
            Perfect for <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Every Industry</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how businesses like yours are using RupeeFlow to streamline their payment operations
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.industry}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300 group`}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <useCase.icon className="w-8 h-8 text-white" />
              </div>

              {/* Industry Name */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{useCase.industry}</h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">{useCase.description}</p>

              {/* Recommended Methods */}
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase mb-3">Recommended Methods</p>
                <div className="flex flex-wrap gap-2">
                  {useCase.recommendedMethods.map((method) => (
                    <span
                      key={method}
                      className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-700 border border-gray-200"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Payments?
            </h3>
            <p className="text-lg text-emerald-50 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that trust RupeeFlow for their payment needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-emerald-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
