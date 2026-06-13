'use client';
//test

import { motion } from 'framer-motion';
import { FileInput, Settings, Send, Mail, BarChart } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: FileInput,
    title: 'Enter Details',
    description: 'Input invoice details or import from Excel/ERP',
  },
  {
    number: 2,
    icon: Settings,
    title: 'Generate Invoice',
    description: 'System creates GST-compliant invoice automatically',
  },
  {
    number: 3,
    icon: Send,
    title: 'Submit to IRP',
    description: 'Auto-submit to IRP for e-invoice authentication',
  },
  {
    number: 4,
    icon: Mail,
    title: 'Send to Customer',
    description: 'Email/WhatsApp invoice with payment link',
  },
  {
    number: 5,
    icon: BarChart,
    title: 'Track Status',
    description: 'Monitor invoice and payment status in real-time',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="fontheading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Simple{' '}
            <span className="bg-gradient-to-r from-[#53BEC2] to-[#00EF64] bg-clip-text text-transparent">
              5-Step Process
            </span>
          </h2>
          <p className="fontbody2 text-lg text-gray-600 max-w-2xl mx-auto">
            From invoice creation to payment tracking in minutes
          </p>
        </motion.div>

        <div className="hidden lg:block relative max-w-6xl mx-auto">
          <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200" />
          
          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="relative"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 text-[var(--foreground)] flex items-center justify-center text-xl font-bold mb-4 relative z-10 shadow-lg">
                      {step.number}
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-3">
                      <Icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="lg:hidden space-y-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex gap-4 bg-[var(--card)] rounded-xl p-6 shadow-sm border border-emerald-100"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 text-[var(--foreground)] flex items-center justify-center text-lg font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-emerald-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
