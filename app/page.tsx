import type { Metadata } from "next";
import AEOHeader from "@/components/seo/AEOHeader";
import Schema from "@/components/seo/Schema";
import Navbar from "@/components/Navbar";
import AnimationProvider from "@/components/AnimationProvider";
import Hero from "@/components/home/Hero";
import BrandBanner from "@/components/home/BrandBanner";
import FeaturedInventory from "@/components/home/FeaturedInventory";
import AboutSection from "@/components/home/AboutSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import MediaSection from "@/components/home/MediaSection";
import FAQSection from "@/components/home/FAQSection";
import NewsletterCTA from "@/components/home/NewsletterCTA";

export const metadata: Metadata = {
  title: "Luxury Cars in Antwerp | One2One",
  description:
    "One2One is a luxury car boutique in Antwerp. Explore a curated collection of exceptional vehicles and tailored leasing solutions for private and business clients.",
  alternates: { canonical: "https://one2one.be" },
  openGraph: {
    title: "Luxury Cars in Antwerp | One2One",
    description:
      "A curated collection of luxury and performance cars in Antwerp. Private enquiries, tailored guidance, and premium leasing solutions.",
    url: "https://one2one.be",
  },
};

export default function HomePage() {
  return (
    <>
      <Schema />
      <Navbar />
      {/* Activates scroll-reveal, 3D tilt, and parallax globally */}
      <AnimationProvider />
      <main id="main-content">
        {/* AEO executive summary — first child, always server-rendered, sr-only */}
        <AEOHeader />

        <Hero />
        <BrandBanner />
        <FeaturedInventory />
        <AboutSection />
        <ExperienceSection />
        <MediaSection />
        <FAQSection />
        <NewsletterCTA />
      </main>
    </>
  );
}
