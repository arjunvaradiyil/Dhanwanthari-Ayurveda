"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/heritage", label: "Heritage" },
  { href: "/treatments", label: "Treatments" },
  { href: "/contact", label: "Contact" },
] as const;

function linkActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-forest/10 bg-cream/95 shadow-sm backdrop-blur-md">
      <div className="relative mx-auto flex h-18 max-w-7xl items-center px-6 lg:px-8">
        <Link
          href="/"
          className="font-serif text-lg font-bold tracking-tight text-forest sm:text-xl"
        >
          Dhanwanthari Ayurveda
        </Link>

        <nav
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-10 lg:flex"
          aria-label="Main"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs font-semibold uppercase tracking-[0.14em] transition-colors hover:text-forest ${
                linkActive(pathname, link.href)
                  ? "border-b border-forest pb-0.5 text-forest"
                  : "border-b border-transparent pb-0.5 text-charcoal/70 hover:border-forest/25"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-sm bg-terracotta px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-90 lg:inline-flex"
          >
            Book now
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-forest lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div
          id="mobile-menu"
          className="border-t border-forest/10 bg-cream px-6 py-4 shadow-lg lg:hidden"
        >
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold uppercase tracking-[0.12em] text-charcoal"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 inline-flex w-fit rounded-sm bg-terracotta px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-white"
              onClick={() => setMenuOpen(false)}
            >
              Book now
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
