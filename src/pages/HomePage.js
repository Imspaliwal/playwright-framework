const { CommonUtils } = require("../../src/utils/CommomUtils");

class HomePage {
    constructor(page) {
        this.page = page;
        this.commonUtils = new CommonUtils(this.page);
        this.e2netTitle = page.locator("div#header>h1");
    }

    async isTransactionLabelVisible() {
        const framePage = await this.commonUtils.switchFrame("iframe[name='content-frame']");
        const transLabelVisible = await framePage.locator("h2[title='Transactions']").isVisible();
        console.log("Is Transaction Label Visible: " + transLabelVisible);
        return transLabelVisible;
    }

    async clickFilter() {
        const framePage = await this.commonUtils.switchFrame("iframe[name='content-frame']");
        await framePage.locator(".eto-expand__h3").click();
        console.log("Clicked on Transaction Filter");
    }
}

module.exports = { HomePage };
