import type { Metadata } from "next";
import { BRAND_SEARCH_NAME, SITE_DESCRIPTION } from "@/lib/site";

type PageMeta = {
  title: string;
  description?: string;
  path: string;
};

export function pageMetadata({
  title,
  description = SITE_DESCRIPTION,
  path,
}: PageMeta): Metadata {
  const ogTitle = `${title} | ${BRAND_SEARCH_NAME}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: BRAND_SEARCH_NAME,
      title: ogTitle,
      description,
      url: path,
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
    },
    robots: { index: true, follow: true },
  };
}
