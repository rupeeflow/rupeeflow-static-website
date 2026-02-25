'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Brain, Target, AlertTriangle, TrendingUp, Users, Clock, BarChart3, Activity, Zap } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { useState, useEffect } from 'react';

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
  const [leftCardIndex, setLeftCardIndex] = useState(0);
  const [rightCardIndex, setRightCardIndex] = useState(0);

  // Left card content - 3 analytics insights
  const leftCards = [
    {
      icon: Brain,
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      title: 'AI Predictions',
      description: '95% accuracy rate',
      content: (
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-600">Payment Delay Risk</span>
            <span className="font-bold text-red-600">High</span>
          </div>
          <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "78%" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-red-400 to-orange-500 rounded-full"
            />
          </div>
          <div className="flex items-center gap-2 mt-2">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-red-500"
            />
            <span className="text-[10px] text-gray-600">3 customers at risk</span>
          </div>
        </div>
      )
    },
    {
      icon: Target,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      title: 'DSO Tracking',
      description: 'Current: 32 days',
      content: (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600">Target DSO</span>
            <span className="text-xs font-bold text-blue-600">30 days</span>
          </div>
          <div className="flex items-end gap-1 h-12">
            {[45, 42, 38, 35, 32].map((value, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${(value / 45) * 100}%` }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`w-full rounded-t ${i === 4 ? 'bg-blue-500' : 'bg-blue-200'}`}
                />
              </div>
            ))}
          </div>
          <p className="text-[10px] text-emerald-600 font-semibold">↓ 29% improvement</p>
        </div>
      )
    },
    {
      icon: AlertTriangle,
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
      title: 'Risk Alerts',
      description: 'Active warnings',
      content: (
        <div className="space-y-2">
          {[
            { label: 'Overdue 60+ days', count: 5, color: 'bg-red-500' },
            { label: 'Payment delayed', count: 12, color: 'bg-orange-500' },
            { label: 'High risk', count: 8, color: 'bg-yellow-500' },
          ].map((alert, i) => (
            <motion.div
              key={alert.label}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.2, duration: 0.4 }}
              className="flex items-center justify-between text-xs"
            >
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  className={`w-2 h-2 rounded-full ${alert.color}`}
                />
                <span className="text-gray-700">{alert.label}</span>
              </div>
              <span className="font-bold text-gray-900">{alert.count}</span>
            </motion.div>
          ))}
        </div>
      )
    }
  ];

  // Right card content - 3 analytics insights
  const rightCards = [
    {
      icon: TrendingUp,
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
      title: 'Cash Flow Forecast',
      description: 'Next 30 days',
      content: (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600">Expected Inflow</span>
            <span className="text-sm font-bold text-emerald-600">₹2.4Cr</span>
          </div>
          <svg className="w-full h-16" viewBox="0 0 100 40" preserveAspectRatio="none">
            <defs>
              <linearGradient id="cashFlowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              d="M 0,30 L 20,25 L 40,28 L 60,20 L 80,15 L 100,10"
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <motion.path
              d="M 0,30 L 20,25 L 40,28 L 60,20 L 80,15 L 100,10 L 100,40 L 0,40 Z"
              fill="url(#cashFlowGradient)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </svg>
          <p className="text-[10px] text-gray-600">Confidence: 94%</p>
        </div>
      )
    },
    {
      icon: Users,
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
      title: 'Customer Segments',
      description: 'Payment behavior',
      content: (
        <div className="space-y-2">
          {[
            { label: 'Excellent', value: 35, color: 'bg-emerald-500' },
            { label: 'Good', value: 28, color: 'bg-blue-500' },
            { label: 'Average', value: 22, color: 'bg-yellow-500' },
            { label: 'At Risk', value: 15, color: 'bg-red-500' },
          ].map((segment, i) => (
            <div key={segment.label} className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-700 font-medium">{segment.label}</span>
                <span className="font-bold text-gray-900">{segment.value}%</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${segment.value}%` }}
                  transition={{ duration: 0.8, delay: i * 0.15 }}
                  className={`h-full ${segment.color} rounded-full`}
                />
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      icon: Activity,
      iconBg: 'bg-teal-100',
      iconColor: 'text-teal-600',
      title: 'Live Activity',
      description: 'Real-time updates',
      content: (
        <div className="space-y-2">
          {[
            { action: 'Payment received', amount: '₹45,000', time: '2m ago' },
            { action: 'Invoice sent', amount: '₹1.2L', time: '5m ago' },
            { action: 'Reminder sent', amount: '₹80,000', time: '12m ago' },
          ].map((activity, i) => (
            <motion.div
              key={i}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.2, duration: 0.4 }}
              className="flex items-center justify-between text-xs border-l-2 border-teal-500 pl-2 py-1"
            >
              <div>
                <p className="font-semibold text-gray-900">{activity.action}</p>
                <p className="text-gray-500 text-[10px]">{activity.time}</p>
              </div>
              <span className="font-bold text-teal-600">{activity.amount}</span>
            </motion.div>
          ))}
        </div>
      )
    }
  ];

  // Auto-cycle through cards
  useEffect(() => {
    const leftInterval = setInterval(() => {
      setLeftCardIndex((prev) => (prev + 1) % 3);
    }, 4000);

    const rightInterval = setInterval(() => {
      setRightCardIndex((prev) => (prev + 1) % 3);
    }, 4500);

    return () => {
      clearInterval(leftInterval);
      clearInterval(rightInterval);
    };
  }, []);

  const currentLeftCard = leftCards[leftCardIndex];
  const currentRightCard = rightCards[rightCardIndex];

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

        {/* Feature Image with Animated Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative flex justify-center mt-16"
        >
          <div className="relative w-full max-w-[900px]">
            {/* Background Image */}
            <Image
              src="/payable-receivable/8.jpeg"
              alt="Collection Analytics Insights"
              width={900}
              height={350}
              className="rounded-3xl shadow-2xl w-full"
            />

            {/* Left Card - Analytics Insights */}
            <motion.div
              initial={{ x: 100, y: 50, opacity: 0, scale: 0.5, rotateY: -45 }}
              whileInView={{ x: 0, y: 0, opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
              className="absolute left-[2%] lg:left-[4%] top-[20%] w-64 hidden lg:block"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1200px"
              }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  z: 50,
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-2xl shadow-2xl border-2 border-purple-100 p-5 relative min-h-[200px]"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur-lg opacity-30" style={{ zIndex: -1 }} />
                
                {/* Animated Card Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={leftCardIndex}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl ${currentLeftCard.iconBg} flex items-center justify-center flex-shrink-0`}>
                        <currentLeftCard.icon className={`w-6 h-6 ${currentLeftCard.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-base font-bold text-gray-900 mb-1">{currentLeftCard.title}</p>
                        <p className="text-xs text-gray-600">{currentLeftCard.description}</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      {currentLeftCard.content}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Progress Indicators */}
                <div className="flex gap-1.5 justify-center mt-4">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{
                        scale: leftCardIndex === i ? 1.2 : 1,
                        backgroundColor: leftCardIndex === i ? '#a855f7' : '#d1d5db'
                      }}
                      transition={{ duration: 0.3 }}
                      className="w-2 h-2 rounded-full"
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Card - Analytics Insights */}
            <motion.div
              initial={{ x: -100, y: 50, opacity: 0, scale: 0.5, rotateY: 45 }}
              whileInView={{ x: 0, y: 0, opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7, type: "spring", stiffness: 100 }}
              className="absolute right-[2%] lg:right-[4%] top-[20%] w-72 hidden lg:block"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1200px"
              }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  rotateY: -5,
                  z: 50,
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-2xl shadow-2xl border-2 border-emerald-100 p-5 relative min-h-[200px]"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl blur-lg opacity-30" style={{ zIndex: -1 }} />
                
                {/* Animated Card Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={rightCardIndex}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl ${currentRightCard.iconBg} flex items-center justify-center flex-shrink-0`}>
                        <currentRightCard.icon className={`w-6 h-6 ${currentRightCard.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-base font-bold text-gray-900 mb-1">{currentRightCard.title}</p>
                        <p className="text-xs text-gray-600">{currentRightCard.description}</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      {currentRightCard.content}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Progress Indicators */}
                <div className="flex gap-1.5 justify-center mt-4">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{
                        scale: rightCardIndex === i ? 1.2 : 1,
                        backgroundColor: rightCardIndex === i ? '#10b981' : '#d1d5db'
                      }}
                      transition={{ duration: 0.3 }}
                      className="w-2 h-2 rounded-full"
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
