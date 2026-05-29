"use client"

import Container from "@/components/ui/Container"
import MainCTA from "@/components/ui/mainCTA"
import CardFAQ from "@/components/sections/CardFAQ"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

import {
  FileText,
  Zap,
  Shield,
  Clock,
  CheckCircle,
  TrendingUp
} from "lucide-react"

// Animated Invoice Preview Component
function InvoiceAnimation() {
  const [status, setStatus] = useState<'draft' | 'sent' | 'paid'>('draft')

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(prev => {
        if (prev === 'draft') return 'sent'
        if (prev === 'sent') return 'paid'
        return 'draft'
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.3 }}
      className="relative"
    >
      <div className="relative bg-white rounded-2xl shadow-2xl p-8 border-2 border-emerald-500/20">
        {/* Invoice Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="text-2xl font-bold text-gray-900">INVOICE</div>
            <div className="text-sm text-gray-500 mt-1">#INV-2024-001</div>
          </div>
          <motion.div
            key={status}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              status === 'draft' ? 'bg-gray-100 text-gray-700' :
              status === 'sent' ? 'bg-blue-100 text-blue-700' :
              'bg-emerald-100 text-emerald-700'
            }`}
          >
            {status === 'draft' && '📝 Draft'}
            {status === 'sent' && '📤 Sent'}
            {status === 'paid' && '✓ Paid'}
          </motion.div>
        </div>

        {/* Invoice Details */}
        <div className="space-y-4 mb-6">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Date:</span>
            <span className="text-gray-900 font-medium">26 May 2026</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Due Date:</span>
            <span className="text-gray-900 font-medium">10 Jun 2026</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Customer:</span>
            <span className="text-gray-900 font-medium">Acme Corp</span>
          </div>
        </div>

        {/* Items */}
        <div className="border-t border-b border-gray-200 py-4 mb-4">
          <div className="space-y-3">
            {[
              { name: 'Professional Services', amount: '₹50,000' },
              { name: 'GST (18%)', amount: '₹9,000' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                className="flex justify-between text-sm"
              >
                <span className="text-gray-700">{item.name}</span>
                <span className="text-gray-900 font-medium">{item.amount}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Total */}
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-gray-900">Total Amount</span>
          <span className="text-2xl font-bold text-emerald-600">₹59,000</span>
        </div>

        {/* Status Indicator */}
        <motion.div
          animate={{ scale: status === 'paid' ? [1, 1.1, 1] : 1 }}
          transition={{ duration: 0.5 }}
          className="mt-6 text-center"
        >
          {status === 'paid' && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center gap-2 text-emerald-600"
            >
              <CheckCircle size={20} />
              <span className="font-semibold">Payment Received!</span>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-4 -right-4 w-16 h-16 bg-emerald-500/20 rounded-2xl backdrop-blur-sm border border-emerald-500/30 flex items-center justify-center"
      >
        <FileText className="w-8 h-8 text-emerald-400" />
      </motion.div>
    </motion.div>
  )
}

// GST Compliance Animation
function GSTComplianceAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl shadow-xl p-8 border-2 border-emerald-200">
        <div className="flex items-center justify-between mb-6">
          <div className="text-lg font-bold text-gray-900">GST Invoice</div>
          <div className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold">
            Compliant ✓
          </div>
        </div>

        <div className="space-y-4">
          {[
            { label: 'GSTIN', value: '29ABCDE1234F1Z5', icon: Shield },
            { label: 'HSN Code', value: '998314', icon: FileText },
            { label: 'Tax Rate', value: '18% GST', icon: TrendingUp },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-4 p-4 bg-white rounded-lg border border-emerald-100"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="flex-1">
                <div className="text-xs text-gray-500">{item.label}</div>
                <div className="text-sm font-semibold text-gray-900">{item.value}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-6 p-4 bg-emerald-500 text-white rounded-lg text-center font-semibold"
        >
          Auto-synced with GST Portal
        </motion.div>
      </div>
    </motion.div>
  )
}

// Payment Tracking Animation
function PaymentTrackingAnimation() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + 25))
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="order-2 md:order-1"
    >
      <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200">
        <div className="text-lg font-bold text-gray-900 mb-6">Payment Status</div>

        <div className="space-y-4">
          {[
            { label: 'Invoice Sent', status: progress >= 25 },
            { label: 'Viewed by Customer', status: progress >= 50 },
            { label: 'Payment Initiated', status: progress >= 75 },
            { label: 'Payment Received', status: progress >= 100 },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="flex items-center gap-4"
            >
              <motion.div
                animate={{
                  scale: item.status ? 1 : 0.8,
                  backgroundColor: item.status ? '#10b981' : '#e5e7eb'
                }}
                className="w-8 h-8 rounded-full flex items-center justify-center"
              >
                {item.status && <CheckCircle className="w-5 h-5 text-white" />}
              </motion.div>
              <div className={`flex-1 ${item.status ? 'text-gray-900' : 'text-gray-400'}`}>
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
          <div className="text-sm text-emerald-700 font-medium mb-2">
            Expected Payment: 10 Jun 2026
          </div>
          <div className="w-full bg-emerald-200 rounded-full h-2">
            <motion.div
              animate={{ width: `${progress}%` }}
              className="bg-emerald-600 h-2 rounded-full"
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Template Animation
function TemplateAnimation() {
  const [activeTemplate, setActiveTemplate] = useState(0)
  const templates = ['Modern', 'Classic', 'Minimal']

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTemplate(prev => (prev + 1) % templates.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <div className="text-lg font-bold text-gray-900">Invoice Templates</div>
          <div className="flex gap-2">
            {templates.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full ${
                  idx === activeTemplate ? 'bg-emerald-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div
          key={activeTemplate}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="aspect-[3/4] bg-gradient-to-br from-gray-50 to-white rounded-lg border-2 border-gray-200 p-6"
        >
          <div className="h-full flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-emerald-500" />
              <div>
                <div className="text-sm font-bold text-gray-900">{templates[activeTemplate]}</div>
                <div className="text-xs text-gray-500">Template</div>
              </div>
            </div>

            <div className="flex-1 space-y-2">
              {[...Array(5)].map((_, idx) => (
                <div key={idx} className="h-2 bg-gray-200 rounded" style={{ width: `${100 - idx * 10}%` }} />
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="text-right text-xl font-bold text-emerald-600">₹59,000</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function EInvoicingPage() {

  const faqs = [
    {
      question: "What is e-invoicing and why is it important?",
      answer:
        "E-invoicing is the digital exchange of invoice documents between suppliers and buyers. It's mandatory for GST compliance in India and helps reduce errors, speed up payments, and maintain accurate records."
    },
    {
      question: "Is e-invoicing mandatory for my business?",
      answer:
        "E-invoicing is mandatory for businesses with turnover above ₹5 crores. However, all businesses can benefit from digital invoicing for better efficiency and compliance."
    },
    {
      question: "How does RupeeFlow ensure GST compliance?",
      answer:
        "Our platform automatically generates GST-compliant invoices with proper tax calculations, HSN codes, and formats that meet all government requirements. Invoices are directly uploaded to the GST portal."
    },
    {
      question: "Can I customize invoice templates?",
      answer:
        "Yes. You can customize invoice templates with your company logo, colors, and branding while maintaining GST compliance requirements."
    },
    {
      question: "How quickly can I generate invoices?",
      answer:
        "Generate professional GST-compliant invoices in seconds. Our automated system pulls customer and product data, calculates taxes, and creates ready-to-send invoices instantly."
    },
  ]

  return (
    <>
      {/* HERO */}
      <section className="bg-[#020506] text-white">
        <Container className="py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block mb-6 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30"
              >
                <span className="text-emerald-400 text-sm font-semibold">
                  GST-Compliant • Automated • Secure
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Smart{" "}
                <span className="bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
                  E-Invoicing
                </span>
              </h1>

              <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                Create, send, and track professional GST-compliant invoices in seconds. Automate follow-ups and get paid faster with intelligent invoicing workflows.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  { icon: FileText, text: "GST-compliant invoice generation" },
                  { icon: Zap, text: "Automated payment reminders" },
                  { icon: Shield, text: "Secure digital signatures" },
                  { icon: Clock, text: "Real-time payment tracking" },
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-9 h-9 rounded-lg bg-emerald-500/15 flex items-center justify-center">
                        <Icon size={18} className="text-emerald-400" />
                      </div>
                      <span className="text-gray-300">{item.text}</span>
                    </motion.li>
                  )
                })}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-10"
              >
                <MainCTA label="Start Invoicing Now" destination="/contact" />
              </motion.div>
            </motion.div>

            {/* ANIMATED INVOICE PREVIEW */}
            <InvoiceAnimation />

          </div>
        </Container>
      </section>

      {/* E-INVOICING FEATURES */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-6xl mx-auto px-6">

    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl font-semibold text-center mb-4"
    >
      <span className="text-gray-900">Smart Invoicing for</span> <span className="text-emerald-600">All Business Types</span>
    </motion.h2>

    <div className="mt-20 space-y-24">

      {/* 1 - GST Compliance */}
      <div className="grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900">GST-Compliant Invoice Generation</h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Automatically generate GST-compliant invoices with proper tax calculations, HSN codes, and formats. Direct integration with GST portal for seamless compliance.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              'Automatic GST calculations',
              'HSN/SAC code integration',
              'E-way bill generation',
              'GSTR-1 ready format'
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <GSTComplianceAnimation />
      </div>

      {/* 2 - Automated Reminders */}
      <div className="grid md:grid-cols-2 gap-14 items-center">
        <PaymentTrackingAnimation />

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900">Automated Payment Tracking</h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Track invoice status in real-time and send automated payment reminders. Get notified instantly when customers view or pay invoices.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              'Real-time payment status',
              'Automated reminder workflows',
              'Payment link integration',
              'Customer payment history'
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* 3 - Multi-Currency */}
      <div className="grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900">Professional Templates & Branding</h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Create professional invoices with customizable templates. Add your company logo, colors, and branding while maintaining GST compliance.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              'Custom invoice templates',
              'Company branding',
              'Multiple language support',
              'PDF & email delivery'
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <TemplateAnimation />
      </div>

    </div>
  </div>
        </Container>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-24 bg-gray-50">
        <Container>
         <div className="max-w-6xl mx-auto px-6 text-center">

    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-semibold text-gray-900"
    >
      Why Choose RupeeFlow E-Invoicing
    </motion.h2>

    <div className="mt-14 grid md:grid-cols-3 gap-8">

      {[
        {
          icon: Zap,
          title: "Lightning Fast",
          desc: "Generate GST-compliant invoices in seconds with automated calculations and formatting.",
        },
        {
          icon: Shield,
          title: "100% Compliant",
          desc: "Stay compliant with GST regulations and automatic updates to tax rules.",
        },
        {
          icon: Clock,
          title: "Save Time",
          desc: "Automate invoice generation, reminders, and payment tracking to save hours every week.",
        },
        {
          icon: TrendingUp,
          title: "Get Paid Faster",
          desc: "Automated reminders and payment links help you collect payments 40% faster.",
        },
        {
          icon: FileText,
          title: "Professional Templates",
          desc: "Choose from beautiful, customizable templates that reflect your brand.",
        },
        {
          icon: CheckCircle,
          title: "Real-Time Tracking",
          desc: "Know exactly when invoices are sent, viewed, and paid with instant notifications.",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="group bg-white border border-gray-200 p-7 rounded-xl text-left transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400/40 hover:shadow-xl"
        >
          <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4 group-hover:bg-emerald-500 transition-colors">
            <item.icon className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition">
            {item.title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {item.desc}
          </p>
        </motion.div>
      ))}

    </div>
  </div>
        </Container>
      </section>


{/* ===== ADVANCED COLLECTION REMINDERS ===== */}
<section className="py-24 bg-gray-100">
  <div className="max-w-6xl mx-auto px-6">

    {/* TITLE */}
    <h2 className="text-4xl md:text-5xl font-semibold text-center text-gray-900">
      Automated Reminders for Collection
    </h2>

    <p className="text-center text-gray-500 mt-4 max-w-2xl mx-auto">
      Accelerate collections, strengthen customer engagement, and gain real-time visibility
      into payment behavior with intelligent reminder automation.
    </p>

    <div className="mt-20 space-y-24">

      {/* ROW 1 */}
      <div className="grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h3 className="text-3xl font-bold text-black">Automation</h3>
          <p className="mt-4 text-gray-800 leading-relaxed">
            Automate reminder workflows and eliminate manual follow-ups while ensuring
            timely notifications that improve collection efficiency and cash flow.
          </p>

          <button className="mt-6 border border-emerald-500 text-emerald-500 px-6 py-2 rounded-lg text-sm font-bold hover:bg-emerald-500/10 transition">
            Get Started →
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 aspect-video flex items-center justify-center">
          <span className="text-gray-400 text-sm">Preview</span>
        </div>
      </div>

      {/* ROW 2 */}
      <div className="grid md:grid-cols-2 gap-14 items-center">
        <div className="order-2 md:order-1 bg-white rounded-2xl shadow-lg border border-gray-200 aspect-video flex items-center justify-center">
          <span className="text-gray-400 text-sm">Preview</span>
        </div>

        <div className="order-1 md:order-2">
          <h3 className="text-2xl font-bold text-black">Payment Links</h3>
          <p className="mt-4 text-gray-800 leading-relaxed">
            Embed secure, bank-grade payment links directly within reminders to enable
            instant customer payments and faster settlements.
          </p>

          <button className="mt-6 border border-emerald-500 text-emerald-500 px-6 py-2 rounded-lg text-sm font-bold hover:bg-emerald-500/10 transition">
            Learn More →
          </button>
        </div>
      </div>

      {/* ROW 3 */}
      <div className="grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h3 className="text-2xl font-bold text-black">DSO Reduction</h3>
          <p className="mt-4 text-gray-800 leading-relaxed">
            Reduce Days Sales Outstanding through proactive reminders and frictionless
            payment experiences that encourage faster settlements.
          </p>

          <button className="mt-6 border border-emerald-500 text-emerald-500 px-6 py-2 rounded-lg text-sm font-bold hover:bg-emerald-500/10 transition">
            Get Started →
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 aspect-video flex items-center justify-center">
          <span className="text-gray-400 text-sm">Preview</span>
        </div>
      </div>

      {/* ROW 4 */}
      <div className="grid md:grid-cols-2 gap-14 items-center">
        <div className="order-2 md:order-1 bg-white rounded-2xl shadow-lg border border-gray-200 aspect-video flex items-center justify-center">
          <span className="text-gray-500 text-sm">Preview</span>
        </div>

        <div className="order-1 md:order-2">
          <h3 className="text-2xl font-bold text-black">Customer Relationship Insights</h3>
          <p className="mt-4 text-gray-800 leading-relaxed">
            Understand customer payment behavior to strengthen relationships while
            maintaining professional, compliant communication.
          </p>

          <button className="mt-6 border border-emerald-500 text-emerald-500 px-6 py-2 rounded-lg text-sm font-bold hover:bg-emerald-500/10 transition">
            Learn More →
          </button>
        </div>
      </div>

      {/* ROW 5 */}
      <div className="grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h3 className="text-2xl font-bold text-black">Real-time Insights</h3>
          <p className="mt-4 text-gray-800 leading-relaxed">
            Monitor payment responses, delivery status, and collection performance
            from a centralized, audit-ready dashboard.
          </p>

          <button className="mt-6 border border-emerald-500 text-emerald-500 px-6 py-2 rounded-lg text-sm font-bold hover:bg-emerald-500/10 transition">
            Get Started →
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 aspect-video flex items-center justify-center">
          <span className="text-gray-400 text-sm">Preview</span>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* FAQ */}
      <section className="bg-gray-300 py-24">
        <Container>
          <CardFAQ faqs={faqs} />
        </Container>
      </section>

    </>
  )
}