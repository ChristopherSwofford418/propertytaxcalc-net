import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "About",
  description: "About this property tax estimator and its limits.",
  alternates: { canonical: "/about/" },
};
export default function AboutPage() {
  return <article className="max-w-3xl mx-auto px-4 py-12 prose-article">
    <h1 className="text-3xl font-bold">About PropertyTaxCalculator</h1>
    <p>This site offers a simple educational estimator and guides to help readers understand property tax assessments. It is not an assessor or tax authority and does not provide current rates or official bills.</p>
    <p>The calculator uses an assessed value, applicable exemption reduction, and local rate supplied by the user. See <Link href="/methodology/">methodology and sources</Link> for the formula and limitations.</p>
    <p>Consult the appropriate local authority for a property&apos;s assessment, rates, exemptions, and appeal rules. The site is not a substitute for professional tax or legal advice.</p>
  </article>;
}
