"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const navLinks = [
  { label: "Inventory", href: "/collection" },
  { label: "Heritage", href: "/heritage" },
  { label: "Atelier", href: "/atelier" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Press Kit", href: "/press" },
];

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer
      aria-label="Site footer and newsletter"
      className="relative bg-surface-deep overflow-hidden"
    >

      <div className="relative z-10 w-full max-w-[1920px] mx-auto">

        {/* ── Newsletter block ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-surface-border/20">

          {/* Left — heading */}
          <div className="lg:col-span-6 px-8 pt-24 pb-16 border-b lg:border-b-0 lg:border-r border-surface-border/20 flex flex-col justify-between gap-12">
            <div>
              <Reveal className="text-accent text-xs uppercase tracking-[0.3em] mb-8 block font-label">
                Stay Informed
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="fluid-display font-black text-content-primary tracking-tighter uppercase leading-none font-headline mb-2">
                  The Curator&apos;s
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <h2 className="fluid-display font-black text-accent tracking-tighter uppercase leading-none font-headline">
                  Letter.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.24}>
              <p className="text-content-primary/40 leading-relaxed max-w-md font-body">
                Exclusive early access to new acquisitions, private events, and insights from our Antwerp showroom. Sent when it matters — never on a schedule.
              </p>
            </Reveal>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-6 px-8 pt-24 pb-16 flex flex-col justify-center">
            {submitted ? (
              <Reveal className="flex flex-col gap-4">
                <div className="w-8 h-px bg-accent mb-4" />
                <p className="text-content-primary font-black text-2xl uppercase tracking-tight font-headline">
                  You&apos;re on the list.
                </p>
                <p className="text-content-primary/40 text-sm font-body leading-relaxed max-w-sm">
                  We&apos;ll be in touch when something worth your attention arrives.
                </p>
              </Reveal>
            ) : (
              <form onSubmit={handleSubmit} aria-label="Newsletter subscription form" className="flex flex-col gap-8">
                <Reveal className="flex flex-col gap-2">
                  <label htmlFor="newsletter-email" className="text-content-primary/30 text-[10px] uppercase tracking-[0.3em] font-label">
                    Email Address
                  </label>
                  <div className="flex items-center border-b border-surface-border/40 focus-within:border-accent transition-colors duration-300 pb-3">
                    <input
                      id="newsletter-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="flex-1 bg-transparent text-content-primary placeholder:text-content-primary/20 text-lg font-body focus:outline-none"
                    />
                  </div>
                </Reveal>
                <Reveal delay={0.08} className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                  <button type="submit" className="group flex items-center gap-4 text-content-primary hover:text-accent transition-colors duration-300">
                    <span className="text-xs uppercase tracking-[0.3em] font-label font-bold">Subscribe</span>
                    <span className="w-8 h-px bg-current transition-all duration-500 group-hover:w-16" aria-hidden="true" />
                  </button>
                  <p className="text-content-primary/20 text-[10px] uppercase tracking-[0.2em] font-label">
                    No spam. Unsubscribe anytime.
                  </p>
                </Reveal>
              </form>
            )}
          </div>
        </div>

        {/* ── Footer nav row ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-surface-border/20">

          {/* Brand + address */}
          <div className="lg:col-span-4 px-8 py-12 border-b lg:border-b-0 lg:border-r border-surface-border/20 flex flex-col gap-4">
            <div className="font-black text-content-primary uppercase tracking-tighter font-headline text-xl">
              ONE2ONE
            </div>
            <address className="not-italic flex flex-col gap-1">
              <a href="tel:+3232326000" className="text-content-primary/30 text-[10px] uppercase tracking-[0.2em] font-label hover:text-content-primary/60 transition-colors">
                +32 3 232 6000
              </a>
              <span className="text-content-primary/30 text-[10px] uppercase tracking-[0.2em] font-label">
                Noorderlaan 121, B-2030 Antwerpen
              </span>
            </address>
          </div>

          {/* Nav links */}
          <div className="lg:col-span-4 px-8 py-12 border-b lg:border-b-0 lg:border-r border-surface-border/20">
            <p className="text-content-primary/20 text-[10px] uppercase tracking-[0.3em] font-label mb-6">Navigation</p>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-content-primary/40 text-xs uppercase tracking-widest font-label hover:text-content-primary transition-colors duration-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Legal links */}
          <div className="lg:col-span-4 px-8 py-12">
            <p className="text-content-primary/20 text-[10px] uppercase tracking-[0.3em] font-label mb-6">Legal</p>
            <ul className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-content-primary/40 text-xs uppercase tracking-widest font-label hover:text-content-primary transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Copyright strip ── */}
        <div className="px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-content-primary/20 text-[10px] uppercase tracking-[0.2em] font-label">
            © {new Date().getFullYear()} One2One. All rights reserved.
          </p>
          <p className="text-content-primary/20 text-[10px] uppercase tracking-[0.2em] font-label">
            Private correspondence only
          </p>
        </div>

      </div>
    </footer>
  );
}
