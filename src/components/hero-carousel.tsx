"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, useSyncExternalStore } from "react";

function subscribeReducedMotion(onStoreChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

const SLIDES = [
  {
    src: "/image.png",
    alt: "Shirodhara Ayurvedic treatment with traditional herbs and oils",
    imgClass:
      "object-cover object-[55%_center] sm:object-[58%_center] lg:object-center",
  },
  {
    src: "/hero-carousel-kitchen.png",
    alt: "Traditional Ayurvedic kitchen with stone grinder, brass vessels, and spices",
    imgClass:
      "object-cover object-[48%_center] sm:object-[50%_center] lg:object-[52%_center]",
  },
] as const;

const INTERVAL_MS = 7000;

/** Overall photo strength under hero gradients (lower = softer / more subdued). */
const SLIDE_IMAGE_OPACITY_CLASS = "opacity-[0.68]";

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  useEffect(() => {
    if (reducedMotion || SLIDES.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [reducedMotion]);

  const goTo = useCallback((i: number) => {
    setIndex(((i % SLIDES.length) + SLIDES.length) % SLIDES.length);
  }, []);

  return (
    <>
      <div className="absolute inset-0">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-700 ease-out motion-reduce:transition-none ${
              i === index ? "z-1 opacity-100" : "z-0 opacity-0"
            }`}
            aria-hidden={i !== index}
          >
            <div className={`absolute inset-0 ${SLIDE_IMAGE_OPACITY_CLASS}`}>
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={i === 0}
                sizes="100vw"
                className={slide.imgClass}
              />
            </div>
          </div>
        ))}
      </div>

      {SLIDES.length > 1 ? (
        <div
          className="pointer-events-auto absolute bottom-8 left-1/2 z-5 flex -translate-x-1/2 gap-2 sm:bottom-10"
          role="tablist"
          aria-label="Hero slides"
        >
          {SLIDES.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to hero image ${i + 1} of ${SLIDES.length}`}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all motion-reduce:transition-none ${
                i === index
                  ? "w-8 bg-white"
                  : "w-2 bg-white/45 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      ) : null}
    </>
  );
}
