import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/Buttons";
import { Container } from "@/components/Container";
import { FinalCta } from "@/components/FinalCta";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LazyImage } from "@/components/LazyImage";
import { getRoom, mattressNote, rooms, stayFacts } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { cx, hasWhatsapp, whatsappGreeting, whatsappHref } from "@/lib/links";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const room = getRoom(slug);
  if (!room) return {};
  return pageMeta({
    title: `${room.name} in Rameshwaram`,
    description: `${room.description} ${room.countLabel} at SHA Stays, a peaceful boutique stay in Rameshwaram near the Abdul Kalam Memorial.`,
    path: `/rooms/${room.slug}`,
  });
}

export default async function RoomPage({ params }: Props) {
  const { slug } = await params;
  const room = getRoom(slug);
  if (!room) notFound();

  const other = rooms.find((item) => item.slug !== room.slug);
  const forestPanel = room.number === "01";

  return (
    <>
      <section className="border-b border-line bg-paper">
        <Container className="grid items-end gap-10 py-16 md:py-20 lg:grid-cols-2">
          <div>
            <Breadcrumbs
              items={[
                { name: "Rooms", path: "/rooms" },
                { name: room.name, path: `/rooms/${room.slug}` },
              ]}
            />
            <p className="text-xs font-medium tracking-[0.22em] text-terracotta-deep uppercase">
              {room.bed} · {room.countLabel}
            </p>
            <h1 className="mt-4 font-serif text-5xl leading-[1.02] text-forest md:text-7xl">
              {room.name}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{room.description}</p>
          </div>
          {room.image ? (
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem]">
              <Image
                src={room.image}
                alt={room.photos[0]?.alt ?? room.name}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
                priority
              />
            </div>
          ) : (
            <div
              className={cx(
                "flex min-h-64 flex-col justify-between rounded-[1.75rem] p-8",
                forestPanel ? "bg-forest text-sand" : "bg-sand text-forest",
              )}
            >
              <span
                className={cx("font-serif text-7xl", forestPanel ? "text-white/40" : "text-forest/60")}
                aria-hidden="true"
              >
                {room.number}
              </span>
              <p className={cx("font-serif text-3xl", forestPanel ? "text-white" : "text-forest")}>
                Comfort, kept simple.
              </p>
            </div>
          )}
        </Container>
      </section>

      {room.photos.length > 1 ? (
        <section className="py-16">
          <Container>
            <h2 className="font-serif text-4xl text-forest">A closer look</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {room.photos.slice(1).map((photo) => (
                <figure key={photo.src} className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                  <LazyImage
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover object-center"
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                </figure>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <section className="pb-16">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-serif text-4xl text-forest">In the room</h2>
            <ul className="mt-6 space-y-3">
              {room.highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 border-b border-line py-3 text-charcoal">
                  <span className="h-1.5 w-1.5 rounded-full bg-terracotta" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted">{mattressNote}</p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
              Our rooms are suitable for couples and small families depending on the selected room and sleeping arrangement.
            </p>
          </div>
          <aside className="h-fit rounded-[1.75rem] bg-sand/70 p-7">
            <h2 className="font-serif text-3xl text-forest">Plan the stay</h2>
            <dl className="mt-5 space-y-3">
              {stayFacts.map((fact) => (
                <div key={fact.label} className="flex items-baseline justify-between gap-4 border-b border-forest/10 pb-3">
                  <dt className="text-sm text-muted">{fact.label}</dt>
                  <dd className="font-medium text-forest">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 flex flex-col gap-3">
              <ButtonLink href={`/book?room=${room.slug}`}>Book Your Stay</ButtonLink>
              <ButtonLink
                href={whatsappHref(`${whatsappGreeting} I'm asking about the ${room.name}.`)}
                variant="outline"
                external={hasWhatsapp()}
              >
                WhatsApp Us
              </ButtonLink>
            </div>
          </aside>
        </Container>
      </section>

      {other ? (
        <section className="pb-16">
          <Container>
            <Link
              href={`/rooms/${other.slug}`}
              className="flex items-center justify-between gap-6 rounded-[1.75rem] bg-forest px-8 py-8 text-ivory"
            >
              <span>
                <span className="text-xs tracking-[0.2em] text-sand uppercase">Also at SHA Stays</span>
                <span className="mt-2 block font-serif text-4xl text-white">{other.name}</span>
              </span>
              <span aria-hidden="true" className="text-2xl">
                →
              </span>
            </Link>
          </Container>
        </section>
      ) : null}
      <FinalCta />
    </>
  );
}
