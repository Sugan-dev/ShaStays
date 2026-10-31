"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Icon } from "@/components/Icon";
import { cx } from "@/lib/links";
import type { Review } from "@/lib/site";

const cardHeight = "h-[23rem]";

export function ReviewSlider({ reviews }: { reviews: Review[] }) {
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const listId = useId();

  function updateEnds() {
    const el = scrollerRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }

  useEffect(() => {
    updateEnds();
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateEnds, { passive: true });
    const observer = new ResizeObserver(updateEnds);
    observer.observe(el);
    return () => {
      el.removeEventListener("scroll", updateEnds);
      observer.disconnect();
    };
  }, [reviews.length]);

  function scrollByCard(direction: -1 | 1) {
    const el = scrollerRef.current;
    const card = el?.querySelector("li");
    if (!el || !card) return;
    const gap = Number.parseFloat(getComputedStyle(el).columnGap) || 0;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: reduce ? "auto" : "smooth",
    });
  }

  return (
    <div className="mt-12">
      <div className="mb-4 flex justify-end gap-2">
        <button
          type="button"
          aria-label="Previous reviews"
          aria-controls={listId}
          disabled={!canPrev}
          onClick={() => scrollByCard(-1)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-forest transition hover:border-forest disabled:pointer-events-none disabled:opacity-35"
        >
          <Icon name="arrow" className="rotate-180" />
        </button>
        <button
          type="button"
          aria-label="Next reviews"
          aria-controls={listId}
          disabled={!canNext}
          onClick={() => scrollByCard(1)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-forest transition hover:border-forest disabled:pointer-events-none disabled:opacity-35"
        >
          <Icon name="arrow" />
        </button>
      </div>
      <ul
        id={listId}
        ref={scrollerRef}
        aria-label="Guest reviews"
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((review) => (
          <ReviewCard key={`${review.name}-${review.source}-${review.date ?? ""}`} review={review} />
        ))}
      </ul>
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [overflows, setOverflows] = useState(false);
  const expandedRef = useRef(expanded);
  expandedRef.current = expanded;

  function toggle() {
    setExpanded((open) => !open);
  }

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const measure = () => {
      if (!el.isConnected || expandedRef.current) return;
      setOverflows(el.scrollHeight > el.clientHeight + 1);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    el.querySelectorAll("p, blockquote").forEach((node) => observer.observe(node));
    document.fonts.ready.then(() => requestAnimationFrame(measure));
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [review.text, review.title, review.improve]);

  const body = (
    <>
      {review.title ? <p className="font-medium text-charcoal">{review.title}</p> : null}
      <blockquote className={cx("whitespace-pre-line font-serif text-xl leading-snug text-forest", review.title && "mt-3")}>
        &ldquo;{review.text}&rdquo;
      </blockquote>
      {review.improve ? <p className="mt-3 text-sm leading-relaxed text-muted">What they would improve: {review.improve}</p> : null}
    </>
  );

  return (
    <li className={cx("flex w-[86%] shrink-0 snap-start flex-col sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]", expanded ? "h-auto min-h-[23rem]" : cardHeight)}>
      <article className="flex h-full flex-col rounded-card border border-line bg-paper p-7">
        <ReviewScore review={review} />
        <div className="mt-4 flex min-h-0 flex-1 flex-col">
          <div
            ref={contentRef}
            onClick={overflows ? toggle : undefined}
            className={cx(!expanded && "min-h-0 flex-1 overflow-hidden", overflows && "cursor-pointer")}
          >
            {body}
          </div>
          {overflows ? (
            <button
              type="button"
              aria-expanded={expanded}
              onClick={toggle}
              className="mt-3 self-start text-sm font-medium text-terracotta-deep underline-offset-4 hover:underline"
            >
              {expanded ? "Show less" : "Read more"}
            </button>
          ) : null}
        </div>
        <p className="mt-6 text-sm text-muted">
          <span className="font-medium text-charcoal">{review.name}</span>
          {review.date ? ` · ${review.date}` : null}
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
      </article>
    </li>
  );
}

function ReviewScore({ review }: { review: Review }) {
  if (review.score) {
    return (
      <p className="flex h-9 items-center font-sans text-3xl font-medium leading-none tracking-tight text-forest">
        {review.score}
        <span className="sr-only">
          {" "}
          out of {review.scoreOutOf ?? 10} on {review.source}
        </span>
      </p>
    );
  }

  if (!review.rating) return <p className="h-9" />;

  return (
    <p className="flex h-9 items-center gap-1 text-terracotta-deep">
      {Array.from({ length: 5 }, (_, i) => (
        <Icon key={i} name="star" className={i < Math.round(review.rating ?? 0) ? "fill-current" : "opacity-30"} />
      ))}
      <span className="sr-only">Rated {review.rating} out of 5</span>
    </p>
  );
}
