import type { Metadata } from "next";
import { type BlogPost, publishedPosts } from "@/lib/blog";
import {
  contact,
  faqs,
  formatRupees,
  galleryPhotos,
  languages,
  propertyAmenities,
  roomSize,
  rooms,
  sharedAmenities,
  site,
} from "@/lib/site";

export const ogImage = {
  url: "/images/hero-banner.jpg",
  width: 1200,
  height: 675,
  alt: "The garden entrance and walkway of SHA Stays in Rameshwaram",
  type: "image/jpeg",
};

export function pageMeta({
  title,
  description,
  path,
  absolute = false,
  image,
  article,
}: {
  title: string;
  description: string;
  path: string;
  absolute?: boolean;
  image?: { url: string; alt: string; width?: number; height?: number };
  /** Set on a blog post so the share card is an article, with the publish date. */
  article?: { publishedTime: string; modifiedTime?: string };
}): Metadata {
  const canonical = path === "/" ? "/" : `${path.replace(/\/$/, "")}/`;
  const fullTitle = absolute ? title : `${title} | SHA Stays`;
  const shareImage = image
    ? { url: image.url, alt: image.alt, width: image.width ?? 1200, height: image.height ?? 800 }
    : ogImage;

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
      images: [shareImage],
      ...(article
        ? {
            type: "article" as const,
            publishedTime: article.publishedTime,
            modifiedTime: article.modifiedTime ?? article.publishedTime,
            authors: [site.name],
          }
        : { type: "website" as const }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [shareImage.url],
    },
  };
}

/** Google's hotel amenity wording, where it differs from the label shown on the site. */
const schemaAmenityNames: Record<string, string> = { "24-hour reception": "24-hour front desk" };

const amenityFeature = [
  ...[...propertyAmenities, ...sharedAmenities].map(({ label }) => schemaAmenityNames[label] ?? label),
  "Garden view",
].map((name) => ({
  "@type": "LocationFeatureSpecification",
  name,
  value: true,
}));

/** Upper end of the price range on the Google Business Profile; the lower end is the lowest "from" rate. */
const priceRangeMax = 5000;

/** WebSite + LodgingBusiness. Guest reviews stay on the homepage only: do not add Review or AggregateRating. */
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
        logo: `${url}/images/logo.png`,
        image: [
          `${url}/images/hero-banner.jpg`,
          `${url}${galleryPhotos.forecourt.src}`,
          `${url}${galleryPhotos.archNight.src}`,
          ...rooms.map((room) => `${url}${room.image}`),
        ],
        sameAs: [contact.instagram, contact.facebook, ...contact.listings, contact.googleMapsUrl].filter(Boolean),
        telephone: contact.phone,
        email: contact.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: contact.address.street,
          addressLocality: contact.address.locality,
          addressRegion: contact.address.region,
          postalCode: contact.address.postalCode,
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: contact.geo.latitude,
          longitude: contact.geo.longitude,
        },
        hasMap: contact.googleMapsUrl,
        containedInPlace: {
          "@type": "City",
          name: "Rameswaram",
          alternateName: "Rameshwaram",
          sameAs: "https://en.wikipedia.org/wiki/Rameswaram",
        },
        priceRange: `${formatRupees(Math.min(...rooms.map((room) => room.priceFrom)))}-${formatRupees(priceRangeMax)}`,
        currenciesAccepted: "INR",
        paymentAccepted: "UPI, Cash",
        knowsLanguage: languages,
        numberOfRooms: 6,
        checkinTime: "12:00",
        checkoutTime: "11:00",
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
        petsAllowed: "On request, for an extra charge",
        amenityFeature,
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: contact.phone,
            contactType: "reservations",
            email: contact.email,
            areaServed: "IN",
            availableLanguage: languages,
          },
          {
            "@type": "ContactPoint",
            telephone: contact.phoneAlt,
            contactType: "reservations",
            areaServed: "IN",
            availableLanguage: languages,
          },
        ],
        containsPlace: rooms.map((room) => ({
          "@type": "HotelRoom",
          "@id": `${url}/rooms/${room.slug}/#room`,
          name: room.name,
          description: `${room.description} ${room.countLabel}.`,
          bed: room.bed,
          occupancy: { "@type": "QuantitativeValue", maxValue: room.maxGuests, unitText: "guests" },
          floorSize: { "@type": "QuantitativeValue", minValue: roomSize.min, maxValue: roomSize.max, unitCode: "FTK" },
          smokingAllowed: false,
          url: `${url}/rooms/${room.slug}/`,
          image: room.image ? `${url}${room.image}` : undefined,
          amenityFeature: sharedAmenities.map(({ label }) => ({
            "@type": "LocationFeatureSpecification",
            name: label,
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

/** Blog index. No Review or AggregateRating. Posts are the site's own writing. */
export function blogGraph() {
  const url = `${site.url}/blog/`;
  const items = publishedPosts();
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${url}#blog`,
    name: "Notes from Rameshwaram",
    description: "Notes from SHA Stays about staying in Rameshwaram.",
    url,
    inLanguage: "en-IN",
    publisher: { "@id": `${site.url}/#lodging` },
    ...(items.length
      ? {
          blogPost: items.map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            dateModified: post.updated ?? post.date,
            url: `${site.url}/blog/${post.slug}/`,
          })),
        }
      : {}),
  };
}

/** One blog post. Author is the stay, not a named person. No star rating. */
export function articleGraph(post: BlogPost) {
  const url = `${site.url}/blog/${post.slug}/`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: url,
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    inLanguage: "en-IN",
    image: post.image ? `${site.url}${post.image.src}` : undefined,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      logo: { "@type": "ImageObject", url: `${site.url}/images/logo.png` },
    },
    isPartOf: { "@id": `${site.url}/blog/#blog` },
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
