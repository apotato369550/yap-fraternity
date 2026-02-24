import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const VIEWPORTS = {
  desktop: { width: 1920, height: 1080, name: 'desktop' },
  mobile: { width: 375, height: 667, name: 'mobile' }
};

const PAGES = [
  { name: 'home', url: 'http://localhost:5173' },
  { name: 'community', url: 'http://localhost:5173/community' }
];

(async () => {
  const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
  const captureDir = path.join(__dirname, `../references/captures/capture-${timestamp}`);

  // Create unique folder
  fs.mkdirSync(captureDir, { recursive: true });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const results = [];

  // For each page
  for (const pageConfig of PAGES) {
    // For each viewport
    for (const [viewportKey, viewport] of Object.entries(VIEWPORTS)) {
      // Set viewport
      await page.setViewport(viewport);

      // Navigate
      await page.goto(pageConfig.url, { waitUntil: 'networkidle2' });

      // Capture screenshot
      const filename = `${pageConfig.name}-${viewport.name}.png`;
      const filepath = path.join(captureDir, filename);
      await page.screenshot({ path: filepath, fullPage: true });

      results.push({
        page: pageConfig.name,
        viewport: viewport.name,
        dimensions: `${viewport.width}x${viewport.height}`,
        filename
      });

      console.log(`✓ Captured ${pageConfig.name} (${viewport.name} ${viewport.width}x${viewport.height})`);
    }
  }

  // Save metadata
  fs.writeFileSync(`${captureDir}/metadata.json`, JSON.stringify({
    timestamp,
    baseUrl: 'http://localhost:5173',
    captures: results,
    viewports: Object.values(VIEWPORTS).map(v => ({ name: v.name, width: v.width, height: v.height }))
  }, null, 2));

  await browser.close();
  console.log(`\n✅ All screenshots saved to references/captures/capture-${timestamp}/`);
  console.log(`   Files: ${results.map(r => r.filename).join(', ')}`);
})();
