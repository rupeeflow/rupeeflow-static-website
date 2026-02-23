"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

type FAQ = {
  question: string
  answer: string
}

interface CardFAQProps {
  faqs: FAQ[]
}

export default function CardFAQ({ faqs }: CardFAQProps) {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section className="py-24 bg-gray-300">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl font-semibold text-gray-900 text-center mb-14">
          Frequently Asked{" "}
          <span className="text-emerald-600">Questions</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className="
                bg-white
                border border-gray-200
                rounded-xl
                transition
                hover:shadow-md
              "
            >
              {/* QUESTION */}
              <div className="flex justify-between items-center px-6 py-5 cursor-pointer">
                <p className="text-gray-800 font-medium">
                  {faq.question}
                </p>

                <ChevronDown
                  className={`text-emerald-500 transition-transform duration-300 ${
                    active === i ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* ANSWER */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  active === i ? "max-h-40 pb-5 px-6" : "max-h-0 px-6"
                }`}
              >
                <p className="text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}