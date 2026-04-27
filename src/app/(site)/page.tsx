import { HeroSection } from "@/components/hero-section";
import { CtaBand } from "@/components/sections/cta-band";
import { SpecializationsSection } from "@/components/sections/specializations-section";
import { pageMetadata } from "@/lib/metadata";
import { SITE_DESCRIPTION } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Home",
  description: SITE_DESCRIPTION,
  path: "/",
});

export default function HomePage() {
  return (
    <main>
      <div className="relative">
        <HeroSection />
      </div>
      <SpecializationsSection />
      <CtaBand />
    </main>
  );
}
