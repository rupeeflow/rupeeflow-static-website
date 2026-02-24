'use client';
//test

import { motion } from 'framer-motion';
import { Brain, Target, AlertTriangle, TrendingUp, Users, Clock } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/animations';

const insights = [
  {
    icon: Brain,
    title: 'AI-Powered Predictions',
    description: 'Machine learning models predict payment delays with 95% accuracy',
    color: 'purple',
  },
  {
    icon: Target,
    title: 'DSO Optimization',
    description: 'Track and reduce Days Sales Outstanding with actionable recommendations',
    color: 'blue',
  },
  {
    icon: AlertTriangle,
    title: 'Risk Identification',
    description: 'Automatically identify at-risk customers before they become overdue',
    color: 'red',
  },
  {
    icon: TrendingUp,
    title: 'Cash Flow Forecasting',
    description: 'Predict future cash positions with scenario planning tools',
    color: 'emerald',
  },
  {
    icon: Users,
    title: 'Customer Segmentation',
    description: 'Group customers by payment behavior for targeted strategies',
    color: 'indigo',
  },
  {
    icon: Clock,
    title: 'Real-time Updates',
    description: 'All metrics update instantly as payments are received',
    color: 'teal',
  },
];

const colorClasses = {
  purple: 'from-purple-500 to-pink-500',
  blue: 'from-blue-500 to-cyan-500',
  red: 'from-red-500 to-orange-500',
  emerald: 'from-emerald-500 to-teal-500',
  indigo: 'from-indigo-500 to-purple-500',
  teal: 'from-teal-500 to-emerald-500',
};

export default function InsightsGrid() {
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
            Intelligent{' '}
            <span className="bg-gradient-to-r from-[#53BEC2] to-[#00EF64] bg-clip-text text-transparent">
              Insights
            </span>
          </h2>
          <p className="fontbody2 text-lg text-gray-600 max-w-2xl mx-auto">
            Advanced analytics that help you make smarter collection decisions
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white border-2 border-gray-100 rounded-2xl p-6 md:p-8 hover:shadow-xl hover:border-emerald-100 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colorClasses[insight.color as keyof typeof colorClasses]} flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{insight.title}</h3>
                <p className="fontbody2 text-gray-600 leading-relaxed">{insight.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
