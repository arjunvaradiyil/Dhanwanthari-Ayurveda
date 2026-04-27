import type { ReactNode } from "react";
import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

const colA = [
  { href: "/privacy", label: "Privacy policy" },
  { href: "/terms", label: "Terms of service" },
] as const;

const colB = [
  { href: "/heritage#philosophy", label: "Ayurvedic principles" },
  { href: "/heritage", label: "Our heritage" },
] as const;

function SocialIcon({ label, children }: { label: string; children: ReactNode }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-forest/10 text-charcoal/70 transition-colors hover:border-terracotta/40 hover:text-forest"
    >
      {children}
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-forest/10 bg-cream py-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div>
          <Link
            href="/"
            className="font-serif text-xl font-bold text-forest hover:opacity-90"
          >
            {SITE_NAME}
          </Link>
          <p className="mt-2 text-sm text-body">
            © {new Date().getFullYear()} {SITE_NAME}. Dr. Anju Mol,
            BAMS · Reg. No. 26249
          </p>
          <div className="mt-6 flex gap-3">
            <SocialIcon label="Instagram">
              <span className="text-xs font-bold">in</span>
            </SocialIcon>
            <SocialIcon label="Facebook">
              <span className="text-xs font-bold">f</span>
            </SocialIcon>
            <SocialIcon label="YouTube">
              <span className="text-xs font-bold">▶</span>
            </SocialIcon>
            <SocialIcon label="WhatsApp">
              <span className="text-xs font-bold">W</span>
            </SocialIcon>
          </div>
        </div>

        <div className="flex flex-wrap gap-16 lg:gap-24">
          <nav aria-label="Legal">
            <ul className="space-y-3">
              {colA.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-body underline-offset-4 hover:text-forest hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Learn">
            <ul className="space-y-3">
              {colB.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-body underline-offset-4 hover:text-forest hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
