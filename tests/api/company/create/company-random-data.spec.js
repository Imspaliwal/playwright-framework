const { test, expect } = require("@playwright/test");
const { createCompany, createRandomCompany, getCompanyData } = require("../../../../src/api/company");
const path = require("path");
const { readFile } = require("../../../../src/utils/fileUtils");

test.describe("Random Data Tests", async () => {
    const filePathWatermillTenant = path.join(process.cwd() + "/testdata/e2net/companies/watermill-company-create-tenant.json");

    let companyResponseBody;

    test.beforeAll("Setup Company with random data set", async () => {
        // Step 01 : Create Company
        companyResponseBody = await createCompany("Tenant"); // create a company with given fixed data
    });

    test.only("Create company test", async () => {
        console.log("Company Created with Fixed Data Set:\n");
        console.log(companyResponseBody);
    });
});
