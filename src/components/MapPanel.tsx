import { Icon } from "@/components/Icon";
import { contact } from "@/lib/site";

export function MapPanel() {
  return (
    <div>
      <div className="overflow-hidden rounded-panel border border-line bg-sand shadow-soft">
        <iframe
          title="Map showing SHA Stays near the Dr. A.P.J. Abdul Kalam Memorial in Rameshwaram"
          src={contact.mapEmbedUrl}
          className="h-[380px] w-full md:h-[460px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted">{contact.mapNote}</p>
      <a
        href={contact.googleMapsUrl}
        className="group mt-2 inline-flex items-center gap-2 font-medium text-forest underline decoration-transparent underline-offset-4 transition hover:decoration-current"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="pin" className="h-4 w-4" />
        Find us on Google Maps
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </div>
  );
}
