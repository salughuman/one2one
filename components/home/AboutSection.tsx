import Reveal from "@/components/Reveal";

const stats = [
  { value: "20+",  label: "Years in Antwerp",   desc: "Established presence in Belgium's automotive capital" },
  { value: "500+", label: "Vehicles Placed",     desc: "Exceptional cars delivered to discerning clients" },
  { value: "12",   label: "Marques Curated",     desc: "Only the most desirable brands in our collection" },
  { value: "100%", label: "Private & Personal",  desc: "Every client relationship is direct and discreet" },
];

export default function AboutSection() {
  return (
    <section
      aria-label="About One2One — luxury car boutique in Antwerp"
      className="relative bg-surface-deep overflow-hidden"
    >
      {/* ── Top half: editorial statement ── */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-8 pt-32 pb-24 border-b border-surface-border/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">

          {/* Left — label + headline */}
          <div className="lg:col-span-7">
            <Reveal className="text-accent text-xs uppercase tracking-[0.3em] mb-8 block font-label">
              Our Story
            </Reveal>
            <Reveal className="mb-2">
              <h2 className="fluid-display font-black text-content-primary tracking-tighter uppercase leading-none font-headline">
                Not a
              </h2>
            </Reveal>
            <Reveal delay={0.08} className="mb-2">
              <h2 className="fluid-display font-black text-content-primary tracking-tighter uppercase leading-none font-headline">
                Dealership.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <h2 className="fluid-display font-black text-accent tracking-tighter uppercase leading-none font-headline">
                A Boutique.
              </h2>
            </Reveal>
          </div>

          {/* Right — body copy */}
          <div className="lg:col-span-5 lg:pb-3">
            <Reveal delay={0.24}>
              <p className="text-content-primary/60 text-lg leading-relaxed mb-6 font-body">
                One2One was built on a single conviction: that acquiring an exceptional car should feel as refined as the car itself.
              </p>
            </Reveal>
            <Reveal delay={0.32}>
              <p className="text-content-primary/40 leading-relaxed font-body">
                From our showroom on Noorderlaan in Antwerp, we curate access to the world's most desirable vehicles — not for everyone, but for those who know exactly what they want. Every vehicle is personally selected. Every client relationship is direct. Every leasing proposal is tailored to the individual.
              </p>
            </Reveal>
          </div>

        </div>
      </div>

      {/* ── Bottom half: stats row ── */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-surface-border/20">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={(i + 1) * 0.08}>
              <div
                data-tilt
                className="card-3d group px-10 py-14 flex flex-col gap-4 hover:bg-surface-subtle transition-colors duration-500"
              >
                <span className="card-3d-inner fluid-display font-black text-content-primary tracking-tighter leading-none font-headline group-hover:text-accent transition-colors duration-500">
                  {stat.value}
                </span>
                <div className="mt-auto">
                  <p className="text-content-primary text-sm font-bold uppercase tracking-[0.15em] font-label mb-1">
                    {stat.label}
                  </p>
                  <p className="text-content-primary/40 text-xs leading-relaxed font-body">
                    {stat.desc}
                  </p>
                </div>
                <div className="h-px w-0 bg-accent group-hover:w-full transition-all duration-700" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ── Pull quote strip ── */}
      <div className="relative z-10 border-t border-surface-border/20">
        <div className="w-full max-w-[1920px] mx-auto px-8 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <Reveal>
            <blockquote className="text-content-primary/30 text-2xl md:text-3xl font-black tracking-tighter uppercase font-headline max-w-3xl leading-tight">
              &ldquo;One2One does not merely sell cars.{" "}
              <span className="text-content-primary/70">One2One curates access.&rdquo;</span>
            </blockquote>
          </Reveal>
          <Reveal delay={0.16} className="shrink-0">
            <p className="text-content-primary/30 text-[10px] uppercase tracking-[0.3em] font-label mb-1">Location</p>
            <p className="text-content-primary/60 text-sm font-label uppercase tracking-widest">Noorderlaan 121</p>
            <p className="text-content-primary/40 text-xs font-label uppercase tracking-widest">B-2030 Antwerpen</p>
          </Reveal>
        </div>
      </div>

    </section>
  );
}
