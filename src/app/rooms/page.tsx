import { ButtonLink, TextLink } from "@/components/Buttons";
import { Container } from "@/components/Container";
import { FinalCta } from "@/components/FinalCta";
import { PageHero } from "@/components/PageHero";
import { RoomCard } from "@/components/RoomCard";
import Link from "next/link";
import {
  formatRupees,
  mattressNote,
  policies,
  propertyAmenities,
  roomSize,
  rooms,
  sharedAmenities,
  stayFacts,
  type Room,
} from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { hasWhatsapp, whatsappAvailability, whatsappHref } from "@/lib/links";
import { AmenityList } from "@/components/AmenityList";

const comparison: { label: string; value: (room: Room) => string }[] = [
  { label: "Bed", value: (room) => room.bed },
  { label: "Rooms of this type", value: (room) => room.countLabel },
  { label: "Sleeps", value: (room) => `Up to ${room.maxGuests} guests (with extra mattresses)` },
  { label: "Room size", value: () => roomSize.label },
  { label: "Price", value: (room) => `From ${formatRupees(room.priceFrom)} / night` },
  { label: "In the room", value: () => sharedAmenities.map((item) => item.label).join(", ") },
];

export const metadata = pageMeta({
  title: "Rooms in Rameshwaram: King & Queen Rooms",
  description:
    "Rooms in Rameshwaram from ₹1,800 a night: SHA Queen Rooms sleep 4, SHA King Rooms sleep 5. AC, private bathroom, Wi-Fi, power backup and 24-hour CCTV.",
  path: "/rooms",
});

export default function RoomsPage() {
  return (
    <>
      <PageHero eyebrow="Six rooms at SHA Stays" title="Rooms in Rameshwaram" crumb="Rooms" path="/rooms">
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
      <section className="pb-16 md:pb-20" aria-labelledby="compare-rooms">
        <Container>
          <h2 id="compare-rooms" className="font-serif text-3xl text-forest md:text-4xl">
            Compare the rooms
          </h2>
          <div className="mt-6 overflow-x-auto rounded-panel border border-line bg-paper">
            <table className="w-full min-w-[32rem] text-left text-sm">
              <caption className="sr-only">SHA King Room and SHA Queen Room compared</caption>
              <thead>
                <tr className="border-b border-line">
                  <th scope="col" className="p-4 font-medium text-muted md:px-6">
                    <span className="sr-only">Detail</span>
                  </th>
                  {rooms.map((room) => (
                    <th key={room.slug} scope="col" className="p-4 font-serif text-xl font-medium text-forest md:px-6">
                      <Link href={`/rooms/${room.slug}`} className="underline decoration-transparent underline-offset-4 hover:decoration-current">
                        {room.name}
                      </Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {comparison.map((row) => (
                  <tr key={row.label}>
                    <th scope="row" className="p-4 font-medium text-charcoal md:px-6">
                      {row.label}
                    </th>
                    {rooms.map((room) => (
                      <td key={room.slug} className="p-4 text-muted md:px-6">
                        {row.value(room)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Rates are starting prices per night and vary by date; we confirm the rate with availability when you enquire.
          </p>
        </Container>
      </section>
      <section className="pb-20 md:pb-28">
        <Container className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-panel border border-line bg-paper p-7 md:p-10">
            <h2 className="font-serif text-3xl text-forest md:text-4xl">In every room</h2>
            <AmenityList amenities={sharedAmenities} className="mt-6" />
            <h3 className="mt-8 font-serif text-2xl text-forest">Around the property</h3>
            <AmenityList amenities={propertyAmenities} className="mt-4" />
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted">{mattressNote}</p>
            <h3 className="mt-8 font-serif text-2xl text-forest">House policies</h3>
            <dl className="mt-4 divide-y divide-line border-y border-line text-sm">
              {policies.map((policy) => (
                <div key={policy.label} className="grid grid-cols-[8rem_1fr] gap-4 py-3">
                  <dt className="font-medium text-charcoal">{policy.label}</dt>
                  <dd className="text-muted">{policy.value}</dd>
                </div>
              ))}
            </dl>
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
            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-sm leading-relaxed text-sand/90">Travelling as a family or group of up to 21?</p>
              <div className="mt-2">
                <TextLink href="/private-resort" light>
                  Book all six rooms as a private group stay
                </TextLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
