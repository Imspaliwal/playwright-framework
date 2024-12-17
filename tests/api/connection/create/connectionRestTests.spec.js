const { test, expect } = require("@playwright/test");
const path = require("path");
const JsonFileReader = require("../../../../src/utils/apiCommon/jsonHelper/JsonFileReader");

const projectRoot = process.cwd();
const downloadDirectory = path.join(projectRoot, "testdata/e2net/connections/protocols");

test.only("should be able to create connection", async ({ request }) => {
    const response = await request.post("http://dev1108.dev.e2open.com:11080/e2net/console/service/api/private/connection/protocol/23248?protocol=b2bc", {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "iv-user": "dev1108",
            "Accept-Charset": "UTF-8",
            charset: "UTF-8",
            "Accept-Encoding": "*"
            // 'Origin': 'https://e2productqa.dev.e2open.com',
            // // 'Referer': 'https://e2productqa.dev.e2open.com/dev1108_ui/e2net-ui/companies',
            // 'Cooie': 'acceptAllCookies=true'
            // // 'Cookie' : 'dev.e2open.session.id=d42cc12d-8411-4ecf-8f3c-08e6b9154ff5'
        },
        data: JsonFileReader.readJsonFromFile(downloadDirectory, "rest.json")
    });

    console.log(response.ok());
    // expect(response.ok()).toBeTruthy();

    console.log(response.status());
    // expect(response.status()).toBe(200);

    const responseBody = await response.json();
    console.log(responseBody);
    // expect(responseBody.booking).toHaveProperty("firstname", "Jim");
    // expect(responseBody.booking).toHaveProperty("lastname", "Brown");
    // expect(responseBody.booking).toHaveProperty("totalprice", 111);
    // expect(responseBody.booking).toHaveProperty("depositpaid", true);
});

test("should be able to get the unique connection", async ({ request }) => {
    const response = await request.post("http://dev1108.dev.e2open.com:11080/e2net/console/service/api/private/connections?page=1&rowsPerPage=10000", {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "iv-user": "dev1108",
            "Accept-Charset": "UTF-8",
            charset: "UTF-8",
            "Accept-Encoding": "*"
            // 'Origin': 'https://e2productqa.dev.e2open.com',
            // 'Referer': 'https://e2productqa.dev.e2open.com/dev1108_ui/e2net-ui/companies',
            // 'Cookie': 'acceptAllCookies=true'
            // 'Cookie' : 'dev.e2open.session.id=d42cc12d-8411-4ecf-8f3c-08e6b9154ff5'
        },
        data: {
            company: [
                {
                    key: "CentOSSen1",
                    value: "CentOSSen1"
                }
            ],
            connectionName: [
                {
                    key: "CentOSSen1_b2bcdixhkqd7",
                    value: "CentOSSen1_b2bcdixhkqd7"
                }
            ],
            state: {
                key: "enabled",
                value: "1"
            }
        }
    });

    console.log(response.ok());
    // expect(response.ok()).toBeTruthy();

    console.log(response.status());
    // expect(response.status()).toBe(200);

    const responseBody = await response.json();
    console.log(responseBody.data.rows[0]);
    console.log(await responseBody.data.rows[0].id);
    console.log(responseBody.data.totalRows);
    console.log(responseBody.data.rows[0].orgName);
    console.log(responseBody.data.rows[0].orgId);
    console.log(responseBody.data.rows[0].protocol);
    console.log(responseBody.data.rows[0].serverPrincipalName);

    // expect(responseBody.booking).toHaveProperty("firstname", "Jim");
    // expect(responseBody.booking).toHaveProperty("lastname", "Brown");
    // expect(responseBody.booking).toHaveProperty("totalprice", 111);
    // expect(responseBody.booking).toHaveProperty("depositpaid", true);
});
