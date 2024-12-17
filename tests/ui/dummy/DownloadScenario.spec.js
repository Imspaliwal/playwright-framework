const { test } = require("@playwright/test");
const DataProcessor = require("../../../src/utils/DataProcessor");

const path = require("path");
const fs = require("fs");

// Get the root directory of the project
//let filePath;
const projectRoot = process.cwd();
const downloadDirectory = path.join(projectRoot, "Downloads");

test("Download File with Default File Name", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/download");

    const downloadPromise = page.waitForEvent("download");
    await page.getByText("testdata1.csv").click();
    const download = await downloadPromise;

    // Ensure the download directory exists
    if (!fs.existsSync(downloadDirectory)) {
        fs.mkdirSync(downloadDirectory, { recursive: true });
    }

    // Save the downloaded file to the download directory
    try {
        await download.saveAs(path.join(downloadDirectory, download.suggestedFilename()));
        console.log(`File saved to: ${path.join(downloadDirectory, download.suggestedFilename())}`);
    } catch (error) {
        console.error("Error saving the file:", error);
    }
});

test("Download File with File Name", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/download");

    const downloadPromise = page.waitForEvent("download");
    await page.getByText("MV5BNmNhM2NjMTgtNmIyZC00ZmVjLTk4YWItZmZjNGY2NThiNDhkXkEyXkFqcGdeQXVyODU4MDU1NjU@._V1_FMjpg_UX1000_.jpg").click();
    const download = await downloadPromise;

    // Ensure the download directory exists
    if (!fs.existsSync(downloadDirectory)) {
        fs.mkdirSync(downloadDirectory, { recursive: true });
    }

    // Save the downloaded file to the download directory
    try {
        await download.saveAs(path.join(downloadDirectory, download.suggestedFilename()));
        console.log(`File saved to: ${path.join(downloadDirectory, download.suggestedFilename())}`);
    } catch (error) {
        console.error("Error saving the file:", error);
    }
});

test("Download File with Custom File Name", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/download");

    const downloadPromise = page.waitForEvent("download");
    await page.getByText("driven.csv").click();
    const download = await downloadPromise;

    // Ensure the download directory exists
    if (!fs.existsSync(downloadDirectory)) {
        fs.mkdirSync(downloadDirectory, { recursive: true });
    }

    // Save the downloaded file to the download directory
    try {
        await download.saveAs(path.join(downloadDirectory, "bird-thumbnail-123.jpg"));
        console.log(`File saved to: ${path.join(downloadDirectory, download.suggestedFilename())}`);
    } catch (error) {
        console.error("Error saving the file:", error);
    }

    // Jump To Page
    await page.goto("https://the-internet.herokuapp.com/upload");

    await page.locator("#file-upload").waitFor();

    // Upload File
    await page.locator("#file-upload").setInputFiles(path.join(downloadDirectory, "bird-thumbnail-123.jpg"));

    await page.pause();
});

test.only("Download File and verify content For CSV", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/download");

    const downloadPromise = page.waitForEvent("download");
    await page.getByText("testdata1.csv").click();
    const download = await downloadPromise;

    // Ensure the download directory exists
    if (!fs.existsSync(downloadDirectory)) {
        fs.mkdirSync(downloadDirectory, { recursive: true });
    }
    // Declare filePath here

    let filePath;

    // Save the downloaded file to the download directory
    try {
        const suggestedFilename = download.suggestedFilename();
        console.log(`Suggested filename: ${suggestedFilename}`);

        if (suggestedFilename) {
            filePath = path.join(downloadDirectory, suggestedFilename);
            await download.saveAs(filePath);
            console.log(`File saved to: ${filePath}`);
        } else {
            console.error("Suggested filename is undefined");
        }
    } catch (error) {
        console.error("Error saving the file:", error);
    }

    // Creating object for DataProcessor class
    const expectedValue = "rakesh";
    const dataProcessor = new DataProcessor(filePath, null, expectedValue);
    await dataProcessor.verifyFileContent();
});
