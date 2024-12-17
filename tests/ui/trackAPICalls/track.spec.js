const { test, expect } = require("@playwright/test");
const { PageManager } = require("../../../src/pages/PageManager");
const { timeout } = require("../../../playwright.config");
const dataset = JSON.parse(JSON.stringify(require("../../../Config/TestData.json")));
const loginData = JSON.parse(JSON.stringify(require("../../../testdata/e2net/login/login.json")));

const companyData = JSON.parse(JSON.stringify(require("../../../testdata/e2net/companies/company-create.json")));

let requestDetails;

test.describe("Login Logout Test", { tag: ["@landing-page"] }, () => {
    test("E2net Login Page Test", { tag: ["@smoke", "@ui", "@login"] }, async ({ page }) => {
        const pageManager = new PageManager(page);

        // requestDetails = pageManager.getAPIUtils().trackRestCalls();

        await pageManager.getLoginPage().navigateToLink(dataset.URL);
        await pageManager.getLoginPage().login(dataset.email, dataset.username, dataset.password);

        // wait for page load

        // await page.waitForSelector(page.locator("div#header>h1"));
        // Discouraged waitForSelector - Use web assertions that assert visibility or a locator-based locator.waitFor() instead

        // wait for page load
        await pageManager.getHomePage().e2netTitle.waitFor({
            state: "visible",
            timeout: 3 * 60 * 1000
        });

        // Verify login is Successfull
        await expect(pageManager.getHomePage().e2netTitle).toContainText("e2net");

        await pageManager.getHomePage().clickFilter();

        expect(await pageManager.getHomePage().isTransactionLabelVisible()).toBeTruthy();

        await pageManager.getCompanyPage().moveTo();

        console.log(companyData.auditRetentionDays);

        await page.pause();

        // Print API Track Logs
        // console.log(requestDetails);
    });
});
