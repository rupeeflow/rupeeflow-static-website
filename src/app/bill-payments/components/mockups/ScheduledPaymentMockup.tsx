'use client';

import { motion } from 'framer-motion';
import { Calendar, CheckCircle2, Clock } from 'lucide-react';

interface MockupProps {
  className?: string;
}

/**
 * ScheduledPaymentMockup - Animated mockup showing calendar with scheduled payments
 * 
 * Features:
 * - Calendar visualization with scheduled payments
 * - Date markers and payment indicators
 * - Floating animation with y-axis movement between -7px and 0px
 * - 5 second loop duration for smooth, ambient animation
 * 
 * Requirements: 4.1, 4.6, 11.3
 */
export default function ScheduledPaymentMockup({ className = '' }: MockupProps) {
  // Current month calendar data (simplified)
  const currentDate = 15;
  const scheduledDates = [
    { date: 10, label: 'Electricity', status: 'completed', amount: '₹2,450' },
    { date: 15, label: 'Internet', status: 'today', amount: '₹999' },
    { date: 22, label: 'Water', status: 'upcoming', amount: '₹450' },
    { date: 28, label: 'Gas', status: 'upcoming', amount: '₹850' },
  ];

  return (
    <motion.div
      animate={{
        y: [0, -7, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={`relative ${className}`}
    >
      {/* Glow effect behind mockup */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 blur-2xl rounded-3xl" />
      
      {/* Calendar card */}
      <div className="relative bg-[var(--card)] rounded-2xl shadow-xl border border-gray-200 p-6 max-w-sm mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-[var(--foreground)]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Scheduled Payments</p>
              <p className="text-xs text-gray-500">December 2024</p>
            </div>
          </div>
        </div>

        {/* Mini calendar grid */}
        <div className="mb-6">
          {/* Weekday headers */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
              <div key={i} className="text-center text-xs font-medium text-gray-500 py-1">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar dates */}
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: 35 }, (_, i) => {
              const date = i - 2; // Start from day 1 (adjust offset as needed)
              const isValidDate = date > 0 && date <= 31;
              const isScheduled = scheduledDates.find(d => d.date === date);
              const isToday = date === currentDate;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.01 }}
                  className={`
                    aspect-square flex items-center justify-center text-xs rounded-lg
                    ${!isValidDate ? 'text-gray-300' : ''}
                    ${isToday && !isScheduled ? 'bg-gray-100 font-semibold text-gray-900' : ''}
                    ${isScheduled?.status === 'completed' ? 'bg-emerald-100 text-emerald-700 font-semibold' : ''}
                    ${isScheduled?.status === 'today' ? 'bg-gradient-to-br from-emerald-500 to-teal-600 text-[var(--foreground)] font-bold' : ''}
                    ${isScheduled?.status === 'upcoming' ? 'bg-blue-100 text-blue-700 font-semibold' : ''}
                    ${!isScheduled && isValidDate && !isToday ? 'text-gray-700' : ''}
                  `}
                >
                  {isValidDate ? date : ''}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Scheduled payments list */}
        <div className="space-y-3">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Upcoming Payments</p>
          
          {scheduledDates.filter(p => p.status !== 'completed').map((payment, index) => (
            <motion.div
              key={payment.date}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`
                flex items-center gap-3 p-3 rounded-xl
                ${payment.status === 'today' ? 'bg-emerald-50 border border-emerald-200' : 'bg-gray-50'}
              `}
            >
              <div className={`
                w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0
                ${payment.status === 'today' ? 'bg-gradient-to-br from-emerald-500 to-teal-600' : 'bg-blue-100'}
              `}>
                {payment.status === 'today' ? (
                  <Clock className="w-4 h-4 text-[var(--foreground)]" />
                ) : (
                  <span className="text-xs font-bold text-blue-700">{payment.date}</span>
                )}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{payment.label}</p>
                <p className="text-xs text-gray-600">
                  {payment.status === 'today' ? 'Processing today' : `Due on Dec ${payment.date}`}
                </p>
              </div>
              <span className="text-sm font-semibold text-gray-900">{payment.amount}</span>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-200">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded bg-emerald-100" />
            <span className="text-xs text-gray-600">Paid</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded bg-gradient-to-br from-emerald-500 to-teal-600" />
            <span className="text-xs text-gray-600">Today</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded bg-blue-100" />
            <span className="text-xs text-gray-600">Upcoming</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
