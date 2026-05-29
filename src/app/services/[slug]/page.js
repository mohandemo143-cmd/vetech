"use client";

import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";
import { ArrowRight, CheckCircle2, ChevronRight, Plus, Minus } from "lucide-react";
import { services } from "@/lib/data";
import Image from "next/image";

const processSteps = [
  { t: "Consultation",  d: "Scope, code & timeline alignment." },
  { t: "Mobilization",  d: "Certified team & equipment dispatch." },
  { t: "Execution",     d: "Inspection performed to specification." },
  { t: "Reporting",     d: "Documented, traceable, audit-ready." },
];

const faqItems = [
  {
    q: "What industries use this inspection method?",
    a: "This testing method is widely used in aerospace, oil & gas, petrochemical, power generation, automotive and heavy engineering industries.",
  },
  {
    q: "Are your inspections compliant with international standards?",
    a: "Yes. All inspections are performed according to applicable ASME, ASTM, ISO and customer-specific quality standards.",
  },
  {
    q: "Can onsite inspection services be provided?",
    a: "Yes. Our certified inspection teams can mobilize to customer facilities, shutdown sites and project locations.",
  },
  {
    q: "How quickly can reports be delivered?",
    a: "Inspection reports are typically delivered within agreed project timelines with full traceability and documentation.",
  },
  {
    q: "Do you support emergency shutdown inspections?",
    a: "Yes. Emergency and rapid-response inspection support is available for critical industrial operations.",
  },
];

function FaqItem({ faq, index, isOpen, onToggle }) {
  return (
    <div
      className={`group border-l-4 transition-all duration-300 ${
        isOpen ? "border-l-brand-red bg-white" : "border-l-transparent bg-secondary hover:border-l-brand-red/40"
      } border border-border`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-6 p-7 text-left"
      >
        <div className="flex items-start gap-5">
          <span
            className={`text-xs font-bold font-mono mt-1 shrink-0 transition-colors duration-300 ${
              isOpen ? "text-brand-red" : "text-charcoal/30"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className={`font-semibold text-base leading-snug transition-colors duration-300 ${
              isOpen ? "text-charcoal" : "text-charcoal/80"
            }`}
          >
            {faq.q}
          </span>
        </div>

        <span
          className={`shrink-0 mt-0.5 h-7 w-7 flex items-center justify-center border transition-all duration-300 ${
            isOpen
              ? "bg-brand-red border-brand-red text-white"
              : "border-border text-charcoal/40 group-hover:border-brand-red/40 group-hover:text-brand-red/60"
          }`}
        >
          {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="pb-7 pl-[4.25rem] pr-7 text-muted-foreground leading-relaxed text-sm">
          {faq.a}
        </p>
      </div>
    </div>
  );
}

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const [openFaq, setOpenFaq] = useState(0);

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">Service not found</h1>
      </div>
    );
  }

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="relative h-[60vh] min-h-[440px] flex items-end overflow-hidden">
  
  <Image
    src={service.image}
    alt={service.title}
    fill
    priority
    className="object-cover object-center"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-charcoal/40" />

  <div className="container-x relative z-10 pb-16 text-white">
    <nav className="text-xs text-white/60 mb-6 flex items-center gap-2">
      <Link href="/" className="hover:text-white">
        Home
      </Link>

      <ChevronRight className="h-3 w-3" />

      <Link href="/services" className="hover:text-white">
        Services
      </Link>

      <ChevronRight className="h-3 w-3" />

      <span className="text-white">{service.title}</span>
    </nav>

    <div className="text-brand-red font-bold tracking-widest mb-3">
      {service.number}
    </div>

    <h1 className="text-4xl md:text-6xl font-bold max-w-4xl leading-[1.05]">
      {service.title}
    </h1>

    <p className="mt-5 text-lg text-white/75 max-w-2xl">
      {service.short}
    </p>
  </div>
</section>

      {/* CONTENT */}
      <section className="py-20 bg-white">
        <div className="container-x grid lg:grid-cols-3 gap-12">

          {/* LEFT */}
          <div className="lg:col-span-2">
            {/* OVERVIEW */}
            <div className="red-bar text-xs uppercase tracking-[0.25em] font-semibold text-brand-red">
              Overview
            </div>
            <h2 className="mt-4 text-3xl font-bold text-charcoal">What it is</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed text-lg">
              {service.description}
            </p>

            {/* INFO GRID */}
            <div className="grid sm:grid-cols-2 gap-8 mt-12">

              {/* APPLICATIONS */}
              <div>
                <h3 className="font-bold text-charcoal mb-4 uppercase text-sm tracking-wider">
                  Applications
                </h3>
                <ul className="space-y-2.5">
                  {service.applications.map((a) => (
                    <li key={a} className="flex gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-brand-red shrink-0 mt-0.5" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              {/* BENEFITS */}
              <div>
                <h3 className="font-bold text-charcoal mb-4 uppercase text-sm tracking-wider">
                  Benefits
                </h3>
                <ul className="space-y-2.5">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-brand-red shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* INDUSTRIES */}
              <div>
                <h3 className="font-bold text-charcoal mb-4 uppercase text-sm tracking-wider">
                  Industries
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.industries.map((i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1.5 bg-secondary text-charcoal font-medium"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>

              {/* STANDARDS */}
              <div>
                <h3 className="font-bold text-charcoal mb-4 uppercase text-sm tracking-wider">
                  Standards Followed
                </h3>
                <ul className="space-y-2.5">
                  {service.standards.map((s) => (
                    <li key={s} className="text-sm font-mono text-muted-foreground">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* PROCESS */}
            <div className="mt-14">
              <div className="red-bar text-xs uppercase tracking-[0.25em] font-semibold text-brand-red">
                Process
              </div>
              <h2 className="mt-4 text-3xl font-bold text-charcoal">
                Inspection workflow
              </h2>
              <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {processSteps.map((step, i) => (
                  <div key={step.t} className="p-6 border-t-4 border-brand-red bg-secondary">
                    <div className="text-3xl font-bold text-brand-red/30">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="mt-2 font-bold text-charcoal">{step.t}</div>
                    <p className="text-sm text-muted-foreground mt-2">{step.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">

              {/* CTA */}
              <div className="bg-charcoal text-white p-8">
                <h3 className="text-xl font-bold">Need this inspection?</h3>
                <p className="mt-3 text-white/70 text-sm leading-relaxed">
                  Speak with a Vetech specialist about scope, codes and mobilization.
                </p>
                <Link
                  href="/contact"
                  className="mt-6 w-full bg-brand-red text-white px-5 py-3 font-semibold inline-flex items-center justify-center gap-2 hover:bg-brand-red/90 transition-colors"
                >
                  Request a quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* OTHER SERVICES */}
              <div className="border border-border p-6">
                <h4 className="font-bold text-charcoal text-sm uppercase tracking-wider">
                  Other services
                </h4>
                <ul className="mt-4 space-y-3 text-sm">
                  {services
                    .filter((s) => s.slug !== service.slug)
                    .slice(0, 6)
                    .map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="flex items-center gap-2 text-charcoal hover:text-brand-red transition-colors"
                        >
                          <ChevronRight className="h-4 w-4 text-brand-red" />
                          {s.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>

            </div>
          </aside>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-secondary">
        <div className="container-x">

          <div className="grid lg:grid-cols-3 gap-16 items-start">

            {/* LEFT — LABEL + HEADING + SUBTEXT + STAT STRIP */}
            <div className="lg:col-span-1 lg:sticky lg:top-28">

              <div className="red-bar text-xs uppercase tracking-[0.25em] font-semibold text-brand-red">
                FAQ
              </div>

              <h2 className="mt-5 text-4xl font-bold text-charcoal leading-tight">
                Common questions about this service.
              </h2>

              <p className="mt-5 text-muted-foreground leading-relaxed text-sm">
                Answers to the most common client queries regarding
                inspection scope, standards, reporting and execution.
              </p>

              {/* STAT STRIP */}
              <div className="mt-10 grid grid-cols-2 gap-px bg-border">
                {[
                  { value: "ISO", label: "Certified" },
                  { value: "ASME", label: "Compliant" },
                  { value: "24 hr", label: "Turnaround" },
                  { value: "100%", label: "Traceable" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white p-5">
                    <div className="text-xl font-bold text-brand-red">{stat.value}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-red hover:gap-3 transition-all"
              >
                Still have questions? Contact us
                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>

            {/* RIGHT — ACCORDION */}
            <div className="lg:col-span-2 space-y-3">
              {faqItems.map((faq, i) => (
                <FaqItem
                  key={i}
                  index={i}
                  faq={faq}
                  isOpen={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                />
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* RELATED */}
      <section className="py-20 bg-white">
        <div className="container-x">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-3xl font-bold text-charcoal">Related services</h2>
            <Link
              href="/services"
              className="text-brand-red font-semibold inline-flex items-center gap-2"
            >
              All services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {related.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group bg-secondary overflow-hidden"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-charcoal group-hover:text-brand-red transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{s.short}</p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}