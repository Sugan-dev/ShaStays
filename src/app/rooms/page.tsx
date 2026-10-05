import { ButtonLink } from "@/components/Buttons";
import { Container } from "@/components/Container";
import { FinalCta } from "@/components/FinalCta";
import { PageHero } from "@/components/PageHero";
import { RoomCard } from "@/components/RoomCard";
import { mattressNote, rooms, stayFacts } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { hasPhone, phoneHref } from "@/lib/links";

export const metadata = pageMeta({
  title: "Rooms in Rameshwaram",
  description:
    "Two SHA King Rooms and four SHA Queen Rooms at SHA Stays, a peaceful boutique stay in Rameshwaram. Comfortable beds, private bathrooms, air conditioning and easy road access.",
  path: "/rooms",
});

export default function RoomsPage() {
  return (
    <>
      <PageHero eyebrow="Six rooms" title="Simple Rooms. Comfortable Stays." crumb="Rooms" path="/rooms">
        We keep things simple: clean, comfortable rooms, thoughtful essentials and a peaceful place to rest after exploring Rameshwaram. There are two SHA King Rooms and four SHA Queen Rooms.
      </PageHero>
      <section className="py-16 md:py-20">
        <Container className="space-y-6">
          {rooms.map((room) => (
            <RoomCard key={room.slug} room={room} featured heading="h2" />
          ))}
        </Container>
      </section>
      <section className="pb-16">
        <Container>
          <dl className="grid gap-4 sm:grid-cols-3">
            {stayFacts.map((fact) => (
              <div key={fact.label} className="rounded-[1.5rem] bg-paper px-6 py-6 ring-1 ring-line">
                <dt className="text-sm text-muted">{fact.label}</dt>
                <dd className="mt-1 font-serif text-3xl text-forest">{fact.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">{mattressNote}</p>
          <div className="mt-10 rounded-[1.75rem] bg-forest px-8 py-10 text-ivory">
            <h2 className="font-serif text-4xl text-white md:text-5xl">Find Your Room</h2>
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
      <FinalCta />
    </>
  );
}
