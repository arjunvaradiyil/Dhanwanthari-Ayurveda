import Link from "next/link";
import { TreatmentsGrid } from "@/components/sections/treatments-grid";
import { TREATMENTS_VIDEO_URL } from "@/lib/site";

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M8 5v14l11-7L8 5z" />
    </svg>
  );
}

export function TreatmentsSection() {
  return (
    <section
      id="treatments"
      className="scroll-mt-18 border-b border-forest/10 bg-cream py-20 lg:py-28"
      aria-labelledby="treatments-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
            Healing traditions
          </p>
          <h2
            id="treatments-heading"
            className="mt-3 font-serif text-3xl font-bold tracking-tight text-forest sm:text-4xl"
          >
            Authentic Ayurvedic treatments
          </h2>
          <p className="mt-4 text-body leading-relaxed">
            Restorative therapies and supervised cleansing—chosen only after
            consultation with Dr. Anju Mol (BAMS).
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={TREATMENTS_VIDEO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border-2 border-forest bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-forest shadow-sm transition-colors hover:bg-mist"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest text-white">
                <PlayIcon className="ml-0.5 h-4 w-4" />
              </span>
              Watch treatments video
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>

        <div className="mt-14">
          <TreatmentsGrid />
        </div>

        <div className="mt-20 rounded-2xl bg-forest px-8 py-12 text-center lg:px-16">
          <p className="font-serif text-2xl font-bold text-white sm:text-3xl">
            Ready to begin your journey?
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-sm bg-terracotta px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-opacity hover:opacity-90"
          >
            Book now
          </Link>
        </div>
      </div>
    </section>
  );
}
