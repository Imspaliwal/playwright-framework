//COVERAGE_TAG: POST /booking/

const { test, expect } = require("@playwright/test");
const { createCompany, createCompanyPayload } = require("../../../../src/api/company");

test.describe("company/ POST requests @smoke", { tag: ["@company"] }, async () => {
    test("POST new company with full body", { tag: ["@smoke", "@api", "@company"] }, async () => {
        const requestBody = await createCompanyPayload("Tenant");
        const responseBody = await createCompany(requestBody);

        console.log("Reqesut Body : ", requestBody);
        console.log("Response Body : ", responseBody);
    });
});
