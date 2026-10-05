/**
 * SHA Stays content and launch settings.
 *
 * Before going live, fill in phone, WhatsApp, email, the website URL,
 * and the exact Google Maps pin. Add property photographs only when
 * they are photos of SHA Stays. Leave a field blank rather than guessing.
 */

export const site = {
  name: "SHA Stays",
  descriptor: "A Peaceful Stay in Rameshwaram",
  tagline: "Stay Close. Feel at Home.",
  supporting:
    "A peaceful boutique stay for your Rameshwaram journey.",
  url: "https://shastays.com",
  locale: "en_IN",
  title:
    "SHA Stays Rameshwaram | Boutique Stay Near Abdul Kalam Memorial",
  description:
    "Stay at SHA Stays, a peaceful boutique stay in Rameshwaram near the Abdul Kalam Memorial and approximately 5 km from Ramanathaswamy Temple. Comfortable rooms, easy road access and a welcoming stay.",
};

export const contact = {
  phone: "+919345851313",
  phoneDisplay: "93458 51313",
  phoneAlt: "+917418143765",
  phoneAltDisplay: "74181 43765",
  /** Digits with country code, no plus or spaces. */
  whatsapp: "919345851313",
  whatsappDisplay: "93458 51313",
  email: "shastaysrmm@gmail.com",
  addressLines: [
    "2/1750-5, Near Dr. A.P.J. Abdul Kalam Memorial",
    "Rameshwaram, Tamil Nadu 623526",
  ],
  mapEmbedUrl:
    "https://maps.google.com/maps?q=9.286683,79.274022&z=16&hl=en&output=embed",
  directionsUrl: "https://maps.app.goo.gl/CiW3pTEsirE5ejfS7",
  mapNote: "The pin marks SHA Stays, near the Dr. A.P.J. Abdul Kalam Memorial.",
};

export const propertyPhotos = {
  exterior: "/images/hero-banner.webp",
  king: "/images/rooms/king-room.webp",
  queen: "/images/rooms/queen-room.webp",
  entrance: "",
  greenery: "",
};

export type PhotoCredit = {
  title: string;
  author: string;
  license: string;
  licenseUrl: string;
  sourceUrl: string;
};

export type Photo = {
  src: string;
  alt: string;
  fit?: string;
  credit: PhotoCredit;
};

const ccBySa4 = {
  license: "CC BY-SA 4.0",
  licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
};

export const photos = {
  kalam: {
    src: "/images/kalam.jpg",
    alt: "Dr. A.P.J. Abdul Kalam Memorial in Rameshwaram, a sandstone building with a dome and palm trees",
    fit: "object-[center_40%]",
    credit: {
      title: "Abdul Kalam Memorial",
      author: "Selvakumar mallar",
      license: "CC0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:APJ_Abdul_Kalam_Memorial_Rameswaram.jpg",
    },
  },
  corridor: {
    src: "/images/temple-corridor.jpg",
    alt: "The long painted corridor of Ramanathaswamy Temple in Rameshwaram",
    fit: "object-center",
    credit: {
      title: "Ramanathaswamy Temple corridor",
      author: "Vensatry",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Ramanathaswamy_temple_corridor.JPG",
    },
  },
  gopuram: {
    src: "/images/temple-gopuram.jpg",
    alt: "The gopuram of Ramanathaswamy Temple rising above the street in Rameshwaram",
    fit: "object-top",
    credit: {
      title: "Ramanathaswamy Temple",
      author: "Kondephy",
      ...ccBySa4,
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Shree_Rameshwaram_Jyotirlinga_Shivam_Temple.jpg",
    },
  },
  pamban: {
    src: "/images/pamban.jpg",
    alt: "The Pamban rail bridge opening over the sea between the mainland and Rameshwaram Island",
    fit: "object-[center_70%]",
    credit: {
      title: "Pamban Bridge",
      author: "N. Vivekananthamoorthy",
      ...ccBySa4,
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Pamban_Bridge_connecting_Mandapam_and_Rameswaram_Island.jpg",
    },
  },
  dhanushkodi: {
    src: "/images/dhanushkodi.jpg",
    alt: "The sea and a narrow spit of land at Dhanushkodi, on the eastern edge of Rameshwaram Island",
    fit: "object-center",
    credit: {
      title: "Dhanushkodi",
      author: "Shajinss",
      ...ccBySa4,
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Dhanushkodisea.jpg",
    },
  },
} satisfies Record<string, Photo>;

export const hero = propertyPhotos.exterior
  ? {
      src: propertyPhotos.exterior,
      alt: "The garden entrance and walkway of SHA Stays in Rameshwaram",
      fit: "object-center",
      caption: "",
    }
  : {
      src: photos.kalam.src,
      alt: photos.kalam.alt,
      fit: photos.kalam.fit,
      caption: "Pictured: the Abdul Kalam Memorial, near SHA Stays.",
    };

export const nav = [
  { href: "/rooms", label: "Rooms" },
  { href: "/gallery", label: "Gallery" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
  { href: "/location", label: "Location" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerNav = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms" },
  { href: "/gallery", label: "Gallery" },
  { href: "/experience", label: "Experience" },
  { href: "/location", label: "Location" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/book", label: "Book Now" },
] as const;

export const highlights = [
  { value: "6", label: "Thoughtfully prepared rooms" },
  { value: "5 km", label: "From Ramanathaswamy Temple" },
  { value: "Near", label: "Abdul Kalam Memorial" },
  { value: "NH", label: "Easy road access" },
] as const;

export const reasons = [
  {
    number: "01",
    title: "Peaceful Location",
    text: "Close to Rameshwaram's major attractions, while offering a calmer place to return to after a day of exploring.",
  },
  {
    number: "02",
    title: "Easy Road Access",
    text: "Located along the highway, making SHA Stays convenient for guests travelling by car, taxi or tour vehicle.",
  },
  {
    number: "03",
    title: "Near Abdul Kalam Memorial",
    text: "Stay close to one of Rameshwaram's most meaningful landmarks and explore the story of India's Missile Man.",
  },
  {
    number: "04",
    title: "Family Friendly",
    text: "Comfortable rooms and a welcoming environment for families, couples and travellers.",
  },
  {
    number: "05",
    title: "Personal & Intimate",
    text: "With just six rooms, SHA Stays offers a more personal stay experience rather than a crowded hotel atmosphere.",
  },
  {
    number: "06",
    title: "Explore Rameshwaram",
    text: "Use SHA Stays as your comfortable base while discovering temples, beaches, landmarks and the island's unique history.",
  },
] as const;

export type RoomPhoto = {
  src: string;
  alt: string;
  tall?: boolean;
};

export type Room = {
  slug: string;
  name: string;
  number: string;
  bed: string;
  countLabel: string;
  description: string;
  highlights: string[];
  image: string;
  photos: RoomPhoto[];
};

export const sharedAmenities = [
  "Private bathroom",
  "Air conditioning",
  "Hot water",
  "Wi-Fi",
  "Television",
  "RO drinking water",
  "Comfortable bedding",
];

export const mattressNote =
  "An extra mattress can be requested for any room, subject to availability. Please contact us before arrival.";

export const rooms: Room[] = [
  {
    slug: "sha-king-room",
    name: "SHA King Room",
    number: "01",
    bed: "King-size bed",
    countLabel: "Two rooms",
    description:
      "A comfortable room featuring a king-size bed, designed for couples and guests who prefer a little more sleeping space.",
    highlights: ["King-size bed", ...sharedAmenities],
    image: propertyPhotos.king,
    photos: [
      {
        src: "/images/rooms/king-room.webp",
        alt: "SHA King Room with a king-size bed, air conditioning and a decorative door",
      },
      {
        src: "/images/rooms/king-bed.webp",
        alt: "King-size bed with white pillows in the SHA King Room",
        tall: true,
      },
      {
        src: "/images/rooms/king-tv.webp",
        alt: "Television and dressing table beside the bed in the SHA King Room",
        tall: true,
      },
      {
        src: "/images/rooms/king-bathroom.webp",
        alt: "Washbasin and mirror in the SHA King Room bathroom",
        tall: true,
      },
      {
        src: "/images/rooms/king-entrance.webp",
        alt: "Entrance of a SHA King Room, with a white door and a palm beside the veranda",
        tall: true,
      },
    ],
  },
  {
    slug: "sha-queen-room",
    name: "SHA Queen Room",
    number: "02",
    bed: "Queen-size bed",
    countLabel: "Four rooms",
    description:
      "A cosy and comfortable room with a queen-size bed — a practical choice for couples and solo travellers exploring Rameshwaram.",
    highlights: ["Queen-size bed", ...sharedAmenities],
    image: propertyPhotos.queen,
    photos: [
      {
        src: "/images/rooms/queen-room.webp",
        alt: "SHA Queen Room with a queen-size bed, a chair and a wall-mounted television",
      },
      {
        src: "/images/rooms/queen-bed.webp",
        alt: "Queen-size bed with white pillows and a blue patterned curtain",
      },
      {
        src: "/images/rooms/queen-room-2.webp",
        alt: "Another SHA Queen Room, with a queen-size bed, a bench and framed pictures",
      },
      {
        src: "/images/rooms/queen-bathroom.webp",
        alt: "Private bathroom in a SHA Queen Room, with a shower, toilet and hot water",
        tall: true,
      },
      {
        src: "/images/rooms/queen-washbasin.webp",
        alt: "Washbasin and shell-framed mirror in a SHA Queen Room bathroom",
        tall: true,
      },
      {
        src: "/images/rooms/queen-entrance.webp",
        alt: "Two SHA Queen Room entrances, each with a short flight of steps and a small veranda",
      },
    ],
  },
];

export function getRoom(slug: string) {
  return rooms.find((room) => room.slug === slug);
}

export type Place = {
  slug: string;
  name: string;
  description: string;
  photo?: Photo;
};

export const places: Place[] = [
  {
    slug: "ramanathaswamy-temple",
    name: "Ramanathaswamy Temple",
    description:
      "One of India's most revered pilgrimage destinations and the spiritual heart of Rameshwaram.",
    photo: photos.gopuram,
  },
  {
    slug: "abdul-kalam-memorial",
    name: "Abdul Kalam Memorial",
    description:
      "Discover the life and legacy of Dr. A.P.J. Abdul Kalam, India's beloved former President and scientist.",
    photo: photos.kalam,
  },
  {
    slug: "pamban-bridge",
    name: "Pamban Bridge",
    description:
      "Witness one of India's most iconic railway and engineering landmarks connecting the mainland with Rameshwaram Island.",
    photo: photos.pamban,
  },
  {
    slug: "dhanushkodi",
    name: "Dhanushkodi",
    description:
      "Explore the atmospheric landscape at the eastern edge of the island, where history, sea and mythology meet.",
    photo: photos.dhanushkodi,
  },
  {
    slug: "ariyaman-beach",
    name: "Ariyaman Beach",
    description:
      "A quieter coastal escape for guests looking to slow down and enjoy the sea.",
  },
  {
    slug: "rameshwaram-island",
    name: "Rameshwaram Island",
    description:
      "Discover temples, beaches, viewpoints, historic places and local experiences across the island.",
    photo: photos.corridor,
  },
];

export const locationFacts = [
  { value: "5 km", label: "Ramanathaswamy Temple" },
  { value: "Near", label: "Abdul Kalam Memorial" },
  { value: "Easy access", label: "NH" },
  { value: "Rameshwaram", label: "Tamil Nadu" },
] as const;

export const stayFacts = [
  { label: "Check-in", value: "12:00 PM" },
  { label: "Check-out", value: "11:00 AM" },
  { label: "Rooms", value: "6" },
] as const;

export const trust = [
  {
    title: "Easy Booking",
    text: "Book directly with us or through your preferred travel platform.",
  },
  {
    title: "Helpful Hosts",
    text: "Have a question before your trip? We're happy to help.",
  },
  {
    title: "Comfortable Rooms",
    text: "A clean, comfortable place to rest after a day of exploring.",
  },
  {
    title: "Convenient Location",
    text: "Easy access to Rameshwaram's major attractions and highway routes.",
  },
] as const;

export const faqs = [
  {
    question: "How far is SHA Stays from Ramanathaswamy Temple?",
    answer: "SHA Stays is approximately 5 km from Ramanathaswamy Temple.",
  },
  {
    question: "Is SHA Stays near Abdul Kalam Memorial?",
    answer: "Yes. SHA Stays is located near the Abdul Kalam Memorial.",
  },
  {
    question: "Do you have parking?",
    answer:
      "Yes. Parking is free for bikes, cars and larger vehicles, with space for about 4–5 cars.",
  },
  {
    question: "What time is check-in?",
    answer: "Check-in: 12:00 PM",
  },
  {
    question: "What time is check-out?",
    answer: "Check-out: 11:00 AM",
  },
  {
    question: "Can we request an extra mattress?",
    answer: mattressNote,
  },
  {
    question: "Are the rooms suitable for families?",
    answer:
      "Our rooms are suitable for couples and small families depending on the selected room and sleeping arrangement. Please contact us if you need an extra mattress.",
  },
  {
    question: "Can I book directly?",
    answer:
      "Yes. Contact us by phone or WhatsApp for direct booking and availability.",
  },
] as const;

export const photoCredits: PhotoCredit[] = [
  photos.kalam.credit,
  photos.corridor.credit,
  photos.gopuram.credit,
  photos.pamban.credit,
  photos.dhanushkodi.credit,
];

export type GalleryPhoto = {
  src: string;
  alt: string;
  caption: string;
  /** Keeps the subject inside the shared 4:3 frame. */
  focus?: string;
};

export type GalleryGroup = {
  id: string;
  title: string;
  text: string;
  photos: GalleryPhoto[];
};

export const galleryGroups: GalleryGroup[] = [
  {
    id: "rooms",
    title: "Rooms",
    text: "Two SHA King Rooms and four SHA Queen Rooms, each with a private bathroom.",
    photos: [
      {
        src: "/images/rooms/king-room.webp",
        alt: "SHA King Room with a king-size bed, air conditioning and a decorative door",
        caption: "SHA King Room",
      },
      {
        src: "/images/rooms/king-bed.webp",
        alt: "King-size bed with white pillows in the SHA King Room",
        caption: "King-size bed",
        focus: "object-[center_42%]",
      },
      {
        src: "/images/rooms/queen-room.webp",
        alt: "SHA Queen Room with a queen-size bed, a chair and a wall-mounted television",
        caption: "SHA Queen Room",
      },
      {
        src: "/images/rooms/queen-bed.webp",
        alt: "Queen-size bed with white pillows and a blue patterned curtain",
        caption: "Queen-size bed",
      },
      {
        src: "/images/rooms/queen-room-2.webp",
        alt: "Another SHA Queen Room, with a queen-size bed, a bench and framed pictures",
        caption: "Another queen room",
      },
      {
        src: "/images/rooms/queen-entrance.webp",
        alt: "Two SHA Queen Room entrances, each with a short flight of steps and a small veranda",
        caption: "Queen room entrances",
      },
    ],
  },
  {
    id: "outdoors",
    title: "Outdoors",
    text: "The gate, the garden walkway and a few places to sit outside.",
    photos: [
      {
        src: "/images/gallery/outdoor-gate.webp",
        alt: "The front gate of SHA Stays, with the garden walkway and trees beyond",
        caption: "Front gate",
      },
      {
        src: "/images/gallery/outdoor-night.webp",
        alt: "The SHA Stays entrance at night, with lights along the garden walkway",
        caption: "Entrance at night",
      },
      {
        src: "/images/gallery/outdoor-walkway.webp",
        alt: "A lighted walkway between the rooms at SHA Stays",
        caption: "Lighted walkway",
        focus: "object-center",
      },
      {
        src: "/images/gallery/outdoor-arch.webp",
        alt: "The garden path at SHA Stays, shaded by trees between the rooms",
        caption: "Garden path",
      },
      {
        src: "/images/gallery/outdoor-tree.webp",
        alt: "A tree wrapped in warm lights in the SHA Stays garden",
        caption: "Garden lights",
        focus: "object-[center_35%]",
      },
      {
        src: "/images/gallery/outdoor-swing.webp",
        alt: "A wooden swing hanging from a tree in the SHA Stays garden",
        caption: "Garden swing",
        focus: "object-[center_62%]",
      },
    ],
  },
  {
    id: "amenities",
    title: "Amenities",
    text: "Outdoor seating, RO drinking water and the sugar gliders who live at the stay.",
    photos: [
      {
        src: "/images/gallery/amenity-seating.webp",
        alt: "Outdoor tables and stools under palm trees at SHA Stays",
        caption: "Outdoor seating",
      },
      {
        src: "/images/gallery/amenity-water.webp",
        alt: "An RO drinking-water dispenser at SHA Stays",
        caption: "RO drinking water",
        focus: "object-[center_28%]",
      },
      {
        src: "/images/gallery/amenity-pets.webp",
        alt: "Two sugar gliders at SHA Stays, eating a guava inside their enclosure",
        caption: "Sugar gliders at the stay",
        focus: "object-center",
      },
    ],
  },
];

export const aboutPhotos: GalleryPhoto[] = [
  galleryGroups[1].photos[1],
  galleryGroups[0].photos[0],
  galleryGroups[0].photos[2],
  galleryGroups[1].photos[3],
  galleryGroups[2].photos[0],
  galleryGroups[2].photos[1],
];

export const pillars = [
  {
    title: "Peace",
    text: "A calmer place to stay.",
  },
  {
    title: "Location",
    text: "Conveniently located for exploring Rameshwaram.",
  },
  {
    title: "Comfort",
    text: "A simple, comfortable and welcoming stay.",
  },
] as const;
