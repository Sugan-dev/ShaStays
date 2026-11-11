import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/BlogCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd } from "@/components/JsonLd";
import { formatBlogDate, getPost, posts, readingMinutes, relatedPosts } from "@/lib/blog";
import { articleGraph, pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

/**
 * Static export (`output: "export"`) rejects a dynamic route when
 * generateStaticParams returns no paths, which is this page while `posts` is
 * empty. The placeholder is not a post and not linked; the page 404s for it.
 */
const emptyExportSlug = "__empty";

export function generateStaticParams() {
  if (posts.length === 0) return [{ slug: emptyExportSlug }];
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMeta({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    image: post.image ? { url: post.image.src, alt: post.image.alt } : undefined,
    article: {
      publishedTime: `${post.date}T00:00:00+05:30`,
      modifiedTime: `${post.updated ?? post.date}T00:00:00+05:30`,
    },
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const others = relatedPosts(post.slug);
  const minutes = readingMinutes(post);

  return (
    <>
      <JsonLd data={articleGraph(post)} />
      <article>
        <header className="border-b border-line bg-paper">
          <Container className="py-14 md:py-20">
            <Breadcrumbs
              items={[
                { name: "Blog", path: "/blog" },
                { name: post.title, path: `/blog/${post.slug}` },
              ]}
            />
            <p className="eyebrow text-terracotta-deep">From SHA Stays in Rameshwaram</p>
            <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.05] text-forest md:text-6xl">{post.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{post.description}</p>
            <p className="mt-6 text-sm text-muted">
              <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
              {post.updated && post.updated !== post.date ? (
                <>
                  {" · Updated "}
                  <time dateTime={post.updated}>{formatBlogDate(post.updated)}</time>
                </>
              ) : null}
              {" · "}
              {minutes} min read
              {" · "}
              <Link href="/about" className="underline-offset-4 hover:underline">
                {site.name}
              </Link>
            </p>
          </Container>
        </header>
        {post.image ? (
          <Container className="pt-10 md:pt-14">
            <div className="relative aspect-[16/9] overflow-hidden rounded-panel bg-sand">
              <Image
                src={post.image.src}
                alt={post.image.alt}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1152px) 1088px, 100vw"
              />
            </div>
          </Container>
        ) : null}
        <Container className="max-w-3xl py-12 md:py-16">
          <div className="space-y-5 text-lg leading-relaxed text-charcoal/85">
            {post.blocks.map((block, index) => {
              if (block.type === "h2") {
                return (
                  <h2 key={index} className="pt-6 font-serif text-4xl leading-tight text-forest">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "ul") {
                return (
                  <ul key={index} className="list-disc space-y-2 pl-5">
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={index}>{block.text}</p>;
            })}
          </div>
        </Container>
      </article>
      {others.length > 0 ? (
        <section className="pb-16 md:pb-20" aria-labelledby="more-notes">
          <Container>
            <h2 id="more-notes" className="font-serif text-4xl text-forest md:text-5xl">
              More notes
            </h2>
            <ul className="mt-8 grid gap-5 md:grid-cols-2">
              {others.map((item) => (
                <li key={item.slug}>
                  <BlogCard post={item} />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}
      <FinalCta />
    </>
  );
}
