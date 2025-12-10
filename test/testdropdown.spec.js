// test/testlogin.spec.js
const { test, expect } = require('@playwright/test');

test('Login Test - Sample', async ({ page }) => {
  // Go to the login page
  await page.goto('https://www.saucedemo.com/');

  // Fill username
  await page.fill('#user-name', 'standard_user');

  // Fill password
  await page.fill('#password', 'secret_sauce');

  // Click Login button
  await page.click('#login-button');

  // Wait for inventory page after login
  await expect(page.locator('.inventory_list')).toBeVisible();

  // Validate page URL contains 'inventory'
  // story 768
  await expect(page).toHaveURL(/inventory/);
});
