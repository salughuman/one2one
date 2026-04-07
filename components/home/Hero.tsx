import Link from "next/link";

export default function Hero() {
  return (
    <section
      aria-label="Hero — Antwerp's finest luxury car destination"
      className="relative h-screen w-full flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4jomkSA8YWR-RF6bvU25-rtc88Ccc6eRc5l9hrMAHoD1ilTDLcsJSI1eapGoIyZT9nXr09a3x0FQXszHsLfap3j0q7r7Q_4k8QL1SpdoWH_yVsxBjecGs0M_A-vJyWX8DojSevxgcNXppQbntNMzsIwOMrSrPQvFJIWiSSwZoDPoevLkAuOgDXUH9rurzwZ4O_T5A2kTdfrvFCDmIGE_rng5DiquVLZTiWFWvLtSSO6jiaMO6OBlATUTja_BRW18yI73uo_coEx1H"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
        />
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay muted loop playsInline
          poster="https://lh3.googleusercontent.com/aida-public/AB6AXuC4jomkSA8YWR-RF6bvU25-rtc88Ccc6eRc5l9hrMAHoD1ilTDLcsJSI1eapGoIyZT9nXr09a3x0FQXszHsLfap3j0q7r7Q_4k8QL1SpdoWH_yVsxBjecGs0M_A-vJyWX8DojSevxgcNXppQbntNMzsIwOMrSrPQvFJIWiSSwZoDPoevLkAuOgDXUH9rurzwZ4O_T5A2kTdfrvFCDmIGE_rng5DiquVLZTiWFWvLtSSO6jiaMO6OBlATUTja_BRW18yI73uo_coEx1H"
        >
          <source src="/hero.mp4" type="video/mp4" />
          <source src="/hero.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div
          className="absolute inset-0 z-20"
          style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(19,19,19,0.72) 0%, rgba(19,19,19,0.38) 55%, rgba(19,19,19,0.10) 100%)" }}
        />
      </div>

      <p className="sr-only">
        One2One presents a curated collection of luxury, performance, and
        collector vehicles in Antwerp, alongside tailored leasing solutions for
        private and business clients.
      </p>

      <div className="relative z-30 w-full max-w-[1920px] mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-8 lg:col-span-6 pt-24">
          <h1 className="text-6xl md:text-8xl font-black text-content-primary leading-tight tracking-tighter mb-8 uppercase font-headline">
            Antwerp&apos;s Finest Destination.
          </h1>
          <p className="text-lg md:text-xl text-content-primary/80 mb-12 max-w-lg leading-relaxed font-body">
            Curating the world&apos;s most exceptional automotive icons for the refined collector.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link
              href="/collection"
              className="bg-accent text-accent-deep font-bold uppercase tracking-widest px-8 py-4 text-sm shadow-xl shadow-accent/20 hover:-translate-y-1 transition-all duration-500 font-label"
            >
              Browse the Collection
            </Link>
            <Link
              href="/heritage"
              className="border border-content-primary/20 backdrop-blur-sm text-content-primary uppercase tracking-widest px-8 py-4 text-sm hover:bg-content-primary/10 transition-all duration-500 font-label"
            >
              Our Heritage
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 right-8 z-30 flex flex-col items-center gap-4" aria-hidden="true">
        <span
          className="text-[10px] uppercase tracking-[0.3em] text-content-primary/40 font-label"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll to Explore
        </span>
        <div className="w-[1px] h-12 bg-content-primary/20" />
      </div>
    </section>
  );
}
