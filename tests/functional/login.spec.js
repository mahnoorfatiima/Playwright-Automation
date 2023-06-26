import { test } from "../../../lib/fixtures.js";
import { config } from "../../../config/testConfig.js";

test.describe("Login to VoiceFriend", () => {

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.visit();
  });
  test("Successful login", async ({ loginPage }) => {
    await loginPage.login(config.credentials.username1, config.credentials.password);
    await loginPage.verifyCalendarPage();
  });

  test("Unsuccessful login", async ({ loginPage }) => {
    await loginPage.login(config.credentials.username2, config.credentials.password);
    await loginPage.verifyInvalidCredentialsError();
  });
});
