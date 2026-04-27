import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";
import { SITEMAP_ENTRIES } from "@/lib/sitemap-paths";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl().replace(/\/$/, "");
  const now = new Date();

  return SITEMAP_ENTRIES.map(({ path, changeFrequency, priority }) => ({
    url: path === "" ? base : `${base}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
