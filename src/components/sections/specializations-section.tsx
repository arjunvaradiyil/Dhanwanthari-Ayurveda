import Image from "next/image";
import Link from "next/link";

function LotusIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2C10.5 4.5 8 6 8 9c0 2 1.5 3.5 4 5 2.5-1.5 4-3 4-5 0-3-2.5-4.5-4-7zm0 20c1.5-2.5 4-4 4-7 0-2-1.5-3.5-4-5-2.5 1.5-4 3-4 5 0 3 2.5 4.5 4 7z" />
    </svg>
  );
}

function LeafIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17 3C8 2 2 8 2 15c2-4 6-6 10-5-3 2-5 6-4 10 7-1 13-7 12-16 0-1-1-1-1-1z" />
    </svg>
  );
}

export function SpecializationsSection() {
  return (
    <section
      id="specializations"
      className="scroll-mt-18 border-b border-forest/10 bg-cream py-20 lg:py-28"
      aria-labelledby="spec-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="spec-heading"
            className="font-serif text-3xl font-bold tracking-tight text-forest sm:text-4xl"
          >
            Healing specializations
          </h2>
          <p className="mt-3 text-body leading-relaxed">
            Focused therapeutic protocols for complete restoration—guided by
            classical texts and your constitution.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:grid-rows-2">
          {/* Signature — spans two rows on large screens */}
          <article className="group relative flex min-h-[420px] flex-col overflow-hidden rounded-2xl border border-forest/10 bg-forest shadow-lg lg:row-span-2 lg:min-h-0">
            <Image
              src="/hero-carousel-kitchen.png"
              alt="Traditional herbs and kitchen preparation for Panchakarma"
              fill
              className="object-cover opacity-45 transition-opacity duration-500 group-hover:opacity-55"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-forest via-forest/80 to-transparent" />
            <div className="relative z-10 mt-auto flex flex-col p-8 text-white lg:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-terracotta">
                Signature therapy
              </p>
              <div className="mt-3 flex items-center gap-2">
                <LotusIcon className="h-6 w-6 text-terracotta" />
                <h3 className="font-serif text-3xl font-bold lg:text-4xl">
                  Panchakarma detox
                </h3>
              </div>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/85">
                Supervised elimination and purification sequences when your
                physician determines readiness—always individualized.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-white/90">
                <li className="flex items-center gap-2">
                  <LeafIcon className="h-4 w-4 shrink-0 text-terracotta" />
                  Virechana (therapeutic purgation)
                </li>
                <li className="flex items-center gap-2">
                  <LeafIcon className="h-4 w-4 shrink-0 text-terracotta" />
                  Basti (medicated enema protocols)
                </li>
              </ul>
              <Link
                href="/treatments"
                className="mt-8 inline-flex text-xs font-semibold uppercase tracking-[0.16em] text-terracotta transition-opacity hover:opacity-80"
              >
                Learn more →
              </Link>
            </div>
          </article>

          <article className="flex flex-col justify-between rounded-2xl border border-forest/10 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-mist text-forest">
              <span className="text-lg" aria-hidden>
                ◎
              </span>
            </div>
            <div>
              <h3 className="mt-6 font-serif text-2xl font-semibold text-forest">
                Stress management
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-body">
                Shirodhara, calming body therapies, and dinacharya coaching to
                steady the nervous system and sleep.
              </p>
            </div>
          </article>

          <article className="flex flex-col justify-between rounded-2xl border border-forest/10 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-mist text-forest">
              <span className="text-lg" aria-hidden>
                ↗
              </span>
            </div>
            <div>
              <h3 className="mt-6 font-serif text-2xl font-semibold text-forest">
                Joint &amp; muscle care
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-body">
                Abhyanga, localized basti, and herbal applications for mobility,
                recovery, and chronic tension patterns.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
