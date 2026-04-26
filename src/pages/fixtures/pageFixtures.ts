import { test } from '@playwright/test';
import { LoginPage } from '../LoginPage';

export const test = test.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});

export { expect } from '@playwright/test';