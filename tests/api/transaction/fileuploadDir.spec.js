const { test, request } = require("@playwright/test");
const fileUtils = require("../../../src/utils/fileUtils");
const path = require("path");
const fs = require("fs");

test("file upload", async () => {
    const filePath = path.resolve(__dirname, "C:/sourceVSCode/playwright-e2net/testdata/e2net/messageFiles/wildcard.txt");
    // const fileStream = fs.createReadStream(filePath);
    const file = fs.readFileSync(filePath);

    const requestContext = await request.newContext();

    const response = await requestContext.post("http://dev1108.dev.e2open.com:11080/e2net/console/service/api/private/connectionFiles/35474/upload", {
        headers: {
            "iv-user": "dev1108",
            Accept: "*/*",
            ContentType: "multipart/form-data"
        },
        multipart: {
            file: {
                name: filePath,
                mimeType: "text/plain",
                buffer: file
            }
        }
    });

    console.log(response);
    const body = JSON.parse(await response.text());
    console.log(body);
});
