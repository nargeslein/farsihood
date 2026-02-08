import type { Metadata } from "next";
import Link from "next/link";
import { siteData } from "@/content/siteData";

export const metadata: Metadata = {
  title: `Impressum | ${siteData.name}`,
  alternates: { canonical: "/impressum" }
};

export default function ImpressumPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16">
      <h1 className="font-serif text-4xl text-ink">Impressum</h1>
      <div className="mt-8 space-y-4 text-muted">
        <p>Angaben gemäß § 5 TMG (Platzhalter):</p>
        <p>Farsihood</p>
        <p>{siteData.location}, Deutschland</p>
        <p>E-Mail: {siteData.email}</p>
        <p>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: Farsihood</p>
        <p>Hinweis: Bitte diese Angaben rechtlich final prüfen und ergänzen.</p>
      </div>
      <Link href="/" className="mt-10 inline-block text-accent underline-offset-4 hover:underline">
        Zurück zur Startseite
      </Link>
    </main>
  );
}
