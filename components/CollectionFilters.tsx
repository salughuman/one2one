"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import InventoryCard from "@/components/InventoryCard";
import { vehicles } from "@/lib/inventory";

const manufacturers = ["All", "Porsche", "Ferrari", "Lamborghini", "Aston Martin", "McLaren"];
const configurations = ["All", "Coupé", "Cabriolet", "SUV", "Track-Only"];
const yearMin = 1990;
const yearMax = 2024;

export default function CollectionFilters() {
  const [manufacturer, setManufacturer] = useState("All");
  const [configuration, setConfiguration] = useState("All");
  const [maxMileage, setMaxMileage] = useState(50000);
  const [yearRange, setYearRange] = useState<[number, number]>([yearMin, yearMax]);

  const filtered = useMemo(() => {
    return vehicles.filter((v) => {
      if (manufacturer !== "All" && v.subtitle !== manufacturer) return false;
      const year = parseInt(v.year);
      if (year < yearRange[0] || year > yearRange[1]) return false;
      const mileage = parseInt(v.mileage.replace(/[^0-9]/g, ""));
      if (!isNaN(mileage) && mileage > maxMileage) return false;
      return true;
    });
  }, [manufacturer, configuration, maxMileage, yearRange]);

  const reset = () => {
    setManufacturer("All");
    setConfiguration("All");
    setMaxMileage(50000);
    setYearRange([yearMin, yearMax]);
  };

  const hasFilters =
    manufacturer !== "All" ||
    maxMileage < 50000 ||
    yearRange[0] !== yearMin ||
    yearRange[1] !== yearMax;

  return (
    <div className="flex flex-col lg:flex-row gap-0">

      {/* ── Sidebar filters ── */}
      <aside
        aria-label="Filter collection"
        className="w-full lg:w-72 shrink-0 border-b lg:border-b-0 lg:border-r border-surface-border/20"
      >
        <div className="sticky top-28 flex flex-col divide-y divide-surface-border/20">

          {/* Header */}
          <div className="px-8 py-6 flex items-center justify-between">
            <span className="text-content-primary/30 text-[10px] uppercase tracking-[0.3em] font-label">
              Filter
            </span>
            {hasFilters && (
              <button
                onClick={reset}
                className="text-accent text-[10px] uppercase tracking-widest font-label hover:text-accent-dim transition-colors"
              >
                Reset
              </button>
            )}
          </div>

          {/* Manufacturer */}
          <div className="px-8 py-8">
            <p className="text-accent text-[10px] uppercase tracking-[0.3em] font-label mb-5">
              Manufacturer
            </p>
            <div className="flex flex-col gap-1">
              {manufacturers.map((m) => (
                <button
                  key={m}
                  onClick={() => setManufacturer(m)}
                  className={`flex items-center justify-between px-4 py-3 text-left transition-all duration-200 font-label text-[11px] uppercase tracking-widest
                    ${manufacturer === m
                      ? "bg-surface-border/40 text-content-primary border-l-2 border-accent"
                      : "text-content-primary/40 hover:text-content-primary/70 hover:translate-x-1 border-l-2 border-transparent"
                    }`}
                >
                  {m}
                  {manufacturer === m && (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Year range */}
          <div className="px-8 py-8">
            <div className="flex items-center justify-between mb-5">
              <p className="text-accent text-[10px] uppercase tracking-[0.3em] font-label">
                Year Range
              </p>
              <span className="text-content-primary/40 text-[10px] font-label">
                {yearRange[0]} — {yearRange[1]}
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-content-primary/30 text-[9px] uppercase tracking-widest font-label">From</label>
                <input
                  type="range"
                  min={yearMin}
                  max={yearMax}
                  value={yearRange[0]}
                  onChange={(e) => {
                    const val = parseInt(e.target.value);
                    if (val <= yearRange[1]) setYearRange([val, yearRange[1]]);
                  }}
                  className="w-full h-px bg-surface-border/60 appearance-none cursor-pointer accent-accent"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-content-primary/30 text-[9px] uppercase tracking-widest font-label">To</label>
                <input
                  type="range"
                  min={yearMin}
                  max={yearMax}
                  value={yearRange[1]}
                  onChange={(e) => {
                    const val = parseInt(e.target.value);
                    if (val >= yearRange[0]) setYearRange([yearRange[0], val]);
                  }}
                  className="w-full h-px bg-surface-border/60 appearance-none cursor-pointer accent-accent"
                />
              </div>
            </div>
          </div>

          {/* Configuration */}
          <div className="px-8 py-8">
            <p className="text-accent text-[10px] uppercase tracking-[0.3em] font-label mb-5">
              Configuration
            </p>
            <div className="flex flex-col gap-1">
              {configurations.map((c) => (
                <button
                  key={c}
                  onClick={() => setConfiguration(c)}
                  className={`flex items-center justify-between px-4 py-3 text-left transition-all duration-200 font-label text-[11px] uppercase tracking-widest
                    ${configuration === c
                      ? "bg-surface-border/40 text-content-primary border-l-2 border-accent"
                      : "text-content-primary/40 hover:text-content-primary/70 hover:translate-x-1 border-l-2 border-transparent"
                    }`}
                >
                  {c}
                  {configuration === c && (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Max mileage */}
          <div className="px-8 py-8">
            <div className="flex items-center justify-between mb-5">
              <p className="text-accent text-[10px] uppercase tracking-[0.3em] font-label">
                Max Mileage
              </p>
              <span className="text-content-primary/40 text-[10px] font-label">
                {maxMileage >= 50000 ? "Any" : `${maxMileage.toLocaleString()} KM`}
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={50000}
              step={500}
              value={maxMileage}
              onChange={(e) => setMaxMileage(parseInt(e.target.value))}
              className="w-full h-px bg-surface-border/60 appearance-none cursor-pointer accent-accent"
            />
          </div>

        </div>
      </aside>

      {/* ── Grid ── */}
      <section aria-label="Vehicle collection" className="flex-1 min-w-0">

        {/* Result count */}
        <div className="px-8 py-5 border-b border-surface-border/20 flex items-center justify-between">
          <span className="text-content-primary/30 text-[10px] uppercase tracking-widest font-label">
            {filtered.length} {filtered.length === 1 ? "vehicle" : "vehicles"}
          </span>
          {hasFilters && (
            <span className="text-accent text-[10px] uppercase tracking-widest font-label">
              Filtered
            </span>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-40 gap-6">
            <p className="text-content-primary/20 text-sm uppercase tracking-widest font-label">
              No vehicles match your criteria
            </p>
            <button
              onClick={reset}
              className="group flex items-center gap-4 text-accent text-xs uppercase tracking-widest font-label"
            >
              Reset filters
              <span className="w-6 h-px bg-current transition-all duration-500 group-hover:w-12" />
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-surface-border/20">
            {filtered.map((v, i) => (
              <InventoryCard key={v.id} v={v} index={i} />
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="px-8 py-10 border-t border-surface-border/20 flex items-center justify-between">
          <p className="text-content-primary/20 text-[10px] uppercase tracking-widest font-label">
            Can&apos;t find what you&apos;re looking for?
          </p>
          <Link
            href="/contact"
            className="group flex items-center gap-4 text-content-primary/50 hover:text-accent transition-colors duration-300"
          >
            <span className="text-xs uppercase tracking-[0.3em] font-label">Enquire about sourcing</span>
            <span className="w-8 h-px bg-current transition-all duration-500 group-hover:w-16" aria-hidden="true" />
          </Link>
        </div>

      </section>
    </div>
  );
}
