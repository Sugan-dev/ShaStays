import { LazyImage } from "@/components/LazyImage";
import type { GalleryPhoto } from "@/lib/site";
import { cx } from "@/lib/links";

export function PhotoGrid({ photos }: { photos: GalleryPhoto[] }) {
  return (
    <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
      {photos.map((photo) => (
        <figure key={photo.src}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-sand/40">
            <LazyImage
              src={photo.src}
              alt={photo.alt}
              fill
              className={cx("object-cover", photo.focus)}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </div>
          <figcaption className="mt-3 text-sm leading-5 text-muted">{photo.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
