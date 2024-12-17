const { test, expect } = require("@playwright/test");
const { log } = require("console");

test("List down the transactions list", async ({ page }) => {
    await page.goto("https://e2productqa.dev.e2open.com/pages/accept?destination=/dev1108_nc/e2net/console/web/main.action");
    await page.locator("button#accept-button").click();

    // Email Validation
    await page.locator("input#email").fill("noReply@e2open.com");
    await page.locator("button[type='submit']").click();

    // Username & Password Validation
    await page.locator("input#username").fill("dev1108");
    await page.locator("input#password").fill("E2open123");
    await page.locator("button[type='submit']").click();

    // Verify login is Successfull
    await expect(page.locator("div#header>h1")).toContainText("e2net");

    // Get first, nth and last transaction data
    const frame = await page.frame({ name: "content-frame" });
    console.log("First Transaction ID: " + (await frame.locator("//div[@ref='gridBody']//a").first().textContent()));
    console.log("Second Transaction ID: " + (await frame.locator("div[ref='gridBody'] a").nth(1).textContent()));
    console.log("Last Transaction ID: " + (await frame.locator("div[ref='gridBody'] a").last().textContent()));

    // Get text of all transactios
    const transactionList = await frame.locator("div[ref='gridBody'] a").allTextContents();
    console.log("All Transaction Id's: " + transactionList);
});

test("List down the transactions list all Text Content", async ({ page }) => {
    await page.goto("https://e2productqa.dev.e2open.com/pages/accept?destination=/dev1108_nc/e2net/console/web/main.action");
    await page.locator("button#accept-button").click();

    // Email Validation
    await page.locator("input#email").fill("noReply@e2open.com");
    await page.locator("button[type='submit']").click();

    // Username & Password Validation
    await page.locator("input#username").fill("dev1108");
    await page.locator("input#password").fill("E2open123");
    await page.locator("button[type='submit']").click();

    // wait untill network call become idle
    await page.waitForLoadState("networkidle");

    // Verify login is Successfull
    await expect(page.locator("div#header>h1")).toContainText("e2net");

    // Get first, nth and last transaction data
    const frame = await page.frame({ name: "content-frame" });

    // console.log("First Transaction ID: " + await frame.locator("//div[@ref='gridBody']//a").first().textContent());
    // console.log("Second Transaction ID: " + await frame.locator("div[ref='gridBody'] a").nth(1).textContent());
    // console.log("Last Transaction ID: " + await frame.locator("div[ref='gridBody'] a").last().textContent());
    // above line playwrite wait for some time to show first or nth content

    // Get text of all transactios
    // it will not wait for content coz it can return [] array also considering there is no elements

    const transactionList = await frame.locator("div[ref='gridBody'] a").allTextContents();
    console.log("All Transaction Id's: " + transactionList);
});

test.only("Transaction Filters States", async ({ page }) => {
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

    // Wait for Walk Me and close it
    // try {

    //     await page.locator("div[id*='walkme-visual-design']").waitFor({state: 'visible'});
    //     await page.locator("button.wm-visual-design-button>div>svg").click();

    // } catch (error) {
    //     console.log("Walk Me might be not enabled!")
    // }

    // Move to Frame
    const framePage = page.frameLocator("iframe[name='content-frame']");

    // Click on Filter
    await framePage.locator(".eto-expand__h3").click();

    // Dropdown Element - not working
    // const stateDropdown = await framePage.locator("select[aria-label='State']");
    // stateDropdown.selectOption("Success");

    await framePage.locator(".eto-complex-combobox__field").fill("Success");
    // here verify if correct value displyed in suggestion --- Pending
    await page.keyboard.down("ArrowDown");
    await page.keyboard.press("Enter");
    await page.keyboard.press("Tab");
    // await framePage.locator("//span[@class='eto-checkbox__label'][normalize-space()='Success']").click();

    // Click on Apply
    await framePage.locator("button[title='Apply']").click();

    // Do some verification

    await page.pause();
});
