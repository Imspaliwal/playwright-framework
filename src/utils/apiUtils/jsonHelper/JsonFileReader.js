const path = require("path");
const fs = require("fs");

class JsonFileReader {
    /**
     * Utility function to read JSON from a file
     * @param {string} dirPath - The directory path
     * @param {string} fileName - The name of the JSON file
     * @returns {Object} - The parsed JSON object
     */
    static readJsonFromFile(dirPath, fileName) {
        const filePath = path.join(dirPath, fileName);
        const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
        return jsonData;
    }
}

module.exports = JsonFileReader;
