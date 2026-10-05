import { Container } from "@/components/Container";
import { InquiryForm } from "@/components/InquiryForm";
import { PageHero } from "@/components/PageHero";
import { pageMeta } from "@/lib/seo";

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
          </div>
          <InquiryForm />
        </Container>
      </section>
    </>
  );
}
