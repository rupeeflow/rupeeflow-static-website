'use client';
//test

import { motion } from 'framer-motion';
import { BarChart3, Bell, Download, Filter } from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: 'Customizable Dashboards',
    description: 'Drag-and-drop widgets to create personalized views for different teams',
    image: 'Dashboard customization placeholder',
  },
  {
    icon: Bell,
    title: 'Smart Alerts',
    description: 'Get notified when metrics cross thresholds or patterns change',
    image: 'Alert system placeholder',
  },
  {
    icon: Download,
    title: 'Export & Reports',
    description: 'Schedule automated reports in PDF, Excel, or CSV formats',
    image: 'Export options placeholder',
  },
  {
    icon: Filter,
    title: 'Advanced Filters',
    description: 'Slice and dice data by customer, region, product, or time period',
    image: 'Filter interface placeholder',
  },
];

export default function FeaturesShowcase() {
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
            Powerful{' '}
            <span className="bg-gradient-to-r from-[#53BEC2] to-[#00EF64] bg-clip-text text-transparent">
              Features
            </span>
          </h2>
        </motion.div>

        <div className="space-y-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid md:grid-cols-2 gap-8 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`${!isEven ? 'md:order-2' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="fontbody2 text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className={`${!isEven ? 'md:order-1' : ''}`}>
                  <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-8 h-64 flex items-center justify-center border-2 border-emerald-200">
                    <p className="text-gray-500 text-center">{feature.image}</p>
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
