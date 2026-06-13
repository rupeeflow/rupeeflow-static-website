'use client'

import { Key, Shield, Copy, Check, Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

export default function AuthenticationPage() {
  const [copiedClientId, setCopiedClientId] = useState(false)
  const [copiedSecret, setCopiedSecret] = useState(false)
  const [showSecret, setShowSecret] = useState(false)

  const dummyClientId = 'client_01JCXXXXXXXXXXX3SGH7'
  const dummyClientSecret = 'sk_live_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
  const dummyBasicAuth = 'Y2xpZW50XzAxSkNYWFhYWFhYWFhYWFhYM1NHSDc6c2tfbGl2ZV9YWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWA=='

  const copyToClipboard = async (text: string, setCopied: (value: boolean) => void) => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl fontheading2 text-gradient-teal-emerald mb-4">
          Authentication
        </h1>
        <p className="text-xl text-gray-300 fontbody mb-6">
          Learn how to authenticate your API requests using Client ID and Secret Key. RupeeFlow uses Basic Authentication for secure API access.
        </p>

        {/* Security Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-lg">
          <Shield className="w-5 h-5 text-emerald-400" />
          <span className="text-emerald-400 fontbody font-semibold">Bank-Grade Security</span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mb-12"></div>

      {/* Step 1: Generate Credentials */}
      <div className="mb-12">
        <h2 className="text-3xl fontheading text-[var(--foreground)] mb-6">Step 1: Generate API Credentials</h2>

        <div className="bg-gradient-to-br from-teal-500/10 to-emerald-500/10 border border-teal-500/30 rounded-xl p-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center">
              <Key className="w-5 h-5 text-teal-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl fontheading text-[var(--foreground)] mb-3">Generate from Dashboard</h3>
              <p className="text-gray-300 fontbody2 mb-4">
                Follow these steps to generate your Client ID and Secret Key from your RupeeFlow dashboard:
              </p>

              {/* Steps */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-[var(--foreground)] text-sm font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-300 fontbody2">
                      Log in to your RupeeFlow dashboard
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-[var(--foreground)] text-sm font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-300 fontbody2 mb-2">
                      Navigate to <strong className="text-teal-400">Settings → Developer Section</strong>
                    </p>
                    <div className="bg-gray-950 border border-teal-500/30 rounded-lg p-3">
                      <code className="text-teal-400 text-sm">Dashboard → Settings → Developer</code>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-[var(--foreground)] text-sm font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-300 fontbody2">
                      Click on the <strong className="text-emerald-400">&quot;Generate&quot;</strong> button
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-[var(--foreground)] text-sm font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-300 fontbody2">
                      Your new <strong>Client ID</strong> and <strong>Secret Key</strong> will be generated
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-[var(--foreground)] text-sm font-bold">
                    5
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-300 fontbody2">
                      <strong className="text-red-400">Important:</strong> Copy and save your credentials securely. The Secret Key will only be shown once!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Example Credentials */}
        <div className="bg-gray-950 border border-gray-800 rounded-xl p-6">
          <h3 className="text-xl fontheading text-emerald-400 mb-4">Example Credentials</h3>

          {/* Client ID */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm text-gray-400 fontbody2">Client ID</label>
              <button
                onClick={() => copyToClipboard(dummyClientId, setCopiedClientId)}
                className="flex items-center gap-1 px-2 py-1 text-xs text-gray-400 hover:text-teal-400 transition-colors"
              >
                {copiedClientId ? (
                  <>
                    <Check className="w-3 h-3" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    Copy
                  </>
                )}
              </button>
            </div>
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-3">
              <code className="text-teal-400 text-sm break-all">{dummyClientId}</code>
            </div>
          </div>

          {/* Client Secret */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm text-gray-400 fontbody2">Client Secret</label>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowSecret(!showSecret)}
                  className="flex items-center gap-1 px-2 py-1 text-xs text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  {showSecret ? (
                    <>
                      <EyeOff className="w-3 h-3" />
                      Hide
                    </>
                  ) : (
                    <>
                      <Eye className="w-3 h-3" />
                      Show
                    </>
                  )}
                </button>
                <button
                  onClick={() => copyToClipboard(dummyClientSecret, setCopiedSecret)}
                  className="flex items-center gap-1 px-2 py-1 text-xs text-gray-400 hover:text-teal-400 transition-colors"
                >
                  {copiedSecret ? (
                    <>
                      <Check className="w-3 h-3" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      Copy
                    </>
                  )}
                </button>
              </div>
            </div>
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-3">
              <code className="text-emerald-400 text-sm break-all">
                {showSecret ? dummyClientSecret : '••••••••••••••••••••••••••••••••••••'}
              </code>
            </div>
          </div>

          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
            <p className="text-red-400 text-sm fontbody2">
              ⚠️ These are example credentials for demonstration purposes only. Use your actual credentials from the dashboard.
            </p>
          </div>
        </div>
      </div>

      {/* Step 2: Use in API Calls */}
      <div className="mb-12">
        <h2 className="text-3xl fontheading text-[var(--foreground)] mb-6">Step 2: Using Basic Authentication</h2>

        <p className="text-gray-300 fontbody2 mb-6">
          RupeeFlow APIs use <strong>Basic Authentication</strong>. You need to encode your Client ID and Secret Key in Base64 format.
        </p>

        {/* Authentication Format */}
        <div className="bg-gray-950 border border-gray-800 rounded-xl p-6 mb-6">
          <h3 className="text-xl fontheading text-emerald-400 mb-4">Authentication Format</h3>

          <div className="space-y-4">
            {/* Step 1: Combine */}
            <div>
              <p className="text-gray-400 fontbody2 text-sm mb-2">1. Combine Client ID and Secret with a colon</p>
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-3">
                <code className="text-gray-300 text-sm break-all">
                  {dummyClientId}:{dummyClientSecret}
                </code>
              </div>
            </div>

            {/* Step 2: Encode */}
            <div>
              <p className="text-gray-400 fontbody2 text-sm mb-2">2. Encode in Base64</p>
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-3">
                <code className="text-teal-400 text-sm break-all">
                  {dummyBasicAuth}
                </code>
              </div>
            </div>

            {/* Step 3: Add Header */}
            <div>
              <p className="text-gray-400 fontbody2 text-sm mb-2">3. Add to Authorization header</p>
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-3">
                <code className="text-emerald-400 text-sm break-all">
                  Authorization: Basic {dummyBasicAuth}
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* Code Examples */}
        <div className="mb-6">
          <h3 className="text-xl fontheading text-emerald-400 mb-4">Code Examples</h3>

          {/* cURL */}
          <div className="mb-4">
            <p className="text-gray-400 fontbody2 text-sm mb-2">cURL</p>
            <pre className="bg-gray-950 border border-gray-800 rounded-lg p-4 overflow-x-auto">
              <code className="text-sm text-gray-300 font-mono">{`curl --location 'https://api.rupeeflow.co/api/v1/payments/payin/create' \\
--header 'Content-Type: application/json' \\
--header 'Authorization: Basic ${dummyBasicAuth}' \\
--data '{
  "amount": 100,
  "name": "Test Customer",
  "email": "customer@example.com",
  "mobile": "9999900000",
  "vpa": "customer@upi"
}'`}</code>
            </pre>
          </div>

          {/* JavaScript */}
          <div className="mb-4">
            <p className="text-gray-400 fontbody2 text-sm mb-2">JavaScript / Node.js</p>
            <pre className="bg-gray-950 border border-gray-800 rounded-lg p-4 overflow-x-auto">
              <code className="text-sm text-gray-300 font-mono">{`const clientId = '${dummyClientId}';
const clientSecret = '${dummyClientSecret}';

// Encode credentials in Base64
const credentials = Buffer.from(\`\${clientId}:\${clientSecret}\`).toString('base64');

const response = await fetch('https://api.rupeeflow.co/api/v1/payments/payin/create', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': \`Basic \${credentials}\`
  },
  body: JSON.stringify({
    amount: 100,
    name: 'Test Customer',
    email: 'customer@example.com',
    mobile: '9999900000',
    vpa: 'customer@upi'
  })
});`}</code>
            </pre>
          </div>

          {/* Python */}
          <div>
            <p className="text-gray-400 fontbody2 text-sm mb-2">Python</p>
            <pre className="bg-gray-950 border border-gray-800 rounded-lg p-4 overflow-x-auto">
              <code className="text-sm text-gray-300 font-mono">{`import requests
import base64

client_id = '${dummyClientId}'
client_secret = '${dummyClientSecret}'

# Encode credentials in Base64
credentials = base64.b64encode(f"{client_id}:{client_secret}".encode()).decode()

headers = {
    'Content-Type': 'application/json',
    'Authorization': f'Basic {credentials}'
}

data = {
    'amount': 100,
    'name': 'Test Customer',
    'email': 'customer@example.com',
    'mobile': '9999900000',
    'vpa': 'customer@upi'
}

response = requests.post('https://api.rupeeflow.co/api/v1/payments/payin/create',
                        headers=headers,
                        json=data)`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Security Best Practices */}
      <div className="mb-12">
        <h2 className="text-3xl fontheading text-[var(--foreground)] mb-6">Security Best Practices</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-xl p-6">
            <h3 className="text-lg fontheading text-red-400 mb-3 flex items-center gap-2">
              <span className="text-2xl">🚫</span>
              DON&apos;T
            </h3>
            <ul className="space-y-2 text-sm text-gray-300 fontbody2">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✗</span>
                <span>Share your Secret Key with anyone</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✗</span>
                <span>Expose credentials in client-side code</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✗</span>
                <span>Commit credentials to version control (Git)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✗</span>
                <span>Use production keys in development</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✗</span>
                <span>Log credentials in application logs</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-xl p-6">
            <h3 className="text-lg fontheading text-emerald-400 mb-3 flex items-center gap-2">
              <span className="text-2xl">✅</span>
              DO
            </h3>
            <ul className="space-y-2 text-sm text-gray-300 fontbody2">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-1">✓</span>
                <span>Store credentials in environment variables</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-1">✓</span>
                <span>Use server-side authentication only</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-1">✓</span>
                <span>Rotate credentials periodically</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-1">✓</span>
                <span>Use separate keys for testing and production</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-1">✓</span>
                <span>Whitelist your server IP addresses</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* IP Whitelisting */}
      <div className="mb-12">
        <h2 className="text-3xl fontheading text-[var(--foreground)] mb-6">IP Whitelisting</h2>

        <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-xl p-6">
          <h3 className="text-xl fontheading text-purple-400 mb-3">Additional Security Layer</h3>
          <p className="text-gray-300 fontbody2 mb-4">
            For enhanced security, whitelist your server IP addresses to ensure only requests from authorized servers can access your account.
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-[var(--foreground)] text-sm font-bold">
                1
              </div>
              <div className="flex-1">
                <p className="text-gray-300 fontbody2">
                  Go to <strong className="text-purple-400">Settings → Developer Section</strong>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-[var(--foreground)] text-sm font-bold">
                2
              </div>
              <div className="flex-1">
                <p className="text-gray-300 fontbody2">
                  Scroll down to the <strong className="text-purple-400">&quot;IP Whitelist&quot;</strong> section
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-[var(--foreground)] text-sm font-bold">
                3
              </div>
              <div className="flex-1">
                <p className="text-gray-300 fontbody2">
                  Enter your server IP address (e.g., <code className="text-purple-400">203.0.113.45</code>)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-[var(--foreground)] text-sm font-bold">
                4
              </div>
              <div className="flex-1">
                <p className="text-gray-300 fontbody2">
                  Click <strong className="text-purple-400">&quot;Add&quot;</strong> to whitelist the IP
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
            <p className="text-blue-400 text-sm fontbody2">
              💡 <strong>Tip:</strong> You can add multiple IP addresses. Requests from non-whitelisted IPs will be rejected with a 403 error.
            </p>
          </div>
        </div>
      </div>

      {/* Troubleshooting */}
      <div className="mb-12">
        <h2 className="text-3xl fontheading text-[var(--foreground)] mb-6">Troubleshooting</h2>

        <div className="space-y-4">
          {/* 401 Error */}
          <div className="bg-gray-950 border border-gray-800 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center">
                <span className="text-red-400 font-bold text-lg">401</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg fontheading text-[var(--foreground)] mb-2">Unauthorized Error</h3>
                <p className="text-gray-400 fontbody2 mb-3">
                  This error occurs when your credentials are invalid or incorrectly formatted.
                </p>
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-3">
                  <p className="text-sm text-gray-400 fontbody2 mb-2">Solutions:</p>
                  <ul className="space-y-1 text-sm text-gray-300 fontbody2">
                    <li>• Verify Client ID and Secret Key are correct</li>
                    <li>• Ensure Base64 encoding is properly formatted</li>
                    <li>• Check for extra spaces or line breaks in credentials</li>
                    <li>• Generate new credentials if unsure</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 403 Error */}
          <div className="bg-gray-950 border border-gray-800 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center">
                <span className="text-orange-400 font-bold text-lg">403</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg fontheading text-[var(--foreground)] mb-2">IP Not Whitelisted</h3>
                <p className="text-gray-400 fontbody2 mb-3">
                  This error occurs when your server IP is not whitelisted.
                </p>
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-3">
                  <p className="text-sm text-gray-400 fontbody2 mb-2">Solutions:</p>
                  <ul className="space-y-1 text-sm text-gray-300 fontbody2">
                    <li>• Add your server IP to the whitelist</li>
                    <li>• Verify the IP address is correct</li>
                    <li>• Check if using a proxy or load balancer</li>
                    <li>• Contact support if issue persists</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-br from-teal-500/10 to-emerald-500/10 border border-teal-500/30 rounded-xl p-8">
        <h3 className="text-2xl fontheading text-[var(--foreground)] mb-3">Ready to Start?</h3>
        <p className="text-gray-300 fontbody2 mb-6">
          Now that you have your credentials set up, you&apos;re ready to start making API calls!
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="/docs/payin"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-[var(--foreground)] fontheading rounded-xl hover:from-teal-500 hover:to-emerald-500 transition-all"
          >
            Explore Pay-In API
          </a>
          <a
            href="/docs/payout"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--card)] hover:bg-[var(--card)] text-[var(--foreground)] fontheading rounded-xl border border-white/20 transition-all"
          >
            Explore Pay-Out API
          </a>
        </div>
      </div>
    </div>
  )
}
