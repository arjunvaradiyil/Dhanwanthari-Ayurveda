import Image from "next/image";

const points = [
  {
    title: "Prakriti analysis",
    body: "Constitution (prakriti) and current imbalance (vikriti) guide every dose, oil, and meal suggestion—not generic templates.",
    icon: "◈",
  },
  {
    title: "Dinacharya",
    body: "Daily rhythm—wake, meals, work, and rest—is aligned with your capacity so therapies land gently and last longer.",
    icon: "☀",
  },
] as const;

export function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="scroll-mt-18 border-b border-forest/10 bg-mist py-20 lg:py-28"
      aria-labelledby="philosophy-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-stretch gap-0 overflow-hidden rounded-2xl border border-forest/10 bg-white shadow-lg lg:grid-cols-2">
          <div className="relative min-h-[320px] lg:min-h-[440px]">
            <Image
              src="/hero-carousel-kitchen.png"
              alt="Stone mortar and traditional preparation"
              fill
              className="object-cover object-center opacity-[0.5]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0 bg-forest/25 mix-blend-multiply"
              aria-hidden
            />
          </div>

          <div className="relative bg-mist px-8 py-12 lg:px-12 lg:py-16">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='none' stroke='%231b3022' stroke-width='1'/%3E%3C/svg%3E")`,
              }}
              aria-hidden
            />
            <p className="relative text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
              Our philosophy
            </p>
            <h2
              id="philosophy-heading"
              className="relative mt-3 font-serif text-3xl font-bold tracking-tight text-forest sm:text-4xl"
            >
              Balance as a daily practice
            </h2>
            <ul className="relative mt-10 space-y-10">
              {points.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-sm text-forest shadow-sm"
                    aria-hidden
                  >
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-forest">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-body">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
