"use client";

import { useState } from "react";

import {
  Mail,
  Phone,
  MapPin,
  Globe,
  AlertCircle,
  Send,
} from "lucide-react";

import { PageHero } from "@/components/shared/PageHero";

import {
  company,
  heroImages,
} from "@/lib/data";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your inspection scope."
        subtitle="Our specialists respond within one business day. Emergency support available."
        image={heroImages[2]}
      />

      {/* CONTACT SECTION */}
      <section className="py-24 bg-white">

        <div className="container-x grid lg:grid-cols-5 gap-10">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-6">

            {/* CONTACT CARD */}
            <div className="bg-charcoal text-white p-8">

              <h3 className="text-xl font-bold">
                Get in touch
              </h3>

              <ul className="mt-6 space-y-5 text-sm">

                <li className="flex gap-3">
                  <MapPin className="h-5 w-5 text-brand-red shrink-0 mt-0.5" />

                  <span className="text-white/80">
                    {company.address}
                  </span>
                </li>

                <li className="flex gap-3">
                  <Mail className="h-5 w-5 text-brand-red shrink-0 mt-0.5" />

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
                  <Phone className="h-5 w-5 text-brand-red shrink-0 mt-0.5" />

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
                  <Globe className="h-5 w-5 text-brand-red shrink-0 mt-0.5" />

                  <span className="text-white/80">
                    {company.website}
                  </span>
                </li>

              </ul>
            </div>

            {/* EMERGENCY */}
            <div className="bg-brand-red text-white p-8">

              <AlertCircle className="h-6 w-6" />

              <h3 className="mt-3 text-lg font-bold">
                Emergency Support
              </h3>

              <p className="mt-2 text-sm text-white/85">
                Shutdown or urgent inspection?
                Call us directly for rapid mobilization.
              </p>

              <a
                href={`tel:${company.phones[0].replace(/\s/g, "")}`}
                className="mt-4 inline-block font-bold text-lg"
              >
                {company.phones[0]}
              </a>

            </div>

          </div>

          {/* FORM */}
          <div className="lg:col-span-3 border border-border p-8 md:p-10">

            <h3 className="text-2xl font-bold text-charcoal">
              Inquiry form
            </h3>

            <p className="text-sm text-muted-foreground mt-1">
              Tell us about your project —
              we'll reply within one business day.
            </p>

            {sent ? (
              <div className="mt-8 p-6 bg-green-50 border border-green-200 text-green-800">
                Thanks — your message has been received.
                A Vetech specialist will respond shortly.
              </div>
            ) : (
              <form
                className="mt-8 space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >

                <div className="grid sm:grid-cols-2 gap-5">

                  <Field
                    label="Full name"
                    name="name"
                    required
                  />

                  <Field
                    label="Company"
                    name="company"
                  />

                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    required
                  />

                  <Field
                    label="Phone"
                    name="phone"
                    type="tel"
                  />

                </div>

                <Field
                  label="Service of interest"
                  name="service"
                />

                <div>

                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Message
                  </label>

                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full border border-border px-4 py-3 text-sm focus:border-brand-red focus:outline-none transition-colors"
                  />

                </div>

                <button
                  type="submit"
                  className="bg-brand-red text-white px-7 py-3.5 font-semibold inline-flex items-center gap-2 hover:bg-brand-red/90 transition-colors"
                >
                  Send inquiry

                  <Send className="h-4 w-4" />
                </button>

              </form>
            )}

          </div>

        </div>

      </section>

      {/* MAP */}
      <section className="bg-secondary">

        <div className="aspect-[16/6] w-full">

          <iframe
            title="Vetech Hyderabad location"
            src="https://www.google.com/maps?q=Prashanthinagar+Industrial+Development+Area+Hyderabad&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          />

        </div>

      </section>
    </>
  );
}

/* FIELD COMPONENT */

function Field({
  label,
  name,
  type = "text",
  required,
}) {
  return (
    <div>

      <label className="block text-sm font-medium text-charcoal mb-2">
        {label}

        {required && (
          <span className="text-brand-red">
            {" "}*
          </span>
        )}
      </label>

      <input
        type={type}
        name={name}
        required={required}
        className="w-full border border-border px-4 py-3 text-sm focus:border-brand-red focus:outline-none transition-colors"
      />

    </div>
  );
}