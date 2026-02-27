'use client';

import { motion } from 'framer-motion';
import { Bell, Zap, Wifi, Droplet } from 'lucide-react';

interface MockupProps {
  className?: string;
}

/**
 * ReminderMockup - Animated mockup showing payment reminders
 * 
 * Features:
 * - Notification cards showing payment reminders
 * - Bell icon and reminder text
 * - Floating animation with y-axis movement between -7px and 0px
 * - 5 second loop duration for smooth, ambient animation
 * 
 * Requirements: 4.1, 11.4
 */
export default function ReminderMockup({ className = '' }: MockupProps) {
  const reminders = [
    {
      icon: Zap,
      title: 'Electricity Bill Due',
      message: 'State Power Co. - ₹2,450 due in 3 days',
      time: '2 hours ago',
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600',
    },
    {
      icon: Wifi,
      title: 'Internet Bill Reminder',
      message: 'Broadband Services - ₹999 due tomorrow',
      time: '5 hours ago',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      icon: Droplet,
      title: 'Water Bill Due Soon',
      message: 'Municipal Water - ₹450 due in 5 days',
      time: '1 day ago',
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'bg-cyan-50',
      iconColor: 'text-cyan-600',
    },
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
      
      {/* Reminder notifications card */}
      <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-6 max-w-sm mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center relative">
              <Bell className="w-5 h-5 text-white" />
              {/* Notification badge */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center border-2 border-white"
              >
                <span className="text-xs font-bold text-white">3</span>
              </motion.div>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Payment Reminders</p>
              <p className="text-xs text-gray-500">You have 3 upcoming bills</p>
            </div>
          </div>
        </div>

        {/* Reminder notifications */}
        <div className="space-y-3">
          {reminders.map((reminder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className={`${reminder.bgColor} rounded-xl p-4 border border-gray-100`}
            >
              <div className="flex items-start gap-3">
                {/* Icon */}
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${reminder.color} flex items-center justify-center flex-shrink-0`}>
                  <reminder.icon className="w-5 h-5 text-white" />
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="text-sm font-semibold text-gray-900">{reminder.title}</p>
                    <span className="text-xs text-gray-500 whitespace-nowrap">{reminder.time}</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">{reminder.message}</p>
                  
                  {/* Action button */}
                  <button className="mt-2 text-xs font-medium text-emerald-600 hover:text-emerald-700 transition-colors">
                    Pay Now →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Settings link */}
        <div className="mt-4 pt-4 border-t border-gray-200 text-center">
          <button className="text-xs font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Manage Reminder Settings
          </button>
        </div>
      </div>
    </motion.div>
  );
}
