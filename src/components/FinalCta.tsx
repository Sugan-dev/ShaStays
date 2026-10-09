import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/Buttons";
import { whatsappAvailability, whatsappHref, hasWhatsapp } from "@/lib/links";

export function FinalCta() {
  return (
    <section className="bg-forest text-ivory">
      <Container className="py-20 md:py-28">
        <div className="reveal max-w-3xl">
          <p className="eyebrow text-sand">SHA Stays · Rameshwaram</p>
          <h2 className="mt-4 font-serif text-5xl leading-[1.02] text-white md:text-7xl">Ready for Rameshwaram?</h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-sand/90">
            Choose your room, plan your visit and stay close to the places that matter.
          </p>
          <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
            <ButtonLink href="/book" variant="terracotta">
              Book Your Stay
            </ButtonLink>
            <ButtonLink
              href={whatsappHref(whatsappAvailability)}
              variant="ivory"
              external={hasWhatsapp()}
              icon="whatsapp"
            >
              WhatsApp Us
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
