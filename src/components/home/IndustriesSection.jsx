"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industries } from "@/lib/data";

export function IndustriesSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-red">
            Industries We Serve
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-charcoal leading-tight">
            Trusted across critical sectors.
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {industries.slice(0, 10).map((ind) => (
            <div
              key={ind.name}
              className="group relative aspect-square overflow-hidden cursor-pointer"
            >
              <img
                src={ind.image}
                alt={ind.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-charcoal/65 group-hover:bg-brand-red/80 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-end p-5">
                <h3 className="text-white font-semibold text-base leading-tight">{ind.name}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-brand-red font-semibold"
          >
            View all industries <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}