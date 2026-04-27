import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Privacy policy",
  description:
    "How Dhanwanthari Parambarya Ayurveda Vaidyashala handles personal information when you use our website or book appointments.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-24">
      <h1 className="font-serif text-3xl font-bold text-forest">Privacy policy</h1>
      <p className="mt-6 text-sm leading-relaxed text-body">
        This is a placeholder page. Replace with your final privacy policy and
        data practices for patients and website visitors in India (including
        any requirements under applicable law).
      </p>
    </main>
  );
}
