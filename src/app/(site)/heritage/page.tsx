import { HeritageSection } from "@/components/sections/heritage-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { TimelineSection } from "@/components/sections/timeline-section";
import { TraditionalMethodsSection } from "@/components/sections/traditional-methods-section";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Heritage",
  description:
    "Our lineage since 1924—classical Shastra, Dr. Anju Mol (BAMS), and the philosophy behind Dhanwanthari Parambarya Ayurveda Vaidyashala in Thiruvilwamala, Kerala.",
  path: "/heritage",
});

export default function HeritagePage() {
  return (
    <main>
      <HeritageSection />
      <PhilosophySection />
      <TimelineSection />
      <TraditionalMethodsSection />
    </main>
  );
}
