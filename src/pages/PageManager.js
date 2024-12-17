const { LoginPage } = require("./LoginPage");
const { HomePage } = require("./HomePage");
const { TransactionPage } = require("./TransactionPage");
const { CompanyPage } = require("./CompanyPage");
const { APIUtils } = require("../utils/apiUtils/APIUtils");

class PageManager {
    constructor(page) {
        this.page = page;
        this.apiUtils = new APIUtils(page);
        this.loginPage = new LoginPage(page);
        this.homePage = new HomePage(page);
        this.transactionPage = new TransactionPage(page);
        this.companyPage = new CompanyPage(page);
    }

    getAPIUtils() {
        return this.apiUtils;
    }

    getLoginPage() {
        return this.loginPage;
    }

    getHomePage() {
        return this.homePage;
    }

    getTransactionPage() {
        return this.transactionPage;
    }

    getCompanyPage() {
        return this.companyPage;
    }
}

module.exports = { PageManager };
