import type { Metadata } from "next";
import { ButtonLink } from "@/components/Buttons";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="py-24">
      <Container className="max-w-2xl">
        <p className="eyebrow text-terracotta-deep">
          SHA Stays
        </p>
        <h1 className="mt-4 font-serif text-5xl text-forest md:text-7xl">
          This page has wandered off.
        </h1>
        <p className="mt-5 text-lg text-muted">
          The stay is still here. Head back home, or look through the rooms.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/" variant="forest">
            Back to Home
          </ButtonLink>
          <ButtonLink href="/rooms" variant="outline">
            Explore Rooms
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
