import Link from "next/link";
import type { Room } from "@/lib/site";
import { AmenityList } from "@/components/AmenityList";
import { Icon } from "@/components/Icon";
import { LazyImage } from "@/components/LazyImage";
import { buttonClass } from "@/components/Buttons";
import { cx } from "@/lib/links";

export function RoomCard({
  room,
  layout = "stack",
  reverse,
  heading = "h3",
}: {
  room: Room;
  layout?: "stack" | "row";
  reverse?: boolean;
  heading?: "h2" | "h3";
}) {
  const Title = heading;
  const row = layout === "row";
  const alt = room.photos[0]?.alt ?? room.name;

  return (
    <article className={cx("group", row && "grid items-center gap-8 lg:grid-cols-2 lg:gap-14")}>
      <Link
        href={`/rooms/${room.slug}`}
        tabIndex={-1}
        className={cx("relative block aspect-[4/3] overflow-hidden rounded-card bg-sand", row && reverse && "lg:order-2")}
      >
        {room.image ? (
          <LazyImage
            src={room.image}
            alt={alt}
            fill
            className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.03]"
            sizes={row ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 45vw, (min-width: 640px) 50vw, 100vw"}
          />
        ) : (
          <span className="absolute inset-0 grid place-items-center font-serif text-7xl text-forest/40">{room.number}</span>
        )}
      </Link>
      <div className={cx(!row && "mt-6")}>
        <p className="eyebrow text-terracotta-deep">
          {room.bed} · {room.countLabel}
        </p>
        <Title className="mt-3 font-serif text-4xl text-forest md:text-[2.75rem]">
          <Link href={`/rooms/${room.slug}`} className="hover:text-forest-soft">
            {room.name}
          </Link>
        </Title>
        <p className="mt-3 max-w-lg leading-relaxed text-muted">{room.description}</p>
        <AmenityList amenities={room.amenities} className="mt-6 max-w-md" />
        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link href={`/rooms/${room.slug}`} className={buttonClass("forest")}>
            View Room
            <span className="sr-only">: {room.name}</span>
          </Link>
          <Link
            href={`/book?room=${room.slug}`}
            className="inline-flex min-h-12 items-center gap-2 font-medium text-forest underline decoration-transparent underline-offset-4 transition hover:decoration-current"
          >
            Check availability
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
