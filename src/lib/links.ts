import { contact } from "@/lib/site";

export function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function phoneHref(phone = contact.phone) {
  const value = phone.trim();
  if (!value) return "/contact";
  return `tel:${value.replace(/[^\d+]/g, "")}`;
}

export function whatsappHref(message?: string) {
  const digits = contact.whatsapp.replace(/\D/g, "");
  if (!digits) return "/contact";
  if (!message) return `https://wa.me/${digits}`;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export function hasWhatsapp() {
  return contact.whatsapp.replace(/\D/g, "").length > 0;
}

export function hasPhone() {
  return contact.phone.trim().length > 0;
}

export function hasEmail() {
  return contact.email.trim().length > 0;
}

export function displayPhone() {
  const numbers = [contact.phoneDisplay, contact.phoneAltDisplay].filter(Boolean);
  return numbers.join(" / ") || "[ Insert phone number ]";
}

export function displayWhatsapp() {
  return contact.whatsappDisplay.trim() || contact.whatsapp.trim() || "[ Insert WhatsApp number ]";
}

export function displayEmail() {
  return contact.email.trim() || "[ Insert email ]";
}

export const whatsappGreeting =
  "Hello SHA Stays, I would like to ask about a stay in Rameshwaram.";

export const whatsappBooking =
  "Hello SHA Stays, I would like to book a stay in Rameshwaram.";
