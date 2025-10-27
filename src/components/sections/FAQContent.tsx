'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  id: string
  question: string
  answer: string[]
  category: string
}

interface Category {
  id: string
  name: string
  icon: string
}

const categories: Category[] = [
  { id: 'general', name: 'General Questions', icon: '🏢' },
  { id: 'account', name: 'Account & Registration', icon: '👤' },
  { id: 'cross-border', name: 'Cross-Border UPI', icon: '🌍' },
  { id: 'offline-upi', name: 'Offline UPI', icon: '📡' },
  { id: 'eco-pay', name: 'Green Payment (Eco-Pay)', icon: '🌱' },
  { id: 'smart-wallet', name: 'Smart Wallet', icon: '💼' },
  { id: 'security', name: 'Security & Privacy', icon: '🔒' },
  { id: 'fees', name: 'Fees & Charges', icon: '💰' },
  { id: 'refunds', name: 'Refunds & Cancellations', icon: '🔄' },
  { id: 'support', name: 'Technical Support', icon: '🛠' },
]

const faqData: FAQItem[] = [
  // General Questions
  {
    id: 'q1',
    category: 'general',
    question: 'What is Rupeeflow Finance?',
    answer: [
      'Rupeeflow Finance Private Limited is an innovative Indian fintech company that provides cutting-edge payment solutions designed for the modern economy. We offer four main products:',
      '',
      '• Cross-Border UPI Gateway - Receive international payments directly in your UPI account',
      '• Offline-First UPI for Bharat - Make UPI payments without internet connectivity',
      '• Green Payment Gateway (Eco-Pay) - Eco-friendly payments with carbon tracking and tree planting rewards',
      '• Smart Wallet for Gig Workers - Digital wallet with auto-generated billing and PFRC support',
    ],
  },
  {
    id: 'q2',
    category: 'general',
    question: 'Is Rupeeflow regulated and safe?',
    answer: [
      'Yes! We operate under strict regulatory compliance:',
      '• Registered with the Reserve Bank of India (RBI)',
      '• Compliant with NPCI (National Payments Corporation of India) guidelines',
      '• Follow PMLA (Prevention of Money Laundering Act) regulations',
      '• Certified under ISO 27001 for information security',
      '• PCI-DSS Level 1 compliant for payment processing',
      '• Regular audits by CERT-In approved agencies',
      '',
      'Your funds and data are protected by bank-grade security measures including 256-bit SSL encryption, multi-factor authentication, and 24/7 fraud monitoring.',
    ],
  },
  {
    id: 'q3',
    category: 'general',
    question: 'Who can use Rupeeflow services?',
    answer: [
      'Our services are available to:',
      '• Freelancers & Consultants - Receive international payments easily',
      '• Micro-Exporters & Small Businesses - Expand globally with cross-border payments',
      '• Rural Merchants & Shopkeepers - Accept UPI payments without internet',
      '• Gig Workers & Independent Contractors - Manage earnings and invoices',
      '• D2C Brands & E-commerce - Offer sustainable payment options',
      '• Individual Users - Anyone 18+ years old with a valid Indian bank account',
    ],
  },
  {
    id: 'q4',
    category: 'general',
    question: 'What are the system requirements?',
    answer: [
      'For Mobile App:',
      '• Android 6.0 or higher / iOS 13 or higher',
      '• Active mobile number with SMS capability',
      '• Internet connection (except for offline UPI payments)',
      '• Minimum 100 MB free storage space',
      '',
      'For Web Platform:',
      '• Modern browser (Chrome, Firefox, Safari, Edge - latest 2 versions)',
      '• Stable internet connection',
      '• JavaScript enabled',
      '',
      'For Offline UPI:',
      '• NFC-enabled smartphone OR',
      '• Basic phone with SMS capability OR',
      '• Bluetooth-enabled device',
    ],
  },
  {
    id: 'q5',
    category: 'general',
    question: 'How do I contact customer support?',
    answer: [
      '📧 Email Support:',
      '• General: support@rupeeflow.in',
      '• Technical: tech@rupeeflow.in',
      '• Refunds: refunds@rupeeflow.in',
      '• Fraud Reports: fraud@rupeeflow.in',
      '',
      '📞 Phone Support:',
      '• Toll-Free: 1800-XXX-XXXX (24/7)',
      '• International: +91-XXX-XXX-XXXX',
      '',
      '💬 Live Chat:',
      '• Available in-app and on website (9 AM - 9 PM IST)',
      '',
      'Average Response Times:',
      '• Live Chat: < 2 minutes',
      '• Email: < 24 hours',
      '• Phone: Immediate',
    ],
  },

  // Account & Registration
  {
    id: 'q6',
    category: 'account',
    question: 'How do I create a Rupeeflow account?',
    answer: [
      'Getting started is easy! Follow these steps:',
      '',
      'Step 1: Download & Install',
      '• Download the Rupeeflow app from Google Play Store or Apple App Store',
      '• Or visit www.rupeeflow.in for web registration',
      '',
      'Step 2: Basic Registration',
      '• Enter your mobile number',
      '• Verify with OTP',
      '• Create a strong password',
      '• Add your email address',
      '',
      'Step 3: KYC Verification',
      '• Upload PAN card',
      '• Provide Aadhaar number (for eKYC)',
      '• Take a live selfie for verification',
      '• Enter bank account details',
      '• Link your UPI ID',
      '',
      'Step 4: Verification & Approval',
      '• KYC verification typically completes in 5-10 minutes',
      '• You\'ll receive confirmation via SMS and email',
      '• Start using services immediately!',
    ],
  },
  {
    id: 'q7',
    category: 'account',
    question: 'What are the different KYC levels?',
    answer: [
      'We offer three KYC levels based on your needs:',
      '',
      'Level 1: Basic KYC (No Documents)',
      '• Transaction Limit: ₹10,000 per month',
      '• Features: Basic wallet, peer-to-peer transfers',
      '• Verification: Mobile number + email only',
      '',
      'Level 2: Standard KYC (Aadhaar + PAN)',
      '• Transaction Limit: ₹1,00,000 per month',
      '• Features: All products, domestic payments',
      '• Verification: eKYC via Aadhaar',
      '',
      'Level 3: Premium KYC (Full Documentation)',
      '• Transaction Limit: ₹5,00,000 per month (or higher upon request)',
      '• Features: Cross-border payments, merchant services',
      '• Verification: Video KYC + business documents',
    ],
  },
  {
    id: 'q8',
    category: 'account',
    question: 'Is there an account opening fee?',
    answer: [
      'No! Account creation is completely FREE.',
      '',
      'What\'s Free:',
      '• Zero registration fees',
      '• No annual maintenance charges',
      '• Free KYC verification',
      '• Free basic wallet features',
      '• Free customer support',
      '',
      'Optional Premium Features:',
      '• Cross-border payment fees: 1.5-3% per transaction',
      '• Offline UPI hardware device rental: ₹300-500/month',
      '• Premium merchant analytics: ₹999/month',
      '• Bulk payment processing: Custom pricing',
    ],
  },

  // Cross-Border UPI
  {
    id: 'q11',
    category: 'cross-border',
    question: 'How does Cross-Border UPI work?',
    answer: [
      'Our Cross-Border UPI Gateway makes receiving international payments as easy as domestic UPI!',
      '',
      'How It Works:',
      '1. Client abroad initiates payment in USD/EUR/GBP',
      '2. Payment processed through our gateway partners',
      '3. Currency automatically converted at competitive rates',
      '4. Amount credited directly to your UPI-linked bank account',
      '5. You receive payment in INR within 1-3 business days',
      '',
      'Supported Currencies:',
      '🇺🇸 USD, 🇪🇺 EUR, 🇬🇧 GBP, 🇨🇦 CAD, 🇦🇺 AUD, 🇸🇬 SGD',
      '',
      'Key Benefits:',
      '✅ No need for international bank accounts',
      '✅ Competitive forex rates',
      '✅ Transparent fee structure (1.5-3%)',
      '✅ FEMA compliant',
      '✅ Real-time payment tracking',
    ],
  },
  {
    id: 'q12',
    category: 'cross-border',
    question: 'What are the fees for cross-border payments?',
    answer: [
      'Our pricing is transparent and competitive:',
      '',
      'Transaction Fees:',
      '• $0 - $500: 3% + $2 per transaction',
      '• $501 - $2,000: 2.5% per transaction',
      '• $2,001 - $5,000: 2% per transaction',
      '• Above $5,000: 1.5% per transaction',
      '',
      'Currency Conversion:',
      '• Markup: 0.5% above interbank rates',
      '• No hidden charges',
      '• Live rates displayed before confirmation',
      '',
      'Example: If your client sends $1,000:',
      '• Transaction fee: 2.5% = $25',
      '• Net amount: $975',
      '• Converted to INR at rate: ₹82.50',
      '• You receive: ₹80,437.50',
    ],
  },

  // Offline UPI
  {
    id: 'q16',
    category: 'offline-upi',
    question: 'What is Offline-First UPI?',
    answer: [
      'Revolutionary payment solution for areas with poor or no internet connectivity!',
      '',
      'The Problem We Solve:',
      'Rural areas and remote locations often face weak mobile networks, no internet connectivity, and failed UPI transactions.',
      '',
      'Our Solution - Make UPI payments completely offline using:',
      '',
      '1. SMS-Based Payments',
      '• Send payment via simple SMS command',
      '• No internet required',
      '• Works on basic feature phones',
      '',
      '2. NFC (Near Field Communication)',
      '• Tap phone to merchant device',
      '• Instant payment processing',
      '• No data connection needed',
      '',
      '3. Bluetooth Technology',
      '• Pair devices locally',
      '• Transfer payment information',
      '• Works in zero connectivity zones',
      '',
      'Perfect For: Rural merchants, hill stations, underground markets, agricultural payments, door-to-door sales',
    ],
  },
  {
    id: 'q17',
    category: 'offline-upi',
    question: 'Is offline payment safe?',
    answer: [
      'Absolutely! Safety is our top priority with multiple security measures:',
      '',
      '1. Transaction Limits',
      '• SMS Payments: Maximum ₹500 per transaction',
      '• NFC Payments: Maximum ₹2,000 per transaction',
      '• Daily offline limit: ₹5,000',
      '',
      '2. Device Authentication',
      '• Unique encrypted device ID',
      '• Biometric/PIN verification',
      '• Device pairing required',
      '',
      '3. Reconciliation Process',
      '• All offline transactions verified upon sync',
      '• Duplicate transactions automatically rejected',
      '• Real-time fraud detection',
      '',
      '4. Escrow Protection',
      '• Funds held in secure escrow during offline period',
      '• Released only after successful verification',
      '',
      'Zero Liability: If you report unauthorized transactions within 24 hours',
    ],
  },

  // Eco-Pay
  {
    id: 'q21',
    category: 'eco-pay',
    question: 'What is Eco-Pay and how does it work?',
    answer: [
      'Eco-Pay is India\'s first eco-conscious payment gateway that rewards you for sustainable shopping!',
      '',
      'How It Works:',
      '',
      'Step 1: Shop with Eco-Pay',
      '• Make purchases at partner D2C brands',
      '• Use Rupeeflow\'s Green Payment Gateway',
      '• Pay normally via UPI/card/wallet',
      '',
      'Step 2: Earn Eco-Points',
      '• Earn 1 Eco-Point for every ₹500 spent',
      '• Bonus points for verified sustainable brands',
      '• Track your carbon footprint reduction',
      '',
      'Step 3: Redeem for Impact',
      '• Plant Trees: 10 points = 1 tree planted',
      '• Carbon Offset: Support verified projects',
      '• Discounts: Use points at partner brands',
      '• Donations: Contribute to environmental NGOs',
      '',
      'Step 4: Track Your Impact',
      '• View sustainability dashboard',
      '• See total CO2 offset',
      '• Get geotagged photos of trees',
      '• Share impact on social media',
    ],
  },
  {
    id: 'q23',
    category: 'eco-pay',
    question: 'How do I track my tree planting?',
    answer: [
      'Complete transparency! Every tree planted is documented:',
      '',
      'Your Personal Forest Dashboard:',
      '',
      '1. Tree Registry',
      '• Each tree gets a unique ID',
      '• Date and location of planting',
      '• Species planted (native to region)',
      '• Estimated CO2 absorption capacity',
      '',
      '2. Geotagged Photos',
      '• Photo at planting (Month 0)',
      '• Growth updates (Month 6, Year 1, 2, 3)',
      '• GPS coordinates visible',
      '',
      '3. Impact Metrics',
      '• Total trees planted by you',
      '• Total CO2 offset (kg)',
      '• Water conservation impact',
      '',
      'Certificates & Proof:',
      '• Digital tree certificate with your name',
      '• Downloadable PDF report',
      '• Shareable on social media',
      '• QR code to verify authenticity',
      '',
      'Planting Partners: Grow Trees, Sankalp Taru Foundation, Give Me Trees Trust, State Forest Departments',
    ],
  },

  // Smart Wallet
  {
    id: 'q26',
    category: 'smart-wallet',
    question: 'What is the Smart Wallet?',
    answer: [
      'A digital wallet designed specifically for India\'s 15 million+ gig workers!',
      '',
      'Key Features:',
      '',
      '1. Instant Payment Reception',
      '• Receive payments from platforms instantly',
      '• No waiting for weekly/monthly cycles',
      '• Zero transaction fees for receipts below ₹10,000/month',
      '',
      '2. Auto-Generated Invoicing',
      '• Create professional invoices in seconds',
      '• GST calculations automatic',
      '• Customizable templates',
      '• Invoice tracking (paid/unpaid/overdue)',
      '',
      '3. PFRC (Provident Fund) Support',
      '• Auto-calculate PF contributions',
      '• Generate PFRC documentation',
      '• Track lifetime contributions',
      '• Export for tax filing',
      '',
      '4. Billing & Subscription Management',
      '• Track all platform subscriptions',
      '• Payment reminders',
      '• Expense categorization',
      '',
      '5. Financial Wellness Tools',
      '• Earnings dashboard',
      '• Expense tracking',
      '• Savings goals',
      '• Income tax estimation',
    ],
  },
  {
    id: 'q27',
    category: 'smart-wallet',
    question: 'How does automatic invoicing work?',
    answer: [
      'Say goodbye to manual billing forever!',
      '',
      'Invoice Generation Process:',
      '',
      'Step 1: Set Up Your Profile (One-time)',
      '• Business name and logo',
      '• GST number (if applicable)',
      '• Contact details',
      '• Terms & conditions template',
      '',
      'Step 2: Create Invoice (30 seconds!)',
      '• Enter client name and email',
      '• Add work description/items',
      '• Specify quantity and rate',
      '• Tax automatically calculated',
      '• Preview and send!',
      '',
      'Step 3: Track Payment',
      '• Invoice status: Sent → Viewed → Paid',
      '• Automatic payment reminders',
      '• Payment link embedded',
      '• Receipt generation automatic',
      '',
      'Smart Features:',
      '• Auto-fill from previous work',
      '• Multi-currency support (USD, EUR, GBP)',
      '• GST compliance (IGST, CGST, SGST)',
      '• Professional branding',
      '• Accounting integration (Excel, Tally, QuickBooks)',
    ],
  },

  // Security & Privacy
  {
    id: 'q31',
    category: 'security',
    question: 'How is my money protected?',
    answer: [
      'Multiple layers of security protect your funds:',
      '',
      '1. Regulatory Compliance',
      '• RBI authorized payment service',
      '• NPCI certified partner',
      '• PCI-DSS Level 1 compliant',
      '',
      '2. Insurance Coverage',
      '• Transaction insurance up to ₹1 lakh',
      '• Fraud protection guarantee',
      '• Cyber insurance policy',
      '',
      '3. Escrow Accounts',
      '• Your funds held in separate accounts',
      '• Partner banks: HDFC, ICICI, Axis',
      '• DICGC insurance (up to ₹5 lakh)',
      '',
      '4. Two-Factor Authentication (2FA)',
      '• OTP verification for every payment',
      '• Biometric authentication',
      '• Device-based authentication',
      '',
      '5. Real-Time Fraud Detection',
      '• AI-powered anomaly detection',
      '• Suspicious activity alerts',
      '• 24/7 security monitoring',
      '',
      'Zero Liability Policy: If you report unauthorized transactions within 24 hours, you get 100% refund',
    ],
  },
  {
    id: 'q32',
    category: 'security',
    question: 'What should I do if I suspect fraud?',
    answer: [
      'Act immediately! Every second counts:',
      '',
      'Immediate Actions (Within 5 Minutes):',
      '',
      'Step 1: Freeze Your Account',
      '• Open app → Settings → Security → Emergency Freeze',
      '• Or SMS "FREEZE" to 9XXXX-XXXXX',
      '• Account locked instantly',
      '',
      'Step 2: Report to Rupeeflow',
      '• Call fraud helpline: 1800-XXX-XXXX (24/7)',
      '• Email: fraud@rupeeflow.in',
      '• In-app: Help → Report Fraud',
      '',
      'Step 3: Notify Your Bank',
      '• Call bank customer care',
      '• Report compromised UPI/card',
      '• Request transaction reversal',
      '',
      'Within 24 Hours:',
      '• File formal complaint',
      '• Change all credentials',
      '• Monitor your account',
      '',
      'Investigation Timeline:',
      '• Acknowledgment: Immediate',
      '• Investigation: 7-15 days',
      '• Resolution: Within 30 days',
      '',
      'Refund Policy: Genuine fraud cases get 100% refund',
    ],
  },

  // Fees & Charges
  {
    id: 'q36',
    category: 'fees',
    question: 'What are the transaction fees?',
    answer: [
      'Transparent pricing with no hidden charges!',
      '',
      'Personal Transactions:',
      '',
      'UPI Payments (Domestic): FREE',
      'Wallet to Wallet: FREE (Rupeeflow to Rupeeflow)',
      'Bank Transfers:',
      '• IMPS: ₹5 per transaction',
      '• NEFT: FREE',
      '• RTGS: ₹25 per transaction',
      '',
      'Card Payments:',
      '• Debit cards: 0.5% (max ₹100)',
      '• Credit cards: 1.5% + GST',
      '',
      'Cross-Border Payments:',
      '• $0-500: 3% + $2',
      '• $501-2,000: 2.5%',
      '• $2,001-5,000: 2%',
      '• Above $5,000: 1.5%',
      '',
      'Smart Wallet:',
      '• Receive money: FREE (first ₹10,000/month)',
      '• Above ₹10,000: 0.25%',
      '• Withdrawal: FREE (above ₹500)',
      '',
      'Account Maintenance: FREE forever',
    ],
  },
  {
    id: 'q37',
    category: 'fees',
    question: 'Are there any hidden charges?',
    answer: [
      'NO! We believe in 100% transparency.',
      '',
      'Our Promise - What You See Is What You Pay:',
      '• Fee shown before every transaction',
      '• Breakdown of charges available',
      '• GST clearly indicated',
      '• No post-transaction surprises',
      '',
      'We NEVER Charge:',
      '❌ Undisclosed currency conversion markups',
      '❌ Hidden payment gateway charges',
      '❌ Surprise annual fees',
      '❌ Minimum balance penalties',
      '❌ Dormancy charges without warning',
      '❌ Customer support charges',
      '',
      'Third-Party Charges (Out of Our Control):',
      'We inform you about:',
      '• Bank charges (your bank may levy)',
      '• Telecom charges (SMS costs)',
      '• Currency fluctuation',
      '• International recipient fees',
      '',
      'Price Lock Guarantee: Fee displayed = Fee charged (valid for 15 minutes)',
    ],
  },

  // Refunds
  {
    id: 'q39',
    category: 'refunds',
    question: 'How do I request a refund?',
    answer: [
      'Simple 3-step process:',
      '',
      'Step 1: Identify the Transaction',
      '• Open app → Transactions → Select transaction',
      '• Note transaction ID and details',
      '',
      'Step 2: Initiate Refund Request',
      '',
      'Via App (Fastest):',
      '1. Select transaction',
      '2. Tap "Report Issue"',
      '3. Choose reason (wrong recipient, duplicate charge, etc.)',
      '4. Add description and proof',
      '5. Submit request',
      '',
      'Via Email: refunds@rupeeflow.in',
      'Via Phone: 1800-XXX-XXXX',
      'Via Live Chat: In-app support',
      '',
      'Step 3: Track Your Refund',
      '• Status updates: Received → Under Review → Approved → Processed → Completed',
      '• App → Refunds → Refund ID',
      '• Email/SMS notifications',
      '',
      'Refund Timeline:',
      '• Duplicate charge: 4-7 days',
      '• Failed transaction: 5-7 days (automatic)',
      '• Merchant cancellation: 7-10 days',
      '• Fraud investigation: 30-90 days',
    ],
  },
  {
    id: 'q40',
    category: 'refunds',
    question: 'How long does a refund take?',
    answer: [
      'Depends on the reason and payment method:',
      '',
      'Standard Refund Timelines:',
      '',
      'Automatic Refunds (Failed Transactions):',
      '• Total time: 5-8 days maximum',
      '',
      'Manual Refunds (Request-Based):',
      '• Fast Track: 4-10 days',
      '• Standard: 10-18 days',
      '• Complex Cases: 30-120 days',
      '',
      'By Payment Method:',
      '• UPI Refunds: 24-48 hours (fastest)',
      '• Credit/Debit Card: 5-7 business days',
      '• Net Banking: 3-5 business days',
      '• Wallet: Instant upon approval',
      '• International Cards: 10-15 business days',
      '',
      'Why Delays Happen:',
      '• Bank holidays/weekends',
      '• High volume periods',
      '• Incomplete information',
      '• Merchant verification required',
      '• International banking procedures',
      '',
      'Our Commitment: Compensation (₹100 per week) if delayed beyond committed timeline',
    ],
  },

  // Technical Support
  {
    id: 'q41',
    category: 'support',
    question: 'What if the app is not working?',
    answer: [
      'Quick troubleshooting guide:',
      '',
      'Common Issues & Solutions:',
      '',
      '1. App Won\'t Open / Crashes',
      '• Force close and restart',
      '• Clear app cache',
      '• Update to latest version',
      '• Free up storage (need 500 MB)',
      '• Check compatibility (Android 6.0+ / iOS 13+)',
      '',
      '2. Cannot Login',
      '• Verify credentials (case-sensitive)',
      '• Reset password',
      '• Check internet connection',
      '• Request OTP resend',
      '',
      '3. Payment Failing',
      '• Check sufficient balance',
      '• Verify transaction limits',
      '• Stable internet required',
      '• Verify recipient details',
      '',
      '4. Slow Performance',
      '• Close background apps',
      '• Clear cache regularly',
      '• Update app',
      '• Restart phone',
      '',
      'Still Not Working?',
      '📞 Call: 1800-XXX-XXXX',
      '📧 Email: tech@rupeeflow.in',
      '💬 Live Chat: In-app support',
      '',
      'Temporary Solution: Use web version at www.rupeeflow.in',
    ],
  },
  {
    id: 'q44',
    category: 'support',
    question: 'Is there a helpline number?',
    answer: [
      'Yes! Multiple ways to reach us 24/7:',
      '',
      '📞 Main Customer Care:',
      '• Toll-Free: 1800-XXX-XXXX',
      '• Availability: 24/7 (All days)',
      '• Languages: English, Hindi, Tamil, Telugu, Kannada, Bengali',
      '• Wait Time: < 2 minutes average',
      '',
      'Specialized Helplines:',
      '',
      '• Fraud & Security: 1800-XXX-XXXX (Option 2) - 24/7',
      '• Technical Support: +91-XXX-XXX-XXXX - 24/7',
      '• Cross-Border Payments: +91-XXX-XXX-XXXX - 9 AM-9 PM',
      '• Merchant Support: 1800-XXX-XXXX (Option 3) - 9 AM-7 PM',
      '',
      '📧 Email Support:',
      '• General: support@rupeeflow.in (< 24 hours)',
      '• Technical: tech@rupeeflow.in (< 12 hours)',
      '• Refunds: refunds@rupeeflow.in (< 24 hours)',
      '• Fraud: fraud@rupeeflow.in (Immediate)',
      '',
      '💬 Live Chat:',
      '• In-app & website chat (9 AM - 9 PM IST)',
      '• WhatsApp: +91-XXX-XXX-XXXX',
      '',
      '📱 Social Media:',
      '• Twitter: @RupeeflowSupport (< 2 hours)',
      '• Facebook Messenger (< 4 hours)',
    ],
  },
]

interface FAQContentProps {
  searchQuery: string
}

function FAQItemComponent({
  faq,
  isOpen,
  onToggle,
}: {
  faq: FAQItem
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-gray-700/30">
      <button
        onClick={onToggle}
        className="w-full py-5 px-6 flex items-start justify-between text-left hover:bg-white/5 transition-colors group"
      >
        <h3 className="fontbody text-base md:text-lg text-white pr-4 group-hover:text-emerald-400 transition-colors">
          {faq.question}
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-emerald-400 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 space-y-3">
          {faq.answer.map((line, idx) => (
            <p
              key={idx}
              className="fontbody2 text-gray-300 leading-relaxed whitespace-pre-line"
            >
              {line}
            </p>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default function FAQContent({ searchQuery }: FAQContentProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [openQuestions, setOpenQuestions] = useState<string[]>([])

  const toggleQuestion = (questionId: string) => {
    setOpenQuestions((prev) =>
      prev.includes(questionId)
        ? prev.filter((id) => id !== questionId)
        : [...prev, questionId]
    )
  }

  // Filter FAQs based on search query and active category
  const filteredFAQs = faqData.filter((faq) => {
    const matchesSearch =
      searchQuery === '' ||
      faq.question.toLowerCase().includes(searchQuery) ||
      faq.answer.some((line) => line.toLowerCase().includes(searchQuery))

    const matchesCategory =
      activeCategory === 'all' || faq.category === activeCategory

    return matchesSearch && matchesCategory
  })

  // Auto-expand first result when searching
  useEffect(() => {
    if (searchQuery && filteredFAQs.length > 0) {
      setOpenQuestions([filteredFAQs[0].id])
    }
  }, [searchQuery, filteredFAQs])

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-black via-[#0a1413] to-black">
      <div className="max-w-7xl mx-auto">
        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === 'all'
                  ? 'bg-teal-emerald-dark text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              📚 All Questions
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeCategory === category.id
                    ? 'bg-teal-emerald-dark text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Search Results Info */}
        {searchQuery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 text-center"
          >
            <p className="fontbody2 text-gray-400">
              Found {filteredFAQs.length} result{filteredFAQs.length !== 1 ? 's' : ''} for &quot;{searchQuery}&quot;
            </p>
          </motion.div>
        )}

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden"
        >
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq) => (
              <FAQItemComponent
                key={faq.id}
                faq={faq}
                isOpen={openQuestions.includes(faq.id)}
                onToggle={() => toggleQuestion(faq.id)}
              />
            ))
          ) : (
            <div className="py-16 px-6 text-center">
              <p className="fontbody2 text-gray-400 text-lg mb-4">
                No questions found matching your search.
              </p>
              <p className="fontbody2 text-gray-500">
                Try different keywords or browse by category above.
              </p>
            </div>
          )}
        </motion.div>

        {/* Contact Support CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="fontbody2 text-gray-400 mb-4">
            Still have questions? Our support team is here to help 24/7
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:1800XXXXXXX"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-teal-emerald-dark hover:bg-teal-emerald text-white font-semibold transition-all"
            >
              📞 Call Support
            </a>
            <a
              href="mailto:support@rupeeflow.in"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold transition-all border border-white/20"
            >
              📧 Email Us
            </a>
            <a
              href="/support"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold transition-all border border-white/20"
            >
              💬 Live Chat
            </a>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <a
            href="/terms"
            className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all text-center group"
          >
            <h4 className="fontbody text-white mb-2 group-hover:text-emerald-400 transition-colors">
              Terms & Conditions
            </h4>
            <p className="fontbody2 text-gray-400 text-sm">
              Read our terms of service
            </p>
          </a>
          <a
            href="/privacy"
            className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all text-center group"
          >
            <h4 className="fontbody text-white mb-2 group-hover:text-emerald-400 transition-colors">
              Privacy Policy
            </h4>
            <p className="fontbody2 text-gray-400 text-sm">
              How we protect your data
            </p>
          </a>
          <a
            href="/refund"
            className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all text-center group"
          >
            <h4 className="fontbody text-white mb-2 group-hover:text-emerald-400 transition-colors">
              Refund Policy
            </h4>
            <p className="fontbody2 text-gray-400 text-sm">
              Refunds & cancellations
            </p>
          </a>
          <a
            href="/support"
            className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all text-center group"
          >
            <h4 className="fontbody text-white mb-2 group-hover:text-emerald-400 transition-colors">
              Support Center
            </h4>
            <p className="fontbody2 text-gray-400 text-sm">
              Get help & resources
            </p>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
