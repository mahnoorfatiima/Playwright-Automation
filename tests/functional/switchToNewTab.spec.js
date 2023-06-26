import { test } from "../../lib/BaseTest.js";
import { config } from "../../config/testConfig.js";

test.describe("Switch to new domain Tab", () => {
  test("Navigate to New Tab", async ({ loginPage, engagementPage }) => {
    await loginPage.visit();
    await loginPage.login(config.credentials.username1, config.credentials.password);
    await engagementPage.gotoEngagementTab();
    await engagementPage.gotoCEPage();
    await engagementPage.verifyAnnouncementButton();
  });
});
