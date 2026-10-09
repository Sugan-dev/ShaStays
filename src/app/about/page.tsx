import { TextLink } from "@/components/Buttons";
import { Container } from "@/components/Container";
import { FinalCta } from "@/components/FinalCta";
import { PageHero } from "@/components/PageHero";
import { PhotoGrid } from "@/components/PhotoGrid";
import { pageMeta } from "@/lib/seo";
import { aboutPhotos, pillars } from "@/lib/site";

export const metadata = pageMeta({
  title: "About Our Six-Room Stay in Rameshwaram",
  description:
    "SHA Stays is a six-room boutique stay in Rameshwaram near the Abdul Kalam Memorial, created for travellers who want comfort, easy access and a calmer place to rest.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Our story" title="About SHA Stays" crumb="About" path="/about">
        SHA Stays was created with a simple idea: make staying in Rameshwaram comfortable, peaceful and easy.
      </PageHero>
      <section className="py-16 md:py-20">
        <Container className="max-w-3xl space-y-5 text-lg leading-relaxed text-charcoal/85">
          <p>
            Instead of trying to be a large hotel, we chose to create a smaller, more personal stay where guests can slow down, rest well and spend more time experiencing Rameshwaram.
          </p>
          <p>
            With six rooms and a convenient location near the Abdul Kalam Memorial, SHA Stays is designed for travellers who value comfort, accessibility and a relaxed atmosphere.
          </p>
          <p className="pt-6 font-serif text-3xl leading-snug text-forest italic md:text-4xl">
            Come as a traveller. Leave with memories of Rameshwaram.
          </p>
        </Container>
      </section>
      <section className="pb-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <h2 className="font-serif text-4xl text-forest md:text-5xl">A look around</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                A few of the rooms, the garden outside, and the comforts around the stay.
              </p>
            </div>
            <TextLink href="/gallery">See the gallery</TextLink>
          </div>
          <div className="mt-10">
            <PhotoGrid photos={aboutPhotos} />
          </div>
        </Container>
      </section>
      <section className="pb-20">
        <Container className="grid gap-5 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="rounded-panel bg-sand/70 p-8">
              <h2 className="font-serif text-4xl text-forest">{pillar.title}</h2>
              <p className="mt-3 text-lg text-charcoal/80">{pillar.text}</p>
            </article>
          ))}
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
