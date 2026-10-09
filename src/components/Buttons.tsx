import Link from "next/link";
import { Icon, type IconName } from "@/components/Icon";
import { cx } from "@/lib/links";

const styles = {
  terracotta: "bg-terracotta-deep text-white hover:bg-terracotta-ink",
  forest: "bg-forest text-ivory hover:bg-forest-soft",
  ivory: "bg-ivory text-forest hover:bg-white",
  ghost: "border border-white/70 bg-forest-deep/50 text-white hover:bg-white hover:text-forest",
  outline: "border border-forest/25 text-forest hover:border-forest hover:bg-forest hover:text-ivory",
  sand: "bg-sand text-forest hover:bg-sand-deep",
} as const;

export type ButtonVariant = keyof typeof styles;

export const buttonBase =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-[0.95rem] font-medium tracking-wide transition duration-200";

export function buttonClass(variant: ButtonVariant = "terracotta", className?: string) {
  return cx(buttonBase, styles[variant], className);
}

export function ButtonLink({
  href,
  children,
  variant = "terracotta",
  className,
  external,
  icon,
}: {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
  icon?: IconName;
}) {
  const classes = buttonClass(variant, className);
  const content = (
    <>
      {icon ? <Icon name={icon} className="h-[1.15rem] w-[1.15rem]" /> : null}
      {children}
    </>
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {content}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
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
        "group inline-flex items-center gap-2 font-medium underline decoration-transparent underline-offset-4 transition hover:decoration-current",
        light ? "text-sand" : "text-forest",
      )}
    >
      {children}
      <Icon name="arrow" className="h-4 w-4 transition-transform motion-safe:group-hover:translate-x-1" />
    </Link>
  );
}
