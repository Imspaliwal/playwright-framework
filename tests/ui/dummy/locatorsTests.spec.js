const { test, expect } = require("@playwright/test");
const { name } = require("../../../playwright.config");

test("Advance Locator Tests", async ({ page }) => {
    await page.goto("https://e2productqa.dev.e2open.com/pages/accept?destination=/dev1164_nc/e2net/console/web/main.action");
    await page.locator("button#accept-button").click();

    // Email Validation
    await page.locator("input#email").fill("noReply@e2open.com");
    await page.locator("button[type='submit']").click();

    // Username & Password Validation
    await page.locator("input#username").fill("dev1164");
    await page.locator("input#password").fill("E2open123");
    await page.locator("button[type='submit']").click();

    // wait for page load
    await page.locator("div#header>h1").waitFor({ state: "visible", timeout: 3 * 60 * 1000 });

    // Verify login is Successfull
    await expect(page.locator("div#header>h1")).toContainText("e2net");

    // Move to Frame
    const framePage = page.frameLocator("iframe[name='content-frame']");

    // Click on Filter
    // await framePage.locator(".eto-expand__h3").is
    await framePage.locator(".eto-expand__h3").click();

    // Specific Locators
    // await framePage.getByLabel("").click(""); // try with click

    await framePage.getByPlaceholder("Enter Protocol IDs").fill("1726737025218");
    // await framePage.getByPlaceholder("From Companies").fill("abc"); // working, add more keys logic

    // await framePage.getByRole("button", {name:'Apply '}).click();
    // await framePage.getByRole("button", {name:'Apply '}).click();

    // await framePage.getByText("Apply ").click();

    // Information Message
    // const message = await framePage.getByText("No results found").isVisible();
    // console.log(message);

    // await framePage.getByAltText

    // await framePage.getByTitle

    // await framePage.getByTestId

    // await page.locator('li.dropdown', { hasText: 'My Network' }).click();
    await page.locator("li.dropdown").filter({ hasText: "My Network" }).click(); // working
    // await page.locator("li.dropdown").filter({ hasText: "My Network" }).getByText("Companies").click(); // not working
    // await page.locator("li.dropdown").filter({ hasText: "My Network" }).locator('ul li a', { hasText: 'Companies' }).click() // not working

    await page.locator("ul li a", { hasText: "Companies" }).click(); // working

    await page.pause();

    // inspect with text
    // text=${role}
});
