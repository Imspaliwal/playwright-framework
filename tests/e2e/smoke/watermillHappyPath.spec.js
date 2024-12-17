const { test, expect } = require("@playwright/test");
const { createCompany, createRandomCompany, getCompanyData } = require("../../../src/api/company");
const { createConnection, createConnectionPayload } = require("../../../src/api/connection");
const { createPassthrough } = require("../../../src/api/passthrough");
const { doDirectoryTransaction } = require("../../../src/api/transaction");
const { findKeyValue } = require("../../../src/utils/apiUtils/jsonHelper/jsonParser");
const path = require("path");
const { readFile } = require("../../../src/utils/fileUtils");

test.describe("Watermill smoke tests", async () => {
    const filePathWatermillTenant = path.join(process.cwd() + "/testdata/e2net/companies/watermill-company-create-tenant.json");

    let companyRequestBody;
    let companyResponseBody;

    let tenantOrgId;
    let partnerOrgId;
    let partnerConnId01;
    let tenantPartnerID;
    let partnerConnId02;
    let partnerParnterID;

    test.beforeAll("Setup Company, Connection and Passthrough", async () => {
        // Step 01 : Create Company
        // const companyDataArray = []; // form the data-set for the compnay which you want to create and pass
        const fileContent = await readFile(filePathWatermillTenant);
        const payload = await JSON.parse(fileContent);
        companyResponseBody = await createCompany(payload); // create a company with given fixed data

        // Step 02 : Get Company Org Id and Company Data to pass on connection and passthrough
        // const company = JSON.parse(JSON.stringify(companyResponseBody));
        // const companyData = await company.data;
        // tenantOrgId = await company.data.org.id;
        // console.log("Tenant Company ID : ", tenantOrgId);

        tenantOrgId = await findKeyValue(companyResponseBody, "id");
        console.log("Tenant Org Id : ", tenantOrgId);

        // Step 03: Create Connection Payload & Connection

        // Connection 01
        // const requestBodyConn01 = await createConnectionPayload(companyData, "directory");
        // tenantPartnerID = await JSON.parse(JSON.stringify(requestBodyConn01)).profileEntity.partnerId;
        // const responseBodyConn01 = await createConnection(JSON.stringify(requestBodyConn01));
        // partnerConnId01 = await JSON.parse(JSON.stringify(responseBodyConn01)).data.value;
        // console.log("Connection 02 ID : ", partnerConnId01);

        // Connection 02
        // const requestBodyConn02 = await createConnectionPayload(companyData, "directory");
        // partnerParnterID = await JSON.parse(JSON.stringify(requestBodyConn02)).profileEntity.partnerId;
        // const responseBodyConn02 = await createConnection(JSON.stringify(requestBodyConn02));
        // partnerConnId02 = await JSON.parse(JSON.stringify(responseBodyConn02)).data.value;
        // console.log("Connection 02 ID : ", partnerConnId02);

        // Step 04 : Passthrought
        // await createPassthrough(tenantOrgId, partnerConnId01, tenantOrgId, partnerConnId02);

        // Step 05 : Set Direcotry path in connections property
        // Did manually for now
    });

    test.only("Directory Transaction test", async () => {
        // Do Transaction
        // const responseBody = await doDirectoryTransaction(partnerConnId01, "wildcard.txt", tenantPartnerID, partnerParnterID, "850", "4010", "11111", "txt");
        // console.log("Transaction Response : ", responseBody);
    });
});
