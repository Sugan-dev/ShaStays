"use client";

import Script from "next/script";
import { useEffect } from "react";
import { gaId, linkEvent, trackEvent } from "@/lib/analytics";

export function Analytics() {
  useEffect(() => {
    if (!gaId) return;
    function onClick(event: MouseEvent) {
      // Programmatic clicks (the enquiry forms opening WhatsApp) are tracked as form submissions instead.
      if (!event.isTrusted) return;
      const link = (event.target as Element | null)?.closest?.("a[href]");
      if (!link) return;
      const name = linkEvent(link.getAttribute("href") ?? "");
      if (!name) return;
      const text = (link.textContent ?? "").replace(/\(opens in a new tab\)/, "").replace(/\s+/g, " ").trim();
      trackEvent(name, { link_text: text.slice(0, 80) || (link.getAttribute("aria-label") ?? "") });
    }
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  if (!gaId) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];window.gtag=window.gtag||function(){dataLayer.push(arguments);};gtag('js',new Date());gtag('config',${JSON.stringify(gaId)});`}
      </Script>
    </>
  );
}
