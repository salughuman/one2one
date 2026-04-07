const articles = [
  {
    source: "Luxury Auto Magazine",
    title: "One2One: Redefining the Showroom Experience",
    description: "An in-depth look at how Antwerp's premier boutique merges performance heritage with curated, personal service.",
    alt: "Magazine cover style layout featuring a dark grey McLaren parked in a professional studio setting",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDs9icuwSSiG9CN0t_OgGZ1QH4LqgvH8Q7gYQR2tftWm5NuYBmH0X2J6lA0LY6b8KMrJkr_qnrsEt6oSbKYOa3DNt_pteng6jrLM01OZ7oOnmxt9Q0lGZ7KJhDPHAl9gtt6xEkkKhbAYTkoZr7mmDh_czy03YqRi1F5LWe_I5MwD8_LDzmo-Z9uOnjEuIn6younDwJP1RrdG34NW7_FqfqgFaFPSYPXdJHD3NeI22vHmoQA8wZjbpQyFkwx5XPDLe4IjGlOYhFUKJ8b",
  },
  {
    source: "The Automotive Edit",
    title: "Behind the Scenes at Belgium's Most Exclusive Reveal",
    description: "Our annual collector's evening drew connoisseurs from across Europe for an unforgettable private unveiling.",
    alt: "High-end event photo showing elegant guests gathered around a luxury performance car in a modern showroom",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4jomkSA8YWR-RF6bvU25-rtc88Ccc6eRc5l9hrMAHoD1ilTDLcsJSI1eapGoIyZT9nXr09a3x0FQXszHsLfap3j0q7r7Q_4k8QL1SpdoWH_yVsxBjecGs0M_A-vJyWX8DojSevxgcNXppQbntNMzsIwOMrSrPQvFJIWiSSwZoDPoevLkAuOgDXUH9rurzwZ4O_T5A2kTdfrvFCDmIGE_rng5DiquVLZTiWFWvLtSSO6jiaMO6OBlATUTja_BRW18yI73uo_coEx1H",
  },
];

export default function MediaSection() {
  return (
    <section aria-label="Press and media features" className="py-32 bg-surface-mid overflow-hidden">
      <div className="w-full max-w-[1920px] mx-auto px-8">
        <div className="mb-16">
          <span className="reveal text-accent text-xs font-bold uppercase tracking-[0.4em] mb-4 block font-label">
            Press &amp; Features
          </span>
            <div className="clip-wrap">
            <h2 className="reveal fluid-h2 font-black text-content-primary tracking-tighter uppercase leading-none font-headline">
              In the Media
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {articles.map((article, i) => (
            <article key={article.title} className={`reveal delay-${i + 1} group`}>
              <div className="card-shine relative aspect-[4/3] overflow-hidden mb-8 shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={article.src} alt={article.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1500ms]" loading="lazy" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.10) 70%, transparent 100%)" }} />
              </div>
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold font-label">
                  {article.source}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-content-primary group-hover:text-accent transition-colors duration-300 font-headline">
                  {article.title}
                </h3>
                <p className="text-content-primary/60 leading-relaxed max-w-lg font-body">
                  {article.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
