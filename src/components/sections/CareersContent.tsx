'use client'

import { motion, Variants } from 'framer-motion'
import { Briefcase, Users, Award, MapPin, Clock, DollarSign, Heart, TrendingUp, Zap, Shield } from 'lucide-react'

interface Job {
  id: string
  title: string
  department: string
  location: string
  type: string
  experience: string
  description: string
  responsibilities: string[]
  requirements: string[]
}

interface Benefit {
  icon: React.ReactNode
  title: string
  description: string
}

interface CultureValue {
  icon: React.ReactNode
  title: string
  description: string
}

const jobs: Job[] = [
  {
    id: 'backend-engineer',
    title: 'Senior Backend Engineer',
    department: 'Engineering',
    location: 'Bangalore / Remote',
    type: 'Full-time',
    experience: '4-6 years',
    description: 'Join our core engineering team to build scalable payment infrastructure that processes millions of transactions daily.',
    responsibilities: [
      'Design and develop high-performance APIs for payment processing',
      'Build microservices architecture for financial transactions',
      'Optimize database queries and implement caching strategies',
      'Ensure security compliance and PCI DSS standards',
      'Collaborate with frontend and DevOps teams'
    ],
    requirements: [
      'Strong experience with Node.js, Python, or Java',
      'Expertise in SQL and NoSQL databases',
      'Understanding of payment systems and financial APIs',
      'Experience with AWS, Docker, and Kubernetes',
      'Knowledge of security best practices in fintech'
    ]
  },
  {
    id: 'frontend-engineer',
    title: 'Frontend Engineer',
    department: 'Engineering',
    location: 'Bangalore / Remote',
    type: 'Full-time',
    experience: '3-5 years',
    description: 'Build beautiful, responsive user interfaces that make complex financial operations simple and intuitive.',
    responsibilities: [
      'Develop responsive web applications using React/Next.js',
      'Implement pixel-perfect UI designs with Tailwind CSS',
      'Build reusable component libraries',
      'Optimize application performance and load times',
      'Work closely with designers and backend engineers'
    ],
    requirements: [
      'Proficiency in React, TypeScript, and modern JavaScript',
      'Experience with Next.js and server-side rendering',
      'Strong CSS skills with Tailwind or similar frameworks',
      'Understanding of web performance optimization',
      'Knowledge of responsive design and accessibility'
    ]
  },
  {
    id: 'product-manager',
    title: 'Product Manager',
    department: 'Product',
    location: 'Bangalore',
    type: 'Full-time',
    experience: '5-7 years',
    description: 'Drive product strategy and execution for our payment solutions, working at the intersection of technology and finance.',
    responsibilities: [
      'Define product roadmap and feature prioritization',
      'Conduct user research and gather customer feedback',
      'Work with engineering teams on product development',
      'Analyze product metrics and user behavior',
      'Collaborate with sales and marketing teams'
    ],
    requirements: [
      'Experience in fintech or payment industry',
      'Strong analytical and problem-solving skills',
      'Excellent communication and stakeholder management',
      'Understanding of UPI, payment systems, and regulations',
      'Data-driven approach to product decisions'
    ]
  },
  {
    id: 'devops-engineer',
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Bangalore / Remote',
    type: 'Full-time',
    experience: '3-5 years',
    description: 'Build and maintain our cloud infrastructure ensuring 99.99% uptime for critical financial services.',
    responsibilities: [
      'Manage AWS infrastructure and deployment pipelines',
      'Implement monitoring, logging, and alerting systems',
      'Automate deployment processes with CI/CD',
      'Ensure system reliability and disaster recovery',
      'Optimize infrastructure costs and performance'
    ],
    requirements: [
      'Experience with AWS, GCP, or Azure',
      'Strong knowledge of Docker and Kubernetes',
      'Proficiency in scripting (Bash, Python)',
      'Understanding of networking and security',
      'Experience with monitoring tools (Prometheus, Grafana)'
    ]
  },
  {
    id: 'compliance-officer',
    title: 'Compliance Officer',
    department: 'Legal & Compliance',
    location: 'Bangalore',
    type: 'Full-time',
    experience: '4-6 years',
    description: 'Ensure RupeeFlow meets all regulatory requirements and maintains the highest standards of compliance.',
    responsibilities: [
      'Monitor compliance with RBI, NPCI, and payment regulations',
      'Develop and implement compliance policies',
      'Conduct regular compliance audits and assessments',
      'Liaise with regulatory authorities',
      'Train teams on compliance requirements'
    ],
    requirements: [
      'Strong knowledge of Indian payment regulations',
      'Experience in fintech compliance or banking',
      'Understanding of KYC, AML, and PCI DSS',
      'Law degree or compliance certification preferred',
      'Excellent documentation and reporting skills'
    ]
  }
]

const benefits: Benefit[] = [
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: 'Competitive Compensation',
    description: 'Industry-leading salary packages with performance bonuses and equity options for senior roles.'
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance for you and family, mental health support, and wellness programs.'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Flexible Working',
    description: 'Remote-friendly culture with flexible hours. Work from home or our modern Bangalore office.'
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Learning & Growth',
    description: 'Unlimited learning budget, conference sponsorships, and mentorship programs for career development.'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Team Events',
    description: 'Regular team outings, hackathons, and celebrations. Build lasting friendships with amazing people.'
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Performance Rewards',
    description: 'Quarterly bonuses, spot awards, and recognition programs. Your contributions truly matter.'
  }
]

const cultureValues: CultureValue[] = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Move Fast',
    description: 'We ship quickly and iterate. Speed is a feature in fintech. We value velocity without compromising quality.'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Security First',
    description: 'Trust is our foundation. We build secure systems, follow best practices, and never compromise on safety.'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Customer Obsessed',
    description: 'Every decision starts with the customer. We build products that solve real problems and delight users.'
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Own Your Impact',
    description: 'We empower you to take ownership. Make decisions, drive projects, and see your work make a difference.'
  }
]

export default function CareersContent() {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section className="py-20 bg-black-emerald">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Company Culture Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="mb-24"
        >
          <motion.div variants={item} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl fontheading2 text-gradient-teal-emerald mb-4">
              Our Culture
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto fontbody">
              At RupeeFlow, we&apos;re building more than just technology – we&apos;re creating a movement to democratize financial services in India.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {cultureValues.map((value, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-emerald-500/20 rounded-2xl p-8 hover:border-emerald-500/40 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="text-emerald-400 mb-4">{value.icon}</div>
                  <h3 className="text-2xl fontheading text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 fontbody2 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="mb-24"
        >
          <motion.div variants={item} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl fontheading2 text-gradient-teal-emerald mb-4">
              Benefits & Perks
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto fontbody">
              We invest in our people because they are our greatest asset.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={item}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-teal-500/20 rounded-xl p-6 hover:border-teal-500/40 transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <div className="text-teal-400 mb-4">{benefit.icon}</div>
                <h3 className="text-xl fontheading text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400 fontbody2 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Open Positions Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <motion.div variants={item} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl fontheading2 text-gradient-teal-emerald mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto fontbody">
              Join our mission to revolutionize payments in India. We&apos;re hiring talented individuals across multiple roles.
            </p>
          </motion.div>

          <div className="space-y-6">
            {jobs.map((job) => (
              <motion.div
                key={job.id}
                variants={item}
                className="group bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-emerald-500/20 rounded-2xl p-8 hover:border-emerald-500/40 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  {/* Job Header */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl">
                        <Briefcase className="w-6 h-6 text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl fontheading text-white mb-2 group-hover:text-emerald-400 transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-400 fontbody2">
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" /> {job.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" /> {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" /> {job.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <Award className="w-4 h-4" /> {job.experience}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 fontbody mb-6">{job.description}</p>

                    {/* Responsibilities */}
                    <div className="mb-6">
                      <h4 className="text-lg fontheading text-emerald-400 mb-3">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {job.responsibilities.map((resp, i) => (
                          <li key={i} className="text-gray-400 fontbody2 flex items-start gap-2">
                            <span className="text-emerald-500 mt-1">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Requirements */}
                    <div>
                      <h4 className="text-lg fontheading text-teal-400 mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, i) => (
                          <li key={i} className="text-gray-400 fontbody2 flex items-start gap-2">
                            <span className="text-teal-500 mt-1">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Apply Button */}
                  <div className="lg:min-w-[200px] flex lg:flex-col gap-3">
                    <a
                      href={`mailto:careers@rupeeflow.co?subject=Application for ${job.title}`}
                      className="flex-1 lg:flex-none px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white fontheading rounded-xl hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 text-center group-hover:shadow-lg group-hover:shadow-emerald-500/20"
                    >
                      Apply Now
                    </a>
                    <a
                      href={`mailto:careers@rupeeflow.co?subject=Question about ${job.title}`}
                      className="flex-1 lg:flex-none px-6 py-3 border border-emerald-500/30 text-emerald-400 fontheading rounded-xl hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300 text-center"
                    >
                      Ask Question
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* General Application */}
          <motion.div
            variants={item}
            className="mt-12 text-center bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-emerald-500/20 rounded-2xl p-12"
          >
            <h3 className="text-2xl fontheading text-white mb-4">
              Don&apos;t see a perfect fit?
            </h3>
            <p className="text-gray-400 fontbody mb-6 max-w-2xl mx-auto">
              We&apos;re always looking for talented individuals. Send us your resume and tell us how you can contribute to RupeeFlow&apos;s mission.
            </p>
            <a
              href="mailto:careers@rupeeflow.co?subject=General Application"
              className="inline-block px-8 py-4 bg-gradient-to-r from-teal-600 to-emerald-600 text-white fontheading rounded-xl hover:from-teal-500 hover:to-emerald-500 transition-all duration-300 shadow-lg hover:shadow-emerald-500/20"
            >
              Send General Application
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
