'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Image from 'next/image'

const documentCategories = [
  {
    title: 'Identity Proof',
    icon: '/Developer-friendly/security-card.svg',
    docs: ['Aadhaar Card', 'PAN Card', 'Passport', 'Voter ID'],
  },
  {
    title: 'Address Proof',
    icon: '/home/globe.svg',
    docs: ['Utility Bills', 'Rent Agreement', 'Bank Statement', 'Aadhaar Card'],
  },
  {
    title: 'Income Proof',
    icon: '/home/rupee.svg',
    docs: ['Salary Slips (3 months)', 'ITR (2 years)', 'Bank Statement (6 months)', 'Form 16'],
  },
  {
    title: 'Education/Medical',
    icon: '/features/shield.svg',
    docs: ['Admission Letter', 'Fee Structure', 'Medical Bills', 'Doctor Prescription'],
  },
]

export default function DocumentsSection() {
  return (
    <section className="relative bg-gray-50 py-20 md:py-28 overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="fontheading text-3xl md:text-5xl text-gray-900 mb-4">
            Required{' '}
            <span className="bg-gradient-to-r from-[#10b981] to-[#14b8a6] bg-clip-text text-transparent">
              Documents
            </span>
          </h2>
          <p className="fontbody2 text-gray-600 text-lg max-w-3xl mx-auto">
            Keep these documents ready for quick processing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {documentCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[var(--card)] rounded-3xl p-6 border-2 border-gray-100 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1 group"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Image src={category.icon} alt={category.title} width={28} height={28} />
              </div>

              {/* Title */}
              <h3 className="text-gray-900 text-lg font-bold mb-4 group-hover:text-emerald-600 transition-colors">
                {category.title}
              </h3>

              {/* Document List */}
              <ul className="space-y-2">
                {category.docs.map((doc, docIndex) => (
                  <li key={docIndex} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600 text-sm">{doc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-3xl p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[var(--card)] flex items-center justify-center flex-shrink-0">
              <Image src="/features/shield.svg" alt="Secure" width={24} height={24} />
            </div>
            <div className="flex-1">
              <h4 className="text-gray-900 text-lg font-bold mb-2">
                Secure Document Upload
              </h4>
              <p className="text-gray-700 fontbody2 text-sm leading-relaxed">
                All documents are encrypted and stored securely. We follow RBI guidelines and never share your information with third parties without consent.
              </p>
            </div>
            <a
              href="#upload"
              className="px-6 py-3 rounded-xl bg-[var(--card)] text-emerald-600 font-semibold text-sm hover:bg-emerald-50 transition-all duration-300 border border-emerald-200 hover:border-emerald-300 whitespace-nowrap"
            >
              Upload Documents
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
