"use client";

const certifications = ["ASNT", "SNT-TC-1A", "CWI", "ASME", "API", "ISO 9001"];

export function CertificationsSection() {
  return (
    <section className="py-24 bg-charcoal text-white">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-red">
            Certifications & Standards
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            Compliance you can audit.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/10">
          {certifications.map((c) => (
            <div
              key={c}
              className="bg-charcoal p-8 text-center hover:bg-brand-red/90 transition-colors"
            >
              <div className="text-2xl font-bold tracking-wider">{c}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-white/50">Certified</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}