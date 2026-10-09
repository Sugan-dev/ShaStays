import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink, TextLink } from "@/components/Buttons";
import { Container } from "@/components/Container";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { LazyImage } from "@/components/LazyImage";
import { PrivateStayForm } from "@/components/PrivateStayForm";
import { hasWhatsapp, whatsappHref, whatsappPrivateStay, cx } from "@/lib/links";
import { mattressNote, maxGroupSize } from "@/lib/site";
import {
  privateAddOns,
  privateAudiences,
  privateBenefits,
  privateFaqs,
  privateFit,
  privateGallery,
  privateHero,
  privateInclusions,
  privateNotFit,
  privatePackage,
  privatePlaces,
  privateStats,
  privateSteps,
  privateStoryImage,
} from "@/lib/private-resort";

const eyebrow = "eyebrow text-terracotta-deep";

const faqGraph = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: privateFaqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export function PrivateResortPage() {
  return (
    <>
      <JsonLd data={faqGraph} />
      <Hero />
      <Concept />
      <Audiences />
      <Inclusions />
      <Story />
      <Steps />
      <Capacity />
      <Packages />
      <AddOns />
      <Explore />
      <Gallery />
      <Fit />
      <Faq />
      <Closing />
      <Quote />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-forest-deep">
      <picture>
        {privateHero.avifSrcSet ? (
          <source type="image/avif" srcSet={privateHero.avifSrcSet} sizes="100vw" />
        ) : null}
        <img
          src={privateHero.src}
          srcSet={privateHero.srcSet || undefined}
          sizes="100vw"
          width={privateHero.width}
          height={privateHero.height}
          alt={privateHero.alt}
          fetchPriority="high"
          className="hero-settle absolute inset-0 h-full w-full object-cover object-center"
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/55 to-forest-deep/20 lg:bg-[linear-gradient(100deg,rgba(16,40,34,0.92)_0%,rgba(16,40,34,0.75)_30%,rgba(16,40,34,0.25)_60%,rgba(16,40,34,0.15)_100%)]" />
      <Container className="relative flex min-h-[88vh] flex-col justify-end py-14 md:py-20">
        <div className="rise">
          <Breadcrumbs tone="light" items={[{ name: "Private Stay", path: "/private-resort" }]} />
        </div>
        <h1 className="rise eyebrow text-sand">Private group stay in Rameshwaram</h1>
        <p className="rise rise-delay-1 mt-5 max-w-4xl font-serif text-[clamp(2.9rem,6.4vw,5.75rem)] leading-[0.95] text-white [text-shadow:0_2px_24px_rgba(8,20,17,0.55)]">
          Your Group.
          <br />
          Your Stay.
          <br />
          Your SHA.
        </p>
        <p className="rise rise-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-white">
          Travelling to Rameshwaram with family, friends or a group? Book the entire SHA Stays property exclusively for yourselves.
        </p>
        <div className="rise rise-delay-3 mt-8 flex flex-wrap gap-3">
          <ButtonLink href="#quote">Plan Your Group Stay</ButtonLink>
          <ButtonLink href={whatsappHref(whatsappPrivateStay)} variant="ghost" external={hasWhatsapp()} icon="whatsapp">
            WhatsApp Us
          </ButtonLink>
        </div>
        <p className="mt-8 max-w-xl text-sm leading-relaxed text-white/90">
          For groups arriving together by car, 15–21 seater van, Tempo Traveller or several vehicles.
        </p>
      </Container>
    </section>
  );
}

function Concept() {
  return (
    <section className="py-20 md:py-28">
      <Container className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <p className={eyebrow}>The whole place</p>
          <h2 className="mt-3 font-serif text-4xl leading-[1.05] text-forest md:text-6xl">
            Why book one room when you can have the whole place?
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-charcoal/85">
            <p>When your entire group travels together, staying in separate hotels can become complicated.</p>
            <p>At SHA Stays, you can book the entire 6-room property exclusively for your group.</p>
          </div>
          <ul className="mt-8 space-y-1 font-serif text-3xl leading-tight text-muted md:text-4xl">
            <li>Different rooms.</li>
            <li>Different floors.</li>
            <li>Different properties.</li>
            <li>Different check-ins.</li>
          </ul>
          <p className="mt-8 font-serif text-3xl leading-snug text-forest italic md:text-4xl">
            Don&apos;t book six rooms. Book the whole place.
          </p>
        </div>
        <div className="rounded-panel bg-paper p-7 shadow-soft ring-1 ring-black/5 sm:p-8">
          <p className={eyebrow}>Your private stay</p>
          <ul className="mt-6 space-y-4">
            {privateBenefits.map((item) => (
              <li key={item} className="flex gap-3 text-[1.02rem] leading-snug text-charcoal">
                <Check />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <Container className="mt-12">
        <p className="rounded-panel bg-sand px-8 py-8 font-serif text-3xl leading-snug text-forest md:px-12 md:py-10 md:text-5xl">
          One booking. One group. One private stay.
        </p>
      </Container>
    </section>
  );
}

function Audiences() {
  return (
    <section className="bg-sand/45 py-20 md:py-28">
      <Container>
        <div className="max-w-2xl">
          <p className={eyebrow}>Arriving together</p>
          <h2 className="mt-3 font-serif text-4xl leading-[1.05] text-forest md:text-6xl">
            Coming to Rameshwaram as a group?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Whether you&apos;re travelling in a Tempo Traveller, mini bus, van or multiple cars, SHA Stays gives your entire group one private place to stay.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {privateAudiences.map((item) => (
            <article
              key={item.title}
              className="rounded-card bg-paper p-7 shadow-soft ring-1 ring-black/5 motion-safe:transition motion-safe:hover:-translate-y-1"
            >
              <h3 className="font-serif text-3xl text-forest">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Inclusions() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="max-w-2xl">
          <p className={eyebrow}>What you reserve</p>
          <h2 className="mt-3 font-serif text-4xl leading-[1.05] text-forest md:text-6xl">
            Your Private Stay Includes
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {privateInclusions.map((item) => (
            <article
              key={item.title}
              className="rounded-card border border-line bg-paper p-7 motion-safe:transition motion-safe:hover:-translate-y-1"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-sand text-forest">
                <Icon name={item.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-serif text-3xl text-forest">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Story() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <figure>
          <div className="relative aspect-[4/3] overflow-hidden rounded-panel lg:aspect-[4/5]">
            <LazyImage
              src={privateStoryImage.src}
              alt={privateStoryImage.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
          <figcaption className="mt-3 text-sm text-muted">The garden path at SHA Stays.</figcaption>
        </figure>
        <div>
          <p className={eyebrow}>After you arrive</p>
          <h2 className="mt-3 font-serif text-4xl leading-[1.05] text-forest md:text-6xl">
            Travel Together. Stay Together.
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-charcoal/85">
            <p>The best part of a group trip isn&apos;t just reaching Rameshwaram.</p>
            <p>It&apos;s what happens after you arrive.</p>
            <p>Everyone comes back to the same place.</p>
            <p>Grandparents can rest.</p>
            <p>Kids can relax.</p>
            <p>Friends can sit together.</p>
            <p>Families can talk without worrying about disturbing other guests.</p>
            <p>And at the end of the day, everyone has one place to return to.</p>
          </div>
          <p className="mt-8 font-serif text-3xl leading-snug text-forest italic md:text-4xl">
            SHA Stays becomes your group&apos;s private base in Rameshwaram.
          </p>
        </div>
      </Container>
    </section>
  );
}

function Steps() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="max-w-2xl">
          <p className={eyebrow}>How a private booking works</p>
          <h2 className="mt-3 font-serif text-4xl leading-[1.05] text-forest md:text-6xl">
            Your Private Stay in 4 Simple Steps
          </h2>
        </div>
        <ol className="mt-12 grid gap-8 lg:grid-cols-4 lg:gap-6">
          {privateSteps.map((step) => (
            <li key={step.number} className="border-l border-line pl-6 lg:border-t lg:border-l-0 lg:pt-8 lg:pl-0">
              <span className="font-serif text-4xl text-terracotta-deep">{step.number}</span>
              <h3 className="mt-4 font-serif text-2xl text-forest">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function Capacity() {
  return (
    <section className="bg-forest py-20 text-ivory md:py-28">
      <Container>
        <dl className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
          {privateStats.map((item) => (
            <div key={item.label} className="flex flex-col">
              <dd className="order-1 font-serif text-6xl text-white md:text-7xl">{item.value}</dd>
              <dt className="order-2 mt-2 text-sm tracking-wide text-sand">{item.label}</dt>
            </div>
          ))}
        </dl>
        <h2 className="mt-14 max-w-3xl font-serif text-4xl leading-[1.05] text-white md:text-6xl">
          Ideal for Small & Medium Groups
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-sand/90">
          The property has 6 rooms and sleeps groups of up to {maxGroupSize} guests, using extra mattresses where needed. Contact us with your group size and we&apos;ll recommend the best arrangement.
        </p>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
          <TextLink href="/rooms" light>
            See the King and Queen rooms
          </TextLink>
          <TextLink href="/location" light>
            Location, parking and directions
          </TextLink>
        </div>
      </Container>
    </section>
  );
}

function Packages() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="max-w-2xl">
          <p className={eyebrow}>Group stay in Rameshwaram</p>
          <h2 className="mt-3 font-serif text-4xl leading-[1.05] text-forest md:text-6xl">
            One Package. The Whole Place.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Tell us your travel date, group size and vehicle type, and we&apos;ll send a personalised quote for the entire property.
          </p>
        </div>
        <article className="mt-12 grid gap-10 rounded-panel bg-forest p-7 text-ivory shadow-lift md:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:p-12">
          <div className="flex flex-col">
            <h3 className="font-serif text-4xl text-white md:text-5xl">{privatePackage.name}</h3>
            <p className="mt-3 text-sand">{privatePackage.summary}</p>
            <p className="mt-10 font-serif text-4xl text-white md:text-5xl">{privatePackage.price}</p>
            <p className="mt-3 max-w-md leading-relaxed text-sand/90">{privatePackage.priceNote}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="#quote" variant="sand">
                {privatePackage.cta}
              </ButtonLink>
              <ButtonLink href={whatsappHref(whatsappPrivateStay)} variant="ghost" external={hasWhatsapp()} icon="whatsapp">
                WhatsApp Us
              </ButtonLink>
            </div>
          </div>
          <ul className="space-y-4 self-center border-t border-white/15 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
            {privatePackage.features.map((feature) => (
              <li key={feature} className="flex gap-3 leading-snug">
                <Check light />
                <span className="text-sand">{feature}</span>
              </li>
            ))}
          </ul>
        </article>
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted">{mattressNote}</p>
      </Container>
    </section>
  );
}

function AddOns() {
  return (
    <section className="bg-sand/45 py-20 md:py-28">
      <Container>
        <div className="max-w-2xl">
          <p className={eyebrow}>Optional, and confirmed with your quote</p>
          <h2 className="mt-3 font-serif text-4xl leading-[1.05] text-forest md:text-6xl">
            Make Your Group Stay Easier
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            These can be added when we plan your stay. Nothing here is included unless we confirm it for your dates.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {privateAddOns.map((item) => (
            <article key={item.title} className="rounded-card bg-paper p-7 ring-1 ring-black/5">
              <p className="text-xs font-medium tracking-[0.16em] text-terracotta-deep uppercase">On request</p>
              <h3 className="mt-4 font-serif text-3xl text-forest">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Explore() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <Container>
        <div className="max-w-2xl">
          <p className={eyebrow}>From one private base</p>
          <h2 className="mt-3 font-serif text-4xl leading-[1.05] text-forest md:text-6xl">
            Stay Together. Explore Together.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Set out as a group for the temple, the memorial, the bridge and the shore, then come back to the same private stay.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {privatePlaces.map((place) =>
            place.photo ? (
              <article key={place.slug} className="overflow-hidden rounded-panel bg-sand">
                <div className="relative aspect-[4/3]">
                  <LazyImage
                    src={place.photo.src}
                    alt={place.photo.alt}
                    fill
                    className={cx("object-cover", place.photo.fit)}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-3xl text-forest">{place.name}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{place.description}</p>
                </div>
              </article>
            ) : (
              <article key={place.slug} className="flex min-h-72 flex-col justify-end rounded-panel bg-forest p-7">
                <p className="text-xs tracking-[0.18em] text-sand uppercase">On the island</p>
                <h3 className="mt-3 font-serif text-3xl text-white">{place.name}</h3>
                <p className="mt-3 leading-relaxed text-sand/90">{place.description}</p>
              </article>
            ),
          )}
        </div>
        <p className="mt-12 font-serif text-3xl leading-snug text-forest italic md:text-4xl">
          One private base for your entire Rameshwaram trip.
        </p>
      </Container>
    </section>
  );
}

function Gallery() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="max-w-2xl">
          <p className={eyebrow}>SHA Stays</p>
          <h2 className="mt-3 font-serif text-4xl leading-[1.05] text-forest md:text-6xl">The place, and the trip</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Property photographs are of SHA Stays. Landmark photographs show Rameshwaram. Empty frames are ready for group and vehicle pictures when we add them.
          </p>
        </div>
        <div className="mt-12 grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {privateGallery.map((photo) => (
            <figure key={photo.id}>
              {photo.src ? (
                <div className={cx("relative overflow-hidden rounded-card", photo.tall ? "aspect-[3/4]" : "aspect-[4/3]")}>
                  <LazyImage
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
              ) : (
                <div
                  className={cx(
                    "flex flex-col justify-between rounded-card bg-sand p-6",
                    photo.tall ? "aspect-[3/4]" : "aspect-[4/3]",
                  )}
                >
                  <p className="text-xs font-medium tracking-[0.18em] text-terracotta-ink uppercase">Photograph</p>
                  <p className="font-serif text-3xl leading-tight text-forest">{photo.caption}</p>
                </div>
              )}
              {photo.src ? <figcaption className="mt-3 text-sm text-muted">{photo.caption}</figcaption> : null}
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Fit() {
  return (
    <section className="pb-20 md:pb-28">
      <Container>
        <h2 className="max-w-2xl font-serif text-4xl leading-[1.05] text-forest md:text-6xl">Who this stay is for</h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <div className="rounded-panel bg-paper p-7 ring-1 ring-black/5 sm:p-8">
            <h3 className="font-serif text-3xl text-forest">Perfect if you are...</h3>
            <ul className="mt-6 space-y-3">
              {privateFit.map((item) => (
                <li key={item} className="flex gap-3 leading-snug text-charcoal">
                  <Check />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-panel bg-sand/70 p-7 sm:p-8">
            <h3 className="font-serif text-3xl text-forest">Not ideal if...</h3>
            <p className="mt-3 leading-relaxed text-charcoal/80">
              A regular room may suit you better. A private stay is reserved for one group at a time.
            </p>
            <ul className="mt-6 space-y-3">
              {privateNotFit.map((item) => (
                <li key={item} className="flex gap-3 leading-snug text-charcoal">
                  <Cross />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link href="/rooms" className="font-medium text-forest underline decoration-transparent underline-offset-4 hover:decoration-current">
                See individual rooms
              </Link>
            </div>
          </div>
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
          <h2 className="font-serif text-4xl text-forest md:text-6xl">Questions before you travel</h2>
          <p className="mt-4 leading-relaxed text-muted">
            A private stay is one booking for the whole property. If your plans are still taking shape, send the date, the group size and how you&apos;re arriving.
          </p>
        </div>
        <div className="divide-y divide-line border-y border-line">
          {privateFaqs.map((item) => (
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
  );
}

function Closing() {
  return (
    <section className="bg-forest text-ivory">
      <Container className="py-20 md:py-28">
        <p className="eyebrow text-sand">SHA Stays · Rameshwaram</p>
        <h2 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.02] text-white md:text-7xl">
          Bring Your People. We&apos;ll Keep the Place.
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-sand/90">
          Planning a Rameshwaram trip with your family, friends or group?
        </p>
        <p className="mt-4 max-w-xl font-serif text-3xl leading-snug text-white md:text-4xl">
          Reserve SHA Stays exclusively for your group.
        </p>
        <p className="mt-6 text-sm tracking-wide text-sand">Tell us your date + group size + vehicle type.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="#quote" variant="terracotta">
            Get My Private Group Quote
          </ButtonLink>
          <ButtonLink href={whatsappHref(whatsappPrivateStay)} variant="ghost" external={hasWhatsapp()} icon="whatsapp">
            WhatsApp Us
          </ButtonLink>
        </div>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-sand/90">
          We&apos;ll get back to you with availability and a personalised package.
        </p>
      </Container>
    </section>
  );
}

function Quote() {
  return (
    <section className="py-16 md:py-20" id="quote">
      <Container className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className={eyebrow}>Group enquiry</p>
          <h2 className="mt-3 font-serif text-4xl leading-[1.05] text-forest md:text-5xl">Request Your Private Stay Quote</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Share your travel date, group size and vehicle type. We&apos;ll reply with availability and a package for the entire property.
          </p>
          <ul className="mt-6 space-y-2 text-sm leading-relaxed text-muted">
            <li>Check-in: 12:00 PM</li>
            <li>Check-out: 11:00 AM</li>
            <li>All 6 rooms, reserved for one group</li>
            <li>Up to {maxGroupSize} guests</li>
          </ul>
        </div>
        <PrivateStayForm />
      </Container>
    </section>
  );
}

function Check({ light = false }: { light?: boolean }) {
  return <Icon name="check" className={cx("mt-0.5", light ? "text-sand" : "text-forest")} />;
}

function Cross() {
  return (
    <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-terracotta-deep" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path strokeLinecap="round" d="M7 7l10 10M17 7 7 17" />
    </svg>
  );
}
