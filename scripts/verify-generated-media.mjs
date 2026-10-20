import { chromium } from '@playwright/test';
import { createServer } from './serve.mjs';
import { resolve } from 'node:path';
import { mkdir } from 'node:fs/promises';

const id = process.argv[2];
if (!id || !/^[a-z0-9-]+$/.test(id)) throw new Error('Pass one media slot ID.');
const server = createServer();
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
let browser;
try {
  browser = await chromium.launch({ executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE || resolve('work/browser-shell/chrome-headless-shell-win64/chrome-headless-shell.exe') });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto(`http://127.0.0.1:${server.address().port}/#/media`);
  const row = page.locator('.media-row').filter({ has: page.locator('code').filter({ hasText: new RegExp(`^${id}$`) }) });
  await row.locator('summary').click();
  const img = row.locator('.media-figure img');
  await img.waitFor({ state: 'visible' });
  await img.evaluate(el => el.decode());
  if (!await img.evaluate((el, id) => el.naturalWidth > 0 && el.src.endsWith(`/media/${id}.jpg`), id)) throw new Error('Image did not load.');
  if (await row.getByText('Generation prompt', { exact: true }).count()) throw new Error('Generation prompt remains visible.');
  await mkdir('work/imagegen/review', { recursive: true });
  await row.screenshot({ path: `work/imagegen/review/${id}.png` });
  console.log(`Verified ${id}: visible image, successful decode, no generation prompt.`);
} finally {
  if (browser) await browser.close();
  server.closeAllConnections();
  await new Promise(resolve => server.close(resolve));
}
