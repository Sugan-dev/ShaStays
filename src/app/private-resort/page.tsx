import { preload } from "react-dom";
import { PrivateResortPage } from "@/components/PrivateResortPage";
import { privateHero } from "@/lib/private-resort";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Private Group Stay in Rameshwaram",
  description:
    "Planning a family or group trip to Rameshwaram? Book all six rooms at SHA Stays as a private group stay for up to 21 guests. Enquire about your dates and vehicle.",
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
