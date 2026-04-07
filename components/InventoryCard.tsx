"use client";

import Link from "next/link";
import type { Vehicle } from "@/lib/inventory";

export default function InventoryCard({ v, index }: { v: Vehicle; index: number }) {
  return (
    <article className="group bg-surface-base" style={{ animation: "fadeIn 0.4s ease forwards" }}>
      <Link href={`/collection/${v.id}`} aria-label={`View ${v.subtitle} ${v.title}`} className="block">

        {/* Image */}
        <div className="card-shine relative aspect-[16/10] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={v.src}
            alt={v.alt}
            className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
            loading={index < 3 ? "eager" : "lazy"}
          />
          <div
            className="absolute inset-0 z-[1]"
            style={{ background: "linear-gradient(to top, rgba(19,19,19,0.8) 0%, transparent 60%)" }}
          />
          <div className="absolute top-5 left-5 z-[3]">
            <span className={`${v.badgeClass} text-[10px] uppercase tracking-[0.15em] px-3 py-1.5 font-label font-bold`}>
              {v.badge}
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 z-[3] p-6">
            <p className="text-content-primary/40 text-[10px] uppercase tracking-[0.3em] mb-1 font-label">
              {v.subtitle}
            </p>
            <h2 className="text-2xl font-black text-content-primary tracking-tight uppercase font-headline leading-none">
              {v.title}
            </h2>
          </div>
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-[2]"
            style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(0,0,0,0.4) 0%, transparent 70%)" }}
          />
        </div>

        {/* Spec row */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-surface-border/20">
          <div className="flex items-center gap-4">
            {[v.year, v.bhp, v.mileage].map((spec, j) => (
              <span key={j} className="flex items-center gap-4">
                <span className="text-content-primary/40 text-[11px] uppercase tracking-widest font-label">{spec}</span>
                {j < 2 && <span className="w-px h-3 bg-surface-border/50" aria-hidden="true" />}
              </span>
            ))}
          </div>
          <span className="text-content-primary font-bold text-sm font-label shrink-0 ml-4">
            {v.price}
          </span>
        </div>

        {/* CTA bar — slides up on hover */}
        <div
          className="overflow-hidden"
          style={{ height: 0, transition: "height 0.4s cubic-bezier(0.16,1,0.3,1)" }}
          ref={(el) => {
            if (!el) return;
            const article = el.closest("article");
            if (!article) return;
            const show = () => { el.style.height = "44px"; };
            const hide = () => { el.style.height = "0px"; };
            article.addEventListener("mouseenter", show);
            article.addEventListener("mouseleave", hide);
          }}
        >
          <div className="flex items-center justify-between px-6 py-3 bg-accent">
            <span className="text-accent-deep text-[11px] uppercase tracking-[0.2em] font-label font-bold">View Details</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="#541100" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

      </Link>
    </article>
  );
}
