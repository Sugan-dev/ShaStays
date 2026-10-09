import { ButtonLink, TextLink } from "@/components/Buttons";
import { Container } from "@/components/Container";
import { FinalCta } from "@/components/FinalCta";
import { Icon, type IconName } from "@/components/Icon";
import { LazyImage } from "@/components/LazyImage";
import { MapPanel } from "@/components/MapPanel";
import { PageHero } from "@/components/PageHero";
import { pageMeta } from "@/lib/seo";
import { contact, locationFacts, photos, places, site } from "@/lib/site";
import { cx, hasWhatsapp, phoneHref, whatsappAvailability, whatsappHref } from "@/lib/links";

export const metadata = pageMeta({
  title: "Stay Near Abdul Kalam Memorial, Rameshwaram",
  description:
    "SHA Stays is on NH 87 in Rameshwaram, about 200 m from the Dr. A.P.J. Abdul Kalam Memorial and 5 km from Ramanathaswamy Temple. Map, directions and parking.",
  path: "/location",
});

const arrival: { title: string; text: string; icon: IconName }[] = [
  {
    title: "Driving in from the mainland",
    text: "Cross Pamban Bridge onto the island and stay on NH 87 towards Rameshwaram town. SHA Stays is about 200 m from the Abdul Kalam Memorial, before you reach the temple area. Use Get Directions for the exact pin.",
    icon: "road",
  },
  {
    title: "To Ramanathaswamy Temple",
    text: "About 5 km by road. It is a short drive rather than a walk, so plan to go by car or another vehicle.",
    icon: "temple",
  },
  {
    title: "Parking",
    text: "Free parking on site for bikes and cars (space for about 4–5 cars), and a 15–21 seater van or mini bus can drive in and park. 24-hour CCTV covers the property.",
    icon: "car",
  },
  {
    title: "Arrival times",
    text: "Check-in is from 12:00 PM and check-out is by 11:00 AM. Reception is open 24 hours, so late arrivals are welcome; send us your arrival time on WhatsApp so we know when to expect you.",
    icon: "sunrise",
  },
];

const memorial = places.find((place) => place.slug === "abdul-kalam-memorial");

export default function LocationPage() {
  return (
    <>
      <PageHero
        eyebrow="Location · Rameshwaram, Tamil Nadu"
        title="Stay Near Dr. A.P.J. Abdul Kalam Memorial, Rameshwaram"
        crumb="Location"
        path="/location"
      >
        SHA Stays is on NH 87 in Rameshwaram (also spelt Rameswaram), about 200 m from the Dr. A.P.J. Abdul Kalam Memorial and about 5 km from Ramanathaswamy Temple. It&apos;s easy to reach whether you&apos;re arriving by car, taxi or tour vehicle.
      </PageHero>
      <section className="py-16 md:py-20">
        <Container className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <dl className="grid grid-cols-2 gap-3 sm:gap-6">
              {locationFacts.map((fact) => (
                <div key={fact.label} className="min-w-0 rounded-card bg-paper p-4 ring-1 ring-line sm:p-6">
                  <dt className="font-serif text-2xl text-forest sm:text-3xl">{fact.value}</dt>
                  <dd className="mt-1 text-sm break-words text-muted">{fact.label}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              Distances are by road. The Ramanathaswamy Temple is a short drive from SHA Stays.
            </p>
            <address className="mt-8 flex gap-3 not-italic">
              <Icon name="pin" className="mt-1 text-forest" />
              <span>
                <span className="block font-medium text-forest">{site.name}</span>
                {contact.addressLines.map((line) => (
                  <span key={line} className="block text-muted">
                    {line}
                  </span>
                ))}
              </span>
            </address>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={contact.directionsUrl} variant="forest" external icon="pin">
                Get Directions
              </ButtonLink>
              <ButtonLink href={phoneHref()} variant="outline" icon="phone">
                Call Us
              </ButtonLink>
              <ButtonLink
                href={whatsappHref(whatsappAvailability)}
                variant="outline"
                external={hasWhatsapp()}
                icon="whatsapp"
              >
                WhatsApp Us
              </ButtonLink>
            </div>
          </div>
          <MapPanel />
        </Container>
      </section>

      <section className="border-y border-line bg-paper py-16 md:py-20">
        <Container>
          <h2 className="max-w-2xl font-serif text-4xl leading-[1.05] text-forest md:text-5xl">Getting to SHA Stays</h2>
          <ul className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {arrival.map((item) => (
              <li key={item.title} className="flex gap-5 border-t border-line pt-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-sand/70 text-forest">
                  <Icon name={item.icon} />
                </span>
                <div>
                  <h3 className="font-serif text-2xl leading-tight text-forest">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {memorial ? (
        <section className="py-16 md:py-20">
          <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <figure>
              <div className="relative aspect-[4/3] overflow-hidden rounded-panel bg-sand">
                <LazyImage
                  src={photos.kalam.src}
                  alt={photos.kalam.alt}
                  fill
                  className={cx("object-cover", photos.kalam.fit)}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted">
                The Dr. A.P.J. Abdul Kalam Memorial, Rameshwaram (photo via Wikimedia Commons).
              </figcaption>
            </figure>
            <div>
              <p className="eyebrow text-terracotta-deep">About 200 m from SHA Stays</p>
              <h2 className="mt-3 font-serif text-4xl leading-[1.05] text-forest md:text-5xl">
                Visiting the Abdul Kalam Memorial?
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">{memorial.details}</p>
              <p className="mt-4 leading-relaxed text-muted">
                Check visiting hours locally before you go. From here, the rest of the island is within easy reach: the temple, Pamban Bridge and Dhanushkodi.
              </p>
              <div className="mt-6">
                <TextLink href="/experience">Places to visit in Rameshwaram</TextLink>
              </div>
            </div>
          </Container>
        </section>
      ) : null}

      <section className="pb-20">
        <Container>
          <article className="rounded-panel bg-forest px-8 py-10 text-ivory md:px-12">
            <h2 className="font-serif text-4xl text-white">Arriving by Road?</h2>
            <p className="mt-3 font-serif text-2xl text-sand">You&apos;re already on the right route.</p>
            <p className="mt-4 max-w-2xl leading-relaxed text-sand/90">
              Right on NH 87, with free parking for bikes, cars, vans and mini buses, SHA Stays makes a practical stop for travellers exploring Rameshwaram by road. There is space for about 4–5 cars, a 15–21 seater van can drive in, and reception is open 24 hours.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4">
              <ButtonLink href="/rooms" variant="sand">
                See the Rooms
              </ButtonLink>
              <TextLink href="/private-resort" light>
                Travelling as a group? Book the entire property
              </TextLink>
            </div>
          </article>
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
