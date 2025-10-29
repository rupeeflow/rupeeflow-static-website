'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

interface ApiEndpointProps {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  endpoint: string
  title: string
  description: string
  headers?: Array<{ name: string; value: string; description?: string }>
  requestBody?: string
  responseBody?: string
  curlExample?: string
  notes?: string[]
}

export default function ApiEndpoint({
  method,
  endpoint,
  title,
  description,
  headers,
  requestBody,
  responseBody,
  curlExample,
  notes,
}: ApiEndpointProps) {
  const [copiedRequest, setCopiedRequest] = useState(false)
  const [copiedResponse, setCopiedResponse] = useState(false)
  const [copiedCurl, setCopiedCurl] = useState(false)

  const methodColors = {
    GET: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    POST: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    PUT: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    DELETE: 'bg-red-500/20 text-red-400 border-red-500/30',
    PATCH: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  }

  const copyToClipboard = async (text: string, setCopied: (value: boolean) => void) => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="mb-12 scroll-mt-24" id={title.toLowerCase().replace(/\s+/g, '-')}>
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-3xl fontheading text-white mb-3">{title}</h2>
        <p className="text-gray-400 fontbody mb-4">{description}</p>

        {/* Method and Endpoint */}
        <div className="flex flex-wrap items-center gap-3 p-4 bg-gray-900/50 border border-gray-800 rounded-lg">
          <span className={`px-3 py-1 rounded-md border font-mono text-sm font-semibold ${methodColors[method]}`}>
            {method}
          </span>
          <code className="text-teal-400 fontbody2 text-sm md:text-base break-all">
            {endpoint}
          </code>
        </div>
      </div>

      {/* Headers */}
      {headers && headers.length > 0 && (
        <div className="mb-6">
          <h3 className="text-xl fontheading text-emerald-400 mb-3">Headers</h3>
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 space-y-3">
            {headers.map((header, index) => (
              <div key={index} className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <code className="text-teal-400 fontbody text-sm">{header.name}:</code>
                  <code className="text-gray-300 fontbody2 text-sm">{header.value}</code>
                </div>
                {header.description && (
                  <p className="text-gray-500 text-sm fontbody2 pl-2">{header.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Request Body */}
      {requestBody && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl fontheading text-emerald-400">Request Body</h3>
            <button
              onClick={() => copyToClipboard(requestBody, setCopiedRequest)}
              className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-md transition-colors text-sm fontbody"
            >
              {copiedRequest ? (
                <>
                  <Check className="w-4 h-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy
                </>
              )}
            </button>
          </div>
          <pre className="bg-gray-950 border border-gray-800 rounded-lg p-4 overflow-x-auto">
            <code className="text-sm text-gray-300 font-mono">{requestBody}</code>
          </pre>
        </div>
      )}

      {/* Response Body */}
      {responseBody && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl fontheading text-emerald-400">Response Body</h3>
            <button
              onClick={() => copyToClipboard(responseBody, setCopiedResponse)}
              className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-md transition-colors text-sm fontbody"
            >
              {copiedResponse ? (
                <>
                  <Check className="w-4 h-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy
                </>
              )}
            </button>
          </div>
          <pre className="bg-gray-950 border border-gray-800 rounded-lg p-4 overflow-x-auto">
            <code className="text-sm text-gray-300 font-mono">{responseBody}</code>
          </pre>
        </div>
      )}

      {/* cURL Example */}
      {curlExample && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl fontheading text-emerald-400">cURL Example</h3>
            <button
              onClick={() => copyToClipboard(curlExample, setCopiedCurl)}
              className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-md transition-colors text-sm fontbody"
            >
              {copiedCurl ? (
                <>
                  <Check className="w-4 h-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy
                </>
              )}
            </button>
          </div>
          <pre className="bg-gray-950 border border-gray-800 rounded-lg p-4 overflow-x-auto">
            <code className="text-sm text-teal-400 font-mono">{curlExample}</code>
          </pre>
        </div>
      )}

      {/* Notes */}
      {notes && notes.length > 0 && (
        <div className="bg-gradient-to-br from-teal-500/10 to-emerald-500/10 border border-teal-500/30 rounded-lg p-4">
          <h4 className="text-lg fontheading text-teal-400 mb-2">📝 Notes</h4>
          <ul className="space-y-2">
            {notes.map((note, index) => (
              <li key={index} className="text-gray-300 fontbody2 text-sm flex items-start gap-2">
                <span className="text-teal-500 mt-1">•</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
