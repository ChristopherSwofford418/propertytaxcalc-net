import AdSlot from "@/components/AdSlot";
import Calculator from "./Calculator";
import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Property Tax Estimator",
  description: "Estimate property tax using your assessed value, exemption and local tax rate.",
  alternates: { canonical: "/calculator/" },
};
export default function CalculatorPage() {
  return <div className="mx-auto max-w-4xl px-4 py-12">
    <h1 className="text-3xl font-bold text-ink mb-3">Property Tax Estimator</h1>
    <p className="text-gray-600 mb-6">Enter values from your local assessor or tax bill. This site does not provide current local rates or determine your eligibility for exemptions.</p>
    <AdSlot slot="1122334455" format="horizontal" />
    <Calculator />
    <AdSlot slot="5544332211" format="rectangle" />
    <div className="prose-article mt-8 text-gray-700">
      <h2>Before using your estimate</h2>
      <p>The calculation subtracts an applicable exemption from assessed value and multiplies the remainder by the rate you enter. If combining rates from different taxing districts, do so only when they apply to the same taxable value and period.</p>
      <p>Exemptions can apply differently to individual levies. This simplified estimate does not account for different tax bases, credits, caps, special assessments, fees, or changes during the year. The monthly figure is an annual amount divided by 12, not a lender&apos;s escrow payment. Check your bill and local rules for the actual amount.</p>
      <p>See the <Link href="/methodology/">method and example</Link> or learn <Link href="/learn/property-tax-rates-by-state/">how to find a local rate</Link>.</p>
    </div>
  </div>;
}
