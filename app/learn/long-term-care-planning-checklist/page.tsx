import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Article Unavailable",
  description: "This unrelated article is no longer available on this property tax site.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/learn/long-term-care-planning-checklist/" },
};
export default function UnavailableArticle() {
  return <article className="max-w-3xl mx-auto px-4 py-12 prose-article">
    <h1 className="text-3xl font-bold">Article Unavailable</h1>
    <p>This unrelated article has been removed. Explore our <Link href="/learn/">property tax guides</Link> instead.</p>
  </article>;
}
