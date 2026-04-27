import Image from "next/image";
import Link from "next/link";

export function HeritageSection() {
  return (
    <section
      id="heritage"
      className="scroll-mt-18 border-b border-forest/10 bg-white py-20 lg:py-28"
      aria-labelledby="heritage-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-forest/10 bg-mist shadow-lg sm:aspect-[5/6] lg:aspect-auto lg:min-h-[480px]">
            <Image
              src="/image.png"
              alt="Ayurvedic therapy setting"
              fill
              className="object-cover opacity-[0.55]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0 bg-linear-to-tr from-amber-950/25 via-transparent to-forest/20"
              aria-hidden
            />
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <p
                className="max-w-xs text-center font-serif text-2xl leading-snug text-forest/90 sm:text-3xl"
                style={{ fontFeatureSettings: '"salt" 1' }}
                aria-hidden
              >
                ॐ धन्वन्तरि नमः
              </p>
            </div>
          </div>

          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
              Our heritage
            </p>
            <h2
              id="heritage-heading"
              className="mt-3 font-serif text-3xl font-bold tracking-tight text-forest sm:text-4xl lg:text-[2.5rem] lg:leading-tight"
            >
              A legacy written in ancient scripts
            </h2>
            <div className="mt-8 space-y-5 text-body leading-relaxed">
              <p>
                For generations our vaidyas have turned to{" "}
                <span className="font-medium text-forest">Shastra</span>—the
                classical compendiums—to interpret pulse, tongue, and history
                with humility and precision.
              </p>
              <p>
                Dhanwanthari Parambarya Ayurveda Vaidyashala continues that
                lineage today under{" "}
                <span className="font-medium text-forest">
                  Dr. Anju Mol (BAMS, Reg. No. 26249)
                </span>
                , combining handwritten formulations and careful observation with
                the clarity of modern documentation.
              </p>
            </div>
            <Link
              href="/heritage#timeline"
              className="mt-10 inline-flex text-xs font-bold uppercase tracking-[0.16em] text-terracotta underline decoration-terracotta/30 decoration-2 underline-offset-8 hover:decoration-terracotta"
            >
              Discover our story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
