import { chromium } from "playwright";
import { fileURLToPath } from "node:url";

const outDir = fileURLToPath(new URL("../public/screenshots", import.meta.url));

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

await page.goto("http://localhost:3000");
await page.fill('input[type="email"]', "admin@kyma.local");
await page.fill('input[type="password"]', "kyma-dev-password");
await page.click('button[type="submit"]');
await page.waitForURL("**/dashboard");
await page.screenshot({ path: `${outDir}/kyma-dashboard.png` });

await page.goto("http://localhost:3000/tickets");
await page.waitForSelector("text=Tickets");
await page.screenshot({ path: `${outDir}/kyma-tickets.png` });

await page.goto("http://localhost:3000/admin/custom-fields");
await page.waitForSelector("text=Custom fields");
await page.screenshot({ path: `${outDir}/kyma-custom-fields.png` });

await browser.close();
console.log("done");
