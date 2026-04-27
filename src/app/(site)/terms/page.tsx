import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Terms of service",
  description:
    "Terms for using the Dhanwanthari Ayurveda website and booking services at our Varkala clinic.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-24">
      <h1 className="font-serif text-3xl font-bold text-forest">Terms of service</h1>
      <p className="mt-6 text-sm leading-relaxed text-body">
        This is a placeholder page. Replace with your clinic terms, cancellation
        policy, liability limitations, and any disclaimers advised by your
        counsel.
      </p>
    </main>
  );
}
