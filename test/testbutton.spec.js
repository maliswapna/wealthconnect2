// login.spec.js
const { test, expect } = require('@playwright/test');

test('Login Test - Saucedemo', async ({ page }) => {

  // 1. Open URL
  await page.goto('https://www.saucedemo.com/');

  // 2. Enter username
  await page.fill('#user-name', 'standard_user');

  // 3. Enter password
  await page.fill('#password', 'secret_sauce');

  // 4. Click Login
  await page.click('#login-button');

  //6 wait and verify successful login
  await expect(page.locator('.inventory_list')).toBeVisible();

  // 6. Verify URL
  await expect(page).toHaveURL(/inventory/);
});
