import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { DataLoader } from '../src/utils/dataLoader';

const testData = DataLoader.getCSVCredentials();

testData.forEach((data, index) => {
  test(`Login test ${index + 1}: ${data.username} with ${data.password}`, async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.enterUsername(data.username);
    await loginPage.enterPassword(data.password);
    await loginPage.clickLogin();

    if (data.expectedResult.includes('Congratulations')) {
      await loginPage.waitForSuccessURL();
      const message = await loginPage.getSuccessMessage();
      expect(message).toBeDefined();
    } else {
      const error = page.getByText(data.expectedResult);
      expect(error).toBeDefined();
    }
  });
});