import { Page } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {}

  async fillCredentials(username: string, password: string) {
    await this.page.fill("#username", username);
    await this.page.fill("#password", password);
  }

  async submit() {
    await this.page.click("input[name=login]");
  }

  async clickForgotPassword() {
    await this.page.click("text=Lost password");
  }
}
