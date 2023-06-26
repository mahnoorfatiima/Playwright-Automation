import { expect } from "@playwright/test";

export class EngagementPage {
  constructor(page, context) {
    this.page = page;
    this.context = context;
    this.engagementTab = page.locator("#navbar-Engagement");
    this.ceTab = page.locator("text=Community Engagement");
  }

  async gotoEngagementTab() {
    await this.engagementTab.click();
  }
  async gotoCEPage() {
    const pagePromise = this.context.waitForEvent("page");
    await this.ceTab.click();
    const CEPage = await pagePromise;
    await CEPage.waitForLoadState("networkidle");
    this.newAnnouncementBtn = CEPage.locator("#new-announcement-button");
  }

  async verifyAnnouncementButton() {
    await expect(this.newAnnouncementBtn).toBeVisible();
  }
}
