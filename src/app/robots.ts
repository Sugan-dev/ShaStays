import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

const allow = { allow: "/" } as const;

const agents = [
  "*",
  "Googlebot",
  "Google-Extended",
  "Bingbot",
  "Applebot",
  "Applebot-Extended",
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "ClaudeBot",
  "anthropic-ai",
  "Amazonbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: agents.map((userAgent) => ({ userAgent, ...allow })),
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
