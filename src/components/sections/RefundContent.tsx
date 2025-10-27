'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface Section {
  id: string
  title: string
  content: string[]
  subsections?: { title: string; items: string[] }[]
}

const sections: Section[] = [
  {
    id: 'introduction',
    title: '1. INTRODUCTION',
    content: [
      'This Refund and Cancellation Policy ("Policy") outlines the terms and conditions for refunds, cancellations, reversals, and chargebacks related to services provided by Rupeeflow Finance Private Limited ("Rupeeflow", "we", "us", or "our").',
      '',
      'This Policy applies to all payment transactions processed through:',
      '• Cross-Border UPI Gateway',
      '• Offline-First UPI for Bharat',
      '• Green Payment Gateway (Eco-Pay)',
      '• Smart Wallet for Gig Workers',
      '',
      'This Policy complies with Reserve Bank of India (RBI) guidelines, Consumer Protection Act 2019, and Payment and Settlement Systems Act 2007.',
    ],
  },
  {
    id: 'general-principles',
    title: '2. GENERAL PRINCIPLES',
    subsections: [
      {
        title: '2.1 Our Commitment',
        items: [
          'Rupeeflow is committed to fair, transparent, and timely resolution of refund requests in accordance with applicable regulations and our Terms and Conditions.',
        ],
      },
      {
        title: '2.2 Transaction Finality',
        items: [
          'Once a payment transaction is successfully completed and confirmed by both parties (payer and payee), it is generally considered final and irreversible except as outlined in this Policy.',
        ],
      },
      {
        title: '2.3 Service Fees',
        items: [
          'Transaction fees, processing charges, and subscription fees charged by Rupeeflow are generally non-refundable unless specifically stated otherwise or required by law.',
        ],
      },
      {
        title: '2.4 Merchant Responsibility',
        items: [
          'For product or service disputes, customers must first contact the merchant directly. Rupeeflow acts as a payment facilitator and is not responsible for quality, delivery, or fulfillment issues.',
        ],
      },
    ],
    content: [],
  },
  {
    id: 'refund-eligibility',
    title: '3. REFUND ELIGIBILITY CRITERIA',
    content: ['Refunds may be issued in the following circumstances:'],
    subsections: [
      {
        title: '3.1 Failed Transactions',
        items: [
          'When amount is debited but transaction fails:',
          '• Payment gateway timeout or technical error',
          '• Network connectivity issues during transaction processing',
          '• Bank system downtime or maintenance',
          '• Incorrect merchant configuration',
          '',
          'Refund Timeline: 5-7 business days automatically to the source account',
        ],
      },
      {
        title: '3.2 Duplicate Transactions',
        items: [
          'When amount is debited multiple times for a single transaction:',
          '• Duplicate charges due to system errors',
          '• Multiple payment confirmations for same order',
          '',
          'Action Required: Report within 7 days with transaction IDs',
          'Refund Timeline: 7-10 business days after verification',
        ],
      },
      {
        title: '3.3 Unauthorized Transactions',
        items: [
          'When transaction is made without account holder\'s consent:',
          '• Fraudulent use of payment credentials',
          '• Unauthorized access to account',
          '• Transaction after reporting loss/theft of device',
          '',
          'Action Required: Report immediately within 24 hours',
          'Refund Timeline: Subject to investigation; up to 90 days',
        ],
      },
      {
        title: '3.4 Merchant Cancellation',
        items: [
          'When merchant cancels order or fails to deliver:',
          '• Product out of stock or unavailable',
          '• Service cannot be fulfilled',
          '• Business closure or operational issues',
          '',
          'Action Required: Merchant must initiate refund',
          'Refund Timeline: 7-14 business days as per merchant policy',
        ],
      },
      {
        title: '3.5 Technical Errors by Rupeeflow',
        items: [
          'When errors occur due to Rupeeflow\'s systems:',
          '• Incorrect currency conversion rates applied',
          '• Wrong transaction amount processed',
          '• System bugs causing unintended charges',
          '',
          'Refund Timeline: 3-5 business days after error confirmation',
        ],
      },
    ],
  },
  {
    id: 'non-refundable',
    title: '4. NON-REFUNDABLE SCENARIOS',
    content: ['Refunds will NOT be provided in the following cases:'],
    subsections: [
      {
        title: '4.1 Service Fees and Charges',
        items: [
          '• Transaction processing fees (1.5% - 3% based on service)',
          '• Currency conversion charges for cross-border payments',
          '• Monthly subscription fees for premium features',
          '• Hardware device rental charges for offline UPI POS',
          '• Late payment penalties and interest charges',
          '',
          'Exception: Fees may be refunded if Rupeeflow fails to deliver promised services due to technical issues on our end.',
        ],
      },
      {
        title: '4.2 Successful Transactions',
        items: [
          '• Completed transactions where goods/services were delivered',
          '• Payments made to correct merchant as intended',
          '• Transactions properly authorized by account holder',
          '• Intentional peer-to-peer transfers',
        ],
      },
      {
        title: '4.3 Merchant Disputes',
        items: [
          '• Product quality issues or dissatisfaction with purchase',
          '• Delivery delays caused by merchant or logistics',
          '• Size, color, or specification mismatch',
          '• Changed mind or buyer\'s remorse',
          '',
          'Resolution: Contact merchant directly for their refund policy',
        ],
      },
      {
        title: '4.4 User Error',
        items: [
          '• Payments sent to wrong UPI ID/account number',
          '• Incorrect amount entered by user',
          '• Transactions completed to scam/fake merchants',
          '• Failure to verify recipient details before payment',
          '',
          'Note: Rupeeflow cannot reverse user-initiated errors; users must contact recipients directly',
        ],
      },
      {
        title: '4.5 Policy Violations',
        items: [
          '• Refund requests for transactions violating our Terms and Conditions',
          '• Fraudulent refund claims or abuse of refund process',
          '• Chargebacks filed without first contacting Rupeeflow',
        ],
      },
    ],
  },
  {
    id: 'product-specific',
    title: '5. PRODUCT-SPECIFIC REFUND POLICIES',
    subsections: [
      {
        title: '5.1 Cross-Border UPI Gateway',
        items: [
          'Eligible for Refund:',
          '• Failed international payment due to gateway error',
          '• Incorrect currency conversion applied by our system',
          '• Payment received but not credited to UPI account within 3 business days',
          '',
          'Not Eligible:',
          '• Forex fluctuations or exchange rate changes after initiation',
          '• Delays caused by international banking networks (SWIFT, correspondent banks)',
          '• FEMA compliance rejections due to incomplete documentation',
          '• Third-party payment processor fees (Stripe, PayPal)',
          '',
          'Refund Process:',
          '1. Report issue within 7 days via support@rupeeflow.in',
          '2. Provide transaction ID, screenshots, and bank statements',
          '3. Investigation period: 10-15 business days',
          '4. Refund issued to source account in original currency',
          '5. Currency conversion charges may apply for refunds',
          '',
          'Special Note: International refunds may take 15-30 business days due to cross-border banking procedures.',
        ],
      },
      {
        title: '5.2 Offline-First UPI for Bharat',
        items: [
          'Eligible for Refund:',
          '• Payment debited but not received by merchant due to network sync failure',
          '• Double debit during offline-to-online reconciliation',
          '• Transaction failure after network restoration',
          '• Device malfunction causing incorrect amount charge',
          '',
          'Not Eligible:',
          '• Delayed transaction confirmation due to network unavailability (amount held in escrow)',
          '• Merchant disputes about goods/services',
          '• User error in entering payment amount offline',
          '',
          'Refund Process:',
          '1. Report within 48 hours of network restoration',
          '2. Transaction reconciliation verification by technical team',
          '3. Merchant confirmation required for disputed transactions',
          '4. Refund timeline: 5-7 business days after verification',
          '',
          'Hardware Device Issues:',
          '• Faulty POS device: Replacement within 3 business days (no refund of rental fees)',
          '• Lost/stolen device: User responsible; no refund',
          '• Device return on service termination: Security deposit refunded within 15 days',
        ],
      },
      {
        title: '5.3 Green Payment Gateway (Eco-Pay)',
        items: [
          'Eligible for Refund:',
          '• Payment successful but carbon credits/eco-points not awarded',
          '• Technical error in calculating carbon footprint',
          '• Tree planting certificate not issued within 60 days',
          '• Merchant cancels order processed via Eco-Pay',
          '',
          'Not Eligible:',
          '• Eco-points or carbon credits (non-monetary rewards)',
          '• Sustainability claims or environmental impact discrepancies',
          '• Third-party green initiatives outside Rupeeflow\'s control',
          '• Merchant\'s failure to meet sustainability commitments',
          '',
          'Refund Process:',
          '1. Contact merchant first for product/service refunds',
          '2. For eco-rewards issues: email ecopoints@rupeeflow.in within 30 days',
          '3. Provide transaction ID and proof of non-delivery',
          '4. Manual verification of tree planting partnerships',
          '5. Refund timeline: 7-10 business days (payment amount only; eco-points non-refundable)',
          '',
          'Eco-Points Policy:',
          '• Eco-points have no cash value and cannot be refunded',
          '• Points expire after 12 months of earning',
          '• Unused points cannot be transferred or exchanged for money',
        ],
      },
      {
        title: '5.4 Smart Wallet for Gig Workers',
        items: [
          'Eligible for Refund:',
          '• Failed wallet top-up where money debited but not added to balance',
          '• Accidental wallet reload (request within 24 hours before usage)',
          '• Auto-debit subscription error charging incorrect amount',
          '• PFRC generation failure due to system error',
          '',
          'Not Eligible:',
          '• Completed peer-to-peer wallet transfers',
          '• Bill payments successfully processed to billers',
          '• Subscription fees after service usage',
          '• Invoice generation or billing software charges',
          '• Withdrawal fees for amounts below minimum threshold',
          '',
          'Refund Process:',
          '1. Raise ticket via app within 48 hours',
          '2. Freeze wallet to prevent further transactions during investigation',
          '3. Verification of wallet transaction logs',
          '4. Refund credited back to wallet or original source (user\'s choice)',
          '5. Timeline: 3-5 business days',
          '',
          'Wallet Balance Refund on Account Closure:',
          '• Request full wallet balance withdrawal before closing account',
          '• Balances below ₹100 may be forfeited if account inactive for 3+ years',
          '• Withdrawal to linked bank account: 24-48 hours',
          '• No refund of subscription fees or service charges',
        ],
      },
    ],
    content: [],
  },
  {
    id: 'refund-process',
    title: '6. REFUND REQUEST PROCESS',
    content: [
      'Step 1: Identify Transaction',
      '• Gather transaction ID, date, amount, and merchant details',
      '• Check transaction status in app/website: Pending, Success, or Failed',
      '• Review email/SMS confirmations',
      '',
      'Step 2: Contact Appropriate Party',
      '• Merchant Issues: Contact merchant\'s customer service first',
      '• Technical Issues: Contact Rupeeflow support',
      '• Fraudulent Transactions: Report immediately to fraud@rupeeflow.in',
      '',
      'Step 3: Submit Refund Request',
      'Required Information:',
      '• Full name and registered mobile number/email',
      '• Transaction ID or UPI reference number',
      '• Date and time of transaction',
      '• Amount charged',
      '• Reason for refund request',
      '• Supporting documents (screenshots, receipts, bank statements)',
      '',
      'Submission Methods:',
      '• Email: refunds@rupeeflow.in',
      '• Customer Support: 1800-XXX-XXXX',
      '• In-app: Help → Transactions → Select Transaction → Request Refund',
      '',
      'Step 4: Investigation',
      '• Acknowledgment within 24 hours',
      '• Investigation period: 7-15 business days (simple cases) or up to 90 days (complex fraud cases)',
      '• May request additional information or documentation',
      '• Merchant coordination for order cancellations',
      '',
      'Step 5: Resolution',
      '• Refund approved: Processed to original payment source',
      '• Refund denied: Detailed explanation provided with appeal option',
      '• Partial refund: In cases where fees are non-refundable',
    ],
  },
  {
    id: 'refund-methods',
    title: '7. REFUND METHODS AND TIMELINES',
    subsections: [
      {
        title: '7.1 Refund Methods',
        items: [
          'Original Payment Source:',
          '• UPI: Refunded to original UPI ID/bank account',
          '• Debit/Credit Card: Refunded to same card',
          '• Net Banking: Refunded to source bank account',
          '• Wallet: Credited back to wallet balance',
          '',
          'Alternative Method:',
          '• If original source unavailable (card expired, account closed), refund via NEFT/IMPS to registered bank account',
        ],
      },
      {
        title: '7.2 Processing Timelines',
        items: [
          'Scenario → Investigation Time → Refund Processing → Total Timeline',
          '',
          'Failed Transaction (Auto): Immediate → 5-7 business days → 5-7 days',
          'Duplicate Charge: 3-5 business days → 5-7 business days → 8-12 days',
          'Merchant Cancellation: Merchant dependent → 7-14 business days → 10-20 days',
          'Technical Error: 1-3 business days → 3-5 business days → 4-8 days',
          'Fraud Investigation: 30-90 days → 5-7 business days → 35-97 days',
          'Cross-Border Refund: 10-15 business days → 15-30 business days → 25-45 days',
          '',
          'Note: Bank processing times may add 2-5 additional business days beyond our control.',
        ],
      },
      {
        title: '7.3 Refund Status Tracking',
        items: [
          '• Check refund status in app: Profile → Refund History',
          '• Email notifications at each stage: Received, Under Review, Approved, Processed, Completed',
          '• SMS alerts for refund credits',
        ],
      },
    ],
    content: [],
  },
  {
    id: 'chargebacks',
    title: '8. CHARGEBACKS AND DISPUTES',
    subsections: [
      {
        title: '8.1 What is a Chargeback?',
        items: [
          'A chargeback is a reversal of a credit/debit card transaction initiated by the cardholder\'s bank, bypassing the merchant\'s refund process.',
        ],
      },
      {
        title: '8.2 Chargeback Policy',
        items: [
          '• Customers must contact Rupeeflow before filing chargebacks with their bank',
          '• Unjustified chargebacks may result in account suspension',
          '• Chargeback fees (₹250 - ₹1,000) may be charged for invalid disputes',
        ],
      },
      {
        title: '8.3 Handling Chargebacks',
        items: [
          '1. Customer files chargeback with card-issuing bank',
          '2. Bank notifies Rupeeflow and temporarily reverses transaction',
          '3. Rupeeflow investigates and submits evidence to bank',
          '4. Bank makes final decision (30-90 days)',
          '5. If ruled in customer\'s favor: Refund retained; If ruled in merchant\'s favor: Amount re-charged',
        ],
      },
      {
        title: '8.4 Dispute Resolution',
        items: [
          '• Attempts good faith resolution before chargeback',
          '• Escalate unresolved issues to grievance@rupeeflow.in',
          '• Refer to Banking Ombudsman if no resolution within 30 days',
          '• Arbitration under Arbitration and Conciliation Act, 1996',
        ],
      },
    ],
    content: [],
  },
  {
    id: 'cancellation',
    title: '9. CANCELLATION POLICY',
    subsections: [
      {
        title: '9.1 Transaction Cancellation',
        items: [
          '• UPI transactions: Cannot be cancelled once initiated (irreversible)',
          '• Pending payments: May be cancelled before merchant confirmation',
          '• Scheduled payments: Can be cancelled before execution date',
        ],
      },
      {
        title: '9.2 Subscription Cancellation',
        items: [
          '• Cancel anytime through app settings',
          '• No refund for current billing cycle',
          '• Access continues until end of paid period',
          '• No charges for subsequent cycles after cancellation',
        ],
      },
      {
        title: '9.3 Account Closure',
        items: [
          '• Submit account closure request via email',
          '• Settle all pending dues and transactions',
          '• Withdraw wallet balance before closure',
          '• Cancellation effective within 7-15 business days',
        ],
      },
    ],
    content: [],
  },
  {
    id: 'fraud-prevention',
    title: '10. FRAUD PREVENTION AND LIABILITY',
    subsections: [
      {
        title: '10.1 Customer Liability for Unauthorized Transactions',
        items: [
          'Reported within 24 hours:',
          '• Zero liability for customer (full refund after verification)',
          '',
          'Reported within 24-72 hours:',
          '• Customer liable up to ₹5,000 or actual transaction value (whichever is lower)',
          '',
          'Reported after 72 hours:',
          '• Customer liability as per RBI guidelines and investigation outcome',
        ],
      },
      {
        title: '10.2 Merchant Fraud',
        items: [
          '• Fake merchants or phishing scams: Report to fraud@rupeeflow.in',
          '• Rupeeflow not liable for scams if customer willingly shared credentials',
          '• Cooperation with law enforcement for fraudulent merchant investigations',
        ],
      },
      {
        title: '10.3 Preventive Measures',
        items: [
          '• Two-factor authentication mandatory',
          '• Transaction alerts via SMS/email',
          '• Spending limits and velocity checks',
          '• AI-based fraud detection systems',
        ],
      },
    ],
    content: [],
  },
  {
    id: 'rbi-compliance',
    title: '11. RBI GUIDELINES COMPLIANCE',
    content: [
      'This Refund Policy adheres to:',
      '',
      '• RBI Circular on Customer Protection (2014): Grievance redressal within 30 days',
      '• RBI TAT Norms: Turn Around Time for failed transactions (T+5 days for auto-refund)',
      '• RBI Ombudsman Scheme: Escalation path for unresolved complaints',
      '• NPCI Circular on Dispute Resolution: Merchant dispute resolution timelines',
    ],
  },
  {
    id: 'exceptions',
    title: '12. EXCEPTIONS AND FORCE MAJEURE',
    content: [
      'Refund timelines may be extended due to:',
      '• Natural disasters, pandemics, wars',
      '• Government regulations or emergency orders',
      '• Banking system outages or holidays',
      '• Technical failures beyond Rupeeflow\'s control',
      '• International banking delays or sanctions',
      '',
      'Rupeeflow will notify affected users and provide revised timelines during such events.',
    ],
  },
  {
    id: 'amendments',
    title: '13. AMENDMENTS TO POLICY',
    content: [
      'We reserve the right to modify this Refund Policy at any time. Changes will be:',
      '• Published on website 15 days before effective date',
      '• Notified via email to registered users',
      '• Highlighted in app notifications',
      '',
      'Continued use of services after changes constitute acceptance.',
    ],
  },
  {
    id: 'grievance-redressal',
    title: '14. GRIEVANCE REDRESSAL',
    content: [
      'Level 1: Customer Support',
      '• Email: support@rupeeflow.in | refunds@rupeeflow.in',
      '• Phone: 1800-XXX-XXXX (24/7)',
      '• Response time: 24-48 hours',
      '',
      'Level 2: Grievance Officer',
      '• Email: grievances@rupeeflow.in',
      '• Name: [Grievance Officer Name]',
      '• Phone: [Direct Number]',
      '• Resolution time: 15-30 days',
      '',
      'Level 3: Regulatory Escalation',
      '• Banking Ombudsman: www.rbi.org.in/financialeducation/ombudsman',
      '• NPCI Ombudsman: ombudsman@npci.org.in',
      '• Consumer Forum: National Consumer Helpline 1800-11-4000',
    ],
  },
  {
    id: 'contact',
    title: '15. CONTACT INFORMATION',
    content: [
      'Rupeeflow Finance Private Limited',
      '',
      'Registered Office: [Complete Address]',
      '',
      'Customer Support:',
      '• Email: support@rupeeflow.in',
      '• Refunds: refunds@rupeeflow.in',
      '• Fraud: fraud@rupeeflow.in',
      '• Phone: 1800-XXX-XXXX',
      '• Website: www.rupeeflow.in',
      '',
      'Working Hours: 24/7 (Email & Phone Support)',
    ],
  },
  {
    id: 'legal-disclaimer',
    title: '16. LEGAL DISCLAIMER',
    content: [
      '• This Policy is subject to Indian laws and jurisdiction of [City] courts',
      '• Refund timelines are indicative and may vary based on banking systems',
      '• Rupeeflow acts in good faith but cannot guarantee specific timelines for third-party dependencies',
      '• For legal disputes, refer to Terms and Conditions and Arbitration Clause',
      '',
      'By using Rupeeflow services, you acknowledge that you have read and understood this Refund and Cancellation Policy.',
      '',
      'For the latest version, visit: www.rupeeflow.in/refund-policy',
    ],
  },
]

function AccordionItem({
  section,
  isOpen,
  onToggle,
}: {
  section: Section
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-gray-700/50">
      <button
        onClick={onToggle}
        className="w-full py-6 px-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
      >
        <h3 className="fontbody text-lg md:text-xl text-white">
          {section.title}
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-emerald-400 transition-transform duration-300 ${
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
        <div className="px-6 pb-6 space-y-4">
          {section.content.map((paragraph, idx) => (
            <p
              key={idx}
              className="fontbody2 text-gray-300 leading-relaxed whitespace-pre-line"
            >
              {paragraph}
            </p>
          ))}

          {section.subsections?.map((subsection, subIdx) => (
            <div key={subIdx} className="mt-4">
              <h4 className="fontbody text-emerald-400 mb-2">
                {subsection.title}
              </h4>
              {subsection.items.map((item, itemIdx) => (
                <p
                  key={itemIdx}
                  className="fontbody2 text-gray-300 leading-relaxed whitespace-pre-line"
                >
                  {item}
                </p>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default function RefundContent() {
  const [openSections, setOpenSections] = useState<string[]>(['introduction'])

  const toggleSection = (sectionId: string) => {
    setOpenSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    )
  }

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black via-[#0a1413] to-black">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="fontbody2 text-gray-400 max-w-3xl mx-auto">
            This Refund and Cancellation Policy explains the terms for refunds,
            cancellations, and chargebacks. Click on each section to expand and
            read the details.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden"
        >
          {sections.map((section) => (
            <AccordionItem
              key={section.id}
              section={section}
              isOpen={openSections.includes(section.id)}
              onToggle={() => toggleSection(section.id)}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="fontbody2 text-gray-400 mb-4">
            Need help with a refund or have questions about cancellations?
          </p>
          <a
            href="/support"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-teal-emerald-dark hover:bg-teal-emerald text-white font-semibold transition-all"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  )
}
