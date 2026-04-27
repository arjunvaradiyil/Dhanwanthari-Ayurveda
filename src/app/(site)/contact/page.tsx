import { ContactSection } from "@/components/sections/contact-section";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact & booking",
  description:
    "Request an appointment at Dhanwanthari Ayurveda, Varkala. Phone 98469 59869. Consultation hours, directions, and contact form.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main>
      <ContactSection />
    </main>
  );
}
