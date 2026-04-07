export default function Schema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    name: "One2One",
    url: "https://one2one.be",
    telephone: "+3232326000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Noorderlaan 121",
      addressLocality: "Antwerpen",
      postalCode: "B-2030",
      addressCountry: "BE",
    },
    areaServed: ["Belgium", "Netherlands", "Luxembourg", "France", "Germany"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "One2One Offer Catalog",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Curated Collection",
          description:
            "Luxury, performance, and collector vehicles — available and delivered.",
        },
        {
          "@type": "OfferCatalog",
          name: "Leasing Solutions",
          description:
            "Tailored private and business leasing proposals, structured around client profile and vehicle.",
        },
        {
          "@type": "OfferCatalog",
          name: "Client Contact & Enquiry",
          description:
            "Showroom enquiries, vehicle detail requests, and appointment bookings.",
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
