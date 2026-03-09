export default function RefundContent() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">

        {/* Intro */}
        <p className="text-gray-600 leading-relaxed mb-10">
          This Refund and Cancellation Policy (&quot;Policy&quot;) outlines the terms and conditions for refunds, cancellations, reversals, and chargebacks related to services provided by <strong>Rupeeflow Finance Private Limited</strong>. This Policy applies to all payment transactions processed through Cross-Border UPI Gateway, Offline-First UPI for Bharat, Green Payment Gateway (Eco-Pay), and Smart Wallet for Gig Workers.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          This Policy complies with Reserve Bank of India (RBI) guidelines, Consumer Protection Act 2019, and Payment and Settlement Systems Act 2007.
        </p>

        {/* Section 1 */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-4">
            1. General Principles
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm leading-relaxed">
            <li><strong>Our Commitment:</strong> Rupeeflow is committed to fair, transparent, and timely resolution of refund requests in accordance with applicable regulations.</li>
            <li><strong>Transaction Finality:</strong> Once a payment is successfully completed and confirmed by both parties, it is generally considered final and irreversible except as outlined in this Policy.</li>
            <li><strong>Service Fees:</strong> Transaction fees, processing charges, and subscription fees are generally non-refundable unless specifically stated otherwise or required by law.</li>
            <li><strong>Merchant Responsibility:</strong> For product or service disputes, customers must first contact the merchant directly. Rupeeflow acts as a payment facilitator and is not responsible for quality, delivery, or fulfillment issues.</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-4">
            2. Refund Eligibility Criteria
          </h2>
          <p className="text-gray-600 text-sm mb-4">Refunds may be issued in the following circumstances:</p>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">2.1 Failed Transactions</h3>
          <p className="text-gray-600 text-sm mb-2">When amount is debited but transaction fails due to:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed">
            <li>Payment gateway timeout or technical error</li>
            <li>Network connectivity issues during processing</li>
            <li>Bank system downtime or maintenance</li>
            <li>Incorrect merchant configuration</li>
          </ul>
          <p className="text-gray-600 text-sm mt-2"><strong>Refund Timeline:</strong> 5–7 business days automatically to the source account</p>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">2.2 Duplicate Transactions</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed">
            <li>Duplicate charges due to system errors</li>
            <li>Multiple payment confirmations for the same order</li>
          </ul>
          <p className="text-gray-600 text-sm mt-2"><strong>Action Required:</strong> Report within 7 days with transaction IDs. <strong>Refund Timeline:</strong> 7–10 business days after verification.</p>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">2.3 Unauthorized Transactions</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed">
            <li>Fraudulent use of payment credentials</li>
            <li>Unauthorized access to account</li>
            <li>Transaction made after reporting loss/theft of device</li>
          </ul>
          <p className="text-gray-600 text-sm mt-2"><strong>Action Required:</strong> Report immediately within 24 hours. <strong>Refund Timeline:</strong> Subject to investigation; up to 90 days.</p>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">2.4 Merchant Cancellation</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed">
            <li>Product out of stock or service cannot be fulfilled</li>
            <li>Business closure or operational issues</li>
          </ul>
          <p className="text-gray-600 text-sm mt-2"><strong>Action Required:</strong> Merchant must initiate refund. <strong>Refund Timeline:</strong> 7–14 business days as per merchant policy.</p>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">2.5 Technical Errors by Rupeeflow</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed">
            <li>Incorrect currency conversion rates applied</li>
            <li>Wrong transaction amount processed</li>
            <li>System bugs causing unintended charges</li>
          </ul>
          <p className="text-gray-600 text-sm mt-2"><strong>Refund Timeline:</strong> 3–5 business days after error confirmation.</p>
        </div>

        {/* Section 3 */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-4">
            3. Non-Refundable Scenarios
          </h2>
          <p className="text-gray-600 text-sm mb-4">Refunds will <strong>not</strong> be provided in the following cases:</p>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">3.1 Service Fees and Charges</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed">
            <li>Transaction processing fees (1.5%–3% based on service)</li>
            <li>Currency conversion charges for cross-border payments</li>
            <li>Monthly subscription fees for premium features</li>
            <li>Hardware device rental charges for offline UPI POS</li>
            <li>Late payment penalties and interest charges</li>
          </ul>
          <p className="text-gray-600 text-sm mt-2 italic">Exception: Fees may be refunded if Rupeeflow fails to deliver promised services due to technical issues on our end.</p>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">3.2 Successful Transactions</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed">
            <li>Completed transactions where goods/services were delivered</li>
            <li>Payments made to the correct merchant as intended</li>
            <li>Transactions properly authorized by the account holder</li>
            <li>Intentional peer-to-peer transfers</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">3.3 User Error</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed">
            <li>Payments sent to wrong UPI ID or account number</li>
            <li>Incorrect amount entered by user</li>
            <li>Transactions completed to scam or fake merchants</li>
            <li>Failure to verify recipient details before payment</li>
          </ul>
          <p className="text-gray-600 text-sm mt-2">Rupeeflow cannot reverse user-initiated errors; users must contact recipients directly.</p>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">3.4 Policy Violations</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed">
            <li>Refund requests for transactions violating our Terms and Conditions</li>
            <li>Fraudulent refund claims or abuse of the refund process</li>
            <li>Chargebacks filed without first contacting Rupeeflow</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-4">
            4. Product-Specific Refund Policies
          </h2>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">4.1 Cross-Border UPI Gateway</h3>
          <p className="text-gray-600 text-sm mb-1 font-medium">Eligible for Refund:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm mb-3 leading-relaxed">
            <li>Failed international payment due to gateway error</li>
            <li>Incorrect currency conversion applied by our system</li>
            <li>Payment received but not credited to UPI account within 3 business days</li>
          </ul>
          <p className="text-gray-600 text-sm mb-1 font-medium">Not Eligible:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm mb-3 leading-relaxed">
            <li>Forex fluctuations or exchange rate changes after initiation</li>
            <li>Delays caused by international banking networks (SWIFT, correspondent banks)</li>
            <li>FEMA compliance rejections due to incomplete documentation</li>
          </ul>
          <p className="text-gray-600 text-sm italic">International refunds may take 15–30 business days due to cross-border banking procedures.</p>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">4.2 Offline-First UPI for Bharat</h3>
          <p className="text-gray-600 text-sm mb-1 font-medium">Eligible for Refund:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm mb-3 leading-relaxed">
            <li>Payment debited but not received by merchant due to network sync failure</li>
            <li>Double debit during offline-to-online reconciliation</li>
            <li>Device malfunction causing incorrect amount charged</li>
          </ul>
          <p className="text-gray-600 text-sm mb-1 font-medium">Hardware Device Issues:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed">
            <li>Faulty POS device: Replacement within 3 business days (no refund of rental fees)</li>
            <li>Device return on service termination: Security deposit refunded within 15 days</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">4.3 Green Payment Gateway (Eco-Pay)</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm mb-3 leading-relaxed">
            <li>Eligible: Payment successful but eco-points not awarded; tree planting certificate not issued within 60 days</li>
            <li>Not Eligible: Eco-points or carbon credits (non-monetary rewards); they expire after 12 months and have no cash value</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">4.4 Smart Wallet for Gig Workers</h3>
          <p className="text-gray-600 text-sm mb-1 font-medium">Eligible for Refund:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm mb-3 leading-relaxed">
            <li>Failed wallet top-up where money debited but not added to balance</li>
            <li>Accidental wallet reload (request within 24 hours before usage)</li>
            <li>Auto-debit subscription error charging incorrect amount</li>
          </ul>
          <p className="text-gray-600 text-sm mb-1 font-medium">Not Eligible:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed">
            <li>Completed peer-to-peer wallet transfers</li>
            <li>Bill payments successfully processed to billers</li>
            <li>Subscription fees after service usage</li>
          </ul>
        </div>

        {/* Section 5 */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-4">
            5. How to Request a Refund
          </h2>

          <div className="space-y-5">
            <div>
              <p className="text-gray-800 text-sm font-semibold mb-1">Step 1 — Identify the Transaction</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed">
                <li>Gather transaction ID, date, amount, and merchant details</li>
                <li>Check transaction status in app/website: Pending, Success, or Failed</li>
                <li>Review email/SMS confirmations</li>
              </ul>
            </div>

            <div>
              <p className="text-gray-800 text-sm font-semibold mb-1">Step 2 — Contact the Appropriate Party</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed">
                <li>Merchant issues: Contact the merchant&apos;s customer service first</li>
                <li>Technical issues: Contact Rupeeflow support</li>
                <li>Fraudulent transactions: Report immediately to <a href="mailto:fraud@rupeeflow.in" className="text-emerald-600 hover:underline">fraud@rupeeflow.in</a></li>
              </ul>
            </div>

            <div>
              <p className="text-gray-800 text-sm font-semibold mb-1">Step 3 — Submit Your Refund Request</p>
              <p className="text-gray-600 text-sm mb-1">Required information:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm mb-3 leading-relaxed">
                <li>Full name and registered mobile number/email</li>
                <li>Transaction ID or UPI reference number</li>
                <li>Date, time, and amount of transaction</li>
                <li>Reason for refund request</li>
                <li>Supporting documents — screenshots, receipts, bank statements</li>
              </ul>
              <p className="text-gray-600 text-sm mb-1">Submission methods:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed">
                <li>Email: <a href="mailto:refunds@rupeeflow.in" className="text-emerald-600 hover:underline">refunds@rupeeflow.in</a></li>
                <li>Phone: <a href="tel:+917411374848" className="text-emerald-600 hover:underline">+91 7411374848</a></li>
                <li>In-app: Help → Transactions → Select Transaction → Request Refund</li>
              </ul>
            </div>

            <div>
              <p className="text-gray-800 text-sm font-semibold mb-1">Step 4 — Investigation &amp; Resolution</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed">
                <li>Acknowledgment within 24 hours</li>
                <li>Investigation period: 7–15 business days for simple cases; up to 90 days for complex fraud cases</li>
                <li>Refund approved: Processed to original payment source</li>
                <li>Refund denied: Detailed explanation provided with appeal option</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 6 */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-4">
            6. Refund Methods and Timelines
          </h2>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">6.1 Refund Methods</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed">
            <li>UPI: Refunded to original UPI ID/bank account</li>
            <li>Debit/Credit Card: Refunded to the same card</li>
            <li>Net Banking: Refunded to source bank account</li>
            <li>Wallet: Credited back to wallet balance</li>
            <li>If original source is unavailable (card expired, account closed): Refund via NEFT/IMPS to registered bank account</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">6.2 Processing Timelines</h3>
          <div className="overflow-x-auto mt-2">
            <table className="w-full text-sm text-gray-600 border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-gray-50 text-gray-800 text-xs font-semibold uppercase">
                <tr>
                  <th className="text-left px-4 py-3 border-b border-gray-200">Scenario</th>
                  <th className="text-left px-4 py-3 border-b border-gray-200">Investigation</th>
                  <th className="text-left px-4 py-3 border-b border-gray-200">Refund Processing</th>
                  <th className="text-left px-4 py-3 border-b border-gray-200">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ['Failed Transaction (Auto)', 'Immediate', '5–7 business days', '5–7 days'],
                  ['Duplicate Charge', '3–5 business days', '5–7 business days', '8–12 days'],
                  ['Merchant Cancellation', 'Merchant dependent', '7–14 business days', '10–20 days'],
                  ['Technical Error', '1–3 business days', '3–5 business days', '4–8 days'],
                  ['Fraud Investigation', '30–90 days', '5–7 business days', '35–97 days'],
                  ['Cross-Border Refund', '10–15 business days', '15–30 business days', '25–45 days'],
                ].map(([scenario, inv, proc, total]) => (
                  <tr key={scenario} className="hover:bg-gray-50">
                    <td className="px-4 py-3">{scenario}</td>
                    <td className="px-4 py-3">{inv}</td>
                    <td className="px-4 py-3">{proc}</td>
                    <td className="px-4 py-3 font-medium text-emerald-700">{total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs mt-2">Note: Bank processing times may add 2–5 additional business days beyond our control.</p>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">6.3 Track Your Refund</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed">
            <li>In-app: Profile → Refund History</li>
            <li>Email notifications at each stage: Received, Under Review, Approved, Processed, Completed</li>
            <li>SMS alerts for refund credits</li>
          </ul>
        </div>

        {/* Section 7 */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-4">
            7. Chargebacks and Disputes
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm leading-relaxed">
            <li>A chargeback is a reversal of a card transaction initiated by the cardholder&apos;s bank, bypassing the merchant&apos;s refund process.</li>
            <li>Customers must contact Rupeeflow before filing chargebacks with their bank.</li>
            <li>Unjustified chargebacks may result in account suspension.</li>
            <li>Chargeback fees of ₹250–₹1,000 may be charged for invalid disputes.</li>
            <li>Escalate unresolved issues to <a href="mailto:grievances@rupeeflow.in" className="text-emerald-600 hover:underline">grievances@rupeeflow.in</a></li>
            <li>Refer to the Banking Ombudsman if no resolution is reached within 30 days.</li>
          </ul>
        </div>

        {/* Section 8 */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-4">
            8. Cancellation Policy
          </h2>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">8.1 Transaction Cancellation</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed">
            <li>UPI transactions cannot be cancelled once initiated (irreversible)</li>
            <li>Pending payments may be cancelled before merchant confirmation</li>
            <li>Scheduled payments can be cancelled before the execution date</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">8.2 Subscription Cancellation</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed">
            <li>Cancel anytime through app settings</li>
            <li>No refund for the current billing cycle</li>
            <li>Access continues until end of paid period</li>
            <li>No charges for subsequent cycles after cancellation</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">8.3 Account Closure</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed">
            <li>Submit account closure request via email</li>
            <li>Settle all pending dues and transactions</li>
            <li>Withdraw wallet balance before closure</li>
            <li>Cancellation effective within 7–15 business days</li>
          </ul>
        </div>

        {/* Section 9 */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-4">
            9. Fraud Prevention and Liability
          </h2>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">9.1 Customer Liability for Unauthorized Transactions</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm leading-relaxed">
            <li><strong>Reported within 24 hours:</strong> Zero liability for customer (full refund after verification)</li>
            <li><strong>Reported within 24–72 hours:</strong> Customer liable up to ₹5,000 or actual transaction value (whichever is lower)</li>
            <li><strong>Reported after 72 hours:</strong> Customer liability as per RBI guidelines and investigation outcome</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-5 mb-2">9.2 Preventive Measures</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm leading-relaxed">
            <li>Two-factor authentication mandatory</li>
            <li>Transaction alerts via SMS/email</li>
            <li>Spending limits and velocity checks</li>
            <li>AI-based fraud detection systems</li>
          </ul>
        </div>

        {/* Section 10 */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-4">
            10. Exceptions, Force Majeure, and Amendments
          </h2>
          <p className="text-gray-600 text-sm mb-3">Refund timelines may be extended due to:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm mb-4 leading-relaxed">
            <li>Natural disasters, pandemics, or wars</li>
            <li>Government regulations or emergency orders</li>
            <li>Banking system outages or public holidays</li>
            <li>Technical failures beyond Rupeeflow&apos;s control</li>
            <li>International banking delays or sanctions</li>
          </ul>
          <p className="text-gray-600 text-sm leading-relaxed">
            We reserve the right to modify this Refund Policy at any time. Changes will be published on our website 15 days before the effective date, notified via email to registered users, and highlighted in app notifications.
          </p>
        </div>

        {/* Contact Box */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mt-10">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Grievance Redressal</h2>

          <div className="grid sm:grid-cols-3 gap-6">
            <div>
              <p className="text-gray-800 text-sm font-semibold mb-1">Level 1 — Customer Support</p>
              <p className="text-gray-600 text-sm">
                <a href="mailto:support@rupeeflow.co" className="text-emerald-600 hover:underline">support@rupeeflow.co</a><br />
                <a href="mailto:refunds@rupeeflow.co" className="text-emerald-600 hover:underline">refunds@rupeeflow.co</a><br />
                {/* <a href="tel:+917411374848" className="text-emerald-600 hover:underline">+91 7411374848</a> (24/7)<br /> */}
                Response: 24–48 hours
              </p>
            </div>
            <div>
              <p className="text-gray-800 text-sm font-semibold mb-1">Level 2 — Grievance Officer</p>
              <p className="text-gray-600 text-sm">
                <a href="mailto:grievances@rupeeflow.co" className="text-emerald-600 hover:underline">grievances@rupeeflow.co</a><br />
                Resolution: 15–30 days
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-5 pt-4">
            <p className="text-gray-700 text-sm font-semibold mb-1">Rupeeflow Finance Private Limited</p>
            <p className="text-gray-600 text-sm mb-1">Registered Office: No. 112, AKR Tech Park, Bommanahalli, Bangalore South, Karnataka — 560068, India</p>
            <p className="text-gray-600 text-sm">Website: www.rupeeflow.co | Working Hours: 24/7 (Email &amp; Phone)</p>
          </div>

          <p className="text-gray-400 text-xs mt-4">
            By using Rupeeflow services, you acknowledge that you have read and understood this Refund and Cancellation Policy. For the latest version, visit www.rupeeflow.in/refund-policy
          </p>
        </div>

      </div>
    </section>
  )
}
