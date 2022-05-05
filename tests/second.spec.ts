import { test, expect, Page } from '@playwright/test';


test.describe.serial('New Todo', () => {
  test('second spec-first-test', async ({ page }) => {
      await page.goto("https://www.google.com");
  });

  test('second spec-second-test', async ({ page }) => {
    await page.goto("https://www.google.com");
  });

  test('first spec-third-test', async ({ page }) => {
    await page.goto("https://www.google.com");
  }); 
});
