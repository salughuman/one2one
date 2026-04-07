import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import AnimationProvider from "@/components/AnimationProvider";
import Reveal from "@/components/Reveal";
import NewsletterCTA from "@/components/home/NewsletterCTA";
import VehicleInquiryForm from "@/components/VehicleInquiryForm";
import { getVehicleById, vehicles } from "@/lib/inventory";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return vehicles.map((v) => ({ slug: v.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const v = getVehicleById(slug);
  if (!v) return {};
  return {
    title: `${v.year} ${v.subtitle} ${v.title} | One2One`,
    description: `${v.year} ${v.subtitle} ${v.title}. ${v.bhp}, ${v.engine}, ${v.mileage}. ${v.description} Available at One2One, Antwerp.`,
    alternates: { canonical: `https://one2one.be/collection/${v.id}` },
    openGraph: {
      title: `${v.year} ${v.subtitle} ${v.title} | One2One`,
      description: v.description,
      url: `https://one2one.be/collection/${v.id}`,
      images: [{ url: v.src, width: 1200, height: 630, alt: v.alt }],
    },
  };
}

const specs = (v: ReturnType<typeof getVehicleById>) => [
  { label: "Production Year",   value: v!.year },
  { label: "Powertrain",        value: v!.engine },
  { label: "Performance",       value: v!.bhp },
  { label: "Transmission",      value: v!.transmission },
  { label: "Acceleration",      value: v!.acceleration },
  { label: "Top Speed",         value: v!.topSpeed },
  { label: "Exterior",          value: v!.color },
  { label: "Interior",          value: v!.interior },
  { label: "Mileage",           value: v!.mileage },
];

export default async function VehicleDetailPage({ params }: Props) {
  const { slug } = await params;
  const v = getVehicleById(slug);
  if (!v) notFound();

  const related = vehicles.filter((r) => r.id !== v.id).slice(0, 3);

  return (
    <>
      <Navbar />
      <AnimationProvider />
      <main id="main-content" className="bg-surface-base min-h-screen">

        {/* ── Breadcrumb ── */}
        <div className="w-full max-w-[1920px] mx-auto px-8 pt-32 pb-0">
          <nav aria-label="Breadcrumb" className="flex items-center gap-3 text-[10px] uppercase tracking-widest font-label text-content-primary/30">
            <Link href="/" className="hover:text-content-primary/60 transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/collection" className="hover:text-content-primary/60 transition-colors">Collection</Link>
            <span aria-hidden="true">/</span>
            <span className="text-content-primary/60">{v.subtitle} {v.title}</span>
          </nav>
        </div>

        {/* ── Main grid ── */}
        <section className="w-full max-w-[1920px] mx-auto px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-surface-border/20">

            {/* Left — gallery + narrative */}
            <div className="lg:col-span-7 bg-surface-base flex flex-col">

              {/* Hero image */}
              <div className="card-shine relative aspect-[16/10] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={v.src}
                  alt={v.alt}
                  className="w-full h-full object-cover"
                  fetchPriority="high"
                />
              </div>

              {/* Thumbnail strip */}
              <div className="flex gap-px bg-surface-border/20 border-t border-surface-border/20">
                {[v.src, v.src, v.src, v.src].map((src, i) => (
                  <div key={i} className={`card-shine flex-1 aspect-[4/3] overflow-hidden cursor-pointer ${i === 0 ? "opacity-100" : "opacity-40 hover:opacity-80"} transition-opacity duration-300`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt={`${v.title} view ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                ))}
              </div>

              {/* Narrative */}
              <div className="px-8 py-16 border-t border-surface-border/20">
                <p className="text-content-primary/30 text-[10px] uppercase tracking-[0.4em] font-label mb-8">
                  The Narrative
                </p>
                <p className="text-2xl font-body text-content-primary/80 leading-relaxed mb-8 font-light">
                  {v.narrative}
                </p>
                <p className="text-content-primary/40 text-sm leading-relaxed font-body">
                  {v.description}
                </p>
              </div>
            </div>

            {/* Right — specs + form */}
            <div className="lg:col-span-5 bg-surface-base flex flex-col">

              {/* Status + title */}
              <div className="px-8 py-10 border-b border-surface-border/20">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-accent text-xs uppercase tracking-widest font-label font-bold">
                    {v.badge} · Antwerp
                  </span>
                  <span className={`${v.badgeClass} text-[10px] uppercase tracking-[0.15em] px-3 py-1.5 font-label font-bold`}>
                    {v.badge}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black font-headline tracking-tighter uppercase leading-none mb-4">
                  {v.year} {v.subtitle}<br />{v.title}
                </h1>
                <p className="text-3xl font-black font-headline text-accent tracking-tighter">
                  {v.price}
                </p>
              </div>

              {/* Spec table */}
              <div className="px-8 py-8 border-b border-surface-border/20">
                <p className="text-content-primary/30 text-[10px] uppercase tracking-[0.3em] font-label mb-6">
                  Technical Datasheet
                </p>
                <div className="divide-y divide-surface-border/20">
                  {specs(v).map((s) => (
                    <div key={s.label} className="py-4 flex justify-between items-center">
                      <span className="text-content-primary/40 text-[11px] uppercase tracking-widest font-label">
                        {s.label}
                      </span>
                      <span className="text-content-primary font-bold text-sm font-headline text-right">
                        {s.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquiry form */}
              <div className="px-8 py-10 flex-1">
                <p className="text-content-primary text-xl font-black uppercase tracking-tight font-headline mb-8">
                  Enquire Privately
                </p>
                <VehicleInquiryForm vehicleTitle={`${v.year} ${v.subtitle} ${v.title}`} />
              </div>

            </div>
          </div>
        </section>

        {/* ── Related vehicles ── */}
        <section
          aria-label="Comparable inventory"
          className="w-full max-w-[1920px] mx-auto px-8 py-20 border-t border-surface-border/20"
        >
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-content-primary/30 text-[10px] uppercase tracking-[0.4em] font-label mb-4">
                Extended Curation
              </p>
              <h2 className="fluid-h2 font-black text-content-primary tracking-tighter uppercase font-headline">
                Comparable Inventory
              </h2>
            </div>
            <Link href="/collection" className="group hidden md:flex items-center gap-4 text-content-primary/50 hover:text-accent transition-colors duration-300">
              <span className="text-xs uppercase tracking-[0.3em] font-label">View All</span>
              <span className="w-8 h-px bg-current transition-all duration-500 group-hover:w-16" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-surface-border/20">
            {related.map((r, i) => (
              <Reveal key={r.id} delay={(i + 1) * 0.08}>
              <article className="group bg-surface-base">
                <Link href={`/collection/${r.id}`} aria-label={`View ${r.subtitle} ${r.title}`} className="block">
              <div className="relative aspect-[16/9] overflow-hidden card-shine">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={r.src}
                      alt={r.alt}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <span className="bg-surface-base/10 backdrop-blur-md px-6 py-2 text-[10px] font-label uppercase tracking-[0.3em] border border-content-primary/20 text-content-primary">
                        View Details
                      </span>
                    </div>
                  </div>
                  <div className="px-6 py-5 border-t border-surface-border/20">
                    <p className="text-content-primary/40 text-[10px] uppercase tracking-widest font-label mb-1">
                      {r.year} · {r.mileage}
                    </p>
                    <h3 className="text-xl font-black uppercase tracking-tight font-headline text-content-primary group-hover:text-accent transition-colors duration-300">
                      {r.subtitle} {r.title}
                    </h3>
                    <p className="text-accent font-black text-lg font-headline mt-1">{r.price}</p>
                  </div>
                </Link>
              </article>
              </Reveal>
            ))}
          </div>
        </section>

        <NewsletterCTA />
      </main>
    </>
  );
}
