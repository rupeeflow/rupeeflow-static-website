'use client';
//test

import { motion } from 'framer-motion';
import { Settings, FileEdit, Send, BarChart3, DollarSign } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: Settings,
    title: 'Set Up Schedules',
    description: 'Configure reminder schedules based on payment terms and customer preferences',
  },
  {
    number: 2,
    icon: FileEdit,
    title: 'Customize Templates',
    description: 'Create personalized message templates with your branding',
  },
  {
    number: 3,
    icon: Send,
    title: 'Auto-Send Reminders',
    description: 'System automatically sends reminders via SMS, email, and WhatsApp',
  },
  {
    number: 4,
    icon: BarChart3,
    title: 'Track Delivery',
    description: 'Monitor delivery status and customer responses in real-time',
  },
  {
    number: 5,
    icon: DollarSign,
    title: 'Collect Faster',
    description: 'Receive payments faster with improved collection rates',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="fontheading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How It{' '}
            <span className="bg-gradient-to-r from-[#53BEC2] to-[#00EF64] bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="fontbody2 text-lg text-gray-600 max-w-2xl mx-auto">
            Get started in minutes with our simple 5-step process
          </p>
        </motion.div>

        {/* Desktop: Horizontal layout */}
        <div className="hidden lg:block relative">
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-200 via-emerald-300 to-emerald-200" />
          
          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  custom={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center text-2xl font-bold mb-4 relative z-10 shadow-lg">
                      {step.number}
                    </div>
                    <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-emerald-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: Vertical layout */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex gap-4 bg-gray-50 rounded-xl p-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xl font-bold">
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
