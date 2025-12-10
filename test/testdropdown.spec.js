// testdropdown.spec.js
const { test, expect } = require('@playwright/test');

test('Simple test on Herokuapp', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com');

  // Check the page title
  await expect(page).toHaveTitle(/The Internet/);

  // Check a heading exists
  const heading = page.locator('h1');
  await expect(heading).toHaveText('Welcome to the-internet');
});
