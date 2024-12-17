class LoginPage {
    constructor(page) {
        this.page = page;
        this.accept = page.locator("button#accept-button");
        this.email = page.locator("input#email");
        this.submit = page.locator("button[type='submit']");
        this.username = page.locator("input#username");
        this.password = page.locator("input#password");
    }

    async navigateToLink(URL) {
        await this.page.goto(URL);
    }

    async login(email, username, password) {
        await this.accept.click();
        await this.email.fill(email);
        await this.submit.click();
        await this.username.fill(username);
        await this.password.fill(password);
        await this.submit.click();
    }
}

module.exports = { LoginPage };
