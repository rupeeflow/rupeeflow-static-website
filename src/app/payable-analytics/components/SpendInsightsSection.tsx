'use client';

import { motion } from 'framer-motion';
import { TrendingDown, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';

const insights = [
  {
    icon: TrendingDown,
    title: 'Cost Reduction Opportunity',
    value: '₹45,000',
    description: 'Identified in vendor consolidation',
    trend: 'positive',
    color: 'emerald',
  },
  {
    icon: TrendingUp,
    title: 'Spend Increase Alert',
    value: '12%',
    description: 'Operations category vs last month',
    trend: 'warning',
    color: 'yellow',
  },
  {
    icon: CheckCircle,
    title: 'Budget Compliance',
    value: '94%',
    description: 'Departments within budget',
    trend: 'positive',
    color: 'blue',
  },
  {
    icon: AlertCircle,
    title: 'Duplicate Payments Risk',
    value: '3',
    description: 'Potential duplicates detected',
    trend: 'alert',
    color: 'red',
  },
];

export default function SpendInsightsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="fontheading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Actionable{' '}
            <span className="bg-gradient-to-r from-[#53BEC2] to-[#00EF64] bg-clip-text text-transparent">
              Insights
            </span>
          </h2>
          <p className="fontbody2 text-lg text-gray-600 max-w-2xl mx-auto">
            AI-powered recommendations to optimize your spending
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${insight.color}-500 to-${insight.color}-600 flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">{insight.title}</h3>
                    <p className="text-3xl font-bold text-emerald-600 mb-2">{insight.value}</p>
                    <p className="text-sm text-gray-600">{insight.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
