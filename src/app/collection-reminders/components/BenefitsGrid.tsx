'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Calendar, FileText, Activity, Zap, Link as LinkIcon } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/animations';

const benefits = [
  {
    icon: MessageSquare,
    title: 'Multi-Channel Reminders',
    description: 'Send automated reminders via SMS, Email, and WhatsApp to reach customers on their preferred channel.',
  },
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    description: 'AI-powered scheduling based on payment behavior and customer preferences for optimal results.',
  },
  {
    icon: FileText,
    title: 'Customizable Templates',
    description: 'Create personalized reminder templates with your branding and custom messaging.',
  },
  {
    icon: Activity,
    title: 'Real-Time Tracking',
    description: 'Track delivery status, open rates, and customer responses in real-time dashboards.',
  },
  {
    icon: Zap,
    title: 'Automated Escalation',
    description: 'Set up automatic escalation workflows for overdue payments with increasing urgency.',
  },
  {
    icon: LinkIcon,
    title: 'Payment Link Integration',
    description: 'Include secure payment links in reminders for instant one-click payments.',
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
            Powerful Features for{' '}
            <span className="bg-gradient-to-r from-[#53BEC2] to-[#00EF64] bg-clip-text text-transparent">
              Better Collections
            </span>
          </h2>
          <p className="fontbody2 text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to automate payment reminders and improve cash flow
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
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="bg-white border-2 border-gray-100 rounded-2xl p-6 md:p-8 hover:shadow-xl hover:border-emerald-100 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-emerald-600" />
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
