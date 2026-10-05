// Builds web-ready images in public/images from the masters in assets/images.
// Run with `npm run images` after adding or replacing a photo.
import { mkdir, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const srcDir = path.join(root, "assets/images");
const outDir = path.join(root, "public/images");
const manifestPath = path.join(root, "src/lib/image-widths.json");

// Must match images.deviceSizes in next.config.ts.
const WIDTHS = [640, 960, 1280, 1600];
const MAX_WIDTH = WIDTHS[WIDTHS.length - 1];
const WEBP = { quality: 72, effort: 6, smartSubsample: true };
const AVIF = { quality: 50, effort: 6 };
const HERO = "hero-banner.jpg";

async function listImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true, recursive: true });
  return entries
    .filter((e) => e.isFile() && /\.(jpe?g|png|webp)$/i.test(e.name))
    .map((e) => path.relative(srcDir, path.join(e.parentPath, e.name)))
    .sort();
}

function resized(file, width) {
  return sharp(path.join(srcDir, file)).rotate().resize({ width, withoutEnlargement: true });
}

async function write(pipeline, rel) {
  const out = path.join(outDir, rel);
  await mkdir(path.dirname(out), { recursive: true });
  const info = await pipeline.toFile(out);
  console.log(`${rel.padEnd(40)} ${info.width}x${info.height} ${(info.size / 1024).toFixed(0)} KB`);
  return info;
}

async function buildPhoto(file, manifest) {
  const { width } = await sharp(path.join(srcDir, file)).metadata();
  const base = file.replace(/\.(jpe?g|png|webp)$/i, "");
  const variants = WIDTHS.filter((w) => w < Math.min(width, MAX_WIDTH));

  await write(resized(file, MAX_WIDTH).webp(WEBP), `${base}.webp`);
  for (const w of variants) {
    await write(resized(file, w).webp(WEBP), `${base}-${w}.webp`);
  }
  manifest[`/images/${base.split(path.sep).join("/")}.webp`] = variants;
}

async function buildHero() {
  for (const w of [800, 1600]) {
    await write(resized(HERO, w).avif(AVIF), `hero-${w}.avif`);
    await write(resized(HERO, w).webp(WEBP), `hero-${w}.webp`);
  }
  // Social preview image (Open Graph / sitemap) stays JPEG for crawler compatibility.
  await write(resized(HERO, 1200).jpeg({ quality: 80, mozjpeg: true }), HERO);
}

const manifest = {};
for (const file of await listImages(srcDir)) {
  if (file === HERO) await buildHero();
  else await buildPhoto(file, manifest);
}
await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`\nWrote ${path.relative(root, manifestPath)}`);
