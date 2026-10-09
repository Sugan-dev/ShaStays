import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

/** Search engines and AI search/answer engines, plus the fetchers they use when a user asks about a page. */
const searchAgents = [
  "Googlebot",
  "Bingbot",
  "Applebot",
  "DuckDuckBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
];

/**
 * Model-training crawlers. Allowed by the owner's choice; this is separate from search visibility.
 * Moving one to a `disallow: "/"` rule opts out of training without affecting search results.
 */
const trainingAgents = ["GPTBot", "ClaudeBot", "Google-Extended", "Applebot-Extended", "Amazonbot"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: searchAgents, allow: "/" },
      { userAgent: trainingAgents, allow: "/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
