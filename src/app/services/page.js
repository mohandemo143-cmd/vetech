import Link from "next/link";

import {
  ChevronRight,
} from "lucide-react";

import { PageHero } from "@/components/shared/PageHero";

import {
  services,
  heroImages,
} from "@/lib/data";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="A comprehensive suite of NDT & inspection services."
        subtitle="20 specialized methods covering radiographic, ultrasonic, magnetic, surface and metallurgical testing."
        image={heroImages[2]}
      />

      {/* SERVICES */}
      <section className="py-24 bg-white">

        <div className="container-x">

          {/* HEADER */}
          <div className="max-w-3xl mb-16">

            <div className="red-bar text-xs uppercase tracking-[0.25em] font-semibold text-brand-red">
              Industrial Inspection Services
            </div>

            <h2 className="mt-5 text-4xl md:text-5xl font-bold text-charcoal leading-tight">
              Comprehensive NDT & Metallurgical solutions.
            </h2>

            <p className="mt-6 text-muted-foreground leading-relaxed">
              Advanced testing and inspection services designed
              for industrial quality assurance, safety compliance
              and structural integrity evaluation.
            </p>

          </div>

          {/* GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group bg-white border border-border hover:border-brand-red transition-all duration-300 overflow-hidden flex flex-col"
              >

                {/* IMAGE */}
                <div className="relative aspect-[16/10] overflow-hidden">

                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />

                  <div className="absolute top-4 left-4 bg-brand-red text-white text-xs font-bold px-2.5 py-1">
                    {s.number}
                  </div>

                </div>

                {/* CONTENT */}
                <div className="p-6 flex-1 flex flex-col">

                  <h3 className="font-semibold text-lg text-charcoal group-hover:text-brand-red transition-colors leading-snug">
                    {s.title}
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {s.short}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-charcoal group-hover:text-brand-red">
                    Learn more

                    <ChevronRight className="h-4 w-4" />
                  </div>

                </div>

              </Link>
            ))}

          </div>

        </div>

      </section>
    </>
  );
}