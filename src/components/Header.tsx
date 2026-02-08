import Link from "next/link";
import { siteData } from "@/content/siteData";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line/70 bg-white/95 backdrop-blur dark:bg-slate-950/90">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-serif text-lg font-semibold tracking-tight text-ink dark:text-slate-100">
          {siteData.name}
        </Link>
        <nav aria-label="Hauptnavigation">
          <ul className="flex flex-wrap items-center gap-4 text-sm text-muted dark:text-slate-300">
            {siteData.navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded px-2 py-1 transition hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:hover:text-slate-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                href="/papers"
                className="rounded px-2 py-1 transition hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:hover:text-slate-100"
              >
                Alle Papers
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
