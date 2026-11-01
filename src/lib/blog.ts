/**
 * Blog posts for /blog. Add a post to `posts`; the list, the detail page, the
 * sitemap and the BlogPosting JSON-LD all read this array.
 *
 * Write in the site's voice. Only state facts already confirmed in site.ts.
 * Do not invent a pool, restaurant, meals, beachfront, sea view, walking
 * distance to the temple, prices beyond the published "from" rates, or reviews.
 * A post image must be a photograph of what the caption says.
 */

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type BlogPost = {
  /** URL segment, lowercase and hyphenated, e.g. "arriving-in-rameshwaram". */
  slug: string;
  title: string;
  /** Search and social description. One or two sentences. */
  description: string;
  /** Publish date, YYYY-MM-DD. */
  date: string;
  /** Set when the wording changes after publish. YYYY-MM-DD. */
  updated?: string;
  image?: { src: string; alt: string };
  blocks: BlogBlock[];
};

export const posts: BlogPost[] = [];

export function publishedPosts() {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function relatedPosts(slug: string, limit = 2) {
  return publishedPosts()
    .filter((post) => post.slug !== slug)
    .slice(0, limit);
}

/** "31 October 2026". Parsed as a calendar date so the server and client agree. */
export function formatBlogDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day)));
}

export function readingMinutes(post: BlogPost) {
  const text = post.blocks
    .map((block) => (block.type === "ul" ? block.items.join(" ") : block.text))
    .join(" ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
