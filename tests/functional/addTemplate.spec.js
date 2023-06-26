import { test } from "../../lib/BaseTest.js";
import { config } from "../../config/testConfig.js";

test.describe("Template Messages", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.visit();
    await loginPage.login(config.credentials.username1, config.credentials.password);
  });

  test("can add a new template", async ({ templatesPage }) => {
    const at = Date.now();
    await templatesPage.gotoTemplatesTab();
    await templatesPage.gotoAddTemplateTab();
    await templatesPage.addGeneralInfo(
      "Automated Name " + at,
      "Automated Description" + at,
      "Automated Location"
    );
    await templatesPage.next();
    await templatesPage.selectDistributionList("f13 13");
    await templatesPage.verifySelectedUser("f13 13");
    await templatesPage.next();
    await templatesPage.addTextMessageContent(
      "Automated text message sent by Icon"
    );
    await templatesPage.saveTemplate();
    await templatesPage.verifySuccessAlert();
    await templatesPage.verifyTemplateData(
      "Automated Name " + at,
      "Automated Description" + at
    );
  });
});
