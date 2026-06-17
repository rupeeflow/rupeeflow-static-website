'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Cpu, Wallet, ShieldCheck, CreditCard, Building } from 'lucide-react'
import Image from 'next/image'

// Product data for card transitions
const products = [
  {
    id: 'payment-gateway',
    title: 'Payment Gateway',
    subtitle: 'Accept 100+ payment modes',
    description: 'UPI, cards, net banking, wallets with zero-code setup.',
    features: ['T+1 settlement', '99.9% uptime', 'Smart routing'],
    image: '/different/gateway.png',
    icon: Cpu,
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'vendor-payouts',
    title: 'Vendor Payouts',
    subtitle: 'Instant bulk payments',
    description: 'Pay vendors in seconds via NEFT, RTGS, IMPS.',
    features: ['10K+ payouts/batch', 'Auto-reconciliation', 'Real-time status'],
    image: '/different/vendor.png',
    icon: Wallet,
    color: 'from-emerald-500 to-teal-600'
  },
  {
    id: 'business-credit',
    title: 'Business Credit',
    subtitle: 'Up to ₹50L instantly',
    description: 'AI-powered underwriting for instant approval.',
    features: ['24-hour approval', 'Paperless process', 'Flexible terms'],
    image: '/different/business.png',
    icon: ShieldCheck,
    color: 'from-purple-500 to-violet-600'
  },
  {
    id: 'upi-collection',
    title: 'UPI Collections',
    subtitle: 'Accept UPI with ease',
    description: 'Generate QR codes with instant settlement.',
    features: ['0.65% UPI rate', 'Real-time tracking', 'Custom branding'],
    image: '/different/collections.png',
    icon: CreditCard,
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 'business-cards',
    title: 'Business Cards',
    subtitle: 'Corporate expense cards',
    description: 'Virtual and physical cards with spend controls.',
    features: ['Real-time alerts', 'Auto expense sync', 'Spend limits'],
    image: '/different/gateway.png',
    icon: Building,
    color: 'from-green-500 to-emerald-600'
  }
]

export default function StopUsingApps() {
  const sectionRef = useRef<HTMLDivElement>(null!)
  const contentRef = useRef<HTMLDivElement>(null!)
  const cardContainerRef = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    if (typeof window === 'undefined') return

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      
      // Set initial state for all cards (hidden except first)
      products.forEach((_, index) => {
        const card = document.querySelector(`.product-card-${index}`)
        if (card) {
          if (index === 0) {
            // First card visible initially
            gsap.set(card, { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' })
          } else {
            // All other cards hidden initially
            gsap.set(card, { opacity: 0, y: 40, scale: 0.97, filter: 'blur(4px)' })
          }
        }
      })

      // Create pinned scroll-triggered animation with smoother transitions
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=500%', // Increased for even smoother scrolling
        pin: contentRef.current,
        scrub: 1.5, // Increased scrub for smoother feel
        onUpdate: (self) => {
          const progress = self.progress
          const totalCards = products.length
          
          // Calculate which card should be active based on scroll progress
          // 0% = Card 0, 20% = Card 1, 40% = Card 2, 60% = Card 3, 80% = Card 4
          const segmentSize = 1 / (totalCards - 1)
          const currentIndex = Math.min(Math.floor(progress / segmentSize), totalCards - 1)
          const nextIndex = Math.min(currentIndex + 1, totalCards - 1)
          let segmentProgress = (progress % segmentSize) / segmentSize
          
          // Apply smooth easing to segment progress for more natural feel
          // Using a simple easing function instead of parseEase
          segmentProgress = segmentProgress * segmentProgress * (3 - 2 * segmentProgress) // smoothstep function

          products.forEach((_, index) => {
            const card = document.querySelector(`.product-card-${index}`)
            if (!card) return

            if (index === currentIndex) {
              // Current card - animate out with smooth easing
              const outOpacity = gsap.utils.interpolate(1, 0, segmentProgress)
              const outY = gsap.utils.interpolate(0, -40, segmentProgress)
              const outScale = gsap.utils.interpolate(1, 0.97, segmentProgress)
              const outBlur = gsap.utils.interpolate(0, 4, segmentProgress)

              gsap.set(card, {
                opacity: outOpacity,
                y: outY,
                scale: outScale,
                filter: `blur(${outBlur}px)`,
                zIndex: 1
              })
            } else if (index === nextIndex && currentIndex !== nextIndex) {
              // Next card - animate in with smooth easing
              const inOpacity = gsap.utils.interpolate(0, 1, segmentProgress)
              const inY = gsap.utils.interpolate(40, 0, segmentProgress)
              const inScale = gsap.utils.interpolate(0.97, 1, segmentProgress)
              const inBlur = gsap.utils.interpolate(4, 0, segmentProgress)

              gsap.set(card, {
                opacity: inOpacity,
                y: inY,
                scale: inScale,
                filter: `blur(${inBlur}px)`,
                zIndex: 2
              })
            } else if (index < currentIndex) {
              // Cards that are done - keep hidden above
              gsap.set(card, {
                opacity: 0,
                y: -40,
                scale: 0.97,
                filter: 'blur(4px)',
                zIndex: 0
              })
            } else if (index > nextIndex) {
              // Cards waiting to appear - keep hidden below
              gsap.set(card, {
                opacity: 0,
                y: 40,
                scale: 0.97,
                filter: 'blur(4px)',
                zIndex: 0
              })
            }
          })
        }
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-white">
      <div ref={contentRef} className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            
            {/* Left Column - Pinned Content */}
            <div className="space-y-8 lg:sticky lg:top-24">
              <div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  <span className="text-emerald-500">Stop</span> Using 5<br />
                  Different Apps
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-lg">
                  One unified platform for AI-powered payments, instant payouts, smart cards, and business credit — everything your business needs, seamlessly connected.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center mt-0.5 shrink-0">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-gray-700 text-lg">
                    Replace 5 separate vendors with 1 integrated solution
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center mt-0.5 shrink-0">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-gray-700 text-lg">
                    Unified API, single dashboard, consolidated reporting
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center mt-0.5 shrink-0">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-gray-700 text-lg">
                    Lower costs, faster integration, better experience
                  </p>
                </div>
              </div>
              
              {/* Progress indicator */}
              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm text-emerald-600 font-semibold">
                  Scroll to explore all 5 products in one platform
                </p>
              </div>
            </div>

            {/* Right Column - Product Card Container */}
            <div className="relative lg:sticky lg:top-24">
              <div 
                ref={cardContainerRef} 
                className="relative w-full max-w-lg mx-auto bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 min-h-[600px] overflow-hidden transition-all duration-300 ease-out"
                style={{
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.05)'
                }}
              >
                {/* All product cards positioned absolutely */}
                {products.map((product, index) => (
                  <div
                    key={product.id}
                    className={`product-card-${index} absolute inset-0 p-8 flex flex-col justify-between`}
                    style={{
                      willChange: 'transform, opacity, filter',
                      backfaceVisibility: 'hidden',
                      perspective: '1000px'
                    }}
                  >
                    {/* Card header */}
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-4 rounded-2xl bg-gradient-to-br ${product.color} shadow-lg shrink-0`}>
                          <product.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
                            {product.title}
                          </h3>
                          <div className="inline-flex px-3 py-1.5 rounded-full text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200">
                            {product.subtitle}
                          </div>
                        </div>
                      </div>

                      {/* Product description */}
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {product.description}
                      </p>

                      {/* Product image */}
                      <div className="rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 p-6">
                        <Image
                          src={product.image}
                          alt={product.title}
                          width={400}
                          height={240}
                          className="w-full h-32 object-contain"
                        />
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mt-8">
                      <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                        Key Features
                      </h4>
                      {product.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-3 text-gray-600"
                        >
                          <div className="w-2 h-2 bg-emerald-500 rounded-full shrink-0"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}