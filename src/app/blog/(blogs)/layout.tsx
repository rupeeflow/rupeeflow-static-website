import { Metadata } from "next";
import Link from "next/link";

// Optional: default SEO metadata for all /blog pages
export const metadata: Metadata = {
  title: "RupeeFlow Blog — Fintech Insights, UPI Trends, and Digital Finance",
  description:
    "Read expert insights and stories about UPI, AI in fintech, digital banking, and the future of financial technology in India.",
  openGraph: {
    title: "RupeeFlow Blog — Fintech Insights, UPI Trends, and Digital Finance",
    description:
      "Explore how technology is shaping the future of payments and finance in India.",
    url: "https://yourdomain.com/blog",
    siteName: "RupeeFlow",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RupeeFlow Blog — Fintech Insights and UPI Innovation",
    description:
      "Explore India's leading fintech trends, UPI innovations, and global financial technology insights.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen bg-gray-50 text-gray-900">
      {/* Top Banner */}
      <div className="border-b bg-white sticky top-0 z-20 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold text-emerald-700">
            RupeeFlow
          </Link>
          <Link
            href="/blog"
            className="text-sm text-gray-600 hover:text-emerald-700 transition"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>

      {/* Blog content wrapper */}
      <main className="max-w-4xl mx-auto py-12 px-6">{children}</main>

      {/* Footer */}
      <footer className="border-t mt-20 py-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} RupeeFlow. All rights reserved.
      </footer>
    </section>
  );
}
