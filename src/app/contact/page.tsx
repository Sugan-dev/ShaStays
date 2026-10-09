import { ButtonLink } from "@/components/Buttons";
import { Container } from "@/components/Container";
import { InquiryForm } from "@/components/InquiryForm";
import { PageHero } from "@/components/PageHero";
import { contact, site } from "@/lib/site";
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
  title: "Contact SHA Stays",
  description:
    "Contact SHA Stays in Rameshwaram for rooms, availability and directions. Call, WhatsApp or email a peaceful boutique stay near the Abdul Kalam Memorial.",
  path: "/contact",
});

const linkClass = "underline decoration-transparent underline-offset-4 hover:decoration-current";

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="SHA Stays" title="We'd Love to Welcome You." crumb="Contact" path="/contact">
        Planning your Rameshwaram trip? Have a question about rooms, availability or directions? Get in touch with us.
      </PageHero>
      <section className="py-16 md:py-20" id="details">
        <Container className="grid items-start gap-12 lg:grid-cols-2">
          <div>
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
