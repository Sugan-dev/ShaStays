import type { MetadataRoute } from "next";
import { publishedPosts } from "@/lib/blog";
import { galleryGroups, homeGallery, rooms, site } from "@/lib/site";

export const dynamic = "force-static";

type Entry = {
  path: string;
  priority: number;
  changeFrequency: "weekly" | "monthly" | "yearly";
  images?: string[];
  lastModified?: Date;
};

const absolute = (src: string) => `${site.url}${src}`;
const unique = (list: string[]) => [...new Set(list)].map(absolute);

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-11-08");
  const paths: Entry[] = [
    {
      path: "",
      priority: 1,
      changeFrequency: "weekly",
      images: [absolute("/images/hero-banner.jpg"), ...unique(homeGallery.map((photo) => photo.src))],
    },
    { path: "/rooms", priority: 0.9, changeFrequency: "monthly", images: unique(rooms.map((room) => room.image)) },
    ...rooms.map((room) => ({
      path: `/rooms/${room.slug}`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
      images: unique(room.photos.map((photo) => photo.src)),
    })),
    { path: "/private-resort", priority: 0.9, changeFrequency: "monthly" },
    { path: "/location", priority: 0.8, changeFrequency: "monthly" },
    { path: "/experience", priority: 0.7, changeFrequency: "monthly" },
    {
      path: "/gallery",
      priority: 0.6,
      changeFrequency: "monthly",
      images: unique(galleryGroups.flatMap((group) => group.photos.map((photo) => photo.src))),
    },
    { path: "/about", priority: 0.6, changeFrequency: "yearly" },
    { path: "/blog", priority: 0.6, changeFrequency: "weekly" },
    ...publishedPosts().map((post) => ({
      path: `/blog/${post.slug}`,
      priority: 0.5,
      changeFrequency: "yearly" as const,
      lastModified: new Date(`${post.updated ?? post.date}T00:00:00+05:30`),
      images: post.image ? [absolute(post.image.src)] : undefined,
    })),
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
    { path: "/book", priority: 0.9, changeFrequency: "monthly" },
  ];

  return paths.map(({ path, priority, changeFrequency, images, lastModified: modified }) => ({
    url: `${site.url}${path ? `${path}/` : "/"}`,
    lastModified: modified ?? lastModified,
    changeFrequency,
    priority,
    ...(images?.length ? { images } : {}),
  }));
}
