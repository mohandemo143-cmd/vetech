"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { galleryImages } from "@/lib/data";

export function GallerySection() {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="red-bar text-xs uppercase tracking-[0.25em] font-semibold text-brand-red">
              Gallery
            </div>
            <h2 className="mt-5 text-4xl md:text-5xl font-bold text-charcoal leading-tight">
              From the field.
            </h2>
          </div>
          <Link
            href="/gallery"
            className="text-brand-red font-semibold inline-flex items-center gap-2"
          >
            View full gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {galleryImages.slice(0, 8).map((src, i) => (
            <div
              key={i}
              className={`group overflow-hidden ${
                i === 0 || i === 5
                  ? "md:col-span-2 md:row-span-2 aspect-square"
                  : "aspect-square"
              }`}
            >
              <img
                src={src}
                alt={`Vetech gallery ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}