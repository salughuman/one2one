"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Inventory", href: "/collection" },
  { label: "Heritage", href: "/heritage" },
  { label: "Atelier", href: "/atelier" },
  { label: "Journal", href: "/journal" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 w-full z-50 bg-surface-base/60 backdrop-blur-xl shadow-2xl shadow-black/20"
    >
      <div className="flex justify-between items-center w-full px-8 py-6 max-w-[1920px] mx-auto">
        <Link
          href="/"
          className="text-2xl font-black tracking-tighter text-content-primary uppercase font-headline"
          aria-label="One2One — Home"
        >
          one2one
        </Link>

        <div className="hidden md:flex gap-12" role="list">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              role="listitem"
              className="text-content-primary/70 hover:text-content-primary transition-colors uppercase tracking-widest text-xs font-label"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="/contact"
            className="hidden lg:block uppercase tracking-widest text-xs bg-accent text-accent-deep px-6 py-3 scale-95 active:scale-90 transition-transform font-bold font-label"
          >
            Enquire Now
          </Link>
          <button
            className="p-2 hover:bg-surface-border/50 transition-all duration-300 md:hidden"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="text-content-primary">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-surface-base/95 backdrop-blur-xl px-8 pb-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-content-primary/70 hover:text-content-primary transition-colors uppercase tracking-widest text-xs font-label"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="uppercase tracking-widest text-xs bg-accent text-accent-deep px-6 py-3 font-bold text-center font-label"
          >
            Enquire Now
          </Link>
        </div>
      )}
    </nav>
  );
}
