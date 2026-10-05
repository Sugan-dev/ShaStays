import imageWidths from "./image-widths.json";

const variants: Record<string, number[]> = imageWidths;

export default function imageLoader({ src, width }: { src: string; width: number }) {
  const match = variants[src]?.find((w) => w >= width);
  return match ? src.replace(/\.webp$/, `-${match}.webp`) : src;
}
