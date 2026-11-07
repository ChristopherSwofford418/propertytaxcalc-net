import { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://propertytaxcalc.net";
  const paths = ["/", "/calculator/", "/learn/", "/learn/property-tax-rates-by-state/", "/learn/how-to-appeal-property-tax/", "/learn/states-with-lowest-property-taxes/", "/about/", "/contact/", "/privacy/", "/terms/", "/disclaimer/", "/methodology/"];
  return paths.map(path => ({ url: `${base}${path}` }));
}
