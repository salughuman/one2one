"use client";

import { useState, useMemo, useRef, useCallback } from "react";
import Link from "next/link";
import InventoryCard from "@/components/InventoryCard";
import { vehicles } from "@/lib/inventory";

const manufacturers = ["All", "Porsche", "Ferrari", "Lamborghini", "Aston Martin", "McLaren"];
const configurations = ["All", "Coupé", "Cabriolet", "SUV", "Track-Only"];
const YEAR_MIN = 1990;
const YEAR_MAX = 2024;

/* ── Dual-handle range slider ── */
function DualRangeSlider({
  min, max, low, high,
  onChange,
}: {
  min: number; max: number; low: number; high: number;
  onChange: (low: number, high: number) => void;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const getPercent = (val: number) => ((val - min) / (max - min)) * 100;

  const startDrag = useCallback(
    (handle: "low" | "high") => (e: React.MouseEvent | React.TouchEvent) => {
      e.preventDefault();
      const track = trackRef.current;
      if (!track) return;

      const move = (clientX: number) => {
        const rect = track.getBoundingClientRect();
        const pct = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
        const raw = Math.round(min + pct * (max - min));
        if (handle === "low")  onChange(Math.min(raw, high), high);
        else                   onChange(low, Math.max(raw, low));
      };

      const onMove = (ev: MouseEvent | TouchEvent) => {
        const x = "touches" in ev ? ev.touches[0].clientX : ev.clientX;
        move(x);
      };
      const onUp = () => {
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("touchmove", onMove);
        window.removeEventListener("mouseup", onUp);
        window.removeEventListener("touchend", onUp);
      };
      window.addEventListener("mousemove", onMove);
      window.addEventListener("touchmove", onMove, { passive: false });
      window.addEventListener("mouseup", onUp);
      window.addEventListener("touchend", onUp);

      const x = "touches" in e ? e.touches[0].clientX : e.clientX;
      move(x);
    },
    [min, max, low, high, onChange]
  );

  const lowPct  = getPercent(low);
  const highPct = getPercent(high);

  return (
    <div className="relative h-8 flex items-center select-none" ref={trackRef}>
      {/* Track background */}
      <div className="absolute inset-x-0 h-px bg-surface-border/40" />
      {/* Active range */}
      <div
        className="absolute h-px bg-accent"
        style={{ left: `${lowPct}%`, right: `${100 - highPct}%` }}
      />
      {/* Low handle */}
      <div
        className="absolute w-3 h-3 bg-accent border-2 border-surface-base cursor-grab active:cursor-grabbing -translate-x-1/2 hover:scale-125 transition-transform duration-150"
        style={{ left: `${lowPct}%` }}
        onMouseDown={startDrag("low")}
        onTouchStart={startDrag("low")}
        role="slider"
        aria-label="Minimum year"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={low}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft")  onChange(Math.max(min, low - 1), high);
          if (e.key === "ArrowRight") onChange(Math.min(low + 1, high), high);
        }}
      />
      {/* High handle */}
      <div
        className="absolute w-3 h-3 bg-accent border-2 border-surface-base cursor-grab active:cursor-grabbing -translate-x-1/2 hover:scale-125 transition-transform duration-150"
        style={{ left: `${highPct}%` }}
        onMouseDown={startDrag("high")}
        onTouchStart={startDrag("high")}
        role="slider"
        aria-label="Maximum year"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={high}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft")  onChange(low, Math.max(low, high - 1));
          if (e.key === "ArrowRight") onChange(low, Math.min(max, high + 1));
        }}
      />
    </div>
  );
}

/* ── Styled select dropdown ── */
function FilterSelect({
  label, value, options, onChange,
}: {
  label: string; value: string; options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-accent text-[9px] uppercase tracking-[0.3em] font-label">{label}</p>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-surface-raised border border-surface-border/30 text-content-primary/70 font-label text-[10px] uppercase tracking-widest py-2.5 px-3 pr-7 appearance-none focus:outline-none focus:border-accent transition-colors duration-200 cursor-pointer"
        >
          {options.map((o) => (
            <option key={o} value={o} className="bg-surface-raised text-content-primary normal-case tracking-normal">
              {o}
            </option>
          ))}
        </select>
        <svg
          className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-content-primary/30"
          width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true"
        >
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

/* ── Main component ── */
export default function CollectionFilters() {
  const [manufacturer, setManufacturer] = useState("All");
  const [configuration, setConfiguration] = useState("All");
  const [maxMileage, setMaxMileage]       = useState(50000);
  const [yearRange, setYearRange]         = useState<[number, number]>([YEAR_MIN, YEAR_MAX]);

  const filtered = useMemo(() => {
    return vehicles.filter((v) => {
      if (manufacturer !== "All" && v.subtitle !== manufacturer) return false;
      const year = parseInt(v.year);
      if (year < yearRange[0] || year > yearRange[1]) return false;
      const mileage = parseInt(v.mileage.replace(/[^0-9]/g, ""));
      if (!isNaN(mileage) && mileage > maxMileage) return false;
      return true;
    });
  }, [manufacturer, maxMileage, yearRange]);

  const reset = () => {
    setManufacturer("All");
    setConfiguration("All");
    setMaxMileage(50000);
    setYearRange([YEAR_MIN, YEAR_MAX]);
  };

  const hasFilters =
    manufacturer !== "All" ||
    maxMileage < 50000 ||
    yearRange[0] !== YEAR_MIN ||
    yearRange[1] !== YEAR_MAX;

  return (
    <div className="flex flex-col lg:flex-row gap-0">

      {/* ── Sidebar ── */}
      <aside aria-label="Filter collection" className="w-full lg:w-72 shrink-0 border-b lg:border-b-0 lg:border-r border-surface-border/20">
        <div className="sticky top-28 flex flex-col divide-y divide-surface-border/20">

          {/* Header */}
          <div className="px-6 py-4 flex items-center justify-between">
            <span className="text-content-primary/30 text-[9px] uppercase tracking-[0.3em] font-label">
              Filter
            </span>
            {hasFilters && (
              <button onClick={reset} className="text-accent text-[9px] uppercase tracking-widest font-label hover:text-accent-dim transition-colors">
                Reset
              </button>
            )}
          </div>

          {/* Manufacturer dropdown */}
          <div className="px-6 py-5">
            <FilterSelect
              label="Manufacturer"
              value={manufacturer}
              options={manufacturers}
              onChange={setManufacturer}
            />
          </div>

          {/* Configuration dropdown */}
          <div className="px-6 py-5">
            <FilterSelect
              label="Configuration"
              value={configuration}
              options={configurations}
              onChange={setConfiguration}
            />
          </div>

          {/* Year range — dual handle */}
          <div className="px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <p className="text-accent text-[9px] uppercase tracking-[0.3em] font-label">Year Range</p>
              <span className="text-content-primary/40 text-[9px] font-label tabular-nums">
                {yearRange[0]} — {yearRange[1]}
              </span>
            </div>
            <DualRangeSlider
              min={YEAR_MIN} max={YEAR_MAX}
              low={yearRange[0]} high={yearRange[1]}
              onChange={(l, h) => setYearRange([l, h])}
            />
            <div className="flex justify-between mt-1.5">
              <span className="text-content-primary/20 text-[9px] font-label">{YEAR_MIN}</span>
              <span className="text-content-primary/20 text-[9px] font-label">{YEAR_MAX}</span>
            </div>
          </div>

          {/* Max mileage */}
          <div className="px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <p className="text-accent text-[9px] uppercase tracking-[0.3em] font-label">Max Mileage</p>
              <span className="text-content-primary/40 text-[9px] font-label tabular-nums">
                {maxMileage >= 50000 ? "Any" : `${maxMileage.toLocaleString()} KM`}
              </span>
            </div>
            <input
              type="range" min={0} max={50000} step={500}
              value={maxMileage}
              onChange={(e) => setMaxMileage(parseInt(e.target.value))}
              className="w-full cursor-pointer"
              aria-label="Maximum mileage"
            />
            <div className="flex justify-between mt-1.5">
              <span className="text-content-primary/20 text-[9px] font-label">0 KM</span>
              <span className="text-content-primary/20 text-[9px] font-label">Any</span>
            </div>
          </div>

        </div>
      </aside>

      {/* ── Grid ── */}
      <section aria-label="Vehicle collection" className="flex-1 min-w-0">

        <div className="px-6 py-4 border-b border-surface-border/20 flex items-center justify-between">
          <span className="text-content-primary/30 text-[10px] uppercase tracking-widest font-label">
            {filtered.length} {filtered.length === 1 ? "vehicle" : "vehicles"}
          </span>
          {hasFilters && (
            <span className="text-accent text-[10px] uppercase tracking-widest font-label">Filtered</span>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-40 gap-6">
            <p className="text-content-primary/20 text-sm uppercase tracking-widest font-label">
              No vehicles match your criteria
            </p>
            <button onClick={reset} className="group flex items-center gap-4 text-accent text-xs uppercase tracking-widest font-label">
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

        <div className="px-8 py-10 border-t border-surface-border/20 flex items-center justify-between">
          <p className="text-content-primary/20 text-[10px] uppercase tracking-widest font-label">
            Can&apos;t find what you&apos;re looking for?
          </p>
          <Link href="/contact" className="group flex items-center gap-4 text-content-primary/50 hover:text-accent transition-colors duration-300">
            <span className="text-xs uppercase tracking-[0.3em] font-label">Enquire about sourcing</span>
            <span className="w-8 h-px bg-current transition-all duration-500 group-hover:w-16" aria-hidden="true" />
          </Link>
        </div>

      </section>
    </div>
  );
}
