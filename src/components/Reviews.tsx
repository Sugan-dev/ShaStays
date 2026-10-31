import { ButtonLink } from "@/components/Buttons";
import { Container } from "@/components/Container";
import { ReviewSlider } from "@/components/ReviewSlider";
import { SectionIntro } from "@/components/SectionIntro";
import { reviews } from "@/lib/site";

export function Reviews() {
  return (
    <section className="py-20 md:py-28" aria-labelledby="reviews-title">
      <Container>
        {reviews.length > 0 ? (
          <>
            <SectionIntro eyebrow="Guest reviews" title={<span id="reviews-title">Loved by travellers visiting Rameshwaram.</span>}>
              From guests on Google, Booking.com and Agoda. Each score is shown as that site published it.
            </SectionIntro>
            <ReviewSlider reviews={reviews} />
          </>
        ) : (
          <div className="reveal grid items-center gap-8 rounded-panel border border-line bg-paper px-7 py-12 md:grid-cols-[1.4fr_1fr] md:px-12">
            <div>
              <p className="eyebrow text-terracotta-deep">Guest stories</p>
              <h2 id="reviews-title" className="mt-3 font-serif text-4xl leading-tight text-forest md:text-5xl">
                Your stay could be our next story.
              </h2>
              <p className="mt-4 max-w-lg leading-relaxed text-muted">
                SHA Stays is a small, six-room stay in Rameshwaram. Come and stay with us, then tell other travellers how it went.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <ButtonLink href="/book">Book Your Stay</ButtonLink>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
