const { test, expect } = require("@playwright/test");
//const { APIUtils } = require("../../../src/utils/apiCommon/APIUtils");
const { PageManager } = require("../../../src/pages/PageManager");
const loginData = JSON.parse(JSON.stringify(require("../../../testdata/e2net/login/login.json")));
const companyData = JSON.parse(JSON.stringify(require("../../../testdata/e2net/companies/company-create.json")));

// let id;
// const randomString = Math.random().toString(36).substring(2, 10);

// test.describe('Company Create and Search', ()=>{

//     //test case 1
// test('should be able to create a company', async ({ request }) => {
//     console.log('Create');

//     Login(read from env variable/read from env.json)
//     validateLogin
//     --- GlobalSetup

//     moveToCompany  --- Under Util
//     uniqueCompanyID = CreateCompany(read data from json)  --- From Page
//     SearchCompany(Search uniqueCompanyID/read data from json)
//     Validate ---

//     Logout
//     --- GlobalTearDown
// });

// test('should be able to get a company', async ({ request }) => {
//     console.log('Search');

//     Login
//     validateLogin

//     moveToCompany
//     SearchCompany

//     Logout

// });

// });

test.describe("Login Test --->> Create company -->> Search company", () => {
    test("E2net Create Company", { tag: ["@smoke", "@ui", "@login"] }, async ({ page }) => {
        const pageManager = new PageManager(page);

        await pageManager.getLoginPage().navigateToLink(loginData.env[0].dev1108.URL);
        await pageManager.getLoginPage().login(loginData.env[0].dev1108.email, loginData.env[0].dev1108.username, loginData.env[0].dev1108.password);

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

        console.log("Create company");
        await pageManager.getCompanyPage().moveTo();
        console.log(companyData.auditRetentionDays);

        await pageManager.getCompanyPage().companyTitle.waitFor({
            state: "visible",
            timeout: 3 * 60 * 1000
        });

        expect(await pageManager.getCompanyPage().isCompaniesLabelVisible()).toBeTruthy();

        await await page.locator('iframe[name="content-frame"]').contentFrame().getByRole("button", { name: "add  New" }).click();
        await page.locator('iframe[name="content-frame"]').contentFrame().locator("#company-create-modal").getByText("Tenant").click();
        // await page.locator('iframe[name="content-frame"]').contentFrame().getByPlaceholder("Company’s Legal Name").click();
        await page.locator('iframe[name="content-frame"]').contentFrame().getByPlaceholder("Company’s Legal Name").fill("001");
        // await page.locator('iframe[name="content-frame"]').contentFrame().getByPlaceholder("Company D-U-N-S Number").click();
        await page.locator('iframe[name="content-frame"]').contentFrame().getByPlaceholder("Company D-U-N-S Number").fill("001");
        //  await page.locator('iframe[name="content-frame"]').contentFrame().getByPlaceholder("Supplied by Network.Support@").click();
        await page.locator('iframe[name="content-frame"]').contentFrame().getByPlaceholder("Supplied by Network.Support@").fill("001");
        await page.locator('iframe[name="content-frame"]').contentFrame().getByRole("button", { name: "Save" }).click();

        await page.pause();
    });
});
