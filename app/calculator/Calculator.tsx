"use client";
import { useState } from "react";
import { estimatePropertyTax } from "@/lib/propertyTax";
const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
export default function Calculator() {
  const [assessed, setAssessed] = useState("");
  const [exemption, setExemption] = useState("");
  const [rate, setRate] = useState("");
  const ready = assessed.trim() !== "" && rate.trim() !== "";
  const result = ready ? estimatePropertyTax(Number(assessed), exemption.trim() === "" ? 0 : Number(exemption), Number(rate)) : null;
  return (
    <div className="bg-soft rounded-2xl p-6 border border-line">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="assessed" className="block text-sm font-semibold text-ink mb-2">Assessed value before exemptions ($)</label>
          <input id="assessed" type="number" min="0" max="1000000000000" step="any" inputMode="decimal" value={assessed} onChange={e => setAssessed(e.target.value)} className="w-full border border-line rounded-lg px-4 py-3 bg-white" />
          <p className="text-sm text-gray-600 mt-2">Use the value from your assessment, not necessarily the market price. Maximum: $1 trillion.</p>
        </div>
        <div>
          <label htmlFor="exemption" className="block text-sm font-semibold text-ink mb-2">Applicable exemption reduction in value ($)</label>
          <input id="exemption" type="number" min="0" max="1000000000000" step="any" inputMode="decimal" value={exemption} onChange={e => setExemption(e.target.value)} className="w-full border border-line rounded-lg px-4 py-3 bg-white" />
          <p className="text-sm text-gray-600 mt-2">Optional; blank means $0. Enter a reduction in taxable value, not a tax credit. If your value is already after exemptions, leave blank.</p>
        </div>
        <div>
          <label htmlFor="rate" className="block text-sm font-semibold text-ink mb-2">Applicable local rate (%)</label>
          <input id="rate" type="number" min="0" max="100" step="any" inputMode="decimal" value={rate} onChange={e => setRate(e.target.value)} className="w-full border border-line rounded-lg px-4 py-3 bg-white" />
          <p className="text-sm text-gray-600 mt-2">Enter a percentage from 0 to 100, such as 1.5 for 1.5%. A rate of 15 mills is $15 per $1,000 of taxable value, or 1.5%.</p>
        </div>
      </div>
      <div aria-live="polite" className="mt-6">
        {!ready && <p className="text-gray-600">Enter an assessed value and a local rate to see an estimate.</p>}
        {ready && !result && <p className="text-red-700" role="alert">Enter valid nonnegative values, a rate no greater than 100%, and an exemption no greater than the assessed value.</p>}
        {result && <div className="grid sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-4 border border-line"><div className="font-bold text-xl">{currency.format(result.taxableValue)}</div><div className="text-sm text-gray-600">Estimated taxable value</div></div>
          <div className="bg-white rounded-xl p-4 border border-line"><div className="font-bold text-xl text-accent">{currency.format(result.annualTax)}</div><div className="text-sm text-gray-600">Estimated annual tax</div></div>
          <div className="bg-white rounded-xl p-4 border border-line"><div className="font-bold text-xl">{currency.format(result.monthlyEquivalent)}</div><div className="text-sm text-gray-600">Monthly equivalent (annual ÷ 12)</div></div>
        </div>}
      </div>
    </div>
  );
}
