import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { getSiteUrl, SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";
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
    default: `${SITE_NAME} | Dr. Anju Mol, BAMS`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  referrer: "origin-when-cross-origin",
  keywords: [
    "Ayurveda",
    "Varkala",
    "Kerala",
    "Panchakarma",
    "Shirodhara",
    "Dr. Anju Mol",
    "BAMS",
    "vaidyashala",
    "Dhanwanthari Ayurveda",
  ],
  authors: [{ name: "Dr. Anju Mol", url: getSiteUrl() }],
  creator: SITE_NAME,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_IN",
    url: getSiteUrl(),
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
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
