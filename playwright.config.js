const { defineConfig, devices } = require("@playwright/test");

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
    testDir: "./tests",

    // timeout for each test
    timeout: 3 * 60 * 1000,

    // timeout for each assertion
    expect: {
        timeout: 2 * 60 * 1000
    },

    reporter: "html",

    // shared setting for all tests
    use: {
        browserName: "chromium",
        headless: false,
        reporter: "list",
        screenshot: "on",
        trace: "on",
        viewport: null,
        launchOptions: {
            args: ["--start-maximized"]
        }
    }
});
