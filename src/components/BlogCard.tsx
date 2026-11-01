import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { formatBlogDate, type BlogPost } from "@/lib/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-card border border-line bg-paper">
      <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col">
        {post.image ? (
          <div className="relative aspect-[4/3] bg-sand">
            <Image
              src={post.image.src}
              alt={post.image.alt}
              fill
              className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.03]"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        ) : null}
        <div className="flex flex-1 flex-col p-7">
          <time dateTime={post.date} className="text-sm text-muted">
            {formatBlogDate(post.date)}
          </time>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-forest">{post.title}</h2>
          <p className="mt-3 flex-1 leading-relaxed text-muted">{post.description}</p>
          <span className="mt-6 inline-flex items-center gap-2 font-medium text-forest">
            Read the note
            <Icon name="arrow" className="h-4 w-4 transition-transform motion-safe:group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </article>
  );
}
