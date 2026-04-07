"use client";

import { useState } from "react";

export default function VehicleInquiryForm({ vehicleTitle }: { vehicleTitle: string }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col gap-4">
        <div className="w-8 h-px bg-accent mb-2" />
        <p className="text-content-primary font-black text-xl uppercase tracking-tight font-headline">
          Enquiry received.
        </p>
        <p className="text-content-primary/40 text-sm font-body leading-relaxed">
          Our team will be in touch directly regarding the {vehicleTitle}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6" aria-label={`Enquiry form for ${vehicleTitle}`}>
      {[
        { id: "inq-name",    label: "Full Name",      type: "text",  placeholder: "Your name" },
        { id: "inq-email",   label: "Email Address",  type: "email", placeholder: "your@email.com" },
        { id: "inq-phone",   label: "Phone (optional)", type: "tel", placeholder: "+32 ..." },
      ].map((field) => (
        <div key={field.id} className="flex flex-col gap-2">
          <label htmlFor={field.id} className="text-content-primary/30 text-[10px] uppercase tracking-[0.3em] font-label">
            {field.label}
          </label>
          <div className="border-b border-surface-border/40 focus-within:border-accent transition-colors duration-300 pb-2">
            <input
              id={field.id}
              type={field.type}
              placeholder={field.placeholder}
              required={field.type !== "tel"}
              className="w-full bg-transparent text-content-primary placeholder:text-content-primary/20 text-sm font-body focus:outline-none"
            />
          </div>
        </div>
      ))}

      <div className="flex flex-col gap-2">
        <label htmlFor="inq-message" className="text-content-primary/30 text-[10px] uppercase tracking-[0.3em] font-label">
          Message
        </label>
        <textarea
          id="inq-message"
          rows={3}
          placeholder={`I am interested in the ${vehicleTitle}...`}
          className="w-full bg-transparent border-b border-surface-border/40 focus:border-accent focus:outline-none transition-colors duration-300 pb-2 text-content-primary placeholder:text-content-primary/20 text-sm font-body resize-none"
        />
      </div>

      <button
        type="submit"
        className="group mt-2 flex items-center gap-4 text-content-primary hover:text-accent transition-colors duration-300"
      >
        <span className="text-xs uppercase tracking-[0.3em] font-label font-bold">Send Enquiry</span>
        <span className="w-8 h-px bg-current transition-all duration-500 group-hover:w-16" aria-hidden="true" />
      </button>

      <p className="text-content-primary/20 text-[10px] uppercase tracking-[0.2em] font-label">
        All enquiries are handled personally and in confidence.
      </p>
    </form>
  );
}
