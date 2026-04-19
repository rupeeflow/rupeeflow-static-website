'use client'

import { motion } from 'framer-motion'

const languages = [
  { english: 'Hindi', native: 'हिन्दी', users: '500M+', color: 'from-orange-500 to-red-500', icon: '🇮🇳' },
  { english: 'English', native: 'English', users: '125M+', color: 'from-blue-500 to-indigo-500', icon: '🇬🇧' },
  { english: 'Telugu', native: 'తెలుగు', users: '75M+', color: 'from-purple-500 to-pink-500', icon: '📱' },
  { english: 'Marathi', native: 'मराठी', users: '72M+', color: 'from-yellow-500 to-orange-500', icon: '💬' },
  { english: 'Tamil', native: 'தமிழ்', users: '69M+', color: 'from-green-500 to-teal-500', icon: '🗣️' },
  { english: 'Gujarati', native: 'ગુજરાતી', users: '46M+', color: 'from-cyan-500 to-blue-500', icon: '💭' },
  { english: 'Kannada', native: 'ಕನ್ನಡ', users: '44M+', color: 'from-red-500 to-pink-500', icon: '🎯' },
  { english: 'Bengali', native: 'বাংলা', users: '83M+', color: 'from-emerald-500 to-green-500', icon: '🌟' },
  { english: 'Punjabi', native: 'ਪੰਜਾਬੀ', users: '33M+', color: 'from-violet-500 to-purple-500', icon: '🎵' },
  { english: 'Malayalam', native: 'മലയാളം', users: '33M+', color: 'from-teal-500 to-cyan-500', icon: '🌊' },
  { english: 'Odia', native: 'ଓଡ଼ିଆ', users: '35M+', color: 'from-amber-500 to-yellow-500', icon: '☀️' },
  { english: 'Assamese', native: 'অসমীয়া', users: '15M+', color: 'from-lime-500 to-green-500', icon: '🍃' },
]

export default function WhatsAppBankingLanguages() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#020506] to-[#0a1a15] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,211,102,0.1),transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Bank in Your <span className="text-[#25D366]">Language</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Communicate naturally in any of 12 Indian languages. Our AI understands context, slang, and regional variations.
          </p>
        </motion.div>

        {/* Language Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {languages.map((language, index) => (
            <motion.div
              key={language.english}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
              }}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-[#25D366]/50 transition-all duration-300"
            >
              {/* Animated Background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${language.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}
                initial={false}
              />
              
              {/* Icon */}
              <motion.div
                className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.5,
                  ease: "easeInOut"
                }}
              >
                {language.icon}
              </motion.div>
              
              {/* Native Text */}
              <motion.div
                className={`text-3xl font-bold bg-gradient-to-r ${language.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
              >
                {language.native}
              </motion.div>
              
              <div className="text-sm text-white mb-1">{language.english}</div>
              <div className="text-xs text-gray-400">{language.users} speakers</div>
              
              {/* Floating Particles */}
              <motion.div
                className="absolute top-2 right-2 w-2 h-2 bg-[#25D366] rounded-full opacity-0 group-hover:opacity-100"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Demo Examples */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            See How Natural It Feels
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                language: 'Hindi',
                example: 'Paisa bhejo mere bhai ko',
                translation: 'Send money to my brother',
                response: '✅ ₹5,000 sent to Rahul Kumar'
              },
              {
                language: 'Telugu',
                example: 'Naa current bill kattu',
                translation: 'Pay my electricity bill',
                response: '✅ ₹1,240 paid to TSEDCL'
              },
              {
                language: 'Tamil',
                example: 'Enakku loan venum',
                translation: 'I need a loan',
                response: '✅ ₹25,000 loan approved!'
              }
            ].map((demo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-white/5 rounded-xl p-6 border border-white/10"
              >
                <div className="text-sm text-[#25D366] font-semibold mb-2">{demo.language}</div>
                <div className="text-white font-medium mb-2">"{demo.example}"</div>
                <div className="text-gray-400 text-sm mb-3 italic">{demo.translation}</div>
                <div className="text-[#30f3bc] text-sm font-medium">{demo.response}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Voice Support Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[#25D366]/20 to-[#30f3bc]/20 border border-[#25D366]/30 rounded-full px-8 py-4 mb-6">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-3 h-3 bg-[#25D366] rounded-full"
            />
            <span className="text-white font-semibold">Voice Messages Supported</span>
            <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Can't type? No problem! Send voice messages in any language and our AI will understand and process your banking requests instantly.
          </p>
        </motion.div>
      </div>
    </section>
  )
}