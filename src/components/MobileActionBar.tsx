"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/Icon";
import { rooms } from "@/lib/site";
import {
  cx,
  hasWhatsapp,
  whatsappAvailability,
  whatsappHref,
  whatsappPrivateStay,
  whatsappRoom,
} from "@/lib/links";

const hiddenOn = ["/book", "/contact"];
const heroPages = ["/", "/private-resort"];

function normalise(pathname: string) {
  return pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
}

export function MobileActionBar() {
  const path = normalise(usePathname());
  const waitsForScroll = heroPages.includes(path);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    if (!waitsForScroll) return;
    const onScroll = () => setScrolledPastHero(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [waitsForScroll]);

  if (hiddenOn.includes(path)) return null;

  const visible = !waitsForScroll || scrolledPastHero;
  const privateStay = path === "/private-resort";
  const room = rooms.find((item) => path === `/rooms/${item.slug}`);

  const primary = privateStay
    ? { href: "#quote", label: "Get a Quote" }
    : { href: room ? `/book?room=${room.slug}` : "/book", label: "Book Now" };
  const message = privateStay ? whatsappPrivateStay : room ? whatsappRoom(room.name) : whatsappAvailability;

  return (
    <div
      className={cx(
        "fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ivory/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-sm lg:hidden",
        "transition-transform duration-300 motion-reduce:transition-none",
        visible ? "translate-y-0" : "pointer-events-none translate-y-full",
      )}
      aria-hidden={visible ? undefined : true}
    >
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        <Link
          href={primary.href}
          tabIndex={visible ? undefined : -1}
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-terracotta-deep text-[0.95rem] font-medium text-white"
        >
          {primary.label}
        </Link>
        <a
          href={whatsappHref(message)}
          target={hasWhatsapp() ? "_blank" : undefined}
          rel="noopener noreferrer"
          tabIndex={visible ? undefined : -1}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-forest text-[0.95rem] font-medium text-ivory"
        >
          <Icon name="whatsapp" />
          WhatsApp
          {hasWhatsapp() ? <span className="sr-only"> (opens in a new tab)</span> : null}
        </a>
      </div>
    </div>
  );
}
