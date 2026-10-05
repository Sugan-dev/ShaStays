import Link from "next/link";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { contact, footerNav, photoCredits, site } from "@/lib/site";
import { displayEmail, displayPhone, displayWhatsapp, phoneHref, whatsappHref, whatsappBooking, whatsappGreeting, hasPhone, hasWhatsapp, hasEmail } from "@/lib/links";

export function SiteFooter() {
  return (
    <footer className="bg-forest-deep text-sand">
      <Container className="grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo tone="ivory" />
          <p className="mt-6 max-w-sm font-serif text-4xl leading-tight text-ivory">
            {site.tagline}
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-sand/80">
            {site.supporting}
          </p>
        </div>
        <nav className="md:col-span-3" aria-label="Footer">
          <p className="text-xs font-medium tracking-[0.2em] text-sand uppercase">
            Explore
          </p>
          <ul className="mt-4 space-y-2">
            {footerNav.map((item) => (
              <li key={item.href}>
                {item.href === "/book" ? (
                  <a
                    href={whatsappHref(whatsappBooking)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ivory/90 hover:text-white"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link href={item.href} className="text-sm text-ivory/90 hover:text-white">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-4">
          <p className="text-xs font-medium tracking-[0.2em] text-sand uppercase">
            Visit
          </p>
          <p className="mt-4 font-serif text-2xl text-ivory">{site.name}</p>
          {contact.addressLines.map((line) => (
            <p key={line} className="text-sm text-sand/85">
              {line}
            </p>
          ))}
          <ul className="mt-4 space-y-1 text-sm">
            <li>
              {hasPhone() ? (
                <span>
                  <a href={phoneHref()} className="hover:text-white">
                    {contact.phoneDisplay}
                  </a>
                  {" / "}
                  <a href={phoneHref(contact.phoneAlt)} className="hover:text-white">
                    {contact.phoneAltDisplay}
                  </a>
                </span>
              ) : (
                <span>{displayPhone()}</span>
              )}
            </li>
            <li>
              {hasWhatsapp() ? (
                <a
                  href={whatsappHref(whatsappGreeting)}
                  className="hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp {displayWhatsapp()}
                </a>
              ) : (
                <span>WhatsApp {displayWhatsapp()}</span>
              )}
            </li>
            <li>
              {hasEmail() ? (
                <a href={`mailto:${contact.email}`} className="hover:text-white">
                  {displayEmail()}
                </a>
              ) : (
                <span>{displayEmail()}</span>
              )}
            </li>
          </ul>
        </div>
      </Container>
      <Container className="border-t border-white/10 py-6">
        <p className="text-xs text-sand">© 2026 SHA Stays. All rights reserved.</p>
        <p className="mt-3 max-w-4xl text-xs leading-relaxed text-sand/90">
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
