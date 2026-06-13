'use client';
//test

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Calculator as CalcIcon, Zap, FileCheck, Upload, FileSignature, Hash, Shield, Clock, CheckCircle, TrendingUp } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { useState, useEffect } from 'react';

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
  const [phoneCardIndex, setPhoneCardIndex] = useState(0);
  const [laptopCardIndex, setLaptopCardIndex] = useState(0);

  // Phone card content - 3 points
  const phoneCards = [
    {
      icon: FileCheck,
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
      title: 'Auto GST Calculation',
      description: 'Automatic tax computation',
      content: (
        <div className="space-y-1">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8 }}
            className="h-1.5 bg-emerald-200 rounded-full overflow-hidden"
          >
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="h-full w-1/3 bg-emerald-500"
            />
          </motion.div>
          <div className="flex justify-between text-[10px] text-gray-500">
            <span>CGST 9%</span>
            <span>SGST 9%</span>
          </div>
        </div>
      )
    },
    {
      icon: Shield,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      title: 'Real-time Validation',
      description: 'GSTIN verification',
      content: (
        <div className="flex items-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ 
                scale: [1, 1.4, 1],
                backgroundColor: ["#3b82f6", "#10b981", "#3b82f6"]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: i * 0.3 
              }}
              className="w-2 h-2 rounded-full"
            />
          ))}
          <span className="text-xs text-emerald-600 font-semibold ml-1">Verified ✓</span>
        </div>
      )
    },
    {
      icon: Clock,
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      title: 'Instant Reports',
      description: 'GSTR-1, GSTR-3B ready',
      content: (
        <div className="flex items-end gap-0.5 h-8">
          {[40, 60, 45, 70, 55, 80].map((height, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ 
                delay: i * 0.1, 
                duration: 0.4,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 1
              }}
              className="flex-1 bg-purple-400 rounded-t"
            />
          ))}
        </div>
      )
    }
  ];

  // Laptop card content - 3 points
  const laptopCards = [
    {
      icon: Zap,
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
      title: 'E-Invoice Generation',
      description: 'IRP integration with IRN',
      content: (
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-gray-500">INV-2024-001</span>
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-[11px] text-emerald-600 font-bold"
            >
              ✓ Generated
            </motion.span>
          </div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8 }}
            className="h-2 bg-indigo-500 rounded-full"
          />
        </div>
      )
    },
    {
      icon: CheckCircle,
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      title: 'Compliance Tracking',
      description: '100% GST compliant',
      content: (
        <div className="grid grid-cols-3 gap-1.5">
          {['GSTR-1', 'GSTR-3B', 'E-Way'].map((item, i) => (
            <motion.div
              key={item}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: i * 0.15, duration: 0.4, type: "spring" }}
              className="bg-orange-50 rounded-lg px-2 py-1 text-[10px] text-orange-700 font-bold text-center"
            >
              {item}
            </motion.div>
          ))}
        </div>
      )
    },
    {
      icon: TrendingUp,
      iconBg: 'bg-teal-100',
      iconColor: 'text-teal-600',
      title: 'Bulk Processing',
      description: '1000+ invoices/min',
      content: (
        <div>
          <div className="relative h-2.5 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ 
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 0.5
              }}
              className="h-full bg-gradient-to-r from-teal-400 via-emerald-500 to-teal-400 rounded-full"
            />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="text-[11px] text-teal-600 font-bold mt-1.5"
          >
            847 / 1000 processed
          </motion.p>
        </div>
      )
    }
  ];

  // Auto-cycle through cards
  useEffect(() => {
    const phoneInterval = setInterval(() => {
      setPhoneCardIndex((prev) => (prev + 1) % 3);
    }, 4000);

    const laptopInterval = setInterval(() => {
      setLaptopCardIndex((prev) => (prev + 1) % 3);
    }, 4500);

    return () => {
      clearInterval(phoneInterval);
      clearInterval(laptopInterval);
    };
  }, []);

  const currentPhoneCard = phoneCards[phoneCardIndex];
  const currentLaptopCard = laptopCards[laptopCardIndex];

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
                  <Icon className="w-7 h-7 text-[var(--foreground)]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="fontbody2 text-gray-600 leading-relaxed">{benefit.description}</p>
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
          <div className="relative w-full max-w-[1000px]">
            {/* Background Image with Phone and Laptop */}
            <Image
              src="/payable-receivable/2.jpeg"
              alt="GST Compliance Dashboard"
              width={1000}
              height={400}
              className="rounded-3xl shadow-2xl w-full"
            />

            {/* Card Popping from Phone (Left Side) */}
            <motion.div
              initial={{ x: 100, y: 50, opacity: 0, scale: 0.5, rotateY: -45 }}
              whileInView={{ x: 0, y: 0, opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
              className="absolute left-[2%] lg:left-[4%] top-[25%] w-64 hidden lg:block"
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
                className="bg-[var(--card)] rounded-2xl shadow-2xl border-2 border-emerald-100 p-5 relative min-h-[200px]"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl blur-lg opacity-30" style={{ zIndex: -1 }} />
                
                {/* Animated Card Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={phoneCardIndex}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl ${currentPhoneCard.iconBg} flex items-center justify-center flex-shrink-0`}>
                        <currentPhoneCard.icon className={`w-6 h-6 ${currentPhoneCard.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-base font-bold text-gray-900 mb-1">{currentPhoneCard.title}</p>
                        <p className="text-xs text-gray-600">{currentPhoneCard.description}</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      {currentPhoneCard.content}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Progress Indicators */}
                <div className="flex gap-1.5 justify-center mt-4">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{
                        scale: phoneCardIndex === i ? 1.2 : 1,
                        backgroundColor: phoneCardIndex === i ? '#10b981' : '#d1d5db'
                      }}
                      transition={{ duration: 0.3 }}
                      className="w-2 h-2 rounded-full"
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Card Popping from Laptop (Right Side) */}
            <motion.div
              initial={{ x: -100, y: 50, opacity: 0, scale: 0.5, rotateY: 45 }}
              whileInView={{ x: 0, y: 0, opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7, type: "spring", stiffness: 100 }}
              className="absolute right-[5%] lg:right-[8%] top-[15%] w-72 hidden lg:block"
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
                className="bg-[var(--card)] rounded-2xl shadow-2xl border-2 border-teal-100 p-5 relative min-h-[200px]"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-2xl blur-lg opacity-30" style={{ zIndex: -1 }} />
                
                {/* Animated Card Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={laptopCardIndex}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl ${currentLaptopCard.iconBg} flex items-center justify-center flex-shrink-0`}>
                        <currentLaptopCard.icon className={`w-6 h-6 ${currentLaptopCard.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-base font-bold text-gray-900 mb-1">{currentLaptopCard.title}</p>
                        <p className="text-xs text-gray-600">{currentLaptopCard.description}</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      {currentLaptopCard.content}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Progress Indicators */}
                <div className="flex gap-1.5 justify-center mt-4">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{
                        scale: laptopCardIndex === i ? 1.2 : 1,
                        backgroundColor: laptopCardIndex === i ? '#14b8a6' : '#d1d5db'
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
