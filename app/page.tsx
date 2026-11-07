import AdSlot from "@/components/AdSlot";
import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = { alternates: { canonical: "/" } };
export default function Home() {
  return <div>
    <section className="bg-gradient-to-br from-soft to-white py-20 border-b border-line"><div className="mx-auto max-w-4xl px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-ink tracking-tight mb-4">Estimate Property Tax With Your Local Rate</h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">Use your assessed value, an applicable exemption, and a local tax rate to make a simple estimate. We do not provide current rates or official bills.</p>
      <Link href="/calculator/" className="inline-flex px-6 py-3 rounded-lg bg-accent text-white font-semibold hover:opacity-90">Open the estimator →</Link>
    </div></section>
    <AdSlot slot="1234567890" format="horizontal" className="mt-8" />
    <section className="mx-auto max-w-4xl px-4 py-12 prose-article text-gray-700">
      <h2>What affects a property tax bill?</h2>
      <p>Assessed value is the value used under local assessment rules; it may differ from market value. An eligible exemption can reduce the amount subject to a particular tax. Rates and rules depend on the property and its taxing jurisdictions, so check your assessor&apos;s notice and local tax authority.</p>
      <p>Our estimate uses one taxable value and one rate. It cannot account for different exemption rules across districts, credits, caps, fees, or special assessments. The <Link href="/methodology/">methodology</Link> explains what the result includes.</p>
      <h2>Explore the guides</h2><ul>
        <li><Link href="/learn/property-tax-rates-by-state/">Finding and understanding local rates</Link></li>
        <li><Link href="/learn/how-to-appeal-property-tax/">Reviewing an assessment and considering an appeal</Link></li>
        <li><Link href="/learn/states-with-lowest-property-taxes/">Comparing property taxes across locations</Link></li>
      </ul>
    </section>
    <AdSlot slot="0987654321" format="rectangle" />
  </div>;
}
