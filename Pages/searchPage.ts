import { Page } from "@playwright/test";

export class SearchPage {
  constructor(private page: Page) {}

  async filterByNews() {
    await this.page.locator("label a", { hasText: "News" }).click();
  }
}
