import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://propertytaxcalc.net"),
  title: {
    default: "PropertyTaxCalculator — Local Rate Estimator",
    template: "%s · PropertyTaxCalculator",
  },
  description: "Estimate property tax with your assessed value, exemption, and local rate.",
  applicationName: "PropertyTaxCalculator",
  openGraph: {
    type: "website",
    siteName: "PropertyTaxCalculator",
    title: "PropertyTaxCalculator — Local Rate Estimator",
    description: "Estimate property tax with your assessed value, exemption, and local rate.",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {process.env.NEXT_PUBLIC_ADS_ENABLED === "true" && (
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9889586007871680"
            crossOrigin="anonymous"
            suppressHydrationWarning
          />
        )}
      </head>
      <body className="min-h-screen bg-white text-ink antialiased">
        <header className="border-b border-line bg-white">
          <div className="mx-auto max-w-6xl px-4 py-4 flex flex-wrap gap-4 items-center justify-between">
            <Link href="/" className="font-serif text-xl font-bold tracking-tight">
              PropertyTaxCalculator
            </Link>
            <nav aria-label="Main navigation" className="flex flex-wrap gap-4 text-sm">
              <Link href="/calculator" className="hover:text-accent">Tax Calculator</Link>
              <Link href="/learn/property-tax-rates-by-state" className="hover:text-accent">Local Rates Guide</Link>
              <Link href="/about" className="hover:text-accent">About</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-line mt-20 py-10 bg-soft">
          <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-3 gap-8 text-sm text-gray-700">
            <div>
              <div className="font-serif text-lg font-bold text-ink mb-2">PropertyTaxCalculator</div>
              <p>Estimate property tax with your own assessed value and local rate.</p>
            </div>
            <div>
              <div className="font-semibold text-ink mb-2">Guides</div>
              <ul className="space-y-1">
                <li><Link href="/learn/property-tax-rates-by-state/" className="hover:text-accent">Finding Local Rates</Link></li>
                <li><Link href="/learn/how-to-appeal-property-tax/" className="hover:text-accent">How to Appeal Your Property Tax</Link></li>
                <li><Link href="/learn/states-with-lowest-property-taxes/" className="hover:text-accent">Comparing Property Taxes</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-ink mb-2">Site</div>
              <ul className="space-y-1">
                <li><Link href="/about" className="hover:text-accent">About</Link></li>
                <li><Link href="/privacy" className="hover:text-accent">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-accent">Terms</Link></li>
                <li><Link href="/methodology" className="hover:text-accent">Methodology</Link></li>
                <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="mx-auto max-w-6xl px-4 mt-8 text-xs text-gray-500">
            © {new Date().getFullYear()} PropertyTaxCalculator. Educational content only. Not financial or legal advice.
          </div>
        </footer>
      </body>
    </html>
  );
}
