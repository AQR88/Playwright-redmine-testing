import { Page } from "@playwright/test";

export class RegistrationPage {
  constructor(private page: Page) {}

  async fillForm(
    username: string,
    password: string,
    email: string,
    firstname = "Bruce",
    lastname = "Wayne"
  ) {
    await this.page.fill("#user_login", username);
    await this.page.fill("#user_password", password);
    await this.page.fill("#user_password_confirmation", password);
    await this.page.fill("#user_firstname", firstname);
    await this.page.fill("#user_lastname", lastname);
    await this.page.fill("#user_mail", email);
  }

  async submit() {
    await this.page.click("input[name=commit]");
  }
}
// module.exports = {RegistrationPage}
