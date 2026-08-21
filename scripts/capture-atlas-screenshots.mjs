import { chromium } from "playwright";
import { fileURLToPath } from "node:url";

const outDir = fileURLToPath(new URL("../public/screenshots", import.meta.url));

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

// View-only — no forms submitted, no auth, no writes.
await page.goto("http://localhost:3000/en");
await page.waitForTimeout(4000);
const cookieBtn = page.getByText("GOT IT", { exact: true });
if (await cookieBtn.isVisible().catch(() => false)) {
  await cookieBtn.click();
  await page.waitForTimeout(500);
}
await page.screenshot({ path: `${outDir}/atlas-home.png` });

await page.goto("http://localhost:3000/en/movies");
await page.waitForTimeout(3000);
await page.screenshot({ path: `${outDir}/atlas-movies.png` });

await browser.close();
console.log("done");
