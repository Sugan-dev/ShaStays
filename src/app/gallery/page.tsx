import { Container } from "@/components/Container";
import { FinalCta } from "@/components/FinalCta";
import { PageHero } from "@/components/PageHero";
import { PhotoGrid } from "@/components/PhotoGrid";
import { pageMeta } from "@/lib/seo";
import { galleryGroups } from "@/lib/site";

export const metadata = pageMeta({
  title: "Gallery",
  description:
    "Photographs of the rooms, garden and amenities at SHA Stays, a six-room boutique stay in Rameshwaram.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="SHA Stays" title="Gallery" crumb="Gallery" path="/gallery">
        Rooms, the garden outside, and a few of the comforts around the stay.
      </PageHero>
      {galleryGroups.map((group) => (
        <section key={group.id} className="py-16 md:py-20" id={group.id}>
          <Container>
            <h2 className="font-serif text-4xl text-forest md:text-5xl">{group.title}</h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">{group.text}</p>
            <div className="mt-10">
              <PhotoGrid photos={group.photos} />
            </div>
          </Container>
        </section>
      ))}
      <FinalCta />
    </>
  );
}
