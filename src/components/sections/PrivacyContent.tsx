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
      'Rupeeflow Finance Private Limited ("Rupeeflow", "we", "us", or "our") is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, store, and protect your information when you use our payment services including Cross-Border UPI Gateway, Offline-First UPI for Bharat, Green Payment Gateway (Eco-Pay), and Smart Wallet for Gig Workers.',
      'This Privacy Policy is published in compliance with:',
      '• Information Technology Act, 2000',
      '• Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011',
      '• Reserve Bank of India (RBI) Guidelines on Digital Payments',
      '• Payment and Settlement Systems Act, 2007',
      '• Prevention of Money Laundering Act (PMLA), 2002',
      '',
      'By accessing or using our services, you consent to the collection, use, and disclosure of your information as described in this Privacy Policy.',
    ],
  },
  {
    id: 'information-collection',
    title: '2. INFORMATION WE COLLECT',
    subsections: [
      {
        title: '2.1 Personal Information',
        items: [
          'We collect the following personal information:',
          '• Full name, date of birth, gender',
          '• Email address and phone number',
          '• Residential and business addresses',
          '• Government-issued identification documents (PAN card, Aadhaar, Passport, Voter ID, Driving License)',
          '• Photographs and biometric information (with consent)',
          '• Employment details, occupation, annual income',
          '• Bank account details, UPI IDs, payment card information',
          '• GST registration number and business registration documents (for merchants)',
        ],
      },
      {
        title: '2.2 Transaction Information',
        items: [
          '• Payment transaction details including amount, currency, date, time',
          '• Merchant details, invoice information, purchase descriptions',
          '• Cross-border transaction data including foreign exchange rates',
          '• Carbon footprint calculations and eco-rewards data',
          '• Provident fund contributions and billing records (for gig workers)',
          '• Wallet balance, transaction history, and fund transfers',
        ],
      },
      {
        title: '2.3 Technical Information',
        items: [
          '• Device information (model, operating system, unique device identifiers)',
          '• IP address, browser type, language preferences',
          '• GPS location data (with permission) for fraud prevention and service optimization',
          '• Cookies, web beacons, and similar tracking technologies',
          '• Log files including access times, pages viewed, and app usage patterns',
          '• Network information and connectivity status (for offline payments)',
        ],
      },
      {
        title: '2.4 Information from Third Parties',
        items: [
          '• Credit bureau reports and credit scores (with consent)',
          '• Bank account verification data from NPCI and banking partners',
          '• Social media profile information (if you connect accounts)',
          '• Merchant transaction data and customer reviews',
          '• Fraud detection data from security partners',
        ],
      },
    ],
    content: [],
  },
  {
    id: 'information-use',
    title: '3. HOW WE USE YOUR INFORMATION',
    content: [
      'We use your information for the following purposes:',
    ],
    subsections: [
      {
        title: '3.1 Service Delivery',
        items: [
          '• Processing payment transactions and fund transfers',
          '• Enabling cross-border payments and currency conversion',
          '• Facilitating offline UPI payments via SMS, NFC, and Bluetooth',
          '• Managing Smart Wallet balances and generating invoices',
          '• Tracking carbon footprint and awarding eco-rewards',
          '• Auto-generating PFRC documentation for gig workers',
        ],
      },
      {
        title: '3.2 Compliance and Security',
        items: [
          '• Verifying your identity through KYC procedures',
          '• Preventing fraud, money laundering, and unauthorized transactions',
          '• Complying with RBI regulations, PMLA, FEMA, and tax laws',
          '• Conducting risk assessments and transaction monitoring',
          '• Responding to legal requests from law enforcement and regulatory authorities',
        ],
      },
      {
        title: '3.3 Customer Support',
        items: [
          '• Resolving technical issues and transaction disputes',
          '• Responding to inquiries and providing customer assistance',
          '• Investigating complaints and fraudulent activities',
          '• Sending service-related communications and updates',
        ],
      },
      {
        title: '3.4 Product Improvement',
        items: [
          '• Analyzing usage patterns to enhance user experience',
          '• Developing new features and payment solutions',
          '• Conducting research and data analytics',
          '• Testing system performance and reliability',
        ],
      },
      {
        title: '3.5 Marketing and Communications',
        items: [
          '• Sending promotional offers, newsletters, and product updates (with opt-in consent)',
          '• Personalizing recommendations based on transaction history',
          '• Conducting surveys and gathering feedback',
          '• Informing you about new partnerships and sustainability initiatives',
        ],
      },
    ],
  },
  {
    id: 'information-sharing',
    title: '4. INFORMATION SHARING AND DISCLOSURE',
    content: [
      'We may share your information with the following parties:',
    ],
    subsections: [
      {
        title: '4.1 Service Providers and Partners',
        items: [
          '• Banking partners and payment networks (NPCI, Visa, Mastercard, SWIFT)',
          '• Cloud service providers and data hosting platforms',
          '• Payment gateways and card processors',
          '• Customer support and call center services',
          '• Fraud detection and cybersecurity firms',
          '• Environmental organizations for tree planting initiatives',
        ],
      },
      {
        title: '4.2 Regulatory and Legal Authorities',
        items: [
          '• Reserve Bank of India (RBI)',
          '• Financial Intelligence Unit (FIU-IND)',
          '• Income Tax Department and GST authorities',
          '• Law enforcement agencies upon valid legal requests',
          '• Courts and arbitration tribunals in legal proceedings',
        ],
      },
      {
        title: '4.3 Business Transfers',
        items: [
          '• In case of merger, acquisition, sale of assets, or corporate restructuring, your information may be transferred to the successor entity with proper notice',
        ],
      },
      {
        title: '4.4 With Your Consent',
        items: [
          '• With third parties for specific purposes when you provide explicit consent',
          '• With merchants for transaction processing and order fulfillment',
        ],
      },
    ],
  },
  {
    id: 'data-retention',
    title: '5. DATA RETENTION',
    content: [
      'We retain your information for the following periods:',
      '',
      '• Transaction Records: Minimum 7 years as required by RBI and PMLA regulations',
      '• KYC Documents: 7 years from account closure or end of business relationship',
      '• Customer Support Records: 5 years from last interaction',
      '• Marketing Consent Records: Until you withdraw consent or 3 years of inactivity',
      '• Technical Logs: 90 days unless required for fraud investigation',
      '',
      'After the retention period, we securely delete or anonymize your information in accordance with applicable laws.',
    ],
  },
  {
    id: 'data-security',
    title: '6. DATA SECURITY MEASURES',
    content: [
      'We implement industry-standard security measures to protect your information:',
    ],
    subsections: [
      {
        title: '6.1 Technical Safeguards',
        items: [
          '• 256-bit SSL/TLS encryption for data transmission',
          '• AES-256 encryption for data storage',
          '• Tokenization of sensitive payment information',
          '• Multi-factor authentication (MFA) for account access',
          '• Secure APIs with OAuth 2.0 authentication',
          '• Regular security audits and penetration testing',
          '• Intrusion detection and prevention systems',
        ],
      },
      {
        title: '6.2 Organizational Safeguards',
        items: [
          '• Access controls and role-based permissions',
          '• Employee training on data protection and confidentiality',
          '• Background verification of employees handling sensitive data',
          '• Non-disclosure agreements with vendors and partners',
          '• Incident response and data breach notification procedures',
          '• Annual third-party security certifications (ISO 27001, PCI-DSS)',
        ],
      },
      {
        title: '6.3 Physical Safeguards',
        items: [
          '• Secure data centers with 24/7 monitoring',
          '• Biometric access controls and CCTV surveillance',
          '• Disaster recovery and business continuity plans',
          '• Redundant backups in geographically distributed locations',
        ],
      },
    ],
  },
  {
    id: 'your-rights',
    title: '7. YOUR RIGHTS AND CHOICES',
    content: [
      'Under applicable Indian laws, you have the following rights:',
    ],
    subsections: [
      {
        title: '7.1 Access and Correction',
        items: [
          '• Request access to your personal information we hold',
          '• Update or correct inaccurate information through your account settings or by contacting us',
        ],
      },
      {
        title: '7.2 Data Portability',
        items: [
          '• Request a copy of your information in a structured, machine-readable format',
          '• Transfer your data to another service provider (subject to technical feasibility)',
        ],
      },
      {
        title: '7.3 Deletion and Erasure',
        items: [
          '• Request deletion of your information after account closure (subject to legal retention requirements)',
          '• Right to be forgotten once regulatory obligations are fulfilled',
        ],
      },
      {
        title: '7.4 Withdrawal of Consent',
        items: [
          '• Withdraw consent for marketing communications at any time',
          '• Unsubscribe from promotional emails via the unsubscribe link',
          '• Disable location access, cookies, and tracking through device settings',
        ],
      },
      {
        title: '7.5 Objection and Restriction',
        items: [
          '• Object to processing of your information for certain purposes',
          '• Request restriction on processing during dispute resolution',
          '',
          'To exercise these rights, contact our Data Protection Officer at privacy@rupeeflow.in',
        ],
      },
    ],
  },
  {
    id: 'cookies',
    title: '8. COOKIES AND TRACKING TECHNOLOGIES',
    content: [
      'We use cookies, web beacons, and similar technologies to enhance user experience. See our detailed Cookie Policy for more information.',
      '',
      'Types of Cookies We Use:',
      '• Essential Cookies: Required for core functionality',
      '• Performance Cookies: Analyze usage patterns and improve services',
      '• Functional Cookies: Remember your preferences and settings',
      '• Advertising Cookies: Deliver personalized marketing content (with consent)',
      '',
      'You can manage cookie preferences through your browser settings, but disabling certain cookies may affect service functionality.',
    ],
  },
  {
    id: 'third-party',
    title: '9. THIRD-PARTY LINKS AND SERVICES',
    content: [
      'Our platform may contain links to third-party websites, apps, or services. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before sharing any information.',
    ],
  },
  {
    id: 'childrens-privacy',
    title: "10. CHILDREN'S PRIVACY",
    content: [
      'Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a minor, please contact us immediately for deletion.',
    ],
  },
  {
    id: 'international-transfers',
    title: '11. INTERNATIONAL DATA TRANSFERS',
    content: [
      'For cross-border payment services, your information may be transferred to and processed in countries outside India including the United States, European Union, and Singapore. We ensure adequate safeguards through:',
      '• Standard Contractual Clauses (SCCs)',
      '• Data Processing Agreements with international partners',
      '• Compliance with GDPR and other applicable international laws',
    ],
  },
  {
    id: 'data-breach',
    title: '12. DATA BREACH NOTIFICATION',
    content: [
      'In the event of a data breach that compromises your personal information, we will:',
      '• Notify you within 72 hours of discovery via email or SMS',
      '• Inform relevant regulatory authorities (CERT-In, RBI, FIU-IND)',
      '• Provide details of the breach, impact assessment, and remedial actions',
      '• Offer credit monitoring or identity protection services if applicable',
    ],
  },
  {
    id: 'grievance',
    title: '13. GRIEVANCE REDRESSAL',
    content: [
      'For privacy-related concerns, complaints, or inquiries:',
      '',
      'Data Protection Officer:',
      'Name: [DPO Name]',
      'Email: privacy@rupeeflow.in',
      'Phone: 1800-XXX-XXXX',
      'Address: [Complete Address]',
      '',
      'We will acknowledge your complaint within 24 hours and resolve it within 30 working days.',
    ],
  },
  {
    id: 'changes',
    title: '14. CHANGES TO THIS PRIVACY POLICY',
    content: [
      'We may update this Privacy Policy periodically to reflect changes in our practices, legal requirements, or business operations. We will notify you of material changes via email, in-app notification, or prominent website notice at least 15 days before the changes take effect.',
      '',
      'Your continued use of our services after the updated Privacy Policy becomes effective constitutes acceptance of the changes.',
    ],
  },
  {
    id: 'consent',
    title: '15. CONSENT AND ACKNOWLEDGMENT',
    content: [
      'By using Rupeeflow services, you:',
      '• Acknowledge that you have read and understood this Privacy Policy',
      '• Consent to the collection, use, and disclosure of your information as described',
      '• Agree to receive service-related communications',
      '• Understand your rights and how to exercise them',
    ],
  },
  {
    id: 'contact',
    title: '16. CONTACT INFORMATION',
    content: [
      'Rupeeflow Finance Private Limited',
      '',
      'Registered Office: [Complete Address]',
      'Email: privacy@rupeeflow.in | support@rupeeflow.in',
      'Customer Care: 1800-XXX-XXXX (Toll-Free)',
      'Website: www.rupeeflow.in',
      '',
      'For regulatory complaints:',
      '• Reserve Bank of India: www.rbi.org.in',
      '• NPCI Ombudsman: ombudsman@npci.org.in',
      '',
      'This Privacy Policy is effective as of October 27, 2025.',
      'For the latest version, visit: www.rupeeflow.in/privacy-policy',
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

export default function PrivacyContent() {
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
            This Privacy Policy explains how RupeeFlow collects, uses, and
            protects your personal information. Click on each section to expand
            and read the details.
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
            Have questions about your privacy and data protection?
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
