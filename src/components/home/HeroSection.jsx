"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Counter } from "@/components/shared/Counter";
import { heroImages } from "@/lib/data";

const counters = [
  { v: 25,  s: "+", l: "Years Experience"   },
  { v: 20,  s: "+", l: "NDT Services"       },
  { v: 500, s: "+", l: "Projects Delivered" },
  { v: 15,  s: "+", l: "Industries Served"  },
];

export function HeroSection() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((s) => (s + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ── BANNER ─────────────────────────────────────────────── */}
      <section className="relative min-h-[100vh] -mt-18 flex items-center overflow-hidden">

        {/* SLIDES */}
        {heroImages.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ${
              i === slide ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}

        {/* OVERLAYS */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent" />

        {/* CONTENT */}
        <div className="container-x relative z-10 text-white pt-32 pb-20">
          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-brand-red/40 bg-brand-red/10 backdrop-blur text-xs uppercase tracking-[0.2em] text-white/90 mb-8">
              <span className="h-1.5 w-1.5 bg-brand-red rounded-full animate-pulse" />
              Accuracy Meets Assurance
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-[1.02] tracking-tight">
              Precision.
              <br />
              Reliability.
              <br />
              <span className="text-brand-red">Industrial Assurance.</span>
            </h1>

            <p className="mt-7 text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed">
              Advanced Non-Destructive Testing & Metallurgical Services for Aerospace,
              Defence, Automotive, Petrochemical and Engineering industries.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 bg-brand-red text-white px-7 py-4 font-semibold hover:bg-brand-red/90 transition-all"
              >
                Explore Services
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-7 py-4 font-semibold hover:bg-white hover:text-charcoal transition-all backdrop-blur"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* SLIDE INDICATORS */}
          <div className="absolute bottom-8 left-6 md:left-12 flex gap-2">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                className={`h-0.5 transition-all ${
                  i === slide ? "w-12 bg-brand-red" : "w-6 bg-white/40"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── COUNTERS (below the banner) ────────────────────────── */}
      <div className="bg-charcoal">
        <div className="container-x">
          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-white/10">
            {counters.map((c, i) => (
              <div
                key={i}
                className="py-8 px-6 border-l border-white/10 first:border-l-0 border-b md:border-b-0 [&:nth-child(2)]:border-b md:[&:nth-child(2)]:border-b-0"
              >
                <div className="text-3xl md:text-4xl font-bold text-white">
                  <Counter end={c.v} suffix={c.s} />
                </div>
                <div className="text-xs uppercase tracking-wider text-white/50 mt-1">
                  {c.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}