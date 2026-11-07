import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Methodology and Sources",
  description: "How the property tax estimator works, its limits, and sources for further reading.",
  alternates: { canonical: "/methodology/" },
};
export default function MethodologyPage() {
  return <article className="max-w-3xl mx-auto px-4 py-12 prose-article">
    <h1 className="text-3xl font-bold">Methodology and Sources</h1>
    <h2>Calculation</h2>
    <p>The <Link href="/calculator/">calculator</Link> uses only the values you enter. Taxable value = assessed value − applicable exemption reduction. Estimated annual tax = taxable value × local rate ÷ 100. The monthly equivalent is the annual estimate ÷ 12. Results are displayed to the nearest cent.</p>
    <p>For an illustrative—not current—example, a $350,000 assessment with a $25,000 reduction and a 1.5% rate gives $325,000 × 0.015 = $4,875 per year, or $406.25 per month.</p>
    <h2>Limitations</h2>
    <p>We do not supply rates, assess property, or determine exemptions. Assessed value may differ from market value. Enter taxable value with no further reduction if an assessment already reflects an exemption. Combine rates only when each applies to the same taxable value and period. Separate levies may have different bases or exemptions; credits, caps, special assessments, fees, and escrow adjustments are not included. Consult your local taxing authorities for an actual bill.</p>
    <h2>Primary sources</h2><ul>
      <li><a href="https://www.tax.ny.gov/pit/property/learn/proptax.htm">New York Department of Taxation and Finance: Property taxes</a> describes local property taxes in New York; other states have different rules.</li>
      <li><a href="https://www.tax.ny.gov/pit/property/exemption/index.htm">New York Department of Taxation and Finance: Property tax exemptions</a> describes examples and local eligibility in New York.</li>
      <li><a href="https://www.boe.ca.gov/proptaxes/faqs/assessappeals.htm">California State Board of Equalization: Assessment appeals FAQ</a> explains California&apos;s process, not nationwide deadlines.</li>
    </ul>
  </article>;
}
