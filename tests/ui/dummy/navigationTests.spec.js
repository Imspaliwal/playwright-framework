const { test, expect } = require("@playwright/test");

test("Get Navigation Menu List", async ({ page }) => {
    await page.goto("https://e2productqa.dev.e2open.com/pages/accept?destination=/dev1108_nc/e2net/console/web/main.action");
    await page.locator("button#accept-button").click();

    // Email Validation
    await page.locator("input#email").fill("noReply@e2open.com");
    await page.locator("button[type='submit']").click();

    // Username & Password Validation
    await page.locator("input#username").fill("dev1108");
    await page.locator("input#password").fill("E2open123");
    await page.locator("button[type='submit']").click();

    // wait for page load
    await page.locator("div#header>h1").waitFor({ state: "visible", timeout: 3 * 60 * 1000 });

    // Verify login is Successfull
    await expect(page.locator("div#header>h1")).toContainText("e2net");

    // ----------------------------------------------------------------------------

    // Get the list of navigation
    // Wait for multiple element to to present
    await page.locator("div#nav li").first().waitFor({ state: "attached" });
    const allNavMenus = await page.locator("div#nav li").allTextContents();
    console.log("All Nav Menu List: " + allNavMenus);

    allNavMenus.forEach((menu) => console.log(menu.trim()));
});

test("Walk Me close", async ({ page }) => {
    await page.locator("div[id*='walkme-visual-design']").waitFor({ state: "visible" });
    await page.locator("button.wm-visual-design-button>div>svg").click();
});
