import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Guides & Resources",
  description: "Free guides and resources from PropertyTaxCalculator.",
};
export default function LearnPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-ink mb-8">Guides & Resources</h1>
      <div className="grid gap-6">
                <Link href="/learn/property-tax-rates-by-state/" className="block rounded-xl border border-line p-6 hover:border-accent transition-colors group"><h2 className="text-xl font-bold text-ink group-hover:text-accent">Property Tax Rates by State: 2025 Complete Guide</h2><p className="mt-1 text-gray-600">A complete guide to property tax rates in all 50 states, including average effective rates, median tax bills, and how each state calculates property taxes.</p></Link>
        <Link href="/learn/how-to-appeal-property-tax/" className="block rounded-xl border border-line p-6 hover:border-accent transition-colors group"><h2 className="text-xl font-bold text-ink group-hover:text-accent">How to Appeal Your Property Tax Assessment</h2><p className="mt-1 text-gray-600">Step-by-step guide to appealing your property tax assessment and potentially saving hundreds or thousands of dollars per year.</p></Link>
        <Link href="/learn/states-with-lowest-property-taxes/" className="block rounded-xl border border-line p-6 hover:border-accent transition-colors group"><h2 className="text-xl font-bold text-ink group-hover:text-accent">10 States with the Lowest Property Taxes (2025)</h2><p className="mt-1 text-gray-600">The 10 US states with the lowest property tax rates in 2025, including effective rates, median tax bills, and what you need to know before relocating.</p></Link>
      </div>
    </div>
  );
}
