export type FAQItem = {
  question: string
  answer: string
}

/* ── Payment Gateway ── */
export const paymentGatewayFAQs: FAQItem[] = [
  {
    question: 'Which payment methods does RupeeFlow support?',
    answer:
      'RupeeFlow supports 100+ payment modes including UPI, credit & debit cards, net banking, wallets (Paytm, PhonePe, Amazon Pay), EMI, BNPL, and international cards via Visa, Mastercard, and Amex.',
  },
  {
    question: 'How long does settlement take?',
    answer:
      'We offer T+1 standard settlements with Instant Settlement available for eligible merchants — funds reach your bank account within minutes of transaction completion.',
  },
  {
    question: 'Is RupeeFlow ISO 27001 compliant?',
    answer:
      'Yes. RupeeFlow is ISO 27001 certified, ensuring the highest level of information security management. All data is encrypted end-to-end and we maintain strict security protocols.',
  },
  {
    question: 'What is the integration process?',
    answer:
      'Integration is simple — use our REST APIs, SDKs for iOS/Android, or no-code plugins for Shopify, WooCommerce, and more. Most developers go live in under a day.',
  },
  {
    question: 'How does RupeeFlow handle failed transactions?',
    answer:
      'Our smart retry engine automatically retries failed payments using alternate payment routes. Real-time webhooks notify you of all transaction events so you can act instantly.',
  },
  {
    question: 'Are there setup fees or monthly fees?',
    answer:
      'No setup fees, no monthly fees. You only pay a small transaction fee per successful payment. See our pricing page for full details.',
  },
  {
    question: 'Can I accept international payments?',
    answer:
      'Yes. RupeeFlow supports cross-border payments from 100+ countries, with real-time forex conversion and compliance with FEMA guidelines.',
  },
]

/* ── Payment Links ── */
export const paymentLinksFAQs: FAQItem[] = [
  {
    question: 'What is a Payment Link?',
    answer:
      'A Payment Link is a shareable URL that lets you collect payments without a website or checkout page. Share it via WhatsApp, SMS, email, or social media and get paid instantly.',
  },
  {
    question: 'Can I add an expiry to my payment link?',
    answer:
      'Yes. You can set a custom expiry date and time on every payment link. Once expired, customers will see an informative message and the link will no longer accept payments.',
  },
  {
    question: 'What payment methods can customers use?',
    answer:
      'Customers can pay via UPI, credit/debit cards, net banking, and all major wallets — no app download required on their end.',
  },
  {
    question: 'Can I create payment links in bulk?',
    answer:
      'Yes. Use our bulk link creation feature or API to generate thousands of unique payment links at once — ideal for invoicing multiple clients.',
  },
  {
    question: 'How do I track payments made via links?',
    answer:
      'Your RupeeFlow dashboard provides real-time tracking of link status, payment attempts, and successful collections. You also receive instant notifications for every payment.',
  },
  {
    question: 'Is there a transaction limit on payment links?',
    answer:
      'Standard links support up to ₹2 lakh per transaction. Higher limits are available for verified businesses upon request.',
  },
]

/* ── Payment Button ── */
export const paymentButtonFAQs: FAQItem[] = [
  {
    question: 'What is a Payment Button?',
    answer:
      'A Payment Button is an embeddable HTML snippet you can add to any website to accept payments without building a full checkout. Just copy and paste the code to go live.',
  },
  {
    question: 'Do I need coding skills to set up a Payment Button?',
    answer:
      'No. Generate your button from the dashboard, copy the snippet, and paste it into your website\'s HTML. No backend or advanced coding required.',
  },
  {
    question: 'Can I customize the button appearance?',
    answer:
      'Yes. You can customize the button label, color, size, and amount. Pre-filled amounts reduce friction; open amounts let customers enter their own.',
  },
  {
    question: 'Which platforms support the Payment Button?',
    answer:
      'Our Payment Button works on any website — WordPress, Webflow, Squarespace, custom HTML sites, and more.',
  },
  {
    question: 'Are payments via the button secure?',
    answer:
      'Absolutely. All transactions are encrypted end-to-end, processed over an ISO 27001 certified infrastructure with built-in fraud detection.',
  },
  {
    question: 'Can I track conversions and payments?',
    answer:
      'Yes. Every button transaction is logged in your dashboard with full details including customer info, amount, status, and timestamp.',
  },
]

/* ── UPI Collections ── */
export const upiCollectionsFAQs: FAQItem[] = [
  {
    question: 'What is UPI Collections?',
    answer:
      'UPI Collections lets you generate dynamic or static UPI payment requests (links, QR codes, or intents) to collect payments from customers instantly via any UPI-enabled app.',
  },
  {
    question: 'How fast are UPI settlements?',
    answer:
      'UPI payments settle in real time. With RupeeFlow\'s Instant Settlement, funds appear in your bank account within minutes of each transaction.',
  },
  {
    question: 'Can I collect recurring UPI payments?',
    answer:
      'Yes. UPI AutoPay allows customers to authorize recurring mandates for subscriptions, EMIs, or standing instructions — all managed from your RupeeFlow dashboard.',
  },
  {
    question: 'What is the UPI transaction limit?',
    answer:
      'Standard UPI transactions support up to ₹1 lakh per transaction. Certain banks allow up to ₹5 lakh for verified users. RupeeFlow supports the full NPCI-mandated limits.',
  },
  {
    question: 'Do customers need to download any app?',
    answer:
      'No additional app is required. Customers use their existing UPI apps (Google Pay, PhonePe, BHIM, Paytm, etc.) to complete payments.',
  },
  {
    question: 'Is Voice UPI supported?',
    answer:
      'Yes. RupeeFlow supports voice-enabled UPI payments for offline and assisted merchants, with multilingual support for regional languages.',
  },
]

/* ── QR Code ── */
export const qrCodeFAQs: FAQItem[] = [
  {
    question: 'What types of QR codes does RupeeFlow support?',
    answer:
      'RupeeFlow supports both static QR codes (fixed to your UPI ID) and dynamic QR codes (generated per transaction with a specific amount and reference).',
  },
  {
    question: 'Can I print and use QR codes offline?',
    answer:
      'Yes. Download and print your static QR code for counter payments. Customers scan it with any UPI app to pay the requested amount.',
  },
  {
    question: 'How do I track QR code payments?',
    answer:
      'All QR-based payments are captured in real time on your dashboard with transaction ID, amount, and customer details for easy reconciliation.',
  },
  {
    question: 'Can QR codes be branded with my logo?',
    answer:
      'Yes. RupeeFlow offers white-labeled QR codes with your business logo embedded at the center — ideal for professional invoices and point-of-sale displays.',
  },
  {
    question: 'What happens if a QR code expires?',
    answer:
      'Static QR codes do not expire. Dynamic QR codes can be configured with a custom expiry window. Expired dynamic QR codes return an error to the payer.',
  },
  {
    question: 'Is there a limit on QR code transactions?',
    answer:
      'QR code transactions follow standard UPI limits (up to ₹1 lakh per transaction). Higher limits are available for verified enterprise merchants.',
  },
]

/* ── Cross-Border Payments ── */
export const crossBorderFAQs: FAQItem[] = [
  {
    question: 'Which countries are supported for cross-border payments?',
    answer:
      'RupeeFlow supports inward remittances from 100+ countries including the US, UK, UAE, Canada, Singapore, and Australia. Outward payments are available to 50+ countries.',
  },
  {
    question: 'What currencies does RupeeFlow support?',
    answer:
      'We support 30+ currencies including USD, GBP, EUR, AED, SGD, CAD, and AUD with real-time forex conversion at competitive rates.',
  },
  {
    question: 'How long do international transfers take?',
    answer:
      'Most inward remittances arrive within 1–2 business days. SWIFT transfers may take 2–5 days depending on the originating bank and country.',
  },
  {
    question: 'Is RupeeFlow compliant with FEMA and RBI guidelines?',
    answer:
      'Yes. All cross-border transactions are processed in full compliance with FEMA regulations and RBI\'s Liberalized Remittance Scheme (LRS) guidelines.',
  },
  {
    question: 'What documents are required for international payments?',
    answer:
      'Basic KYC (PAN + Aadhaar), business registration documents, and purpose of remittance declaration are required. Our onboarding team guides you through the process.',
  },
  {
    question: 'What are the forex rates?',
    answer:
      'RupeeFlow offers live mid-market rates with a minimal markup. You can view indicative rates in your dashboard before confirming any international transaction.',
  },
]

/* ── Banking Partnerships ── */
export const bankingPartnershipFAQs: FAQItem[] = [
  {
    question: 'What type of banks can partner with us?',
    answer:
      'We collaborate with commercial banks, NBFCs, neo-banks, and regulated financial institutions looking to expand digital payment capabilities.',
  },
  {
    question: 'How does integration work?',
    answer:
      'Our API-first infrastructure enables fast integration with your core banking systems, enabling seamless deployment of payment and expense solutions.',
  },
  {
    question: 'Is the platform compliant and secure?',
    answer:
      'Yes. Our infrastructure follows RBI guidelines, data encryption standards, and enterprise-grade fraud protection protocols.',
  },
  {
    question: 'What revenue opportunities exist for partner banks?',
    answer:
      'Banks can generate new revenue through payment processing, float management, lending enablement, and value-added financial services.',
  },
  {
    question: 'Can we customize solutions for our customers?',
    answer:
      'Yes. Solutions can be white-labeled and tailored to meet your customer segments and product strategy.',
  },
  {
    question: 'How long does onboarding take?',
    answer:
      'Most banking partners go live within a few weeks depending on integration scope and compliance approvals.',
  },
]

/* ── Affiliate Partnerships ── */
export const affiliatePartnerFAQs: FAQItem[] = [
  {
    question: 'Who can join the affiliate partner program?',
    answer:
      'Consultants, agencies, fintech influencers, SaaS platforms, and professionals serving business clients can join.',
  },
  {
    question: 'How do affiliates earn revenue?',
    answer:
      'Affiliates earn recurring commissions and referral incentives based on successful client onboarding and usage.',
  },
  {
    question: 'Is there a cost to join?',
    answer:
      'No. The affiliate partner program is free to join.',
  },
  {
    question: 'Do you provide marketing support?',
    answer:
      'Yes. Partners receive co-branded materials, sales enablement resources, and onboarding support.',
  },
  {
    question: 'How quickly can I start referring clients?',
    answer:
      'Most partners can begin referring clients immediately after onboarding.',
  },
]
