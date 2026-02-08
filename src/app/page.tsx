import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PapersList } from "@/components/PapersList";
import { siteData } from "@/content/siteData";
import { sortByYearDesc } from "@/lib/utils";

export default function HomePage() {
  const conferences = sortByYearDesc(siteData.conferences);

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:shadow">
        Zum Inhalt springen
      </a>
      <div className="min-h-screen bg-gradient-to-b from-paper/50 via-white to-white dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
        <div className="no-print">
          <Header />
        </div>

        <main id="main" className="mx-auto w-full max-w-6xl px-6 pb-20 pt-14">
          <section className="space-y-8 border-b border-line pb-16 dark:border-slate-800">
            <p className="text-sm uppercase tracking-[0.22em] text-muted dark:text-slate-400">Independent Scholar · {siteData.location}</p>
            <h1 className="max-w-3xl font-serif text-4xl leading-tight text-ink dark:text-slate-100 sm:text-5xl">
              {siteData.tagline}
            </h1>
            <p className="max-w-measure text-lg text-muted dark:text-slate-300">{siteData.shortBio}</p>
            <div className="flex flex-wrap gap-3">
              <a href="#papers" className="rounded border border-accent bg-accent px-4 py-2 text-sm text-white transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                Zu den Papers
              </a>
              <a href={`mailto:${siteData.email}`} className="rounded border border-line px-4 py-2 text-sm text-ink transition hover:bg-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800">
                Kontakt
              </a>
              <a href={siteData.cvPath} className="rounded border border-line px-4 py-2 text-sm text-ink transition hover:bg-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800">
                CV (optional)
              </a>
            </div>
          </section>

          <section id="ueber" className="scroll-mt-24 py-14">
            <h2 className="font-serif text-3xl text-ink dark:text-slate-100">Über</h2>
            <p className="mt-5 max-w-measure leading-7 text-muted dark:text-slate-300">{siteData.shortBio}</p>
          </section>

          <section id="forschung" className="scroll-mt-24 border-t border-line py-14 dark:border-slate-800">
            <h2 className="font-serif text-3xl text-ink dark:text-slate-100">Forschungsschwerpunkte</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {siteData.focusAreas.map((area) => (
                <li key={area.title} className="rounded border border-line bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <h3 className="font-serif text-xl text-ink dark:text-slate-100">{area.title}</h3>
                  <p className="mt-2 text-sm text-muted dark:text-slate-300">{area.description}</p>
                </li>
              ))}
            </ul>
          </section>

          <section id="konferenzen" className="scroll-mt-24 border-t border-line py-14 dark:border-slate-800">
            <h2 className="font-serif text-3xl text-ink dark:text-slate-100">Konferenzen</h2>
            <ol className="mt-8 space-y-4">
              {conferences.map((item) => (
                <li key={`${item.event}-${item.title}`} className="rounded border border-line bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <p className="text-sm text-muted dark:text-slate-300">{item.event}</p>
                  <p className="mt-1 font-medium text-ink dark:text-slate-100">“{item.title}”</p>
                </li>
              ))}
            </ol>
          </section>

          <section id="papers" className="scroll-mt-24 border-t border-line py-14 dark:border-slate-800">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="font-serif text-3xl text-ink dark:text-slate-100">Papers</h2>
                <p className="mt-2 text-sm text-muted dark:text-slate-300">Ausgewählte Publikationen und Vorträge.</p>
              </div>
              <a href="/papers" className="text-sm text-accent underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:text-slate-300">
                Alle Papers anzeigen
              </a>
            </div>
            <PapersList papers={siteData.papers} compact />
          </section>

          <section id="kontakt" className="scroll-mt-24 border-t border-line py-14 dark:border-slate-800">
            <h2 className="font-serif text-3xl text-ink dark:text-slate-100">Kontakt</h2>
            <p className="mt-4 text-muted dark:text-slate-300">Berlin · E-Mail: <a className="text-accent underline-offset-4 hover:underline" href={`mailto:${siteData.email}`}>{siteData.email}</a></p>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
