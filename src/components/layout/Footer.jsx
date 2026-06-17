import Link from "next/link";

import {
  Mail,
  Phone,
  MapPin,
  Globe,
} from "lucide-react";

import { services, company } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white/80">
      {/* Top Accent */}
      <div className="h-1 bg-brand-red" />

      <div className="container-x py-16 grid lg:grid-cols-12 gap-10">

        {/* Company Intro */}
        <div className="lg:col-span-4">

          <span className="inline-block text-xs uppercase tracking-[0.3em] text-brand-red font-semibold">
            VETECH
          </span>

          <h3 className="mt-3 text-2xl font-bold text-white leading-tight">
            Engineering Trust Through
            Inspection Excellence
          </h3>

          <div className="mt-4 h-[2px] w-20 bg-brand-red" />

          <p className="mt-6 text-sm text-white/60 leading-relaxed max-w-sm">
            Precision-driven Non-Destructive Testing,
            Metallurgical Analysis and Quality Assurance
            partner supporting aerospace, defence,
            oil & gas, power generation and engineering
            industries for over 25 years.
          </p>

        </div>

        {/* Company Links */}
        <div className="lg:col-span-2">
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
            Company
          </h4>

          <ul className="space-y-2.5 text-sm">
            {[
              ["/", "Home"],
              ["/about", "About"],
              ["/services", "Services"],
              ["/industries", "Industries"],
              ["/gallery", "Gallery"],
              ["/contact", "Contact"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="hover:text-brand-red transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="lg:col-span-3">
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
            Services
          </h4>

          <ul className="space-y-2.5 text-sm">
            {services.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="hover:text-brand-red transition-colors"
                >
                  {s.title
                    .replace(" & Inspection", "")
                    .replace(" Services", "")}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-3">
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
            Contact
          </h4>

          <ul className="space-y-4 text-sm">

            <li className="flex gap-3">
              <MapPin className="h-4 w-4 text-brand-red shrink-0 mt-0.5" />
              <span>{company.address}</span>
            </li>

            <li className="flex gap-3">
              <Mail className="h-4 w-4 text-brand-red shrink-0 mt-0.5" />

              <div>
                {company.emails.map((e) => (
                  <a
                    key={e}
                    href={`mailto:${e}`}
                    className="block hover:text-brand-red transition-colors"
                  >
                    {e}
                  </a>
                ))}
              </div>
            </li>

            <li className="flex gap-3">
              <Phone className="h-4 w-4 text-brand-red shrink-0 mt-0.5" />

              <div>
                {company.phones.map((p) => (
                  <a
                    key={p}
                    href={`tel:${p.replace(/\s/g, "")}`}
                    className="block hover:text-brand-red transition-colors"
                  >
                    {p}
                  </a>
                ))}
              </div>
            </li>

            <li className="flex gap-3">
              <Globe className="h-4 w-4 text-brand-red shrink-0 mt-0.5" />

              <a
                href={`https://${company.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-red transition-colors"
              >
                {company.website}
              </a>
            </li>

          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
    <div className="border-t border-white/10">
  <div className="container-x py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">

    <p>
      © {new Date().getFullYear()} VETECH NDT &
      Metallurgical Services Pvt. Ltd.
      All rights reserved.
    </p>

<p className="text-center">
  Designed & Developed by{" "}
  <a
    href="https://www.ameyait.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-brand-red font-semibold hover:text-brand-red transition-colors"
  >
    Ameya IT Solutions
  </a>
</p>

    <p>
      GST: {company.gst}
    </p>

  </div>
</div>
    </footer>
  );
}