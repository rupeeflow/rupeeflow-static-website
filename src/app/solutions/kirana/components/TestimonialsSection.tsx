'use client'

export default function TestimonialsSection() {
  return (
    <section className="relative z-10 py-24 px-6 bg-[var(--card)] backdrop-blur-md border-t border-[var(--border)]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="fontheadingthin text-5xl md:text-6xl text-[var(--foreground)] mb-12">
          What Shop Owners Say
        </h2>

        <div className="space-y-10">
          <blockquote className="text-gray-300 fontbody2 italic text-lg">
            “I run a tea stall in Bhagalpur. Network dies by 4 PM. With
            RupeeFlow, I never lose a sale. Last week: ₹8,400 in offline txns!”
            <br />
            <span className="not-italic font-semibold text-emerald-400">
              — Rajesh Kumar, Chaiwala
            </span>
          </blockquote>

          <blockquote className="text-gray-300 fontbody2 italic text-lg">
            “Voice payment in Hindi is magic. My mother runs the shop now. No
            typing, no mistakes.”
            <br />
            <span className="not-italic font-semibold text-emerald-400">
              — Sunita Devi, Kirana Store
            </span>
          </blockquote>
        </div>
      </div>
    </section>
  )
}