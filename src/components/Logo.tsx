import Image from "next/image";
import Link from "next/link";
import { cx } from "@/lib/links";

type Tone = "forest" | "ivory";

export function Logo({ tone = "forest" }: { tone?: Tone }) {
  return (
    <Link
      href="/"
      className={cx(
        "inline-flex items-center",
        tone === "ivory" && "rounded-2xl bg-ivory px-3 py-1.5",
      )}
    >
      <Image
        src="/images/logo.png"
        alt="SHA Stays"
        width={175}
        height={104}
        fetchPriority="low"
        unoptimized
        className="h-11 w-auto"
      />
    </Link>
  );
}
