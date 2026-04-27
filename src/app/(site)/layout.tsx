import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navigation />
      <div className="pt-18">{children}</div>
      <SiteFooter />
    </>
  );
}
