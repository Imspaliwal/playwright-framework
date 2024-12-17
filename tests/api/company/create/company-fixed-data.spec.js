const { test, expect } = require("@playwright/test");
const { createCompany, createRandomCompany, getCompanyData } = require("../../../../src/api/company");
const path = require("path");
const { readFile } = require("../../../../src/utils/fileUtils");

test.describe("Fixed Data Tests", async () => {
    const filePathWatermillTenant = path.join(process.cwd() + "/testdata/e2net/companies/create/watermill/watermill-company-create-tenant.json");

    let companyResponseBody;

    test.beforeAll("Setup Company with fixed data set", async () => {
        // Step 01 : Create Company
        const fileContent = await readFile(filePathWatermillTenant);
        const payload = await JSON.parse(fileContent);
        companyResponseBody = await createCompany(payload); // create a company with given fixed data
    });

    test.only("Create company test", async () => {
        console.log("Company Created with Fixed Data Set:/n");
        console.log(companyResponseBody);
    });
});
