"use client";

import Link from "next/link";
import { ArrowRight, Target, ShieldCheck, Award, CheckCircle2 } from "lucide-react";
import { heroImages } from "@/lib/data";

export function AboutSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img
            src={heroImages[2]}
            alt="Vetech NDT operations"
            className="w-full aspect-[4/5] object-cover"
          />
          <div className="absolute -bottom-8 -right-8 bg-brand-red text-white p-8 max-w-[260px] hidden md:block">
            <div className="text-5xl font-bold leading-none">25+</div>
            <div className="mt-2 text-sm uppercase tracking-wider opacity-90">
              Years of Engineering Trust
            </div>
          </div>
          <div className="absolute top-6 -left-6 hidden md:block">
            <div className="h-24 w-2 bg-brand-red" />
          </div>
        </div>

        <div>
          <div className="red-bar text-xs uppercase tracking-[0.25em] font-semibold text-brand-red">
            About Vetech
          </div>
          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-charcoal leading-tight">
            A leading-edge testing partner for critical industries.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Based in Hyderabad, VETECH NDT & Metallurgical Services Pvt. Ltd. specializes in
            Non-Destructive Testing (NDT) and Destructive Testing (DT) across Aerospace, Defence,
            Automotive, Petrochemicals and General Engineering. Established by Mr. G. Srinivas Rao
            and his family — experts in foundry technology and NDT practices — VETECH was built to
            deliver top-tier testing services backed by deep technical expertise and a personal touch.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              ["Accuracy", Target],
              ["Safety", ShieldCheck],
              ["Reliability", Award],
              ["Compliance", CheckCircle2],
            ].map(([label, Icon]) => (
              <div
                key={label}
                className="flex items-center gap-3 p-4 border border-border hover:border-brand-red transition-colors"
              >
                <Icon className="h-5 w-5 text-brand-red" />
                <span className="font-medium text-charcoal">{label}</span>
              </div>
            ))}
          </div>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 text-brand-red font-semibold hover:gap-3 transition-all"
          >
            Discover our story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}