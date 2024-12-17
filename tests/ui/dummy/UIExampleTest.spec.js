const { test, expect } = require("@playwright/test");
const path = require("path");

const projectRoot = process.cwd();
const downloadDirectory = path.join(projectRoot, "create");

test("File Download Default Path", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/download");

    const downloadPromise = page.waitForEvent("download");

    await page.getByText("uploadable-file.txt").waitFor();

    await page.getByText("uploadable-file.txt").click();

    const download = await downloadPromise;

    const downloadedtempPath = await download.path();

    console.log("Downlaoed File with Path: " + downloadedtempPath);
});

test.only("File Download with Custom Path", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/download");

    const downloadPromise = page.waitForEvent("download");

    await page.getByText("random_data.txt").waitFor();

    await page.getByText("random_data.txt").click();

    const download = await downloadPromise;

    const url = download.url();
    console.log("Downlaoed File URL: " + url);
    const downloadedtempPath = await download.path();
    console.log("Downlaoed File with Path: " + downloadedtempPath);

    await download.saveAs(path.join(downloadDirectory), download.suggestedFilename());

    // console.log("Downlaoed File with Path: "+path);
});
