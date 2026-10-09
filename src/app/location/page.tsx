import { ButtonLink } from "@/components/Buttons";
import { Container } from "@/components/Container";
import { FinalCta } from "@/components/FinalCta";
import { MapPanel } from "@/components/MapPanel";
import { PageHero } from "@/components/PageHero";
import { pageMeta } from "@/lib/seo";
import { contact, locationFacts } from "@/lib/site";

export const metadata = pageMeta({
  title: "Location in Rameshwaram",
  description:
    "SHA Stays is in Rameshwaram, Tamil Nadu, near the Abdul Kalam Memorial and about 5 km from Ramanathaswamy Temple, with direct highway access.",
  path: "/location",
});

export default function LocationPage() {
  return (
    <>
      <PageHero eyebrow="Rameshwaram, Tamil Nadu" title="Well Connected. Easy to Find." crumb="Location" path="/location">
        SHA Stays is located in Rameshwaram with convenient highway access, making it easy to reach whether you&apos;re arriving by car, taxi or tour vehicle.
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
            <div className="mt-8">
              <ButtonLink href={contact.directionsUrl} variant="forest" external>
                Get Directions
              </ButtonLink>
            </div>
          </div>
          <MapPanel />
        </Container>
      </section>
      <section className="pb-20">
        <Container>
          <article className="rounded-panel bg-forest px-8 py-10 text-ivory md:px-12">
            <h2 className="font-serif text-4xl text-white">Arriving by Road?</h2>
            <p className="mt-3 font-serif text-2xl text-sand">You&apos;re already on the right route.</p>
            <p className="mt-4 max-w-2xl leading-relaxed text-sand/90">
              With direct highway access and free parking for bikes, cars and larger vehicles, SHA Stays makes a practical stop for travellers exploring Rameshwaram by car. There is space for about 4–5 cars.
            </p>
            <div className="mt-6">
              <ButtonLink href="/book" variant="sand">
                Plan Your Stay
              </ButtonLink>
            </div>
          </article>
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
