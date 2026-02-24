'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp } from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';

export default function InvoiceManagementCalculator() {
  const [inputs, setInputs] = useState({
    monthlyInvoices: 200,
    averageApprovalTime: 5,
    numberOfApprovers: 3,
  });

  const [results, setResults] = useState({
    approvalTimeReduction: 0,
    processingSpeedUp: 0,
    visibilityScore: 0,
    complianceScore: 0,
  });

  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setInputs((prev) => ({ ...prev, [field]: parseFloat(value) || 0 }));
    setShowResults(false);
  };

  const calculateSavings = () => {
    const approvalTimeReduction = Math.min(inputs.averageApprovalTime * 0.6, 5);
    const processingSpeedUp = (approvalTimeReduction / inputs.averageApprovalTime) * 100;
    const visibilityScore = 95;
    const complianceScore = 98;

    setResults({
      approvalTimeReduction: Math.round(approvalTimeReduction * 10) / 10,
      processingSpeedUp: Math.round(processingSpeedUp),
      visibilityScore,
      complianceScore,
    });
    setShowResults(true);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full mb-4">
            <Calculator className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-600">Efficiency Calculator</span>
          </div>
          <h2 className="fontheading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Calculate Your{' '}
            <span className="bg-gradient-to-r from-[#53BEC2] to-[#00EF64] bg-clip-text text-transparent">
              Efficiency Gains
            </span>
          </h2>
          <p className="fontbody2 text-lg text-gray-600 max-w-2xl mx-auto">
            See how much faster you can process invoices with automated workflows
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Input form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Current Workflow</h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Monthly Invoices
                  </label>
                  <input
                    type="number"
                    value={inputs.monthlyInvoices}
                    onChange={(e) => handleInputChange('monthlyInvoices', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                    min="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Average Approval Time (days)
                  </label>
                  <input
                    type="number"
                    value={inputs.averageApprovalTime}
                    onChange={(e) => handleInputChange('averageApprovalTime', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                    min="0"
                    step="0.5"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Number of Approvers
                  </label>
                  <input
                    type="number"
                    value={inputs.numberOfApprovers}
                    onChange={(e) => handleInputChange('numberOfApprovers', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                    min="1"
                  />
                </div>

                <button
                  onClick={calculateSavings}
                  className="w-full px-6 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <TrendingUp className="w-5 h-5" />
                  Calculate Improvements
                </button>
              </div>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border-2 border-emerald-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Improvements</h3>

              {showResults ? (
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 border-2 border-emerald-100">
                    <p className="text-sm text-gray-600 mb-2">Approval Time Reduction</p>
                    <p className="text-4xl font-bold text-emerald-600">
                      <AnimatedCounter value={results.approvalTimeReduction} suffix=" days" />
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-2 border-emerald-100">
                    <p className="text-sm text-gray-600 mb-2">Processing Speed Increase</p>
                    <p className="text-4xl font-bold text-emerald-600">
                      <AnimatedCounter value={results.processingSpeedUp} suffix="%" />
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-2 border-emerald-100">
                    <p className="text-sm text-gray-600 mb-2">Visibility Score</p>
                    <p className="text-4xl font-bold text-emerald-600">
                      <AnimatedCounter value={results.visibilityScore} suffix="%" />
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-2 border-emerald-100">
                    <p className="text-sm text-gray-600 mb-2">Compliance Score</p>
                    <p className="text-4xl font-bold text-emerald-600">
                      <AnimatedCounter value={results.complianceScore} suffix="%" />
                    </p>
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center text-gray-400">
                  <p className="text-center">Enter your details and click Calculate to see your potential improvements</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
