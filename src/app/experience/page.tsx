import { ButtonLink, TextLink } from "@/components/Buttons";
import { Container } from "@/components/Container";
import { LazyImage } from "@/components/LazyImage";
import { FinalCta } from "@/components/FinalCta";
import { PageHero } from "@/components/PageHero";
import { pageMeta } from "@/lib/seo";
import { places } from "@/lib/site";
import { cx } from "@/lib/links";

export const metadata = pageMeta({
  title: "Places to Visit in Rameshwaram",
  description:
    "A short guide to places to visit in Rameshwaram from SHA Stays: Ramanathaswamy Temple, the Abdul Kalam Memorial, Pamban Bridge, Dhanushkodi and Ariyaman Beach.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <>
      <PageHero eyebrow="Explore from SHA Stays" title="Places to Visit in Rameshwaram" crumb="Rameshwaram" path="/experience">
        From sacred temples to India&apos;s island history, Rameshwaram has stories around every corner. Stay with us and explore the places that make this destination unforgettable.
      </PageHero>
      <section className="py-16 md:py-24">
        <Container className="space-y-16 md:space-y-24">
          {places.map((place, index) => {
            const flip = index % 2 === 1;
            return (
              <article
                key={place.slug}
                id={place.slug}
                className="reveal grid scroll-mt-28 items-center gap-8 lg:grid-cols-2 lg:gap-14"
              >
                {place.photo ? (
                  <div className={cx("relative aspect-[4/3] overflow-hidden rounded-panel bg-sand", flip && "lg:order-2")}>
                    <LazyImage
                      src={place.photo.src}
                      alt={place.photo.alt}
                      fill
                      className={cx("object-cover", place.photo.fit)}
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                  </div>
                ) : (
                  <div className={cx("flex aspect-[4/3] flex-col justify-end rounded-panel bg-sand p-8", flip && "lg:order-2")}>
                    <p className="eyebrow text-terracotta-ink">On the island</p>
                    <p className="mt-4 max-w-xs font-serif text-4xl leading-tight text-forest">
                      A quieter place to slow down.
                    </p>
                  </div>
                )}
                <div>
                  <p className="eyebrow text-terracotta-deep">
                    0{index + 1}
                    {place.distance ? ` · ${place.distance}` : null}
                  </p>
                  <h2 className="mt-3 font-serif text-4xl text-forest md:text-5xl">{place.name}</h2>
                  <p className="mt-4 text-lg leading-relaxed text-muted">{place.description}</p>
                  {place.details ? <p className="mt-4 leading-relaxed text-muted">{place.details}</p> : null}
                  {place.slug === "abdul-kalam-memorial" ? (
                    <div className="mt-5">
                      <TextLink href="/location">Staying near the memorial</TextLink>
                    </div>
                  ) : null}
                </div>
              </article>
            );
          })}
          <p className="text-xs text-muted">Landmark photographs show Rameshwaram, via Wikimedia Commons.</p>
        </Container>
      </section>
      <section className="pb-20 md:pb-28">
        <Container>
          <div className="grid gap-8 rounded-panel bg-sand/60 p-7 md:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <h2 className="font-serif text-4xl leading-[1.05] text-forest md:text-5xl">Planning a family or temple trip?</h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
                SHA Stays is a comfortable base for all of this: near the Abdul Kalam Memorial, about 5 km from the temple, with free parking for your car or travelling vehicle.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <ButtonLink href="/rooms" variant="forest">
                See the Rooms
              </ButtonLink>
              <TextLink href="/private-resort">Private group stay for families and groups</TextLink>
              <TextLink href="/location">Location and directions</TextLink>
            </div>
          </div>
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
