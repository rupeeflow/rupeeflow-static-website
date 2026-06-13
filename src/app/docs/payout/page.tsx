import ApiEndpoint from '@/components/docs/ApiEndpoint'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pay-Out API Documentation | RupeeFlow',
  description: 'Complete Pay-Out API documentation for sending money to bank accounts. Learn how to create payouts, check status, handle webhooks, and check wallet balance.',
  keywords: ['Pay-Out API', 'bank transfer API', 'IMPS API', 'NEFT API', 'RTGS API', 'payout API', 'money transfer'],
}

export default function PayoutDocsPage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl fontheading2 text-gradient-teal-emerald mb-4">
          Pay-Out API
        </h1>
        <p className="text-xl text-gray-300 fontbody mb-6">
          Send money to bank accounts via IMPS, NEFT, or RTGS. Perfect for bulk payouts, refunds, vendor payments, and salary disbursements.
        </p>

        {/* Version Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-lg">
          <span className="text-emerald-400 fontbody font-semibold">Version 1.0</span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mb-12"></div>

      {/* Endpoint 1: Initiate Payout Transaction */}
      <ApiEndpoint
        method="POST"
        endpoint="{{base_url}}/api/v1/payments/payout/create"
        title="Initiate Payout Transaction"
        description="Create a payout to transfer money to beneficiary bank accounts. Supports single and bulk payouts with IMPS, NEFT, and RTGS payment modes."
        headers={[
          { name: 'Content-Type', value: 'application/json' },
          { name: 'Authorization', value: 'Basic <Base64(ClientID:ClientSecret)>', description: 'Basic Auth using Client ID and Secret' },
        ]}
        requestBody={`{
  "data": [
    {
      "amount": 100,
      "purpose": "Refund",
      "beneficiaryName": "Sahista",
      "bankName": "HDFC",
      "accountNumber": "1234567890",
      "ifscCode": "HDFC0000123",
      "remarks": "Refund for order 12345",
      "paymentMode": "IMPS",
      "payoutId": "payout_123"
    }
  ]
}`}
        responseBody={`{
  "statusCode": 201,
  "message": "Data Received",
  "success": true,
  "data": {
    "message": "Payout process initiated",
    "batchId": "pbatch_01JJ3TQXXXXXXXXXX5HKAHK5",
    "payoutOrders": [
      {
        "orderId": "mpout_01JJ3TQW8PMXXXXXXXXXJTTV08",
        "name": "Vivek",
        "amount": 100,
        "status": "PENDING",
        "accountNumber": "001234567890",
        "bankName": "SBI",
        "ifscCode": "SBIN0001234",
        "payoutId": "payout_123"
      }
    ],
    "summary": {
      "total": 1,
      "status": "PROCESSING"
    }
  }
}`}
        curlExample={`curl --location '{{base_url}}/api/v1/payments/payout/create' \\
--header 'Content-Type: application/json' \\
--header 'Authorization: Basic a2V5XzAxa2V5XzAxSkXXXXXXXXXXXX2V5XzAxSk' \\
--data-raw '{
  "data": [
    {
      "amount": 100,
      "purpose": "Refund",
      "beneficiaryName": "Sahista",
      "bankName": "HDFC",
      "accountNumber": "1234567890",
      "ifscCode": "HDFC0000123",
      "remarks": "Refund for order 12345",
      "paymentMode": "IMPS",
      "payoutId": "payout_123"
    }
  ]
}'`}
        notes={[
          'amount: Minimum 100 (supports decimal, e.g., 100.00)',
          'purpose: Purpose of transaction (e.g., Refund, Salary, Vendor Payment)',
          'beneficiaryName: Full name of the beneficiary as per bank account',
          'bankName: Name of the beneficiary&apos;s bank',
          'accountNumber: Bank account number of beneficiary',
          'ifscCode: IFSC code of the beneficiary&apos;s bank branch',
          'remarks: Transaction remarks (max 50 characters)',
          'paymentMode: IMPS (instant), NEFT (2-4 hours), or RTGS (same day)',
          'payoutId: Optional unique identifier from your system for tracking',
        ]}
      />

      {/* Endpoint 2: Check Payout Transaction Status */}
      <ApiEndpoint
        method="POST"
        endpoint="{{base_url}}/api/v1/payments/payout/status"
        title="Check Payout Transaction Status"
        description="Retrieve the current status of a payout transaction using the order ID."
        headers={[
          { name: 'Content-Type', value: 'application/json' },
          { name: 'Authorization', value: 'Basic <Base64(ClientID:ClientSecret)>' },
        ]}
        requestBody={`{
  "orderId": "mpout_01JJ3TQW8PMXXXXXXXXXJTTV08"
}`}
        responseBody={`{
  "statusCode": 200,
  "message": "Data Received",
  "success": true,
  "data": {
    "orderId": "mpout_01JJ3TQW8PMXXXXXXXXXJTTV08",
    "status": "SUCCESS",
    "txnRefId": "ABC094320545671",
    "payoutId": "payout_123"
  }
}`}
        curlExample={`curl --location '{{base_url}}/api/v1/payments/payout/status' \\
--header 'Content-Type: application/json' \\
--header 'Authorization: Basic a2V5XzAxa2V5XzAxSkXXXXXXXXXXXX2V5XzAxSk' \\
--data-raw '{
  "orderId": "mpout_01JJ3TQW8PMXXXXXXXXXJTTV08"
}'`}
        notes={[
          'Status can be: SUCCESS, PENDING, or FAILED',
          'txnRefId: Bank transaction reference number (UTR)',
          'payoutId: Your unique identifier (if provided during creation)',
          'Poll this endpoint to check transaction status',
        ]}
      />

      {/* Endpoint 3: Payout Webhook Response */}
      <div className="mb-12">
        <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-xl p-6 mb-6">
          <h2 className="text-3xl fontheading text-purple-400 mb-3">Payout Webhook Response</h2>
          <p className="text-gray-300 fontbody2 mb-4">
            Configure your webhook URL in the dashboard to receive real-time payout status updates. We&apos;ll send a POST request to your endpoint whenever the payout status changes.
          </p>
          <div className="bg-gray-950 border border-purple-500/20 rounded-lg p-4">
            <p className="text-sm text-gray-400 fontbody2 mb-2">Configure in Dashboard:</p>
            <code className="text-purple-400 text-sm">Settings → Webhooks → Add Webhook URL</code>
          </div>
        </div>

        <h3 className="text-xl fontheading text-emerald-400 mb-3">Webhook Payload</h3>
        <pre className="bg-gray-950 border border-gray-800 rounded-lg p-4 overflow-x-auto mb-4">
          <code className="text-sm text-gray-300 font-mono">{`{
  "orderId": "mpout_01JJ3TQW8PMXXXXXXXXXJTTV08",
  "status": "SUCCESS",
  "amount": 100,
  "txnRefId": "ABC094320545671",
  "payoutId": "payout_123"
}`}</code>
        </pre>

        <div className="bg-gradient-to-br from-teal-500/10 to-emerald-500/10 border border-teal-500/30 rounded-lg p-4">
          <h4 className="text-lg fontheading text-teal-400 mb-2">📝 Webhook Notes</h4>
          <ul className="space-y-2">
            <li className="text-gray-300 fontbody2 text-sm flex items-start gap-2">
              <span className="text-teal-500 mt-1">•</span>
              <span>Webhook sent when payout status changes (SUCCESS, FAILED, PENDING)</span>
            </li>
            <li className="text-gray-300 fontbody2 text-sm flex items-start gap-2">
              <span className="text-teal-500 mt-1">•</span>
              <span>Your webhook endpoint must return HTTP 200 status code</span>
            </li>
            <li className="text-gray-300 fontbody2 text-sm flex items-start gap-2">
              <span className="text-teal-500 mt-1">•</span>
              <span>We&apos;ll retry failed webhooks up to 3 times</span>
            </li>
            <li className="text-gray-300 fontbody2 text-sm flex items-start gap-2">
              <span className="text-teal-500 mt-1">•</span>
              <span>txnRefId contains the bank&apos;s UTR (Unique Transaction Reference)</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Endpoint 4: Payout Wallet */}
      <ApiEndpoint
        method="GET"
        endpoint="{{base_url}}/api/v1/payments/payout/wallet"
        title="Payout Wallet"
        description="Get your payout wallet balance and transaction summary. Monitor available balance, total payouts, and top-up history."
        headers={[
          { name: 'Content-Type', value: 'application/json' },
          { name: 'Authorization', value: 'Basic <Base64(ClientID:ClientSecret)>' },
        ]}
        responseBody={`{
  "statusCode": 200,
  "message": "Data Received",
  "success": true,
  "data": {
    "id": "wlt_01JCXXXXXXXXXXXSGH7",
    "availablePayoutBalance": "1000.00",
    "totalPayout": "900.00",
    "totalTopUp": "1000.00",
    "user": {
      "id": "usr_01JXXXXXXXXXE6JK4",
      "fullName": "Vivek K"
    }
  }
}`}
        curlExample={`curl --location '{{base_url}}/api/v1/payments/payout/wallet' \\
--header 'Content-Type: application/json' \\
--header 'Authorization: Basic a2V5XzAxa2V5XzAxSkXXXXXXXXXXXX2V5XzAxSk'`}
        notes={[
          'availablePayoutBalance: Current available balance for payouts',
          'totalPayout: Total amount paid out till date',
          'totalTopUp: Total amount added to wallet (top-ups)',
          'Check wallet balance before initiating payouts',
          'Contact support for wallet top-ups',
        ]}
      />

      {/* Payment Modes */}
      <div className="mb-12">
        <h2 className="text-3xl fontheading text-[var(--foreground)] mb-6">Payment Modes</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* IMPS */}
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-emerald-500/20 rounded-xl p-6">
            <h3 className="text-xl fontheading text-emerald-400 mb-3">IMPS</h3>
            <p className="text-gray-300 fontbody2 mb-4">Instant payment transfer (24x7 including weekends and holidays)</p>
            <ul className="space-y-2 text-sm text-gray-400 fontbody2">
              <li>• Processing Time: Instant</li>
              <li>• Limit: Up to ₹5 lakhs</li>
              <li>• Timing: 24x7</li>
            </ul>
          </div>

          {/* NEFT */}
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-teal-500/20 rounded-xl p-6">
            <h3 className="text-xl fontheading text-teal-400 mb-3">NEFT</h3>
            <p className="text-gray-300 fontbody2 mb-4">National Electronic Funds Transfer for standard transfers</p>
            <ul className="space-y-2 text-sm text-gray-400 fontbody2">
              <li>• Processing Time: 2-4 hours</li>
              <li>• Limit: No maximum limit</li>
              <li>• Timing: 24x7</li>
            </ul>
          </div>

          {/* RTGS */}
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-blue-500/20 rounded-xl p-6">
            <h3 className="text-xl fontheading text-blue-400 mb-3">RTGS</h3>
            <p className="text-gray-300 fontbody2 mb-4">Real-Time Gross Settlement for large value transfers</p>
            <ul className="space-y-2 text-sm text-gray-400 fontbody2">
              <li>• Processing Time: Same day</li>
              <li>• Limit: Minimum ₹2 lakhs</li>
              <li>• Timing: Bank hours only</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Status Codes */}
      <div className="mb-12">
        <h2 className="text-3xl fontheading text-[var(--foreground)] mb-6">Status Codes</h2>
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-950">
              <tr>
                <th className="px-6 py-3 text-left text-sm fontheading text-emerald-400">Status</th>
                <th className="px-6 py-3 text-left text-sm fontheading text-emerald-400">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr>
                <td className="px-6 py-4 text-sm">
                  <code className="text-emerald-400 fontbody">SUCCESS</code>
                </td>
                <td className="px-6 py-4 text-sm text-gray-300 fontbody2">
                  Payout completed successfully. Funds credited to beneficiary account.
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm">
                  <code className="text-yellow-400 fontbody">PENDING</code>
                </td>
                <td className="px-6 py-4 text-sm text-gray-300 fontbody2">
                  Payout initiated but not yet completed. Processing by bank.
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm">
                  <code className="text-blue-400 fontbody">PROCESSING</code>
                </td>
                <td className="px-6 py-4 text-sm text-gray-300 fontbody2">
                  Payout batch is being processed. Individual transactions may have different statuses.
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm">
                  <code className="text-red-400 fontbody">FAILED</code>
                </td>
                <td className="px-6 py-4 text-sm text-gray-300 fontbody2">
                  Payout failed. Amount refunded to wallet. Check error message for details.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
