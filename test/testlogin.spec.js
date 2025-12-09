const { chromium } = require('playwright');
// Sample login test using Playwright

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
// Navigate to the login page and perform login
  await page.goto('https://practice.expandtesting.com/login');
  await page.fill('#username', 'practice');              // adjust selector if needed
  await page.fill('#password', 'SuperSecretPassword!');  // credentials from site
  await page.click('button[type="submit"]');             // adjust to actual button

  // wait and verify successful login (adjust selector or logic as needed)
  await page.waitForTimeout(3000);
  const success = await page.textContent('body');
  console.log(success);

  await browser.close();
})();
