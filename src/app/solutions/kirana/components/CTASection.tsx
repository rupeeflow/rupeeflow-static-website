'use client'

export default function CTASection() {
  return (
    <section className="relative z-10 py-24 px-6 bg-gray-100 text-black text-center rounded-t-3xl">
      <div className="max-w-4xl mx-auto">
        <h2 className="fontheadingthin text-5xl md:text-6xl mb-6">
          Be the First in Your Village
        </h2>
        <p className="fontbody2 text-lg mb-8">
          Join 500+ beta merchants. Limited spots. Free setup. 0% fee. Start
          today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-neutral-900 transition">
            Join via WhatsApp (Free)
          </button>
          <p className="fontbody2 text-base">
            Or call:{' '}
            <span className="text-black font-semibold">+91 98765 43210</span>
          </p>
        </div>
      </div>
    </section>
  )
}
