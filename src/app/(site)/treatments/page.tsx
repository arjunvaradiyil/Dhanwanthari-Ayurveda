import { TreatmentsSection } from "@/components/sections/treatments-section";
import { pageMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Treatments",
  description:
    `Authentic Ayurvedic treatments at ${SITE_NAME}—Panchakarma, Shirodhara, Abhyanga, Nasyam, and more. Filter by focus and book with Dr. Anju Mol (BAMS) in Thiruvilwamala, Kerala.`,
  path: "/treatments",
});

export default function TreatmentsPage() {
  return (
    <main>
      <TreatmentsSection />
    </main>
  );
}
