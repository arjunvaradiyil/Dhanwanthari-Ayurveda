/** Canonical site origin for SEO (set in production). */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (explicit) return explicit;
  if (process.env.VERCEL_URL)
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  return "http://localhost:3000";
}

export function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

export const SITE_NAME = "Dhanwanthari Ayurveda";
export const SITE_DESCRIPTION =
  "Traditional Ayurvedic vaidyashala in Varkala, Kerala—led by Dr. Anju Mol (BAMS, Reg. No. 26249). Panchakarma, Shirodhara, consultations, and classical protocols.";

/** YouTube (or other) URL for the “Watch treatments video” button. Override in env for your real upload. */
export const TREATMENTS_VIDEO_URL =
  process.env.NEXT_PUBLIC_TREATMENTS_VIDEO_URL?.trim() ||
  "https://www.youtube.com/results?search_query=Dhanwanthari+Ayurveda+treatments+Varkala";
