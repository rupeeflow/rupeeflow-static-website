'use client';

import { motion } from 'framer-motion';
import { BarChart3, PieChart, TrendingUp, Users } from 'lucide-react';

export default function DashboardPreview() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="fontheading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Powerful{' '}
            <span className="bg-gradient-to-r from-[#53BEC2] to-[#00EF64] bg-clip-text text-transparent">
              Visual Analytics
            </span>
          </h2>
          <p className="fontbody2 text-lg text-gray-600 max-w-2xl mx-auto">
            Interactive dashboards that turn complex data into actionable insights
          </p>
        </motion.div>

        {/* Dashboard grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Chart 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Collection Trends</h3>
                <p className="text-xs text-gray-500">Last 6 months</p>
              </div>
            </div>
            {/* Chart placeholder */}
            <div className="h-48 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg flex items-center justify-center">
              <p className="text-gray-400 text-sm">Chart Visualization Placeholder</p>
            </div>
          </motion.div>

          {/* Chart 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                <PieChart className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Aging Analysis</h3>
                <p className="text-xs text-gray-500">Current outstanding</p>
              </div>
            </div>
            {/* Chart placeholder */}
            <div className="h-48 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg flex items-center justify-center">
              <p className="text-gray-400 text-sm">Pie Chart Placeholder</p>
            </div>
          </motion.div>

          {/* Chart 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">DSO Trends</h3>
                <p className="text-xs text-gray-500">Days sales outstanding</p>
              </div>
            </div>
            {/* Chart placeholder */}
            <div className="h-48 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg flex items-center justify-center">
              <p className="text-gray-400 text-sm">Line Chart Placeholder</p>
            </div>
          </motion.div>

          {/* Chart 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                <Users className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Customer Segments</h3>
                <p className="text-xs text-gray-500">Payment behavior</p>
              </div>
            </div>
            {/* Chart placeholder */}
            <div className="h-48 bg-gradient-to-br from-red-50 to-orange-50 rounded-lg flex items-center justify-center">
              <p className="text-gray-400 text-sm">Segment Chart Placeholder</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
