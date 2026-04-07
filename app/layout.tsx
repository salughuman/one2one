import type { Metadata } from "next";
import { Inter, Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/PageTransition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-headline",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-label",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://one2one.be"),
  title: {
    default: "Luxury Cars in Antwerp | One2One",
    template: "%s | One2One",
  },
  description:
    "One2One is a luxury car boutique in Antwerp. Explore a curated collection of exceptional vehicles and tailored leasing solutions for private and business clients.",
  keywords: [
    "luxury cars Antwerp",
    "exclusive car boutique Antwerp",
    "luxury car showroom Belgium",
    "premium car leasing Antwerp",
    "exotic cars Antwerp",
    "curated car collection Belgium",
  ],
  openGraph: {
    type: "website",
    locale: "en_BE",
    url: "https://one2one.be",
    siteName: "One2One",
    title: "Luxury Cars in Antwerp | One2One",
    description:
      "A curated collection of luxury and performance cars in Antwerp. Private enquiries, tailored guidance, and premium leasing solutions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "One2One — Luxury Car Boutique Antwerp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Cars in Antwerp | One2One",
    description:
      "A curated collection of luxury and performance cars in Antwerp. Private enquiries, tailored guidance, and premium leasing solutions.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://one2one.be",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        <link rel="llms" href="/llms.txt" />
        <link rel="llms-full" href="/llms-full.txt" />
      </head>
      <body className="min-h-full flex flex-col bg-[#131313] text-[#e5e2e1]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-[#FF5724] focus:text-[#541100] focus:px-4 focus:py-2 focus:rounded-lg focus:text-xs focus:uppercase focus:tracking-widest focus:font-bold"
          style={{ fontFamily: "var(--font-label)" }}
        >
          Skip to main content
        </a>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
