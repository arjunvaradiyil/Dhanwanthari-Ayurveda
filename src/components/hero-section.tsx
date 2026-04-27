import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 max-w-xl lg:order-1">
          <p className="mb-6 inline-flex rounded-md bg-sage-badge px-3 py-1.5 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-sage-text">
            Est. 1924 · Traditional Vaidyashala
          </p>

          <h1 className="font-serif text-4xl font-bold leading-[1.15] tracking-tight text-charcoal sm:text-5xl lg:text-[2.75rem] lg:leading-[1.12] xl:text-5xl">
            Harmonize Your Life with{" "}
            <span className="font-medium italic text-terracotta">
              Ancient Ayurvedic
            </span>{" "}
            Wisdom.
          </h1>

          <p className="mt-6 text-base leading-relaxed text-body sm:text-lg">
            Experience authentic healing through customized treatments that
            bridge the gap between millennia-old traditions and modern clinical
            precision.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="#journey"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-terracotta px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-opacity hover:opacity-90"
            >
              Begin your journey
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="#treatments"
              className="inline-flex items-center justify-center rounded-sm border border-charcoal/25 bg-transparent px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-charcoal transition-colors hover:border-charcoal hover:bg-charcoal/3"
            >
              View treatments
            </Link>
          </div>
        </div>

        <div className="order-1 w-full lg:order-2">
          <div className="relative mx-auto w-full max-w-lg pb-16 sm:pb-20 lg:ml-auto lg:mr-0 lg:pb-14">
            <div className="relative aspect-4/5 overflow-hidden rounded-2xl shadow-lg shadow-charcoal/10 sm:aspect-5/6 lg:aspect-4/5">
              <Image
                src="/hero-ayurveda.png"
                alt="Ayurvedic oils, herbs, and therapy essentials on a wooden surface"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            <div className="absolute bottom-0 left-4 z-10 max-w-[240px] translate-y-1/3 rounded-sm border border-stat-border bg-white p-4 shadow-md sm:left-6 sm:max-w-[260px] sm:p-5 lg:translate-y-1/4">
              <p className="font-serif text-4xl font-semibold leading-none text-terracotta sm:text-[2.5rem]">
                98%
              </p>
              <p className="mt-2 font-sans text-xs italic leading-snug text-charcoal/85 sm:text-sm">
                Success rate in chronic lifestyle rejuvenation programs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
