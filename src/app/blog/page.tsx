import { TextLink } from "@/components/Buttons";
import { BlogCard } from "@/components/BlogCard";
import { Container } from "@/components/Container";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { publishedPosts } from "@/lib/blog";
import { blogGraph, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Notes from Rameshwaram",
  description:
    "Notes from SHA Stays in Rameshwaram: practical writing about the stay, the neighbourhood and planning a visit. New notes are added here.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = publishedPosts();

  return (
    <>
      <JsonLd data={blogGraph()} />
      <PageHero eyebrow="Journal" title="Notes from Rameshwaram." crumb="Blog" path="/blog">
        Short notes from SHA Stays about the stay and planning a visit to Rameshwaram.
      </PageHero>
      <section className="py-16 md:py-20">
        <Container>
          {posts.length > 0 ? (
            <ul className="grid gap-5 md:grid-cols-2">
              {posts.map((post) => (
                <li key={post.slug}>
                  <BlogCard post={post} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="grid items-center gap-8 rounded-panel border border-line bg-paper px-7 py-12 md:grid-cols-[1.4fr_1fr] md:px-12">
              <div>
                <p className="eyebrow text-terracotta-deep">Coming up</p>
                <h2 className="mt-3 font-serif text-4xl leading-tight text-forest md:text-5xl">The first note is on its way.</h2>
                <p className="mt-4 max-w-lg leading-relaxed text-muted">
                  Stories from the stay will be published here. Until then, the rooms, the places nearby and how to find SHA Stays are ready to read.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 md:items-end">
                <TextLink href="/rooms">Rooms in Rameshwaram</TextLink>
                <TextLink href="/experience">Places to visit</TextLink>
                <TextLink href="/location">How to find us</TextLink>
              </div>
            </div>
          )}
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
