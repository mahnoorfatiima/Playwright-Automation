import { expect } from "@playwright/test";

export class LoginPage {
  constructor(page, context) {
    this.page = page;
    this.context = context;
    this.username = page.locator("#username");
    this.password = page.locator("#password");
    this.loginButton = page.locator('input[type="submit"]');
    this.calendarTab = page.locator("#navbar-Calendar");
    this.error = page.locator(".errors");
  }

  async visit() {
    await this.page.goto('/');
  }

  async login(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click({ force: true });
    await this.page.waitForLoadState("networkidle");
  }

  async verifyCalendarPage() {
    await expect(this.calendarTab).toBeVisible();
    expect(await this.calendarTab.textContent()).toEqual("Calendar");
  }

  async verifyInvalidCredentialsError() {
    await expect(this.error).toBeVisible();
    expect(await this.error.textContent()).toEqual(
      "Invalid Username or Password."
    );
  }
}
