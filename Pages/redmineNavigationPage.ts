import { Page } from "@playwright/test";

export class RedmineNavigationPage {
  constructor(private page: Page) {}

  async navigateToRubyInstaller() {
    await this.page.click("text=Redmine guide");
    await this.page.click("text=Installing Redmine");
    await this.page.click("text=Windows");
    // await this.page.pause();
    await this.page
      .locator('p:has-text("There is an prebuilt installer") a.external')
      .click();
  }
}
