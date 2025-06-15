import { Page } from "@playwright/test";

export class ForgotPasswordPage {
  constructor(private page: Page) {}

  async submitEmail(email: string) {
    await this.page.fill("#mail", email);
    await this.page.locator("input[name=commit]").click();
  }
}
