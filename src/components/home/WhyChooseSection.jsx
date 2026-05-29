"use client";

import {
  Award,
  Users,
  Zap,
  Globe2,
  Target,
  ShieldCheck,
  Phone,
  CheckCircle2,
} from "lucide-react";

const reasons = [
  { Icon: Award,        t: "25+ Years Expertise",        d: "Decades of foundry and inspection know-how." },
  { Icon: Users,        t: "Certified Technicians",       d: "SNT-TC-1A, CWI and ASNT-trained experts." },
  { Icon: Zap,          t: "Advanced Methods",            d: "Latest UT, RT, MPI and PMI technology." },
  { Icon: Globe2,       t: "National & International",    d: "Field support wherever you operate." },
  { Icon: Target,       t: "Multi-Industry Experience",   d: "From aerospace to petrochemical." },
  { Icon: ShieldCheck,  t: "Quality Assurance Focus",     d: "Documented, compliant, auditable." },
  { Icon: Phone,        t: "Fast Response",               d: "Rapid mobilization for urgent shutdowns." },
  { Icon: CheckCircle2, t: "Compliance Driven",           d: "ASME, API, AWS, ISO, NACE aligned." },
];

export function WhyChooseSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-red">
            Why Choose Vetech
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-charcoal leading-tight">
            Engineered for trust at every level.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map(({ Icon, t, d }) => (
            <div
              key={t}
              className="group p-7 border border-border hover:border-brand-red hover:shadow-lg transition-all"
            >
              <div className="h-12 w-12 grid place-items-center bg-secondary group-hover:bg-brand-red transition-colors mb-5">
                <Icon className="h-6 w-6 text-brand-red group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-semibold text-lg text-charcoal">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}