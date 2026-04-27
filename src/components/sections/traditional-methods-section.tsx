import Image from "next/image";

const methods = [
  {
    title: "Shirodhara",
    blurb: "Warm oil in a steady stream—deep support for stress, sleep, and mental clarity.",
    src: "/image.png",
    position: "object-[55%_center]",
  },
  {
    title: "Panchakarma",
    blurb: "Supervised cleansing when the body is ready—never rushed, always monitored.",
    src: "/hero-carousel-kitchen.png",
    position: "object-center",
  },
  {
    title: "Abhyanga",
    blurb: "Rhythmic herbal oil massage to nourish tissues, soften joints, and calm the senses.",
    src: "/image.png",
    position: "object-[40%_center]",
  },
] as const;

export function TraditionalMethodsSection() {
  return (
    <section
      id="methods"
      className="scroll-mt-18 border-b border-forest/10 bg-white py-20 lg:py-28"
      aria-labelledby="methods-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
          Traditional methods
        </p>
        <h2
          id="methods-heading"
          className="mx-auto mt-3 max-w-2xl text-center font-serif text-3xl font-bold tracking-tight text-forest sm:text-4xl"
        >
          Techniques passed through observation
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-body">
          Hands, oils, and timing—refined across decades in our vaidyashala.
        </p>

        <ul className="mt-14 grid gap-8 sm:grid-cols-3">
          {methods.map((m) => (
            <li key={m.title}>
              <div className="relative aspect-square overflow-hidden rounded-xl border border-forest/10 shadow-md">
                <Image
                  src={m.src}
                  alt=""
                  fill
                  className={`object-cover opacity-[0.55] ${m.position}`}
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-forest/70 to-transparent" />
              </div>
              <h3 className="mt-4 font-serif text-xl font-semibold text-forest">
                {m.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{m.blurb}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
