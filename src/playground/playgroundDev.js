const fs = require("fs");
const { json } = require("stream/consumers");

const type = "tenant";
const t = type.slice(-1).toUpperCase() + type.slice(1);
console.log(t);

/**
 * josnReader which read the json file on given File Path
 *
 * @param {*} FilePath Path along with file name
 * @param {*} callback callback function (err, companyJson)
 */
async function jsonReader(filePath, callback) {
    fs.readFile(filePath, "utf-8", async (err, jsonString) => {
        if (err) {
            console.log("File read failed! with error: " + err);

            return (await callback) && callback(err);
        }
        try {
            // console.log("JSON String :" + jsonString);
            const jsonData = JSON.parse(jsonString);

            return (await callback) && callback(null, jsonData);
            // return jsonData;
        } catch (err) {
            console.log("Error parsing the JSON string: " + err);

            return (await callback) && callback(err);
        }
    });
}

/**
 * jsonWriter which write the json file on given File path and data
 *
 * @param {*} FilePath Path along with file name
 * @param {*} fileData fileData in the from of String
 * @param {*} callback callback function (err, companyJson)
 */
async function jsonWriter(filePath, fileData, callback) {
    const data = JSON.stringify(fileData, null, 2);
    result = false;

    fs.writeFile(filePath, data, async (err, result) => {
        if (err) {
            console.log("File write failed! with error: " + err);
            return (await callback) && callback(err);
        } else {
            console.log("File write Successfully done.");
            result = true;
            return (await callback) && callback(null, result);
        }
    });
}

module.exports = { jsonReader, jsonWriter, connectToDatabase, fetchData };
