import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://practicetestautomation.com/practice-test-login/');
  }

  async enterUsername(username: string) {
    await this.page.locator('#username').fill(username);
  }

  async enterPassword(password: string) {
    await this.page.locator('#password').fill(password);
  }

  async clickLogin() {
    await this.page.locator('#submit').click();
  }

  async getSuccessMessage() {
    return await this.page.getByText('Congratulations student. You successfully logged in!');
  }

  async waitForSuccessURL() {
    await this.page.waitForURL('https://practicetestautomation.com/logged-in-successfully/');
  }
}