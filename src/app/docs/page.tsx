'use client'

import Container from '@/components/ui/Container'
import MainCTA from '@/components/ui/mainCTA'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import {
  Code,
  Book,
  Zap,
  Shield,
  Terminal,
  FileCode,
  CheckCircle,
  Copy,
  Play,
} from 'lucide-react'

// Animated Code Editor Component
function CodeEditorAnimation() {
  const [activeTab, setActiveTab] = useState(0)
  const tabs = ['Node.js', 'Python', 'PHP']

  const codeExamples = [
    `const rupeeflow = require('rupeeflow')('sk_test_...');

// Create a payment
const payment = await rupeeflow.payments.create({
  amount: 50000,
  currency: 'INR',
  receipt: 'order_123',
  notes: { customer_id: 'cust_456' }
});

console.log(payment.id);`,
    `import rupeeflow
rupeeflow.api_key = "sk_test_..."

# Create a payment
payment = rupeeflow.Payment.create(
  amount=50000,
  currency="INR",
  receipt="order_123",
  notes={"customer_id": "cust_456"}
)

print(payment['id'])`,
    `<?php
require 'vendor/autoload.php';
$api = new RupeeFlow\\Api('sk_test_...');

// Create a payment
$payment = $api->payment->create([
  'amount' => 50000,
  'currency' => 'INR',
  'receipt' => 'order_123',
  'notes' => ['customer_id' => 'cust_456']
]);

echo $payment->id;
?>`,
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab(prev => (prev + 1) % tabs.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.3 }}
      className="relative"
    >
      <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border-2 border-emerald-500/20">
        {/* Editor Header */}
        <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-700">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex gap-2">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-1 rounded text-sm font-medium transition-colors ${
                  activeTab === idx
                    ? 'bg-emerald-600 text-[var(--foreground)]'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <button className="text-gray-400 hover:text-[var(--foreground)]">
            <Copy size={16} />
          </button>
        </div>

        {/* Code Content */}
        <div className="p-6">
          <motion.pre
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-emerald-400 font-mono leading-relaxed"
          >
            <code>{codeExamples[activeTab]}</code>
          </motion.pre>
        </div>

        {/* Run Button */}
        <div className="bg-gray-800 px-4 py-3 border-t border-gray-700 flex items-center justify-between">
          <div className="flex items-center gap-2 text-emerald-400 text-sm">
            <CheckCircle size={16} />
            <span>Ready to execute</span>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-[var(--foreground)] rounded-lg hover:bg-emerald-700 transition-colors">
            <Play size={16} />
            Run Code
          </button>
        </div>
      </div>

      {/* Floating Element */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-4 -right-4 w-16 h-16 bg-emerald-500/20 rounded-2xl backdrop-blur-sm border border-emerald-500/30 flex items-center justify-center"
      >
        <Terminal className="w-8 h-8 text-emerald-400" />
      </motion.div>
    </motion.div>
  )
}

// API Endpoint Animation
function APIEndpointAnimation() {
  const [activeEndpoint, setActiveEndpoint] = useState(0)

  const endpoints = [
    { method: 'POST', path: '/v1/payments', status: 200 },
    { method: 'GET', path: '/v1/payments/:id', status: 200 },
    { method: 'POST', path: '/v1/payouts', status: 201 },
    { method: 'GET', path: '/v1/balance', status: 200 },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveEndpoint(prev => (prev + 1) % endpoints.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-[var(--card)] rounded-2xl shadow-xl p-8 border-2 border-gray-200"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center">
          <Code className="w-6 h-6 text-emerald-600" />
        </div>
        <div>
          <div className="text-lg font-bold text-gray-900">API Endpoints</div>
          <div className="text-sm text-gray-500">RESTful API</div>
        </div>
      </div>

      <div className="space-y-3">
        {endpoints.map((endpoint, idx) => (
          <motion.div
            key={idx}
            animate={{
              scale: activeEndpoint === idx ? 1.02 : 1,
              backgroundColor: activeEndpoint === idx ? '#f0fdf4' : '#ffffff',
            }}
            className="p-4 rounded-lg border-2 transition-colors"
            style={{
              borderColor: activeEndpoint === idx ? '#10b981' : '#e5e7eb',
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    endpoint.method === 'POST'
                      ? 'bg-blue-100 text-blue-700'
                      : endpoint.method === 'GET'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-purple-100 text-purple-700'
                  }`}
                >
                  {endpoint.method}
                </span>
                <code className="text-sm text-gray-700 font-mono">
                  {endpoint.path}
                </code>
              </div>
              <span className="text-emerald-600 font-semibold text-sm">
                {endpoint.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
        <div className="text-sm text-emerald-700 font-medium">
          ✓ All endpoints support JSON request/response
        </div>
      </div>
    </motion.div>
  )
}

// SDK Animation
function SDKAnimation() {
  const sdks = [
    { name: 'Node.js', color: '#339933', bgColor: '#f0fdf4' },
    { name: 'Python', color: '#3776AB', bgColor: '#eff6ff' },
    { name: 'PHP', color: '#777BB4', bgColor: '#f5f3ff' },
    { name: 'Java', color: '#007396', bgColor: '#eff6ff' },
    { name: 'Ruby', color: '#CC342D', bgColor: '#fef2f2' },
    { name: '.NET', color: '#512BD4', bgColor: '#f5f3ff' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 border-2 border-gray-200"
    >
      <div className="text-center mb-8">
        <div className="text-2xl font-bold text-gray-900 mb-2">
          Official SDKs
        </div>
        <div className="text-gray-600">Available in 6+ languages</div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {sdks.map((sdk, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="p-6 bg-[var(--card)] rounded-xl border-2 border-gray-200 hover:border-emerald-500 transition-all cursor-pointer text-center"
            style={{ backgroundColor: sdk.bgColor }}
          >
            <div
              className="w-16 h-16 mx-auto mb-3 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: 'white' }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-2xl"
                style={{ color: sdk.color }}
              >
                {sdk.name === 'Node.js' && '⬢'}
                {sdk.name === 'Python' && '🐍'}
                {sdk.name === 'PHP' && '🐘'}
                {sdk.name === 'Java' && '☕'}
                {sdk.name === 'Ruby' && '💎'}
                {sdk.name === '.NET' && '⚡'}
              </div>
            </div>
            <div className="font-semibold text-gray-900">{sdk.name}</div>
            <div className="text-xs text-gray-500 mt-1">npm install</div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
          View All SDKs →
        </button>
      </div>
    </motion.div>
  )
}

export default function DocsPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[var(--background)] text-[var(--foreground)]">
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
                className="inline-block mb-6 px-4 py-2 rounded-full bg-[var(--card)]/70 border border-[var(--border)]"
              >
                <span className="text-[var(--primary)] text-sm font-semibold">
                  Developer-First • RESTful APIs • Comprehensive Docs
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                API{' '}
                <span className="bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
                  Documentation
                </span>
              </h1>

              <p className="mt-6 text-[var(--muted)] text-lg leading-relaxed">
                Everything you need to integrate RupeeFlow's payment
                infrastructure. Simple, powerful APIs with comprehensive
                documentation, SDKs, and sandbox environment.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  { icon: Code, text: 'RESTful APIs with JSON' },
                  { icon: Book, text: 'Comprehensive documentation' },
                  { icon: Zap, text: 'Quick integration in minutes' },
                  { icon: Shield, text: 'Secure & ISO 27001 compliant' },
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
                      <div className="w-9 h-9 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center">
                        <Icon size={18} className="text-[var(--primary)]" />
                      </div>
                      <span className="text-[var(--muted)]">{item.text}</span>
                    </motion.li>
                  )
                })}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-10 flex flex-col sm:flex-row gap-4"
              >
                <MainCTA label="Get API Keys" destination="/contact" />
                <button className="px-8 py-4 rounded-full border-2 border-[var(--primary)]/50 text-[var(--surface)] font-semibold hover:opacity-95 transition-all duration-300">
                  View Docs
                </button>
              </motion.div>
            </motion.div>

            {/* ANIMATED CODE EDITOR */}
            <CodeEditorAnimation />
          </div>
        </Container>
      </section>

      {/* API FEATURES */}
      <section className="py-24 bg-[var(--card)]">
        <Container>
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-semibold text-center mb-4"
            >
              <span className="text-gray-900">Powerful APIs for</span>{' '}
              <span className="text-emerald-600">Every Use Case</span>
            </motion.h2>

            <div className="mt-20 space-y-24">
              {/* API Endpoints */}
              <div className="grid md:grid-cols-2 gap-14 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-gray-900">
                    RESTful API Endpoints
                  </h3>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    Simple, intuitive REST APIs that follow industry standards.
                    All endpoints support JSON request/response format with
                    comprehensive error handling.
                  </p>
                  <ul className="mt-6 space-y-3">
                    {[
                      'Payment Gateway APIs',
                      'Payout & Transfer APIs',
                      'Verification APIs',
                      'Webhook notifications',
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <APIEndpointAnimation />
              </div>

              {/* SDKs */}
              <div className="grid md:grid-cols-2 gap-14 items-center">
                <SDKAnimation />

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-gray-900">
                    Official SDKs & Libraries
                  </h3>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    Pre-built SDKs for popular programming languages. Get
                    started in minutes with our well-documented libraries and
                    code examples.
                  </p>
                  <ul className="mt-6 space-y-3">
                    {[
                      'Node.js, Python, PHP, Java',
                      'Mobile SDKs for iOS & Android',
                      'Regular updates & maintenance',
                      'Open source on GitHub',
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FEATURES GRID */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="max-w-6xl mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4"
            >
              Developer-Friendly Features
            </motion.h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-14">
              Everything you need to build and scale your payment integration
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Terminal,
                  title: 'Sandbox Environment',
                  desc: 'Test your integration with our full-featured sandbox before going live.',
                },
                {
                  icon: FileCode,
                  title: 'Code Examples',
                  desc: 'Ready-to-use code snippets in multiple languages to speed up development.',
                },
                {
                  icon: Book,
                  title: 'Interactive Docs',
                  desc: 'Try API calls directly from documentation with live request/response examples.',
                },
                {
                  icon: Zap,
                  title: 'Webhooks',
                  desc: 'Real-time notifications for payment events sent directly to your server.',
                },
                {
                  icon: Shield,
                  title: 'Security First',
                  desc: 'ISO 27001 certified with encryption, tokenization, and fraud detection.',
                },
                {
                  icon: CheckCircle,
                  title: '99.9% Uptime',
                  desc: 'Reliable infrastructure with redundancy and automatic failover.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-[var(--card)] border border-gray-200 p-7 rounded-xl text-left transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400/40 hover:shadow-xl"
                >
                  <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4 group-hover:bg-emerald-500 transition-colors">
                    <item.icon className="w-6 h-6 text-emerald-600 group-hover:text-[var(--foreground)] transition-colors" />
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

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-br from-emerald-600 to-emerald-700">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-6"
            >
              Ready to Start Building?
            </motion.h2>
            <p className="text-xl text-emerald-50 mb-8">
              Get your API keys and start integrating in minutes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 rounded-full bg-[var(--card)] text-emerald-600 font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:scale-105">
                Get Started Free
              </button>
              <button className="px-8 py-4 rounded-full border-2 border-white text-[var(--foreground)] font-semibold hover:bg-[var(--card)] transition-all duration-300">
                View Documentation
              </button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
