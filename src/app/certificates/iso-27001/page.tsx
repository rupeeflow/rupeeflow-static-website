import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'ISO 27001 Certificate - RupeeFlow',
}

export default function CertificatePage() {
  return (
    <main className="min-h-screen bg-[#07110d] text-gray-200 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-[#071914] rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-semibold text-emerald-400 mb-6">
          ISO/IEC 27001:2022 Certificate
        </h1>

        <div className="mb-6">
          <p className="text-sm text-gray-300 mb-4">
            Click the image below to open the full certificate file in a new tab
            (if present in the public folder).
          </p>

          <a
            href="/ISO-certificate.png"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-4"
          >
            <Image
              src="/ISO-certificate.png"
              alt="ISO 27001 certificate"
              width={900}
              height={1150}
              className="rounded-md border border-[var(--border)] object-contain"
            />
          </a>

          <p className="text-xs text-gray-400">
            If the full certificate image is not available, the badge is shown
            instead and you can download or replace the file at{' '}
            <code>public/ISO-certificate.png</code>.
          </p>
        </div>

        <section className="prose prose-invert text-sm">
          <h2 className="text-emerald-300">Certificate Details</h2>
          <p>Issued on behalf of InterCert — Head - Certifications</p>

          <p>
            The validity of this certificate can be verified at{' '}
            <a href="https://www.intercert.com" className="text-emerald-300">
              www.intercert.com
            </a>{' '}
            or through email at{' '}
            <a href="mailto:info@intercert.com" className="text-emerald-300">
              info@intercert.com
            </a>
            . This certificate is the property of INTERCERT INC, 2001 Timberloch
            Place - Suite 500, The Woodlands, Texas 77380, United States and
            must be returned on request.
          </p>

          <p>
            <strong>Certified Organization:</strong> RUPEEFLOW FINANCE PRIVATE
            LIMITED
            <br />
            <strong>Address:</strong> NO. 112 AKR TECH PARK, KRISHNA REDDY IND.
            AREA, Bommanahalli (Bangalore), Bangalore South, Bangalore 560068,
            Karnataka, India
          </p>

          <p>
            <strong>Standard:</strong> ISO/IEC 27001:2022
            <br />
            <strong>Scope:</strong> The Information Security Management System
            at RUPEEFLOW FINANCE PRIVATE LIMITED includes payment aggregation
            solutions (as a TSP), lending, and financial inclusion services, and
            encompasses the Software Development, Maintenance, Business
            Development, and Operations departments.
          </p>

          <ul>
            <li>SOA Version: -1.0</li>
            <li>Initial Certification Date: June 04, 2026</li>
            <li>Certificate Issue Date: June 04, 2026</li>
            <li>Surveillance Validity Date: June 03, 2027</li>
            <li>Recertification Date: June 03, 2029</li>
            <li>Registration Number: IC-IS-2606045</li>
            <li>Validity: June 04, 2026 to June 03, 2027</li>
          </ul>

          <p className="mt-6">
            <Link href="/" className="text-emerald-300 hover:underline">
              Back to site
            </Link>
          </p>
        </section>
      </div>
    </main>
  )
}
