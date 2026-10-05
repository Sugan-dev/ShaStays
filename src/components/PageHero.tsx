import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";

export function PageHero({
  eyebrow,
  title,
  crumb,
  path,
  children,
}: {
  eyebrow: string;
  title: string;
  crumb: string;
  path: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-line bg-paper">
      <Container className="py-16 md:py-24">
        <Breadcrumbs items={[{ name: crumb, path }]} />
        <p className="text-xs font-medium tracking-[0.22em] text-terracotta-deep uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.02] text-forest md:text-7xl">
          {title}
        </h1>
        <div className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{children}</div>
      </Container>
    </section>
  );
}
