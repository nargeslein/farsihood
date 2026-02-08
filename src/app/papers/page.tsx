import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PapersList } from "@/components/PapersList";
import { siteData } from "@/content/siteData";

export const metadata: Metadata = {
  title: `Papers | ${siteData.name}`,
  description: "Übersicht über Papers, Talks und Bücher von Farsihood.",
  alternates: { canonical: "/papers" }
};

export default function PapersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-paper/40 via-white to-white dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
      <div className="no-print">
        <Header />
      </div>
      <main className="mx-auto w-full max-w-6xl px-6 pb-20 pt-14">
        <header className="mb-10 border-b border-line pb-8 dark:border-slate-800">
          <h1 className="font-serif text-4xl text-ink dark:text-slate-100">Papers</h1>
          <p className="mt-3 max-w-measure text-muted dark:text-slate-300">
            Alle Einträge sind datengetrieben in <code>src/content/siteData.ts</code> verwaltet.
          </p>
        </header>
        <PapersList papers={siteData.papers} />
      </main>
      <Footer />
    </div>
  );
}
