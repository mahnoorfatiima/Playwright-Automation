import { test as baseTest } from "@playwright/test";
import { EngagementPage } from "../pages/EngagementPage.js";
import { TemplatesPage } from "../pages/TemplatesPage.js";
import { LoginPage } from "../pages/LoginPage.js";

export const test = baseTest.extend({
  loginPage: async ({ page, context }, use) => {
    await use(new LoginPage(page, context));
  },
  templatesPage: async ({ page, context }, use) => {
    await use(new TemplatesPage(page, context));
  },
  engagementPage: async ({ page, context }, use) => {
    await use(new EngagementPage(page, context));
  },
});
