const { test, expect } = require("@playwright/test");
const { createCompany, createCompanyPayload } = require("../../../src/api/company");
const { createConnection, createConnectionPayload } = require("../../../src/api/connection");

test.describe("B2bc smoke tests", async () => {
    let companyRequestBody;
    let companyResponseBody;

    test.beforeAll("Setup Company, Connection and Passthrough", async () => {
        // Create Company
        companyRequestBody = await createCompanyPayload("Tenant");
        companyResponseBody = await createCompany(companyRequestBody);

        // Create Connection
        const company = await JSON.parse(JSON.stringify(companyResponseBody));
        const connectionRequestBody = await createConnectionPayload(company.data, "b2bc");
        const connectionResponseBody = await createConnection(JSON.stringify(connectionRequestBody));

        // Passthrought
        // B2bc Download
        // B2bc Deployment
    });

    test("B2bc Transaction 1 test", async () => {
        // Do Transaction
    });

    test("B2bc Transaction 2 test", async () => {
        // Do Transaction
    });

    test("B2bc Transaction 3 test", async () => {
        // Do Transaction
    });
});
