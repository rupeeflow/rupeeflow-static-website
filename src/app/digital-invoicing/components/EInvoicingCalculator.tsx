'use client';
//test

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Clock, DollarSign, AlertCircle, CheckCircle } from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';
import { fadeInUp } from '@/lib/animations';
import type { EInvoicingInputs, EInvoicingResult } from '@/types/calculators';

export default function EInvoicingCalculator() {
  const [inputs, setInputs] = useState<EInvoicingInputs>({
    monthlyInvoices: 200,
    averageProcessingTime: 15,
    errorRate: 10,
  });

  const [result, setResult] = useState<EInvoicingResult | null>(null);

  const calculateResults = () => {
    const timeSaved = (inputs.monthlyInvoices * inputs.averageProcessingTime * 0.7) / 60;
    const costSavings = timeSaved * 500;
    const errorReduction = inputs.errorRate * 0.9;

    setResult({
      timeSaved,
      costSavings,
      errorReduction,
      gstCompliance: true,
    });
  };

  const handleInputChange = (field: keyof EInvoicingInputs, value: string) => {
    const numValue = parseFloat(value) || 0;
    setInputs((prev) => ({ ...prev, [field]: numValue }));
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-emerald-50/30">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="fontheading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Calculate Your{' '}
            <span className="bg-gradient-to-r from-[#53BEC2] to-[#00EF64] bg-clip-text text-transparent">
              Time & Cost Savings
            </span>
          </h2>
          <p className="fontbody2 text-lg text-gray-600 max-w-2xl mx-auto">
            See how much time and money you&apos;ll save with automated e-invoicing
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[var(--card)] rounded-2xl p-8 shadow-lg border-2 border-emerald-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Your Current Process</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Monthly Invoices
                  </label>
                  <input
                    type="number"
                    value={inputs.monthlyInvoices}
                    onChange={(e) => handleInputChange('monthlyInvoices', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors text-gray-900"
                    min="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Avg. Processing Time (minutes)
                  </label>
                  <input
                    type="number"
                    value={inputs.averageProcessingTime}
                    onChange={(e) => handleInputChange('averageProcessingTime', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors text-gray-900"
                    min="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Current Error Rate (%)
                  </label>
                  <input
                    type="number"
                    value={inputs.errorRate}
                    onChange={(e) => handleInputChange('errorRate', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors text-gray-900"
                    min="0"
                    max="100"
                  />
                </div>

                <button
                  onClick={calculateResults}
                  className="w-full px-6 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-[var(--foreground)] font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-200"
                >
                  Calculate Savings
                </button>
              </div>
            </motion.div>

            {/* Results Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {result ? (
                <>
                  <div className="bg-[var(--card)] rounded-2xl p-6 border-2 border-emerald-100 shadow-lg">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-600 mb-1">Time Saved</p>
                        <p className="text-4xl font-bold text-blue-600">
                          <AnimatedCounter value={result.timeSaved} decimals={1} />
                          <span className="text-2xl"> hrs</span>
                        </p>
                        <p className="text-xs text-gray-500 mt-1">per month</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[var(--card)] rounded-2xl p-6 border-2 border-emerald-100 shadow-lg">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <DollarSign className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-600 mb-1">Cost Savings</p>
                        <p className="text-4xl font-bold text-emerald-600">
                          ₹<AnimatedCounter value={result.costSavings} decimals={0} />
                        </p>
                        <p className="text-xs text-gray-500 mt-1">per month</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[var(--card)] rounded-2xl p-6 border-2 border-emerald-100 shadow-lg">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                        <AlertCircle className="w-6 h-6 text-red-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-600 mb-1">Error Reduction</p>
                        <p className="text-4xl font-bold text-red-600">
                          <AnimatedCounter value={result.errorReduction} decimals={1} />%
                        </p>
                        <p className="text-xs text-gray-500 mt-1">fewer errors</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-6 text-[var(--foreground)] shadow-lg">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-8 h-8" />
                      <div>
                        <p className="font-bold text-lg">100% GST Compliant</p>
                        <p className="text-sm text-emerald-50">Automatic IRP integration</p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="bg-[var(--card)] rounded-2xl p-8 border-2 border-gray-100 flex items-center justify-center h-full min-h-[400px]">
                  <div className="text-center">
                    <Calculator className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">Enter your details to see savings</p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
