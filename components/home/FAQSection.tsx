"use client";

import { useState } from "react";

const faqs = [
  { q: "How do I enquire about a vehicle in the collection?", a: "Contact our team directly via the enquiry form or by phone. We respond personally — not through an automated system. Every conversation starts with understanding what you are looking for." },
  { q: "Are your vehicles available for immediate delivery?", a: "Availability varies by vehicle. Some are available for immediate enquiry and delivery; others are presented as part of our delivered track record. Contact us for the current status of any specific model." },
  { q: "Do you offer leasing for both private individuals and businesses?", a: "Yes. We structure tailored leasing proposals for both private clients and businesses. Terms are aligned with your profile and the vehicle — never a standard rate card. All proposals are available on request." },
  { q: "Is pricing published for vehicles in the collection?", a: "Most vehicles are presented at Price on Request. This reflects the nature of the collection — each car is individually assessed. Contact us directly and we will provide full details." },
  { q: "Can you source a specific vehicle I am looking for?", a: "Yes. Private sourcing is a core part of what we do. If you have a specific model, specification, or marque in mind, speak with our team and we will work to locate it through our network." },
  { q: "Where is the One2One showroom located?", a: "Our showroom is at Noorderlaan 121, B-2030 Antwerpen, Belgium. Visits are by appointment. Contact us to arrange a private viewing." },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section aria-label="Frequently asked questions" className="relative py-40 bg-surface-subtle overflow-hidden">
     

      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          <div className="lg:col-span-4">
            <span className="reveal text-accent text-xs uppercase tracking-[0.3em] mb-6 block font-label">Questions</span>
            <div className="clip-wrap mb-8">
              <h2 className="reveal fluid-display font-black text-content-primary tracking-tighter uppercase leading-none font-headline">FAQ</h2>
            </div>
            <p className="reveal delay-2 text-content-primary/50 leading-relaxed font-body">
              Everything you need to know about our collection, leasing, and how to get in touch.
            </p>
          </div>

          <div className="lg:col-span-8 flex flex-col">
            {faqs.map((faq, i) => (
              <div key={i} className={`reveal delay-${Math.min(i + 1, 6)} border-b border-content-primary/10`}>
                <button
                  className="w-full flex items-center justify-between py-8 text-left group"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  aria-controls={`faq-body-${i}`}
                >
                  <span className="text-content-primary text-lg font-bold group-hover:text-accent transition-colors duration-300 pr-8 font-headline">
                    {faq.q}
                  </span>
                  <span className="shrink-0 w-8 h-8 border border-content-primary/20 flex items-center justify-center text-content-primary/60 group-hover:border-accent group-hover:text-accent transition-all duration-300" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={`transition-transform duration-500 ${open === i ? "rotate-45" : ""}`}>
                      <line x1="7" y1="0" x2="7" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <line x1="0" y1="7" x2="14" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <div id={`faq-body-${i}`} className={`faq-body ${open === i ? "open" : ""}`} role="region">
                  <div>
                    <p className="text-content-primary/60 leading-relaxed pb-8 max-w-2xl font-body">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
