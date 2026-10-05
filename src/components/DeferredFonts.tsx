"use client";

import { useEffect } from "react";

export function DeferredFonts() {
  useEffect(() => {
    const load = () => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "/fonts.css";
      document.head.appendChild(link);
    };
    const id = window.setTimeout(load, 3000);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <noscript>
      {/* eslint-disable-next-line @next/next/no-css-tags */}
      <link rel="stylesheet" href="/fonts.css" />
    </noscript>
  );
}
