import { expect } from "@playwright/test";

export class TemplatesPage {
  constructor(page) {
    this.page = page;
    this.messagingTab = page.locator("#navbar-Messaging");
    this.templatesTab = page.locator("#navbar-Templates");
    this.addTemplateBtn = page.locator("#create-template");
    this.nameField = page.locator("#template-name");
    this.descriptionField = page.locator("#Description");
    this.locationField = page.locator("#Location");
    this.nextBtn = page.locator("#button-next");
    this.namesList = page.locator(".align-middle.ml-1.ellipsis.col");
    this.nameCheckBox = page.locator(".col-1");
    this.selectedName = page.locator('[data-testid="message-recipient"]');
    this.addVoiceBtn = page.locator("#add-content-Voice");
    this.addTextBtn = page.locator("#add-content-SMS");
    this.addEmailBtn = page.locator("#add-content-Email");
    this.heading = page.locator("h4.card-header");
    this.textMsgField = page.locator('[name="SMSContent.Content"]');
    this.saveBtn = page.locator(".btn.mr-2.btn.btn-primary");
    this.successAlert = page.locator(".Toastify__toast-body");
    this.row = page.locator("tr");
    this.col = page.locator("td");
  }

  async gotoTemplatesTab() {
    await this.messagingTab.click();
    await this.templatesTab.click();
  }

  async gotoAddTemplateTab() {
    await expect(this.addTemplateBtn).toHaveText("Add New Template");
    await this.addTemplateBtn.click();
  }

  async addGeneralInfo(templateName, templateDescription, templateLocation) {
    await this.nameField.fill(templateName);
    await this.descriptionField.fill(templateDescription);
    await this.locationField.fill(templateLocation);
  }

  async selectDistributionList(name) {
    await this.namesList.nth(1).waitFor();
    const totalNames = await this.namesList.count();
    for (let i = 0; i < totalNames; i++) {
      let username = await this.namesList
        .nth(i)
        .locator("span")
        .getAttribute("title");
      if (username === name) {
        await this.namesList.nth(i).click();
        break;
      }
    }
  }

  async verifySelectedUser(name) {
    await expect(this.selectedName).toBeVisible();
    await expect(this.selectedName).toHaveText(name);
  }

  async next() {
    await this.nextBtn.click();
  }

  async addTextMessageContent(textMsg) {
    await expect(this.addTextBtn).toHaveText("Add Text Message content");
    await this.addTextBtn.click();
    await expect(this.heading).toContainText("Text Message Content");
    await this.textMsgField.fill(textMsg);
    await expect(this.textMsgField).toHaveAttribute("maxlength", "600");
  }

  async saveTemplate() {
    await this.saveBtn.first().click();
  }

  async verifySuccessAlert() {
    await expect(this.successAlert).toBeVisible();
    await expect(this.successAlert).toHaveText("Template successfully updated");
  }

  async verifyTemplateData(name, description) {
    await expect(this.col.nth(2)).toHaveText(name);
    await expect(this.col.nth(3)).toHaveText(description);
  }
}
