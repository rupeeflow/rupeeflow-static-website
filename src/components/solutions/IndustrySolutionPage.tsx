import Link from 'next/link'
import {
  ERP_URL,
  ONICHANNEL_LABEL,
  industrySolutions,
  type IndustrySolution,
} from '@/data/industrySolutions'
import {
  FAQSchema,
  IndustryServiceSchema,
  WebPageSchema,
} from '@/components/StructuredData'

type Props = {
  solution: IndustrySolution
}

export default function IndustrySolutionPage({ solution }: Props) {
  const related = industrySolutions
    .filter(item => item.slug !== solution.slug)
    .slice(0, 5)

  return (
    <div className="bg-white text-[#0B1628]">
      <WebPageSchema
        title={solution.metaTitle}
        description={solution.metaDescription}
        url={`/solutions/${solution.slug}`}
      />
      <IndustryServiceSchema solution={solution} />
      <FAQSchema faqs={solution.faqs} />

      {/* Hero — matches homepage dark treatment */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#020506] via-[#0a1a15] to-[#07130f]">
        <div className="absolute left-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(3,151,137,0.22),transparent_65%)]" />
        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#30f3bc]/80">
            {solution.eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-[1.15] text-white sm:text-5xl">
            {solution.headline}
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base">
            {solution.subheadline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={ERP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-[#0bbf7d] to-[#4ade80] px-6 py-3 text-sm font-semibold text-black transition hover:opacity-95"
            >
              Open {ONICHANNEL_LABEL}
            </a>
            <Link
              href="/contact"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#30f3bc]/50"
            >
              Talk to us
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
            {solution.outcomes.map(item => (
              <div key={item.label} className="bg-[#020506]/80 px-5 py-6">
                <p className="text-xl font-bold text-[#30f3bc] sm:text-2xl">
                  {item.value}
                </p>
                <p className="mt-1 text-sm text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical problems — list, not identical cards */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Where {solution.name} teams lose time
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
              {solution.audience}
            </p>
          </div>
          <div className="space-y-0 divide-y divide-gray-200 border-t border-gray-200">
            {solution.challenges.map((item, index) => (
              <div
                key={item.title}
                className="grid gap-2 py-5 sm:grid-cols-[48px_1fr]"
              >
                <span className="text-sm font-semibold text-emerald-700">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-[#0B1628]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-y border-gray-100 bg-[#f7faf9]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            What ships with this setup
          </h2>
          <div className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {solution.capabilities.map(item => (
              <div
                key={item.title}
                className="border-l-2 border-emerald-500 pl-4"
              >
                <h3 className="text-base font-semibold text-[#0B1628]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          How teams usually start
        </h2>
        <ol className="mt-8 space-y-6">
          {solution.steps.map((step, index) => (
            <li key={step.title} className="flex gap-4">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0B1628] text-xs font-semibold text-white">
                {index + 1}
              </span>
              <div>
                <h3 className="text-base font-semibold">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <a
          href={ERP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex rounded-full bg-[#0B1628] px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          Start on {ONICHANNEL_LABEL}
        </a>
      </section>

      {/* FAQs */}
      <section className="border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Common questions
          </h2>
          <div className="mt-6 divide-y divide-gray-200 border-t border-gray-200">
            {solution.faqs.map(faq => (
              <details key={faq.question} className="group py-5">
                <summary className="cursor-pointer list-none text-base font-semibold text-[#0B1628]">
                  {faq.question}
                </summary>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="border-t border-gray-100 bg-[#f7faf9]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-[#0B1628]">Also see</h2>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            {related.map(item => (
              <Link
                key={item.slug}
                href={`/solutions/${item.slug}`}
                className="text-sm font-medium text-emerald-700 underline-offset-4 hover:underline"
              >
                {item.shortLabel}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
