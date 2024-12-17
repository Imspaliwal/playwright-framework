class CommonUtils {
    constructor(page) {
        this.page = page;
    }

    async switchFrame(frameSelector) {
        return this.page.frameLocator(frameSelector);
    }
}

module.exports = { CommonUtils };
