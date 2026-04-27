import {
  BRAND_SEARCH_NAME,
  SITE_DESCRIPTION,
  SITE_NAME,
  getSiteUrl,
} from "@/lib/site";

export function JsonLd() {
  const base = getSiteUrl();
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${base}#website`,
        name: BRAND_SEARCH_NAME,
        alternateName: [SITE_NAME, "Dhanwanthari Parambarya Ayurveda"],
        url: base,
        description: SITE_DESCRIPTION,
        inLanguage: ["en-IN", "ml"],
        publisher: { "@id": `${base}#clinic` },
      },
      {
        "@type": "MedicalClinic",
        "@id": `${base}#clinic`,
        name: SITE_NAME,
        alternateName: [BRAND_SEARCH_NAME, "Dhanwanthari Parambarya"],
        description: SITE_DESCRIPTION,
        url: base,
        telephone: "+919846959869",
        address: {
          "@type": "PostalAddress",
          streetAddress: "rPCP9+4G3, Eravathody Rd",
          addressLocality: "Thiruvilwamala",
          addressRegion: "Kerala",
          postalCode: "680594",
          addressCountry: "IN",
        },
        medicalSpecialty: "https://schema.org/TraditionalMedicine",
        employee: {
          "@type": "Physician",
          name: "Dr. Anju Mol",
          medicalSpecialty: "Ayurveda",
          medicalCredential: "BAMS",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
