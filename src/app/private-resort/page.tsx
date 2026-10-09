import { preload } from "react-dom";
import { PrivateResortPage } from "@/components/PrivateResortPage";
import { privateHero } from "@/lib/private-resort";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Private Group Stay in Rameshwaram",
  description:
    "Book the entire SHA Stays property for your group in Rameshwaram. A private 6-room stay for families, friends, pilgrimage groups and travellers arriving by car, van or Tempo Traveller.",
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
