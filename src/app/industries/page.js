import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";

import {
  industries,
  heroImages,
} from "@/lib/data";

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Trusted across critical sectors."
        subtitle="From aerospace and defence to oil & gas, power, automotive and beyond — Vetech supports the industries that build modern infrastructure."
        image={heroImages[0]}
      />

      {/* INDUSTRIES GRID */}
      <section className="py-24 bg-white">
        <div className="container-x">
          {/* HEADER */}
          <div className="max-w-3xl mb-16">
            <div className="red-bar text-xs uppercase tracking-[0.25em] font-semibold text-brand-red">
              Sectors We Serve
            </div>

            <h2 className="mt-5 text-4xl md:text-5xl font-bold text-charcoal leading-tight">
              Industry-focused inspection solutions.
            </h2>

            <p className="mt-6 text-muted-foreground leading-relaxed">
              We support critical industries with precision
              Non-Destructive Testing, Metallurgical Analysis
              and Quality Assurance services that ensure
              operational reliability and compliance.
            </p>
          </div>

          {/* GRID */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {industries.map((ind, index) => (
              <div
                key={ind.name}
                className="group relative aspect-[4/5] overflow-hidden cursor-pointer"
              >
                {/* IMAGE */}
                <Image
                  src={ind.image}
                  alt={ind.name}
                  fill
                  loading="lazy"
                  sizes="
                    (max-width: 640px) 100vw,
                    (max-width: 768px) 50vw,
                    (max-width: 1280px) 25vw,
                    20vw
                  "
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/20 group-hover:from-brand-red/90 group-hover:via-brand-red/70 group-hover:to-brand-red/30 transition-all duration-500" />

                {/* NUMBER */}
                <div className="absolute top-5 left-5 text-white/20 text-5xl font-bold z-10">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* CONTENT */}
                <div className="absolute inset-0 flex items-end p-6 z-10">
                  <div>
                    <h3 className="text-white font-bold text-xl leading-tight">
                      {ind.name}
                    </h3>

                    <div className="mt-3 h-1 w-10 bg-brand-red group-hover:w-20 transition-all duration-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXTRA SECTION */}
      <section className="py-24 bg-secondary">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <div>
              <div className="red-bar text-xs uppercase tracking-[0.25em] font-semibold text-brand-red">
                Multi-Sector Expertise
              </div>

              <h2 className="mt-5 text-4xl font-bold text-charcoal leading-tight">
                Supporting industries where precision matters most.
              </h2>

              <p className="mt-6 text-muted-foreground leading-relaxed">
                Our testing and inspection services help industries
                maintain structural integrity, operational safety
                and international compliance standards across
                high-performance environments.
              </p>

              <div className="grid sm:grid-cols-2 gap-5 mt-10">
                {[
                  "Aerospace",
                  "Defence",
                  "Oil & Gas",
                  "Petrochemical",
                  "Automotive",
                  "Engineering",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-white border border-border px-5 py-4 font-medium text-charcoal"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative h-[500px] overflow-hidden">
              <Image
                src={heroImages[1]}
                alt="Industry Expertise"
                fill
                loading="lazy"
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}