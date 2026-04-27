import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import {
  BRAND_SEARCH_NAME,
  getSiteUrl,
  SITE_DESCRIPTION,
  SITE_NAME,
} from "@/lib/site";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${BRAND_SEARCH_NAME} | ${SITE_NAME} · Thiruvilwamala`,
    template: `%s | ${BRAND_SEARCH_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: BRAND_SEARCH_NAME,
  referrer: "origin-when-cross-origin",
  keywords: [
    BRAND_SEARCH_NAME,
    "Dhanwanthari Parambarya",
    SITE_NAME,
    "Ayurveda",
    "Thiruvilwamala",
    "Kerala",
    "680594",
    "Panchakarma",
    "Shirodhara",
    "Dr. Anju Mol",
    "BAMS",
    "vaidyashala",
    "Parambarya",
    "Eravathody Road",
  ],
  authors: [{ name: "Dr. Anju Mol", url: getSiteUrl() }],
  creator: BRAND_SEARCH_NAME,
  publisher: SITE_NAME,
  openGraph: {
    type: "website",
    siteName: BRAND_SEARCH_NAME,
    locale: "en_IN",
    url: getSiteUrl(),
    title: `${BRAND_SEARCH_NAME} | ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND_SEARCH_NAME} | ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} h-full scroll-smooth scroll-pt-18 antialiased`}
    >
      <body className="min-h-full bg-cream font-sans text-charcoal">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
