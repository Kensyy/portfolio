import { chromium } from "playwright";
import { fileURLToPath } from "node:url";

const outDir = fileURLToPath(new URL("../public/screenshots", import.meta.url));

const browser = await chromium.launch();
// Portrait viewport — this is a mobile app rendered via react-native-web.
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });

// View-only — no forms submitted, no auth, no writes.
await page.goto("http://localhost:8090");
await page.waitForTimeout(4000);
await page.screenshot({ path: `${outDir}/pullup-onboarding.png` });

await browser.close();
console.log("done");
