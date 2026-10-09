import Link from "next/link";
import { ButtonLink } from "@/components/Buttons";
import { Container } from "@/components/Container";
import { Icon } from "@/components/Icon";
import { Logo } from "@/components/Logo";
import { contact, footerNav, photoCredits, site } from "@/lib/site";
import {
  displayEmail,
  displayPhone,
  displayWhatsapp,
  hasEmail,
  hasInstagram,
  hasPhone,
  hasWhatsapp,
  phoneHref,
  whatsappAvailability,
  whatsappHref,
} from "@/lib/links";

const linkClass = "text-sm text-ivory/90 transition hover:text-white";
const headingClass = "eyebrow text-sand";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-deep pb-24 text-sand lg:pb-0">
      <Container className="grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo tone="ivory" />
          <p className="mt-6 max-w-sm font-serif text-4xl leading-tight text-ivory">{site.tagline}</p>
          <p className="mt-3 text-sm text-sand/80">Boutique stay · Rameshwaram, Tamil Nadu</p>
          <div className="mt-7">
            <ButtonLink href="/book" variant="terracotta">
              Book Your Stay
            </ButtonLink>
          </div>
        </div>
        <nav className="md:col-span-3" aria-label="Footer">
          <p className={headingClass}>Explore</p>
          <ul className="mt-4 space-y-2.5">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-4">
          <p className={headingClass}>Visit</p>
          <address className="mt-4 not-italic">
            <p className="font-serif text-2xl text-ivory">{site.name}</p>
            {contact.addressLines.map((line) => (
              <p key={line} className="text-sm text-sand/85">
                {line}
              </p>
            ))}
          </address>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex items-center gap-2.5">
              <Icon name="phone" className="h-4 w-4 text-sand/80" />
              {hasPhone() ? (
                <span>
                  <a href={phoneHref()} className="hover:text-white">
                    {contact.phoneDisplay}
                  </a>
                  {contact.phoneAltDisplay ? (
                    <>
                      {" / "}
                      <a href={phoneHref(contact.phoneAlt)} className="hover:text-white">
                        {contact.phoneAltDisplay}
                      </a>
                    </>
                  ) : null}
                </span>
              ) : (
                <span>{displayPhone()}</span>
              )}
            </li>
            <li className="flex items-center gap-2.5">
              <Icon name="whatsapp" className="h-4 w-4 text-sand/80" />
              {hasWhatsapp() ? (
                <a
                  href={whatsappHref(whatsappAvailability)}
                  className="hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp {displayWhatsapp()}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : (
                <span>WhatsApp {displayWhatsapp()}</span>
              )}
            </li>
            {hasEmail() ? (
              <li className="flex items-center gap-2.5">
                <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-sand/80" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
                  <path d="m4 7 8 6 8-6" strokeLinejoin="round" />
                </svg>
                <a href={`mailto:${contact.email}`} className="break-all hover:text-white">
                  {displayEmail()}
                </a>
              </li>
            ) : null}
            {hasInstagram() ? (
              <li className="flex items-center gap-2.5">
                <Icon name="instagram" className="h-4 w-4 text-sand/80" />
                <a href={contact.instagram} className="hover:text-white" target="_blank" rel="noopener noreferrer">
                  Instagram
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ) : null}
          </ul>
        </div>
      </Container>
      <Container className="border-t border-white/10 py-6">
        <p className="text-xs text-sand">© {year} SHA Stays, Rameshwaram. All rights reserved.</p>
        <p className="mt-3 max-w-4xl text-xs leading-relaxed text-sand/80">
          Landmark photographs via Wikimedia Commons:{" "}
          {photoCredits.map((credit, index) => (
            <span key={credit.sourceUrl}>
              {index > 0 ? "; " : ""}
              <a href={credit.sourceUrl} className="underline decoration-white/20 underline-offset-2 hover:text-sand" target="_blank" rel="noopener noreferrer">
                {credit.title}
              </a>{" "}
              by {credit.author} (
              <a href={credit.licenseUrl} className="underline decoration-white/20 underline-offset-2 hover:text-sand" target="_blank" rel="noopener noreferrer">
                {credit.license}
              </a>
              )
            </span>
          ))}
          . These pictures show Rameshwaram, not the rooms of SHA Stays.
        </p>
      </Container>
    </footer>
  );
}
