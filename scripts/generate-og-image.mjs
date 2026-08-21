import sharp from "sharp";
import { fileURLToPath } from "node:url";

const width = 1200;
const height = 630;

const projects = [
  { name: "Kyma", slug: "kyma", color: "#8b5cf6", pitch: "Configurable internal IT toolkit for ticket tracking, asset/inventory management, and admin dashboards in one platform." },
  { name: "Atlas", slug: "atlas", color: "#0ea5e9", pitch: "A platform for discovering, tracking, reviewing, and discussing movies & TV shows." },
  { name: "PullUp", slug: "pullup", color: "#f43f5e", pitch: "A mobile social app for students with opt-in, time-boxed location sharing." },
];

function escapeXml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function wrapText(text, maxChars) {
  const words = text.split(" ");
  const lines = [];
  let line = "";
  for (const word of words) {
    if ((line + " " + word).trim().length > maxChars) {
      lines.push(line.trim());
      line = word;
    } else {
      line = (line + " " + word).trim();
    }
  }
  if (line) lines.push(line);
  return lines;
}

async function renderHomepage() {
  const dotsX = 80;
  const dotsY = 520;
  let cursor = dotsX;
  const dotSpans = projects
    .map((p) => {
      const circle = `<circle cx="${cursor + 8}" cy="${dotsY}" r="7" fill="${p.color}" />`;
      const labelX = cursor + 24;
      const text = `<text x="${labelX}" y="${dotsY + 6}" font-family="Arial, Helvetica, sans-serif" font-size="20" fill="#c9c9c9">${p.name}</text>`;
      cursor += 24 + p.name.length * 12 + 36;
      return circle + text;
    })
    .join("\n");

  const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${width}" height="${height}" fill="#0a0a0a" />
  <rect x="80" y="80" width="64" height="64" rx="14" fill="#ededed" />
  <text x="112" y="124" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="700" fill="#0a0a0a">VS</text>

  <text x="80" y="260" font-family="Arial, Helvetica, sans-serif" font-size="54" font-weight="700" fill="#ededed">Victor Gabriel da Silva</text>
  <text x="80" y="304" font-family="Arial, Helvetica, sans-serif" font-size="28" fill="#9a9a9a">Full-Stack Developer</text>

  <text x="80" y="372" font-family="Arial, Helvetica, sans-serif" font-size="25" fill="#d4d4d4">Full-stack products &amp; internal tools —</text>
  <text x="80" y="408" font-family="Arial, Helvetica, sans-serif" font-size="25" fill="#d4d4d4">from ITSM platforms to consumer apps.</text>

  ${dotSpans}

  <text x="1120" y="580" text-anchor="end" font-family="Arial, Helvetica, sans-serif" font-size="18" fill="#707070">kensyy.github.io/portfolio</text>
</svg>
`;

  await sharp(Buffer.from(svg))
    .png()
    .toFile(fileURLToPath(new URL("../public/og-image.png", import.meta.url)));
}

async function renderProject(project) {
  const lines = wrapText(project.pitch, 46);
  const pitchLines = lines
    .map(
      (line, i) =>
        `<text x="80" y="${372 + i * 36}" font-family="Arial, Helvetica, sans-serif" font-size="25" fill="#d4d4d4">${escapeXml(line)}</text>`,
    )
    .join("\n");

  const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${width}" height="${height}" fill="#0a0a0a" />
  <rect x="80" y="80" width="10" height="64" rx="5" fill="${project.color}" />
  <text x="112" y="128" font-family="Arial, Helvetica, sans-serif" font-size="54" font-weight="700" fill="#ededed">${project.name}</text>
  <text x="80" y="180" font-family="Arial, Helvetica, sans-serif" font-size="24" fill="#9a9a9a">Victor Gabriel da Silva — Case Study</text>

  ${pitchLines}

  <text x="1120" y="580" text-anchor="end" font-family="Arial, Helvetica, sans-serif" font-size="18" fill="#707070">kensyy.github.io/portfolio/work/${project.slug}</text>
</svg>
`;

  await sharp(Buffer.from(svg))
    .png()
    .toFile(fileURLToPath(new URL(`../public/og-${project.slug}.png`, import.meta.url)));
}

await renderHomepage();
for (const project of projects) {
  await renderProject(project);
}

console.log("done");
