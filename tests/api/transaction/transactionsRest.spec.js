const { test, expect } = require("@playwright/test");
const { doDirectoryTransaction } = require("../../../src/api/transaction");

test.describe("POST transactions tests", async () => {
    test.skip("POST directory transaction", async () => {
        const response = await doDirectoryTransaction("178176", "wildcard.txt", "DirRec1178", "RESTDup1178", "850", "4030", "1669618056", "txt");
    });

    test.skip("POST as2 transaction", async () => {
        const response = await doDirectoryTransaction("466488", "TVPartnerB145146_TVTenant145146_850_4030_1669618056", "TVPartnerB145146", "TVTenant145146", "850", "4030", "1669618056", "txt");
    });

    test.skip("POST rest transaction", async () => {
        const response = await doDirectoryTransaction("466488", "TVPartnerB145146_TVTenant145146_850_4030_1669618056", "TVPartnerB145146", "TVTenant145146", "850", "4030", "1669618056", "txt");
    });

    test.skip("POST http transaction", async () => {
        const response = await doDirectoryTransaction("466488", "TVPartnerB145146_TVTenant145146_850_4030_1669618056", "TVPartnerB145146", "TVTenant145146", "850", "4030", "1669618056", "txt");
    });
});
