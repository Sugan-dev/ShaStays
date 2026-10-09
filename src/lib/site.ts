import type { IconName } from "@/components/Icon";

/**
 * SHA Stays content: the single source of truth for copy and facts.
 *
 * Add property photographs only when they are photos of SHA Stays.
 * Leave a field blank rather than guessing; empty fields are hidden.
 */

export const site = {
  name: "SHA Stays",
  descriptor: "A Peaceful Stay in Rameshwaram",
  tagline: "Stay Close. Feel at Home.",
  supporting: "A peaceful boutique stay in Rameshwaram, close to the places that matter.",
  url: "https://shastays.com",
  locale: "en_IN",
  title: "SHA Stays | Rooms & Family Stay in Rameshwaram",
  description:
    "A six-room stay in Rameshwaram for families, pilgrims and road-trip travellers, near the Dr. A.P.J. Abdul Kalam Memorial and about 5 km from Ramanathaswamy Temple.",
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
  /** Full profile URL, e.g. https://www.instagram.com/<handle>/. Hidden while empty. */
  instagram: "https://www.instagram.com/sha.stays/",
};

export const propertyPhotos = {
  exterior: "/images/hero-1600.webp",
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
    src: "/images/kalam.webp",
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
    src: "/images/temple-corridor.webp",
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
    src: "/images/temple-gopuram.webp",
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
    src: "/images/pamban.webp",
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
    src: "/images/dhanushkodi.webp",
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
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms" },
  { href: "/private-resort", label: "Private Stay" },
  { href: "/experience", label: "Rameshwaram" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerNav = [
  { href: "/rooms", label: "Rooms" },
  { href: "/private-resort", label: "Private Stay" },
  { href: "/experience", label: "Rameshwaram" },
  { href: "/gallery", label: "Gallery" },
  { href: "/location", label: "Location" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const trustBar: { label: string; icon: IconName }[] = [
  { label: "6 Boutique Rooms", icon: "bed" },
  { label: "Near Abdul Kalam Memorial", icon: "landmark" },
  { label: "~5 km from Ramanathaswamy Temple", icon: "temple" },
  { label: "Easy Highway Access", icon: "road" },
  { label: "Parking Available", icon: "car" },
];

export const reasons: { title: string; text: string; icon: IconName }[] = [
  {
    title: "Convenient Location",
    text: "Near the Abdul Kalam Memorial and about 5 km from Ramanathaswamy Temple, with easy road access.",
    icon: "pin",
  },
  {
    title: "Boutique Experience",
    text: "Just six rooms, so the stay feels personal rather than crowded.",
    icon: "leaf",
  },
  {
    title: "Easy Road Access",
    text: "On the highway, convenient for travellers arriving by car, SUV or tour vehicle.",
    icon: "road",
  },
  {
    title: "Comfortable Rooms",
    text: "Clean, air-conditioned rooms with power backup, thoughtfully prepared for a restful night.",
    icon: "bed",
  },
  {
    title: "Safe Parking",
    text: "Free parking on site for bikes, cars and larger vehicles (about 4–5 cars), with 24-hour CCTV across the property.",
    icon: "car",
  },
  {
    title: "Group Friendly",
    text: "A practical choice for families and groups, or book the whole property for yourselves.",
    icon: "users",
  },
];

export type RoomPhoto = {
  src: string;
  alt: string;
  tall?: boolean;
};

export type Amenity = { label: string; icon: IconName };

export type Room = {
  slug: string;
  name: string;
  number: string;
  bed: string;
  countLabel: string;
  /** Maximum guests, including extra mattresses. */
  maxGuests: number;
  /** Starting rate per night in rupees, as confirmed by the owner. */
  priceFrom: number;
  description: string;
  amenities: Amenity[];
  image: string;
  photos: RoomPhoto[];
};

export const sharedAmenities: Amenity[] = [
  { label: "Air conditioning", icon: "ac" },
  { label: "Private bathroom", icon: "bath" },
  { label: "Hot water", icon: "hotWater" },
  { label: "Wi-Fi", icon: "wifi" },
  { label: "Television", icon: "tv" },
  { label: "RO drinking water", icon: "water" },
  { label: "Power backup", icon: "power" },
];

/** Property-wide, not in-room: never list CCTV as a room amenity. */
export const propertyAmenities: Amenity[] = [
  { label: "24-hour CCTV", icon: "cctv" },
  { label: "Free parking", icon: "car" },
  { label: "Outdoor seating", icon: "leaf" },
];

export const mattressNote =
  "An extra mattress can be requested for any room, subject to availability. Please contact us before arrival.";

export const roomSize = { label: "110–120 sq ft", min: 110, max: 120 };

/** Largest group the whole property takes on a private stay. */
export const maxGroupSize = 21;

export const languages = ["Tamil", "English"];

export function formatRupees(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`;
}

export function roomFacts(room: Room) {
  return [
    { label: "Price", value: `From ${formatRupees(room.priceFrom)} / night` },
    { label: "Sleeps", value: `Up to ${room.maxGuests} guests` },
    { label: "Room size", value: roomSize.label },
    { label: "Bed", value: room.bed },
  ];
}

export const rooms: Room[] = [
  {
    slug: "sha-king-room",
    name: "SHA King Room",
    number: "01",
    bed: "King-size bed",
    countLabel: "Two rooms",
    maxGuests: 5,
    priceFrom: 2500,
    description:
      "A comfortable room with a king-size bed, designed for couples and travellers looking for a relaxed stay.",
    amenities: [{ label: "King-size bed", icon: "bed" }, ...sharedAmenities],
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
    maxGuests: 4,
    priceFrom: 1800,
    description:
      "A welcoming room with a queen-size bed, designed for comfortable stays with family and friends.",
    amenities: [{ label: "Queen-size bed", icon: "bed" }, ...sharedAmenities],
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
  /** One line for photo cards. */
  short?: string;
  /** Only verified distances. */
  distance?: string;
  /** Longer guide text for the Rameshwaram page. Well-documented facts only. */
  details?: string;
  photo?: Photo;
};

export const places: Place[] = [
  {
    slug: "ramanathaswamy-temple",
    name: "Ramanathaswamy Temple",
    description:
      "One of India's most revered pilgrimage destinations and the spiritual heart of Rameshwaram.",
    short: "The spiritual heart of Rameshwaram.",
    distance: "About 5 km away",
    details:
      "One of the twelve Jyotirlingas and a Char Dham pilgrimage site, the temple is known for its long pillared corridors. Many pilgrims bathe in the sea at Agni Theertham and then in the sacred wells inside the temple before darshan. The temple is about 5 km from SHA Stays by road, so plan to drive rather than walk, and check timings and dress customs before you go.",
    photo: photos.gopuram,
  },
  {
    slug: "abdul-kalam-memorial",
    name: "Abdul Kalam Memorial",
    description:
      "Discover the life and legacy of Dr. A.P.J. Abdul Kalam, India's beloved former President and scientist.",
    short: "A meaningful stop, close to SHA Stays.",
    distance: "Near SHA",
    details:
      "Built by DRDO and opened in 2017, the memorial honours Dr. Kalam, who was born in Rameshwaram, with exhibits on his life and work. It is close to SHA Stays, which makes it an easy visit on the day you arrive or the morning you leave.",
    photo: photos.kalam,
  },
  {
    slug: "pamban-bridge",
    name: "Pamban Bridge",
    description:
      "Witness one of India's most iconic railway and engineering landmarks connecting the mainland with Rameshwaram Island.",
    short: "An iconic bridge over the sea to the island.",
    details:
      "The Pamban bridges join the island to the mainland at Mandapam. The original rail bridge, opened in 1914, was India's first sea bridge; a new vertical-lift rail bridge now stands beside it, alongside the road bridge you drive across to reach Rameshwaram.",
    photo: photos.pamban,
  },
  {
    slug: "dhanushkodi",
    name: "Dhanushkodi",
    description:
      "Explore the atmospheric landscape at the eastern edge of the island, where history, sea and mythology meet.",
    short: "Dramatic landscapes at the island's edge.",
    details:
      "Dhanushkodi was a busy town until the 1964 cyclone left it in ruins. Today people come for the remains of the old church and railway station, the open shoreline and the road out to Arichal Munai, the island's land's end.",
    photo: photos.dhanushkodi,
  },
  {
    slug: "ariyaman-beach",
    name: "Ariyaman Beach",
    description:
      "A quieter coastal escape for guests looking to slow down and enjoy the sea.",
    details:
      "Ariyaman Beach is on the mainland near Mandapam, before you cross Pamban Bridge, so it fits easily into the drive in or out.",
  },
  {
    slug: "rameshwaram-island",
    name: "Rameshwaram Island",
    description:
      "Discover temples, beaches, viewpoints, historic places and local experiences across the island.",
    details:
      "Rameshwaram (also spelt Rameswaram) sits on Pamban Island in the Ramanathapuram district of Tamil Nadu. With a car or a hired vehicle, most of the island's sights can be covered over a day or two from SHA Stays.",
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

export const dayPlan: { time: string; title: string; text: string; icon: IconName }[] = [
  {
    time: "Morning",
    title: "Temple visit",
    text: "Head to Ramanathaswamy Temple, about 5 km away.",
    icon: "sunrise",
  },
  {
    time: "Afternoon",
    title: "Abdul Kalam Memorial",
    text: "A meaningful stop, close to the stay.",
    icon: "sun",
  },
  {
    time: "Evening",
    title: "Pamban or Dhanushkodi",
    text: "The bridge, the sea and the island's edge.",
    icon: "sunset",
  },
  {
    time: "Night",
    title: "Return to SHA",
    text: "A quiet garden, a comfortable room, a good night's rest.",
    icon: "moon",
  },
];

export type Review = {
  name: string;
  text: string;
  /** e.g. "Google", "Booking.com". */
  source: string;
  /** Out of 5, exactly as shown on the source platform. */
  rating?: number;
  url?: string;
  date?: string;
};

/** Add genuine guest reviews only, copied word for word from the source. Never invent or edit them. */
export const reviews: Review[] = [];

export const faqs = [
  {
    question: "Where is SHA Stays in Rameshwaram?",
    answer:
      "SHA Stays is at 2/1750-5, near the Dr. A.P.J. Abdul Kalam Memorial, Rameshwaram, Tamil Nadu 623526, with easy access from the highway.",
  },
  {
    question: "How far is SHA Stays from Ramanathaswamy Temple?",
    answer:
      "SHA Stays is approximately 5 km from Ramanathaswamy Temple by road. It is not within walking distance, so plan to travel to the temple by car or another vehicle.",
  },
  {
    question: "Is SHA Stays near Abdul Kalam Memorial?",
    answer: "Yes. SHA Stays is located near the Dr. A.P.J. Abdul Kalam Memorial.",
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
    question: "Is there power backup and security?",
    answer: "Yes. The rooms have power backup, and the property has 24-hour CCTV.",
  },
  {
    question: "Can we request an extra mattress?",
    answer: mattressNote,
  },
  {
    question: "How much does a room cost?",
    answer:
      "SHA Queen Rooms start from ₹1,800 per night and SHA King Rooms from ₹2,500 per night. The rate depends on your dates, and we confirm it along with availability when you enquire.",
  },
  {
    question: "Are the rooms suitable for families?",
    answer:
      "Yes. A SHA Queen Room sleeps up to 4 guests and a SHA King Room up to 5, using extra mattresses where needed. Rooms are 110–120 sq ft. Please tell us your group when you enquire so we can arrange the bedding.",
  },
  {
    question: "Can we book the whole property for a group?",
    answer:
      "Yes. Families and groups of up to 21 guests can book all six rooms as a private stay in Rameshwaram. We quote for your dates and group size when you enquire.",
  },
  {
    question: "Which languages do you speak?",
    answer: "We speak Tamil and English.",
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

const gp = {
  gate: {
    src: "/images/gallery/outdoor-gate.webp",
    alt: "The front gate of SHA Stays, with the garden walkway and trees beyond",
    caption: "Front gate",
  },
  forecourt: {
    src: "/images/gallery/entrance-forecourt-night.webp",
    alt: "The SHA Stays entrance lit up at night, with a motorbike and an SUV parked in the open forecourt",
    caption: "Entrance and parking at night",
    focus: "object-[center_60%]",
  },
  archNight: {
    src: "/images/gallery/walkway-arch-night.webp",
    alt: "A paved garden walkway at SHA Stays at dusk, framed by lit arches, palms and potted plants",
    caption: "Garden walkway at dusk",
  },
  cottageNight: {
    src: "/images/gallery/king-cottage-night.webp",
    alt: "A SHA King Room cottage at night, with palms and soft garden lighting in front",
    caption: "A room at night",
    focus: "object-[center_55%]",
  },
  nightEntrance: {
    src: "/images/gallery/outdoor-night.webp",
    alt: "The SHA Stays entrance at night, with lights along the garden walkway",
    caption: "Entrance at night",
  },
  walkway: {
    src: "/images/gallery/outdoor-walkway.webp",
    alt: "A lighted walkway between the rooms at SHA Stays",
    caption: "Lighted walkway",
    focus: "object-center",
  },
  arch: {
    src: "/images/gallery/outdoor-arch.webp",
    alt: "The garden path at SHA Stays, shaded by trees between the rooms",
    caption: "Garden path",
  },
  tree: {
    src: "/images/gallery/outdoor-tree.webp",
    alt: "A tree wrapped in warm lights in the SHA Stays garden",
    caption: "Garden lights",
    focus: "object-[center_35%]",
  },
  swing: {
    src: "/images/gallery/outdoor-swing.webp",
    alt: "A wooden swing hanging from a tree in the SHA Stays garden",
    caption: "Garden swing",
    focus: "object-[center_62%]",
  },
  signboard: {
    src: "/images/gallery/highway-signboard.webp",
    alt: "The SHA Stays signboard beside the highway in Rameshwaram, pointing travellers to the stay",
    caption: "Our signboard on the highway",
    focus: "object-[center_70%]",
  },
  kingRoom: {
    src: "/images/rooms/king-room.webp",
    alt: "SHA King Room with a king-size bed, air conditioning and a decorative door",
    caption: "SHA King Room",
  },
  kingBed: {
    src: "/images/rooms/king-bed.webp",
    alt: "King-size bed with white pillows in the SHA King Room",
    caption: "King-size bed",
    focus: "object-[center_42%]",
  },
  queenRoom: {
    src: "/images/rooms/queen-room.webp",
    alt: "SHA Queen Room with a queen-size bed, a chair and a wall-mounted television",
    caption: "SHA Queen Room",
  },
  queenBed: {
    src: "/images/rooms/queen-bed.webp",
    alt: "Queen-size bed with white pillows and a blue patterned curtain",
    caption: "Queen-size bed",
  },
  queenRoom2: {
    src: "/images/rooms/queen-room-2.webp",
    alt: "Another SHA Queen Room, with a queen-size bed, a bench and framed pictures",
    caption: "Another queen room",
  },
  queenBath: {
    src: "/images/rooms/queen-bathroom.webp",
    alt: "Private bathroom in a SHA Queen Room, with a shower, toilet and hot water",
    caption: "Private bathroom",
  },
  kingBath: {
    src: "/images/rooms/king-bathroom.webp",
    alt: "Washbasin and mirror in the SHA King Room bathroom",
    caption: "Washbasin, SHA King Room",
  },
  queenEntrance: {
    src: "/images/rooms/queen-entrance.webp",
    alt: "Two SHA Queen Room entrances, each with a short flight of steps and a small veranda",
    caption: "Queen room entrances",
  },
  seating: {
    src: "/images/gallery/amenity-seating.webp",
    alt: "Outdoor tables and stools under palm trees at SHA Stays",
    caption: "Outdoor seating",
  },
  water: {
    src: "/images/gallery/amenity-water.webp",
    alt: "An RO drinking-water dispenser at SHA Stays",
    caption: "RO drinking water",
    focus: "object-[center_28%]",
  },
  pets: {
    src: "/images/gallery/amenity-pets.webp",
    alt: "Two sugar gliders at SHA Stays, eating a guava inside their enclosure",
    caption: "Sugar gliders at the stay",
    focus: "object-center",
  },
} satisfies Record<string, GalleryPhoto>;

export const galleryPhotos = gp;

export const galleryGroups: GalleryGroup[] = [
  {
    id: "the-stay",
    title: "The stay",
    text: "The gate, the garden walkway and the forecourt, by day and after dark.",
    photos: [gp.archNight, gp.gate, gp.forecourt, gp.cottageNight, gp.arch, gp.signboard],
  },
  {
    id: "rooms",
    title: "Rooms",
    text: "Two SHA King Rooms and four SHA Queen Rooms, each with a private bathroom.",
    photos: [gp.kingRoom, gp.kingBed, gp.queenRoom, gp.queenBath, gp.queenBed, gp.queenRoom2, gp.kingBath, gp.queenEntrance],
  },
  {
    id: "garden",
    title: "Garden and evenings",
    text: "Lights in the trees, a swing, and a few places to sit outside.",
    photos: [gp.nightEntrance, gp.tree, gp.swing, gp.walkway, gp.seating],
  },
  {
    id: "amenities",
    title: "Little comforts",
    text: "RO drinking water and the sugar gliders who live at the stay.",
    photos: [gp.water, gp.pets],
  },
];

/** Home page gallery, in order: exterior, best room, bed, bathroom, garden, night. */
export const homeGallery: GalleryPhoto[] = [gp.gate, gp.kingRoom, gp.queenBed, gp.queenBath, gp.archNight, gp.forecourt];

export const aboutPhotos: GalleryPhoto[] = [gp.nightEntrance, gp.kingRoom, gp.queenRoom, gp.arch, gp.seating, gp.water];

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
