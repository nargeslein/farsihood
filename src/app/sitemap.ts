import type { MetadataRoute } from "next";
import { siteData } from "@/content/siteData";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteData.domain, lastModified: new Date() },
    { url: `${siteData.domain}/papers`, lastModified: new Date() },
    { url: `${siteData.domain}/impressum`, lastModified: new Date() },
    { url: `${siteData.domain}/datenschutz`, lastModified: new Date() }
  ];
}
