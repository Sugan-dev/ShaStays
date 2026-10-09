import { ButtonLink } from "@/components/Buttons";
import { Container } from "@/components/Container";
import { FinalCta } from "@/components/FinalCta";
import { PageHero } from "@/components/PageHero";
import { RoomCard } from "@/components/RoomCard";
import { mattressNote, rooms, sharedAmenities, stayFacts } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { hasWhatsapp, whatsappAvailability, whatsappHref } from "@/lib/links";
import { AmenityList } from "@/components/AmenityList";

export const metadata = pageMeta({
  title: "Rooms in Rameshwaram",
  description:
    "Two SHA King Rooms and four SHA Queen Rooms at SHA Stays, a peaceful boutique stay in Rameshwaram. Comfortable beds, private bathrooms, air conditioning and easy road access.",
  path: "/rooms",
});

export default function RoomsPage() {
  return (
    <>
      <PageHero eyebrow="Six boutique rooms" title="Rooms made for a comfortable stay." crumb="Rooms" path="/rooms">
        Two SHA King Rooms and four SHA Queen Rooms: calm, clean and thoughtfully kept, with a peaceful place to rest after a day exploring Rameshwaram.
      </PageHero>
      <section className="py-16 md:py-24">
        <Container className="space-y-20 md:space-y-28">
          {rooms.map((room, index) => (
            <div key={room.slug} className="reveal">
              <RoomCard room={room} layout="row" reverse={index % 2 === 1} heading="h2" />
            </div>
          ))}
        </Container>
      </section>
      <section className="pb-20 md:pb-28">
        <Container className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-panel border border-line bg-paper p-7 md:p-10">
            <h2 className="font-serif text-3xl text-forest md:text-4xl">In every room</h2>
            <AmenityList amenities={sharedAmenities} className="mt-6" />
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted">{mattressNote}</p>
          </div>
          <div className="flex flex-col rounded-panel bg-forest p-7 text-ivory md:p-10">
            <dl className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {stayFacts.map((fact) => (
                <div key={fact.label} className="border-b border-white/10 pb-4">
                  <dt className="text-sm text-sand/80">{fact.label}</dt>
                  <dd className="mt-1 font-serif text-3xl text-white">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/book">Check Availability</ButtonLink>
              <ButtonLink href={whatsappHref(whatsappAvailability)} variant="ghost" external={hasWhatsapp()} icon="whatsapp">
                WhatsApp Us
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
