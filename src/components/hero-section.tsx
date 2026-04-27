import Link from "next/link";
import { HeroCarousel } from "@/components/hero-carousel";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-[min(100svh,900px)] w-full items-center"
    >
      <HeroCarousel />
      <div
        className="absolute inset-0 bg-linear-to-r from-forest/92 via-forest/55 to-forest/15 sm:from-forest/88 sm:via-forest/45 sm:to-transparent"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-forest/20"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-26 lg:px-8 lg:pb-24 lg:pt-30">
        <div className="max-w-xl">
          <p className="mb-4 inline-flex rounded-full border border-white/35 bg-forest/40 px-4 py-1.5 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
            Established 1924 · Traditional Vaidyashala
          </p>

          <h1 className="font-serif text-4xl font-bold leading-[1.12] tracking-tight text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.35)] sm:text-5xl lg:text-[2.85rem] lg:leading-[1.1] xl:text-5xl">
            A century of pure{" "}
            <span className="italic text-[#f0e4c8]">healing wisdom</span>
          </h1>

          <p className="mt-4 text-base leading-relaxed text-white/90 [text-shadow:0_1px_8px_rgba(0,0,0,0.35)] sm:text-lg">
            Classical Ayurveda led by Dr. Anju Mol (BAMS)—personalized
            protocols rooted in Shastra and gentle, modern clinical care.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-terracotta px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-md transition-opacity hover:opacity-90"
            >
              Schedule consultation
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/#specializations"
              className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-white/70 bg-white/10 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              Explore therapies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
