const { jsonReader, jsonWriter, connectToDatabase, fetchData } = require("./playgroundDev");
const path = require("path");

const filePath = path.join(process.cwd() + "/testdata/e2net/companies/company-create.json");
const filePathNew = path.join(process.cwd() + "/testdata/e2net/companies/company-create-new.json");

await jsonReader(filePath, async (err, company) => {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log(company.org.supportEmail);
        return company;
    }
});

const company = {
    id: "456",
    name: "abc"
};

await jsonWriter(filePathNew, company, async (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
});

await jsonReader(filePathNew, async (err, company) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(company.id);
});

// Update the josn File

await jsonReader(filePath, async (err, company) => {
    if (err) {
        console.log(err);
        return;
    }
    // update the json key
    company.org.communityUniqueID = "integrated-qa-123";

    await jsonWriter(filePath, company, async (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
    });

    jsonReader(filePath, (err, company) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(company);
    });
});

// how to return
const ret = await jsonReader(filePath, async (err, company) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(company);
    return await company;
});

console.log("Ressdsc :" + ret);

// ============ DB Util Tests ================

// async function getEmployeeData() {

//     const sql = "select PARTNER_ID from E2NA_PARTNER_PROFILE_DETAILS where PROFILE_NAME=E2netQAWatermill_watermillJMS";

//     const data = await fetchData(sql);

//     console.log(data);

// }

// connectToDatabase().then(() => {

//     getEmployeeData();

// });
