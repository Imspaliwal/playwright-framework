const { CommonUtils } = require("../../src/utils/CommomUtils");

class CompanyPage {
    constructor(page) {
        // locators
        this.page = page;
        this.myNetwork = page.locator("li.dropdown").filter({ hasText: "My Network" });
        this.company = page.locator("ul li a", { hasText: "Companies" });
        this.commonUtils = new CommonUtils(this.page);
        this.companyTitle = page.locator("div>h2");
    }

    // functions

    async moveTo() {
        await this.myNetwork.click();
        await this.company.click();
    }

    async isCompaniesLabelVisible() {
        const framePage = await this.commonUtils.switchFrame("iframe[name='content-frame']");
        const compLabelVisible = await framePage.locator("h2[title='Companies']").isVisible();
        console.log("Is Company Label Visible: " + compLabelVisible);
        return compLabelVisible;
    }
}

module.exports = { CompanyPage };
