import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SHA Stays",
    short_name: "SHA Stays",
    description: site.description,
    start_url: "/",
    display: "browser",
    background_color: "#F8F5EF",
    theme_color: "#183C35",
    lang: "en-IN",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
