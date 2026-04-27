import { SITE_NAME, getSiteUrl } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: SITE_NAME,
    description:
      "Ayurvedic clinic and traditional vaidyashala offering Panchakarma, consultations, and classical therapies.",
    url: getSiteUrl(),
    telephone: "+919846959869",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Varkala",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    medicalSpecialty: "https://schema.org/TraditionalMedicine",
    employee: {
      "@type": "Physician",
      name: "Dr. Anju Mol",
      medicalSpecialty: "Ayurveda",
      medicalCredential: "BAMS",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
