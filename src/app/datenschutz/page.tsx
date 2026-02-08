import type { Metadata } from "next";
import Link from "next/link";
import { siteData } from "@/content/siteData";

export const metadata: Metadata = {
  title: `Datenschutz | ${siteData.name}`,
  alternates: { canonical: "/datenschutz" }
};

export default function DatenschutzPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16">
      <h1 className="font-serif text-4xl text-ink">Datenschutz</h1>
      <div className="mt-8 space-y-4 text-muted">
        <p>Diese Website verarbeitet standardmäßig keine personenbezogenen Daten durch Tracking oder Cookies.</p>
        <p>Beim Aufruf der Website können serverseitig technische Logdaten (z. B. IP-Adresse, Zeitpunkt, User-Agent) verarbeitet werden.</p>
        <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an sicherem Betrieb).</p>
        <p>Bei Kontakt per E-Mail werden die übermittelten Daten zur Bearbeitung der Anfrage verwendet.</p>
        <p>Diese Seite ist ein Platzhalter und sollte vor Veröffentlichung rechtlich geprüft werden.</p>
      </div>
      <Link href="/" className="mt-10 inline-block text-accent underline-offset-4 hover:underline">
        Zurück zur Startseite
      </Link>
    </main>
  );
}
