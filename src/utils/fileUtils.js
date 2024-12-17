const fs = require("fs/promises");

// Add file content edcoding option as parameter
async function readFile(filePath) {
    try {
        const fileContent = await fs.readFile(filePath, { encoding: "utf-8" });
        return fileContent;
    } catch (error) {
        console.log("Error reading file", error);
    }
}

module.exports = { readFile };
