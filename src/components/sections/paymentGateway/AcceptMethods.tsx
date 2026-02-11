const methods = [
  'UPI',
  'Net Banking',
  'Wallets',
  'Debit Cards',
  'Credit Cards',
  'BNPL'
]

export default function AcceptMethods() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold">
          Accept Every Payment Method
        </h2>

        <p className="text-gray-500 mt-2">
          No matter what app, platform or card you use
        </p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
          {methods.map(item => (
            <div
              key={item}
              className="border rounded-xl p-6 hover:shadow-lg transition"
            >
              <h4 className="font-semibold">{item}</h4>
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}
