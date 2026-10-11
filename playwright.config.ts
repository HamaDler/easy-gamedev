import { defineConfig, devices } from '@playwright/test';
import { resolve } from 'node:path';
process.env.PLAYWRIGHT_BROWSERS_PATH ||= resolve('work/browsers');
const port=Number(process.env.VCG_PREVIEW_PORT || 5191);
export default defineConfig({
 testDir:'./tests',testMatch:'**/*.e2e.ts',fullyParallel:false,workers:1,reporter:'list',timeout:30000,
 use:{...devices['Desktop Chrome'],baseURL:`http://127.0.0.1:${port}`,headless:true,viewport:{width:1365,height:900},trace:'retain-on-failure',launchOptions:{executablePath:process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE}},
 globalSetup:'./playwright.global-setup.mjs',
});
