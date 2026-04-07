const pillars = [
  {
    number: "01",
    title: "Curated Access",
    body: "We don't list everything. We select what matters. Every vehicle has been personally evaluated for specification, provenance, and desirability.",
    detail: "Private collection · Selected marques · Invitation-led",
  },
  {
    number: "02",
    title: "Personal Guidance",
    body: "From first enquiry to final delivery, you deal with one person who knows the car, knows the market, and knows how to guide the process without friction.",
    detail: "Direct contact · No intermediaries · Expert knowledge",
  },
  {
    number: "03",
    title: "Tailored Leasing",
    body: "Private or business — our leasing proposals are structured around your profile and vehicle, not a rate card. Clarity and reliability at every step.",
    detail: "Private & business · Flexible terms · On request",
  },
  {
    number: "04",
    title: "Antwerp Showroom",
    body: "Our home is Noorderlaan 121. A discreet, appointment-led space where you can experience the collection without the noise of a conventional forecourt.",
    detail: "Noorderlaan 121 · By appointment · B-2030 Antwerpen",
  },
];

export default function ExperienceSection() {
  return (
    <section
      aria-label="The One2One experience — what sets us apart"
      className="relative bg-surface-base overflow-hidden"
    >
      {/* ── Header row ── */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-8 pt-32 pb-20 border-b border-surface-border/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-6">
            <span className="reveal text-accent text-xs uppercase tracking-[0.3em] mb-6 block font-label">
              The One2One Experience
            </span>
            <div className="clip-wrap">
              <h2 className="reveal fluid-display font-black text-content-primary tracking-tighter uppercase leading-none font-headline">
                Why One2One
              </h2>
            </div>
          </div>
          <div className="lg:col-span-6 lg:pb-2">
            <p className="reveal delay-2 text-content-primary/40 text-lg leading-relaxed max-w-xl font-body">
              Four principles that define every interaction — from first enquiry to final delivery. No shortcuts. No intermediaries. No compromise.
            </p>
          </div>
        </div>
      </div>

      {/* ── Pillars ── */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto">
        {pillars.map((pillar, i) => (
          <div
            key={pillar.number}
            className={`reveal delay-${i + 1} group grid grid-cols-1 md:grid-cols-12 gap-0 border-b border-surface-border/20 hover:bg-surface-subtle transition-colors duration-500 cursor-default`}
          >
            {/* Number */}
            <div className="md:col-span-1 px-8 py-10 flex items-start md:items-center border-b md:border-b-0 md:border-r border-surface-border/20">
              <span className="font-black text-content-primary/10 group-hover:text-accent/20 transition-colors duration-500 font-headline text-4xl leading-none tracking-tighter">
                {pillar.number}
              </span>
            </div>

            {/* Title */}
            <div className="md:col-span-3 px-8 py-10 flex items-center border-b md:border-b-0 md:border-r border-surface-border/20">
              <h3 className="text-xl font-black text-content-primary group-hover:text-accent transition-colors duration-300 uppercase tracking-tight font-headline leading-tight">
                {pillar.title}
              </h3>
            </div>

            {/* Body */}
            <div className="md:col-span-5 px-8 py-10 flex items-center border-b md:border-b-0 md:border-r border-surface-border/20">
              <p className="text-content-primary/50 text-sm leading-relaxed font-body">
                {pillar.body}
              </p>
            </div>

            {/* Detail tag */}
            <div className="md:col-span-3 px-8 py-10 flex items-center justify-between gap-4">
              <p className="text-content-primary/25 text-[11px] uppercase tracking-[0.2em] font-label leading-relaxed group-hover:text-content-primary/50 transition-colors duration-500">
                {pillar.detail}
              </p>
              {/* Arrow — slides in on hover */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
                className="shrink-0 text-accent opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-500"
              >
                <path d="M4 10h12M12 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* ── Bottom CTA strip ── */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-8 py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-surface-border/20">
        <p className="reveal text-content-primary/30 text-sm uppercase tracking-[0.2em] font-label">
          Ready to begin?
        </p>
        <a
          href="/contact"
          className="reveal delay-1 group flex items-center gap-4 text-content-primary hover:text-accent transition-colors duration-300"
        >
          <span className="text-xs uppercase tracking-[0.3em] font-label font-bold">
            Contact One2One
          </span>
          <span className="w-8 h-px bg-current transition-all duration-500 group-hover:w-16" aria-hidden="true" />
        </a>
      </div>

    </section>
  );
}
