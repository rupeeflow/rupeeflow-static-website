'use client';
//test

import { motion } from 'framer-motion';
import Image from 'next/image';
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
    <section className="py-16 md:py-24 bg-[var(--card)]">
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
                className="bg-[var(--card)] border-2 border-gray-100 rounded-2xl p-6 md:p-8 hover:shadow-xl hover:border-emerald-100 transition-all duration-300"
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

        {/* Feature Image with 3D Interactive Phone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative flex justify-center mt-16 mb-8"
        >
          <div className="relative w-full max-w-[900px]">
            {/* Main Feature Image */}
            <Image
              src="/payable-receivable/1.jpeg"
              alt="Payment Reminder Features"
              width={900}
              height={350}
              className="rounded-3xl shadow-2xl w-full"
            />

            {/* 3D Interactive Phone - Positioned on Left */}
            <motion.div
              initial={{ opacity: 0, x: -100, rotateY: -30 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ 
                scale: 1.08,
                rotateY: 8,
                rotateX: -3,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1200px"
              }}
              className="absolute -left-8 lg:-left-16 top-1/2 -translate-y-1/2 cursor-pointer hidden lg:block"
            >
              {/* Phone Container with 3D effect */}
              <motion.div
                style={{
                  transformStyle: "preserve-3d"
                }}
                className="relative"
              >
                {/* Phone Shadow */}
                <motion.div
                  initial={{ scale: 1, opacity: 0.3 }}
                  whileHover={{ 
                    scale: 1.15, 
                    opacity: 0.5,
                    y: 5,
                    transition: { duration: 0.4 }
                  }}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[252px] h-10 bg-[var(--background)]/40 rounded-full blur-2xl"
                  style={{ transform: "translateZ(-50px)" }}
                />

                {/* Phone Frame */}
                <motion.div
                  initial={{ boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.3)" }}
                  whileHover={{ 
                    boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(16, 185, 129, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.1)",
                    transition: { duration: 0.4 }
                  }}
                  className="relative w-[252px] h-[504px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-[2.25rem] p-2.5 border-4 border-gray-700"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "translateZ(30px)"
                  }}
                >
                  {/* Animated Glow Ring */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ 
                      opacity: 1,
                      transition: { duration: 0.3 }
                    }}
                    className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 rounded-[2.4rem] blur-md"
                    style={{ zIndex: -1 }}
                  />

                  {/* Screen Bezel Shine */}
                  <motion.div 
                    initial={{ opacity: 0.1 }}
                    whileHover={{ 
                      opacity: 0.3,
                      transition: { duration: 0.4 }
                    }}
                    className="absolute inset-0 rounded-[2.25rem] bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" 
                  />

                  {/* Screen */}
                  <div className="relative w-full h-full bg-[var(--card)] rounded-[2rem] overflow-hidden shadow-inner">
                    {/* Status Bar */}
                    <div className="absolute top-0 left-0 right-0 h-9 bg-gradient-to-b from-gray-50 to-transparent z-20 flex items-center justify-between px-4">
                      <span className="text-[9px] font-semibold text-gray-900">9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="w-2.5 h-2 border border-gray-900 rounded-sm relative">
                          <div className="absolute inset-0.5 bg-gray-900 rounded-sm" />
                        </div>
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="absolute top-9 left-0 right-0 bg-[var(--card)] border-b border-gray-100 p-2.5 z-10">
                      <h3 className="text-xs font-bold text-gray-900">Payment Reminders</h3>
                      <p className="text-[9px] text-gray-500">Automated Collection</p>
                    </div>

                    {/* Scrollable Content */}
                    <div className="absolute top-[88px] left-0 right-0 bottom-0 overflow-hidden">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-5">
                        <div className="absolute inset-0" style={{
                          backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)',
                          backgroundSize: '18px 18px'
                        }} />
                      </div>

                      {/* Notification Cards */}
                      <div className="relative h-full p-3 space-y-2">
                        {/* Card 1 - Multi-Channel */}
                        <motion.div
                          initial={{ x: 200, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 1, duration: 0.4 }}
                          className="bg-[var(--card)] rounded-xl shadow-md border border-gray-100 p-3"
                        >
                          <div className="flex items-start gap-2">
                            <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                              <MessageSquare className="w-4 h-4 text-emerald-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[11px] font-semibold text-gray-900">Multi-Channel</p>
                              <p className="text-[9px] text-gray-600">WhatsApp • Email • SMS</p>
                              <div className="flex gap-0.5 mt-1">
                                {[0, 1, 2].map((i) => (
                                  <motion.div
                                    key={i}
                                    animate={{ scale: [1, 1.3, 1] }}
                                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                                    className="w-1 h-1 rounded-full bg-emerald-500"
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>

                        {/* Card 2 - Smart Scheduling */}
                        <motion.div
                          initial={{ x: 200, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 1.3, duration: 0.4 }}
                          className="bg-[var(--card)] rounded-xl shadow-md border border-gray-100 p-3"
                        >
                          <div className="flex items-start gap-2">
                            <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                              <Calendar className="w-4 h-4 text-blue-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[11px] font-semibold text-gray-900">AI Scheduling</p>
                              <p className="text-[9px] text-gray-600">Optimal timing</p>
                              <div className="mt-1 h-0.5 bg-gray-100 rounded-full overflow-hidden">
                                <motion.div
                                  animate={{ width: ["0%", "100%"] }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                  className="h-full bg-blue-500"
                                />
                              </div>
                            </div>
                          </div>
                        </motion.div>

                        {/* Card 3 - Templates */}
                        <motion.div
                          initial={{ x: 200, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 1.6, duration: 0.4 }}
                          className="bg-[var(--card)] rounded-xl shadow-md border border-gray-100 p-3"
                        >
                          <div className="flex items-start gap-2">
                            <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                              <FileText className="w-4 h-4 text-purple-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[11px] font-semibold text-gray-900">Custom Template</p>
                              <p className="text-[9px] text-gray-600">Branded message</p>
                              <div className="mt-1 space-y-0.5">
                                <motion.div
                                  animate={{ width: ["30%", "70%", "30%"] }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                  className="h-0.5 bg-purple-200 rounded"
                                />
                                <motion.div
                                  animate={{ width: ["50%", "80%", "50%"] }}
                                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                                  className="h-0.5 bg-purple-200 rounded"
                                />
                              </div>
                            </div>
                          </div>
                        </motion.div>

                        {/* Card 4 - Tracking */}
                        <motion.div
                          initial={{ x: 200, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 1.9, duration: 0.4 }}
                          className="bg-[var(--card)] rounded-xl shadow-md border border-gray-100 p-3"
                        >
                          <div className="flex items-start gap-2">
                            <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                              <Activity className="w-4 h-4 text-orange-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[11px] font-semibold text-gray-900">Live Tracking</p>
                              <p className="text-[9px] text-gray-600">Delivered • Opened</p>
                              <div className="flex items-end gap-0.5 mt-1 h-4">
                                {[25, 40, 30, 55, 45, 60].map((height, i) => (
                                  <motion.div
                                    key={i}
                                    animate={{ height: [`${height}%`, `${height + 15}%`, `${height}%`] }}
                                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                                    className="flex-1 bg-orange-400 rounded-t"
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>

                        {/* Card 5 - Escalation */}
                        <motion.div
                          initial={{ x: 200, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 2.2, duration: 0.4 }}
                          className="bg-[var(--card)] rounded-xl shadow-md border border-gray-100 p-3"
                        >
                          <div className="flex items-start gap-2">
                            <div className="w-8 h-8 rounded-lg bg-yellow-100 flex items-center justify-center flex-shrink-0">
                              <Zap className="w-4 h-4 text-yellow-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[11px] font-semibold text-gray-900">Auto Escalation</p>
                              <p className="text-[9px] text-gray-600">Level 2 triggered</p>
                              <div className="flex gap-0.5 mt-1">
                                {[0, 1, 2].map((i) => (
                                  <motion.div
                                    key={i}
                                    animate={{ opacity: [0.3, 1, 0.3] }}
                                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                                    className="w-1.5 bg-yellow-500 rounded"
                                    style={{ height: `${(i + 1) * 4}px` }}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>

                        {/* Card 6 - Payment Link */}
                        <motion.div
                          initial={{ x: 200, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 2.5, duration: 0.4 }}
                          className="bg-[var(--card)] rounded-xl shadow-md border border-gray-100 p-3"
                        >
                          <div className="flex items-start gap-2">
                            <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
                              <LinkIcon className="w-4 h-4 text-indigo-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[11px] font-semibold text-gray-900">Payment Link</p>
                              <p className="text-[9px] text-gray-600">One-click payment</p>
                              <motion.button
                                animate={{ 
                                  boxShadow: [
                                    "0 0 0 0 rgba(99, 102, 241, 0)",
                                    "0 0 0 4px rgba(99, 102, 241, 0.2)",
                                    "0 0 0 0 rgba(99, 102, 241, 0)"
                                  ]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="mt-1 px-3 py-1 bg-indigo-500 text-[var(--foreground)] text-[9px] rounded-md font-medium"
                              >
                                Pay Now
                              </motion.button>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Phone Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-900 rounded-b-2xl z-30" />
                </motion.div>

                {/* Phone Buttons */}
                <div className="absolute -right-0.5 top-18 w-0.5 h-9 bg-gray-700 rounded-l" />
                <div className="absolute -right-0.5 top-28 w-0.5 h-10 bg-gray-700 rounded-l" />
                <div className="absolute -left-0.5 top-24 w-0.5 h-5 bg-gray-700 rounded-r" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
