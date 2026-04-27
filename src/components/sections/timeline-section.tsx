const milestones = [
  {
    year: "1924",
    title: "The humble beginning",
    body: "A small vaidyashala opens its doors—manuscripts, brass vessels, and a promise to follow classical Ayurveda without shortcuts.",
  },
  {
    year: "1965",
    title: "The first pharmacy",
    body: "In-house preparation of medicated oils and churnas expands, serving families across the region with consistent quality.",
  },
  {
    year: "2024",
    title: "Global holistic hub",
    body: "Today we welcome seekers from afar while keeping the same slow, careful pace of diagnosis and follow-up.",
  },
];

export function TimelineSection() {
  return (
    <section
      id="timeline"
      className="scroll-mt-18 border-b border-forest/10 bg-cream py-20 lg:py-28"
      aria-labelledby="timeline-heading"
    >
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h2
          id="timeline-heading"
          className="text-center font-serif text-3xl font-bold tracking-tight text-forest sm:text-4xl"
        >
          The path of our ancestors
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-body">
          Three moments along a single thread—learning, preparation, and
          presence.
        </p>

        <ol className="relative mt-14 space-y-10 border-l border-forest/15 pl-8 lg:pl-10">
          {milestones.map((m) => (
            <li key={m.year} className="relative">
              <span
                className="absolute -left-[calc(0.5rem+1px)] top-1.5 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-terracotta bg-cream lg:-left-[calc(0.625rem+1px)]"
                aria-hidden
              />
              <p className="font-serif text-2xl font-bold text-terracotta">
                {m.year}
              </p>
              <h3 className="mt-1 font-serif text-xl font-semibold text-forest">
                {m.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{m.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
