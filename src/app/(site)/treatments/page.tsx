import { TreatmentsSection } from "@/components/sections/treatments-section";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Treatments",
  description:
    "Authentic Ayurvedic treatments—Panchakarma, Shirodhara, Abhyanga, Nasyam, and more. Filter by focus and book with Dr. Anju Mol (BAMS) in Varkala.",
  path: "/treatments",
});

export default function TreatmentsPage() {
  return (
    <main>
      <TreatmentsSection />
    </main>
  );
}
