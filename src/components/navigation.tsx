"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SITE_NAME, TREATMENTS_VIDEO_URL } from "@/lib/site";

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
      <div className="mx-auto grid min-h-18 max-w-7xl grid-cols-1 items-center gap-3 px-4 py-3 sm:px-6 lg:grid-cols-[minmax(0,1fr)_auto_auto] lg:gap-x-4 lg:px-6 lg:py-0 xl:gap-x-8 xl:px-8">
        <Link
          href="/"
          title={SITE_NAME}
          className="min-w-0 justify-self-start text-left font-serif text-[0.7rem] font-bold leading-snug tracking-tight text-forest sm:text-sm lg:text-[0.8125rem] lg:leading-tight xl:text-base 2xl:text-lg"
        >
          <span className="leading-snug">
            <span className="block sm:hidden">Dhanwanthari Parambarya</span>
            <span className="block sm:hidden">Ayurveda Vaidyashala</span>
            <span className="hidden sm:inline">{SITE_NAME}</span>
          </span>
        </Link>

        <nav
          className="hidden flex-wrap items-center justify-center gap-x-4 gap-y-1 whitespace-nowrap lg:flex xl:gap-x-6"
          aria-label="Main"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors hover:text-forest xl:text-xs xl:tracking-[0.14em] ${
                linkActive(pathname, link.href)
                  ? "border-b border-forest pb-0.5 text-forest"
                  : "border-b border-transparent pb-0.5 text-charcoal/70 hover:border-forest/25"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2 sm:gap-3 lg:justify-self-end">
          <a
            href={TREATMENTS_VIDEO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-sm border border-forest/20 bg-white/80 px-3 py-2 text-[10px] font-semibold uppercase tracking-widest text-forest transition-colors hover:border-forest/40 hover:bg-white lg:inline-flex"
          >
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-forest text-[8px] text-white">
              ▶
            </span>
            <span className="hidden xl:inline">Treatments video</span>
            <span className="xl:hidden">Video</span>
          </a>
          <Link
            href="/contact"
            className="hidden shrink-0 rounded-sm bg-terracotta px-4 py-2 text-[10px] font-semibold uppercase tracking-widest text-white transition-opacity hover:opacity-90 sm:px-5 sm:py-2.5 sm:text-xs sm:tracking-[0.12em] lg:inline-flex"
          >
            Book now
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-forest lg:hidden"
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
          className="border-t border-forest/10 bg-cream px-4 py-4 shadow-lg sm:px-6 lg:hidden"
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
            <a
              href={TREATMENTS_VIDEO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold uppercase tracking-[0.12em] text-forest"
              onClick={() => setMenuOpen(false)}
            >
              Treatments video ↗
            </a>
            <Link
              href="/contact"
              className="mt-1 inline-flex w-fit rounded-sm bg-terracotta px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-white"
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
