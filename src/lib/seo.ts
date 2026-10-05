import type { Metadata } from "next";
import { contact, faqs, rooms, sharedAmenities, site } from "@/lib/site";

const ogImage = {
  url: "/images/hero-banner.jpg",
  width: 1672,
  height: 941,
  alt: "The garden entrance and walkway of SHA Stays in Rameshwaram",
  type: "image/jpeg",
};

export function pageMeta({
  title,
  description,
  path,
  absolute = false,
}: {
  title: string;
  description: string;
  path: string;
  absolute?: boolean;
}): Metadata {
  const canonical = path === "/" ? "/" : `${path.replace(/\/$/, "")}/`;
  const fullTitle = absolute ? title : `${title} | SHA Stays`;

  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: site.name,
      locale: site.locale,
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage.url],
    },
  };
}

const amenityFeature = [
  "Air conditioning",
  "Private bathroom",
  "Hot water",
  "Wi-Fi",
  "Television",
  "RO drinking water",
  "Free parking",
].map((name) => ({
  "@type": "LocationFeatureSpecification",
  name,
  value: true,
}));

export function siteGraph() {
  const url = site.url;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url,
        name: site.name,
        description: site.description,
        inLanguage: "en-IN",
        publisher: { "@id": `${url}/#lodging` },
      },
      {
        "@type": "LodgingBusiness",
        "@id": `${url}/#lodging`,
        name: site.name,
        description: site.description,
        slogan: site.tagline,
        url,
        image: `${url}/images/hero-banner.jpg`,
        telephone: contact.phone,
        email: contact.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: "2/1750-5, Near Dr. A.P.J. Abdul Kalam Memorial",
          addressLocality: "Rameshwaram",
          addressRegion: "Tamil Nadu",
          postalCode: "623526",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 9.286683,
          longitude: 79.274022,
        },
        hasMap: contact.directionsUrl,
        numberOfRooms: 6,
        checkinTime: "12:00",
        checkoutTime: "11:00",
        amenityFeature,
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: contact.phone,
            contactType: "reservations",
            email: contact.email,
            areaServed: "IN",
            availableLanguage: "English",
          },
          {
            "@type": "ContactPoint",
            telephone: contact.phoneAlt,
            contactType: "reservations",
            areaServed: "IN",
            availableLanguage: "English",
          },
        ],
        containsPlace: rooms.map((room) => ({
          "@type": "HotelRoom",
          name: room.name,
          description: `${room.description} ${room.countLabel}.`,
          bed: room.bed,
          url: `${url}/rooms/${room.slug}/`,
          image: room.image ? `${url}${room.image}` : undefined,
          amenityFeature: sharedAmenities.map((name) => ({
            "@type": "LocationFeatureSpecification",
            name,
            value: true,
          })),
        })),
      },
    ],
  };
}

export function faqGraph() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbGraph(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path === "/" ? "/" : `${item.path.replace(/\/$/, "")}/`}`,
    })),
  };
}
