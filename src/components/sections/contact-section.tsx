import { ContactForm } from "@/components/sections/contact-form";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-18 border-b border-forest/10 bg-white py-20 lg:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
            Authentic vaidyashala
          </p>
          <h2
            id="contact-heading"
            className="mt-3 font-serif text-3xl font-bold tracking-tight text-forest sm:text-4xl"
          >
            Begin your path to balance
          </h2>
          <p className="mt-4 text-body leading-relaxed">
            Connect with our team for appointments, directions, and questions
            about therapies with Dr. Anju Mol (BAMS).
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ContactForm />

          <div>
            <h3 className="font-serif text-xl font-semibold text-forest">
              Connect with us
            </h3>
            <ul className="mt-8 space-y-8 text-sm">
              <li>
                <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/60">
                  Phone
                </p>
                <a
                  href="tel:+919846959869"
                  className="mt-2 inline-block text-lg font-medium text-forest underline decoration-terracotta/40 decoration-2 underline-offset-4"
                >
                  98469 59869
                </a>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/60">
                  Location
                </p>
                <p className="mt-2 leading-relaxed text-body">
                  Dhanwanthari Ayurveda
                  <br />
                  Varkala, Kerala, India
                </p>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/60">
                  Healing hours
                </p>
                <p className="mt-2 text-body leading-relaxed">
                  Mon–Sat: 10:00–17:00
                  <br />
                  Sun: 10:00–13:00
                </p>
                <p className="mt-2 text-xs text-body/90 leading-relaxed" lang="ml">
                  പരിശോധന സമയം — തിങ്കൾ മുതൽ ശനി വരെ 10–5; ഞായറാഴ്ച 10–1
                </p>
              </li>
            </ul>

            <div className="mt-10 overflow-hidden rounded-xl border border-forest/10 bg-mist">
              <div className="aspect-[4/3] bg-linear-to-br from-charcoal/10 to-forest/10">
                <div className="flex h-full items-center justify-center p-6 text-center text-xs text-body">
                  Map: Varkala area — replace with Google Maps embed when ready.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-8 border-t border-forest/10 pt-16 sm:grid-cols-3">
          <div>
            <h3 className="font-serif text-lg font-semibold text-forest">
              Arrival guide
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-body">
              Please arrive about fifteen minutes early for your first visit so
              we can complete registration calmly.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-lg font-semibold text-forest">
              What to wear
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-body">
              Loose cotton clothing is ideal. We provide drapes for therapies;
              avoid heavy jewellery on treatment days.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-lg font-semibold text-forest">
              Cancellation
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-body">
              Kindly give at least twenty-four hours&apos; notice if you need to
              move an appointment so we can offer the slot to another patient.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
