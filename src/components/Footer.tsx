import Link from "next/link";
import { siteData } from "@/content/siteData";

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper/50 py-8 dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 text-sm text-muted dark:text-slate-300 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {siteData.name} · {siteData.location}</p>
        <div className="flex items-center gap-4">
          <Link href="/impressum" className="hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:hover:text-slate-100">
            Impressum
          </Link>
          <Link href="/datenschutz" className="hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:hover:text-slate-100">
            Datenschutz
          </Link>
          <a href={`mailto:${siteData.email}`} className="hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:hover:text-slate-100">
            Kontakt
          </a>
        </div>
      </div>
    </footer>
  );
}
