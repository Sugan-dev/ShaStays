import type { Metadata, Viewport } from "next";
import { DeferredFonts } from "@/components/DeferredFonts";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteGraph } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#183C35",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: "%s | SHA Stays",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  category: "travel",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: site.title,
    description: site.description,
    locale: site.locale,
    type: "website",
    siteName: site.name,
    url: "/",
    images: [
      {
        url: "/images/hero-banner.jpg",
        width: 1672,
        height: 941,
        alt: "The garden entrance and walkway of SHA Stays in Rameshwaram",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/images/hero-banner.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body>
        <DeferredFonts />
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[80] focus:rounded-full focus:bg-paper focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="content">{children}</main>
        <SiteFooter />
        <JsonLd data={siteGraph()} />
      </body>
    </html>
  );
}
