"use client";

import { FormEvent, useState } from "react";

const treatments = [
  "General consultation",
  "Panchakarma",
  "Shirodhara",
  "Abhyanga",
  "Other / unsure",
] as const;

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="rounded-2xl border border-forest/10 bg-white p-8 shadow-sm lg:p-10">
      <div className="flex items-center gap-2">
        <span className="text-terracotta" aria-hidden>
          ❧
        </span>
        <h3 className="font-serif text-xl font-semibold text-forest">
          Appointment request
        </h3>
      </div>
      <p className="mt-2 text-sm text-body">
        Share a few details—we will call you back to confirm timing.
      </p>

      {sent ? (
        <p className="mt-8 rounded-lg bg-mist px-4 py-3 text-sm text-forest">
          Thank you. This demo form does not send email yet; call{" "}
          <a href="tel:+919846959869" className="font-semibold underline">
            98469 59869
          </a>{" "}
          to book directly.
        </p>
      ) : (
        <form className="mt-8 space-y-5" onSubmit={onSubmit}>
          <div>
            <label
              htmlFor="fullName"
              className="text-xs font-semibold uppercase tracking-wider text-charcoal/70"
            >
              Full name
            </label>
            <input
              id="fullName"
              name="fullName"
              required
              autoComplete="name"
              className="mt-1.5 w-full rounded-md border border-forest/15 bg-cream px-4 py-3 text-sm outline-none ring-terracotta/40 focus:ring-2"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-xs font-semibold uppercase tracking-wider text-charcoal/70"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="mt-1.5 w-full rounded-md border border-forest/15 bg-cream px-4 py-3 text-sm outline-none ring-terracotta/40 focus:ring-2"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="text-xs font-semibold uppercase tracking-wider text-charcoal/70"
            >
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              className="mt-1.5 w-full rounded-md border border-forest/15 bg-cream px-4 py-3 text-sm outline-none ring-terracotta/40 focus:ring-2"
            />
          </div>
          <div>
            <label
              htmlFor="treatment"
              className="text-xs font-semibold uppercase tracking-wider text-charcoal/70"
            >
              Preferred treatment
            </label>
            <select
              id="treatment"
              name="treatment"
              className="mt-1.5 w-full rounded-md border border-forest/15 bg-cream px-4 py-3 text-sm outline-none ring-terracotta/40 focus:ring-2"
              defaultValue=""
            >
              <option value="" disabled>
                Select…
              </option>
              {treatments.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="details"
              className="text-xs font-semibold uppercase tracking-wider text-charcoal/70"
            >
              Your healing journey (details)
            </label>
            <textarea
              id="details"
              name="details"
              rows={4}
              className="mt-1.5 w-full resize-y rounded-md border border-forest/15 bg-cream px-4 py-3 text-sm outline-none ring-terracotta/40 focus:ring-2"
            />
          </div>
          <label className="flex items-start gap-3 text-sm text-body">
            <input
              type="checkbox"
              required
              className="mt-1 h-4 w-4 shrink-0 rounded border-forest/20 text-terracotta"
            />
            <span>
              I agree to the privacy policy and understand my information is used
              only to respond to this request.
            </span>
          </label>
          <button
            type="submit"
            className="w-full rounded-sm bg-terracotta py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-opacity hover:opacity-90 sm:w-auto sm:px-10"
          >
            Submit request
          </button>
        </form>
      )}
    </div>
  );
}
