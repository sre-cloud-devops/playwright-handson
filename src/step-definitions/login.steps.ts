import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DataLoader } from '../utils/dataLoader';
import { CustomWorld } from './world';

let loginPage: LoginPage;

Before(async function (this: CustomWorld) {
  await this.init();
  loginPage = new LoginPage(this.page);
});

After(async function (this: CustomWorld) {
  await this.cleanup();
});

Given('I navigate to practice test automation login page', async function (this: CustomWorld) {
  await loginPage.goto();
});

When('I enter username {string}', async function (this: CustomWorld, username: string) {
  await loginPage.enterUsername(username);
});

When('I enter password {string}', async function (this: CustomWorld, password: string) {
  await loginPage.enterPassword(password);
});

When('I click the login button', async function (this: CustomWorld) {
  await loginPage.clickLogin();
});

Then('I should verify the {string}', async function (this: CustomWorld, expectedResult: string) {
  try {
    // Check if it's a success message
    if (expectedResult.includes('Congratulations')) {
      await loginPage.waitForSuccessURL();
      const message = await loginPage.getSuccessMessage();
      expect(message).toBeDefined();
    } else {
      // Check for error messages
      const errorMessage = this.page.getByText(expectedResult);
      expect(errorMessage).toBeDefined();
    }
  } catch (error) {
    console.error('Verification failed:', error);
    throw error;
  }
});