import type { IconName } from "@/components/Icon";
import { maxGroupSize, photos, places, type Place } from "@/lib/site";

/**
 * Private Stay page content (book the entire property for one group).
 * Say "entire property" or "private stay", not "resort".
 * Pricing is quoted on enquiry and is not shown on the page.
 * Add a `src` to empty gallery slots when group photographs are ready.
 */

export const privateHero = {
  alt: "The garden entrance and walkway of SHA Stays in Rameshwaram",
  width: 1600,
  height: 900,
  src: "/images/hero-1600.webp",
  srcSet: "/images/hero-800.webp 800w, /images/hero-1600.webp 1600w",
  avifSrcSet: "/images/hero-800.avif 800w, /images/hero-1600.avif 1600w",
  preload: "/images/hero-800.avif",
};

export const privateStoryImage = {
  src: "/images/gallery/outdoor-arch.webp",
  alt: "The garden path at SHA Stays, shaded by trees between the rooms",
};

export const privateBenefits = [
  "All 6 rooms",
  "Entire property exclusively for your group",
  "Private common areas",
  "No unrelated guests",
  "One place for everyone",
  "Convenient group parking",
  "A comfortable base for exploring Rameshwaram",
] as const;

export const privateAudiences = [
  {
    title: "Family Trips",
    text: "Extended families travelling together.",
  },
  {
    title: "Temple & Pilgrimage Groups",
    text: "Groups visiting Ramanathaswamy Temple and the spiritual destinations of Rameshwaram.",
  },
  {
    title: "Friends Trips",
    text: "One place to stay, relax and spend time together.",
  },
  {
    title: "Corporate & Team Trips",
    text: "Small teams looking for a private stay.",
  },
  {
    title: "Wedding & Family Events",
    text: "A convenient base for families attending events in Rameshwaram.",
  },
  {
    title: "Tour Groups",
    text: "Small private groups travelling together.",
  },
] as const;

export const privateInclusions: { title: string; text: string; icon: IconName }[] = [
  {
    title: "6 Private Rooms",
    text: `Accommodation for up to ${maxGroupSize} guests across all six rooms — two king rooms and four queen rooms.`,
    icon: "bed",
  },
  {
    title: "Entire Property",
    text: "The property is reserved exclusively for your group.",
    icon: "home",
  },
  {
    title: "Group Parking",
    text: "Free parking for bikes, cars and larger vehicles, with space for about 4–5 cars and 24-hour CCTV across the property.",
    icon: "car",
  },
  {
    title: "Common Spaces",
    text: "Outdoor seating where your group can gather and relax.",
    icon: "gather",
  },
  {
    title: "Complete Privacy",
    text: "No unrelated guests during your private stay.",
    icon: "lock",
  },
  {
    title: "Rameshwaram Location",
    text: "Near the Abdul Kalam Memorial and about 5 km from Ramanathaswamy Temple — a convenient base for the island.",
    icon: "pin",
  },
];

export const privateSteps = [
  {
    number: "01",
    title: "Tell Us About Your Group",
    text: "Tell us your group size, travel date and vehicle type.",
  },
  {
    number: "02",
    title: "Get Your Private Stay Quote",
    text: "We'll calculate the package based on your group and dates.",
  },
  {
    number: "03",
    title: "Confirm Your Booking",
    text: "Pay the booking advance and secure the entire property.",
  },
  {
    number: "04",
    title: "Arrive & Enjoy",
    text: "Come to Rameshwaram, park your vehicle and enjoy the property exclusively with your group.",
  },
] as const;

export const privateStats = [
  { value: "6", label: "Rooms" },
  { value: String(maxGroupSize), label: "Guests, maximum" },
  { value: "1", label: "Group" },
  { value: "0", label: "Unrelated Guests" },
] as const;

export const privatePackage = {
  name: "Private Stay",
  summary: "The entire SHA Stays, reserved for one group.",
  price: "Price on enquiry",
  priceNote:
    "Every group is different, so we quote for your dates, group size and the arrangement you need.",
  features: [
    "Entire property",
    "All 6 rooms",
    "No unrelated guests",
    "Parking for your vehicles",
    "Power backup and 24-hour CCTV",
    "Group assistance",
    "Additional sleeping arrangement where applicable",
  ],
  cta: "Enquire for a Quote",
} as const;

export const privateAddOns = [
  {
    title: "Breakfast",
    text: "Breakfast for the entire group can be discussed before you arrive. It is included only when we confirm it in your quote.",
  },
  {
    title: "Group Meals",
    text: "Lunch or dinner can be pre-arranged depending on availability. Ask when you enquire.",
  },
  {
    title: "Local Transport",
    text: "We can help coordinate a vehicle for temple visits and sightseeing, based on your plans.",
  },
  {
    title: "Extended Checkout",
    text: "A later checkout can be requested and is subject to availability.",
  },
  {
    title: "Local Sightseeing",
    text: "Rameshwaram sightseeing can be coordinated for your group when you want help planning the day.",
  },
  {
    title: "Evening Refreshments",
    text: "Tea, coffee and snacks for the group can be requested and confirmed with your booking.",
  },
] as const;

function place(slug: string): Place {
  const found = places.find((item) => item.slug === slug);
  if (!found) throw new Error(`Missing place: ${slug}`);
  return found;
}

export const privatePlaces: Place[] = [
  place("ramanathaswamy-temple"),
  place("abdul-kalam-memorial"),
  place("dhanushkodi"),
  place("pamban-bridge"),
  place("ariyaman-beach"),
  {
    slug: "rameshwaram-beach",
    name: "Rameshwaram Beach",
    description: "Time along the shore, an easy outing from your group's private base.",
  },
];

export type PrivateGallerySlot = {
  id: string;
  caption: string;
  alt: string;
  src?: string;
  tall?: boolean;
};

export const privateGallery: PrivateGallerySlot[] = [
  {
    id: "entrance",
    caption: "Front gate",
    src: "/images/gallery/outdoor-gate.webp",
    alt: "The front gate of SHA Stays, with the garden walkway and trees beyond",
  },
  {
    id: "van-arrival",
    caption: "Group arriving by van",
    alt: "A group arriving at SHA Stays by van or Tempo Traveller",
  },
  {
    id: "group-entrance",
    caption: "Group at the entrance",
    alt: "A travelling group at the entrance of SHA Stays",
  },
  {
    id: "rooms",
    caption: "Rooms",
    src: "/images/rooms/king-room.webp",
    alt: "SHA King Room with a king-size bed, air conditioning and a decorative door",
  },
  {
    id: "common-area",
    caption: "Common area",
    src: "/images/gallery/amenity-seating.webp",
    alt: "Outdoor tables and stools under palm trees at SHA Stays, a shared place for the group",
  },
  {
    id: "parking",
    caption: "Parking",
    alt: "Parking at SHA Stays for a group's cars or travelling vehicle",
  },
  {
    id: "night",
    caption: "Night exterior",
    src: "/images/gallery/outdoor-night.webp",
    alt: "The SHA Stays entrance at night, with lights along the garden walkway",
    tall: true,
  },
  {
    id: "relaxing",
    caption: "Group relaxing",
    alt: "A group relaxing together at SHA Stays",
  },
  {
    id: "sightseeing",
    caption: "Dhanushkodi",
    src: photos.dhanushkodi.src,
    alt: photos.dhanushkodi.alt,
  },
  {
    id: "temple",
    caption: "Ramanathaswamy Temple",
    src: photos.gopuram.src,
    alt: photos.gopuram.alt,
    tall: true,
  },
];

export const privateFit = [
  "A family travelling together",
  "A group coming in a Tempo Traveller",
  "A pilgrimage group",
  "Friends travelling together",
  "A small corporate team",
  "A wedding/event group",
  "A tour group looking for private accommodation",
] as const;

export const privateNotFit = [
  "You're travelling alone",
  "You need only one room",
  "You prefer a large hotel with many facilities",
] as const;

export const privateFaqs = [
  {
    question: "Can we book the entire property exclusively?",
    answer:
      "Yes. Our private stay package allows one group to reserve the entire property exclusively for their stay.",
  },
  {
    question: "How many people can stay?",
    answer: `Up to ${maxGroupSize} guests across the 6 rooms, using extra mattresses where needed. Contact us with your group size and we'll recommend the best arrangement.`,
  },
  {
    question: "Can we come by Tempo Traveller?",
    answer:
      "Yes. The package is designed for groups travelling together by car, 15–21 seater van, Tempo Traveller, mini bus or multiple cars.",
  },
  {
    question: "Can we book for one night?",
    answer: "Yes, subject to availability and applicable rates.",
  },
  {
    question: "Can we arrange food?",
    answer: "Group meals can be discussed in advance depending on availability.",
  },
  {
    question: "Can you arrange local sightseeing?",
    answer: "We can help coordinate local sightseeing and transportation based on your requirements.",
  },
  {
    question: "Will other guests stay at the property?",
    answer: "No. When you book the private stay package, the property is reserved exclusively for your group.",
  },
] as const;

export const vehicleTypes = [
  "Tempo Traveller",
  "Van",
  "Mini bus",
  "Car",
  "Multiple cars",
  "Other",
] as const;
