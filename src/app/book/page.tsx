import Link from "next/link";
import { ButtonLink } from "@/components/Buttons";
import { Container } from "@/components/Container";
import { Icon } from "@/components/Icon";
import { InquiryForm } from "@/components/InquiryForm";
import { PageHero } from "@/components/PageHero";
import { pageMeta } from "@/lib/seo";
import { hasWhatsapp, whatsappAvailability, whatsappHref } from "@/lib/links";

export const metadata = pageMeta({
  title: "Book Your Stay",
  description:
    "Check availability at SHA Stays, a peaceful boutique stay in Rameshwaram near the Abdul Kalam Memorial and about 5 km from Ramanathaswamy Temple. An enquiry does not reserve a room.",
  path: "/book",
});

export default function BookPage() {
  return (
    <>
      <PageHero eyebrow="Direct booking" title="Book Your Stay" crumb="Book" path="/book">
        SHA Stays is your peaceful boutique stay in Rameshwaram — close to the places you came to discover, and comfortable enough to feel at home.
      </PageHero>
      <section className="py-16 md:py-20">
        <Container className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="font-serif text-4xl text-forest">Tell us your dates</h2>
            <p className="mt-4 leading-relaxed text-muted">
              Share when you&apos;d like to stay and which room you have in mind. The form opens WhatsApp with your enquiry, and we&apos;ll confirm what&apos;s available personally.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted">
              <li>Check-in: 12:00 PM</li>
              <li>Check-out: 11:00 AM</li>
              <li>Two SHA King Rooms and four SHA Queen Rooms</li>
            </ul>
            <div className="mt-8">
              <ButtonLink
                href={whatsappHref(whatsappAvailability)}
                variant="outline"
                external={hasWhatsapp()}
                icon="whatsapp"
              >
                Prefer to chat? WhatsApp Us
              </ButtonLink>
            </div>
            <Link
              href="/private-resort"
              className="group mt-8 flex items-start gap-4 rounded-card border border-line bg-paper p-5 transition hover:border-forest/30"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-sand/70 text-forest">
                <Icon name="users" />
              </span>
              <span>
                <span className="block font-medium text-forest">Travelling as a group?</span>
                <span className="mt-1 block text-sm leading-relaxed text-muted">
                  Book the entire property as a private stay for your family, friends or tour group.
                </span>
              </span>
              <Icon name="arrow" className="mt-2 ml-auto h-4 w-4 shrink-0 text-forest transition-transform motion-safe:group-hover:translate-x-1" />
            </Link>
          </div>
          <InquiryForm />
        </Container>
      </section>
    </>
  );
}
