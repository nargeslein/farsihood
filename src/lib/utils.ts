import type { Paper } from "@/content/siteData";

export function sortByYearDesc<T extends { year: number }>(items: T[]): T[] {
  return [...items].sort((a, b) => b.year - a.year);
}

export function filterPapersByQuery(papers: Paper[], query: string): Paper[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return papers;

  return papers.filter((paper) => {
    const haystack = `${paper.title} ${paper.abstract} ${paper.type} ${paper.year}`.toLowerCase();
    return haystack.includes(normalized);
  });
}
