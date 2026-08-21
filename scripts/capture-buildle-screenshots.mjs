import { chromium } from "playwright";
import { fileURLToPath } from "node:url";

const outDir = fileURLToPath(new URL("../public/screenshots", import.meta.url));

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.waitForTimeout(1500);
await page.screenshot({ path: `${outDir}/buildle-board.png` });

await page.getByText("PLAY DAILY").click();
await page.waitForTimeout(1500);
await page.screenshot({ path: `${outDir}/buildle-howtoplay.png` });

await page.getByText("GOT IT").click();
await page.waitForTimeout(500);
await page.getByText("Tap to choose").first().click();
await page.waitForTimeout(1000);
await page.screenshot({ path: `${outDir}/buildle-picker.png` });

await browser.close();
console.log("done");
