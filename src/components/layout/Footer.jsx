import Link from "next/link";

import {
  Mail,
  Phone,
  MapPin,
  Globe,
  // Brand icons removed from lucide-react
  // Using generic alternatives
  Users,        // for LinkedIn
  Share2,       // for Facebook
  MessageCircle, // for Twitter/X
} from "lucide-react";

import { Logo } from "./Logo";

import { services, company } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white/80">
      <div className="container-x py-16 grid lg:grid-cols-12 gap-10">
        
        <div className="lg:col-span-4">
          <Logo light />

          <p className="mt-5 text-sm text-white/60 leading-relaxed max-w-sm">
            Precision-driven NDT & Metallurgical inspection partner
            for aerospace, defence, oil & gas and engineering
            industries since 25+ years.
          </p>

          <div className="flex gap-3 mt-6">
            {[Users, MessageCircle, Share2].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-9 w-9 grid place-items-center border border-white/15 hover:border-brand-red hover:text-brand-red transition-colors"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

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

        <div className="lg:col-span-3">
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
            Contact
          </h4>

          <ul className="space-y-3 text-sm">
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
                    className="block hover:text-brand-red"
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
                    className="block hover:text-brand-red"
                  >
                    {p}
                  </a>
                ))}
              </div>
            </li>

            <li className="flex gap-3">
              <Globe className="h-4 w-4 text-brand-red shrink-0 mt-0.5" />
              <span>{company.website}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} VETECH NDT &
            Metallurgical Services Pvt. Ltd.
            All rights reserved.
          </p>

          <p>GST: {company.gst}</p>
        </div>
      </div>
    </footer>
  );
}