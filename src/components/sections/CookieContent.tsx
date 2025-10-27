'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface Section {
  id: string
  title: string
  content: string[]
  subsections?: { title: string; items: string[] }[]
  table?: { headers: string[]; rows: string[][] }
}

const sections: Section[] = [
  {
    id: 'introduction',
    title: '1. INTRODUCTION',
    content: [
      'This Cookie Policy explains how Rupeeflow Finance Private Limited ("Rupeeflow", "we", "us", or "our") uses cookies, web beacons, and similar tracking technologies on our website, mobile applications, and digital platforms ("Services").',
      '',
      'This policy should be read in conjunction with our Privacy Policy available at www.rupeeflow.in/privacy-policy',
    ],
  },
  {
    id: 'what-are-cookies',
    title: '2. WHAT ARE COOKIES?',
    content: [
      'Cookies are small text files stored on your device (computer, smartphone, tablet) when you visit websites or use applications. They help websites remember information about your visit, preferences, and activities to improve your experience.',
    ],
    subsections: [
      {
        title: 'Types of Cookies by Duration:',
        items: [
          'Session Cookies: Temporary cookies that expire when you close your browser or app. Used for essential functions like maintaining login sessions.',
          '',
          'Persistent Cookies: Remain on your device for a specified period or until manually deleted. Used for remembering preferences and enhancing user experience.',
        ],
      },
      {
        title: 'Types of Cookies by Purpose:',
        items: [
          'First-Party Cookies: Set directly by Rupeeflow on our website or app.',
          '',
          'Third-Party Cookies: Set by external service providers (analytics, advertising, payment processors) integrated with our Services.',
        ],
      },
    ],
  },
  {
    id: 'why-we-use-cookies',
    title: '3. WHY WE USE COOKIES',
    content: ['We use cookies and similar technologies for the following purposes:'],
    subsections: [
      {
        title: '3.1 Essential/Strictly Necessary Cookies',
        items: [
          'These cookies are required for core functionality and cannot be disabled:',
          '• Authentication: Maintaining secure login sessions and verifying user identity',
          '• Security: Preventing fraud, detecting unauthorized access, and protecting against cyberattacks',
          '• Transaction Processing: Enabling payment transactions and fund transfers',
          '• Load Balancing: Distributing traffic across servers for optimal performance',
          '• Compliance: Meeting regulatory requirements and legal obligations',
        ],
      },
      {
        title: '3.2 Performance and Analytics Cookies',
        items: [
          'These cookies help us understand how users interact with our Services:',
          '• Usage Analytics: Tracking page views, feature usage, and navigation patterns',
          '• Error Tracking: Identifying technical issues and system failures',
          '• Performance Monitoring: Measuring page load times and app responsiveness',
          '• A/B Testing: Comparing different versions of features to optimize user experience',
          '',
          'Tools Used: Google Analytics, Firebase Analytics, Mixpanel, Sentry',
        ],
      },
      {
        title: '3.3 Functional Cookies',
        items: [
          'These cookies enhance functionality and personalization:',
          '• Language Preferences: Remembering your language and regional settings',
          '• Display Preferences: Storing your theme choices (light/dark mode) and layout preferences',
          '• Recent Transactions: Displaying your recent payment history for quick access',
          '• Form Data: Saving partially filled forms to resume later',
          '• Accessibility Settings: Remembering font size, contrast, and assistive technology preferences',
        ],
      },
      {
        title: '3.4 Advertising and Marketing Cookies',
        items: [
          'These cookies deliver personalized marketing content (with your consent):',
          '• Interest-Based Advertising: Showing relevant ads based on browsing behavior',
          '• Conversion Tracking: Measuring effectiveness of marketing campaigns',
          '• Retargeting: Displaying ads for Rupeeflow services on third-party websites',
          '• Social Media Integration: Enabling sharing and social login features',
          '',
          'Tools Used: Google Ads, Facebook Pixel, LinkedIn Insight Tag',
        ],
      },
    ],
  },
  {
    id: 'cookies-we-use',
    title: '4. COOKIES WE USE',
    content: [],
    subsections: [
      {
        title: '4.1 Rupeeflow First-Party Cookies',
        items: [
          'Cookie Name | Purpose | Type | Duration',
          '─────────────────────────────────────────────────────────────',
          'rupeeflow_session | Maintains login session | Essential | Session',
          'rupeeflow_auth | Stores authentication token | Essential | 30 days',
          'rupeeflow_csrf | Prevents cross-site request forgery | Essential | Session',
          'rupeeflow_lang | Remembers language preference | Functional | 1 year',
          'rupeeflow_theme | Stores UI theme (light/dark) | Functional | 1 year',
          'rupeeflow_analytics | Tracks user behavior | Analytics | 2 years',
          'rupeeflow_consent | Stores cookie consent choices | Essential | 1 year',
        ],
      },
      {
        title: '4.2 Third-Party Cookies',
        items: [
          'Service Provider | Purpose | Privacy Policy',
          '────────────────────────────────────────────────────────────────────',
          'Google Analytics | Website analytics | https://policies.google.com/privacy',
          'Firebase | App analytics & performance | https://firebase.google.com/support/privacy',
          'Google Ads | Advertising & remarketing | https://policies.google.com/technologies/ads',
          'Facebook Pixel | Social media advertising | https://www.facebook.com/privacy/explanation',
          'Razorpay | Payment processing | https://razorpay.com/privacy/',
          'NPCI | UPI transaction processing | https://www.npci.org.in/privacy-policy',
          'Amazon Web Services | Cloud infrastructure | https://aws.amazon.com/privacy/',
          'Cloudflare | Content delivery & security | https://www.cloudflare.com/privacypolicy/',
        ],
      },
    ],
  },
  {
    id: 'tracking-technologies',
    title: '5. OTHER TRACKING TECHNOLOGIES',
    subsections: [
      {
        title: '5.1 Web Beacons (Pixels)',
        items: [
          'Invisible images embedded in emails or web pages to track email opens, link clicks, and user engagement.',
        ],
      },
      {
        title: '5.2 Local Storage',
        items: [
          'HTML5 local storage and session storage used to store data locally on your device for faster access and offline functionality.',
        ],
      },
      {
        title: '5.3 Mobile SDKs',
        items: [
          'Software development kits integrated into our mobile apps to collect device information, usage data, and crash reports.',
        ],
      },
      {
        title: '5.4 Fingerprinting',
        items: [
          'Combining device characteristics (screen resolution, browser version, fonts) to identify unique devices for fraud prevention.',
        ],
      },
    ],
    content: [],
  },
  {
    id: 'legal-basis',
    title: '6. LEGAL BASIS FOR USING COOKIES',
    content: [
      'We use cookies based on the following legal grounds:',
      '',
      'Consent: For non-essential cookies (analytics, advertising), we obtain your explicit consent through cookie banners and preference centers.',
      '',
      'Legitimate Interests: For performance optimization, fraud prevention, and service improvement, we rely on our legitimate business interests balanced against your privacy rights.',
      '',
      'Contractual Necessity: For essential cookies required to provide our payment services and fulfill our Terms and Conditions.',
      '',
      'Legal Obligation: For cookies necessary to comply with RBI regulations, PMLA requirements, and tax laws.',
    ],
  },
  {
    id: 'cookie-choices',
    title: '7. YOUR COOKIE CHOICES AND CONTROL',
    content: ['You have several options to manage cookies:'],
    subsections: [
      {
        title: '7.1 Cookie Consent Manager',
        items: [
          'When you first visit our website or app, you\'ll see a cookie consent banner. You can:',
          '• Accept all cookies',
          '• Reject non-essential cookies',
          '• Customize your preferences by category',
          '• Change your preferences anytime through "Cookie Settings" in the footer',
        ],
      },
      {
        title: '7.2 Browser Settings',
        items: [
          'Most browsers allow you to control cookies through settings:',
          '',
          'Google Chrome:',
          '1. Settings → Privacy and Security → Cookies and other site data',
          '2. Choose: Block all cookies, Block third-party cookies, or Allow all cookies',
          '',
          'Safari:',
          '1. Preferences → Privacy → Manage Website Data',
          '2. Block or remove specific cookies',
          '',
          'Firefox:',
          '1. Settings → Privacy & Security → Cookies and Site Data',
          '2. Configure tracking protection and cookie settings',
          '',
          'Microsoft Edge:',
          '1. Settings → Cookies and site permissions',
          '2. Manage and delete cookies',
        ],
      },
      {
        title: '7.3 Mobile App Settings',
        items: [
          'Android:',
          '• Settings → Apps → Rupeeflow → Permissions → Disable tracking permissions',
          '',
          'iOS:',
          '• Settings → Privacy → Tracking → Disable "Allow Apps to Request to Track"',
        ],
      },
      {
        title: '7.4 Opt-Out of Advertising Cookies',
        items: [
          'Google Ads: https://adssettings.google.com',
          'Facebook Ads: https://www.facebook.com/ads/preferences',
          'Industry Opt-Out Tools: https://optout.networkadvertising.org',
        ],
      },
      {
        title: '7.5 Do Not Track (DNT)',
        items: [
          'We respect browser Do Not Track signals for advertising cookies but may not honor them for essential functionality cookies required for service delivery.',
        ],
      },
    ],
  },
  {
    id: 'impact-of-disabling',
    title: '8. IMPACT OF DISABLING COOKIES',
    content: ['Disabling certain cookies may affect your experience:'],
    subsections: [
      {
        title: 'Essential Cookies Disabled:',
        items: [
          '• Cannot log in or maintain authenticated sessions',
          '• Payment transactions will fail',
          '• Security features may not function properly',
        ],
      },
      {
        title: 'Performance Cookies Disabled:',
        items: [
          '• We cannot identify and fix technical issues',
          '• Service quality may degrade without usage insights',
        ],
      },
      {
        title: 'Functional Cookies Disabled:',
        items: [
          '• Must re-enter preferences on each visit',
          '• No personalized experience',
          '• Cannot save form progress',
        ],
      },
      {
        title: 'Advertising Cookies Disabled:',
        items: [
          '• Will still see ads but less relevant to your interests',
          '• May see the same ads repeatedly',
        ],
      },
    ],
  },
  {
    id: 'cookies-and-personal-data',
    title: '9. COOKIES AND PERSONAL DATA',
    content: [
      'Some cookies may contain personal information such as:',
      '• User IDs and session identifiers',
      '• IP addresses',
      '• Device identifiers',
      '• Browsing history and preferences',
      '',
      'We treat cookie data as personal information under our Privacy Policy and protect it with appropriate security measures including encryption, access controls, and regular audits.',
    ],
  },
  {
    id: 'third-party-responsibility',
    title: '10. THIRD-PARTY RESPONSIBILITY',
    content: [
      'We are not responsible for the privacy practices of third-party services that set cookies through our platform. We recommend reviewing their privacy policies:',
      '• These services have their own data collection practices',
      '• They may use cookies for purposes beyond our control',
      '• You may need to opt out directly with these providers',
    ],
  },
  {
    id: 'cookies-for-children',
    title: '11. COOKIES FOR CHILDREN',
    content: [
      'Our Services are not directed to individuals under 18 years of age. We do not knowingly use cookies to collect information from children. If you believe a child has provided information through cookies, contact us immediately at privacy@rupeeflow.in',
    ],
  },
  {
    id: 'international-transfers',
    title: '12. INTERNATIONAL DATA TRANSFERS',
    content: [
      'Cookie data may be transferred to and processed in countries outside India where our service providers operate (USA, EU, Singapore). We ensure adequate protections through Standard Contractual Clauses and compliance with applicable data transfer regulations.',
    ],
  },
  {
    id: 'updates',
    title: '13. UPDATES TO THIS COOKIE POLICY',
    content: [
      'We may update this Cookie Policy to reflect changes in technology, legal requirements, or business practices. Material changes will be communicated via:',
      '• Email notification to registered users',
      '• Prominent notice on our website',
      '• In-app notification',
      '',
      'Last updated: October 27, 2025',
    ],
  },
  {
    id: 'contact',
    title: '14. CONTACT US',
    content: [
      'For questions about our use of cookies or to exercise your rights:',
      '',
      'Data Protection Officer',
      'Email: privacy@rupeeflow.in',
      'Phone: 1800-XXX-XXXX',
      'Address: [Complete Address]',
      '',
      'Cookie-Specific Inquiries:',
      'Email: cookies@rupeeflow.in',
    ],
  },
  {
    id: 'additional-resources',
    title: '15. ADDITIONAL RESOURCES',
    content: [
      'Learn More About Cookies:',
      '• AllAboutCookies.org: www.allaboutcookies.org',
      '• European Commission: ec.europa.eu/ipg/basics/legal/cookies',
      '',
      'Regulatory Guidelines:',
      '• Information Technology Act, 2000',
      '• IT Rules, 2011 (Sensitive Personal Data)',
      '• RBI Guidelines on Digital Payments',
      '',
      'By continuing to use Rupeeflow Services, you consent to our use of cookies as described in this Cookie Policy.',
      '',
      'For the latest version, visit: www.rupeeflow.in/cookie-policy',
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
                  className="fontbody2 text-gray-300 leading-relaxed whitespace-pre-line font-mono text-sm"
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

export default function CookieContent() {
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
            This Cookie Policy explains how RupeeFlow uses cookies and similar
            tracking technologies. Click on each section to expand and read the
            details.
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
            Have questions about cookies or want to manage your preferences?
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
