'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, Clock, Target } from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';
import { fadeInUp } from '@/lib/animations';
import type { PaymentRemindersInputs, PaymentRemindersResult } from '@/types/calculators';

export default function PaymentRemindersCalculator() {
  const [inputs, setInputs] = useState<PaymentRemindersInputs>({
    monthlyInvoices: 100,
    averageInvoiceValue: 50000,
    currentCollectionRate: 65,
  });

  const [result, setResult] = useState<PaymentRemindersResult | null>(null);

  const calculateResults = () => {
    const potentialRecovery =
      inputs.monthlyInvoices *
      inputs.averageInvoiceValue *
      (0.85 - inputs.currentCollectionRate / 100);
    const timeSaved = inputs.monthlyInvoices * 0.5;
    const collectionImprovement = 85 - inputs.currentCollectionRate;

    setResult({
      potentialRecovery: Math.max(0, potentialRecovery),
      timeSaved,
      collectionImprovement: Math.max(0, collectionImprovement),
    });
  };

  const handleInputChange = (field: keyof PaymentRemindersInputs, value: string) => {
    const numValue = parseFloat(value) || 0;
    setInputs((prev) => ({ ...prev, [field]: numValue }));
  };

  const handleCalculate = () => {
    calculateResults();
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
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
              Revenue Recovery
            </span>
          </h2>
          <p className="fontbody2 text-lg text-gray-600 max-w-2xl mx-auto">
            See how much revenue you can recover with automated payment reminders
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
              className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Your Details</h3>
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
                    Average Invoice Value (₹)
                  </label>
                  <input
                    type="number"
                    value={inputs.averageInvoiceValue}
                    onChange={(e) => handleInputChange('averageInvoiceValue', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors text-gray-900"
                    min="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Current Collection Rate (%)
                  </label>
                  <input
                    type="number"
                    value={inputs.currentCollectionRate}
                    onChange={(e) => handleInputChange('currentCollectionRate', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors text-gray-900"
                    min="0"
                    max="100"
                  />
                </div>

                <button
                  onClick={handleCalculate}
                  className="w-full px-6 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-200"
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
              className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border-2 border-emerald-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Your Potential Gains</h3>

              {result ? (
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 border-2 border-emerald-100">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-600 mb-1">Additional Revenue Recovery</p>
                        <p className="text-3xl font-bold text-emerald-600">
                          ₹<AnimatedCounter value={result.potentialRecovery} decimals={0} />
                        </p>
                        <p className="text-xs text-gray-500 mt-1">per month</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-2 border-emerald-100">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-600 mb-1">Time Saved</p>
                        <p className="text-3xl font-bold text-blue-600">
                          <AnimatedCounter value={result.timeSaved} decimals={0} />
                          <span className="text-xl"> hrs</span>
                        </p>
                        <p className="text-xs text-gray-500 mt-1">per month</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-2 border-emerald-100">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <Target className="w-5 h-5 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-600 mb-1">Collection Rate Improvement</p>
                        <p className="text-3xl font-bold text-purple-600">
                          <AnimatedCounter value={result.collectionImprovement} decimals={0} />%
                        </p>
                        <p className="text-xs text-gray-500 mt-1">increase</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full min-h-[300px]">
                  <div className="text-center">
                    <Calculator className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">Enter your details and click calculate</p>
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
