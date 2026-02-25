'use client';
//test

import { motion } from 'framer-motion';
import { Shield, CheckCircle, FileCheck, Lock } from 'lucide-react';

const complianceFeatures = [
  {
    icon: Shield,
    title: 'GST Compliant',
    description: 'Fully compliant with GST regulations and e-invoicing mandates',
  },
  {
    icon: FileCheck,
    title: 'IRP Certified',
    description: 'Certified integration with Government Invoice Registration Portal',
  },
  {
    icon: Lock,
    title: 'Data Security',
    description: 'Bank-grade encryption and ISO 27001 certified infrastructure',
  },
  {
    icon: CheckCircle,
    title: 'Audit Ready',
    description: 'Complete audit trail with tamper-proof records',
  },
];

export default function ComplianceSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-900 to-teal-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff20_1px,transparent_1px),linear-gradient(to_bottom,#ffffff20_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      </div>

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="fontheading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Built for{' '}
            <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
              Compliance & Security
            </span>
          </h2>
          <p className="fontbody2 text-lg text-emerald-100 max-w-2xl mx-auto">
            Enterprise-grade security and compliance features you can trust
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {complianceFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-400/20 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-emerald-300" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-emerald-100">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-emerald-200"
        >
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            <span>ISO 27001 Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            <span>SOC 2 Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            <span>GDPR Ready</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            <span>RBI Guidelines</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
