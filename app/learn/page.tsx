import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Property Tax Guides",
  description: "Guides to local rates, assessments, and property tax comparisons.",
  alternates: { canonical: "/learn/" },
};
export default function LearnPage() {
  return <div className="mx-auto max-w-4xl px-4 py-12">
    <h1 className="text-3xl font-bold text-ink mb-8">Property Tax Guides</h1>
    <div className="grid gap-6">
      <Link href="/learn/property-tax-rates-by-state/" className="block rounded-xl border border-line p-6 hover:border-accent"><h2 className="text-xl font-bold">Finding Your Local Rate</h2><p className="mt-1 text-gray-600">Learn where to find an applicable rate and how to interpret it.</p></Link>
      <Link href="/learn/how-to-appeal-property-tax/" className="block rounded-xl border border-line p-6 hover:border-accent"><h2 className="text-xl font-bold">Reviewing and Appealing an Assessment</h2><p className="mt-1 text-gray-600">Review your notice and check local appeal rules.</p></Link>
      <Link href="/learn/states-with-lowest-property-taxes/" className="block rounded-xl border border-line p-6 hover:border-accent"><h2 className="text-xl font-bold">Comparing Property Taxes</h2><p className="mt-1 text-gray-600">Compare tax bases, exemptions, rates, and charges.</p></Link>
    </div>
  </div>;
}
