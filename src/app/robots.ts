import type { MetadataRoute } from "next";
import { siteData } from "@/content/siteData";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${siteData.domain}/sitemap.xml`
  };
}
