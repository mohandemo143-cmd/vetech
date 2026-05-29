"use client";

import { heroImages } from "@/lib/data";

const applications = [
  "ASME Pressure Vessel Inspection",
  "Piping & Process Lines",
  "Full Storage Tank Assessment",
  "Shutdown Inspections",
  "Fabrication QA During Manufacturing",
  "Corrosion Monitoring & Data Management",
  "Weldment Examination",
  "Pipeline Integrity Inspection",
  "Crane Hook & Assemblies",
  "Bridge & Structural Steel",
  "Pressure Vessel Corrosion Monitoring",
  "Turbine Blade Inspection",
];

export function ApplicationsSection() {
  return (
    <section className="py-24 md:py-32 bg-charcoal text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImages[1]})` }}
      />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="red-bar text-xs uppercase tracking-[0.25em] font-semibold text-brand-red">
              Applications & Field Services
            </div>
            <h2 className="mt-5 text-4xl md:text-5xl font-bold leading-tight">
              On-site, off-site, anywhere your assets operate.
            </h2>
          </div>
          <p className="text-white/70 text-lg leading-relaxed lg:pt-12">
            Vetech travels locally, nationally and internationally to perform non-destructive
            testing on a wide variety of materials and structures — from pressure vessels and
            pipelines to crane assemblies, bridges and turbine components.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {applications.map((app, i) => (
            <div
              key={app}
              className="bg-charcoal p-7 hover:bg-brand-red/90 transition-colors group cursor-default"
            >
              <div className="text-brand-red group-hover:text-white text-2xl font-bold mb-3 transition-colors">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-semibold text-white">{app}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}