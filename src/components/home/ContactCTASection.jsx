"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { company } from "@/lib/data";

export function ContactCTASection() {
  return (
    <section className="py-24 bg-brand-red text-white">
      <div className="container-x grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Ready to inspect with confidence?
          </h2>
          <p className="mt-5 text-white/85 text-lg max-w-xl">
            Speak with a Vetech specialist about your inspection scope, codes and timelines.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          <a
            href={`tel:${company.phones[0].replace(/\s/g, "")}`}
            className="bg-white/10 hover:bg-white/20 backdrop-blur p-6 transition-colors"
          >
            <Phone className="h-5 w-5 mb-3" />
            <div className="text-xs uppercase tracking-wider opacity-80">Call</div>
            <div className="font-semibold mt-1 text-sm">{company.phones[0]}</div>
          </a>

          <a
            href={`mailto:${company.emails[0]}`}
            className="bg-white/10 hover:bg-white/20 backdrop-blur p-6 transition-colors"
          >
            <Mail className="h-5 w-5 mb-3" />
            <div className="text-xs uppercase tracking-wider opacity-80">Email</div>
            <div className="font-semibold mt-1 text-xs break-all">{company.emails[0]}</div>
          </a>

          <div className="bg-white/10 backdrop-blur p-6">
            <MapPin className="h-5 w-5 mb-3" />
            <div className="text-xs uppercase tracking-wider opacity-80">Visit</div>
            <div className="font-semibold mt-1 text-sm">Hyderabad, India</div>
          </div>
        </div>
      </div>
    </section>
  );
}