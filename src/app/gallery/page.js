import { PageHero } from "@/components/shared/PageHero";

import {
  galleryImages,
  heroImages,
} from "@/lib/data";

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="From the field, the lab and the shop floor."
        subtitle="A visual showcase of our inspection work, facilities and industrial testing environments."
        image={heroImages[1]}
      />

      {/* GALLERY */}
      <section className="py-24 bg-white">

        <div className="container-x">

          {/* HEADER */}
          <div className="max-w-2xl mb-16">

            <div className="red-bar text-xs uppercase tracking-[0.25em] font-semibold text-brand-red">
              Industrial Gallery
            </div>

            <h2 className="mt-5 text-4xl md:text-5xl font-bold text-charcoal leading-tight">
              Inspection excellence in action.
            </h2>

            <p className="mt-6 text-muted-foreground leading-relaxed">
              Explore our field operations, inspection activities,
              laboratory analysis and industrial quality assurance projects.
            </p>

          </div>

          {/* MASONRY GRID */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [&>*]:mb-5">

            {[...galleryImages, ...galleryImages].map((src, i) => (
              <div
                key={i}
                className="break-inside-avoid overflow-hidden group relative"
              >

                {/* IMAGE */}
                <img
                  src={src}
                  alt={`Vetech inspection ${i + 1}`}
                  loading="lazy"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* TEXT */}
                <div className="absolute bottom-0 left-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">

                  <div className="text-white text-lg font-semibold">
                    Inspection Activity
                  </div>

                  <div className="text-white/70 text-sm mt-1">
                    Industrial Testing & Quality Assurance
                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>
    </>
  );
}