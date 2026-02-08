"use client";

import { useMemo, useState } from "react";
import type { Paper } from "@/content/siteData";
import { filterPapersByQuery, sortByYearDesc } from "@/lib/utils";

type PapersListProps = {
  papers: Paper[];
  compact?: boolean;
};

const paperTypes: Array<"All" | Paper["type"]> = ["All", "Paper", "Talk", "Book"];

export function PapersList({ papers, compact = false }: PapersListProps) {
  const [query, setQuery] = useState("");
  const [activeType, setActiveType] = useState<(typeof paperTypes)[number]>("All");

  const filtered = useMemo(() => {
    const byQuery = filterPapersByQuery(sortByYearDesc(papers), query);
    if (activeType === "All") return byQuery;
    return byQuery.filter((paper) => paper.type === activeType);
  }, [papers, query, activeType]);

  return (
    <div className="space-y-6">
      <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
        <label className="block text-sm text-muted dark:text-slate-300">
          Suche
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Titel, Abstract, Jahr..."
            className="mt-1 w-full rounded border border-line bg-white px-3 py-2 text-ink outline-none ring-accent/30 transition focus:ring dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          />
        </label>
        <label className="block text-sm text-muted dark:text-slate-300">
          Typ
          <select
            value={activeType}
            onChange={(event) => setActiveType(event.target.value as (typeof paperTypes)[number])}
            className="mt-1 w-full rounded border border-line bg-white px-3 py-2 text-ink outline-none ring-accent/30 transition focus:ring dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          >
            {paperTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
      </div>

      <ul className="grid gap-4">
        {filtered.map((paper) => (
          <li key={`${paper.title}-${paper.year}`} className="rounded border border-line bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <article className="space-y-3">
              <header className="flex flex-wrap items-center gap-2 text-sm">
                <span className="rounded bg-paper px-2 py-1 font-medium text-ink dark:bg-slate-800 dark:text-slate-100">{paper.year}</span>
                <span className="rounded border border-line px-2 py-1 text-muted dark:border-slate-700 dark:text-slate-300">{paper.type}</span>
              </header>
              <h3 className="font-serif text-xl text-ink dark:text-slate-100">{paper.title}</h3>
              <p className="max-w-measure text-sm text-muted dark:text-slate-300">{paper.abstract}</p>
              {paper.pdfPath ? (
                <a
                  href={paper.pdfPath}
                  className="inline-flex rounded border border-accent px-3 py-1.5 text-sm text-accent transition hover:bg-accent hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:border-slate-500 dark:text-slate-200 dark:hover:bg-slate-700"
                >
                  PDF Download
                </a>
              ) : (
                <p className="text-sm italic text-muted dark:text-slate-400">(coming soon)</p>
              )}
            </article>
          </li>
        ))}
      </ul>

      {!compact && filtered.length === 0 ? <p className="text-sm text-muted">Keine Treffer.</p> : null}
    </div>
  );
}
