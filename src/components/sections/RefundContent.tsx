export default function RefundContent() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">

        {/* Company Info Header */}
        <div className="mb-10 pb-6 border-b border-gray-200">
          <p className="text-gray-700 text-sm leading-relaxed">
            <strong>Rupeeflow Finance Private Limited</strong> | CIN: U64990KA2025PTC209485<br />
            No. 112 AKR Tech Park, Bommanahalli, Bangalore 560068<br />
            Email: <a href="mailto:support@rupeeflow.co" className="text-emerald-600 hover:underline">support@rupeeflow.co</a>
          </p>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Refund, Cancellation and Chargeback Policy
        </h1>
        <p className="text-gray-600 text-sm italic mb-10">
          (Applicable to Transactions Facilitated via Rupeeflow Platform)
        </p>

        {/* Section 1: Introduction */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-4">
            1. INTRODUCTION
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            This Refund and Cancellation Policy (&quot;Policy&quot;) sets out the terms and conditions governing cancellations, refunds, reversals, and related processes in respect of Transactions facilitated through the technology platform (&quot;Platform&quot;) provided by Rupeeflow Finance Private Limited (&quot;Company&quot;).
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Company operates solely as a Technology Service Provider (TSP) and provides technology infrastructure to enable Merchants to access payment processing services offered by a Partner Bank or an RBI-authorised Payment Aggregator (&quot;PA&quot;). The Company does not, at any stage, collect, receive, hold, pool, or process Customer funds.
          </p>
          <p className="text-gray-600 leading-relaxed">
            All payment processing, settlement, refund execution, and related financial operations are undertaken exclusively by the Partner Bank and/or Payment Aggregator in accordance with applicable laws and regulatory guidelines.
          </p>
        </div>

        {/* Section 2: Applicability */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-4">
            2. APPLICABILITY OF POLICY
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            This Policy shall apply to all transactions facilitated through the Platform, including, without limitation, (i) all Customers making payments to Merchants using the Platform, (ii) all Merchants onboarded or facilitated by the Company, and (iii) all Transactions processed through the infrastructure of the Partner Bank and/or Payment Aggregator.
          </p>
          <p className="text-gray-600 leading-relaxed">
            For the avoidance of doubt, this Policy governs only the procedural aspects of refunds and cancellations in relation to the use of the Platform and shall not, in any manner, amend, modify, or override the contractual terms and conditions separately agreed between (a) the Merchant and the Customer, or (b) the Merchant and the Partner Bank and/or Payment Aggregator.
          </p>
        </div>

        {/* Section 3: Role and Responsibility */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-4">
            3. ROLE AND RESPONSIBILITY CLARIFICATION
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Parties acknowledge and agree that the roles and responsibilities in relation to refunds and cancellations are allocated as follows:
          </p>
          <div className="space-y-4">
            <div className="bg-gray-50 border-l-4 border-emerald-500 p-4 rounded-r-lg">
              <p className="text-gray-700 font-semibold mb-2">The Company</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Acts solely as a technology intermediary and does not participate in payment processing or fund settlement. The Company does not initiate, approve, process, or execute refunds and shall not be responsible for any financial liability arising therefrom.
              </p>
            </div>
            <div className="bg-gray-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-gray-700 font-semibold mb-2">The Merchant</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Is solely responsible for the provision of goods and/or services to Customers and shall have the exclusive authority and responsibility to determine refund eligibility, approve refund requests, and initiate refund instructions.
              </p>
            </div>
            <div className="bg-gray-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
              <p className="text-gray-700 font-semibold mb-2">The Partner Bank and/or Payment Aggregator</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Is solely responsible for processing refund instructions received from the Merchant and for crediting the applicable amount to the Customer&apos;s original payment instrument.
              </p>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed mt-4">
            Accordingly, all refund-related liabilities shall rest exclusively with the Merchant, and the Company shall have no liability in respect of refund processing, delays, failures, or disputes.
          </p>
        </div>

        {/* Section 4: Cancellation */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-4">
            4. CANCELLATION OF TRANSACTIONS
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600 leading-relaxed">
            <li>A Customer may request cancellation of an order or service directly with the Merchant, subject to the Merchant&apos;s applicable cancellation terms and conditions.</li>
            <li>The acceptance or rejection of any cancellation request shall be at the sole discretion of the Merchant, taking into account the nature of the goods or services, stage of fulfilment, and applicable policies.</li>
            <li>It is clarified that once a Transaction has been successfully authorised and processed through the Partner Bank or Payment Aggregator, such Transaction cannot be reversed automatically and any monetary reversal shall be effected only through a refund process initiated by the Merchant.</li>
            <li>The Company shall have no authority to cancel any Transaction or to reverse any payment.</li>
          </ul>
        </div>

        {/* Section 5: Refund Eligibility */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-4">
            5. REFUND ELIGIBILITY
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600 leading-relaxed">
            <li>Refunds may be initiated by the Merchant in circumstances including, but not limited to, cancellation of orders, non-delivery of goods or services, defective or unsatisfactory products, duplicate transactions, or erroneous charges.</li>
            <li>The determination of refund eligibility shall be made solely by the Merchant in accordance with its internal policies and applicable laws. The Company does not evaluate or determine refund eligibility.</li>
            <li>The Merchant shall ensure that its refund terms are clearly communicated to Customers prior to completion of any Transaction.</li>
          </ul>
        </div>

        {/* Section 6: Refund Initiation */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-4">
            6. REFUND INITIATION AND PROCESSING
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600 leading-relaxed">
            <li>All refunds shall be initiated by the Merchant either through the Platform interface, where such functionality is made available, or directly through the systems of the Partner Bank or Payment Aggregator.</li>
            <li>Upon initiation of a refund request, the same shall be transmitted to the Partner Bank or Payment Aggregator for processing. The Company&apos;s role in this process is limited to facilitating the transmission of such requests and providing relevant technological support.</li>
            <li>The Company does not process, approve, or execute refunds and shall not be responsible for any delay, error, or failure in refund processing.</li>
          </ul>
        </div>

        {/* Section 7: Refund Timelines */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-4">
            7. REFUND TIMELINES
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Refunds shall be processed by the Partner Bank or Payment Aggregator in accordance with applicable regulatory requirements, card network rules, and internal processing timelines.
          </p>
          <p className="text-gray-600 leading-relaxed mb-3">
            <strong>Indicative timelines for refund processing are as follows:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 leading-relaxed mb-4">
            <li><strong>Unified Payments Interface (UPI):</strong> typically within two (2) to five (5) Business Days</li>
            <li><strong>Credit and Debit Cards:</strong> typically within five (5) to seven (7) Business Days</li>
            <li><strong>Net Banking:</strong> typically within three (3) to seven (7) Business Days</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            The actual credit of funds to the Customer&apos;s account is subject to the processing timelines of the issuing bank or financial institution and may vary accordingly.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The Merchant shall appropriately inform Customers that refund timelines are indicative in nature and subject to banking system dependencies. The Company does not guarantee any specific refund timeline.
          </p>
        </div>

        {/* Section 8: Mode of Refund */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-4">
            8. MODE OF REFUND
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600 leading-relaxed">
            <li>Refunds shall ordinarily be processed to the original payment method used by the Customer at the time of the Transaction.</li>
            <li>Any deviation from the original payment method shall be subject to applicable regulatory guidelines and the policies of the Partner Bank or Payment Aggregator.</li>
            <li>The Company shall not process or facilitate any cash refunds.</li>
          </ul>
        </div>

        {/* Section 9: Failed and Duplicate Transactions */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-4">
            9. FAILED AND DUPLICATE TRANSACTIONS
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600 leading-relaxed">
            <li>In cases where a Transaction fails but the Customer&apos;s account is debited, the reversal of funds shall be processed automatically by the banking system in accordance with applicable regulations.</li>
            <li>In the case of duplicate or excess payments, the Merchant shall verify the transaction details and initiate a refund for the excess amount.</li>
            <li>The Company shall not be liable for delays or failures in reversal or refund arising from banking system processes or third-party dependencies.</li>
          </ul>
        </div>

        {/* Section 10: Chargebacks */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-4">
            10. CHARGEBACKS AND DISPUTES
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600 leading-relaxed">
            <li>Customers may raise disputes or initiate chargebacks through their issuing bank. Such chargebacks shall be governed by the rules and regulations of the relevant card network or payment system.</li>
            <li>The Merchant shall be solely responsible for handling chargebacks, including submission of supporting documentation and bearing any financial liability arising therefrom.</li>
            <li>The Partner Bank or Payment Aggregator may debit the Merchant&apos;s account in respect of chargeback amounts in accordance with their agreement.</li>
            <li>The Company&apos;s role shall be limited to facilitating communication and shall not be liable for any chargeback-related losses.</li>
          </ul>
        </div>

        {/* Section 11: Non-Refundable */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-4">
            11. NON-REFUNDABLE TRANSACTIONS
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600 leading-relaxed">
            <li>Refunds may not be processed in circumstances where services have been fully rendered, digital goods have been consumed, or where refund requests are found to be fraudulent or in violation of the Merchant&apos;s terms.</li>
            <li>The determination of non-refundable cases shall be made by the Merchant in accordance with applicable laws.</li>
          </ul>
        </div>

        {/* Section 12: Grievance Redressal */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-4">
            12. CUSTOMER GRIEVANCE REDRESSAL
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600 leading-relaxed">
            <li>Customers shall address all refund and cancellation requests directly to the Merchant.</li>
            <li>The Merchant shall establish and maintain an appropriate grievance redressal mechanism and resolve complaints within reasonable timelines.</li>
            <li>For issues relating to payment processing, Customers may approach the grievance redressal mechanism of the Partner Bank or Payment Aggregator.</li>
            <li>The Company may assist in directing queries to the appropriate party but shall not be responsible for resolution of such grievances.</li>
          </ul>
        </div>

        {/* Section 13: Regulatory Compliance */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-4">
            13. REGULATORY COMPLIANCE
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600 leading-relaxed">
            <li>This Policy is framed in accordance with applicable laws and regulatory guidelines, including those issued by the Reserve Bank of India.</li>
            <li>The Merchant shall ensure compliance with all applicable legal and regulatory requirements, including anti-money laundering and fraud prevention obligations.</li>
            <li>Refund mechanisms shall not be used for any unlawful or prohibited activities.</li>
          </ul>
        </div>

        {/* Section 14: Limitation of Liability */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-4">
            14. LIMITATION OF LIABILITY
          </h2>
          <p className="text-gray-600 leading-relaxed">
            To the maximum extent permitted under applicable law, the Company shall not be liable for any losses, damages, or claims arising out of or in connection with refund processing, including but not limited to delays, non-processing, incorrect refunds, or disputes between Customers and Merchants.
          </p>
        </div>

        {/* Section 15: Amendment */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-4">
            15. AMENDMENT OF POLICY
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The Company reserves the right to amend or modify this Policy at any time. Any such changes shall be effective upon publication on the Platform or Company website.
          </p>
        </div>

        {/* Section 16: Contact Information */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4 mb-4">
            16. CONTACT INFORMATION
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            For queries relating to the Platform, Customers and Merchants may contact:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <p className="text-gray-700 font-semibold mb-2">Rupeeflow Finance Private Limited</p>
            <p className="text-gray-600 text-sm mb-1">
              Email: <a href="mailto:support@rupeeflow.co" className="text-emerald-600 hover:underline">support@rupeeflow.co</a>
            </p>
            <p className="text-gray-600 text-sm mb-4">
              Business Hours: Monday to Friday, 10:00 AM to 6:00 PM IST
            </p>
            <p className="text-gray-600 text-sm italic">
              For refund status or payment-related concerns, Customers are advised to contact the Merchant or the Partner Bank/Payment Aggregator directly.
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-lg mt-10">
          <p className="text-gray-700 text-sm leading-relaxed">
            <strong>Important Note:</strong> This policy reflects Rupeeflow&apos;s role as a Technology Service Provider. All payment processing, refund execution, and financial operations are performed by our Partner Banks and Payment Aggregators. For specific transaction-related queries, please contact the relevant merchant or payment service provider.
          </p>
        </div>

      </div>
    </section>
  )
}
