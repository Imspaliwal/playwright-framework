const { request, expect } = require("@playwright/test");
const { directoryTransactionEndPointUrl, doransactionEndPointUrl } = require("../../src/utils/apiUtils/urlBuilder");
const { createHeadersMultipartFormData, createHeadersMultipartFormData1, createHeadersMultipartFormData2 } = require("../../src/utils/apiUtils/headerBuilder");
const path = require("path");
const FormData = require("form-data");
const fs = require("fs");
const fileUtils = require("../utils/fileUtils");

// let requestHeader;

async function getFileName(fromDun, toDun, messsage, version, timestamp, ext) {
    return `${fromDun}_${toDun}_${messsage}_${version}_${timestamp}.${ext}`;
}

async function multipartFormData(file, fromDun, toDun, messsage, version, timestamp, ext) {
    return (multipartFormData = {
        file: {
            name: file,
            "Content-Disposition": "form-data",
            filename: fromDun + "_" + toDun + "_" + messsage + "_" + version + "_" + timestamp + "." + ext,
            "Content-Type": "text/plain"
        }
    });
}

async function multipartFormData1(filePath, fromDun, toDun, messsage, version, timestamp, ext) {
    // Create a FormData instance

    const form = new FormData();

    form.append("file", fs.createReadStream(filePath), {
        filename: `${fromDun}_${toDun}_${messsage}_${version}_${timestamp}.${ext}`,
        contentType: "text/plain"
    });

    return form;
}

async function doDirectoryTransaction(connectionId, sampleFileName, fromDun, toDun, messsage, version, timestamp, ext) {
    const fileName = await getFileName(fromDun, toDun, messsage, version, timestamp, ext);

    // const filePath = path.join(process.cwd() + '/testdata/e2net/messageFiles/' + fileName + '.txt');
    const filePath = path.resolve("testdata/e2net/messageFiles/", sampleFileName);
    // const filePath = path.resolve(__dirname, 'C:/sourceVSCode/playwright-e2net/testdata/e2net/messageFiles/wildcard.txt');
    console.log("Message File Path: ", filePath);

    // const file = await fileUtils.readFile(filePath);
    const file = fs.readFileSync(filePath);

    // Create context
    const requestContext = await request.newContext();

    // Get URL, FromData, Headers and Body
    const url = await directoryTransactionEndPointUrl(connectionId);
    console.log("Request URL :", url);
    // const form = await multipartFormData(filePath, fromDun, toDun, messsage, version, timestamp, ext);
    const requestHeader = await createHeadersMultipartFormData();
    console.log("Request Header :", requestHeader);

    // if (typeof timestamp === number) {
    //     // Transaction with given timestamp

    // } else {
    //     // Transaction with random timestamp

    // }

    const response = await requestContext.post(url, {
        headers: requestHeader,
        // data: requestBody
        multipart: {
            file: {
                name: fileName,
                mimeType: "text/plain",
                buffer: file
            }
        }
    });

    // Validate Response
    console.log("Response Status : ", response.status());
    // expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log("Response Body : ", responseBody);

    return response.json();
}

async function doTransaction(connectionType, connectionId, fileName, fromDun, toDun, messsage, version, timestamp, ext) {
    const filePath = path.join(process.cwd() + "/testdata/e2net/messageFiles/" + fileName + ".txt");
    // const filePath = path.resolve("testdata/e2net/messageFiles/", fileName);
    console.log("Message File Path: ", filePath);

    // Create context
    const requestContext = await request.newContext();

    // Get URL, FromData, Headers and Body
    const url = await doransactionEndPointUrl(connectionType, connectionId);
    console.log("Request URL :", url);
    // const form = await multipartFormData(filePath, fromDun, toDun, messsage, version, timestamp, ext);
    const form = await multipartFormData1(filePath, fromDun, toDun, messsage, version, timestamp, ext);
    // console.log('Request Header Form Data :', form);
    // const requestHeader = await createHeadersMultipartFormData(form);
    const requestHeader = await createHeadersMultipartFormData2(connectionId, form);
    console.log("Request Header :", requestHeader);
    const requestBody = form;
    console.log("Request Body :", requestBody);

    const response = await requestContext.post(url, {
        headers: requestHeader,
        data: requestBody
    });

    // Validate Response
    console.log("Response Status : ", response.status());
    // expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log("Response Body : ", responseBody);

    return response.json();
}

module.exports = { doDirectoryTransaction };
