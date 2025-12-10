const { test, expect } = require('@playwright/test');

test('Login Test - Sample', async ({ page }) => {

  // Go to the application URL
  await page.goto('https://www.saucedemo.com/');

  // Enter username
  await page.fill('#user-name', 'standard_user');

  // Enter password
  await page.fill('#password', 'secret_sauce');

  await page.waitForTimeout(1000); // wait for 1 second

  // Click Login button
  await page.click('#login-button');

  // Assertion – check if you landed on Products page
  await expect(page.locator('.title')).toHaveText('Products');

});