import { chromium } from "playwright";
import { fileURLToPath } from "node:url";

const outDir = fileURLToPath(new URL("../public/screenshots", import.meta.url));

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

await page.goto("http://localhost:5173", { waitUntil: "networkidle" });
await page.waitForTimeout(1500);
await page.screenshot({ path: `${outDir}/tiermaker-login.png` });

await page.getByPlaceholder("Display name").fill("Victor");
await page.getByPlaceholder("Passcode").fill("portfolio-demo-1");
await page.getByText("Continue").click();
await page.waitForTimeout(1500);
await page.screenshot({ path: `${outDir}/tiermaker-lobby.png` });

await page.getByText("Token Test Board").click();
await page.waitForTimeout(2000);
await page.screenshot({ path: `${outDir}/tiermaker-board.png` });

await browser.close();
console.log("done");
