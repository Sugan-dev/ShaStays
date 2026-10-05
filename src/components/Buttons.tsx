import Link from "next/link";
import { cx } from "@/lib/links";

const styles = {
  terracotta:
    "bg-terracotta-deep text-white hover:bg-terracotta-ink",
  forest: "bg-forest text-ivory hover:bg-forest-soft",
  ivory: "bg-ivory text-forest hover:bg-white",
  ghost:
    "border border-white/80 bg-[#102822]/80 text-white hover:bg-white hover:text-forest",
  outline:
    "border border-forest/20 text-forest hover:border-forest hover:bg-forest hover:text-ivory",
  sand: "bg-sand text-forest hover:bg-sand-deep",
} as const;

type Variant = keyof typeof styles;

export function ButtonLink({
  href,
  children,
  variant = "terracotta",
  className,
  external,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
}) {
  const classes = cx(
    "inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-[0.95rem] font-medium tracking-wide transition duration-200",
    styles[variant],
    className,
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function TextLink({
  href,
  children,
  light,
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cx(
        "inline-flex items-center gap-2 font-medium underline decoration-transparent underline-offset-4 transition hover:decoration-current",
        light ? "text-sand" : "text-forest",
      )}
    >
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}
