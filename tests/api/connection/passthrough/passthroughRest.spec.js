//COVERAGE_TAG: POST /booking/

const { test, expect } = require("@playwright/test");
const { createCompany, createCompanyPayload } = require("../../../../src/api/company");
const { createConnection, createConnectionPayload } = require("../../../../src/api/connection");
const { createPassthrough } = require("../../../../src/api/passthrough");

test.describe("connection/ POST requests @smoke", { tag: ["@connection"] }, async () => {
    let companyRequestBody;
    let companyResponseBody;

    let tenantOrgId;
    let partnerOrgId;
    let partnerConnId01;
    let partnerConnId02;

    test.beforeAll("POST new company and connection with full body", async () => {
        // Create Company Payload & Company
        companyRequestBody = await createCompanyPayload("Tenant");
        companyResponseBody = await createCompany(companyRequestBody);

        // Get Company Org Id and Company Data to pass on connection and passthrough
        const company = JSON.parse(JSON.stringify(companyResponseBody));
        const companyData = await company.data;
        tenantOrgId = await company.data.org.id;
        console.log("Tenant Company ID : ", tenantOrgId);

        // tenantOrgId = 337369;
        // console.log("Tenant Company ID : ", tenantOrgId);

        // Create Connection Payload & Connection

        // Connection 01
        const requestBodyConn01 = await createConnectionPayload(companyData, "directory");
        const responseBodyConn01 = await createConnection(JSON.stringify(requestBodyConn01));
        partnerConnId01 = await JSON.parse(JSON.stringify(responseBodyConn01)).data.value;
        console.log("Connection 02 ID : ", partnerConnId01);

        // partnerConnId01 = 337373;
        // console.log("Connection 01 ID : ", partnerConnId01);

        // Connection 02
        const requestBodyConn02 = await createConnectionPayload(companyData, "directory");
        const responseBodyConn02 = await createConnection(JSON.stringify(requestBodyConn02));
        partnerConnId02 = await JSON.parse(JSON.stringify(responseBodyConn02)).data.value;
        console.log("Connection 02 ID : ", partnerConnId02);

        // partnerConnId02 =  337379;
        // console.log("Connection 02 ID : ", partnerConnId02);
    });

    test("POST create passthrough", { tag: ["@smoke", "@api", "@passthrough"] }, async () => {
        await createPassthrough(tenantOrgId, partnerConnId01, tenantOrgId, partnerConnId02);
    });
});
