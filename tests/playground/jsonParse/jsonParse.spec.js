const { test, expect } = require("@playwright/test");
const { findKeyValue, findKeyValue1 } = require("../../../src/utils/apiUtils/jsonHelper/jsonParser");

const sampleJson = {
    name: "sumit",
    id: 123,
    status: true,
    phone: {
        mobile: 222,
        call: 444
    },
    address: [
        {
            pin: 444,
            home: "park"
        }
    ]
};

const companyJson = {
    success: true,
    message: null,
    data: {
        org: {
            id: 19574,
            lockVersion: 0,
            baseUUID: "dc9dcc64-514f-4f45-b60e-cb0e5c93b170",
            createUserId: 2083,
            updateUserId: 2083,
            createTime: 1730210297499,
            updateTime: 1730210297499,
            name: "CentOSSen027111",
            referenceID: "e75d8f0c-e814-4803-a75b-e4e32d81ef69",
            communityUniqueID: "integrated-qa-123027111",
            supportEmail: "027111centossen@qa.dev.e2open.com",
            businessEmail: null,
            description: "Partner for FIFO cent os test027111",
            companyTypeName: "Tenant",
            parentCompanyName: null,
            url: null,
            sic: null,
            language: null,
            rootOrgId: null,
            companyId: "CentOSSen027111",
            statusNotificationsEnabled: false,
            payloadSearchEnabled: true,
            monitorUnrouteableTxns: false,
            retentionInterval: 43200,
            archiveInterval: 4320,
            timeZone: null,
            versionedId: "19574::0",
            auditRetentionDays: 30,
            auditArchiveDays: 3,
            managingOrgId: null
        }
    }
};

test("json parse", async () => {
    // const value = await findKeyValue(companyJson, "id");
    // console.log(value);
    await findKeyValue1(companyJson);
});
