import { test, expect } from '@playwright/test';

test('has title', async ({ browser }) => {
  //This creates a brand new browser context (like a fresh browser profile
  const context = await browser.newContext();
  const page = await context.newPage();

  //Launch the landing page URL
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  //Apply Credentials
  await page.locator('#username').fill('student')
  await page.locator('#password').fill('Password123')
  await page.locator('#submit').click()

  //Validated the logged in success message
  await expect(page).toHaveURL(/logged-in-successfully/);
  await page.waitForURL('https://practicetestautomation.com/logged-in-successfully/')
  await expect(page.getByText('Congratulations student. You successfully logged in!')).toBeVisible();
});



