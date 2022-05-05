import { test, expect, Page } from '@playwright/test';

test('third spec-first-test', async ({ page }) => {
      await page.goto("https://www.google.com");
});

