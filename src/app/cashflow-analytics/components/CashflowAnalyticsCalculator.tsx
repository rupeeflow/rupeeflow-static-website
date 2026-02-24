'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp } from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';

export default function CashflowAnalyticsCalculator() {
  const [inputs, setInputs] = useState({
    monthlyRevenue: 1000000,
    monthlyExpenses: 800000,
    currentCashReserve: 2500000,
  });

  const [results, setResults] = useState({
    netCashflow: 0,
    forecastAccuracy: 0,
    runwayDays: 0,
    liquidityScore: 0,
    riskAlerts: 0,
  });

  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setInputs((prev) => ({ ...prev, [field]: parseFloat(value) || 0 }));
    setShowResults(false);
  };

  const calculateMetrics = () => {
    const netCashflow = inputs.monthlyRevenue - inputs.monthlyExpenses;
    const forecastAccuracy = 94;
    const runwayDays = Math.floor((inputs.currentCashReserve / inputs.monthlyExpenses) * 30);
    const liquidityScore = Math.min((inputs.currentCashReserve / inputs.monthlyExpenses) * 25, 100);
    const riskAlerts = runwayDays < 30 ? 3 : runwayDays < 60 ? 1 : 0;

    setResults({
      netCashflow: Math.round(netCashflow),
      forecastAccuracy,
      runwayDays,
      liquidityScore: Math.round(liquidityScore),
      riskAlerts,
    });
    setShowResults(true);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full mb-4">
            <Calculator className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-600">Cashflow Calculator</span>
          </div>
          <h2 className="fontheading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Calculate Your{' '}
            <span className="bg-gradient-to-r from-[#53BEC2] to-[#00EF64] bg-clip-text text-transparent">Cash Runway</span>
          </h2>
          <p className="fontbody2 text-lg text-gray-600 max-w-2xl mx-auto">See how long your cash will last and plan for liquidity needs</p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Financials</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Monthly Revenue (₹)</label>
                  <input type="number" value={inputs.monthlyRevenue} onChange={(e) => handleInputChange('monthlyRevenue', e.target.value)} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors" min="0" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Monthly Expenses (₹)</label>
                  <input type="number" value={inputs.monthlyExpenses} onChange={(e) => handleInputChange('monthlyExpenses', e.target.value)} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors" min="0" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Current Cash Reserve (₹)</label>
                  <input type="number" value={inputs.currentCashReserve} onChange={(e) => handleInputChange('currentCashReserve', e.target.value)} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors" min="0" />
                </div>
                <button onClick={calculateMetrics} className="w-full px-6 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Calculate Metrics
                </button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border-2 border-emerald-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Metrics</h3>
              {showResults ? (
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 border-2 border-emerald-100">
                    <p className="text-sm text-gray-600 mb-2">Net Monthly Cashflow</p>
                    <p className="text-4xl font-bold text-emerald-600"><AnimatedCounter end={results.netCashflow} prefix="₹" /></p>
                  </div>
                  <div className="bg-white rounded-xl p-6 border-2 border-emerald-100">
                    <p className="text-sm text-gray-600 mb-2">Cash Runway</p>
                    <p className="text-4xl font-bold text-emerald-600"><AnimatedCounter end={results.runwayDays} suffix=" days" /></p>
                  </div>
                  <div className="bg-white rounded-xl p-6 border-2 border-emerald-100">
                    <p className="text-sm text-gray-600 mb-2">Liquidity Score</p>
                    <p className="text-4xl font-bold text-emerald-600"><AnimatedCounter end={results.liquidityScore} suffix="/100" /></p>
                  </div>
                  <div className="bg-white rounded-xl p-6 border-2 border-emerald-100">
                    <p className="text-sm text-gray-600 mb-2">Risk Alerts</p>
                    <p className="text-4xl font-bold text-emerald-600"><AnimatedCounter end={results.riskAlerts} /></p>
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center text-gray-400">
                  <p className="text-center">Enter your details and click Calculate to see your cashflow metrics</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
