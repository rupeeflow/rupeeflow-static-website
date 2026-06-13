'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check, ArrowRight, FileText } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#020506] via-gray-900 to-[#020506] text-[var(--foreground)] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 backdrop-blur-sm rounded-full mb-6">
            <FileText className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium text-emerald-400">Transform Your Workflow</span>
          </div>

          <h2 className="fontheading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Streamline Invoice{' '}
            <span className="bg-gradient-to-r from-[#53BEC2] to-[#00EF64] bg-clip-text text-transparent">
              Management
            </span>
          </h2>

          <p className="fontbody2 text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses managing invoices efficiently
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-[var(--foreground)] font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-200 inline-flex items-center justify-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/demo"
              className="px-8 py-4 border-2 border-emerald-500/50 text-[var(--foreground)] font-semibold rounded-xl hover:bg-emerald-500/10 hover:border-emerald-500 transition-all duration-200"
            >
              Book a Demo
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            {['Free 14-day trial', 'No credit card', 'Cancel anytime'].map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
