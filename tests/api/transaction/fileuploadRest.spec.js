const { test, request } = require("@playwright/test");
const fileUtils = require("../../../src/utils/fileUtils");
const path = require("path");
const fs = require("fs");

test("file upload", async () => {
    const filePath = path.resolve(__dirname, "C:/sourceVSCode/playwright-e2net/testdata/e2net/messageFiles/wildcard.txt");
    // const fileStream = fs.createReadStream(filePath);
    const image = fs.readFileSync(filePath);

    const requestContext = await request.newContext();

    const credentials = `dev1108:E2open123`;
    const credentialsBase64 = Buffer.from(credentials).toString("base64");

    console.log("Base64 : ", credentialsBase64);

    const response = await requestContext.post("https://e2productqa-certauth.dev.e2open.com/dev1108_na/e2na/protocol/rest?connectionId=b8d88346-1c24-44bc-b40a-54ba35306c29", {
        headers: {
            "iv-user": "b8d88346-1c24-44bc-b40a-54ba35306c29",
            Authorization: `Basic ${credentialsBase64}`,
            Accept: "*/*",
            // ContentType: 'multipart/form-data',
            ContentType: "text/xml",
            // 'Content-Type': 'text/xml',
            fromduns: "RESTDup1178",
            toduns: "DirRec1178",
            datatype: "850",
            version: "4010",
            j_username: "dev1108",
            j_password: "E2open123",
            "x-e2open-auth-type": "basic",
            "x-e2open-message-id": "3c5211ff-18a0407e065-18a0407e0eb3",
            "x-forwarded-for": "10.120.96.40, 10.120.69.119"
        },
        multipart: {
            file: {
                name: filePath,
                mimeType: "text/plain",
                buffer: image
            }
        }
        // data: image
    });

    console.log(response);
    const body = JSON.parse(await response.text());
    console.log(body);
});
