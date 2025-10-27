'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface Section {
  id: string
  title: string
  content: string[]
}

const sections: Section[] = [
  {
    id: 'introduction',
    title: '1. INTRODUCTION AND ACCEPTANCE',
    content: [
      '1.1 These Terms and Conditions ("Terms") constitute a legally binding agreement between Rupeeflow Finance Private Limited ("Rupeeflow", "Company", "we", "us", or "our") and you ("User", "Customer", or "you") governing your use of our payment services and products.',
      '1.2 By accessing, registering for, or using any of our services including Cross-Border UPI Gateway, Offline-First UPI for Bharat, Green Payment Gateway (Eco-Pay), and Smart Wallet for Gig Workers, you acknowledge that you have read, understood, and agree to be bound by these Terms.',
      '1.3 If you do not agree to these Terms, you must immediately cease using our services and uninstall any associated applications.',
      '1.4 These Terms apply to all users including freelancers, micro-exporters, small business owners, gig workers, merchants, and D2C brands operating in India or internationally.',
      '1.5 Rupeeflow reserves the right to modify, amend, or update these Terms at any time without prior notice. Continued use of our services after such modifications constitutes acceptance of the revised Terms.',
    ],
  },
  {
    id: 'definitions',
    title: '2. DEFINITIONS',
    content: [
      '2.1 "Cross-Border UPI Gateway" refers to our payment gateway service that enables Indian freelancers and micro-exporters to receive USD/EUR/GBP payments directly into UPI-linked bank accounts.',
      '2.2 "Offline-First UPI" refers to our payment solution for Bharat that enables two-way offline payments via SMS, NFC, or Bluetooth for customers and UPI merchants in rural or weak network areas.',
      '2.3 "Green Payment Gateway (Eco-Pay)" refers to our eco-friendly payment solution that rewards customers with carbon footprint tracking, tree planting initiatives, and D2C brand sustainability programs.',
      '2.4 "Smart Wallet" refers to our digital wallet solution designed for gig workers with embedded trust, transparency features, auto-generated PFRC, and smooth billing and subscription management.',
      '2.5 "Services" collectively refers to all products, features, and functionalities offered by Rupeeflow.',
      '2.6 "KYC" means Know Your Customer verification process required under applicable laws and regulations.',
      '2.7 "UPI" means Unified Payments Interface, a real-time payment system developed by National Payments Corporation of India (NPCI).',
    ],
  },
  {
    id: 'eligibility',
    title: '3. ELIGIBILITY AND ACCOUNT REGISTRATION',
    content: [
      '3.1 You must be at least 18 years of age and possess legal capacity to enter into binding contracts under Indian law to use our services.',
      '3.2 You must provide accurate, complete, and current information during registration including full name, email address, phone number, PAN card details, and bank account information.',
      '3.3 You are responsible for maintaining the confidentiality of your account credentials including username, password, UPI PIN, and any authentication factors.',
      '3.4 You must complete mandatory KYC verification as per Reserve Bank of India (RBI) guidelines and Prevention of Money Laundering Act (PMLA) requirements before accessing certain services.',
      '3.5 You agree not to create multiple accounts or use our services for fraudulent, illegal, or unauthorized purposes.',
      '3.6 Rupeeflow reserves the right to suspend or terminate accounts that violate these Terms or engage in suspicious activities.',
      '3.7 Corporate entities and registered businesses must provide valid business registration documents, GST registration (if applicable), and authorized signatory details.',
    ],
  },
  {
    id: 'cross-border-upi',
    title: '4. CROSS-BORDER UPI GATEWAY - SPECIFIC TERMS',
    content: [
      '4.1 This service allows Indian freelancers and micro-exporters to receive international payments in USD, EUR, GBP, and other supported currencies directly into UPI-linked bank accounts.',
      '4.2 Currency conversion will be performed at competitive real-time exchange rates displayed transparently before transaction confirmation.',
      '4.3 Transaction fees range from 1.5% to 3% depending on transaction volume, currency, and payment method. Detailed fee structure will be provided during onboarding.',
      '4.4 Payment settlement typically occurs within 1-3 business days, subject to compliance checks and international banking procedures.',
      '4.5 You must comply with Foreign Exchange Management Act (FEMA) regulations and all applicable export-import laws of India.',
      '4.6 Maximum transaction limits apply based on your KYC level, ranging from ₹50,000 to ₹5,00,000 per transaction for individual users.',
      '4.7 You are responsible for declaring foreign income and paying applicable taxes including GST on export of services as per Indian tax laws.',
      '4.8 Rupeeflow may request additional documentation for high-value transactions including invoices, contracts, or proof of service delivery.',
      '4.9 Chargebacks and disputes will be handled according to international payment network rules, and you may be required to provide supporting evidence.',
      '4.10 Service availability may vary depending on regulatory approvals, banking partnerships, and geopolitical factors affecting cross-border payments.',
    ],
  },
  {
    id: 'offline-upi',
    title: '5. OFFLINE-FIRST UPI FOR BHARAT - SPECIFIC TERMS',
    content: [
      '5.1 This service enables two-way offline payments via SMS, NFC, or Bluetooth technology for customers and merchants in rural areas or locations with poor network connectivity.',
      '5.2 Offline transactions are subject to predefined limits: ₹500 per device per transaction for SMS-based payments, ₹2,000 for NFC/Bluetooth transactions.',
      '5.3 Transaction reconciliation occurs automatically when network connectivity is restored, typically within 24-48 hours.',
      '5.4 Users must ensure sufficient balance in their linked bank accounts or UPI wallets before initiating offline transactions.',
      '5.5 In case of transaction failures due to network issues, funds will be automatically refunded within 5-7 business days.',
      '5.6 Merchants must install Rupeeflow\'s certified POS device or use approved mobile applications to accept offline UPI payments.',
      '5.7 Hardware devices provided by Rupeeflow remain the property of the Company and must be returned upon service termination.',
      '5.8 Merchants are responsible for maintaining device security and reporting theft, loss, or damage immediately to prevent fraudulent transactions.',
      '5.9 Service fees for offline UPI merchants range from ₹300 to ₹500 per month depending on transaction volume and hardware requirements.',
      '5.10 Rupeeflow provides technical support but is not liable for transaction failures caused by device malfunction, user error, or force majeure events.',
    ],
  },
  {
    id: 'eco-pay',
    title: '6. GREEN PAYMENT GATEWAY (ECO-PAY) - SPECIFIC TERMS',
    content: [
      '6.1 This service rewards environmentally conscious customers with carbon footprint tracking, tree planting initiatives, and sustainability badges for every transaction.',
      '6.2 For every ₹500 spent through Eco-Pay gateway, customers earn eco-points that can be redeemed for tree planting certificates or donated to environmental causes.',
      '6.3 Carbon footprint calculations are based on industry-standard methodologies and third-party verified data but are provided for informational purposes only.',
      '6.4 Merchants participating in Eco-Pay programs must commit to verified sustainability practices and provide transparent reporting of their environmental impact.',
      '6.5 D2C brands can customize reward programs, set carbon offset goals, and integrate sustainability messaging into checkout experiences.',
      '6.6 Transaction fees for Eco-Pay gateway range from 1.8% to 2.5% depending on merchant category, transaction volume, and sustainability verification level.',
      '6.7 Tree planting initiatives are executed through verified partner organizations, and customers receive geotagged proof of planting within 30-60 days.',
      '6.8 Rupeeflow does not guarantee specific environmental outcomes but commits to transparent reporting of aggregate impact metrics quarterly.',
      '6.9 Merchants must not make misleading or false claims about sustainability benefits and must comply with advertising standards and environmental regulations.',
      '6.10 Eco-points have no cash value, cannot be transferred between users, and expire 12 months from the date of earning unless redeemed.',
    ],
  },
  {
    id: 'smart-wallet',
    title: '7. SMART WALLET FOR GIG WORKERS - SPECIFIC TERMS',
    content: [
      '7.1 This service provides gig workers with a digital wallet featuring embedded trust mechanisms, auto-generated PFRC (Provident Fund Regulatory Certificate), instant billing, and subscription management.',
      '7.2 Wallet funds can be used for peer-to-peer transfers, bill payments, online purchases, and UPI transactions at zero transaction fees for amounts below ₹10,000 per month.',
      '7.3 Auto-generated PFRC functionality assists gig workers in tracking provident fund contributions but does not constitute legal or financial advice.',
      '7.4 Users are solely responsible for calculating, declaring, and paying accurate provident fund contributions as per applicable labor laws.',
      '7.5 Smart Wallet includes automatic invoice generation with GST calculations, but users must verify accuracy and ensure compliance with tax regulations.',
      '7.6 Subscription billing for platforms and services can be managed through the wallet with automatic payment scheduling and renewal reminders.',
      '7.7 Wallet balance limits: minimum ₹100, maximum ₹1,00,000 for KYC-verified users; ₹10,000 for non-KYC users as per RBI guidelines.',
      '7.8 Funds can be withdrawn to linked bank accounts within 24 hours with no fees for withdrawals above ₹500; ₹10 fee applies for smaller amounts.',
      '7.9 In case of fraudulent transactions, users must report within 24 hours to be eligible for investigation and potential refund under our dispute resolution policy.',
      '7.10 Rupeeflow maintains transaction records for 7 years as required by law but does not provide financial planning or investment advisory services.',
    ],
  },
  {
    id: 'fees',
    title: '8. FEES, CHARGES, AND PAYMENT TERMS',
    content: [
      '8.1 All applicable fees, charges, commissions, and transaction costs are clearly disclosed before confirming any transaction through our services.',
      '8.2 Fees may vary based on transaction type, amount, payment method, merchant category, user verification level, and promotional offers.',
      '8.3 Currency conversion charges, foreign exchange margins, and intermediary bank fees may apply to cross-border transactions beyond our control.',
      '8.4 GST at applicable rates (currently 18%) will be added to all service fees and must be paid by users unless explicitly exempted.',
      '8.5 Rupeeflow reserves the right to modify fee structures with 15 days\' prior notice via email or in-app notification.',
      '8.6 Refunds for failed transactions will be processed within 5-7 business days to the original payment source after deducting applicable bank charges.',
      '8.7 Subscription fees for premium services are non-refundable but users may cancel subscriptions to avoid future charges.',
      '8.8 Promotional credits, cashback, and rewards are subject to specific terms and conditions communicated at the time of offer and may be revoked in case of fraudulent activity.',
      '8.9 Users agree to pay all amounts due promptly and authorize Rupeeflow to deduct applicable fees from wallet balance or linked payment methods.',
      '8.10 Unclaimed wallet balances below ₹100 inactive for more than 3 years may be forfeited as per RBI dormancy guidelines.',
    ],
  },
  {
    id: 'security',
    title: '9. SECURITY, PRIVACY, AND DATA PROTECTION',
    content: [
      '9.1 Rupeeflow implements industry-standard security measures including encryption, tokenization, multi-factor authentication, and fraud detection systems to protect user data and transactions.',
      '9.2 Users must maintain confidentiality of login credentials, UPI PINs, OTPs, and never share them with third parties including Rupeeflow employees.',
      '9.3 We collect, store, and process personal information in accordance with our Privacy Policy and applicable data protection laws including Information Technology Act, 2000.',
      '9.4 User data may be shared with banking partners, payment networks, regulatory authorities, and service providers strictly for service delivery and legal compliance.',
      '9.5 We do not sell personal information to third parties for marketing purposes without explicit user consent.',
      '9.6 Users have the right to access, correct, delete, or export their personal data by submitting written requests to our data protection officer.',
      '9.7 Transaction data is retained for minimum 7 years as required by RBI and PMLA regulations even after account closure.',
      '9.8 Rupeeflow employs reasonable measures to prevent unauthorized access but cannot guarantee absolute security against sophisticated cyberattacks or force majeure events.',
      '9.9 Users must immediately report suspected security breaches, unauthorized transactions, or compromised accounts to our 24/7 helpline.',
      '9.10 Biometric data, if collected for authentication purposes, is encrypted and stored securely in compliance with Aadhaar regulations and user consent.',
    ],
  },
  {
    id: 'prohibited',
    title: '10. PROHIBITED ACTIVITIES AND ACCEPTABLE USE',
    content: [
      '10.1 Users must not use Rupeeflow services for illegal activities including money laundering, terrorist financing, drug trafficking, arms dealing, or prohibited goods transactions.',
      '10.2 Fraudulent transactions, fake invoices, manipulation of carbon credits, chargebacks abuse, or attempts to exploit system vulnerabilities are strictly prohibited.',
      '10.3 Users must not use our services to send or receive payments related to gambling, adult content, pyramid schemes, or unauthorized financial services.',
      '10.4 Automated bots, scripts, or crawlers designed to abuse our systems, create fake accounts, or manipulate reward programs are forbidden.',
      '10.5 Users must comply with all applicable laws including taxation, foreign exchange regulations, consumer protection, and intellectual property rights.',
      '10.6 Merchants must provide genuine goods and services, honor advertised prices and terms, and not engage in deceptive trade practices.',
      '10.7 Harassment, threatening behavior, or abusive language toward Rupeeflow employees, customer support, or other users will result in immediate account suspension.',
      '10.8 Unauthorized reselling, sublicensing, or commercial exploitation of Rupeeflow\'s proprietary technology, APIs, or services is prohibited.',
      '10.9 Users must not reverse engineer, decompile, or attempt to extract source code from our applications or circumvent security measures.',
      '10.10 Violation of these prohibited activities may result in account termination, legal action, and reporting to law enforcement authorities.',
    ],
  },
  {
    id: 'intellectual-property',
    title: '11. INTELLECTUAL PROPERTY RIGHTS',
    content: [
      '11.1 All intellectual property rights in Rupeeflow\'s technology, software, applications, logos, trademarks, designs, and content are owned exclusively by the Company.',
      '11.2 Users are granted a limited, non-exclusive, non-transferable, revocable license to use our services for personal or business purposes as permitted by these Terms.',
      '11.3 Users retain ownership of content they upload but grant Rupeeflow a worldwide, royalty-free license to use such content for service delivery and improvement.',
      '11.4 Rupeeflow name, logo, and branding elements may not be used by third parties without prior written permission for marketing, endorsement, or commercial purposes.',
      '11.5 Feedback, suggestions, or ideas provided by users may be used by Rupeeflow without compensation or attribution for product development and improvement.',
      '11.6 Users must respect intellectual property rights of merchants, brands, and third parties when using our services.',
    ],
  },
  {
    id: 'liability',
    title: '12. LIABILITY, WARRANTIES, AND INDEMNIFICATION',
    content: [
      '12.1 Rupeeflow services are provided "as is" without warranties of any kind, express or implied, including merchantability, fitness for particular purpose, or uninterrupted service.',
      '12.2 We do not guarantee error-free operation, timely transaction processing, or availability of services at all times due to technical issues, maintenance, or external factors.',
      '12.3 Rupeeflow\'s maximum liability for any claim arising from service use is limited to the fees paid by the user in the preceding 3 months, not exceeding ₹50,000.',
      '12.4 We are not liable for indirect, consequential, incidental, or punitive damages including loss of profits, data, business opportunities, or reputation.',
      '12.5 Users agree to indemnify and hold Rupeeflow harmless from claims, losses, damages, and expenses arising from breach of these Terms or misuse of services.',
      '12.6 Force majeure events including natural disasters, wars, pandemics, government actions, strikes, or technical failures beyond our control excuse performance obligations.',
      '12.7 Third-party service providers, banking partners, and payment networks have separate terms and liabilities not controlled by Rupeeflow.',
      '12.8 Users are solely responsible for tax compliance, regulatory adherence, and consequences of their financial decisions made using our services.',
    ],
  },
  {
    id: 'dispute-resolution',
    title: '13. DISPUTE RESOLUTION AND GRIEVANCE REDRESSAL',
    content: [
      '13.1 Users can raise complaints or disputes through our dedicated customer support channels available 24/7 via email, phone, or in-app chat.',
      '13.2 Grievances will be acknowledged within 24 hours and resolved within 30 working days subject to complexity and investigation requirements.',
      '13.3 For unresolved complaints, users may escalate to our Grievance Redressal Officer whose contact details are published on our website.',
      '13.4 Disputes related to unauthorized transactions, failed payments, or service quality may be referred to the Banking Ombudsman or NPCI Ombudsman as applicable.',
      '13.5 These Terms shall be governed by the laws of India and subject to exclusive jurisdiction of courts in the Company\'s registered city.',
      '13.6 Users agree to attempt good faith resolution through negotiation and mediation before pursuing litigation.',
      '13.7 Arbitration conducted under the Arbitration and Conciliation Act, 1996 may be initiated by either party with a sole arbitrator appointed mutually.',
    ],
  },
  {
    id: 'termination',
    title: '14. TERMINATION AND ACCOUNT CLOSURE',
    content: [
      '14.1 Users may close their accounts at any time by submitting written requests and settling all outstanding dues, pending transactions, and subscription fees.',
      '14.2 Wallet balances must be withdrawn before account closure; unclaimed amounts may be forfeited after 90 days subject to regulatory requirements.',
      '14.3 Rupeeflow may suspend or terminate accounts immediately without prior notice if users breach these Terms, engage in fraudulent activities, or violate applicable laws.',
      '14.4 Upon termination, users\' access to services will be revoked, data will be retained per legal requirements, and any licenses granted will automatically terminate.',
      '14.5 Provisions related to intellectual property, liability, indemnification, and dispute resolution survive account termination.',
    ],
  },
  {
    id: 'general',
    title: '15. GENERAL PROVISIONS',
    content: [
      '15.1 These Terms constitute the entire agreement between users and Rupeeflow, superseding all prior communications, representations, or agreements.',
      '15.2 If any provision is found invalid or unenforceable, the remaining provisions continue in full force and effect.',
      '15.3 Failure to enforce any right or provision does not constitute a waiver of such right or provision.',
      '15.4 Rupeeflow may assign these Terms or delegate obligations to affiliates, successors, or third parties without user consent.',
      '15.5 Users may not assign rights or delegate obligations under these Terms without Rupeeflow\'s prior written approval.',
      '15.6 Official communications will be sent to the email address or phone number registered in user accounts.',
      '15.7 These Terms are available in English; translations are for convenience only, and the English version prevails in case of conflicts.',
      '15.8 Section headings are for reference only and do not affect interpretation of these Terms.',
    ],
  },
  {
    id: 'contact',
    title: '16. CONTACT INFORMATION',
    content: [
      'Rupeeflow Finance Private Limited',
      '',
      'Registered Office: [Complete Address]',
      '',
      'Email: support@rupeeflow.in | grievances@rupeeflow.in',
      '',
      'Customer Care: 1800-XXX-XXXX (Toll-Free)',
      '',
      'Website: www.rupeeflow.in',
      '',
      'Grievance Redressal Officer: [Name and Contact Details]',
      '',
      'By using Rupeeflow services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.',
      '',
      'For the latest version of these Terms, please visit www.rupeeflow.in/terms',
    ],
  },
]

function AccordionItem({ section, isOpen, onToggle }: { section: Section; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-gray-700/50">
      <button
        onClick={onToggle}
        className="w-full py-6 px-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
      >
        <h3 className="fontbody text-lg md:text-xl text-white">{section.title}</h3>
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
            <p key={idx} className="fontbody2 text-gray-300 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default function TermsContent() {
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
            These Terms and Conditions govern your use of RupeeFlow&apos;s payment services.
            Click on each section to expand and read the details.
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
            Have questions about our Terms & Conditions?
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
