"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type Category =
  | "All therapies"
  | "Panchakarma"
  | "Detoxification"
  | "Stress management"
  | "Rejuvenation";

type Treatment = {
  slug: string;
  name: string;
  tag: string;
  blurb: string;
  bullets?: string[];
  image: string;
  objectClass: string;
  featured?: boolean;
};

const FILTERS: Category[] = [
  "All therapies",
  "Panchakarma",
  "Detoxification",
  "Stress management",
  "Rejuvenation",
];

const TREATMENTS: Treatment[] = [
  {
    slug: "panchakarma",
    name: "Panchakarma",
    tag: "Detoxification",
    blurb:
      "Physician-guided cleansing when agni and elimination are ready—Vamana, Virechana, Basti, and Nasya as indicated.",
    bullets: [
      "Structured preparatory phase (Snehana & Swedana)",
      "In-residence monitoring with daily rounds",
    ],
    image: "/hero-carousel-kitchen.png",
    objectClass: "object-center opacity-[0.5]",
    featured: true,
  },
  {
    slug: "shirodhara",
    name: "Shirodhara",
    tag: "Rejuvenation",
    blurb:
      "Continuous stream of medicated oil to the forehead for deep nervous system support.",
    image: "/image.png",
    objectClass: "object-[58%_center] opacity-[0.5]",
  },
  {
    slug: "abhyangam",
    name: "Abhyangam",
    tag: "Vitality",
    blurb:
      "Full-body herbal oil massage to improve circulation, skin quality, and sleep architecture.",
    image: "/image.png",
    objectClass: "object-[45%_center] opacity-[0.5]",
  },
  {
    slug: "udvartanam",
    name: "Udvartanam",
    tag: "Weight management",
    blurb:
      "Dry or wet herbal powder massage to stimulate lymph flow and metabolic clarity.",
    image: "/hero-carousel-kitchen.png",
    objectClass: "object-[52%_center] opacity-[0.5]",
  },
  {
    slug: "nasyam",
    name: "Nasyam",
    tag: "Respiratory care",
    blurb:
      "Medicated oils introduced through nasal passages for head, neck, and respiratory balance.",
    image: "/hero-carousel-kitchen.png",
    objectClass: "object-[48%_center] opacity-[0.5]",
  },
];

function treatmentMatchesFilter(t: Treatment, filter: Category): boolean {
  if (filter === "All therapies") return true;
  if (filter === "Panchakarma")
    return t.slug === "panchakarma" || t.slug === "udvartanam";
  if (filter === "Detoxification")
    return t.slug === "panchakarma" || t.slug === "nasyam";
  if (filter === "Stress management") return t.slug === "shirodhara";
  if (filter === "Rejuvenation")
    return t.slug === "shirodhara" || t.slug === "abhyangam";
  return false;
}

export function TreatmentsGrid() {
  const [filter, setFilter] = useState<Category>("All therapies");

  const filtered = useMemo(
    () => TREATMENTS.filter((t) => treatmentMatchesFilter(t, filter)),
    [filter],
  );

  const featured = TREATMENTS.find((t) => t.featured);
  const showFeatured =
    featured &&
    (filter === "All therapies" ||
      filter === "Detoxification" ||
      filter === "Panchakarma");
  const others = filtered.filter((t) => !showFeatured || !t.featured);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] transition-colors ${
              filter === f
                ? "border-forest bg-forest text-white"
                : "border-forest/15 bg-white text-charcoal/80 hover:border-forest/30"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {showFeatured ? (
        <article className="mt-12 overflow-hidden rounded-2xl border border-forest/10 bg-white shadow-lg lg:flex">
          <div className="relative min-h-[280px] flex-1 lg:min-h-[360px]">
            <Image
              src={featured.image}
              alt=""
              fill
              className={`object-cover ${featured.objectClass}`}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-linear-to-r from-forest/60 to-transparent" />
          </div>
          <div className="flex flex-1 flex-col justify-center p-8 lg:p-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-terracotta">
              {featured.tag}
            </p>
            <h3 className="mt-2 font-serif text-3xl font-bold text-forest">
              {featured.name}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-body">
              {featured.blurb}
            </p>
            {featured.bullets ? (
              <ul className="mt-6 space-y-2 text-sm text-charcoal/90">
                {featured.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-terracotta" aria-hidden>
                      ·
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            ) : null}
            <Link
              href="/contact"
              className="mt-8 inline-flex text-xs font-semibold uppercase tracking-[0.14em] text-terracotta hover:opacity-80"
            >
              Learn more →
            </Link>
          </div>
        </article>
      ) : null}

      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {others.map((t) => (
          <li
            key={t.slug}
            className="group flex flex-col overflow-hidden rounded-xl border border-forest/10 bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="relative aspect-[5/4]">
              <Image
                src={t.image}
                alt=""
                fill
                className={`object-cover transition-opacity group-hover:opacity-90 ${t.objectClass}`}
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-forest/50 to-transparent opacity-80" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-terracotta">
                {t.tag}
              </p>
              <h3 className="mt-1 font-serif text-xl font-semibold text-forest">
                {t.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-body">
                {t.blurb}
              </p>
              <Link
                href="/contact"
                className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-terracotta"
              >
                Learn more →
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
