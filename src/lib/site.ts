/** Canonical site origin for SEO (sitemap, robots, OG, JSON-LD). */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (explicit) return explicit;

  // Production on Vercel: prefer the project’s production hostname (often your custom
  // domain). Using VERCEL_URL alone yields *.vercel.app URLs in sitemap.xml, which
  // Google Search Console rejects for a property on www.yourdomain.com.
  const prodHost = process.env.VERCEL_PROJECT_PRODUCTION_URL?.replace(
    /^https?:\/\//,
    "",
  ).replace(/\/$/, "");
  if (process.env.VERCEL_ENV === "production" && prodHost)
    return `https://${prodHost}`;

  const vercelUrl = process.env.VERCEL_URL?.replace(/\/$/, "");
  if (vercelUrl) return `https://${vercelUrl}`;

  return "http://localhost:3000";
}

export function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

/** Primary search / brand phrase (what people type in Google). */
export const BRAND_SEARCH_NAME = "Dhanwanthari Ayurveda";

/** Legal / signage name. */
export const SITE_NAME = "Dhanwanthari Parambarya Ayurveda Vaidyashala";

export const SITE_DESCRIPTION =
  `${BRAND_SEARCH_NAME} — official vaidyashala in Thiruvilwamala, Kerala (${SITE_NAME}). Led by Dr. Anju Mol (BAMS, Reg. No. 26249). Panchakarma, Shirodhara, consultations, and classical Ayurvedic care.`;

/** Google Maps “open in maps” / search URL for the clinic address. */
export const CLINIC_MAPS_EXTERNAL_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "rPCP9+4G3, Eravathody Rd, Thiruvilwamala, Kerala 680594, India",
)}`;

/** Embed-friendly maps URL (search by address; replace with a place embed if you have one). */
export const CLINIC_MAP_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  "Dhanwanthari Parambarya Ayurveda Vaidyashala, Eravathody Rd, Thiruvilwamala, Kerala 680594, India",
)}&output=embed`;

/** YouTube (or other) URL for the “Watch treatments video” button. Override in env for your real upload. */
export const TREATMENTS_VIDEO_URL =
  process.env.NEXT_PUBLIC_TREATMENTS_VIDEO_URL?.trim() ||
  `https://www.youtube.com/results?search_query=${encodeURIComponent(
    `${BRAND_SEARCH_NAME} Thiruvilwamala Panchakarma`,
  )}`;
