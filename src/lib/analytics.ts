/**
 * Google Analytics 4 events. Set NEXT_PUBLIC_GA_ID (e.g. G-XXXXXXXXXX) at build time to enable;
 * without it nothing loads and trackEvent does nothing.
 * Never send names, phone numbers, emails, dates or free text typed by guests.
 */

export const gaId = process.env.NEXT_PUBLIC_GA_ID?.trim() ?? "";

type EventParams = Record<string, string>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params: EventParams = {}) {
  if (!gaId || typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function gtag() {
      // gtag.js only reads Arguments objects from the dataLayer, not arrays.
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };
  }
  window.gtag("event", name, { page_path: window.location.pathname, ...params });
}

/** Maps a clicked link to a conversion event name, or null if it isn't one. */
export function linkEvent(href: string): string | null {
  if (href.startsWith("tel:")) return "phone_click";
  if (href.startsWith("mailto:")) return "email_click";
  if (href.includes("wa.me/")) return "whatsapp_click";
  if (href.includes("maps.app.goo.gl") || href.includes("google.com/maps")) return "directions_click";
  if (href === "#quote" || /^\/book\/?(\?|#|$)/.test(href)) return "booking_cta_click";
  return null;
}
