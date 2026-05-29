"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { services } from "@/lib/data";

export function ServicesSection() {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="red-bar text-xs uppercase tracking-[0.25em] font-semibold text-brand-red">
              Our Services
            </div>
            <h2 className="mt-5 text-4xl md:text-5xl font-bold text-charcoal leading-tight max-w-2xl">
              A comprehensive suite of NDT methods.
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-charcoal font-semibold hover:text-brand-red transition-colors"
          >
            View all 20 services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 9).map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group bg-white border border-border hover:border-brand-red transition-all duration-300 overflow-hidden flex flex-col"
            >
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
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-semibold text-lg text-charcoal group-hover:text-brand-red transition-colors leading-snug">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {s.short}
                </p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-charcoal group-hover:text-brand-red">
                  Learn more <ChevronRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}