import Link from "next/link";

const footerLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Press Kit", href: "/press" },
];

export default function Footer() {
  return (
    <footer
      aria-label="Site footer"
      className="w-full border-t border-surface-border/30 bg-surface-footer"
    >
      <div className="flex flex-col md:flex-row justify-between items-center px-8 py-16 w-full max-w-[1920px] mx-auto gap-8">
        <div>
          <div className="text-lg font-black text-content-primary uppercase tracking-tighter mb-3 font-headline">
            ONE2ONE
          </div>
          <address className="not-italic font-label">
            <p className="text-[10px] uppercase tracking-[0.2em] text-content-primary/40">
              Noorderlaan 121, B-2030 Antwerpen
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-content-primary/40 mt-1">
              <a href="tel:+3232326000" className="hover:text-content-primary transition-colors">
                +32 3 232 6000
              </a>
            </p>
          </address>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-10">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[10px] uppercase tracking-[0.2em] text-content-primary/40 hover:text-accent transition-colors font-label"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-[10px] uppercase tracking-[0.2em] text-content-primary/30 font-label">
          © {new Date().getFullYear()} One2One. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
