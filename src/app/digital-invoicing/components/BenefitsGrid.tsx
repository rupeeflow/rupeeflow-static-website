'use client';
//test

import { motion } from 'framer-motion';
import { Calculator as CalcIcon, Zap, FileCheck, Upload, FileSignature, Hash } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/animations';

const benefits = [
  {
    icon: CalcIcon,
    title: 'Automatic GST Calculation',
    description: 'Intelligent GST calculation with support for all tax slabs, reverse charge, and exemptions.',
  },
  {
    icon: Zap,
    title: 'IRP Integration',
    description: 'Seamless integration with Invoice Registration Portal for instant e-invoice authentication.',
  },
  {
    icon: FileCheck,
    title: 'Customizable Templates',
    description: 'Professional invoice templates that you can customize while maintaining GST compliance.',
  },
  {
    icon: Upload,
    title: 'Bulk Generation',
    description: 'Generate thousands of invoices in minutes with Excel/CSV upload or API integration.',
  },
  {
    icon: FileSignature,
    title: 'Digital Signatures',
    description: 'Built-in digital signature support for legally valid electronic invoices.',
  },
  {
    icon: Hash,
    title: 'Auto Numbering',
    description: 'Automatic invoice numbering with customizable formats and series management.',
  },
];

export default function BenefitsGrid() {
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
            Everything You Need for{' '}
            <span className="bg-gradient-to-r from-[#53BEC2] to-[#00EF64] bg-clip-text text-transparent">
              GST Compliance
            </span>
          </h2>
          <p className="fontbody2 text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful features designed for seamless e-invoicing and GST compliance
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-gradient-to-br from-white to-emerald-50/30 border-2 border-emerald-100 rounded-2xl p-6 md:p-8 hover:shadow-xl hover:border-emerald-200 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4 shadow-lg">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="fontbody2 text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
