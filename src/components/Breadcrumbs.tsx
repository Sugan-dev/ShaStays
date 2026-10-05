import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbGraph } from "@/lib/seo";

export function Breadcrumbs({
  items,
  tone = "default",
}: {
  items: { name: string; path: string }[];
  tone?: "default" | "light";
}) {
  const trail = [{ name: "Home", path: "/" }, ...items];
  const quiet = tone === "light" ? "text-sand" : "text-muted";
  const current = tone === "light" ? "text-white" : "text-forest";

  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-4">
        <ol className={`flex flex-wrap items-center gap-x-2 text-sm ${quiet}`}>
          {trail.map((item, index) => {
            const last = index === trail.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-2">
                {index > 0 ? <span aria-hidden="true">/</span> : null}
                {last ? (
                  <span aria-current="page" className={current}>
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.path} className="underline-offset-4 hover:underline">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbGraph(trail)} />
    </>
  );
}
