export default function InvoiceManagementPage() {
  return (
    <main className="bg-[#020506] text-white">
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h1 className="text-4xl font-bold">
            Centralized Invoice Control for Better Visibility
          </h1>
          <p className="text-gray-400 mt-6">
            Create, approve, track, and manage invoices across their lifecycle
            from a single intelligent dashboard.
          </p>

          <ul className="mt-8 space-y-3 text-gray-300">
            <li>✔ Lifecycle tracking & approvals</li>
            <li>✔ Real-time invoice status</li>
            <li>✔ Workflow automation</li>
            <li>✔ Faster payment processing</li>
          </ul>
        </div>

        <div className="bg-white border border-green-200 rounded-xl h-[320px]" />

      </section>
    </main>
  );
}