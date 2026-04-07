"use client";

const brands = [
  "PORSCHE", "FERRARI", "LAMBORGHINI", "BENTLEY", "ASTON MARTIN",
  "MCLAREN", "BUGATTI", "ROLLS-ROYCE", "PAGANI", "KOENIGSEGG",
  "MASERATI", "ALFA ROMEO", "MERCEDES-AMG", "BMW M", "LOTUS",
];

// Triplicate so the loop is seamless at any viewport width
const track = [...brands, ...brands, ...brands];

export default function BrandBanner() {
  return (
    <section
      aria-label="Selected marques in our collection"
      className="bg-surface-low py-12 border-y border-surface-border/30 overflow-hidden"
    >
      <style>{`
        @keyframes brand-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .brand-track {
          display: flex;
          width: max-content;
          animation: brand-marquee 50s linear infinite;
          will-change: transform;
        }
        .brand-track:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .brand-track { animation: none !important; }
        }
      `}</style>

      <p className="sr-only">
        One2One presents selected marques including Porsche, Ferrari, Lamborghini,
        Bentley, Aston Martin, McLaren, Bugatti, Rolls-Royce, Pagani, Koenigsegg,
        Maserati, Alfa Romeo, Mercedes-AMG, BMW M, and Lotus.
      </p>

      {/* Edge fade masks */}
      <div className="relative" aria-hidden="true">
        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10"
          style={{ background: "linear-gradient(to right, #1C1B1B, transparent)" }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10"
          style={{ background: "linear-gradient(to left, #1C1B1B, transparent)" }}
        />

        <div className="brand-track" aria-hidden="true">
          {track.map((brand, i) => (
            <span
              key={i}
              className="font-black text-xl text-content-primary/25 tracking-tighter font-headline shrink-0 px-10 hover:text-content-primary/70 transition-colors duration-500 cursor-default select-none"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
