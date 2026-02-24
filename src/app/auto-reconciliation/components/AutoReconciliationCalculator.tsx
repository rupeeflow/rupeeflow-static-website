'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp } from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';

export default function AutoReconciliationCalculator() {
  const [inputs, setInputs] = useState({
    monthlyTransactions: 500,
    manualReconciliationTime: 40,
    errorRate: 5,
  });

  const [results, setResults] = useState({
    timeSaved: 0,
    costSavings: 0,
    accuracyImprovement: 0,
    monthlyROI: 0,
  });

  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setInputs((prev) => ({ ...prev, [field]: parseFloat(value) || 0 }));
    setShowResults(false);
  };

  const calculateSavings = () => {
    const timeSaved = inputs.manualReconciliationTime * 0.85;
    const costSavings = timeSaved * 800;
    const accuracyImprovement = (100 - inputs.errorRate) - inputs.errorRate;
    const monthlyROI = (costSavings / 5000) * 100;

    setResults({
      timeSaved: Math.round(timeSaved),
      costSavings: Math.round(costSavings),
      accuracyImprovement: Math.round(accuracyImprovement * 10) / 10,
      monthlyROI: Math.round(monthlyROI),
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
            <span className="text-sm font-semibold text-emerald-600">ROI Calculator</span>
          </div>
          <h2 className="fontheading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Calculate Your{' '}
            <span className="bg-gradient-to-r from-[#53BEC2] to-[#00EF64] bg-clip-text text-transparent">
              Time Savings
            </span>
          </h2>
          <p className="fontbody2 text-lg text-gray-600 max-w-2xl mx-auto">
            See how much time and money you can save with automated reconciliation
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Current Process</h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Monthly Transactions
                  </label>
                  <input
                    type="number"
                    value={inputs.monthlyTransactions}
                    onChange={(e) => handleInputChange('monthlyTransactions', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                    min="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Manual Reconciliation Time (hours/month)
                  </label>
                  <input
                    type="number"
                    value={inputs.manualReconciliationTime}
                    onChange={(e) => handleInputChange('manualReconciliationTime', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
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
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                    min="0"
                    max="100"
                    step="0.1"
                  />
                </div>

                <button
                  onClick={calculateSavings}
                  className="w-full px-6 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <TrendingUp className="w-5 h-5" />
                  Calculate Savings
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Potential Savings</h3>

              {showResults ? (
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 border-2 border-emerald-100">
                    <p className="text-sm text-gray-600 mb-2">Time Saved Per Month</p>
                    <p className="text-4xl font-bold text-emerald-600">
                      <AnimatedCounter end={results.timeSaved} suffix=" hrs" />
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-2 border-emerald-100">
                    <p className="text-sm text-gray-600 mb-2">Monthly Cost Savings</p>
                    <p className="text-4xl font-bold text-emerald-600">
                      <AnimatedCounter end={results.costSavings} prefix="₹" />
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-2 border-emerald-100">
                    <p className="text-sm text-gray-600 mb-2">Accuracy Improvement</p>
                    <p className="text-4xl font-bold text-emerald-600">
                      <AnimatedCounter end={results.accuracyImprovement} suffix="%" />
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-2 border-emerald-100">
                    <p className="text-sm text-gray-600 mb-2">Monthly ROI</p>
                    <p className="text-4xl font-bold text-emerald-600">
                      <AnimatedCounter end={results.monthlyROI} suffix="%" />
                    </p>
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center text-gray-400">
                  <p className="text-center">Enter your details and click Calculate to see your potential savings</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
