import type { MetadataRoute } from "next";

/**
 * Public HTML routes included in sitemap.xml.
 * Keep in sync with route group pages under src/app and the home page.tsx.
 */
export const SITEMAP_ENTRIES: readonly {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/heritage", changeFrequency: "monthly", priority: 0.85 },
  { path: "/treatments", changeFrequency: "monthly", priority: 0.9 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.85 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.4 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.4 },
] as const;
