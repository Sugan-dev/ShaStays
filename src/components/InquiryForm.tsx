"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { contact, rooms } from "@/lib/site";
import { hasEmail, hasWhatsapp, whatsappHref } from "@/lib/links";

type Status = "idle" | "whatsapp" | "email" | "copy";

const fieldClass =
  "mt-2 w-full rounded-2xl border border-line bg-paper px-4 py-3 text-charcoal outline-none transition placeholder:text-muted/70 focus:border-forest";

export function InquiryForm({ initialRoom = "" }: { initialRoom?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [draft, setDraft] = useState("");
  const [room, setRoom] = useState(initialRoom);
  const [formKey, setFormKey] = useState(0);
  const handedOff = useRef(false);
  const leftPage = useRef(false);

  useEffect(() => {
    const selected = new URLSearchParams(window.location.search).get("room") ?? "";
    if (rooms.some((item) => item.slug === selected)) setRoom(selected);
  }, []);

  function clearForm() {
    setRoom("");
    setError("");
    setFormKey((key) => key + 1);
  }

  useEffect(() => {
    function onVisibility() {
      if (!handedOff.current) return;
      if (document.visibilityState === "hidden") {
        leftPage.current = true;
        return;
      }
      if (!leftPage.current) return;
      leftPage.current = false;
      handedOff.current = false;
      clearForm();
    }

    function onPageShow(event: PageTransitionEvent) {
      if (!event.persisted || !handedOff.current) return;
      handedOff.current = false;
      leftPage.current = false;
      clearForm();
    }

    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pageshow", onPageShow);
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pageshow", onPageShow);
    };
  }, []);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const email = String(form.get("email") || "").trim();
    const checkIn = String(form.get("checkIn") || "");
    const checkOut = String(form.get("checkOut") || "");
    const guests = String(form.get("guests") || "");
    const room = String(form.get("room") || "");
    const note = String(form.get("note") || "").trim();

    if (checkIn && checkOut && checkOut <= checkIn) {
      setError("Check-out should be after check-in.");
      return;
    }

    const roomName = rooms.find((item) => item.slug === room)?.name || room || "Not sure yet";
    const message = [
      "Hello SHA Stays, I would like to enquire about a stay.",
      `Name: ${name}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : "",
      `Check-in: ${formatStayDate(checkIn)}`,
      `Check-out: ${formatStayDate(checkOut)}`,
      `Guests: ${guests}`,
      `Room: ${roomName}`,
      note ? `Note: ${note}` : "",
      "",
      "Please confirm availability. I understand this message does not reserve the room until you reply.",
    ]
      .filter(Boolean)
      .join("\n");

    if (hasWhatsapp()) {
      const url = whatsappHref(message);
      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      link.remove();
      handedOff.current = true;
      clearForm();
      setStatus("whatsapp");
      return;
    }

    if (hasEmail()) {
      handedOff.current = true;
      clearForm();
      setStatus("email");
      window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent("Stay enquiry — SHA Stays")}&body=${encodeURIComponent(message)}`;
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
      key={formKey}
      onSubmit={onSubmit}
      onInput={() => {
        handedOff.current = false;
      }}
      className="rounded-[1.75rem] bg-paper p-6 shadow-[0_18px_50px_rgba(24,60,53,0.06)] ring-1 ring-black/5 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-charcoal">
          Name
          <input name="name" required autoComplete="name" className={fieldClass} />
        </label>
        <label className="block text-sm font-medium text-charcoal">
          Phone
          <input name="phone" type="tel" required autoComplete="tel" className={fieldClass} />
        </label>
        <label className="block text-sm font-medium text-charcoal sm:col-span-2">
          Email <span className="font-normal text-muted">(optional)</span>
          <input name="email" type="email" autoComplete="email" className={fieldClass} />
        </label>
        <label className="block text-sm font-medium text-charcoal">
          Check-in
          <input name="checkIn" type="date" required className={fieldClass} />
        </label>
        <label className="block text-sm font-medium text-charcoal">
          Check-out
          <input name="checkOut" type="date" required className={fieldClass} />
        </label>
        <label className="block text-sm font-medium text-charcoal">
          Guests
          <select name="guests" defaultValue="2" className={fieldClass}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5+</option>
          </select>
        </label>
        <label className="block text-sm font-medium text-charcoal">
          Room
          <select name="room" value={room} onChange={(event) => setRoom(event.target.value)} className={fieldClass}>
            <option value="">Not sure yet</option>
            {rooms.map((room) => (
              <option key={room.slug} value={room.slug}>
                {room.name}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-charcoal sm:col-span-2">
          Anything we should know?
          <textarea name="note" rows={4} className={fieldClass} placeholder="Travel plans, an extra mattress, arrival time…" />
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
        Send on WhatsApp
      </button>
      <p className="mt-4 text-sm leading-relaxed text-muted">
        This opens WhatsApp with your enquiry ready to send. It does not reserve a room until SHA Stays confirms availability.
      </p>
      {status === "whatsapp" ? (
        <p className="mt-4 rounded-2xl bg-sand/70 px-4 py-3 text-sm text-forest" role="status">
          WhatsApp is open with your enquiry. Send the message there and we will reply with availability.
        </p>
      ) : null}
      {status === "email" ? (
        <p className="mt-4 rounded-2xl bg-sand/70 px-4 py-3 text-sm text-forest">
          Your email app should open with the enquiry ready to send.
        </p>
      ) : null}
      {status === "copy" ? (
        <div className="mt-4 rounded-2xl bg-sand/70 px-4 py-4 text-sm text-forest">
          <p>
            Phone, WhatsApp and email are not published yet. Copy this enquiry and send it once the contact details are added.
          </p>
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

function formatStayDate(value: string) {
  if (!value) return "";
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}
