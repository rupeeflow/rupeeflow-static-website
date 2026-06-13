'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Database, GitBranch, Users, Paperclip, Bell, FileCheck, CheckCircle, Clock, XCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { useState, useEffect } from 'react';

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
  const [activeInvoice, setActiveInvoice] = useState(0);
  const [approvalStage, setApprovalStage] = useState(0);

  // Invoice workflow stages
  const invoices = [
    { id: 'INV-2024-001', vendor: 'Tech Supplies', amount: '₹45,000', status: 'pending' },
    { id: 'INV-2024-002', vendor: 'Office Mart', amount: '₹1,20,000', status: 'approved' },
    { id: 'INV-2024-003', vendor: 'Cloud Services', amount: '₹80,000', status: 'rejected' },
  ];

  const approvalStages = [
    { name: 'Submitted', icon: FileCheck, color: 'blue' },
    { name: 'Manager Review', icon: Clock, color: 'yellow' },
    { name: 'Finance Approval', icon: CheckCircle, color: 'emerald' },
    { name: 'Payment Scheduled', icon: CheckCircle, color: 'green' },
  ];

  // Auto-cycle through invoices
  useEffect(() => {
    const invoiceInterval = setInterval(() => {
      setActiveInvoice((prev) => (prev + 1) % invoices.length);
      setApprovalStage(0);
    }, 8000);

    return () => clearInterval(invoiceInterval);
  }, []);

  // Progress through approval stages
  useEffect(() => {
    if (invoices[activeInvoice].status === 'approved') {
      const stageInterval = setInterval(() => {
        setApprovalStage((prev) => {
          if (prev < approvalStages.length - 1) {
            return prev + 1;
          }
          return prev;
        });
      }, 1500);

      return () => clearInterval(stageInterval);
    }
  }, [activeInvoice]);

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
                className="bg-[var(--card)] rounded-2xl p-6 md:p-8 border-2 border-gray-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4 shadow-lg">
                  <Icon className="w-7 h-7 text-[var(--foreground)]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="fontbody2 text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Feature Image with Interactive Workflow Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative flex justify-center mt-16"
        >
          <div className="relative w-full max-w-[900px]">
            <Image
              src="/payable-receivable/3.jpeg"
              alt="Invoice Management Features"
              width={900}
              height={350}
              className="rounded-3xl shadow-2xl w-full"
            />

            {/* Top Left - Invoice Queue */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute left-[2%] top-[8%] w-56 bg-[var(--card)] backdrop-blur-sm rounded-xl shadow-2xl border-2 border-blue-100 p-4 hidden lg:block"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-gray-900">Invoice Queue</h3>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-semibold">
                  {invoices.length} New
                </span>
              </div>

              {/* Invoice List */}
              <div className="space-y-2">
                {invoices.map((invoice, index) => (
                  <motion.div
                    key={invoice.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ 
                      x: 0, 
                      opacity: 1,
                      scale: activeInvoice === index ? 1.05 : 1,
                      borderColor: activeInvoice === index ? '#3b82f6' : '#e5e7eb'
                    }}
                    transition={{ delay: index * 0.2 }}
                    className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${
                      activeInvoice === index ? 'bg-blue-50 border-blue-300' : 'bg-gray-50 border-gray-200'
                    }`}
                    onClick={() => {
                      setActiveInvoice(index);
                      setApprovalStage(0);
                    }}
                  >
                    <div className="flex items-start justify-between mb-1">
                      <div>
                        <p className="text-xs font-bold text-gray-900">{invoice.id}</p>
                        <p className="text-[10px] text-gray-600">{invoice.vendor}</p>
                      </div>
                      {invoice.status === 'approved' && (
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                      )}
                      {invoice.status === 'rejected' && (
                        <XCircle className="w-4 h-4 text-red-600" />
                      )}
                      {invoice.status === 'pending' && (
                        <Clock className="w-4 h-4 text-yellow-600" />
                      )}
                    </div>
                    <p className="text-sm font-bold text-gray-900">{invoice.amount}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Center - Approval Workflow Pipeline */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute left-1/2 -translate-x-1/2 top-[25%] hidden lg:block"
            >
              <div className="bg-[var(--card)] backdrop-blur-sm rounded-xl shadow-2xl border-2 border-emerald-100 p-4 w-[400px]">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-gray-900">Approval Workflow</h3>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={activeInvoice}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-semibold"
                    >
                      {invoices[activeInvoice].id}
                    </motion.span>
                  </AnimatePresence>
                </div>

                {/* Workflow Stages */}
                <div className="relative">
                  {/* Progress Line */}
                  <div className="absolute top-6 left-6 right-6 h-0.5 bg-gray-200">
                    <motion.div
                      className="h-full bg-emerald-500"
                      initial={{ width: '0%' }}
                      animate={{ 
                        width: invoices[activeInvoice].status === 'approved' 
                          ? `${(approvalStage / (approvalStages.length - 1)) * 100}%` 
                          : '0%'
                      }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>

                  {/* Stage Nodes */}
                  <div className="flex justify-between relative">
                    {approvalStages.map((stage, index) => {
                      const StageIcon = stage.icon;
                      const isActive = index <= approvalStage && invoices[activeInvoice].status === 'approved';
                      const isCurrent = index === approvalStage && invoices[activeInvoice].status === 'approved';

                      return (
                        <div key={stage.name} className="flex flex-col items-center">
                          <motion.div
                            animate={{
                              scale: isCurrent ? [1, 1.2, 1] : 1,
                              backgroundColor: isActive ? '#10b981' : '#e5e7eb',
                              boxShadow: isCurrent 
                                ? ['0 0 0 0 rgba(16, 185, 129, 0.4)', '0 0 0 10px rgba(16, 185, 129, 0)', '0 0 0 0 rgba(16, 185, 129, 0)']
                                : 'none'
                            }}
                            transition={{ 
                              scale: { duration: 1, repeat: isCurrent ? Infinity : 0 },
                              backgroundColor: { duration: 0.3 },
                              boxShadow: { duration: 1.5, repeat: isCurrent ? Infinity : 0 }
                            }}
                            className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg relative z-10"
                          >
                            <StageIcon className={`w-5 h-5 ${isActive ? 'text-[var(--foreground)]' : 'text-gray-400'}`} />
                          </motion.div>
                          <motion.p
                            animate={{ 
                              color: isActive ? '#10b981' : '#6b7280',
                              fontWeight: isCurrent ? 700 : 500
                            }}
                            className="text-[10px] text-center mt-2 max-w-[70px]"
                          >
                            {stage.name}
                          </motion.p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Status Message */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeInvoice}-${approvalStage}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 p-2 rounded-lg bg-emerald-50 border border-emerald-200"
                  >
                    {invoices[activeInvoice].status === 'approved' && (
                      <p className="text-xs text-emerald-700 font-semibold text-center">
                        {approvalStages[approvalStage].name}...
                      </p>
                    )}
                    {invoices[activeInvoice].status === 'pending' && (
                      <p className="text-xs text-yellow-700 font-semibold text-center">
                        Awaiting approval
                      </p>
                    )}
                    {invoices[activeInvoice].status === 'rejected' && (
                      <p className="text-xs text-red-700 font-semibold text-center">
                        Rejected - Requires revision
                      </p>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Right Side - Activity Feed */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute right-[2%] top-[8%] w-60 bg-[var(--card)] backdrop-blur-sm rounded-xl shadow-2xl border-2 border-purple-100 p-4 hidden lg:block"
            >
              <div className="flex items-center gap-2 mb-3">
                <Bell className="w-4 h-4 text-purple-600" />
                <h3 className="text-sm font-bold text-gray-900">Activity Feed</h3>
              </div>

              {/* Activity Items */}
              <div className="space-y-3 max-h-[280px] overflow-hidden">
                <AnimatePresence mode="popLayout">
                  {[
                    { action: 'Invoice submitted', user: 'Vendor Portal', time: 'Just now', icon: FileCheck, color: 'blue' },
                    { action: 'Assigned to Manager', user: 'System', time: '2m ago', icon: ArrowRight, color: 'indigo' },
                    { action: 'Approved by Manager', user: 'John Doe', time: '5m ago', icon: CheckCircle, color: 'emerald' },
                    { action: 'Sent to Finance', user: 'System', time: '8m ago', icon: ArrowRight, color: 'indigo' },
                  ].map((activity, index) => {
                    const ActivityIcon = activity.icon;
                    return (
                      <motion.div
                        key={`${activeInvoice}-${index}`}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -50, opacity: 0 }}
                        transition={{ delay: index * 0.15 }}
                        className="flex gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className={`w-8 h-8 rounded-lg bg-${activity.color}-100 flex items-center justify-center flex-shrink-0`}>
                          <ActivityIcon className={`w-4 h-4 text-${activity.color}-600`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-gray-900">{activity.action}</p>
                          <p className="text-[10px] text-gray-600">{activity.user}</p>
                          <p className="text-[10px] text-gray-400">{activity.time}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Bottom - Quick Stats */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute bottom-[5%] left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-6 bg-[var(--card)] backdrop-blur-sm rounded-full px-8 py-3 shadow-2xl border-2 border-gray-100"
            >
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center"
                >
                  <FileCheck className="w-4 h-4 text-[var(--foreground)]" />
                </motion.div>
                <div>
                  <p className="text-xs font-bold text-gray-900">60% Faster</p>
                  <p className="text-[10px] text-gray-500">Processing time</p>
                </div>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center"
                >
                  <CheckCircle className="w-4 h-4 text-[var(--foreground)]" />
                </motion.div>
                <div>
                  <p className="text-xs font-bold text-gray-900">100% Audit</p>
                  <p className="text-[10px] text-gray-500">Complete trail</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
