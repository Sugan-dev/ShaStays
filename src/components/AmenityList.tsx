import { Icon } from "@/components/Icon";
import type { Amenity } from "@/lib/site";
import { cx } from "@/lib/links";

export function AmenityList({ amenities, className }: { amenities: Amenity[]; className?: string }) {
  return (
    <ul className={cx("grid grid-cols-2 gap-x-4 gap-y-3", className)}>
      {amenities.map((item) => (
        <li key={item.label} className="flex items-center gap-2.5 text-sm text-charcoal/85">
          <Icon name={item.icon} className="text-forest" />
          {item.label}
        </li>
      ))}
    </ul>
  );
}
