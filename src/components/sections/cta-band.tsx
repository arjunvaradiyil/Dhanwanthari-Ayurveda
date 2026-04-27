import Link from "next/link";

export function CtaBand() {
  return (
    <section
      className="scroll-mt-18 bg-forest py-20 lg:py-24"
      aria-labelledby="book-heading"
    >
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <h2
          id="book-heading"
          className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Ready to restore your inner balance?
        </h2>
        <p className="mt-5 text-sm leading-relaxed text-white/85 sm:text-base">
          Consult our Ayurvedic physicians to understand whether cleansing,
          rejuvenation, or lifestyle medicine is the right next step for you.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
          <Link
            href="/contact"
            className="inline-flex w-full min-w-[200px] items-center justify-center rounded-sm bg-terracotta px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-md transition-opacity hover:opacity-90 sm:w-auto"
          >
            Schedule consultation
          </Link>
          <Link
            href="/contact"
            className="inline-flex w-full min-w-[200px] items-center justify-center rounded-sm border-2 border-white/80 bg-transparent px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white/10 sm:w-auto"
          >
            Find a location
          </Link>
        </div>
      </div>
    </section>
  );
}
