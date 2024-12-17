const { test, expect } = require("@playwright/test");
const { skip } = require("node:test");

test("E2net Login Page Accept Cookie", async ({ page }) => {
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

    // wait until network call become idle
    // but sometime it do not work - NOT Recommended
    await page.waitForLoadState("networkidle");

    // wait for page load

    // await page.waitForSelector(page.locator("div#header>h1"));
    // Discouraged waitForSelector - Use web assertions that assert visibility or a locator-based locator.waitFor() instead

    // wait for page load
    await page.locator("div#header>h1").waitFor({ state: "visible", timeout: 3 * 60 * 1000 });

    // Verify login is Successfull
    await expect(page.locator("div#header>h1")).toContainText("e2net");
});

test.skip("E2net Login Tests", async ({ page }) => {
    await page.goto("https://authn.dev.e2open.com/ui/");

    console.log("Login Page Titie: " + (await page.title()));
    await expect(page).toHaveTitle("e2open");

    await page.getByPlaceholder("Enter your email").fill("noReply@e2open.com");
    await page.getByRole("button", { name: "Continue" }).click();

    await page.getByPlaceholder("Enter your username").fill("dev1108");
    await page.getByPlaceholder("Enter your password").fill("E2open123");
    await page.getByRole("button", { name: "Log In" }).click();

    await page.waitForSelector(page.getByRole("heading", { name: "e2net" }));
    await expect(page.getByRole("heading", { name: "e2net" })).toBeVisible();
    await expect(page.frameLocator('iframe[name="content-frame"]').getByRole("heading", { name: "Transactions" })).toBeVisible();

    await page.getByText("e2openProdQA E2open Product QA").click();
    await expect(page.getByRole("link", { name: "Exit" })).toBeVisible();
});

test.skip("E2net Logout Tests", async ({ page }) => {
    await page.getByText("e2openProdQA E2open Product QA").click();
    await page.getByRole("link", { name: "Exit" }).click();

    await expect(page.getByTitle("My Profile")).toBeVisible();
    await expect(page.getByText("Launchpad")).toBeVisible();
    await expect(page.getByText("E2open Product QA help")).toBeVisible();

    await page.getByTitle("My Profile").click();
    await page.getByRole("link", { name: "exit_to_app Exit" }).click();
    await page.goto("https://authn.dev.e2open.com/ui/logout");

    await expect(page.getByRole("heading", { name: "You have been logged out" })).toBeVisible();
});
