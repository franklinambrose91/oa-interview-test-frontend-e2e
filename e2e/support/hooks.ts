import { Before, After } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { CustomWorld } from './world';
import { ExamplePage } from '../pages/ExamplePage';
import { SearchPage } from '../pages/SearchPage';
import { TEST_CONFIG } from '../config/test-config';

/**
 * Before hook - Setup for each test scenario
 * Initializes browser, page, and page objects
 */
Before(async function (this: CustomWorld) {
  // Make headless mode configurable via env variables, default to false for local dev
  const isHeadless = process.env['HEADLESS'] === 'true';
  
  this.browser = await chromium.launch({ headless: isHeadless });
  
  // Create context with large viewport requirement and optional video recording
  const context = await this.browser.newContext({
    viewport: TEST_CONFIG.VIEWPORT,
    recordVideo: process.env['RECORD_VIDEO'] === 'true' ? { dir: 'test-videos/' } : undefined
  });
  
  this.page = await context.newPage();
  
  // Initialize Page Objects
  this.examplePage = new ExamplePage(this.page);
  this.searchPage = new SearchPage(this.page);
});

/**
 * After hook - Cleanup after each test scenario
 */
After(async function (this: CustomWorld) {
  if (this.page) await this.page.close();
  if (this.browser) await this.browser.close();
});