import Link from "next/link";
import { ButtonLink, TextLink } from "@/components/Buttons";
import { Container } from "@/components/Container";
import { LazyImage } from "@/components/LazyImage";
import { FinalCta } from "@/components/FinalCta";
import { MapPanel } from "@/components/MapPanel";
import { RoomCard } from "@/components/RoomCard";
import {
  contact,
  faqs,
  hero,
  highlights,
  locationFacts,
  photos,
  places,
  reasons,
  rooms,
  trust,
} from "@/lib/site";
import { cx, hasPhone, phoneHref } from "@/lib/links";

export function HomePage() {
  const temple = places[0];
  const kalam = places[1];
  const pamban = places[2];
  const dhanushkodi = places[3];
  const ariyaman = places[4];
  const island = places[5];

  return (
    <>
      <section className="relative min-h-[78vh] overflow-hidden bg-forest-deep">
        <picture>
          <source
            type="image/avif"
            srcSet="/images/hero-800.avif 800w, /images/hero-1600.avif 1600w"
            sizes="100vw"
          />
          <img
            src="/images/hero-1600.webp"
            srcSet="/images/hero-800.webp 800w, /images/hero-1600.webp 1600w"
            sizes="100vw"
            width={1600}
            height={900}
            alt={hero.alt}
            fetchPriority="high"
            className={cx("absolute inset-0 h-full w-full object-cover", hero.fit)}
          />
        </picture>
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(16,40,34,0.9)_0%,rgba(16,40,34,0.78)_22%,rgba(16,40,34,0.22)_46%,rgba(16,40,34,0.12)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#102822]/75 via-transparent to-[#102822]/25" />
        <Container className="relative flex min-h-[78vh] flex-col justify-end py-16 md:py-20">
          <p className="rise text-xs font-medium tracking-[0.24em] text-sand uppercase">
            Welcome to SHA Stays • Rameshwaram
          </p>
          <h1 className="rise rise-delay-1 mt-5 max-w-4xl font-serif text-[clamp(3.4rem,8vw,7rem)] leading-[0.92] text-white [text-shadow:0_2px_24px_rgba(8,20,17,0.55)]">
            Stay Close.
            <br />
            Feel at Home.
          </h1>
          <p className="rise rise-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-white">
            A peaceful boutique stay in Rameshwaram, thoughtfully located near the Abdul Kalam Memorial and just a short drive from the Ramanathaswamy Temple.
          </p>
          <div className="rise rise-delay-3 mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/book">Book Your Stay</ButtonLink>
            <ButtonLink href="/rooms" variant="ghost">
              Explore Rooms
            </ButtonLink>
          </div>
          <p className="mt-8 max-w-xl text-sm leading-relaxed text-white">
            6 thoughtfully prepared rooms • Easy road access • A peaceful base for exploring Rameshwaram
          </p>
          {hero.caption ? (
            <p className="mt-4 text-xs tracking-wide text-white/70">{hero.caption}</p>
          ) : null}
        </Container>
      </section>

      <section aria-label="Property highlights" className="relative z-10 -mt-8">
        <Container>
          <dl className="grid grid-cols-2 overflow-hidden rounded-[1.5rem] bg-paper shadow-[0_18px_50px_rgba(24,60,53,0.08)] ring-1 ring-black/5 lg:grid-cols-4">
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className={cx(
                  "px-6 py-6",
                  index > 0 && "border-line lg:border-l",
                  index % 2 === 1 && "border-l lg:border-l",
                  index > 1 && "border-t lg:border-t-0",
                )}
              >
                <dt className="font-serif text-4xl text-forest">{item.value}</dt>
                <dd className="mt-1 text-sm leading-snug text-muted">{item.label}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-4xl leading-[1.05] text-forest md:text-6xl">
              A Little More Peace. A Lot More Rameshwaram.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-charcoal/85">
              <p>
                Rameshwaram is a place of temples, history, devotion and unforgettable journeys. SHA Stays gives you a comfortable place to pause between them.
              </p>
              <p>
                Located near the Abdul Kalam Memorial and around 5 km from the Ramanathaswamy Temple, our stay combines convenient access with a quieter atmosphere away from the busiest parts of town.
              </p>
              <p>
                Whether you&apos;re travelling with family, visiting the temple, exploring the island or simply passing through, we&apos;d love to make your stay comfortable.
              </p>
            </div>
            <div className="mt-8">
              <TextLink href="/about">Discover SHA Stays</TextLink>
            </div>
          </div>
          <figure className="relative">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.75rem]">
              <LazyImage
                src={photos.corridor.src}
                alt={photos.corridor.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <figcaption className="mt-3 text-sm text-muted">
              Ramanathaswamy Temple, about 5 km from SHA Stays.
            </figcaption>
          </figure>
        </Container>
      </section>

      <section className="bg-sand/45 py-20 md:py-28">
        <Container>
          <h2 className="max-w-xl font-serif text-4xl leading-[1.05] text-forest md:text-6xl">
            Why Stay With Us?
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => (
              <article
                key={reason.number}
                className="rounded-[1.5rem] bg-paper p-7 shadow-[0_16px_40px_rgba(24,60,53,0.05)] ring-1 ring-black/5 motion-safe:transition motion-safe:hover:-translate-y-1"
              >
                <span className="font-serif text-4xl text-terracotta-deep">{reason.number}</span>
                <h3 className="mt-8 font-serif text-3xl text-forest">{reason.title}</h3>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-muted">{reason.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28" id="rooms">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.22em] text-terracotta-deep uppercase">
              Stay well. Explore more.
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-[1.05] text-forest md:text-6xl">
              Simple Rooms. Comfortable Stays.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              We keep things simple: clean, comfortable rooms, thoughtful essentials and a peaceful place to rest after exploring Rameshwaram.
            </p>
          </div>
          <div className="mt-12 space-y-6">
            {rooms.map((room) => (
              <RoomCard key={room.slug} room={room} featured />
            ))}
          </div>
          <div className="mt-14 rounded-[1.75rem] bg-forest px-8 py-10 text-ivory md:px-12">
            <h3 className="font-serif text-4xl text-white md:text-5xl">Find Your Room</h3>
            <p className="mt-4 max-w-xl text-sand/90">
              Choose the room that suits your journey and make SHA Stays your comfortable base in Rameshwaram.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/book" variant="terracotta">
                Check Availability
              </ButtonLink>
              <ButtonLink href={hasPhone() ? phoneHref() : "/contact"} variant="ghost">
                Call to Book
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.22em] text-terracotta-deep uppercase">
              Your peaceful stop in Rameshwaram
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-[1.05] text-forest md:text-6xl">
              Rameshwaram Starts Here.
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted">
              <p>From sacred temples to India&apos;s island history, Rameshwaram has stories around every corner.</p>
              <p>Stay with us and explore the places that make this destination unforgettable.</p>
            </div>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-12">
            <PlacePhoto place={temple} className="min-h-[420px] lg:col-span-5" fit="object-top" />
            <PlacePhoto place={kalam} className="min-h-[420px] lg:col-span-7" fit="object-[center_30%]" />
            <PlacePhoto place={pamban} className="min-h-[380px] lg:col-span-12" fit="object-[center_72%]" />
            <PlacePhoto place={dhanushkodi} className="min-h-[340px] lg:col-span-7" />
            <article className="flex min-h-[340px] flex-col justify-end rounded-[1.75rem] bg-sand p-7 lg:col-span-5">
              <p className="text-xs tracking-[0.2em] text-terracotta-ink uppercase">A quieter shore</p>
              <h3 className="mt-3 font-serif text-4xl text-forest">{ariyaman.name}</h3>
              <p className="mt-3 max-w-sm leading-relaxed text-charcoal/80">{ariyaman.description}</p>
            </article>
            <article className="flex flex-col justify-between gap-8 rounded-[1.75rem] bg-forest p-8 text-ivory md:flex-row md:items-end lg:col-span-12">
              <div className="max-w-2xl">
                <h3 className="font-serif text-4xl text-white md:text-5xl">{island.name}</h3>
                <p className="mt-3 text-sand/90">{island.description}</p>
              </div>
              <ButtonLink href="/experience" variant="sand">
                Explore Rameshwaram
              </ButtonLink>
            </article>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28" id="location">
        <Container className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-4xl leading-[1.05] text-forest md:text-6xl">
              Well Connected. Easy to Find.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              SHA Stays is located in Rameshwaram with convenient highway access, making it easy to reach whether you&apos;re arriving by car, taxi or tour vehicle.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-6">
              {locationFacts.map((fact) => (
                <div key={fact.label}>
                  <dt className="font-serif text-3xl text-forest">{fact.value}</dt>
                  <dd className="mt-1 text-sm text-muted">{fact.label}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8">
              <ButtonLink href={contact.directionsUrl} variant="forest" external>
                Get Directions
              </ButtonLink>
            </div>
          </div>
          <MapPanel />
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container className="grid gap-5 lg:grid-cols-3">
          <article className="rounded-[1.75rem] bg-forest p-8 text-ivory">
            <h2 className="font-serif text-4xl text-white">Arriving by Road?</h2>
            <p className="mt-3 font-serif text-2xl text-sand">You&apos;re already on the right route.</p>
            <p className="mt-4 leading-relaxed text-sand/90">
              With direct highway access and free parking for bikes, cars and larger vehicles, SHA Stays makes a practical stop for travellers exploring Rameshwaram by car. There is space for about 4–5 cars.
            </p>
            <div className="mt-6">
              <ButtonLink href="/book" variant="sand">
                Plan Your Stay
              </ButtonLink>
            </div>
          </article>
          <article className="rounded-[1.75rem] bg-sand p-8">
            <h2 className="font-serif text-4xl text-forest">Here for the Temple?</h2>
            <p className="mt-4 leading-relaxed text-charcoal/80">
              Begin your Rameshwaram pilgrimage from a comfortable and peaceful base.
            </p>
            <p className="mt-3 leading-relaxed text-charcoal/80">
              The Ramanathaswamy Temple is approximately 5 km away, giving you convenient access to the temple while allowing you to stay away from the busiest streets around the temple area.
            </p>
            <div className="mt-6">
              <ButtonLink href="/book" variant="forest">
                Book Your Stay
              </ButtonLink>
            </div>
          </article>
          <article className="rounded-[1.75rem] bg-paper p-8 ring-1 ring-line">
            <h2 className="font-serif text-4xl text-forest">Travelling With Family?</h2>
            <p className="mt-4 leading-relaxed text-charcoal/80">
              Rameshwaram is better experienced together.
            </p>
            <p className="mt-3 leading-relaxed text-charcoal/80">
              SHA Stays offers a comfortable and welcoming base for families travelling together, with easy road access and convenient access to the island&apos;s major attractions.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              An extra mattress can be requested for any room, subject to availability.{" "}
              <Link href="/contact" className="text-forest underline underline-offset-4">
                Contact us
              </Link>{" "}
              before you arrive.
            </p>
          </article>
        </Container>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <Container className="max-w-3xl">
          <h2 className="font-serif text-4xl leading-[1.05] text-forest md:text-6xl">About SHA Stays</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-charcoal/85">
            <p>
              SHA Stays was created with a simple idea: make staying in Rameshwaram comfortable, peaceful and easy.
            </p>
            <p>
              Instead of trying to be a large hotel, we chose to create a smaller, more personal stay where guests can slow down, rest well and spend more time experiencing Rameshwaram.
            </p>
            <p>
              With six rooms and a convenient location near the Abdul Kalam Memorial, SHA Stays is designed for travellers who value comfort, accessibility and a relaxed atmosphere.
            </p>
          </div>
          <p className="mt-10 font-serif text-3xl leading-snug text-forest italic md:text-4xl">
            Come as a traveller. Leave with memories of Rameshwaram.
          </p>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <h2 className="font-serif text-4xl text-forest md:text-6xl">Your Stay, Made Simple.</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trust.map((item) => (
              <article key={item.title} className="rounded-[1.5rem] border border-line bg-paper p-6">
                <h3 className="font-serif text-2xl text-forest">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-20 md:pb-28" id="faq">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="font-serif text-4xl text-forest md:text-6xl">Good to Know</h2>
            <p className="mt-4 text-muted">
              A few practical answers before you travel. If you need anything else,{" "}
              <Link href="/contact" className="text-forest underline underline-offset-4">
                we&apos;re easy to reach
              </Link>
              .
            </p>
          </div>
          <div className="divide-y divide-line border-y border-line">
            {faqs.map((item) => (
              <details key={item.question} className="group">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-left font-medium text-charcoal">
                  {item.question}
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-lg text-forest transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="max-w-xl pb-5 leading-relaxed text-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}

function PlacePhoto({
  place,
  className,
  fit = "object-center",
}: {
  place: (typeof places)[number];
  className?: string;
  fit?: string;
}) {
  if (!place.photo) return null;
  return (
    <article className={cx("group relative overflow-hidden rounded-[1.75rem]", className)}>
      <LazyImage
        src={place.photo.src}
        alt={place.photo.alt}
        fill
        className={cx("object-cover motion-safe:transition motion-safe:duration-700 motion-safe:group-hover:scale-[1.03]", fit)}
        sizes="(min-width: 1024px) 60vw, 100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/15 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
        <h3 className="font-serif text-3xl md:text-4xl">{place.name}</h3>
        <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/85">{place.description}</p>
      </div>
    </article>
  );
}
