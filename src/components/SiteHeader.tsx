"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/Icon";
import { Logo } from "@/components/Logo";
import { nav } from "@/lib/site";
import { cx, hasWhatsapp, phoneHref, whatsappAvailability, whatsappHref } from "@/lib/links";

const bookNowClass =
  "min-h-11 items-center rounded-full bg-terracotta-deep px-4 text-sm font-medium tracking-[0.12em] whitespace-nowrap text-white uppercase transition hover:bg-terracotta-ink sm:px-5";

const iconButtonClass =
  "grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line text-forest transition hover:border-forest hover:bg-forest hover:text-ivory";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div className="bg-forest px-4 py-2 text-center text-[0.7rem] font-medium tracking-[0.18em] text-sand uppercase sm:text-xs">
        Now welcoming guests in Rameshwaram
      </div>
      <header
        className={cx(
          "sticky top-0 z-50 border-b bg-ivory/95 backdrop-blur-sm transition-shadow duration-300",
          scrolled ? "border-line shadow-soft" : "border-line/70",
        )}
      >
        <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
          <Logo />
          <nav className="hidden items-center gap-5 lg:flex xl:gap-7" aria-label="Primary">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cx(
                    "relative py-2 text-sm tracking-wide whitespace-nowrap transition after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:bg-terracotta-deep after:transition-transform after:duration-300",
                    active
                      ? "text-terracotta-deep after:scale-x-100"
                      : "text-charcoal/80 after:scale-x-0 hover:text-forest hover:after:scale-x-100",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-2">
            <a href={phoneHref()} className={iconButtonClass} aria-label="Call SHA Stays">
              <Icon name="phone" />
            </a>
            <Link href="/book" className={cx(bookNowClass, "hidden lg:inline-flex")}>
              Book Now
            </Link>
            <button
              type="button"
              className={cx(iconButtonClass, "relative z-10 cursor-pointer lg:hidden")}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              <span className="flex w-4 flex-col gap-1.5" aria-hidden="true">
                <span className="block h-px w-full bg-current" />
                <span className="block h-px w-full bg-current" />
                <span className="block h-px w-3 bg-current" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {open
        ? createPortal(
            <div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              className="fixed inset-0 z-[80] flex flex-col bg-ivory px-6 pt-5 pb-[max(2rem,env(safe-area-inset-bottom))]"
            >
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  type="button"
                  className="min-h-11 rounded-full border border-line px-4 text-sm text-forest"
                  onClick={() => setOpen(false)}
                  autoFocus
                >
                  Close
                </button>
              </div>
              <nav className="mt-8 flex min-h-0 flex-1 flex-col overflow-y-auto" aria-label="Mobile">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive(pathname, item.href) ? "page" : undefined}
                    className="border-b border-line py-3 font-serif text-[2.6rem] leading-tight text-forest aria-[current=page]:text-terracotta-deep"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <Link
                  href="/book"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-terracotta-deep font-medium text-white"
                >
                  Book Now
                </Link>
                <a
                  href={whatsappHref(whatsappAvailability)}
                  target={hasWhatsapp() ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-forest/25 font-medium text-forest"
                >
                  <Icon name="whatsapp" />
                  WhatsApp
                  {hasWhatsapp() ? <span className="sr-only"> (opens in a new tab)</span> : null}
                </a>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
