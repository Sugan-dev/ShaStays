import { LazyImage } from "@/components/LazyImage";
import type { GalleryPhoto } from "@/lib/site";
import { cx } from "@/lib/links";

/** Editorial mosaic: with 3+ photos the first is shown large (2×2 on desktop). */
export function PhotoGrid({ photos }: { photos: GalleryPhoto[] }) {
  const lead = photos.length >= 3;

  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-6 md:gap-x-4 lg:grid-cols-3">
      {photos.map((photo, index) => {
        const big = lead && index === 0;
        return (
          <figure key={photo.src} className={cx("group flex flex-col", big && "col-span-2 lg:row-span-2")}>
            <div
              className={cx(
                "relative overflow-hidden rounded-lg bg-sand/50",
                big ? "aspect-[4/3] lg:aspect-auto lg:flex-1" : "aspect-[4/3]",
              )}
            >
              <LazyImage
                src={photo.src}
                alt={photo.alt}
                fill
                className={cx(
                  "object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.04]",
                  photo.focus,
                )}
                sizes={big ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 50vw"}
              />
            </div>
            <figcaption className="mt-2.5 text-sm leading-5 text-muted">{photo.caption}</figcaption>
          </figure>
        );
      })}
    </div>
  );
}
