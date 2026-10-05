import { preload } from "react-dom";
import { JsonLd } from "@/components/JsonLd";
import { HomePage } from "@/components/HomePage";
import { faqGraph, pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: site.title,
  description: site.description,
  path: "/",
  absolute: true,
});

export default function Page() {
  preload("/images/hero-800.avif", {
    as: "image",
    type: "image/avif",
    fetchPriority: "high",
  });

  return (
    <>
      <JsonLd data={faqGraph()} />
      <HomePage />
    </>
  );
}
