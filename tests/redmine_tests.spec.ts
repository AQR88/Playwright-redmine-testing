import { test, expect } from "@playwright/test";
import { ForgotPasswordPage } from "../Pages/forgotPassPage";
import { HomePage } from "../Pages/homePage";
import { LoginPage } from "../Pages/loginPage";
import { RedmineNavigationPage } from "../Pages/redmineNavigationPage";
import { RegistrationPage } from "../Pages/registrationPage";
import { SearchPage } from "../Pages/searchPage";
import dotenv from "dotenv";
dotenv.config();

const timestamp = Date.now();
const username = `user_${timestamp}`;
const password = `pass_${timestamp}`;
const email = `user_${timestamp}@mail.com`;

test("TC01: New user registration using valid data", async ({ page }) => {
  const home = new HomePage(page);
  const register = new RegistrationPage(page);

  await home.goto();
  await home.clickRegister();
  await register.fillForm(username, password, email);
  await register.submit();
  await expect(page.locator(".flash.notice")).toHaveText(
    /Account was successfully created./,
    { timeout: 10000 }
  );
});

test("TC02: Login with invalid password", async ({ page }) => {
  const home = new HomePage(page);
  const login = new LoginPage(page);

  await home.goto();
  await home.clickLogin();
  await login.fillCredentials(process.env.USER!, process.env.WRONG_PASSWORD!);
  await login.submit();
  await expect(page.locator("#flash_error")).toHaveText(
    /Invalid user or password/
  );
});

test("TC03: Forgot password flow", async ({ page }) => {
  const home = new HomePage(page);
  const login = new LoginPage(page);
  const forgot = new ForgotPasswordPage(page);

  await home.goto();
  await home.clickLogin();
  await login.clickForgotPassword();
  await forgot.submitEmail(process.env.FORGOT_PASSWORD_EMAIL!);
  await page.pause();
  await expect(page.locator("#flash.notice")).toHaveText(
    /instructions to choose a new password /,
    { timeout: 10000 }
  );
});

test('TC04: Search using text "Navigation"', async ({ page }) => {
  const home = new HomePage(page);
  const search = new SearchPage(page);

  await home.goto();
  await home.search("Navigation");
  await search.filterByNews();
  await expect(page.locator("h3", { hasText: "Results" })).toBeVisible();
});

test("TC05: Navigate to Ruby Installer for Windows", async ({ page }) => {
  const home = new HomePage(page);
  const guide = new RedmineNavigationPage(page);

  await home.goto();
  await guide.navigateToRubyInstaller();
  await expect(page).toHaveURL(/rubyinstaller/);
});
