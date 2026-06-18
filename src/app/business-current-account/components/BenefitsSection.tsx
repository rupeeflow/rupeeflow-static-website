'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const benefits = [
  {
    title: 'Unlimited Transactions',
    description:
      'Make unlimited NEFT, RTGS, UPI, and IMPS transactions without any charges or restrictions.',
    type: 'transactions',
    bullets: [
      'Zero transaction fees on all NEFT and RTGS transfers',
      'Unlimited UPI and IMPS transactions',
      'No daily or monthly transaction limits',
      'Instant fund transfers 24/7',
      'Support for bulk payment processing',
    ],
  },
  {
    title: 'Multi-User Access',
    description:
      'Add multiple users with role-based permissions for better team collaboration and control.',
    type: 'users',
    bullets: [
      'Add unlimited team members to your account',
      'Customizable role-based access controls',
      'Separate permissions for viewing and transactions',
      'Approval workflows for large payments',
      'Activity logs for all user actions',
    ],
  },
  {
    title: 'Real-Time Notifications',
    description:
      'Get instant alerts for all transactions via SMS, email, and push notifications.',
    type: 'notifications',
    bullets: [
      'Instant SMS alerts for every transaction',
      'Email notifications with detailed reports',
      'Push notifications on mobile app',
      'Customizable alert preferences',
      'Low balance and payment reminders',
    ],
  },
  {
    title: 'Automated Reconciliation',
    description:
      'Virtual accounts enable automatic payment matching and reconciliation for your business.',
    type: 'reconciliation',
    bullets: [
      'Create unlimited virtual account numbers',
      'Automatic payment matching and tagging',
      'Real-time reconciliation dashboard',
      'Export reports in multiple formats',
      'Integration with accounting software',
    ],
  },
]

// 3D Animated Transaction Dashboard
function TransactionsDashboard() {
  const [transactions, setTransactions] = useState([
    { id: 1, amount: '₹45,000', type: 'NEFT', status: 'completed', delay: 0 },
    { id: 2, amount: '₹12,500', type: 'RTGS', status: 'completed', delay: 0.5 },
    { id: 3, amount: '₹8,900', type: 'UPI', status: 'processing', delay: 1 },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setTransactions(prev => {
        const newTx = {
          id: Date.now(),
          amount: `₹${(Math.random() * 50000 + 5000).toFixed(0)}`,
          type: ['NEFT', 'RTGS', 'UPI', 'IMPS'][Math.floor(Math.random() * 4)],
          status: 'processing',
          delay: 0,
        }
        return [newTx, ...prev.slice(0, 2)]
      })
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-full flex items-center justify-center p-4 md:p-8">
      <div className="relative w-full max-w-md">
        {/* 3D Card Container */}
        <motion.div
          animate={{ rotateY: [0, 5, 0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformStyle: 'preserve-3d' }}
          className="bg-gradient-to-br from-emerald-950 to-gray-900 rounded-3xl shadow-2xl p-6 border border-emerald-800/50"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-emerald-400/70 text-sm">
                Total Transactions
              </div>
              <div className="text-white text-3xl font-bold">2,847</div>
            </div>
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
              <svg
                className="w-6 h-6 text-emerald-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
          </div>

          {/* Transactions List */}
          <div className="space-y-3">
            {transactions.map((tx, idx) => (
              <motion.div
                key={tx.id}
                initial={{ opacity: 0, x: -20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: tx.delay }}
                className="bg-emerald-900/30 rounded-xl p-4 border border-emerald-800/50 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        tx.status === 'completed'
                          ? 'bg-emerald-500/20'
                          : 'bg-emerald-400/20'
                      }`}
                    >
                      <span
                        className={`text-xs font-bold ${
                          tx.status === 'completed'
                            ? 'text-emerald-400'
                            : 'text-emerald-300'
                        }`}
                      >
                        {tx.type}
                      </span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">
                        {tx.amount}
                      </div>
                      <div className="text-gray-400 text-xs capitalize">
                        {tx.status}
                      </div>
                    </div>
                  </div>
                  {tx.status === 'completed' && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <svg
                        className="w-5 h-5 text-emerald-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </motion.div>
                  )}
                  {tx.status === 'processing' && (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                      className="w-5 h-5 border-2 border-emerald-400 border-t-transparent rounded-full"
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-500/20 rounded-2xl backdrop-blur-sm border border-emerald-500/30 flex items-center justify-center"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'translateZ(50px)',
          }}
        >
          <span className="text-emerald-400 text-2xl font-bold">∞</span>
        </motion.div>
      </div>
    </div>
  )
}

// 3D Multi-User Access Animation
function MultiUserAccess() {
  const users = [
    { name: 'Admin', color: 'emerald', role: 'Full Access', avatar: 'A' },
    { name: 'Manager', color: 'teal', role: 'Approve', avatar: 'M' },
    { name: 'Accountant', color: 'green', role: 'View Only', avatar: 'AC' },
  ]

  return (
    <div className="relative w-full h-full flex items-center justify-center p-4 md:p-8">
      <div className="relative w-full max-w-md">
        {/* Central Hub */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="relative w-32 h-32 mx-auto"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-2xl flex items-center justify-center border-4 border-emerald-400/30">
            <svg
              className="w-16 h-16 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
        </motion.div>

        {/* User Nodes */}
        {users.map((user, idx) => {
          const angle = (idx * 120 - 90) * (Math.PI / 180)
          const radius = 140
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 2 + idx,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                {/* Connection Line */}
                <svg
                  className="absolute top-1/2 left-1/2 -z-10"
                  style={{
                    width: Math.abs(x) + 50,
                    height: Math.abs(y) + 50,
                    transform: `translate(-50%, -50%) rotate(${angle * (180 / Math.PI)}deg)`,
                  }}
                >
                  <motion.line
                    x1="0"
                    y1="50%"
                    x2="100%"
                    y2="50%"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: idx * 0.3 }}
                  />
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
                      <stop
                        offset="100%"
                        stopColor="#10b981"
                        stopOpacity="0.8"
                      />
                    </linearGradient>
                  </defs>
                </svg>

                {/* User Card */}
                <div className="bg-white rounded-2xl shadow-xl p-4 w-32 border-2 border-emerald-100">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg`}
                    style={{
                      backgroundColor:
                        idx === 0
                          ? '#10b981'
                          : idx === 1
                            ? '#14b8a6'
                            : '#22c55e',
                    }}
                  >
                    <span className="text-white font-bold text-sm">
                      {user.avatar}
                    </span>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-900 font-semibold text-sm">
                      {user.name}
                    </div>
                    <div className="text-emerald-600 text-xs font-medium">
                      {user.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

// 3D Real-Time Notifications
function NotificationsAnimation() {
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'success', message: 'Payment received ₹25,000', icon: '✓' },
    { id: 2, type: 'info', message: 'New user added', icon: '👤' },
  ])

  useEffect(() => {
    const messages = [
      { type: 'success', message: 'Payment received ₹15,000', icon: '✓' },
      { type: 'warning', message: 'Low balance alert', icon: '⚠' },
      { type: 'info', message: 'Statement generated', icon: '📄' },
      { type: 'success', message: 'Transfer completed', icon: '✓' },
    ]

    const interval = setInterval(() => {
      const randomMsg = messages[Math.floor(Math.random() * messages.length)]
      setNotifications(prev => [
        { id: Date.now(), ...randomMsg },
        ...prev.slice(0, 2),
      ])
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-full flex items-center justify-center p-4 md:p-8">
      <div className="relative w-full max-w-md space-y-4">
        {/* Phone Frame */}
        <motion.div
          animate={{ rotateY: [0, 10, 0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformStyle: 'preserve-3d' }}
          className="relative mx-auto w-72 h-96 bg-gradient-to-br from-emerald-900 to-gray-900 rounded-[3rem] p-3 shadow-2xl border-8 border-emerald-800"
        >
          {/* Screen */}
          <div className="w-full h-full bg-gradient-to-b from-gray-100 to-gray-200 rounded-[2.5rem] overflow-hidden relative">
            {/* Status Bar */}
            <div className="bg-white px-6 py-3 flex items-center justify-between">
              <span className="text-xs font-semibold">9:41</span>
              <div className="flex gap-1">
                <div className="w-4 h-3 bg-white rounded-sm" />
                <div className="w-4 h-3 bg-white rounded-sm" />
                <div className="w-4 h-3 bg-white rounded-sm" />
              </div>
            </div>

            {/* Notifications */}
            <div className="p-4 space-y-3">
              {notifications.map((notif, idx) => (
                <motion.div
                  key={notif.id}
                  initial={{ opacity: 0, y: -50, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.5, type: 'spring' }}
                  className={`bg-white rounded-2xl p-4 shadow-lg border-l-4 ${
                    notif.type === 'success'
                      ? 'border-emerald-500'
                      : notif.type === 'warning'
                        ? 'border-emerald-400'
                        : 'border-emerald-600'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${
                        notif.type === 'success'
                          ? 'bg-emerald-100'
                          : notif.type === 'warning'
                            ? 'bg-emerald-50'
                            : 'bg-teal-100'
                      }`}
                    >
                      {notif.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 mb-1">
                        RupeeFlow
                      </div>
                      <div className="text-sm font-semibold text-gray-900">
                        {notif.message}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Notification Badge */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg"
          >
            {notifications.length}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

// 3D Reconciliation Animation
function ReconciliationAnimation() {
  const [matched, setMatched] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setMatched(prev => (prev + 1) % 4)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-full flex items-center justify-center p-4 md:p-8">
      <div className="relative w-full max-w-md">
        {/* Two Columns */}
        <div className="grid grid-cols-2 gap-8">
          {/* Left: Invoices */}
          <div className="space-y-3">
            <div className="text-center text-sm font-semibold text-gray-600 mb-4">
              Invoices
            </div>
            {[1, 2, 3].map((item, idx) => (
              <motion.div
                key={`invoice-${item}`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className={`bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-4 shadow-lg ${
                  matched === idx ? 'ring-4 ring-teal-400' : ''
                }`}
              >
                <div className="text-white text-xs mb-1">INV-{1000 + item}</div>
                <div className="text-white font-bold">
                  ₹{(item * 10000).toLocaleString()}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Payments */}
          <div className="space-y-3">
            <div className="text-center text-sm font-semibold text-gray-600 mb-4">
              Payments
            </div>
            {[1, 2, 3].map((item, idx) => (
              <motion.div
                key={`payment-${item}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className={`bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl p-4 shadow-lg ${
                  matched === idx ? 'ring-4 ring-emerald-400' : ''
                }`}
              >
                <div className="text-white text-xs mb-1">PAY-{2000 + item}</div>
                <div className="text-white font-bold">
                  ₹{(item * 10000).toLocaleString()}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Matching Animation */}
        <motion.div
          key={matched}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ top: `${35 + matched * 28}%` }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, ease: 'linear' }}
            className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center shadow-2xl"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-8 text-center bg-white rounded-2xl shadow-lg p-4"
        >
          <div className="text-2xl font-bold text-emerald-600">98.5%</div>
          <div className="text-sm text-gray-600">Auto-matched</div>
        </motion.div>
      </div>
    </div>
  )
}

export default function BenefitsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const renderAnimation = (type: string) => {
    switch (type) {
      case 'transactions':
        return <TransactionsDashboard />
      case 'users':
        return <MultiUserAccess />
      case 'notifications':
        return <NotificationsAnimation />
      case 'reconciliation':
        return <ReconciliationAnimation />
      default:
        return null
    }
  }

  return (
    <section ref={ref} className="relative py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Business Current Account
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Built for efficiency, designed for growth
          </p>
        </motion.div>

        <div className="space-y-16 md:space-y-24">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {benefit.description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-3">
                  {benefit.bullets.map((bullet, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.2 + idx * 0.1,
                      }}
                      className="flex items-start gap-3"
                    >
                      <svg
                        className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 leading-relaxed">
                        {bullet}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div
                className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <div className="relative w-full aspect-square">
                  {renderAnimation(benefit.type)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
