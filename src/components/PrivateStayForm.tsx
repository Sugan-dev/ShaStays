"use client";

import { FormEvent, useEffect, useState } from "react";
import { contact, maxGroupSize } from "@/lib/site";
import { vehicleTypes } from "@/lib/private-resort";
import { hasEmail, hasWhatsapp, whatsappHref } from "@/lib/links";
import { trackEvent } from "@/lib/analytics";

type Status = "idle" | "whatsapp" | "email" | "copy";

const fieldClass =
  "mt-2 w-full rounded-2xl border border-line bg-paper px-4 py-3 text-base text-charcoal outline-none transition placeholder:text-muted/70 focus:border-forest";

export function PrivateStayForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [draft, setDraft] = useState("");
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    const now = new Date();
    const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
    setMinDate(local.toISOString().slice(0, 10));
  }, []);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const travelDate = String(form.get("travelDate") || "");
    const guests = String(form.get("guests") || "").trim();
    const rooms = String(form.get("rooms") || "");
    const vehicle = String(form.get("vehicle") || "");
    const nights = String(form.get("nights") || "").trim();
    const food = String(form.get("food") || "");
    const sightseeing = String(form.get("sightseeing") || "");
    const note = String(form.get("note") || "").trim();

    if (!/^\d+$/.test(guests) || Number(guests) < 1) {
      setError("Enter the number of guests.");
      return;
    }
    if (!/^\d+$/.test(nights) || Number(nights) < 1) {
      setError("Enter the number of nights.");
      return;
    }

    const message = [
      "Hi SHA Stays, I am interested in booking the entire property for a group.",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Travel date: ${formatStayDate(travelDate)}`,
      `Guests: ${guests}`,
      `Rooms: ${rooms}`,
      `Vehicle: ${vehicle}`,
      `Nights: ${nights}`,
      `Food required: ${food}`,
      `Sightseeing required: ${sightseeing}`,
      note ? `Message: ${note}` : "",
      "",
      "Please share availability and a personalised package. I understand this message does not reserve the property until you confirm.",
    ]
      .filter(Boolean)
      .join("\n");

    trackEvent("generate_lead", {
      form_name: "private_stay_enquiry",
      method: hasWhatsapp() ? "whatsapp" : hasEmail() ? "email" : "copy",
      vehicle_type: vehicle,
    });

    if (hasWhatsapp()) {
      const link = document.createElement("a");
      link.href = whatsappHref(message);
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      link.remove();
      setStatus("whatsapp");
      return;
    }

    if (hasEmail()) {
      window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent("Private stay enquiry — SHA Stays")}&body=${encodeURIComponent(message)}`;
      setStatus("email");
      return;
    }

    setDraft(message);
    setStatus("copy");
  }

  async function copyDraft() {
    if (!draft) return;
    await navigator.clipboard.writeText(draft);
  }

  return (
    <form
      id="private-stay-form"
      onSubmit={onSubmit}
      className="rounded-panel bg-paper p-6 shadow-soft ring-1 ring-black/5 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-charcoal">
          Name
          <input name="name" required autoComplete="name" className={fieldClass} />
        </label>
        <label className="block text-sm font-medium text-charcoal">
          Phone / WhatsApp
          <input name="phone" type="tel" required autoComplete="tel" inputMode="tel" className={fieldClass} />
        </label>
        <label className="block text-sm font-medium text-charcoal">
          Travel Date
          <input name="travelDate" type="date" required min={minDate || undefined} className={fieldClass} />
        </label>
        <label className="block text-sm font-medium text-charcoal">
          Number of Guests
          <input name="guests" type="number" required min={1} max={maxGroupSize} inputMode="numeric" className={fieldClass} />
          <span className="mt-2 block text-xs leading-relaxed font-normal text-muted">
            The property sleeps up to {maxGroupSize} guests.
          </span>
        </label>
        <label className="block text-sm font-medium text-charcoal">
          Number of Rooms Required
          <select name="rooms" defaultValue="6" required className={fieldClass}>
            {["1", "2", "3", "4", "5", "6"].map((count) => (
              <option key={count} value={count}>
                {count}
              </option>
            ))}
          </select>
          <span className="mt-2 block text-xs leading-relaxed font-normal text-muted">
            A private stay booking reserves all 6 rooms.
          </span>
        </label>
        <label className="block text-sm font-medium text-charcoal">
          Vehicle Type
          <select name="vehicle" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select vehicle type
            </option>
            {vehicleTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-charcoal sm:col-span-2">
          Number of Nights
          <input name="nights" type="number" required min={1} max={30} inputMode="numeric" className={fieldClass} />
        </label>
        <Choice name="food" legend="Food Required?" />
        <Choice name="sightseeing" legend="Sightseeing Required?" />
        <label className="block text-sm font-medium text-charcoal sm:col-span-2">
          Message
          <textarea
            name="note"
            rows={4}
            className={fieldClass}
            placeholder="Arrival time, temple plans, an extra mattress…"
          />
        </label>
      </div>
      {error ? (
        <p className="mt-4 text-sm text-terracotta-ink" role="alert">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-terracotta-deep px-6 text-sm font-medium text-white transition hover:bg-terracotta-ink sm:w-auto"
      >
        Request Private Stay Quote
      </button>
      <p className="mt-4 text-sm leading-relaxed text-muted">
        This opens WhatsApp with your enquiry ready to send. It does not reserve the property until SHA Stays confirms availability.
      </p>
      {status === "whatsapp" ? (
        <p className="mt-4 rounded-2xl bg-sand/70 px-4 py-3 text-sm text-forest" role="status">
          WhatsApp is open with your private-stay enquiry. Send the message there and we will reply with availability and a package.
        </p>
      ) : null}
      {status === "email" ? (
        <p className="mt-4 rounded-2xl bg-sand/70 px-4 py-3 text-sm text-forest" role="status">
          Your email app should open with the enquiry ready to send.
        </p>
      ) : null}
      {status === "copy" ? (
        <div className="mt-4 rounded-2xl bg-sand/70 px-4 py-4 text-sm text-forest">
          <p>Copy this enquiry and send it once contact details are available.</p>
          <button
            type="button"
            onClick={copyDraft}
            className="mt-3 inline-flex min-h-10 items-center rounded-full border border-forest/20 px-4 text-sm"
          >
            Copy enquiry
          </button>
          <pre className="mt-3 whitespace-pre-wrap font-sans text-xs leading-relaxed text-charcoal/80">{draft}</pre>
        </div>
      ) : null}
    </form>
  );
}

function Choice({ name, legend }: { name: string; legend: string }) {
  return (
    <fieldset>
      <legend className="text-sm font-medium text-charcoal">{legend}</legend>
      <div className="mt-2 grid grid-cols-2 gap-3">
        {["Yes", "No"].map((option) => (
          <label
            key={option}
            className="flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-2xl border border-line bg-paper text-sm has-[:checked]:border-forest has-[:checked]:bg-sand"
          >
            <input type="radio" name={name} value={option} required className="accent-forest" />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function formatStayDate(value: string) {
  if (!value) return "";
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}
