import { Page } from "@playwright/test";
import dotenv from "dotenv";
dotenv.config();
export class HomePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto("https://www.redmine.org");
  }

  async clickRegister() {
    await this.page.click("text=Register");
  }

  async clickLogin() {
    await this.page.click("text=Sign in");
  }

  async search(term: string) {
    await this.page.fill("#q", term);
    await this.page.press("#q", "Enter");
  }
}
