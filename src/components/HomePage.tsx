import Link from "next/link";
import { ButtonLink, TextLink } from "@/components/Buttons";
import { Container } from "@/components/Container";
import { FinalCta } from "@/components/FinalCta";
import { Icon } from "@/components/Icon";
import { LazyImage } from "@/components/LazyImage";
import { PhotoGrid } from "@/components/PhotoGrid";
import { Reviews } from "@/components/Reviews";
import { RoomCard } from "@/components/RoomCard";
import { SectionIntro } from "@/components/SectionIntro";
import {
  contact,
  dayPlan,
  faqs,
  galleryPhotos,
  hero,
  homeGallery,
  mattressNote,
  places,
  reasons,
  rooms,
  trustBar,
} from "@/lib/site";
import { cx, hasWhatsapp, whatsappAvailability, whatsappHref } from "@/lib/links";

const privateHighlights = [
  "Entire 6-room property",
  "Ideal for families and groups",
  "Suits road trips by car or 15–21 seater van",
  "Convenient parking",
  "Groups of up to 21 guests",
  "Your base for Rameshwaram sightseeing",
];

const featuredPlaces = ["ramanathaswamy-temple", "abdul-kalam-memorial", "pamban-bridge", "dhanushkodi"]
  .map((slug) => places.find((place) => place.slug === slug))
  .filter((place) => place?.photo !== undefined);

export function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Intro />
      <Rooms />
      <PrivateStay />
      <WhySha />
      <Explore />
      <DayAtSha />
      <GalleryPreview />
      <Reviews />
      <Faq />
      <FinalCta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-forest-deep">
      <picture>
        <source type="image/avif" srcSet="/images/hero-800.avif 800w, /images/hero-1600.avif 1600w" sizes="100vw" />
        <img
          src="/images/hero-1600.webp"
          srcSet="/images/hero-800.webp 800w, /images/hero-1600.webp 1600w"
          sizes="100vw"
          width={1600}
          height={900}
          alt={hero.alt}
          fetchPriority="high"
          className={cx("hero-settle absolute inset-0 -z-10 h-full w-full object-cover", hero.fit)}
        />
      </picture>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-deep via-forest-deep/60 to-forest-deep/10 lg:bg-[linear-gradient(100deg,rgba(16,40,34,0.9)_0%,rgba(16,40,34,0.75)_36%,rgba(16,40,34,0.3)_64%,rgba(16,40,34,0.08)_100%)]" />
      <Container className="flex min-h-[calc(100svh-6.5rem)] flex-col justify-end pt-12 pb-8 md:pt-24 md:pb-16 lg:min-h-[min(calc(100svh-6.5rem),52rem)]">
        <h1 className="rise eyebrow text-sand">Rooms &amp; family stays in Rameshwaram</h1>
        <p className="rise rise-delay-1 mt-4 max-w-4xl font-serif text-[clamp(3.1rem,8vw,6.75rem)] leading-[0.92] text-white [text-shadow:0_2px_24px_rgba(8,20,17,0.5)]">
          Stay Close.
          <br />
          Feel at Home.
        </p>
        <p className="rise rise-delay-2 mt-4 max-w-lg text-[1.05rem] leading-relaxed text-white md:mt-5 md:text-xl">
          A peaceful boutique stay in Rameshwaram, close to the places that matter.
        </p>
        <ul className="rise rise-delay-2 mt-4 flex max-w-2xl flex-wrap items-center gap-x-3 gap-y-1 text-[0.8rem] text-ivory sm:text-sm md:mt-5">
          <li className="flex items-center gap-1.5">
            <Icon name="pin" className="h-4 w-4" />
            Near Abdul Kalam Memorial
          </li>
          <li aria-hidden="true">·</li>
          <li>~5 km from Ramanathaswamy Temple</li>
          <li aria-hidden="true">·</li>
          <li>Highway Access</li>
        </ul>
        <div className="rise rise-delay-3 mt-6 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap md:mt-8">
          <ButtonLink href="/book" className="col-span-2 sm:col-span-1">
            Book Your Stay
          </ButtonLink>
          <ButtonLink href="/rooms" variant="ghost" className="px-3 whitespace-nowrap sm:px-6">
            Explore Rooms
          </ButtonLink>
          <ButtonLink
            href={whatsappHref(whatsappAvailability)}
            variant="ivory"
            external={hasWhatsapp()}
            icon="whatsapp"
            className="px-3 whitespace-nowrap sm:px-6"
          >
            WhatsApp
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

function TrustBar() {
  return (
    <section aria-label="SHA Stays at a glance" className="border-b border-line bg-paper">
      <Container>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-4 py-6 sm:grid-cols-3 lg:grid-cols-5 lg:py-5 xl:flex xl:items-center xl:justify-between">
          {trustBar.map((item) => (
            <li key={item.label} className="flex items-center gap-3 text-sm leading-snug text-charcoal last:col-span-2 sm:last:col-span-1 xl:whitespace-nowrap">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-sand/70 text-forest">
                <Icon name={item.icon} className="h-[1.1rem] w-[1.1rem]" />
              </span>
              {item.label}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function Intro() {
  const photo = galleryPhotos.archNight;
  return (
    <section className="py-20 md:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div className="reveal">
          <SectionIntro eyebrow="Welcome to SHA Stays" title="A quieter way to experience Rameshwaram.">
            <p>
              SHA Stays is a thoughtfully designed, six-room boutique stay in Rameshwaram: a comfortable, convenient base for families, pilgrims, couples and road-trip travellers exploring the island.
            </p>
            <p className="mt-4">
              Stay near the{" "}
              <Link href="/location" className="text-forest underline underline-offset-4">
                Dr. A.P.J. Abdul Kalam Memorial
              </Link>
              , about 5 km from Ramanathaswamy Temple, and come back each evening to a calm garden and a restful room.
            </p>
          </SectionIntro>
          <div className="mt-8">
            <ButtonLink href="/about" variant="outline">
              Discover SHA Stays
            </ButtonLink>
          </div>
        </div>
        <figure className="reveal">
          <div className="relative aspect-[4/5] overflow-hidden rounded-card bg-sand">
            <LazyImage src={photo.src} alt={photo.alt} fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
          </div>
          <figcaption className="mt-3 text-sm text-muted">The garden walkway at SHA Stays, at dusk.</figcaption>
        </figure>
      </Container>
    </section>
  );
}

function Rooms() {
  return (
    <section id="rooms" className="border-y border-line bg-paper py-20 md:py-28">
      <Container>
        <SectionIntro eyebrow="Rooms in Rameshwaram" title="Comfortable rooms for couples and families.">
          Two SHA King Rooms and four SHA Queen Rooms, each with a private bathroom, air conditioning and Wi-Fi.
        </SectionIntro>
        <div className="mt-12 grid gap-16 md:grid-cols-2 md:gap-8 lg:gap-12">
          {rooms.map((room) => (
            <div key={room.slug} className="reveal">
              <RoomCard room={room} />
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-5 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-sm leading-relaxed text-muted">{mattressNote}</p>
          <ButtonLink href="/rooms" variant="outline" className="shrink-0">
            View all rooms
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

function PrivateStay() {
  const photo = galleryPhotos.forecourt;
  return (
    <section aria-labelledby="private-stay-title" className="relative isolate overflow-hidden bg-forest-deep text-ivory">
      <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:absolute lg:inset-0 lg:-z-10 lg:aspect-auto">
        <LazyImage src={photo.src} alt={photo.alt} fill className="object-cover object-[center_60%]" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/10 to-transparent lg:bg-[linear-gradient(90deg,rgba(16,40,34,0.95)_0%,rgba(16,40,34,0.85)_38%,rgba(16,40,34,0.25)_72%,rgba(16,40,34,0.1)_100%)]" />
      </div>
      <Container className="py-14 md:py-20 lg:py-32">
        <div className="reveal max-w-xl">
          <p className="eyebrow text-sand">Private group stay · The entire property</p>
          <h2 id="private-stay-title" className="mt-3 font-serif text-[2.6rem] leading-[1.02] text-white md:text-6xl">
            Your group. Your stay. Your SHA.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-sand">
            Travelling with family, friends or a group? Book the entire SHA Stays property exclusively for your group.
          </p>
          <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {privateHighlights.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[0.95rem] leading-snug text-ivory">
                <Icon name="check" className="mt-px text-sand" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-9 grid gap-3 sm:flex sm:flex-wrap">
            <ButtonLink href="/private-resort">Explore Private Group Stay</ButtonLink>
            <ButtonLink href="/private-resort#quote" variant="ghost">
              Plan Your Group Stay
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

function WhySha() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionIntro eyebrow="Why SHA Stays" title="A convenient stay for families and pilgrims.">
          Small, personal, convenient and comfortable. That&apos;s the whole idea.
        </SectionIntro>
        <ul className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <li key={reason.title} className="reveal flex gap-5 border-t border-line pt-6">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-sand/70 text-forest">
                <Icon name={reason.icon} />
              </span>
              <div>
                <h3 className="font-serif text-[1.65rem] leading-tight text-forest">{reason.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{reason.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function Explore() {
  return (
    <section className="bg-sand/40 py-20 md:py-28">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionIntro eyebrow="Explore Rameshwaram" title="Plan your Rameshwaram trip from SHA." />
          <div className="shrink-0">
            <TextLink href="/experience">Places to visit in Rameshwaram</TextLink>
          </div>
        </div>
        <ul className="mt-12 grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
          {featuredPlaces.map((place) =>
            place?.photo ? (
              <li key={place.slug} className="reveal">
                <Link
                  href={`/experience#${place.slug}`}
                  className="group relative block aspect-[3/4] overflow-hidden rounded-card bg-forest"
                >
                  <LazyImage
                    src={place.photo.src}
                    alt={place.photo.alt}
                    fill
                    className={cx("object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.04]", place.photo.fit)}
                    sizes="(min-width: 1024px) 25vw, 50vw"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/20 to-transparent" />
                  <span className="absolute inset-x-0 bottom-0 p-4 text-white md:p-6">
                    {place.distance ? (
                      <span className="mb-2 inline-block rounded-full bg-ivory/90 px-2.5 py-1 text-[0.7rem] font-medium tracking-wide text-forest">
                        {place.distance}
                      </span>
                    ) : null}
                    <span className="block font-serif text-xl leading-tight md:text-3xl">{place.name}</span>
                    <span className="mt-1.5 block text-xs leading-snug text-white/85 md:text-sm">{place.short}</span>
                  </span>
                </Link>
              </li>
            ) : null,
          )}
        </ul>
        <p className="mt-4 text-xs text-muted">Landmark photographs show Rameshwaram, via Wikimedia Commons.</p>
        <div className="mt-12 grid gap-6 border-t border-forest/10 pt-8 md:grid-cols-[1fr_auto] md:items-center">
          <div className="flex gap-3">
            <Icon name="pin" className="mt-0.5 text-forest" />
            <div>
              <p className="font-medium text-forest">{contact.addressLines[0]}</p>
              <p className="text-sm text-muted">{contact.addressLines[1]} · Easy access from the highway</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={contact.directionsUrl} variant="forest" external>
              Get Directions
            </ButtonLink>
            <ButtonLink href="/location" variant="outline">
              Location &amp; Directions
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

function DayAtSha() {
  const photo = galleryPhotos.cottageNight;
  return (
    <section className="py-20 md:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <SectionIntro eyebrow="A day at SHA" title="Your Rameshwaram day, made simple." />
          <ol className="mt-10">
            {dayPlan.map((step, index) => (
              <li key={step.time} className="reveal relative grid grid-cols-[2.75rem_1fr] gap-5 pb-8 last:pb-0">
                {index < dayPlan.length - 1 ? (
                  <span className="absolute top-12 bottom-1 left-[1.375rem] w-px bg-line" aria-hidden="true" />
                ) : null}
                <span
                  className={cx(
                    "grid h-11 w-11 place-items-center rounded-full",
                    index === dayPlan.length - 1 ? "bg-forest text-sand" : "bg-sand/70 text-forest",
                  )}
                >
                  <Icon name={step.icon} />
                </span>
                <div className="pt-1">
                  <p className="eyebrow text-terracotta-deep">{step.time}</p>
                  <h3 className="mt-1.5 font-serif text-2xl leading-tight text-forest">{step.title}</h3>
                  <p className="mt-1 text-[0.95rem] leading-relaxed text-muted">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <figure className="reveal">
          <div className="relative aspect-[4/5] overflow-hidden rounded-card bg-forest">
            <LazyImage src={photo.src} alt={photo.alt} fill className={cx("object-cover", photo.focus)} sizes="(min-width: 1024px) 40vw, 100vw" />
          </div>
          <figcaption className="mt-3 text-sm text-muted">Night: back at SHA, where the garden lights come on.</figcaption>
        </figure>
      </Container>
    </section>
  );
}

function GalleryPreview() {
  return (
    <section className="border-y border-line bg-paper py-20 md:py-28">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionIntro eyebrow="Gallery" title="A look around SHA Stays.">
            Real photographs of the rooms, the garden and the stay after dark.
          </SectionIntro>
          <div className="shrink-0">
            <TextLink href="/gallery">View full gallery</TextLink>
          </div>
        </div>
        <div className="mt-12">
          <PhotoGrid photos={homeGallery} />
        </div>
      </Container>
    </section>
  );
}

function Faq() {
  return (
    <section className="pb-20 md:pb-28" id="faq">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionIntro eyebrow="Good to know" title="Before you travel.">
            Practical answers about the stay. Anything else?{" "}
            <Link href="/contact" className="text-forest underline underline-offset-4">
              Just ask us
            </Link>
            .
          </SectionIntro>
        </div>
        <div className="divide-y divide-line border-y border-line">
          {faqs.map((item) => (
            <details key={item.question} className="group">
              <summary className="flex min-h-14 cursor-pointer items-center justify-between gap-6 py-4 text-left font-medium text-charcoal">
                {item.question}
                <span
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-lg text-forest transition group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="max-w-xl pb-5 leading-relaxed text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
