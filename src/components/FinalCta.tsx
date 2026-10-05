import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/Buttons";
import { whatsappGreeting, whatsappHref, hasWhatsapp } from "@/lib/links";

export function FinalCta() {
  return (
    <section className="bg-forest text-ivory">
      <Container className="py-20 md:py-28">
        <p className="text-xs font-medium tracking-[0.22em] text-sand uppercase">
          SHA Stays · Rameshwaram
        </p>
        <h2 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.02] text-white md:text-7xl">
          Ready to Experience Rameshwaram?
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-sand/90">
          Choose your dates, pack your bags and let SHA Stays be your comfortable base on the island.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/book" variant="terracotta">
            Book Your Stay
          </ButtonLink>
          <ButtonLink
            href={whatsappHref(whatsappGreeting)}
            variant="ghost"
            external={hasWhatsapp()}
          >
            WhatsApp Us
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
