const { request, expect } = require("@playwright/test");
const { connectionEndPointUrl } = require("../utils/apiUtils/urlBuilder");
const { buildHeaders } = require("../utils/apiUtils/headerBuilder");
const { readFile } = require("../utils/fileUtils");
const path = require("path");
const { faker } = require("@faker-js/faker");

let filePath;

/**
 * Create Connection Data
 * @param {*} companyJson
 * @param {*} connectionJson
 * @returns
 */
async function connectionData(companyJson, connectionJson) {
    const company = await JSON.parse(companyJson);
    const connection = await JSON.parse(connectionJson);

    const randomString = faker.string.numeric(6);

    // Reset Company Data
    connection.id = company.org.id;
    connection.profileEntity.organization.id = await company.org.id;
    connection.profileEntity.organization.name = await company.org.name;
    connection.profileEntity.organization.communityUniqueID = await company.org.communityUniqueID;
    connection.profileEntity.organization.supportEmail = await company.org.supportEmail;
    connection.profileEntity.organization.description = await company.org.description;
    connection.profileEntity.organization.companyTypeName = await company.org.companyTypeName;
    connection.profileEntity.organization.companyId = await company.org.companyId;
    connection.profileEntity.organization.statusNotificationEnabled = await company.org.statusNotificationEnabled;
    connection.profileEntity.organization.payloadSearchEnabled = await company.org.payloadSearchEnabled;

    // Reset Connection Data
    connection.profileEntity.partnerId = (await company.org.name) + randomString;
    connection.profileEntity.profileName = (await company.org.name) + randomString + " " + connection.protocol + " Connection";
    connection.profileEntity.partnerName = (await company.org.name) + randomString;
    connection.profileEntity.description = (await "Onboard Profile for ") + company.org.name + randomString;
    connection.profileEntity.name = (await company.org.name) + randomString + " " + connection.protocol + " Connection";
    connection.profileEntity.displayName = (await company.org.name) + randomString + "/" + company.org.name + randomString + " " + connection.protocol + " Connection";

    // Reset the Connection Property Data

    // return
    return connection;
}

/**
 * Create Connection Payload, Give company Payload data and protocol
 * @param {*} company
 * @param {*} protocol
 * @returns playload body
 */
async function createConnectionPayload(company, protocol) {
    try {
        filePath = path.join(process.cwd() + "/testdata/e2net/connections/protocols/" + protocol + ".json");
        console.log("Reading Connector Default Json file : ", filePath);
        const fileContent = await readFile(filePath);
        const jsonData = JSON.parse(fileContent);
        const body = await connectionData(JSON.stringify(company), JSON.stringify(jsonData));
        // show body in temp file under test-results folder
        // console.log("Body: ", JSON.stringify(body));
        return body;
    } catch (error) {
        console.log("Error reading or parsing the JSON file: " + error);
        throw error;
    }
}

/**
 * Create Connection
 * @param {*} connectionPayload
 * @returns response json
 */
async function createConnection(connectionPayload) {
    const requestBody = await JSON.parse(connectionPayload);

    // create context
    const createRequestContext = await request.newContext();

    // get URL, Headers and Req Body
    const url = await connectionEndPointUrl(requestBody.id, requestBody.protocol);
    console.log("Request url : ", url);
    const requestHeaders = await buildHeaders.createHeaders;
    console.log("Request Headers : ", requestHeaders);
    // const requestBody = connectionPayload;
    console.log("Request Payload : ", requestBody);

    // Request and get Response
    const response = await createRequestContext.post(url, {
        headers: requestHeaders,
        data: requestBody
    });

    // Validate
    console.log("Response Status : ", response.status());
    // expect(response.status()).toBe(201);
    const responseBody = await response.json();
    console.log("Response Body : ", responseBody);

    return response.json();
}

module.exports = { createConnection, createConnectionPayload };
