import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-04");
  const paths = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/rooms", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/rooms/sha-king-room", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/rooms/sha-queen-room", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/experience", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/location", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.6, changeFrequency: "yearly" as const },
    { path: "/gallery", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" as const },
    { path: "/book", priority: 0.9, changeFrequency: "monthly" as const },
  ];

  return paths.map(({ path, priority, changeFrequency }) => ({
    url: `${site.url}${path ? `${path}/` : "/"}`,
    lastModified,
    changeFrequency,
    priority,
    ...(path === "" ? { images: [`${site.url}/images/hero-banner.jpg`] } : {}),
  }));
}
