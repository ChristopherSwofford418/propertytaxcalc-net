import Link from "next/link";
import AdSlot from "@/components/AdSlot";
export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-soft to-white py-20 border-b border-line">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-ink tracking-tight mb-4">
            Property Tax Rates by State & County
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Free property tax calculator. Look up property tax rates by state, county, and city. Estimate your annual property tax bill and understand how assessments work.
          </p>
          <Link href="/calculator" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-semibold hover:opacity-90 transition-opacity">
            Property Tax Estimator →
          </Link>
        </div>
      </section>

      <AdSlot slot="1234567890" format="horizontal" className="mt-8" />

      {/* Articles */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold text-ink mb-8">Guides & Data</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <a href="/learn/property-tax-rates-by-state/" className="block rounded-xl border border-line p-6 hover:border-accent transition-colors group">
            <span className="text-xs font-medium text-accent uppercase tracking-wide">Tax Guide</span>
            <h3 className="mt-2 text-lg font-bold text-ink group-hover:text-accent transition-colors">Property Tax Rates by State: 2025 Complete Guide</h3>
            <p className="mt-1 text-sm text-gray-600">A complete guide to property tax rates in all 50 states, including average effective rates, median tax bills, and how each state calculates property taxes.</p>
          </a>
          <a href="/learn/how-to-appeal-property-tax/" className="block rounded-xl border border-line p-6 hover:border-accent transition-colors group">
            <span className="text-xs font-medium text-accent uppercase tracking-wide">Tax Appeal</span>
            <h3 className="mt-2 text-lg font-bold text-ink group-hover:text-accent transition-colors">How to Appeal Your Property Tax Assessment</h3>
            <p className="mt-1 text-sm text-gray-600">Step-by-step guide to appealing your property tax assessment and potentially saving hundreds or thousands of dollars per year.</p>
          </a>
          <a href="/learn/states-with-lowest-property-taxes/" className="block rounded-xl border border-line p-6 hover:border-accent transition-colors group">
            <span className="text-xs font-medium text-accent uppercase tracking-wide">State Rankings</span>
            <h3 className="mt-2 text-lg font-bold text-ink group-hover:text-accent transition-colors">10 States with the Lowest Property Taxes (2025)</h3>
            <p className="mt-1 text-sm text-gray-600">The 10 US states with the lowest property tax rates in 2025, including effective rates, median tax bills, and what you need to know before relocating.</p>
          </a>
        </div>
      </section>

      <AdSlot slot="0987654321" format="rectangle" />
    </div>
  );
}
