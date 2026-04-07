import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AnimationProvider from "@/components/AnimationProvider";
import NewsletterCTA from "@/components/home/NewsletterCTA";
import CollectionFilters from "@/components/CollectionFilters";
import { vehicles } from "@/lib/inventory";

export const metadata: Metadata = {
  title: "Curated Collection | One2One",
  description:
    "Explore One2One's curated collection of luxury and performance cars in Antwerp. Selected marques, exceptional specification, private enquiry.",
  alternates: { canonical: "https://one2one.be/collection" },
  openGraph: {
    title: "Curated Collection | One2One",
    description:
      "Explore One2One's curated collection of luxury and performance cars in Antwerp.",
    url: "https://one2one.be/collection",
  },
};

export default function CollectionPage() {
  return (
    <>
      <Navbar />
      <AnimationProvider />
      <main id="main-content" className="bg-surface-base min-h-screen">

        {/* ── Page header ── */}
        <header className="w-full max-w-[1920px] mx-auto px-8 pt-40 pb-16 border-b border-surface-border/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <span className="text-accent text-xs uppercase tracking-[0.3em] mb-6 block font-label">
                The Collection
              </span>
              <h1 className="fluid-display font-black text-content-primary tracking-tighter uppercase leading-none font-headline mb-6">
                Curated<br />Performance.
              </h1>
              <p className="text-content-primary/50 text-lg leading-relaxed max-w-md font-body">
                An assembly of exceptional vehicles, personally selected for provenance, specification, and desirability.
              </p>
            </div>
            <div className="lg:col-span-5 lg:pb-2 flex items-center gap-6">
              <span className="text-content-primary text-sm font-label uppercase tracking-widest">
                {vehicles.length} Vehicles
              </span>
              <span className="w-8 h-px bg-surface-border/60" aria-hidden="true" />
              <span className="text-content-primary/40 text-xs font-label uppercase tracking-widest">
                Antwerp · Belgium
              </span>
            </div>
          </div>
        </header>

        {/* ── Filters + grid ── */}
        <div className="w-full max-w-[1920px] mx-auto">
          <CollectionFilters />
        </div>

        <NewsletterCTA />
      </main>
    </>
  );
}
