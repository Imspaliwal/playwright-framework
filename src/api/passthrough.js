const { request, expect } = require("@playwright/test");
const { passthroughEndPointUrl } = require("../../src/utils/apiUtils/urlBuilder");
const { buildHeaders } = require("../../src/utils/apiUtils/headerBuilder");
const path = require("path");
const { readFile } = require("../utils/fileUtils");

const filePath = path.join(process.cwd() + "/testdata/e2net/onboarding/passthrough.json");

async function createPassthroughPayload(tenantOrgId, tenantConnectionId, partnerOrgId, partnerConnectionId) {
    const payload = {
        id: tenantConnectionId,
        orgId: tenantOrgId,
        partnerConnectionId: `${partnerConnectionId}`,
        partnerOrgId: `${partnerOrgId}`
    };

    return JSON.stringify(payload);
}

async function createPassthrough(tenantOrgId, tenantConnectionId, partnerOrgId, partnerConnectionId) {
    // Create context
    const requestContext = await request.newContext();

    // Collect URL and Request Headers
    const url = await passthroughEndPointUrl(tenantOrgId, tenantConnectionId, partnerOrgId, partnerConnectionId);
    console.log("Request URL :", url);
    const requestHeader = await buildHeaders.createHeaders;
    console.log("Request Header :", requestHeader);
    // const fileContent = await readFile(filePath);
    // const jsonData = JSON.parse(fileContent);
    const requestBody = await createPassthroughPayload(tenantOrgId, tenantConnectionId, partnerOrgId, partnerConnectionId);
    console.log("Request Body :", requestBody);

    // Do Request
    const response = await requestContext.post(url, {
        headers: requestHeader,
        data: requestBody
    });

    // Validate Response
    console.log("Response Status : ", response.status());
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log("Response Body : ", responseBody);

    return response.json();
}

module.exports = { createPassthrough, createPassthroughPayload };
