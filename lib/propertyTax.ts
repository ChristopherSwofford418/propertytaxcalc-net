export type TaxEstimate = {
  taxableValue: number;
  annualTax: number;
  monthlyEquivalent: number;
};

// This is a simple single-tax-base model, not a tax-bill calculation.
export function estimatePropertyTax(
  assessedValue: number,
  exemption: number,
  ratePercent: number,
): TaxEstimate | null {
  if (
    !Number.isFinite(assessedValue) || !Number.isFinite(exemption) || !Number.isFinite(ratePercent) ||
    assessedValue < 0 || assessedValue > 1_000_000_000_000 ||
    exemption < 0 || exemption > assessedValue || ratePercent < 0 || ratePercent > 100
  ) return null;

  const taxableValue = assessedValue - exemption;
  const annualTax = taxableValue * ratePercent / 100;
  return { taxableValue, annualTax, monthlyEquivalent: annualTax / 12 };
}
