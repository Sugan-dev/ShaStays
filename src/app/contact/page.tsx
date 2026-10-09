import { ButtonLink } from "@/components/Buttons";
import { Container } from "@/components/Container";
import { InquiryForm } from "@/components/InquiryForm";
import { PageHero } from "@/components/PageHero";
import Link from "next/link";
import { contact, languages, site, stayFacts } from "@/lib/site";
import {
  displayEmail,
  displayWhatsapp,
  hasInstagram,
  hasPhone,
  hasWhatsapp,
  phoneHref,
  whatsappAvailability,
  whatsappHref,
} from "@/lib/links";

import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Contact Us: Phone, WhatsApp & Directions",
  description:
    "Contact SHA Stays in Rameshwaram for rooms, availability and directions. Call, WhatsApp or email a peaceful boutique stay near the Abdul Kalam Memorial.",
  path: "/contact",
});

const linkClass = "underline decoration-transparent underline-offset-4 hover:decoration-current";

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="We'd love to welcome you" title="Contact SHA Stays, Rameshwaram" crumb="Contact" path="/contact">
        Planning your Rameshwaram trip? Have a question about rooms, availability or directions? Get in touch with us.
      </PageHero>
      <section className="py-16 md:py-20" id="details">
        <Container className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <address className="not-italic">
              <p className="font-serif text-4xl text-forest">{site.name}</p>
              {contact.addressLines.map((line) => (
                <p key={line} className="text-lg text-muted">
                  {line}
                </p>
              ))}
              <dl className="mt-8 space-y-5">
                <div>
                  <dt className="eyebrow text-terracotta-deep">Phone</dt>
                  <dd className="mt-1 text-lg">
                    <a href={phoneHref()} className={linkClass}>
                      {contact.phoneDisplay}
                    </a>
                    {" / "}
                    <a href={phoneHref(contact.phoneAlt)} className={linkClass}>
                      {contact.phoneAltDisplay}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-terracotta-deep">WhatsApp</dt>
                  <dd className="mt-1 text-lg">
                    <a href={whatsappHref(whatsappAvailability)} className={linkClass} target="_blank" rel="noopener noreferrer">
                      {displayWhatsapp()}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-terracotta-deep">Email</dt>
                  <dd className="mt-1 text-lg">
                    <a href={`mailto:${contact.email}`} className={linkClass}>
                      {displayEmail()}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-terracotta-deep">Languages</dt>
                  <dd className="mt-1 text-lg">We speak {languages.join(" and ")}</dd>
                </div>
                <div>
                  <dt className="eyebrow text-terracotta-deep">Check-in / Check-out</dt>
                  <dd className="mt-1 text-lg">
                    {stayFacts
                      .filter((fact) => fact.label !== "Rooms")
                      .map((fact) => `${fact.label} ${fact.value}`)
                      .join(" · ")}
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-terracotta-deep">Reception</dt>
                  <dd className="mt-1 text-lg">Open 24 hours; late arrivals are welcome</dd>
                </div>
                {hasInstagram() ? (
                  <div>
                    <dt className="eyebrow text-terracotta-deep">Instagram</dt>
                    <dd className="mt-1 text-lg">
                      <a href={contact.instagram} className={linkClass} target="_blank" rel="noopener noreferrer">
                        Follow SHA Stays
                        <span className="sr-only"> on Instagram (opens in a new tab)</span>
                      </a>
                    </dd>
                  </div>
                ) : null}
              </dl>
            </address>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink
                href={hasWhatsapp() ? whatsappHref(whatsappAvailability) : "#enquiry"}
                variant="forest"
                external={hasWhatsapp()}
                icon="whatsapp"
              >
                WhatsApp Us
              </ButtonLink>
              <ButtonLink href={hasPhone() ? phoneHref() : "#enquiry"} variant="outline" icon="phone">
                Call Us
              </ButtonLink>
              <ButtonLink href={contact.directionsUrl} variant="sand" external icon="pin">
                Get Directions
              </ButtonLink>
            </div>
            <div className="mt-10 border-t border-line pt-8">
              <h2 className="font-serif text-3xl text-forest">How booking works</h2>
              <p className="mt-3 max-w-xl leading-relaxed text-muted">
                Book directly with us. Send your dates and number of guests on WhatsApp, by phone or with the form, and we
                reply with availability and the rate for your dates. An enquiry does not reserve a room until we confirm it;
                a room booking is confirmed with a 30% advance, paid by UPI or cash. Cancel 7 or more days before check-in
                for a full refund of the advance.
                Travelling as a group?{" "}
                <Link href="/private-resort" className="text-forest underline underline-offset-4">
                  Ask about booking the entire property
                </Link>
                .
              </p>
            </div>
          </div>
          <div id="enquiry">
            <h2 className="mb-5 font-serif text-3xl text-forest">Message us on WhatsApp</h2>
            <InquiryForm />
          </div>
        </Container>
      </section>
    </>
  );
}
