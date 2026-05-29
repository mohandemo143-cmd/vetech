"use client";

import { Quote } from "lucide-react";

const testimonials = [
  {
    q: "Vetech's RT and UT capabilities have been instrumental in our shutdown turnarounds.",
    n: "Refinery Operations Manager",
    c: "Petrochemical Major",
  },
  {
    q: "Their CWIs deliver audit-ready documentation. Rare to find this level of rigor.",
    n: "QA/QC Head",
    c: "Defence Fabrication",
  },
  {
    q: "Responsive, certified and technically deep — they're our default NDT partner.",
    n: "Project Director",
    c: "Power Generation EPC",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-x max-w-5xl">
        <div className="text-center mb-14">
          <div className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-red">
            Testimonials
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-charcoal">
            Trusted by industry leaders.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 border border-border bg-white">
              <Quote className="h-8 w-8 text-brand-red mb-5" />
              <p className="text-charcoal leading-relaxed">"{t.q}"</p>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="font-semibold text-charcoal text-sm">{t.n}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{t.c}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}