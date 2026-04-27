"use client";

import { useState } from "react";

const navLinks = [
  { href: "#", label: "Home", active: true },
  { href: "#heritage", label: "Heritage", active: false },
  { href: "#treatments", label: "Treatments", active: false },
  { href: "#contact", label: "Contact", active: false },
] as const;

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-charcoal/5 bg-cream/95 backdrop-blur-sm">
      <div className="relative mx-auto flex h-20 max-w-7xl items-center px-6 lg:px-8">
        <a
          href="#"
          className="font-serif text-lg font-bold tracking-tight text-charcoal sm:text-xl"
        >
          Dhanwanthari Ayurveda
        </a>

        <nav
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-10 lg:flex"
          aria-label="Main"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-xs font-semibold uppercase tracking-[0.12em] text-charcoal/80 transition-colors hover:text-charcoal ${
                link.active
                  ? "border-b border-charcoal pb-0.5"
                  : "border-b border-transparent pb-0.5 hover:border-charcoal/30"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <a
            href="#book"
            className="hidden rounded-sm bg-terracotta px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-90 lg:inline-flex"
          >
            Book now
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-charcoal lg:hidden"
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
          className="border-t border-charcoal/10 px-6 py-4 lg:hidden"
        >
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold uppercase tracking-[0.12em] text-charcoal/90"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#book"
              className="mt-2 inline-flex w-fit rounded-sm bg-terracotta px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-white"
              onClick={() => setMenuOpen(false)}
            >
              Book now
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
