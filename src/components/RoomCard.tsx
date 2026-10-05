import Link from "next/link";
import type { Room } from "@/lib/site";
import { mattressNote } from "@/lib/site";
import { LazyImage } from "@/components/LazyImage";
import { cx } from "@/lib/links";

export function RoomCard({
  room,
  featured,
  heading = "h3",
}: {
  room: Room;
  featured?: boolean;
  heading?: "h2" | "h3";
}) {
  const forestPanel = room.number === "01";
  const Title = heading;

  return (
    <article
      className={cx(
        "grid overflow-hidden rounded-[1.75rem] bg-paper shadow-[0_18px_50px_rgba(24,60,53,0.06)] ring-1 ring-black/5 lg:grid-cols-2",
        featured && "lg:min-h-[460px]",
      )}
    >
      {room.image ? (
        <div className="relative min-h-72">
          <LazyImage
            src={room.image}
            alt={room.name}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      ) : (
        <div
          className={cx(
            "relative flex min-h-72 flex-col justify-between p-8 sm:p-10",
            forestPanel ? "bg-forest text-sand" : "bg-sand text-forest",
          )}
        >
          <div className="flex items-start justify-between gap-6">
            <p className={cx("text-xs tracking-[0.22em] uppercase", forestPanel ? "text-sand" : "text-forest")}>
              {room.bed}
              <span className="mt-2 block tracking-[0.14em] normal-case">{room.countLabel}</span>
            </p>
            <span className={cx("font-serif text-6xl leading-none", forestPanel ? "text-white/55" : "text-forest/70")} aria-hidden="true">
              {room.number}
            </span>
          </div>
          <div>
            <p className={cx("text-xs tracking-[0.18em] uppercase", forestPanel ? "text-sand" : "text-terracotta-ink")}>
              SHA Stays
            </p>
            <Title className={cx("mt-2 font-serif text-5xl leading-none", forestPanel ? "text-white" : "text-forest")}>
              {room.name}
            </Title>
          </div>
        </div>
      )}
      <div className="flex flex-col p-8 sm:p-10">
        {room.image ? (
          <Title className="mb-4 font-serif text-4xl text-forest">{room.name}</Title>
        ) : null}
        <p className="text-lg leading-relaxed text-charcoal/85">{room.description}</p>
        <ul className="mt-6 space-y-2">
          {room.highlights.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm leading-relaxed text-muted">{mattressNote}</p>
        <div className="mt-8">
          <Link
            href={`/rooms/${room.slug}`}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-forest px-6 text-sm font-medium text-ivory transition hover:bg-forest-soft"
          >
            View {room.name}
          </Link>
        </div>
      </div>
    </article>
  );
}
