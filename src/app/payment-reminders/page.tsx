'use client'

import Container from '@/components/ui/Container'
import MainCTA from '@/components/ui/mainCTA'
import CardFAQ from '@/components/sections/CardFAQ'
import { motion } from 'framer-motion'

import {
  BellRing,
  CalendarClock,
  Mail,
  ShieldCheck,
  Eye,
  Link as LinkIcon,
  Layers,
  LineChart,
  Zap,
  BarChart3,
  Activity,
} from 'lucide-react'

export default function PaymentRemindersPage() {
  const faqs = [
    {
      question: 'Can I customize reminder schedules?',
      answer:
        'Yes. Configure reminders before due dates, on due dates, or after overdue thresholds.',
    },
    {
      question: 'Which channels are supported?',
      answer:
        'Reminders can be delivered via SMS, email, and in-app notifications.',
    },
    {
      question: 'Will customers receive multiple reminders?',
      answer: 'You control reminder frequency and escalation timing.',
    },
    {
      question: 'Can I track reminder delivery status?',
      answer: 'Track delivery, opens, clicks, and payment responses.',
    },
    {
      question: 'How do reminders improve cash flow?',
      answer:
        'Automated reminders reduce overdue invoices and accelerate payments.',
    },
  ]

  return (
    <>
      {/* HERO */}
      <section className="bg-white text-white">
        <Container className="py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <div>
              <h1 className="text-6xl font-bold leading-tight">
                Payment{' '}
                <span className="bg-gradient-to-r from-[#00EF64] to-[#53BEC2] bg-clip-text text-transparent">
                  Reminders
                </span>
              </h1>

              <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                Automate reminders for upcoming, due, and overdue invoices.
                Improve payment behavior and maintain healthy cash flow with
                intelligent follow-ups.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  { icon: BellRing, text: 'Automated due-date alerts' },
                  { icon: CalendarClock, text: 'Flexible scheduling rules' },
                  { icon: Mail, text: 'SMS, email & in-app notifications' },
                  {
                    icon: ShieldCheck,
                    text: 'Secure & professional follow-ups',
                  },
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <li key={i} className="flex items-center gap-4">
                      <div className="w-9 h-9 rounded-lg bg-emerald-500/15 flex items-center justify-center">
                        <Icon size={18} className="text-emerald-400" />
                      </div>
                      <span className="text-gray-300">{item.text}</span>
                    </li>
                  )
                })}
              </ul>

              <div className="mt-10">
                <MainCTA label="Start Automating" destination="/contact" />
              </div>
            </div>

            {/* RIGHT DASHBOARD WITH FLOATING LIVE CARD */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-200">
                <p className="text-gray-400 text-sm mb-6">Reminder Timeline</p>

                {[
                  ['Before Due', 'Scheduled'],
                  ['Due Date', 'Alert'],
                  ['Overdue', 'Escalation'],
                ].map(([label, status]) => (
                  <div
                    key={label}
                    className="flex justify-between py-2 text-sm"
                  >
                    <span className="text-gray-600">{label}</span>
                    <span className="text-emerald-600 font-medium">
                      {status}
                    </span>
                  </div>
                ))}
              </div>

              {/* floating live payment card */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -bottom-8 right-8 bg-white shadow-lg rounded-xl p-4 border"
              >
                <p className="text-xs text-gray-400">Reminder Message</p>
                <p className="text-sm font-medium mt-1">Pay ₹12,000</p>
                <button className="mt-2 bg-emerald-500 text-white px-3 py-1 rounded text-xs">
                  Pay Now
                </button>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* COLLECTION REMINDERS */}
      <section className="py-28 bg-gray-50">
        <Container>
          <h2 className="text-4xl font-semibold text-center">
            Collection Reminders for{' '}
            <span className="text-emerald-600">All Business Types</span>
          </h2>

          <div className="mt-20 space-y-24">
            {/* Absolute Visibility */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="flex items-center gap-2 text-xl font-semibold">
                  <Eye className="text-emerald-600" /> Absolute Visibility
                </h3>

                <p className="mt-4 text-gray-600">
                  Understand customer payment patterns and behavior.
                </p>

                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  <li>• Identify late payment trends</li>
                  <li>• Predict payment cycles</li>
                  <li>• Segment reliable customers</li>
                  <li>• Improve cash flow planning</li>
                </ul>
              </div>

              {/* Payment Pattern Card with 3D animation */}
              <motion.div
                initial={{ rotateY: 0, rotateX: 0 }}
                whileHover={{
                  rotateY: 5,
                  rotateX: -5,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                animate={{
                  y: [0, -15, 0],
                  rotateY: [0, 2, 0],
                  transition: {
                    y: { duration: 6, repeat: Infinity },
                    rotateY: { duration: 8, repeat: Infinity },
                  },
                }}
                style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl p-8 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-6">
                  <p className="text-sm text-gray-400">Payment Pattern</p>
                  <Activity className="text-emerald-500" size={20} />
                </div>
                <div className="flex items-end gap-3 h-32 justify-center">
                  {[40, 60, 45, 75, 55, 65, 50].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0, opacity: 0 }}
                      whileInView={{
                        height: `${h}%`,
                        opacity: 1,
                        transition: { delay: i * 0.1, duration: 0.5 },
                      }}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: i % 2 === 0 ? '#10b981' : '#34d399',
                      }}
                      className="bg-gradient-to-t from-emerald-600 to-emerald-400 w-6 rounded-t-lg cursor-pointer"
                    />
                  ))}
                </div>
                <div className="mt-6 flex justify-between text-xs text-gray-500">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </motion.div>
            </div>

            {/* Embedded Payment Links */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Reminder Message Card with 3D animation */}
              <motion.div
                initial={{ rotateY: 0, rotateX: 0 }}
                whileHover={{
                  rotateY: -5,
                  rotateX: 5,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                animate={{
                  y: [0, -12, 0],
                  rotateY: [0, -2, 0],
                  transition: {
                    y: { duration: 6, repeat: Infinity },
                    rotateY: { duration: 7, repeat: Infinity },
                  },
                }}
                style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
                className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl shadow-2xl p-8 border border-emerald-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm text-gray-400">Reminder Message</p>
                  <BellRing className="text-emerald-500" size={20} />
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-lg font-semibold text-gray-800">
                    Pay ₹12,000
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    for Invoice #4582
                  </p>
                  <div className="mt-3 p-2 bg-emerald-50 rounded border border-emerald-200">
                    <p className="text-emerald-600 text-sm font-mono">
                      securepay.in/4582
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-2.5 rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow"
                  >
                    Pay Now
                  </motion.button>
                </div>
              </motion.div>

              <div>
                <h3 className="flex items-center gap-2 text-xl font-semibold">
                  <LinkIcon className="text-emerald-600" />
                  Embedded Payment Links
                </h3>

                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  <li>• One-click payments</li>
                  <li>• Mobile-friendly checkout</li>
                  <li>• Faster settlements</li>
                  <li>• Higher conversion rates</li>
                </ul>
              </div>
            </div>

            {/* Channels */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="flex items-center gap-2 text-xl font-semibold">
                  <Layers className="text-emerald-600" />
                  Total Control & Flexibility
                </h3>

                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  <li>• SMS, email & in-app channels</li>
                  <li>• Custom reminder timing</li>
                  <li>• Escalation workflows</li>
                  <li>• Tone & message personalization</li>
                </ul>
              </div>

              {/* Channels Card with 3D animation */}
              <motion.div
                initial={{ rotateY: 0, rotateX: 0 }}
                whileHover={{
                  rotateY: 5,
                  rotateX: -5,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                animate={{
                  y: [0, -10, 0],
                  rotateY: [0, 3, 0],
                  transition: {
                    y: { duration: 6, repeat: Infinity },
                    rotateY: { duration: 9, repeat: Infinity },
                  },
                }}
                style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
                className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-2xl p-8 border border-blue-100"
              >
                <p className="text-sm text-gray-400 mb-6">
                  Communication Channels
                </p>
                <div className="space-y-4">
                  {[
                    { name: 'SMS', color: 'green', icon: '📱' },
                    { name: 'Email', color: 'blue', icon: '✉️' },
                    { name: 'In-App', color: 'purple', icon: '🔔' },
                  ].map((channel, i) => (
                    <motion.div
                      key={channel.name}
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{
                        x: 0,
                        opacity: 1,
                        transition: { delay: i * 0.2, duration: 0.5 },
                      }}
                      whileHover={{
                        scale: 1.05,
                        x: 10,
                        transition: { duration: 0.2 },
                      }}
                      className={`flex items-center justify-between p-3 rounded-lg bg-${channel.color}-50 border border-${channel.color}-200 cursor-pointer`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{channel.icon}</span>
                        <span
                          className={`font-medium text-${channel.color}-700`}
                        >
                          {channel.name}
                        </span>
                      </div>
                      <div
                        className={`w-2 h-2 rounded-full bg-${channel.color}-500 animate-pulse`}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* SMART PAYMENT INTELLIGENCE */}
      <section className="py-28 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="relative bg-gray-100 rounded-2xl p-10"
            >
              <p className="text-gray-400 text-sm">Intelligence Dashboard</p>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-6 right-8 bg-white border shadow-lg rounded-xl p-4 text-sm"
              >
                <p className="text-gray-400 text-xs">Live Insights</p>
                Late Risk <span className="text-amber-500">Medium</span>
                <br />
                Collection Rate <span className="text-emerald-600">92%</span>
              </motion.div>
            </motion.div>

            <div>
              <h2 className="flex items-center gap-2 text-3xl font-semibold">
                <BarChart3 className="text-emerald-600" />
                Smart Payment Intelligence
              </h2>

              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>• Predict late payments early</li>
                <li>• Track reminder engagement</li>
                <li>• Monitor response timelines</li>
                <li>• Measure collection performance</li>
                <li>• Identify high-risk accounts</li>
              </ul>

              <button className="mt-8 px-6 py-2.5 bg-emerald-500 text-white rounded-lg hover:scale-105 transition">
                View Insights →
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* NEW SECTION: ESCALATION AUTOMATION */}
      <section className="py-28 bg-gray-100">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="flex items-center gap-2 text-3xl font-semibold">
                <Zap className="text-emerald-600" />
                Smart Escalation Automation
              </h2>

              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>• Auto follow-ups for overdue invoices</li>
                <li>• Escalate messaging tone intelligently</li>
                <li>• Notify teams for high-value invoices</li>
                <li>• Prevent revenue leakage</li>
                <li>• Improve payment accountability</li>
              </ul>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <p className="text-sm text-gray-400 mb-4">Escalation Workflow</p>

              {[
                ['Day 1 Reminder', 'Sent'],
                ['Day 3 Follow-up', 'Delivered'],
                ['Day 7 Escalation', 'Scheduled'],
              ].map(([label, status]) => (
                <div key={label} className="flex justify-between py-2 text-sm">
                  <span>{label}</span>
                  <span className="text-emerald-600 font-medium">{status}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-gray-200 py-24">
        <Container>
          <CardFAQ faqs={faqs} />
        </Container>
      </section>
    </>
  )
}
