import { ButtonLink } from "@/components/Buttons";
import { Container } from "@/components/Container";
import { Icon } from "@/components/Icon";
import { SectionIntro } from "@/components/SectionIntro";
import { reviews } from "@/lib/site";

export function Reviews() {
  return (
    <section className="py-20 md:py-28" aria-labelledby="reviews-title">
      <Container>
        {reviews.length > 0 ? (
          <>
            <SectionIntro eyebrow="Guest reviews" title={<span id="reviews-title">Loved by travellers visiting Rameshwaram.</span>} />
            <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review) => (
                <li key={`${review.name}-${review.source}-${review.date ?? ""}`} className="reveal flex flex-col rounded-card border border-line bg-paper p-7">
                  {review.rating ? (
                    <p className="flex items-center gap-1 text-terracotta-deep">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Icon key={i} name="star" className={i < Math.round(review.rating ?? 0) ? "fill-current" : "opacity-30"} />
                      ))}
                      <span className="sr-only">Rated {review.rating} out of 5</span>
                    </p>
                  ) : null}
                  <blockquote className="mt-4 flex-1 font-serif text-2xl leading-snug text-forest">
                    &ldquo;{review.text}&rdquo;
                  </blockquote>
                  <p className="mt-6 text-sm text-muted">
                    <span className="font-medium text-charcoal">{review.name}</span>
                    {" · "}
                    {review.url ? (
                      <a href={review.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                        {review.source}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ) : (
                      review.source
                    )}
                  </p>
                </li>
              ))}
            </ul>
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
