import { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://propertytaxcalc.net/", lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1.0 },
    { url: "https://propertytaxcalc.net/calculator/", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: "https://propertytaxcalc.net/learn/property-tax-rates-by-state/", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "https://propertytaxcalc.net/learn/how-to-appeal-property-tax/", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "https://propertytaxcalc.net/learn/states-with-lowest-property-taxes/", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "https://propertytaxcalc.net/about/", lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.5 },
  ];
}
