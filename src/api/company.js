const { expect, request } = require("@playwright/test");
const { buildUrl } = require("../utils/apiUtils/urlBuilder");
const { buildHeaders } = require("../utils/apiUtils/headerBuilder");
const path = require("path");
const { readFile } = require("../utils/fileUtils");
const { faker } = require("@faker-js/faker");
const { findKeyValue } = require("../../src/utils/apiUtils/jsonHelper/jsonParser");

// Company JSON Sample data file paths
const filePathTenant = path.join(process.cwd() + "/testdata/e2net/companies/company-create-tenant.json");
const filePathPartner = path.join(process.cwd() + "/testdata/e2net/companies/company-create-partner.json");
const filePathNetwork = path.join(process.cwd() + "/testdata/e2net/companies/company-create-network.json");

/**
 *
 * @param {*} companyTypeOrPayload Either provide company type or company data i.e. JSON
 * passing company type will create company with random data
 * passing company data i.e. josn, map will create company with given data
 * @returns create compnay response json
 */
async function createCompany(companyTypeOrPayload) {
    console.log("Creating Company");
    // Create context
    const createRequestContext = await request.newContext();

    // Get the URL, Header and Body
    const url = await buildUrl.companyEndPointUrl;
    console.log("Request URL : ", url);
    const requestHeaders = await buildHeaders.createHeaders;
    console.log("Request Headers : ", requestHeaders);
    const requestBody = await createCompanyData(companyTypeOrPayload);
    console.log("Request Body : ", requestBody);

    // Request and get Response
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
    // return response.body(); // return buffer
}

/**
 * Create a Company Data payload
 * @param {*} companyTypeOrData Either provide company type or company data i.e. JSON
 * passing company type will create company with random data
 * passing company data i.e. josn, map will create company with given data
 * @returns compant body in the form of JSON
 * {@linkcode companyDataRandom()}
 * {@linkcode companyDataFixed()}
 */
async function createCompanyData(companyTypeOrData) {
    try {
        // If company data is either json or array
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
            const body = await companyDataRandom(JSON.stringify(jsonData));
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
 * Get the company data json based on company type
 * @param {*} companyType
 * @returns company data sample file i.e. company-tenant.json, company-partner.json or company-network.json
 */
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

/**
 * This function transformed the random company data
 * @param {*} companyJson
 * @returns return company body after data transformed
 */
async function companyDataRandom(companyJson) {
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

/**
 * This function transformed the given company data
 * @param {*} companyJson
 * @returns return company body after data transformed
 */
async function companyDataFixed(companyJson) {
    const company = await JSON.parse(companyJson);
    const companyType = await company.org.companyTypeName;
    console.log(`Creating ${companyType} Company`);
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
    return companyBody;
}

async function getCompanyData(companyResponseBody, key) {
    const company = JSON.parse(JSON.stringify(companyResponseBody));
    try {
        console.log("Retrive Value of Key : ", key);
        return company[key];
    } catch (error) {
        console.log(error);
    }
}

async function verifyCompany(response) {}

async function searchCompany(companies) {}

async function addSupportFile(companyName, filePath) {}

async function addChildCompany(companyName, childCompanyName) {}

module.exports = { createCompany, getCompanyData };
