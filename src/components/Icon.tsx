import type { ReactNode } from "react";
import { cx } from "@/lib/links";

export type IconName =
  | "bed"
  | "home"
  | "car"
  | "gather"
  | "lock"
  | "pin"
  | "ac"
  | "bath"
  | "hotWater"
  | "wifi"
  | "tv"
  | "water"
  | "road"
  | "temple"
  | "landmark"
  | "sunrise"
  | "sun"
  | "sunset"
  | "moon"
  | "users"
  | "leaf"
  | "check"
  | "arrow"
  | "phone"
  | "whatsapp"
  | "instagram"
  | "star"
  | "power"
  | "cctv";

const paths: Record<Exclude<IconName, "whatsapp" | "instagram">, ReactNode> = {
  bed: (
    <>
      <path d="M3.5 18.5V7.5M20.5 18.5V13" />
      <path d="M3.5 13.5h17v3h-17z" strokeLinejoin="round" />
      <path d="M6.5 13.5v-2a1.6 1.6 0 0 1 1.6-1.6h2.3a1.6 1.6 0 0 1 1.6 1.6v2" strokeLinejoin="round" />
    </>
  ),
  home: <path d="M4 11.2 12 4l8 7.2V20a1 1 0 0 1-1 1h-5.2v-5.5h-3.6V21H5a1 1 0 0 1-1-1z" strokeLinejoin="round" />,
  car: (
    <>
      <path d="M4.5 16.5h15M6 16.5l1.5-4.6a2 2 0 0 1 1.9-1.4h5.2a2 2 0 0 1 1.9 1.4l1.5 4.6" strokeLinejoin="round" />
      <path d="M4.5 16.5v2M19.5 16.5v2" />
      <circle cx="8" cy="16.5" r="1.2" />
      <circle cx="16" cy="16.5" r="1.2" />
    </>
  ),
  gather: (
    <>
      <circle cx="9" cy="8" r="2.1" />
      <circle cx="16" cy="9" r="1.7" />
      <path d="M4.8 18.2c.5-2.5 2.3-3.8 4.4-3.8 2 0 3.8 1.3 4.3 3.8M13.2 14.8c1.3-.5 2.7-.3 3.8.8.7.7 1.2 1.6 1.4 2.6" />
    </>
  ),
  lock: (
    <>
      <rect x="6" y="11" width="12" height="8" rx="1.6" />
      <path d="M8.5 11V8.4a3.5 3.5 0 0 1 7 0V11" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s6-5.1 6-10a6 6 0 1 0-12 0c0 4.9 6 10 6 10z" strokeLinejoin="round" />
      <circle cx="12" cy="11" r="1.8" />
    </>
  ),
  ac: (
    <>
      <rect x="3.5" y="5" width="17" height="7" rx="1.5" />
      <path d="M7 9.5h10M8 15.5c0 1.5-1 2-1 3.5M12 15.5v3.5M16 15.5c0 1.5 1 2 1 3.5" />
    </>
  ),
  bath: (
    <>
      <path d="M4 12h16v2.5a4.5 4.5 0 0 1-4.5 4.5h-7A4.5 4.5 0 0 1 4 14.5z" strokeLinejoin="round" />
      <path d="M6.5 12V6.2A1.7 1.7 0 0 1 8.2 4.5c.9 0 1.6.6 1.8 1.5M7.5 19l-1 1.5M16.5 19l1 1.5" />
    </>
  ),
  hotWater: (
    <>
      <path d="M12 3.5s5 5.4 5 9.5a5 5 0 0 1-10 0c0-4.1 5-9.5 5-9.5z" strokeLinejoin="round" />
      <path d="M10 14.5a2.2 2.2 0 0 0 2 2" />
    </>
  ),
  wifi: (
    <>
      <path d="M3.5 9.5a12 12 0 0 1 17 0M6.5 12.7a7.6 7.6 0 0 1 11 0M9.4 15.8a3.4 3.4 0 0 1 5.2 0" />
      <circle cx="12" cy="18.6" r=".9" fill="currentColor" stroke="none" />
    </>
  ),
  tv: (
    <>
      <rect x="3.5" y="5.5" width="17" height="11" rx="1.5" />
      <path d="M9 20h6M12 16.5V20" />
    </>
  ),
  water: (
    <>
      <path d="M7.5 4.5h9l-1.2 14.2a1.5 1.5 0 0 1-1.5 1.3h-3.6a1.5 1.5 0 0 1-1.5-1.3z" strokeLinejoin="round" />
      <path d="M8 10c1.3-.7 2.7-.7 4 0s2.7.7 4 0" />
    </>
  ),
  road: (
    <>
      <path d="M8.5 3.5 5 20.5M15.5 3.5l3.5 17" />
      <path d="M12 5v2.5M12 10.5v3M12 16.5V19" />
    </>
  ),
  temple: (
    <>
      <path d="M9 20.5V9.5l3-6 3 6v11M7 20.5h10" strokeLinejoin="round" />
      <path d="M9 13h6M9 16.5h6M11 20.5v-2.2a1 1 0 0 1 2 0v2.2" />
    </>
  ),
  landmark: (
    <>
      <path d="M4 20.5h16M5.5 20.5v-9M18.5 20.5v-9M9.5 20.5v-9M14.5 20.5v-9M4 11.5h16" />
      <path d="M5 11.5a7 7 0 0 1 14 0" />
    </>
  ),
  sunrise: (
    <>
      <path d="M7 17a5 5 0 0 1 10 0M3.5 17h17M5.5 20h13" />
      <path d="M12 4v4M9.5 6.5 12 4l2.5 2.5M4.8 10.8l1.4 1.4M19.2 10.8l-1.4 1.4" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6 7 7M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4" />
    </>
  ),
  sunset: (
    <>
      <path d="M7 15a5 5 0 0 1 10 0M3.5 15h17M6 18.5h12" />
      <path d="M12 3.5v4M9.5 5.5 12 8l2.5-2.5M4.8 8.8l1.4 1.4M19.2 8.8l-1.4 1.4" />
    </>
  ),
  moon: <path d="M19 14.5A7.5 7.5 0 0 1 9.5 5a7.5 7.5 0 1 0 9.5 9.5z" strokeLinejoin="round" />,
  users: (
    <>
      <circle cx="9" cy="8.5" r="3" />
      <path d="M3.5 19.5c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5" />
      <path d="M15.5 6a3 3 0 0 1 0 5.6M17 14.8c1.8.6 3 2.2 3.5 4.7" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19c0-8 5-13.5 14-14 .3 9-5 14-12.5 14z" strokeLinejoin="round" />
      <path d="M5 19c3-4 6-6.5 9.5-8.5" />
    </>
  ),
  check: <path d="M5 12.5 9.2 17 19 7" strokeLinejoin="round" />,
  arrow: <path d="M4.5 12h15M14 6.5l5.5 5.5-5.5 5.5" strokeLinejoin="round" />,
  phone: (
    <path
      d="M8 4.5h2.1l1.1 2.8-1.4.9a11.2 11.2 0 0 0 5 5l.9-1.4 2.8 1.1V15a1.6 1.6 0 0 1-1.7 1.6A13.6 13.6 0 0 1 6.4 6.2 1.6 1.6 0 0 1 8 4.5z"
      strokeLinejoin="round"
    />
  ),
  star: <path d="m12 4 2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 16.4l-4.8 2.5.9-5.4-3.9-3.8 5.4-.8z" strokeLinejoin="round" />,
  power: <path d="M13 3.5 6 13h5l-1 7.5L17 11h-5z" strokeLinejoin="round" />,
  cctv: (
    <>
      <path d="M3.5 8.2 15.6 4.5l1.8 5.8-12.1 3.7z" strokeLinejoin="round" />
      <path d="M8.6 12.5 10 17H5.5M5.5 14.5v5M17.4 8.6l3.1-1" />
    </>
  ),
};

export function Icon({ name, className }: { name: IconName; className?: string }) {
  const classes = cx("h-5 w-5 shrink-0", className);

  if (name === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" className={classes} fill="currentColor" aria-hidden="true">
        <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.48.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.43 9.43 0 0 1-4.8-1.31l-.35-.21-3.57.94.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.24-9.44 9.45-9.44a9.38 9.38 0 0 1 6.68 2.77 9.38 9.38 0 0 1 2.76 6.68c0 5.2-4.24 9.43-9.45 9.43zm8.04-17.47A11.3 11.3 0 0 0 12.05.7C5.78.7.68 5.8.68 12.06c0 2 .52 3.96 1.52 5.68L.58 23.7l6.1-1.6a11.33 11.33 0 0 0 5.37 1.37h.01c6.26 0 11.36-5.1 11.36-11.37 0-3.03-1.18-5.89-3.33-8.03z" />
      </svg>
    );
  }

  if (name === "instagram") {
    return (
      <svg viewBox="0 0 24 24" className={classes} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r=".9" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className={classes}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
