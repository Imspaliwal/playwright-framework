const fs = require("fs");

class DataTransform {
    // Read the test data from the JSON file
    testData = JSON.parse(fs.readFileSync("testdata.json", "utf8"));

    /**
     * Create multiple test cases using the same data.
     * @param {Object} baseData - The base data object.
     * @param {number} numRecords - The number of records to create.
     * @returns {Array} - An array of test cases.
     */

    async companyData(baseData, numRecords) {
        const testCases = [];
        for (let i = 0; i < numRecords; i++) {
            testCases.push({
                company: baseData.company + i,
                desc: baseData.desc + i
                // 100 line
            });
        }
        return testCases;
    }
}

// Export the function
module.exports = DataTransform;
