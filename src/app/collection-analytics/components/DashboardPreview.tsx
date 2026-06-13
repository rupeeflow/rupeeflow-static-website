'use client';

import { motion } from 'framer-motion';
import { BarChart3, PieChart, TrendingUp, Users } from 'lucide-react';

export default function DashboardPreview() {
  // Data for Collection Trends (Bar Chart)
  const collectionData = [
    { month: 'Jan', amount: 65, label: '₹65L' },
    { month: 'Feb', amount: 78, label: '₹78L' },
    { month: 'Mar', amount: 72, label: '₹72L' },
    { month: 'Apr', amount: 85, label: '₹85L' },
    { month: 'May', amount: 92, label: '₹92L' },
    { month: 'Jun', amount: 88, label: '₹88L' },
  ];

  // Data for Aging Analysis (Pie Chart)
  const agingData = [
    { label: '0-30 days', value: 45, color: '#10b981', angle: 162 },
    { label: '31-60 days', value: 25, color: '#3b82f6', angle: 90 },
    { label: '61-90 days', value: 18, color: '#f59e0b', angle: 64.8 },
    { label: '90+ days', value: 12, color: '#ef4444', angle: 43.2 },
  ];

  // Data for DSO Trends (Line Chart)
  const dsoData = [
    { month: 'Jan', value: 45 },
    { month: 'Feb', value: 42 },
    { month: 'Mar', value: 38 },
    { month: 'Apr', value: 35 },
    { month: 'May', value: 32 },
    { month: 'Jun', value: 30 },
  ];

  // Data for Customer Segments (Horizontal Bar Chart)
  const segmentData = [
    { label: 'Excellent', value: 35, color: '#10b981' },
    { label: 'Good', value: 28, color: '#3b82f6' },
    { label: 'Average', value: 22, color: '#f59e0b' },
    { label: 'At Risk', value: 15, color: '#ef4444' },
  ];

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
          {/* Chart 1 - Collection Trends (Bar Chart) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[var(--card)] rounded-2xl p-6 shadow-lg border-2 border-gray-100"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Collection Trends</h3>
                  <p className="text-xs text-gray-500">Last 6 months</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900">₹4.8Cr</p>
                <p className="text-xs text-emerald-600 font-semibold">↑ 12.5%</p>
              </div>
            </div>
            
            {/* Bar Chart */}
            <div className="h-48 flex items-end justify-between gap-2 px-2 pb-6">
              {collectionData.map((item, index) => (
                <div key={item.month} className="flex-1 flex flex-col items-center gap-2 h-full">
                  <div className="flex-1 w-full flex items-end">
                    <motion.div
                      initial={{ scaleY: 0, opacity: 0 }}
                      whileInView={{ scaleY: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                      style={{ height: `${item.amount}%`, transformOrigin: 'bottom' }}
                      className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg relative group cursor-pointer hover:from-blue-600 hover:to-blue-500 transition-colors"
                    >
                      {/* Tooltip on hover */}
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-[var(--foreground)] text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                        {item.label}
                      </div>
                    </motion.div>
                  </div>
                  <span className="text-xs text-gray-600 font-medium">{item.month}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Chart 2 - Aging Analysis (Pie Chart) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[var(--card)] rounded-2xl p-6 shadow-lg border-2 border-gray-100"
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
            
            {/* Pie Chart */}
            <div className="h-48 flex items-center justify-center gap-8">
              {/* Donut Chart */}
              <div className="relative w-40 h-40">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  {agingData.map((segment, index) => {
                    const prevAngles = agingData.slice(0, index).reduce((sum, s) => sum + s.angle, 0);
                    const circumference = 2 * Math.PI * 35;
                    const offset = circumference - (segment.angle / 360) * circumference;
                    const rotation = (prevAngles / 360) * circumference;

                    return (
                      <motion.circle
                        key={segment.label}
                        cx="50"
                        cy="50"
                        r="35"
                        fill="none"
                        stroke={segment.color}
                        strokeWidth="20"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        whileInView={{ strokeDashoffset: offset }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                        style={{
                          strokeDashoffset: offset,
                          transformOrigin: 'center',
                          transform: `rotate(${(rotation / circumference) * 360}deg)`
                        }}
                      />
                    );
                  })}
                  {/* Center circle for donut effect */}
                  <circle cx="50" cy="50" r="25" fill="white" />
                </svg>
                
                {/* Center text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="text-2xl font-bold text-gray-900">₹2.4Cr</p>
                  <p className="text-xs text-gray-500">Total</p>
                </div>
              </div>

              {/* Legend */}
              <div className="space-y-2">
                {agingData.map((segment, index) => (
                  <motion.div
                    key={segment.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: segment.color }}
                    />
                    <div>
                      <p className="text-xs font-semibold text-gray-900">{segment.label}</p>
                      <p className="text-xs text-gray-500">{segment.value}%</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Chart 3 - DSO Trends (Line Chart) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[var(--card)] rounded-2xl p-6 shadow-lg border-2 border-gray-100"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">DSO Trends</h3>
                  <p className="text-xs text-gray-500">Days sales outstanding</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900">30</p>
                <p className="text-xs text-emerald-600 font-semibold">↓ 33% better</p>
              </div>
            </div>
            
            {/* Line Chart */}
            <div className="h-48 relative px-4 pb-8">
              {/* Grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between px-4 pb-8">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div key={i} className="border-t border-gray-100" />
                ))}
              </div>

              {/* Chart area */}
              <svg className="absolute inset-0 w-full h-full px-4 pb-8" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                  <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Area under line */}
                <motion.path
                  d={`M 0,${(100 - ((dsoData[0].value - 25) / 25) * 100)} ${dsoData.map((d, i) => `L ${(i / (dsoData.length - 1)) * 100},${(100 - ((d.value - 25) / 25) * 100)}`).join(' ')} L 100,100 L 0,100 Z`}
                  fill="url(#areaGradient)"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />

                {/* Line */}
                <motion.path
                  d={`M 0,${(100 - ((dsoData[0].value - 25) / 25) * 100)} ${dsoData.map((d, i) => `L ${(i / (dsoData.length - 1)) * 100},${(100 - ((d.value - 25) / 25) * 100)}`).join(' ')}`}
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.4, ease: "easeInOut" }}
                />

                {/* Data points */}
                {dsoData.map((point, index) => (
                  <motion.g key={point.month}>
                    <motion.circle
                      cx={`${(index / (dsoData.length - 1)) * 100}`}
                      cy={`${(100 - ((point.value - 25) / 25) * 100)}`}
                      r="2"
                      fill="white"
                      stroke="#a855f7"
                      strokeWidth="1.5"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                      className="cursor-pointer"
                    />
                  </motion.g>
                ))}
              </svg>

              {/* X-axis labels */}
              <div className="absolute bottom-0 left-4 right-4 flex justify-between">
                {dsoData.map((point, index) => (
                  <motion.span
                    key={point.month}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="text-xs text-gray-600 font-medium"
                  >
                    {point.month}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Chart 4 - Customer Segments (Horizontal Bar Chart) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[var(--card)] rounded-2xl p-6 shadow-lg border-2 border-gray-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                <Users className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Customer Segments</h3>
                <p className="text-xs text-gray-500">Payment behavior</p>
              </div>
            </div>
            
            {/* Horizontal Bar Chart */}
            <div className="space-y-4">
              {segmentData.map((segment, index) => (
                <motion.div
                  key={segment.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-900">{segment.label}</span>
                    <span className="text-sm font-bold text-gray-900">{segment.value}%</span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${segment.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                      className="h-full rounded-full relative"
                      style={{ backgroundColor: segment.color }}
                    >
                      {/* Shimmer effect */}
                      <motion.div
                        animate={{
                          x: ['-100%', '100%']
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                          delay: 1 + index * 0.1
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Summary stats */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-6 pt-4 border-t border-gray-100 grid grid-cols-2 gap-4"
            >
              <div>
                <p className="text-xs text-gray-500">Total Customers</p>
                <p className="text-xl font-bold text-gray-900">1,247</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Avg Payment Time</p>
                <p className="text-xl font-bold text-gray-900">28 days</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
