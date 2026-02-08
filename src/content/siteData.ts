export type NavLink = {
  label: string;
  href: string;
};

export type FocusArea = {
  title: string;
  description: string;
};

export type Conference = {
  year: number;
  title: string;
  event: string;
};

export type PaperType = "Paper" | "Talk" | "Book";

export type Paper = {
  title: string;
  year: number;
  type: PaperType;
  abstract: string;
  pdfPath?: string;
};

export const siteData = {
  domain: "https://farsihood.de",
  name: "Farsihood",
  location: "Berlin",
  tagline: "Jüdisch-persische Literatur & persische Bibelübersetzungen",
  shortBio:
    "Independent Scholar. Seit fast 20 Jahren im Bereich aktiv. Background: Elektrotechnikstudium im Iran an der Sharif University of Technology, viele Jahre als Elektroingenieur, viel gereist, mehrere Semester Iranistik/Mittelpersisch an der Uni, vieles autodidaktisch mit Mentoren und Gurus. Schreibt Bücher und Papers.",
  email: "contact@farsihood.de",
  cvPath: "/cv/farsihood-cv.pdf",
  navLinks: [
    { label: "Über", href: "#ueber" },
    { label: "Forschung", href: "#forschung" },
    { label: "Konferenzen", href: "#konferenzen" },
    { label: "Papers", href: "#papers" },
    { label: "Kontakt", href: "#kontakt" }
  ] as NavLink[],
  focusAreas: [
    {
      title: "Judeo-Persian Literature",
      description: "Texttraditionen, Sprachkontakt und Überlieferung im jüdisch-persischen Kontext."
    },
    {
      title: "Persische Tora-Übersetzungen",
      description: "Linguistische und theologische Aspekte historischer Übersetzungen."
    },
    {
      title: "Targum & Exegese",
      description: "Kommentierende Schichten, Übersetzungsstrategien und Rezeptionsgeschichte."
    },
    {
      title: "Iranistik / Mittelpersisch",
      description: "Philologische Zugänge zu persischen und mittelpersischen Quellen."
    }
  ] as FocusArea[],
  conferences: [
    {
      year: 2024,
      event: "IOTS Amsterdam 2024",
      title: "Commentaries inside the Persian Targum"
    },
    {
      year: 2019,
      event: "Ninth European Conference of Iranian Studies (ECIS9) 2019, Berlin",
      title:
        "Some etymological and dialectological aspects of two Judeo-Persian Manuscripts: Manuscript OR 5446 [Londoner Torah] and Manuscripts Hébreu 70 & 71 [Pariser Torah]"
    },
    {
      year: 2017,
      event: "Deutscher Orientalistentag 2017, Jena",
      title: "Die jüdisch-persische Literatur"
    },
    {
      year: 2022,
      event: "SBL IM program 2022, Salzburg",
      title:
        "The impact of the Islamic theology on the translation of the Torah into the Persian language: Some linguistic and theological aspects of Persian translation"
    },
    {
      year: 2018,
      event: "WOCMES 2018, Sevilla",
      title:
        "The impact of Islamic Theology on the translation of the Torah into Persian — Manuscript OR 5446 (Londoner Torah) — Some linguistic and theological aspects of the Persian translation"
    },
    {
      year: 2022,
      event: "Targum 2022, Salzburg",
      title:
        "The Impact of the Islamic Theology on the Translation of the Torah into the Persian Language"
    }
  ] as Conference[],
  papers: [
    {
      title: "Commentaries inside the Persian Targum",
      year: 2024,
      type: "Paper",
      abstract: "Studie zu kommentierenden Schichten im persischen Targum und deren Funktion.",
      // Datei selbst in /public/papers/sample.pdf ergänzen.
      pdfPath: "/papers/sample.pdf"
    },
    {
      title: "Die jüdisch-persische Literatur",
      year: 2017,
      type: "Talk",
      abstract: "Überblick über Korpus, Überlieferung und Forschungsperspektiven."
    },
    {
      title: "Persian Torah Translation: Linguistic and Theological Notes",
      year: 2022,
      type: "Paper",
      abstract: "Notizen zu Wortwahl, Terminologie und islamisch-theologischen Einflüssen."
    },
    {
      title: "Judeo-Persian Studies: Selected Essays",
      year: 2025,
      type: "Book",
      abstract: "Sammlung thematisch verbundener Aufsätze zur jüdisch-persischen Literatur."
    }
  ] as Paper[]
} as const;
