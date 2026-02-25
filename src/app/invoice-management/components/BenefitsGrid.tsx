'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Database, GitBranch, Users, Paperclip, Bell, FileCheck } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/animations';

const benefits = [
  {
    icon: Database,
    title: 'Centralized Repository',
    description: 'Store all invoices in one secure location with advanced search and filtering capabilities',
  },
  {
    icon: GitBranch,
    title: 'Multi-Level Approvals',
    description: 'Configure custom approval workflows based on amount, vendor, or department',
  },
  {
    icon: Users,
    title: 'Vendor Portal',
    description: 'Let vendors submit invoices directly and track payment status in real-time',
  },
  {
    icon: Paperclip,
    title: 'Document Attachments',
    description: 'Attach purchase orders, delivery notes, and supporting documents to each invoice',
  },
  {
    icon: Bell,
    title: 'Auto Notifications',
    description: 'Automatic reminders for pending approvals and upcoming payment deadlines',
  },
  {
    icon: FileCheck,
    title: 'Complete Audit Trail',
    description: 'Track every action, approval, and modification with timestamped audit logs',
  },
];

export default function BenefitsGrid() {
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
            Complete{' '}
            <span className="bg-gradient-to-r from-[#53BEC2] to-[#00EF64] bg-clip-text text-transparent">
              Control
            </span>
          </h2>
          <p className="fontbody2 text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage invoices from receipt to payment
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
                className="bg-white rounded-2xl p-6 md:p-8 border-2 border-gray-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300"
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

        {/* Feature Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <Image
            src="/payable-receivable/3.jpeg"
            alt="Invoice Management Features"
            width={900}
            height={350}
            className="rounded-3xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
