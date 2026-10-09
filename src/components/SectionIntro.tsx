import { cx } from "@/lib/links";

export function SectionIntro({
  eyebrow,
  title,
  children,
  tone = "light",
  align = "left",
  as: Heading = "h2",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div className={cx("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? <p className={cx("eyebrow", dark ? "text-sand" : "text-terracotta-deep")}>{eyebrow}</p> : null}
      <Heading
        className={cx(
          "mt-3 font-serif text-[2.4rem] leading-[1.04] text-balance md:text-6xl",
          dark ? "text-white" : "text-forest",
        )}
      >
        {title}
      </Heading>
      {children ? (
        <div className={cx("mt-5 text-lg leading-relaxed", dark ? "text-sand/90" : "text-muted")}>{children}</div>
      ) : null}
    </div>
  );
}
