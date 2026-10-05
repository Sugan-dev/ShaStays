import { preload } from "react-dom";
import { PrivateResortPage } from "@/components/PrivateResortPage";
import { privateHero } from "@/lib/private-resort";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Private Resort in Rameshwaram",
  description:
    "Book SHA Stays exclusively for your group in Rameshwaram. A private 6-room resort for families, friends, pilgrimage groups and travellers arriving by van or Tempo Traveller.",
  path: "/private-resort",
});

export default function Page() {
  preload(privateHero.preload, {
    as: "image",
    type: "image/avif",
    fetchPriority: "high",
  });

  return <PrivateResortPage />;
}
