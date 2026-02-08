import type { Metadata } from "next";
import "./globals.css";
import { siteData } from "@/content/siteData";

export const metadata: Metadata = {
  metadataBase: new URL(siteData.domain),
  title: `${siteData.name} | ${siteData.tagline}`,
  description: "Independent Scholar in Berlin. Forschung zu jüdisch-persischer Literatur, Judeo-Persian und persischen Tora-Übersetzungen.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: `${siteData.name} | ${siteData.tagline}`,
    description: "Independent Scholar in Berlin. Jüdisch-persische Literatur, Targum und persische Bibelübersetzungen.",
    url: siteData.domain,
    siteName: siteData.name,
    type: "website",
    locale: "de_DE"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
