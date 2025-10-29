'use client'

import Link from 'next/link'
import { ArrowRight, Key, Shield, Zap } from 'lucide-react'

export default function DocsPage() {
  return (
    <div>
      {/* Hero */}
      <div className="mb-12">
        <h1 className="text-5xl fontheading2 text-gradient-teal-emerald mb-4">
          API Documentation
        </h1>
        <p className="text-xl text-gray-300 fontbody max-w-3xl">
          Welcome to RupeeFlow API documentation. Integrate powerful payment solutions into your application with our comprehensive REST APIs.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-teal-500/20 rounded-xl p-6">
          <div className="text-teal-400 mb-3">
            <Zap className="w-8 h-8" />
          </div>
          <h3 className="text-2xl fontheading text-white mb-2">Fast Integration</h3>
          <p className="text-gray-400 fontbody2">Get started in minutes with our simple REST APIs</p>
        </div>

        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-emerald-500/20 rounded-xl p-6">
          <div className="text-emerald-400 mb-3">
            <Shield className="w-8 h-8" />
          </div>
          <h3 className="text-2xl fontheading text-white mb-2">Secure & Reliable</h3>
          <p className="text-gray-400 fontbody2">Bank-grade security with 99.9% uptime SLA</p>
        </div>

        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-teal-500/20 rounded-xl p-6">
          <div className="text-teal-400 mb-3">
            <Key className="w-8 h-8" />
          </div>
          <h3 className="text-2xl fontheading text-white mb-2">Easy Authentication</h3>
          <p className="text-gray-400 fontbody2">Simple Basic Auth with Client ID and Secret</p>
        </div>
      </div>

      {/* Base URL */}
      <div className="mb-12">
        <h2 className="text-3xl fontheading text-white mb-4">Base URL</h2>
        <div className="bg-gray-950 border border-gray-800 rounded-lg p-4">
          <p className="text-gray-400 fontbody2 text-sm mb-2">Production</p>
          <code className="text-teal-400 fontbody text-lg">https://api.rupeeflow.co</code>
        </div>
      </div>

      {/* Quick Start */}
      <div className="mb-12">
        <h2 className="text-3xl fontheading text-white mb-6">Quick Start</h2>

        <div className="space-y-6">
          {/* Step 1 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 flex items-center justify-center text-white fontbody font-bold">
              1
            </div>
            <div className="flex-1">
              <h3 className="text-xl fontheading text-white mb-2">Generate API Credentials</h3>
              <p className="text-gray-400 fontbody2 mb-3">
                Log in to your dashboard and navigate to <strong>Settings → Developer Section</strong> to generate your Client ID and Secret Key.
              </p>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                <p className="text-sm text-gray-400 fontbody2 mb-2">Dashboard Path:</p>
                <code className="text-teal-400 text-sm">Settings → Developer Section → Generate</code>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 flex items-center justify-center text-white fontbody font-bold">
              2
            </div>
            <div className="flex-1">
              <h3 className="text-xl fontheading text-white mb-2">Whitelist Your IP Address</h3>
              <p className="text-gray-400 fontbody2 mb-3">
                For security, whitelist your server IP address in the Developer Section.
              </p>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                <p className="text-sm text-gray-400 fontbody2 mb-2">Dashboard Path:</p>
                <code className="text-teal-400 text-sm">Settings → Developer Section → IP Whitelist → Add</code>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 flex items-center justify-center text-white fontbody font-bold">
              3
            </div>
            <div className="flex-1">
              <h3 className="text-xl fontheading text-white mb-2">Make Your First API Call</h3>
              <p className="text-gray-400 fontbody2 mb-3">
                Use your credentials to authenticate and start accepting payments.
              </p>
              <Link
                href="/docs/payin"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-white fontheading rounded-xl hover:from-teal-500 hover:to-emerald-500 transition-all"
              >
                View Pay-In API
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* API Sections */}
      <div className="mb-12">
        <h2 className="text-3xl fontheading text-white mb-6">Available APIs</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Pay-In Card */}
          <Link
            href="/docs/payin"
            className="group bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-teal-500/20 rounded-xl p-6 hover:border-teal-500/40 transition-all"
          >
            <h3 className="text-2xl fontheading text-white mb-3 group-hover:text-teal-400 transition-colors">
              Pay-In API
            </h3>
            <p className="text-gray-400 fontbody2 mb-4">
              Accept payments from customers via UPI. Create payment requests and track transaction status in real-time.
            </p>
            <div className="flex items-center gap-2 text-teal-400 fontbody">
              Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Pay-Out Card */}
          <Link
            href="/docs/payout"
            className="group bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-emerald-500/20 rounded-xl p-6 hover:border-emerald-500/40 transition-all"
          >
            <h3 className="text-2xl fontheading text-white mb-3 group-hover:text-emerald-400 transition-colors">
              Pay-Out API
            </h3>
            <p className="text-gray-400 fontbody2 mb-4">
              Send money to bank accounts via IMPS, NEFT, or RTGS. Bulk payouts, refunds, and vendor payments made easy.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 fontbody">
              Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>

      {/* Need Help */}
      <div className="bg-gradient-to-br from-teal-500/10 to-emerald-500/10 border border-teal-500/30 rounded-xl p-8">
        <h3 className="text-2xl fontheading text-white mb-3">Need Help?</h3>
        <p className="text-gray-300 fontbody2 mb-4">
          Our support team is here to help you integrate RupeeFlow APIs into your application.
        </p>
        <Link
          href="/support"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white fontheading rounded-xl border border-white/20 transition-all"
        >
          Contact Support
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  )
}
