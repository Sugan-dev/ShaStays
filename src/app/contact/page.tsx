import { ButtonLink } from "@/components/Buttons";
import { Container } from "@/components/Container";
import { InquiryForm } from "@/components/InquiryForm";
import { PageHero } from "@/components/PageHero";
import { contact, site } from "@/lib/site";
import {
  displayEmail,
  displayWhatsapp,
  hasPhone,
  hasWhatsapp,
  phoneHref,
  whatsappGreeting,
  whatsappHref,
} from "@/lib/links";

import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Contact SHA Stays",
  description:
    "Contact SHA Stays in Rameshwaram for rooms, availability and directions. Call, WhatsApp or email a peaceful boutique stay near the Abdul Kalam Memorial.",
  path: "/contact",
});

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
            <dl className="mt-8 space-y-4">
              <div>
                <dt className="text-xs tracking-[0.18em] text-terracotta-deep uppercase">Phone</dt>
                <dd className="mt-1 text-lg">
                  <a href={phoneHref()} className="underline decoration-transparent underline-offset-4 hover:decoration-current">
                    {contact.phoneDisplay}
                  </a>
                  {" / "}
                  <a href={phoneHref(contact.phoneAlt)} className="underline decoration-transparent underline-offset-4 hover:decoration-current">
                    {contact.phoneAltDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs tracking-[0.18em] text-terracotta-deep uppercase">WhatsApp</dt>
                <dd className="mt-1 text-lg">
                  <a
                    href={whatsappHref(whatsappGreeting)}
                    className="underline decoration-transparent underline-offset-4 hover:decoration-current"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {displayWhatsapp()}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs tracking-[0.18em] text-terracotta-deep uppercase">Email</dt>
                <dd className="mt-1 text-lg">
                  <a href={`mailto:${contact.email}`} className="underline decoration-transparent underline-offset-4 hover:decoration-current">
                    {displayEmail()}
                  </a>
                </dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={hasPhone() ? phoneHref() : "#enquiry"} variant="forest">
                Call Us
              </ButtonLink>
              <ButtonLink
                href={hasWhatsapp() ? whatsappHref(whatsappGreeting) : "#enquiry"}
                variant="outline"
                external={hasWhatsapp()}
              >
                WhatsApp Us
              </ButtonLink>
              <ButtonLink href={contact.directionsUrl} variant="sand" external>
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
