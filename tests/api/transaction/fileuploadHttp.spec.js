const { test, expect } = require("@playwright/test");
// const {APIUtils} = require('../../../src/utils/apiCommon/APIUtils');

const payload = {
    propertyEntries: [
        {
            name: "TransportRetryLimit",
            value: "2",
            attributes: {},
            rank: 0,
            group: null
        },
        {
            name: "InProcessExtension",
            value: ".prc",
            attributes: {},
            rank: 0,
            group: null
        },
        {
            name: "OutboxStatusDirectory",
            value: "",
            attributes: {},
            rank: 0,
            group: null
        },
        {
            name: "OutboxFilenameFilter",
            value: "",
            attributes: {},
            rank: 0,
            group: null
        },
        {
            name: "AckSuccessExtension",
            value: ".ack",
            attributes: {},
            rank: 0,
            group: null
        },
        {
            name: "OutboxDirectory",
            value: "/e2open/var/shared/test/directory/tmp/CentOSSen259636530554/outbox",
            attributes: {},
            rank: 0,
            group: null
        },
        {
            name: "UseDate",
            value: "true",
            attributes: {},
            rank: 0,
            group: null
        },
        {
            name: "ProtocolVersion",
            value: "02.50",
            attributes: {},
            rank: 0,
            group: null
        },
        {
            name: "InboxStatusDirectory",
            value: "",
            attributes: {},
            rank: 0,
            group: null
        },
        {
            name: "TransportRetryInterval",
            value: "00:05:00.00",
            attributes: {},
            rank: 0,
            group: null
        },
        {
            name: "OutboxFormat",
            value: "fromDuns_toDuns_dataType_version_timestamp",
            attributes: {},
            rank: 0,
            group: null
        },
        {
            name: "ZipFileEncodingCheck",
            value: "true",
            attributes: {},
            rank: 0,
            group: null
        },
        {
            name: "InboxDirectory",
            value: "/e2open/var/shared/test/directory/tmp/CentOSSen259636530554/inbox",
            attributes: {},
            rank: 0,
            group: null
        },
        {
            name: "OutboxFilenameExtension",
            value: "${fileExt:.txt}",
            attributes: {},
            rank: 0,
            group: null
        },
        {
            name: "InboxFilenameFilter",
            value: "",
            attributes: {},
            rank: 0,
            group: null
        },
        {
            name: "InboxFormat",
            value: "fromDuns_toDuns_dataType_version_timestamp",
            attributes: {},
            rank: 0,
            group: null
        },
        {
            name: "FilenameSeparator",
            value: "_",
            attributes: {},
            rank: 0,
            group: null
        },
        {
            name: "DateFormat",
            value: "yyyyMMddHHmmssSSS",
            attributes: {},
            rank: 0,
            group: null
        },
        {
            name: "ProtocolCode",
            value: "Directory",
            attributes: {},
            rank: 0,
            group: null
        },
        {
            name: "ArchiveDirectory",
            value: "/e2open/var/shared/test/directory/tmp/CentOSSen259636530554/archive",
            attributes: {},
            rank: 0,
            group: null
        },
        {
            name: "FileEncoding",
            value: "ConditionalZip",
            attributes: {},
            rank: 0,
            group: null
        },
        {
            name: "Id",
            value: "directory",
            attributes: {},
            rank: 0,
            group: null
        },
        {
            name: "AckFailureExtension",
            value: ".err",
            attributes: {},
            rank: 0,
            group: null
        },
        {
            name: "InboxFilenameExtension",
            value: ".txt|.xls|.xlsx|.xml|.csv|.zip",
            attributes: {},
            rank: 0,
            group: null
        },
        {
            name: "FifoEnabled",
            value: "false",
            rank: 0
        }
    ]
};

//test case 1
test.only("should be able to a company", async ({ request }) => {
    const response = await request.post("http://dev1108.dev.e2open.com:11080/e2net/console/service/api/private/connections/229920/protocol", {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "iv-user": "dev1108",
            "Accept-Charset": "UTF-8",
            charset: "UTF-8",
            "Accept-Encoding": "*",
            Cookie: "acceptAllCookies=true"
        },
        data: payload
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
