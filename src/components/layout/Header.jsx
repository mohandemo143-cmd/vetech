"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

import { Logo } from "./Logo";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container-x flex items-center justify-between h-18 py-3">
        {/* Logo */}
        <Link href="/" aria-label="Vetech home">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => {
            const active =
              pathname === n.href ||
              (n.href !== "/" && pathname.startsWith(n.href));

            return (
              <Link
                key={n.href}
                href={n.href}
                className={`px-4 py-2 text-sm font-medium transition-colors relative ${
                  active
                    ? "text-brand-red"
                    : "text-charcoal hover:text-brand-red"
                }`}
              >
                {n.label}

                {active && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-brand-red" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+918919076338"
            className="flex items-center gap-2 text-sm text-charcoal hover:text-brand-red transition-colors"
          >
            <Phone className="h-4 w-4" />

            <span className="font-medium">
              +91 8919076338
            </span>
          </a>

          <Link
            href="/contact"
            className="bg-brand-red text-white px-5 py-2.5 text-sm font-semibold hover:bg-brand-red/90 transition-colors"
          >
            Request Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-charcoal"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-border">
          <nav className="container-x py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="py-3 text-charcoal font-medium border-b border-border/50"
              >
                {n.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="mt-4 bg-brand-red text-white px-5 py-3 text-center font-semibold"
            >
              Request Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}