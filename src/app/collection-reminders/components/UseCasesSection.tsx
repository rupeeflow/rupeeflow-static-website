'use client';
//test

import { motion } from 'framer-motion';
import { Building2, Repeat, User, Store, Check } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/animations';

const useCases = [
  {
    industry: 'B2B Service Companies',
    icon: Building2,
    scenario: 'Managing net-30 payment terms with multiple corporate clients',
    solution: 'Automated reminder sequences ensure timely payments without manual follow-ups',
    results: ['35% faster payment collection', 'Reduced DSO by 12 days', '90% less manual work'],
  },
  {
    industry: 'Subscription Businesses',
    icon: Repeat,
    scenario: 'Handling recurring payments and failed transactions',
    solution: 'Smart reminders before due dates and instant alerts for failed payments',
    results: ['25% reduction in churn', '95% payment success rate', 'Improved cash predictability'],
  },
  {
    industry: 'Freelancers & Consultants',
    icon: User,
    scenario: 'Chasing payments from individual clients while focusing on work',
    solution: 'Set-and-forget automation handles all payment reminders professionally',
    results: ['Save 10+ hours per month', 'Get paid 40% faster', 'Better client relationships'],
  },
  {
    industry: 'Small Businesses',
    icon: Store,
    scenario: 'Limited resources for accounts receivable management',
    solution: 'Enterprise-grade collection tools accessible to businesses of all sizes',
    results: ['Improved cash flow', 'Professional communication', 'Scalable as you grow'],
  },
];

export default function UseCasesSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="fontheading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Perfect for{' '}
            <span className="bg-gradient-to-r from-[#53BEC2] to-[#00EF64] bg-clip-text text-transparent">
              Every Business
            </span>
          </h2>
          <p className="fontbody2 text-lg text-gray-600 max-w-2xl mx-auto">
            See how businesses like yours benefit from automated payment reminders
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 md:gap-8"
        >
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-emerald-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{useCase.industry}</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-1">Challenge</p>
                    <p className="text-gray-700">{useCase.scenario}</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-1">Solution</p>
                    <p className="text-gray-700">{useCase.solution}</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-2">Results</p>
                    <ul className="space-y-2">
                      {useCase.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
