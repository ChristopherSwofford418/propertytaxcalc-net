import AdSlot from "@/components/AdSlot";
import Calculator from "./Calculator";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Property Tax Estimator",
  description: "Estimate your annual property tax bill by state — free tool from PropertyTaxCalculator.",
};
export default function CalculatorPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-ink mb-2">Property Tax Estimator</h1>
      <p className="text-gray-600 mb-8">Estimate your annual property tax bill by state.</p>
      <AdSlot slot="1122334455" format="horizontal" />
      <Calculator />
      <AdSlot slot="5544332211" format="rectangle" />
    </div>
  );
}
