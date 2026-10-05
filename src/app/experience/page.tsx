import { Container } from "@/components/Container";
import { LazyImage } from "@/components/LazyImage";
import { FinalCta } from "@/components/FinalCta";
import { PageHero } from "@/components/PageHero";
import { pageMeta } from "@/lib/seo";
import { places } from "@/lib/site";
import { cx } from "@/lib/links";

export const metadata = pageMeta({
  title: "Explore Rameshwaram",
  description:
    "Stay at SHA Stays and explore Ramanathaswamy Temple, the Abdul Kalam Memorial, Pamban Bridge, Dhanushkodi and the rest of Rameshwaram Island.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <>
      <PageHero eyebrow="The island" title="Rameshwaram Starts Here." crumb="Experience" path="/experience">
        From sacred temples to India&apos;s island history, Rameshwaram has stories around every corner. Stay with us and explore the places that make this destination unforgettable.
      </PageHero>
      <section className="py-16 md:py-20">
        <Container className="space-y-16">
          {places.map((place, index) => {
            const flip = index % 2 === 1;
            return (
              <article
                key={place.slug}
                id={place.slug}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
              >
                {place.photo ? (
                  <div className={cx("relative aspect-[4/3] overflow-hidden rounded-[1.75rem]", flip && "lg:order-2")}>
                    <LazyImage
                      src={place.photo.src}
                      alt={place.photo.alt}
                      fill
                      className={cx("object-cover", place.photo.fit)}
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                  </div>
                ) : (
                  <div className={cx("flex aspect-[4/3] flex-col justify-end rounded-[1.75rem] bg-sand p-8", flip && "lg:order-2")}>
                    <p className="text-xs tracking-[0.2em] text-terracotta-ink uppercase">On the island</p>
                    <p className="mt-4 max-w-xs font-serif text-4xl leading-tight text-forest">
                      A quieter place to slow down.
                    </p>
                  </div>
                )}
                <div>
                  <p className="text-xs font-medium tracking-[0.2em] text-terracotta-deep uppercase">
                    0{index + 1}
                  </p>
                  <h2 className="mt-3 font-serif text-4xl text-forest md:text-5xl">{place.name}</h2>
                  <p className="mt-4 text-lg leading-relaxed text-muted">{place.description}</p>
                </div>
              </article>
            );
          })}
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
