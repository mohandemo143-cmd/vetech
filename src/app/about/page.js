import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
  Target,
  ShieldCheck,
  Award,
  Users,
} from "lucide-react";

import { PageHero } from "@/components/shared/PageHero";
import { Counter } from "@/components/shared/Counter";

import { heroImages } from "@/lib/data";

const timeline = [
  {
    y: "Foundation",
    t: "Established by Mr. G. Srinivas Rao and family — pioneers in foundry technology and NDT practice.",
  },
  {
    y: "Expansion",
    t: "Built a dedicated quality control department with multi-skilled SNT-TC-1A certified technicians.",
  },
  {
    y: "Certifications",
    t: "Added Certified Weld Inspectors (CWIs) and broadened NDT capability to 20+ methods.",
  },
  {
    y: "Today",
    t: "Trusted partner for aerospace, defence, petrochemical, automotive and engineering majors across India and beyond.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Vetech"
        title="Built on precision. Grown on trust."
        subtitle="A Hyderabad-based NDT & Metallurgical inspection partner serving critical industries for 25+ years."
        image={heroImages[2]}
      />

      {/* STORY */}
      <section className="py-24 bg-white">
        <div className="container-x grid lg:grid-cols-12 gap-12">

          {/* LEFT */}
          <div className="lg:col-span-7">

            <div className="red-bar text-xs uppercase tracking-[0.25em] font-semibold text-brand-red">
              Our Story
            </div>

            <h2 className="mt-5 text-3xl md:text-4xl font-bold text-charcoal leading-tight">
              A leading-edge testing company specializing in
              Non-Destructive & Destructive Testing.
            </h2>

            <p className="mt-6 text-muted-foreground leading-relaxed">
              Based in Hyderabad, VETECH NDT & Metallurgical
              Services Pvt. Ltd. is a leading-edge testing company
              specializing in Non-Destructive Testing (NDT) and
              Destructive Testing (DT) across critical sectors
              including Aerospace, Defence, Automotive,
              Petrochemicals and General Engineering.
            </p>

            <h3 className="mt-12 text-2xl font-bold text-charcoal">
              Our Foundation
            </h3>

            <p className="mt-3 text-muted-foreground leading-relaxed">
              Established by Mr. G. Srinivas Rao and his family —
              experts in both foundry technology and NDT practices —
              VETECH was built with a vision to offer top-tier
              testing services backed by deep technical expertise.
            </p>

            <h3 className="mt-10 text-2xl font-bold text-charcoal">
              Our Expertise
            </h3>

            <p className="mt-3 text-muted-foreground leading-relaxed">
              A dedicated quality control department led by seasoned
              professionals with hands-on industry knowledge and
              multi-skilled technicians capable of executing complex
              assignments onsite and offsite.
            </p>

            <h3 className="mt-10 text-2xl font-bold text-charcoal">
              Client-Centric Approach
            </h3>

            <p className="mt-3 text-muted-foreground leading-relaxed">
              Our experienced customer service specialists work
              closely with clients to plan and execute NDT projects
              efficiently while ensuring every examination remains
              technically sound and cost-effective.
            </p>

          </div>

          {/* RIGHT */}
          <aside className="lg:col-span-5 space-y-6">

            <div className="bg-charcoal text-white p-8">
              <div className="text-xs uppercase tracking-[0.2em] text-brand-red font-semibold">
                Founder
              </div>

              <h3 className="mt-3 text-2xl font-bold">
                Mr. G. Srinivas Rao
              </h3>

              <p className="mt-3 text-white/70 text-sm leading-relaxed">
                Founder and guiding hand behind VETECH.
                With a background in foundry technology and
                NDT practice, his vision shaped a company
                defined by accuracy, integrity and technical depth.
              </p>
            </div>

            {/* COUNTERS */}
            <div className="grid grid-cols-2 gap-4">

              {[
                { v: 25, s: "+", l: "Years" },
                { v: 20, s: "+", l: "NDT Methods" },
                { v: 15, s: "+", l: "Industries" },
                { v: 500, s: "+", l: "Projects" },
              ].map((c) => (
                <div
                  key={c.l}
                  className="p-6 bg-secondary"
                >
                  <div className="text-3xl font-bold text-charcoal">
                    <Counter
                      end={c.v}
                      suffix={c.s}
                    />
                  </div>

                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    {c.l}
                  </div>
                </div>
              ))}

            </div>

            {/* GLANCE */}
            <div className="p-8 border-l-4 border-brand-red bg-secondary">

              <h4 className="font-bold text-charcoal">
                At a Glance
              </h4>

              <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">

                {[
                  "Equipped with reference standards & codes",
                  "25+ years expertise with skilled manpower",
                  "Advanced infrastructure",
                  "Responsive customer support",
                ].map((p) => (
                  <li
                    key={p}
                    className="flex gap-2"
                  >
                    <CheckCircle2 className="h-4 w-4 text-brand-red shrink-0 mt-0.5" />

                    {p}
                  </li>
                ))}

              </ul>
            </div>

          </aside>

        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 bg-secondary">

        <div className="container-x">

          <div className="text-center max-w-2xl mx-auto mb-16">

            <div className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-red">
              Journey
            </div>

            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-charcoal">
              Two and a half decades of inspection excellence.
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6">

            {timeline.map((step, i) => (
              <div
                key={i}
                className="relative bg-white p-7 border-t-4 border-brand-red"
              >

                <div className="text-5xl font-bold text-brand-red/15 absolute top-3 right-4">
                  {i + 1}
                </div>

                <div className="font-bold text-charcoal text-lg">
                  {step.y}
                </div>

                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {step.t}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-white">

        <div className="container-x">

          <div className="text-center max-w-2xl mx-auto mb-14">

            <div className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-red">
              Our Values
            </div>

            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-charcoal">
              The principles behind every inspection.
            </h2>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">

            {[
              { Icon: Target, t: "Accuracy" },
              { Icon: ShieldCheck, t: "Safety" },
              { Icon: Award, t: "Reliability" },
              { Icon: CheckCircle2, t: "Compliance" },
              { Icon: Users, t: "Technical Excellence" },
            ].map(({ Icon, t }) => (
              <div
                key={t}
                className="p-7 border border-border text-center hover:border-brand-red hover:-translate-y-1 transition-all"
              >

                <Icon className="h-8 w-8 text-brand-red mx-auto" />

                <div className="mt-4 font-semibold text-charcoal">
                  {t}
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal text-white">

        <div className="container-x flex flex-col md:flex-row md:items-center md:justify-between gap-8">

          <h2 className="text-3xl md:text-4xl font-bold max-w-xl leading-tight">
            Partner with a team that treats every weld like its own.
          </h2>

          <Link
            href="/contact"
            className="bg-brand-red px-7 py-4 font-semibold inline-flex items-center gap-2 hover:bg-brand-red/90 transition-colors"
          >
            Get in touch

            <ArrowRight className="h-4 w-4" />
          </Link>

        </div>

      </section>
    </>
  );
}