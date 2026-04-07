"use client";

import Link from "next/link";
import { vehicles as allVehicles } from "@/lib/inventory";
import type { Vehicle } from "@/lib/inventory";
import Reveal from "@/components/Reveal";

// Pull the three featured vehicles directly from the shared inventory
const featured = allVehicles.find((v) => v.id === "porsche-911-gt3")!;
const rest = [
  allVehicles.find((v) => v.id === "ferrari-f40")!,
  allVehicles.find((v) => v.id === "lamborghini-huracan-sto")!,
];

function VehicleCard({ v, tall = false }: { v: Vehicle; tall?: boolean }) {
  return (
    <article className="group bg-surface-subtle relative overflow-hidden">
      <Link href={`/collection/${v.id}`} aria-label={`View ${v.subtitle} ${v.title}`} className="block h-full">

        {/* Image */}
        <div className={`card-shine relative overflow-hidden ${tall ? "aspect-[3/4]" : "aspect-[16/10]"}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={v.src}
            alt={v.alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            loading="lazy"
          />
          {/* Bottom vignette */}
          <div
            className="absolute inset-0 z-[1]"
            style={{ background: "linear-gradient(to top, rgba(22,22,22,0.9) 0%, rgba(22,22,22,0.3) 45%, transparent 75%)" }}
          />
          {/* Badge */}
          <div className="absolute top-5 left-5 z-[3]">
            <span className={`${v.badgeClass} text-[10px] uppercase tracking-[0.15em] px-3 py-1.5 font-label font-bold`}>
              {v.badge}
            </span>
          </div>
          {/* Title overlay on image */}
          <div className="absolute bottom-0 left-0 right-0 z-[3] p-6">
            <p className="text-content-primary/50 text-[10px] uppercase tracking-[0.3em] mb-1 font-label">
              {v.subtitle}
            </p>
            <h3 className={`font-black text-content-primary tracking-tight uppercase font-headline leading-none ${tall ? "text-4xl" : "text-2xl"}`}>
              {v.title}
            </h3>
          </div>
        </div>

        {/* Spec bar */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-surface-border/30">
          <div className="flex items-center gap-4 flex-wrap">
            {[v.year, v.bhp, v.engine, v.transmission].map((spec, j) => (
              <span key={j} className="flex items-center gap-4">
                <span className="text-content-primary/40 text-[11px] uppercase tracking-widest font-label">{spec}</span>
                {j < 3 && <span className="w-px h-3 bg-surface-border/50" aria-hidden="true" />}
              </span>
            ))}
          </div>
          <span className="text-content-primary font-bold text-sm font-label tracking-wide shrink-0 ml-4">
            {v.price}
          </span>
        </div>

        {/* CTA — slides up on hover */}
        <div
          className="overflow-hidden"
          style={{ height: 0, transition: "height 0.4s cubic-bezier(0.16,1,0.3,1)" }}
          ref={(el) => {
            if (!el) return;
            const article = el.closest("article");
            if (!article) return;
            const show = () => { el.style.height = "48px"; };
            const hide = () => { el.style.height = "0px"; };
            article.addEventListener("mouseenter", show);
            article.addEventListener("mouseleave", hide);
          }}
        >
          <div className="flex items-center justify-between px-6 py-3 bg-accent">
            <span className="text-accent-deep text-[11px] uppercase tracking-[0.2em] font-label font-bold">
              Request Details
            </span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="#541100" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

      </Link>
    </article>
  );
}

export default function FeaturedInventory() {
  return (
    <section aria-label="Featured inventory — currently available vehicles" className="py-32 bg-surface-base">

      <div className="w-full max-w-[1920px] mx-auto px-8">

        {/* Header */}
        <div className="flex justify-between items-end mb-16">
          <div>
            <Reveal className="text-accent text-xs uppercase tracking-[0.3em] mb-4 block font-label">
              Currently Available
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="fluid-h2 font-black text-content-primary tracking-tight uppercase font-headline">
                Featured Icons
              </h2>
            </Reveal>
          </div>
          <Reveal className="hidden md:block">
            <Link href="/collection" className="text-xs uppercase tracking-widest border-b border-accent pb-1 text-accent hover:text-accent-dim transition-colors font-label">
              View All Inventory
            </Link>
          </Reveal>
        </div>

        {/* Layout: featured left (tall) + two stacked right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-surface-border/20">

          {/* Featured — tall card */}
          <Reveal>
            <VehicleCard v={featured} tall />
          </Reveal>

          {/* Two smaller cards stacked */}
          <div className="flex flex-col gap-px bg-surface-border/20">
            {rest.map((v, i) => (
              <Reveal key={v.id} delay={(i + 1) * 0.08}>
                <VehicleCard v={v} />
              </Reveal>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
