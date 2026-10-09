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
    </div>
  );
}
