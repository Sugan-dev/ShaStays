"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import { nav } from "@/lib/site";
import { cx, phoneHref, whatsappBooking, whatsappHref } from "@/lib/links";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 4.5h2.1l1.1 2.8-1.4.9a11.2 11.2 0 0 0 5 5l.9-1.4 2.8 1.1V15a1.6 1.6 0 0 1-1.7 1.6A13.6 13.6 0 0 1 6.4 6.2 1.6 1.6 0 0 1 8 4.5z"
      />
    </svg>
  );
}

const bookNowClass =
  "inline-flex min-h-12 items-center rounded-full bg-terracotta-deep px-5 text-sm font-medium tracking-[0.14em] text-white uppercase transition hover:bg-terracotta-ink";

const callClass =
  "grid h-12 w-12 place-items-center rounded-full border border-line text-forest transition hover:border-forest hover:bg-forest hover:text-ivory";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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
    <div className="sticky top-0 z-50">
      <div className="bg-forest px-4 py-2 text-center text-xs font-medium tracking-[0.18em] text-sand uppercase">
        Now welcoming guests in Rameshwaram
      </div>
      <header className="border-b border-line/80 bg-ivory">
        <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
          <Logo />
          <nav className="hidden items-center gap-3 xl:gap-5 lg:flex" aria-label="Primary">
            {nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cx(
                    "text-[0.8125rem] tracking-wide whitespace-nowrap transition xl:text-sm",
                    active ? "text-terracotta-deep" : "text-charcoal/80 hover:text-forest",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <a href={phoneHref()} className={callClass} aria-label="Call SHA Stays">
              <PhoneIcon />
            </a>
            <a
              href={whatsappHref(whatsappBooking)}
              target="_blank"
              rel="noopener noreferrer"
              className={bookNowClass}
            >
              Book Now
              <span className="sr-only"> on WhatsApp</span>
            </a>
          </nav>
          <div className="flex items-center gap-2 lg:hidden">
            <a href={phoneHref()} className={callClass} aria-label="Call SHA Stays">
              <PhoneIcon />
            </a>
            <a
              href={whatsappHref(whatsappBooking)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center rounded-full bg-terracotta-deep px-4 text-sm font-medium text-white"
            >
              Book Now
              <span className="sr-only"> on WhatsApp</span>
            </a>
            <button
              type="button"
              className="relative z-10 grid h-12 w-12 shrink-0 cursor-pointer place-items-center rounded-full border border-line text-forest"
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
            <div id="mobile-menu" className="fixed inset-0 z-[80] flex flex-col bg-ivory px-6 pt-5 pb-8">
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              className="min-h-11 rounded-full border border-line px-4 text-sm text-forest"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
          <nav className="mt-8 flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-line py-3 font-serif text-5xl text-forest"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex items-center gap-3">
            <a href={phoneHref()} className={cx(callClass, "shrink-0")} aria-label="Call SHA Stays">
              <PhoneIcon />
            </a>
            <a
              href={whatsappHref(whatsappBooking)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-terracotta-deep text-white"
            >
              Book Now
              <span className="sr-only"> on WhatsApp</span>
            </a>
          </div>
        </div>,
            document.body,
          )
        : null}
    </div>
  );
}
