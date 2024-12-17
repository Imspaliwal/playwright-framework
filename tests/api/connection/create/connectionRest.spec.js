//COVERAGE_TAG: POST /booking/

const { test, expect } = require("@playwright/test");
const { createCompany, createCompanyPayload } = require("../../../../src/api/company");
const { createConnection, createConnectionPayload } = require("../../../../src/api/connection");

test.describe("connection/ POST requests @smoke", { tag: ["@connection"] }, async () => {
    let companyRequestBody;
    let companyResponseBody;

    test.beforeAll("POST new company with full body", async () => {
        companyRequestBody = await createCompanyPayload("Tenant");

        console.log("Company Reqesut Body : ", companyRequestBody);
        companyResponseBody = await createCompany(companyRequestBody);

        console.log("Response Body : ", companyResponseBody);
    });

    test("POST new connection with full body", { tag: ["@smoke", "@api", "@connection"] }, async () => {
        const company = JSON.parse(JSON.stringify(companyResponseBody));
        console.log("Company Response Data : ", company.data);

        const requestBody = await createConnectionPayload(company.data, "directory");

        console.log("Connection Reqesut Body : ", JSON.stringify(requestBody));
        const responseBody = await createConnection(JSON.stringify(requestBody));

        console.log("Response Body : ", responseBody);
    });
});
