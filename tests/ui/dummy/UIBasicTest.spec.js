const { test } = require("@playwright/test");

test("First Test with function name", function () {
    // java script sync and async concepts
    // java script await concept
});

test("First Test with anonymous function", () => {
    // java script sync and async concepts
    // java script await concept
    // use without function name (anonymous function)
});

test("First Test with anonymous function and global fixture", async ({ browser }) => {
    // java script sync and async concepts
    // java script await concept
    // use without function name (anonymous function)
    // Give fixture name under { fixture name } otherwise it consider as normal string
    // https://playwright.dev/docs/test-fixtures
});

// actual test
test("First Test with browser fixture", async ({ browser, page }) => {
    // If you have anything to be submit to browser i.e. Cookie, Proxy etc.

    // const context = await browser.newContext();
    // const page = await context.newPage();

    // await page.goto("https://e2productqa.dev.e2open.com/pages/accept?destination=/dev1108_nc/e2net/console/web/main.action");

    // Default Mode --- If I do not have any anything to be submit to browser i.e. Cookie, Proxy etc. you can directly use page fixture
    await page.goto("https://e2productqa.dev.e2open.com/pages/accept?destination=/dev1108_nc/e2net/console/web/main.action");
});

// actual test
test("First Test with page fixture", async ({ page }) => {
    await page.goto("https://e2productqa.dev.e2open.com/pages/accept?destination=/dev1108_nc/e2net/console/web/main.action");
});
