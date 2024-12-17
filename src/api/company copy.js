const { expect, request } = require("@playwright/test");
const { buildUrl } = require("../utils/apiUtils/urlBuilder");
const { buildHeaders } = require("../utils/apiUtils/headerBuilder");
const path = require("path");
const { readFile } = require("../utils/fileUtils");
const { faker } = require("@faker-js/faker");
const { findKeyValue } = require("../../src/utils/apiUtils/jsonHelper/jsonParser");

const filePath = path.join(process.cwd() + "/testdata/e2net/companies/company-create.json");

// Company JSON Sample data file paths
const filePathTenant = path.join(process.cwd() + "/testdata/e2net/companies/company-create-tenant.json");
const filePathPartner = path.join(process.cwd() + "/testdata/e2net/companies/company-create-partner.json");
const filePathNetwork = path.join(process.cwd() + "/testdata/e2net/companies/company-create-network.json");

/**
 * Create company payload
 * @param {*} companyType
 * @param {*} name
 * @param {*} companyId
 * @param {*} communityUniqueID
 * @param {*} description
 * @param {*} supportEmail
 * @param {*} payloadSearchEnabled
 * @param {*} monitorUnrouteableTxns
 * @param {*} auditRetentionDays
 * @returns
 */
//async function companyData(companyModel) {
async function companyData(companyType, name, companyId, communityUniqueID, description, supportEmail, payloadSearchEnabled, monitorUnrouteableTxns, auditRetentionDays) {
    const randomString = faker.string.numeric(6);
    const companyBody = {
        org: {
            companyTypeName: companyType,
            name: name + randomString,
            companyId: companyId + randomString,
            communityUniqueID: communityUniqueID + randomString,
            description: description + randomString,
            supportEmail: supportEmail + randomString,
            payloadSearchEnabled: payloadSearchEnabled,
            monitorUnrouteableTxns: monitorUnrouteableTxns
        },
        auditRetentionDays: auditRetentionDays
    };
    return companyBody;
}

// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);

// async function companyDataArrayParameter(companyArray) {
//     const randomString = faker.string.numeric(6);
//     const companyBody = {
//         org: {
//             companyTypeName: companyArraycompanyType,
//             name: name + randomString,
//             companyId: companyId + randomString,
//             communityUniqueID: communityUniqueID + randomString,
//             description: description + randomString,
//             supportEmail: supportEmail + randomString,
//             payloadSearchEnabled: payloadSearchEnabled,
//             monitorUnrouteableTxns: monitorUnrouteableTxns
//         },
//         auditRetentionDays: auditRetentionDays
//     };
//     return companyBody;
// }

/**
 * Create company payload with company json object
 * @param {*} companyType
 * @param {*} companyJson
 * @returns
 */
async function companyData1(companyType, companyJson) {
    const company = await JSON.parse(companyJson);

    const randomString = faker.string.numeric(6);

    // form company json
    const companyBody = {
        org: {
            // update company json
            companyTypeName: companyType,
            name: company.org.name + randomString,
            companyId: company.org.companyId + randomString,
            communityUniqueID: company.org.communityUniqueID + randomString,
            description: company.org.description + randomString,
            supportEmail: randomString + company.org.supportEmail,
            payloadSearchEnabled: company.org.payloadSearchEnabled,
            monitorUnrouteableTxns: company.org.monitorUnrouteableTxns
        },
        auditRetentionDays: company.auditRetentionDays
    };
    return companyBody;
}

async function companyData2(companyJson) {
    const company = await JSON.parse(companyJson);

    const randomString = faker.string.numeric(6);

    // form company json
    const companyBody = {
        org: {
            // update company json
            companyTypeName: company.org.companyTypeName,
            name: company.org.name + randomString,
            companyId: company.org.companyId + randomString,
            communityUniqueID: company.org.communityUniqueID + randomString,
            description: company.org.description + randomString,
            supportEmail: randomString + company.org.supportEmail,
            payloadSearchEnabled: company.org.payloadSearchEnabled,
            monitorUnrouteableTxns: company.org.monitorUnrouteableTxns
        },
        auditRetentionDays: company.auditRetentionDays
    };
    return companyBody;
}

async function companyDataFixed(companyJson) {
    const company = await JSON.parse(companyJson);
    const companyType = await company.org.companyTypeName;
    let companyBody;
    switch (companyType) {
        case "Tenant":
            companyBody = {
                org: {
                    // update company json
                    companyTypeName: company.org.companyTypeName,
                    name: company.org.name,
                    companyId: company.org.companyId,
                    communityUniqueID: company.org.communityUniqueID,
                    description: company.org.description,
                    supportEmail: company.org.supportEmail,
                    payloadSearchEnabled: company.org.payloadSearchEnabled,
                    monitorUnrouteableTxns: company.org.monitorUnrouteableTxns
                },
                auditRetentionDays: company.auditRetentionDays
            };
            break;
        case "Partner":
            companyBody = {
                org: {
                    // update company json
                    companyTypeName: company.org.companyTypeName,
                    name: company.org.name,
                    companyId: company.org.companyId,
                    communityUniqueID: company.org.communityUniqueID,
                    description: company.org.description,
                    supportEmail: company.org.supportEmail,
                    payloadSearchEnabled: company.org.payloadSearchEnabled,
                    monitorUnrouteableTxns: company.org.monitorUnrouteableTxns
                },
                auditRetentionDays: company.auditRetentionDays
            };
            break;
        case "Network":
            companyBody = {
                org: {
                    // update company json
                    companyTypeName: company.org.companyTypeName,
                    name: company.org.name,
                    companyId: company.org.companyId,
                    communityUniqueID: company.org.communityUniqueID,
                    description: company.org.description,
                    supportEmail: company.org.supportEmail,
                    payloadSearchEnabled: null,
                    monitorUnrouteableTxns: company.org.monitorUnrouteableTxns
                },
                auditRetentionDays: company.auditRetentionDays
            };
            break;
    }

    // // form company json
    // const companyBody = {
    //     org: {
    //         // update company json
    //         companyTypeName: company.org.companyTypeName,
    //         name: company.org.name,
    //         companyId: company.org.companyId,
    //         communityUniqueID: company.org.communityUniqueID,
    //         description: company.org.description,
    //         supportEmail: company.org.supportEmail,
    //         payloadSearchEnabled: company.org.payloadSearchEnabled,
    //         monitorUnrouteableTxns: company.org.monitorUnrouteableTxns
    //     },
    //     auditRetentionDays: company.auditRetentionDays
    // };
    return companyBody;
}

async function createCompanyPayload(tenant) {
    try {
        const fileContent = await readFile(filePath);
        const jsonData = JSON.parse(fileContent);
        const body = await companyData1(tenant, JSON.stringify(jsonData));
        // show body in temp file under test-results folder
        // console.log("Body: ", JSON.stringify(body));
        return body;
        // return JSON.stringify(body);
    } catch (error) {
        console.log("Error reading or parsing the JSON file: " + error);
        throw error;
    }
}

async function createCompanyPayload22(tenant) {
    try {
        const fileContent = await getCompanyFile(tenant);
        const jsonData = JSON.parse(fileContent);
        const body = await companyData1(tenant, JSON.stringify(jsonData));
        // show body in temp file under test-results folder
        // console.log("Body: ", JSON.stringify(body));
        return body;
        // return JSON.stringify(body);
    } catch (error) {
        console.log("Error reading or parsing the JSON file: " + error);
        throw error;
    }
}

async function getCompanyFile(companyType) {
    let filePath;
    switch (companyType) {
        case "Tenant":
            filePath = await readFile(filePathTenant);
            break;
        case "Partner":
            filePath = await readFile(filePathPartner);
            break;
        case "Network":
            filePath = await readFile(filePathNetwork);
            break;
        default:
            filePath = await readFile(filePathTenant);
            break;
    }
    return filePath;
}

async function createCompanyPayloadWithData(companyTypeOrData) {
    console.log(typeof companyTypeOrData);
    try {
        // If company data is given either json or array
        if (typeof companyTypeOrData !== "undefined" && typeof companyTypeOrData === "object") {
            // const jsonData = JSON.parse(companyTypeOrData);
            const jsonData = companyTypeOrData;
            const body = await companyDataFixed(JSON.stringify(jsonData)); // company data could be json or an array
            return body;
        } else {
            let cType;
            // Handle companyType string case-senstivity
            if (typeof companyTypeOrData === "string") {
                cType = companyTypeOrData.slice(0, companyTypeOrData.length - (companyTypeOrData.length - 1)).toUpperCase() + companyTypeOrData.slice(1);
            }

            // handle if company type is undefined
            if (typeof companyTypeOrData === "undefined") {
                cType = "Tenant";
            }

            console.log(`Creating the Random ${cType} Company`);
            // If company data is not given get random data from sample json file
            const fileContent = await getCompanyFile(cType); // Get Company Sample json file based on compnay type
            const jsonData = JSON.parse(fileContent);
            const body = await companyData2(JSON.stringify(jsonData));
            // show body in temp file under test-results folder
            // console.log("Body: ", JSON.stringify(body));
            return body;
            // return JSON.stringify(body);
        }
    } catch (error) {
        console.log("Error reading or parsing the JSON file: " + error);
        throw error;
    }
}

/**
 * Create company rest call
 * @param {*} companyPayload
 */
async function createRandomCompany(companyType) {
    let cType; // Company Type i.e. Tenant, Partner or Network

    // Handle companyType string case-senstivity
    if (typeof companyType === "string") {
        cType = companyType.slice(-1).toUpperCase() + companyType.slice(1);
    }

    // handle if company type is undefined
    if (typeof companyType === "undefined") {
        cType = "Tenant";
    }

    // Create Company Payload
    const companyPayload = await createCompanyPayload22(cType);

    // Create context
    const createRequestContext = await request.newContext();

    // Get the url, headers and body
    const url = await buildUrl.companyEndPointUrl;
    console.log("Request URL : ", url);
    const requestHeaders = await buildHeaders.createHeaders;
    console.log("Request Headers : ", requestHeaders);
    const requestBody = await companyPayload;
    // const requestBody = await JSON.parse(companyPayload);
    console.log("Request Payload : ", requestBody);

    // Request and get response
    const response = await createRequestContext.post(url, {
        headers: requestHeaders,
        data: requestBody
    });

    // Validation

    console.log("Response Status : ", response.status());
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log("Response Body : ", responseBody);

    return response.json();
}

/**
 * Create company rest call
 * @param {*} companyPayload
 */
async function createCompany(companyPayload) {
    // Create context
    const createRequestContext = await request.newContext();

    // Get the url, headers and body
    const url = await buildUrl.companyEndPointUrl;
    console.log("Request URL : ", url);
    const requestHeaders = await buildHeaders.createHeaders;
    console.log("Request Headers : ", requestHeaders);
    const requestBody = await companyPayload;
    // const requestBody = await JSON.parse(companyPayload);
    console.log("Request Payload : ", requestBody);

    // Request and get response
    const response = await createRequestContext.post(url, {
        headers: requestHeaders,
        data: requestBody
    });

    // Validation

    console.log("Response Status : ", response.status());
    expect.soft(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log("Response Body : ", responseBody);

    return response.json();
}

async function createCompany22(companyTypeOrPayload) {
    // Create context
    const createRequestContext = await request.newContext();

    // Get the url, headers and body
    const url = await buildUrl.companyEndPointUrl;
    console.log("Request URL : ", url);
    const requestHeaders = await buildHeaders.createHeaders;
    console.log("Request Headers : ", requestHeaders);
    const requestBody = await createCompanyPayloadWithData(companyTypeOrPayload);
    // const requestBody = await JSON.parse(companyPayload);
    console.log("Request Payload : ", requestBody);

    // Request and get response
    const response = await createRequestContext.post(url, {
        headers: requestHeaders,
        data: requestBody
    });

    // Validation

    console.log("Response Status : ", response.status());
    // expect.soft(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log("Response Body : ", responseBody);

    return response.json();
}

// async function verifyCompany(response){

// }

async function searchCompany(companies) {}

async function addSupportFile(companyName, filePath) {}

async function addChildCompany(companyName, childCompanyName) {}

async function getCompanyData(companyResponseBody, key) {
    const company = JSON.parse(JSON.stringify(companyResponseBody));
    try {
        console.log("Retrive Value of Key : ", key);
        return company[key];
    } catch (error) {
        console.log(error);
    }
}

module.exports = { createCompany, createCompanyPayload, createRandomCompany, getCompanyData, createCompany22 };
