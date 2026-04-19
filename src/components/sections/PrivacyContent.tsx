export default function PrivacyContent() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">

        {/* Introduction */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-4">
            1. Introduction and Scope
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            This Privacy Policy (&quot;Policy&quot;) governs the collection, use, storage, processing, disclosure, and protection of Personal Data by <strong>Rupeeflow Finance Private Limited</strong> (hereinafter referred to as &quot;Company&quot;, &quot;Rupeeflow&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), a company incorporated under the Companies Act, 2013, with CIN: U64990KA2025PTC209485, having its registered office at No. 112, AKR Tech Park, Bommanahalli, Bangalore South, Karnataka - 560068, India.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            This Policy applies to all users (&quot;you&quot;, &quot;your&quot;, &quot;User&quot;, &quot;Data Principal&quot;) who access or use the Company&apos;s technology platform, mobile applications, websites, APIs, and related services (collectively, the &quot;Platform&quot;).
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            This Policy is published in compliance with:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed mb-4">
            <li>The Digital Personal Data Protection Act, 2023 (&quot;DPDP Act&quot;)</li>
            <li>The Information Technology Act, 2000 (&quot;IT Act&quot;)</li>
            <li>The Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 (&quot;SPDI Rules&quot;)</li>
            <li>Reserve Bank of India (RBI) Master Directions on Digital Payment Security Controls, 2021</li>
            <li>RBI Guidelines on Managing Risks and Code of Conduct in Outsourcing of Financial Services</li>
            <li>Payment and Settlement Systems Act, 2007 (&quot;PSS Act&quot;)</li>
            <li>Prevention of Money Laundering Act, 2002 (&quot;PMLA&quot;) and Rules thereunder</li>
            <li>Foreign Exchange Management Act, 1999 (&quot;FEMA&quot;)</li>
            <li>Any other applicable laws, regulations, and guidelines issued by regulatory authorities in India</li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            By accessing or using the Platform, you acknowledge that you have read, understood, and agree to be bound by this Policy. If you do not agree with any part of this Policy, you must discontinue use of the Platform immediately.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-4">
            2. Role of the Company as a Technology Service Provider
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Rupeeflow operates as a <strong>Technology Service Provider (TSP)</strong> that facilitates digital payment transactions, financial services, and related technology solutions. The Company does not directly handle, hold, or manage customer funds. All payment processing, fund settlement, and financial transactions are executed through:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed mb-4">
            <li>RBI-authorized Payment Aggregators (PAs)</li>
            <li>Payment Gateways (PGs)</li>
            <li>Partner Banks and Financial Institutions</li>
            <li>National Payments Corporation of India (NPCI) and its payment systems (UPI, IMPS, NEFT, RTGS)</li>
            <li>Card Networks (Visa, Mastercard, RuPay)</li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            The Company&apos;s role is limited to providing the technological infrastructure, APIs, user interfaces, and related services that enable Merchants, Customers, and other stakeholders to initiate, process, and track payment transactions through authorized financial intermediaries.
          </p>
        </div>

        {/* Section 3 */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-4">
            3. Data Role Classification
          </h2>
          
          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">3.1 Data Fiduciary</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            The Company acts as a <strong>Data Fiduciary</strong> under the DPDP Act when it determines the purpose and means of processing Personal Data. This includes:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed mb-4">
            <li>User account creation and management</li>
            <li>Platform access authentication and authorization</li>
            <li>Customer support and grievance redressal</li>
            <li>Marketing communications (with explicit consent)</li>
            <li>Platform analytics and service improvement</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">3.2 Data Processor</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            The Company acts as a <strong>Data Processor</strong> when it processes Personal Data on behalf of Merchants, Partner Banks, Payment Aggregators, or other Data Fiduciaries. In such cases:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed mb-4">
            <li>The Merchant or Partner Institution is the Data Fiduciary</li>
            <li>The Company processes data strictly as per contractual instructions</li>
            <li>Data processing is governed by Data Processing Agreements (DPAs)</li>
            <li>The Company implements appropriate technical and organizational measures to ensure data security</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">3.3 Joint Data Fiduciary</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            In certain scenarios, the Company may act as a <strong>Joint Data Fiduciary</strong> with Partner Banks or Payment Aggregators, where both parties jointly determine the purposes and means of processing. In such cases, responsibilities are clearly defined through written agreements.
          </p>
        </div>

        {/* Section 4 */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-4">
            4. Data Governance Principles
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Company adheres to the following data governance principles:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm leading-relaxed">
            <li><strong>Lawfulness, Fairness, and Transparency:</strong> Personal Data is processed lawfully, fairly, and in a transparent manner</li>
            <li><strong>Purpose Limitation:</strong> Data is collected for specified, explicit, and legitimate purposes and not further processed in a manner incompatible with those purposes</li>
            <li><strong>Data Minimization:</strong> Only data that is adequate, relevant, and limited to what is necessary for the stated purpose is collected</li>
            <li><strong>Accuracy:</strong> Reasonable steps are taken to ensure Personal Data is accurate and kept up to date</li>
            <li><strong>Storage Limitation:</strong> Data is retained only for as long as necessary for the purposes for which it was collected or as required by law</li>
            <li><strong>Integrity and Confidentiality:</strong> Appropriate security measures are implemented to protect Personal Data against unauthorized access, loss, or damage</li>
            <li><strong>Accountability:</strong> The Company is responsible for and can demonstrate compliance with data protection principles</li>
          </ul>
        </div>

        {/* Section 5 */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-4">
            5. Categories of Personal Data Collected
          </h2>
          
          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">5.1 Merchant Data</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed mb-4">
            <li>Business name, trade name, and legal entity details</li>
            <li>Business registration documents (Certificate of Incorporation, GST Registration, PAN, TAN)</li>
            <li>Authorized signatory details (name, designation, contact information, identity proof)</li>
            <li>Business address, registered office, and operational locations</li>
            <li>Bank account details (account number, IFSC code, account holder name)</li>
            <li>Business category, industry type, and nature of goods/services offered</li>
            <li>Website URL, social media handles, and online presence information</li>
            <li>Transaction history, settlement reports, and financial records</li>
            <li>Customer reviews, ratings, and feedback</li>
            <li>Tax compliance documents and financial statements</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">5.2 Customer Data (End Users)</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed mb-4">
            <li>Full name, date of birth, and gender</li>
            <li>Email address, mobile number, and alternate contact details</li>
            <li>Residential address and billing address</li>
            <li>Government-issued identity documents (Aadhaar, PAN, Passport, Voter ID, Driving License)</li>
            <li>Photographs and biometric information (with explicit consent)</li>
            <li>Payment instrument details (UPI ID, card number (tokenized), bank account details)</li>
            <li>Transaction history, payment preferences, and spending patterns</li>
            <li>Device information (IMEI, device model, operating system, IP address)</li>
            <li>Location data (GPS coordinates, with explicit consent)</li>
            <li>Customer support interactions, complaints, and grievances</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">5.3 Technical and Usage Data</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed">
            <li>IP address, browser type, and operating system</li>
            <li>Device identifiers (IMEI, MEID, MAC address, Advertising ID)</li>
            <li>Log files, access times, and pages viewed</li>
            <li>Cookies, web beacons, and similar tracking technologies</li>
            <li>App usage patterns, feature interactions, and session duration</li>
            <li>Network information (Wi-Fi, mobile data, connectivity status)</li>
            <li>Crash reports, error logs, and diagnostic data</li>
            <li>API call logs and system performance metrics</li>
          </ul>
        </div>

        {/* Section 6 */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-4">
            6. Purpose of Processing and Lawful Basis
          </h2>
          
          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">6.1 Service Delivery and Transaction Processing</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed mb-4">
            <li>Facilitating payment transactions between Customers and Merchants</li>
            <li>Processing refunds, chargebacks, and transaction disputes</li>
            <li>Generating invoices, receipts, and transaction confirmations</li>
            <li>Enabling cross-border payments and currency conversion</li>
            <li>Managing digital wallets and prepaid instruments</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">6.2 Compliance and Regulatory Obligations</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed mb-4">
            <li>Conducting Know Your Customer (KYC) and Customer Due Diligence (CDD) as mandated by RBI and PMLA</li>
            <li>Preventing money laundering, terrorist financing, and fraud</li>
            <li>Complying with tax laws (Income Tax Act, GST Act) and reporting obligations</li>
            <li>Responding to legal requests from law enforcement and regulatory authorities</li>
            <li>Maintaining transaction records as per RBI and PMLA requirements</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">6.3 Risk Management and Fraud Prevention</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed mb-4">
            <li>Monitoring transactions for suspicious activities and fraud patterns</li>
            <li>Conducting risk assessments and credit evaluations</li>
            <li>Implementing security measures to protect against cyber threats</li>
            <li>Verifying the authenticity of payment instruments and user identities</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">6.4 Customer Support and Grievance Redressal</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed mb-4">
            <li>Resolving technical issues, transaction failures, and disputes</li>
            <li>Responding to customer inquiries and support requests</li>
            <li>Investigating complaints and providing remedial actions</li>
            <li>Maintaining records of customer interactions for quality assurance</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">6.5 Platform Improvement and Analytics</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed mb-4">
            <li>Analyzing usage patterns to enhance user experience</li>
            <li>Developing new features and payment solutions</li>
            <li>Conducting market research and customer surveys</li>
            <li>Personalizing content and recommendations</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">6.6 Marketing and Communications (with Consent)</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed">
            <li>Sending promotional offers, newsletters, and product updates</li>
            <li>Conducting targeted advertising campaigns</li>
            <li>Sharing information about new services and features</li>
            <li>Inviting participation in surveys and feedback programs</li>
          </ul>
        </div>

        {/* Section 7 */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-4">
            7. Data Lifecycle Management
          </h2>
          
          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">7.1 Data Collection</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            Personal Data is collected through:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed mb-4">
            <li>Direct submission by Users during registration, onboarding, and transactions</li>
            <li>Automated collection through cookies, log files, and tracking technologies</li>
            <li>Third-party sources (credit bureaus, KYC verification agencies, partner banks)</li>
            <li>Public databases and government registries (with legal authorization)</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">7.2 Data Storage and Retention</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            Personal Data is stored in secure data centers located in India, in compliance with RBI data localization requirements. Retention periods are as follows:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed mb-4">
            <li><strong>Transaction Records:</strong> Minimum 7 years from the date of transaction (as per RBI and PMLA requirements)</li>
            <li><strong>KYC Documents:</strong> 7 years from the date of account closure or cessation of business relationship</li>
            <li><strong>Customer Support Records:</strong> 5 years from the date of last interaction</li>
            <li><strong>Marketing Consent Records:</strong> Until consent is withdrawn or 3 years of inactivity</li>
            <li><strong>Technical Logs:</strong> 90 days, unless required for fraud investigation or legal proceedings</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">7.3 Data Deletion and Anonymization</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Upon expiry of the retention period or upon User request (subject to legal obligations), Personal Data is securely deleted or anonymized using industry-standard methods. Anonymized data may be retained for statistical analysis and research purposes.
          </p>
        </div>

        {/* Section 8 */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-4">
            8. Data Sharing and Third-Party Management
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Company may share Personal Data with the following categories of third parties:
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">8.1 Financial Intermediaries and Payment Partners</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed mb-4">
            <li>RBI-authorized Payment Aggregators and Payment Gateways</li>
            <li>Partner Banks and Non-Banking Financial Companies (NBFCs)</li>
            <li>National Payments Corporation of India (NPCI)</li>
            <li>Card Networks (Visa, Mastercard, RuPay)</li>
            <li>International payment networks (SWIFT, SEPA) for cross-border transactions</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">8.2 Technology and Service Providers</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed mb-4">
            <li>Cloud service providers (AWS, Google Cloud, Microsoft Azure) for data hosting and storage</li>
            <li>KYC verification agencies (DigiLocker, Aadhaar Authentication Service)</li>
            <li>Fraud detection and cybersecurity firms</li>
            <li>Customer support and call center service providers</li>
            <li>SMS, email, and push notification service providers</li>
            <li>Analytics and business intelligence platforms</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">8.3 Regulatory and Legal Authorities</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed mb-4">
            <li>Reserve Bank of India (RBI)</li>
            <li>Financial Intelligence Unit - India (FIU-IND)</li>
            <li>Income Tax Department and Goods and Services Tax (GST) authorities</li>
            <li>Law enforcement agencies (Police, CBI, ED) upon valid legal requests</li>
            <li>Courts, tribunals, and arbitration forums in legal proceedings</li>
            <li>Data Protection Board of India (once constituted)</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">8.4 Business Transfers and Corporate Transactions</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            In the event of a merger, acquisition, asset sale, or corporate restructuring, Personal Data may be transferred to the successor entity. Users will be notified of such transfers, and the successor entity will be bound by this Policy or an equivalent data protection framework.
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">8.5 Third-Party Data Processing Agreements</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            All third-party service providers are contractually bound by Data Processing Agreements (DPAs) that mandate:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed">
            <li>Processing data only as per the Company&apos;s instructions</li>
            <li>Implementing appropriate security measures</li>
            <li>Maintaining confidentiality and non-disclosure</li>
            <li>Complying with applicable data protection laws</li>
            <li>Notifying the Company of any data breaches</li>
          </ul>
        </div>

        {/* Section 9 */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-4">
            9. Cross-Border Data Transfers
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            For certain services (such as cross-border payments, international card transactions, and cloud hosting), Personal Data may be transferred to countries outside India, including but not limited to the United States, European Union member states, Singapore, and the United Kingdom.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Such transfers are conducted in compliance with:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed mb-4">
            <li>RBI Master Direction on Storage of Payment System Data (ensuring critical payment data is stored in India)</li>
            <li>Standard Contractual Clauses (SCCs) approved by the Data Protection Board of India</li>
            <li>Adequacy decisions recognizing equivalent data protection standards in the recipient country</li>
            <li>Explicit consent from Users for specific cross-border transfers</li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            The Company ensures that all cross-border data transfers are subject to appropriate safeguards, including encryption, access controls, and contractual obligations on the recipient entities.
          </p>
        </div>

        {/* Section 10 */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-4">
            10. Data Security Framework
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Company implements a comprehensive data security framework in accordance with RBI Master Direction on Digital Payment Security Controls, ISO/IEC 27001:2013, and industry best practices.
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">10.1 Technical Security Measures</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed mb-4">
            <li><strong>Encryption:</strong> 256-bit SSL/TLS encryption for data in transit; AES-256 encryption for data at rest</li>
            <li><strong>Tokenization:</strong> Sensitive payment data (card numbers, UPI IDs) is tokenized to prevent exposure</li>
            <li><strong>Multi-Factor Authentication (MFA):</strong> Mandatory for account access and high-value transactions</li>
            <li><strong>Secure APIs:</strong> OAuth 2.0 and JWT-based authentication for API access</li>
            <li><strong>Firewalls and Intrusion Detection Systems (IDS):</strong> Real-time monitoring and threat detection</li>
            <li><strong>Data Masking:</strong> Sensitive fields are masked in logs and user interfaces</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">10.2 Organizational Security Measures</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed mb-4">
            <li><strong>Access Controls:</strong> Role-based access control (RBAC) with principle of least privilege</li>
            <li><strong>Employee Training:</strong> Regular training on data protection, cybersecurity, and privacy best practices</li>
            <li><strong>Background Verification:</strong> Comprehensive background checks for employees handling sensitive data</li>
            <li><strong>Non-Disclosure Agreements (NDAs):</strong> All employees and contractors sign confidentiality agreements</li>
            <li><strong>Incident Response Plan:</strong> Documented procedures for detecting, responding to, and recovering from security incidents</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">10.3 Physical Security Measures</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed mb-4">
            <li>Data centers with 24/7 surveillance, biometric access controls, and security personnel</li>
            <li>Redundant power supply and environmental controls (temperature, humidity)</li>
            <li>Secure disposal of physical media containing Personal Data</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">10.4 Network Security</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed mb-4">
            <li>Virtual Private Networks (VPNs) for remote access</li>
            <li>Network segmentation to isolate sensitive systems</li>
            <li>Regular vulnerability assessments and penetration testing</li>
            <li>DDoS protection and traffic filtering</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">10.5 Application Security</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed mb-4">
            <li>Secure Software Development Lifecycle (SDLC) practices</li>
            <li>Code reviews and static/dynamic application security testing (SAST/DAST)</li>
            <li>Regular security patches and updates</li>
            <li>Input validation and output encoding to prevent injection attacks</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">10.6 Third-Party Security Audits and Certifications</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed mb-4">
            <li>Annual ISO/IEC 27001:2013 certification audits</li>
            <li>PCI-DSS compliance for card payment processing</li>
            <li>CERT-In empaneled security auditors for periodic assessments</li>
            <li>RBI-mandated security audits for payment system participants</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">10.7 Data Backup and Disaster Recovery</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed mb-4">
            <li>Automated daily backups with encryption</li>
            <li>Geographically distributed backup locations within India</li>
            <li>Disaster recovery plan with defined Recovery Time Objective (RTO) and Recovery Point Objective (RPO)</li>
            <li>Regular testing of backup restoration procedures</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">10.8 Logging and Monitoring</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed mb-4">
            <li>Comprehensive logging of access, modifications, and deletions of Personal Data</li>
            <li>Real-time monitoring and alerting for suspicious activities</li>
            <li>Security Information and Event Management (SIEM) systems</li>
            <li>Audit trails maintained for regulatory compliance</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">10.9 Vendor Security Management</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed">
            <li>Due diligence assessments before onboarding third-party vendors</li>
            <li>Contractual security obligations and SLAs</li>
            <li>Periodic security audits of critical vendors</li>
            <li>Vendor risk ratings and continuous monitoring</li>
          </ul>
        </div>

        {/* Section 11 */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-4">
            11. Data Breach Management
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            In the event of a Personal Data breach, the Company will:
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">11.1 Detection and Assessment</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed mb-4">
            <li>Detect and contain the breach immediately upon discovery</li>
            <li>Assess the nature, scope, and impact of the breach</li>
            <li>Identify the categories of Personal Data affected</li>
            <li>Determine the number of affected Data Principals</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">11.2 Notification to Data Principals</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed mb-4">
            <li>Notify affected Users within 72 hours of discovery via email, SMS, or in-app notification</li>
            <li>Provide details of the breach, including the type of data compromised</li>
            <li>Explain the potential consequences and remedial actions taken</li>
            <li>Offer guidance on protective measures (e.g., password reset, credit monitoring)</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">11.3 Notification to Regulatory Authorities</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed mb-4">
            <li>Report the breach to the Data Protection Board of India (once constituted) within the prescribed timeline</li>
            <li>Notify CERT-In (Indian Computer Emergency Response Team) as per IT Act requirements</li>
            <li>Inform RBI and other relevant financial regulators if payment data is compromised</li>
            <li>Cooperate with regulatory investigations and audits</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">11.4 Remedial Actions</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed mb-4">
            <li>Implement immediate measures to prevent further unauthorized access</li>
            <li>Conduct a root cause analysis and forensic investigation</li>
            <li>Strengthen security controls to prevent recurrence</li>
            <li>Provide affected Users with credit monitoring or identity theft protection services (if applicable)</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">11.5 Documentation and Reporting</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed">
            <li>Maintain detailed records of the breach, including timeline, impact, and response actions</li>
            <li>Prepare incident reports for internal review and regulatory submission</li>
            <li>Update the Incident Response Plan based on lessons learned</li>
          </ul>
        </div>

        {/* Section 12 */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-4">
            12. Data Principal Rights
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Under the DPDP Act and applicable laws, Data Principals have the following rights:
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">12.1 Right to Access</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            You have the right to obtain confirmation of whether your Personal Data is being processed and to access such data. You may request:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed mb-4">
            <li>A summary of Personal Data held by the Company</li>
            <li>Details of the purposes of processing</li>
            <li>Categories of Personal Data processed</li>
            <li>Recipients or categories of recipients to whom data has been disclosed</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">12.2 Right to Correction</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            You have the right to request correction of inaccurate or incomplete Personal Data. The Company will update the data within a reasonable timeframe and notify relevant third parties if necessary.
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">12.3 Right to Erasure (Right to be Forgotten)</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            You may request deletion of your Personal Data in the following circumstances:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed mb-4">
            <li>The data is no longer necessary for the purposes for which it was collected</li>
            <li>You withdraw consent (where processing is based on consent)</li>
            <li>The data has been unlawfully processed</li>
          </ul>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            However, the Company may retain data if required by law (e.g., RBI, PMLA, tax regulations) or for legitimate business purposes (e.g., fraud prevention, legal claims).
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">12.4 Right to Data Portability</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            You have the right to receive your Personal Data in a structured, commonly used, and machine-readable format (e.g., CSV, JSON) and to transmit such data to another Data Fiduciary.
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">12.5 Right to Withdraw Consent</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Where processing is based on consent, you have the right to withdraw consent at any time. Withdrawal of consent does not affect the lawfulness of processing conducted prior to withdrawal.
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">12.6 Right to Object</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            You may object to processing of your Personal Data for direct marketing purposes or where processing is based on legitimate interests. The Company will cease such processing unless it can demonstrate compelling legitimate grounds.
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">12.7 Right to Grievance Redressal</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            You have the right to lodge a complaint with the Company&apos;s Grievance Officer or the Data Protection Board of India if you believe your data protection rights have been violated.
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">12.8 Exercising Your Rights</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            To exercise any of the above rights, please contact:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
            <p className="text-gray-700 text-sm font-semibold mb-1">Grievance Officer</p>
            <p className="text-gray-600 text-sm mb-1">Rupeeflow Finance Private Limited</p>
            <p className="text-gray-600 text-sm mb-1">Email: <a href="mailto:grievance@rupeeflow.co" className="text-emerald-600 hover:underline">grievance@rupeeflow.co</a></p>
            <p className="text-gray-600 text-sm">Address: No. 112, AKR Tech Park, Bommanahalli, Bangalore South, Karnataka - 560068, India</p>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            The Company will respond to your request within 30 days of receipt. In case of complex requests, the response time may be extended by an additional 30 days with prior notice.
          </p>
        </div>

        {/* Section 13 */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-4">
            13. Consent Management Framework
          </h2>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">13.1 Types of Consent</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm leading-relaxed mb-4">
            <li><strong>Explicit Consent:</strong> Required for processing Sensitive Personal Data (e.g., biometric data, financial information, health records). Obtained through clear affirmative action (e.g., checkbox, digital signature).</li>
            <li><strong>Implied Consent:</strong> Inferred from User actions (e.g., using the Platform implies consent to process data necessary for service delivery).</li>
            <li><strong>Opt-In Consent:</strong> Required for marketing communications and non-essential data processing. Users must actively opt in.</li>
            <li><strong>Opt-Out Consent:</strong> Users are provided with an option to opt out of certain processing activities (e.g., data sharing with third parties for marketing).</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">13.2 Consent Characteristics</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            All consents obtained by the Company are:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed mb-4">
            <li><strong>Free:</strong> Given voluntarily without coercion or undue influence</li>
            <li><strong>Specific:</strong> Clearly identifies the purpose and scope of data processing</li>
            <li><strong>Informed:</strong> Provided after full disclosure of data processing activities</li>
            <li><strong>Unambiguous:</strong> Expressed through clear affirmative action</li>
            <li><strong>Revocable:</strong> Can be withdrawn at any time with the same ease as it was given</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">13.3 Consent Management Tools</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            The Company provides the following tools for consent management:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed mb-4">
            <li>Consent dashboard in User account settings</li>
            <li>Granular consent options for different processing activities</li>
            <li>One-click consent withdrawal mechanism</li>
            <li>Consent history and audit trail</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">13.4 Consent for Minors</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            The Platform is not intended for use by individuals below 18 years of age. If a User is below 18, consent must be provided by a parent or legal guardian. The Company will verify parental consent through appropriate mechanisms.
          </p>
        </div>

        {/* Section 14 */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-4">
            14. Cookies and Tracking Technologies
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Company uses cookies, web beacons, pixels, and similar tracking technologies to enhance user experience, analyze usage patterns, and deliver personalized content.
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">14.1 Types of Cookies</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm leading-relaxed mb-4">
            <li><strong>Essential Cookies:</strong> Necessary for core functionality (e.g., session management, authentication). Cannot be disabled.</li>
            <li><strong>Performance Cookies:</strong> Collect information about how Users interact with the Platform (e.g., pages visited, time spent). Used for analytics and service improvement.</li>
            <li><strong>Functional Cookies:</strong> Remember User preferences and settings (e.g., language, currency). Enhance user experience.</li>
            <li><strong>Advertising Cookies:</strong> Track User behavior across websites to deliver targeted advertisements. Require explicit consent.</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">14.2 Third-Party Cookies</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            The Platform may use third-party cookies from analytics providers (e.g., Google Analytics), advertising networks, and social media platforms. These third parties have their own privacy policies governing cookie usage.
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">14.3 Managing Cookies</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            You can manage cookie preferences through:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed mb-4">
            <li>Browser settings (most browsers allow you to block or delete cookies)</li>
            <li>Cookie consent banner on the Platform</li>
            <li>Opt-out tools provided by advertising networks (e.g., NAI, DAA)</li>
          </ul>
          <p className="text-gray-600 text-sm leading-relaxed">
            Note: Disabling certain cookies may affect the functionality and user experience of the Platform.
          </p>
        </div>

        {/* Section 15 */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-4">
            15. Data Localisation and Regulatory Compliance
          </h2>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">15.1 RBI Data Localisation Requirements</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            In compliance with RBI Master Direction on Storage of Payment System Data (April 6, 2018), the Company ensures that all payment system data (including transaction details, customer data, and payment credentials) is stored exclusively in data centers located within India.
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">15.2 Compliance with Financial Regulations</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            The Company complies with the following financial regulations:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed mb-4">
            <li>Payment and Settlement Systems Act, 2007</li>
            <li>RBI Master Directions on Prepaid Payment Instruments (PPIs)</li>
            <li>RBI Guidelines on Issuance and Operation of Prepaid Payment Instruments</li>
            <li>RBI Master Direction on Know Your Customer (KYC)</li>
            <li>Prevention of Money Laundering (Maintenance of Records) Rules, 2005</li>
            <li>Foreign Exchange Management (Current Account Transactions) Rules, 2000</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">15.3 Compliance with Tax Laws</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            The Company complies with:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed mb-4">
            <li>Income Tax Act, 1961 (including TDS provisions)</li>
            <li>Goods and Services Tax Act, 2017</li>
            <li>Reporting obligations under the Black Money (Undisclosed Foreign Income and Assets) and Imposition of Tax Act, 2015</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">15.4 Compliance with Cybersecurity Regulations</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            The Company adheres to:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed">
            <li>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</li>
            <li>CERT-In Directions for Safe & Trusted Internet, 2022</li>
            <li>RBI Master Direction on Cyber Security Framework for Payment System Operators</li>
          </ul>
        </div>

        {/* Section 16 */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-4">
            16. Grievance Redressal Mechanism
          </h2>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">16.1 Grievance Officer</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            In accordance with the IT Act and DPDP Act, the Company has appointed a Grievance Officer to address User complaints and grievances related to data protection and privacy.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
            <p className="text-gray-700 text-sm font-semibold mb-1">Grievance Officer</p>
            <p className="text-gray-600 text-sm mb-1">Name: [To be appointed]</p>
            <p className="text-gray-600 text-sm mb-1">Designation: Data Protection Officer</p>
            <p className="text-gray-600 text-sm mb-1">Email: <a href="mailto:grievance@rupeeflow.co" className="text-emerald-600 hover:underline">grievance@rupeeflow.co</a></p>
            <p className="text-gray-600 text-sm mb-1">Phone: +91 [To be updated]</p>
            <p className="text-gray-600 text-sm">Address: No. 112, AKR Tech Park, Bommanahalli, Bangalore South, Karnataka - 560068, India</p>
          </div>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">16.2 Grievance Redressal Process</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm leading-relaxed mb-4">
            <li><strong>Step 1:</strong> Submit a written complaint to the Grievance Officer via email or postal mail</li>
            <li><strong>Step 2:</strong> The Grievance Officer will acknowledge receipt within 24 hours</li>
            <li><strong>Step 3:</strong> The complaint will be investigated and resolved within 30 working days</li>
            <li><strong>Step 4:</strong> If the resolution is unsatisfactory, you may escalate to the Data Protection Board of India or relevant regulatory authority</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">16.3 Escalation to Regulatory Authorities</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            If your grievance is not resolved satisfactorily, you may lodge a complaint with:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed">
            <li><strong>Data Protection Board of India:</strong> (Once constituted under DPDP Act)</li>
            <li><strong>Reserve Bank of India:</strong> For payment-related grievances - <a href="https://www.rbi.org.in" className="text-emerald-600 hover:underline">www.rbi.org.in</a></li>
            <li><strong>NPCI Ombudsman:</strong> For UPI and payment system grievances - <a href="mailto:ombudsman@npci.org.in" className="text-emerald-600 hover:underline">ombudsman@npci.org.in</a></li>
            <li><strong>CERT-In:</strong> For cybersecurity incidents - <a href="https://www.cert-in.org.in" className="text-emerald-600 hover:underline">www.cert-in.org.in</a></li>
          </ul>
        </div>

        {/* Section 17 */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-4">
            17. Children&apos;s Data Protection
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Platform is not intended for use by individuals below 18 years of age. The Company does not knowingly collect, process, or solicit Personal Data from children.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            If a parent or guardian becomes aware that their child has provided Personal Data without parental consent, they should contact the Grievance Officer immediately. The Company will take prompt steps to delete such data from its systems.
          </p>
          <p className="text-gray-600 leading-relaxed">
            In cases where services are provided to minors (with parental consent), the Company will implement additional safeguards, including:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed">
            <li>Verifiable parental consent mechanisms</li>
            <li>Enhanced data protection measures</li>
            <li>Restrictions on data sharing and marketing communications</li>
            <li>Parental access to and control over the child&apos;s data</li>
          </ul>
        </div>

        {/* Section 18 */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-4">
            18. Limitation of Liability
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            While the Company implements robust security measures to protect Personal Data, no system is completely secure. The Company shall not be liable for:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed mb-4">
            <li>Unauthorized access or data breaches resulting from circumstances beyond the Company&apos;s reasonable control (e.g., force majeure events, sophisticated cyberattacks)</li>
            <li>Data breaches caused by User negligence (e.g., sharing passwords, falling victim to phishing attacks)</li>
            <li>Actions of third-party service providers, provided the Company has conducted due diligence and entered into appropriate contractual safeguards</li>
            <li>Data processing conducted by Merchants or other Data Fiduciaries for whom the Company acts as a Data Processor</li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            The Company&apos;s liability for any data protection violation shall be limited to the extent permitted by applicable law.
          </p>
        </div>

        {/* Section 19 */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-4">
            19. Policy Review and Updates
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Company reserves the right to update, modify, or amend this Privacy Policy at any time to reflect changes in:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed mb-4">
            <li>Legal and regulatory requirements</li>
            <li>Business practices and service offerings</li>
            <li>Technology and security standards</li>
            <li>User feedback and industry best practices</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            Material changes to this Policy will be communicated to Users through:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed mb-4">
            <li>Email notification to the registered email address</li>
            <li>In-app notification or banner on the Platform</li>
            <li>Prominent notice on the Company&apos;s website</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            Users will be provided with at least 15 days&apos; notice before the updated Policy takes effect. Continued use of the Platform after the effective date constitutes acceptance of the updated Policy.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The Company will maintain an archive of previous versions of this Policy for reference and audit purposes.
          </p>
        </div>

        {/* Section 20 */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-4">
            20. Governing Law and Jurisdiction
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            This Privacy Policy shall be governed by and construed in accordance with the laws of India, including but not limited to:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed mb-4">
            <li>The Digital Personal Data Protection Act, 2023</li>
            <li>The Information Technology Act, 2000</li>
            <li>The Indian Contract Act, 1872</li>
            <li>Applicable regulations issued by RBI, NPCI, and other regulatory authorities</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            Any disputes arising out of or in connection with this Policy shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka, India.
          </p>
          <p className="text-gray-600 leading-relaxed">
            For international Users, this Policy shall be interpreted in accordance with Indian law, and any conflicts of law provisions shall not apply.
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mt-10">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Contact Information</h2>
          <p className="text-gray-700 text-sm font-semibold mb-1">Rupeeflow Finance Private Limited</p>
          <p className="text-gray-600 text-sm mb-1">CIN: U64990KA2025PTC209485</p>
          <p className="text-gray-600 text-sm mb-3">Registered Office: No. 112, AKR Tech Park, Bommanahalli, Bangalore South, Karnataka - 560068, India</p>
          
          <p className="text-gray-600 text-sm mb-1">
            <strong>General Inquiries:</strong>{' '}
            <a href="mailto:support@rupeeflow.co" className="text-emerald-600 hover:underline">support@rupeeflow.co</a>
          </p>
          <p className="text-gray-600 text-sm mb-1">
            <strong>Privacy Inquiries:</strong>{' '}
            <a href="mailto:privacy@rupeeflow.co" className="text-emerald-600 hover:underline">privacy@rupeeflow.co</a>
          </p>
          <p className="text-gray-600 text-sm mb-3">
            <strong>Grievance Officer:</strong>{' '}
            <a href="mailto:grievance@rupeeflow.co" className="text-emerald-600 hover:underline">grievance@rupeeflow.co</a>
          </p>

          <p className="text-gray-600 text-sm mb-1">
            <strong>Website:</strong>{' '}
            <a href="https://www.rupeeflow.co" className="text-emerald-600 hover:underline">www.rupeeflow.co</a>
          </p>

          <p className="text-gray-400 text-xs mt-4">
            This Privacy Policy is effective as of January 1, 2025. Last updated: January 1, 2025.
          </p>
          <p className="text-gray-400 text-xs mt-2">
            We acknowledge receipt of grievances within 24 hours and resolve them within 30 working days.
          </p>
        </div>

      </div>
    </section>
  )
}
