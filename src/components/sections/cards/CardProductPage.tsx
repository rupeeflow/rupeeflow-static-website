import Container from "@/components/ui/Container"
import MainCTA from "@/components/ui/mainCTA"

type Props = {
  title: string
  subtitle: string
  description: string
  features: { title: string; desc: string }[]
  benefits: { title: string; desc: string }[]
}

export default function CardProductPage({
  title,
  subtitle,
  description,
  features,
  benefits,
}: Props) {
  return (
    <div className="py-20">

      {/* HERO + FEATURES */}
      <Container>
        {/* HERO */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
            <p className="text-xl text-emerald-600 mt-4">{subtitle}</p>
            <p className="text-gray-600 mt-6 leading-relaxed">
              {description}
            </p>

            <div className="mt-8">
              <MainCTA label="Get Started" destination="/signup" />
            </div>
          </div>

          {/* IMAGE */}
          <div className="bg-gray-100 rounded-2xl aspect-video flex items-center justify-center text-gray-400">
            Product Image
          </div>
        </div>

        {/* FEATURES */}
        <div className="mt-24">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Key Features
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition"
              >
                <div className="h-12 w-12 bg-emerald-50 rounded-lg mb-4" />
                <h3 className="font-semibold text-lg">{f.title}</h3>
                <p className="text-gray-600 mt-2">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* ✅ FULL WIDTH DARK BENEFITS SECTION */}
      <div className="mt-24 py-24 bg-gradient-to-b from-[#0F0F0F] to-[#0C1F18]">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-semibold text-center text-white mb-12">
            Why Businesses Choose This
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <div
                key={i}
                className={`p-7 rounded-2xl border border-white/10
                transition-all duration-300 hover:-translate-y-1
                ${
                  i === 1
                    ? "bg-[#0C1F18] shadow-emerald-900/40"
                    : "bg-[#0F0F0F] hover:bg-[#0C1F18]"
                }`}
              >
                <h3 className="font-semibold text-white text-lg">
                  {b.title}
                </h3>
                <p className="text-gray-400 mt-3 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* CTA */}
      <Container>
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-semibold">
            Ready to streamline your spending?
          </h3>
          <p className="text-gray-600 mt-3">
            Get started in minutes and take control of business expenses.
          </p>

          <div className="mt-6 flex justify-center">
            <MainCTA label="Get Started" destination="/signup" />
          </div>
        </div>
      </Container>

    </div>
  )
}
