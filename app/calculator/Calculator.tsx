"use client";
import { useState } from "react";

const STATE_RATES: Record<string, number> = {
  "Alabama": 0.41, "Alaska": 1.04, "Arizona": 0.63, "Arkansas": 0.62,
  "California": 0.75, "Colorado": 0.51, "Connecticut": 1.92, "Delaware": 0.57,
  "Florida": 0.89, "Georgia": 0.92, "Hawaii": 0.28, "Idaho": 0.69,
  "Illinois": 2.08, "Indiana": 0.85, "Iowa": 1.57, "Kansas": 1.41,
  "Kentucky": 0.83, "Louisiana": 0.55, "Maine": 1.36, "Maryland": 1.09,
  "Massachusetts": 1.23, "Michigan": 1.54, "Minnesota": 1.12, "Mississippi": 0.65,
  "Missouri": 0.97, "Montana": 0.84, "Nebraska": 1.73, "Nevada": 0.60,
  "New Hampshire": 1.89, "New Jersey": 2.23, "New Mexico": 0.80, "New York": 1.72,
  "North Carolina": 0.84, "North Dakota": 0.98, "Ohio": 1.59, "Oklahoma": 0.90,
  "Oregon": 0.97, "Pennsylvania": 1.58, "Rhode Island": 1.63, "South Carolina": 0.57,
  "South Dakota": 1.22, "Tennessee": 0.71, "Texas": 1.74, "Utah": 0.63,
  "Vermont": 1.83, "Virginia": 0.82, "Washington": 0.98, "West Virginia": 0.58,
  "Wisconsin": 1.85, "Wyoming": 0.61
};

export default function Calculator() {
  const [homeValue, setHomeValue] = useState<string>("350000");
  const [state, setState] = useState<string>("");

  const rate = state ? STATE_RATES[state] : null;
  const annualTax = rate ? (parseFloat(homeValue) * rate) / 100 : null;
  const monthlyTax = annualTax ? annualTax / 12 : null;

  return (
    <div className="bg-soft rounded-2xl p-6 border border-line">
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-semibold text-ink mb-2">Home Value</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <input
              type="number"
              className="w-full border border-line rounded-lg pl-8 pr-4 py-3 text-ink bg-white focus:outline-none focus:ring-2 focus:ring-accent"
              value={homeValue}
              onChange={e => setHomeValue(e.target.value)}
              min="50000"
              max="5000000"
              step="10000"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-ink mb-2">State</label>
          <select
            className="w-full border border-line rounded-lg px-4 py-3 text-ink bg-white focus:outline-none focus:ring-2 focus:ring-accent"
            value={state}
            onChange={e => setState(e.target.value)}
          >
            <option value="">— Select State —</option>
            {Object.keys(STATE_RATES).sort().map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      {annualTax !== null && (
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="bg-white rounded-xl p-4 border border-line text-center">
            <div className="text-2xl font-bold text-accent">${Math.round(annualTax).toLocaleString()}</div>
            <div className="text-xs text-gray-500 mt-1">Annual Property Tax</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-line text-center">
            <div className="text-2xl font-bold text-ink">${Math.round(monthlyTax!).toLocaleString()}</div>
            <div className="text-xs text-gray-500 mt-1">Monthly (Escrow)</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-line text-center">
            <div className="text-2xl font-bold text-ink">{rate}%</div>
            <div className="text-xs text-gray-500 mt-1">Effective Rate ({state})</div>
          </div>
        </div>
      )}

      {!state && (
        <p className="text-center text-gray-500 py-4">Select your state to estimate your property tax.</p>
      )}
    </div>
  );
}
