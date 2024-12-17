const fs = require("fs");
const path = require("path");

const filePath = path.resolve(__dirname, "APIData.json");

class APIUtils {
    // constructor() {
    // }

    constructor(page) {
        this.page = page;
    }

    /**
     * Track the rest api calls, add this above UI step
     * @param {*} page page fixtures
     * @returns
     */
    static async trackRestCalls(page) {
        let requestDetails = [];

        this.page.on("request", async (request) => {
            requestDetails.push({
                url: await request.url(),
                method: await request.method(),
                headers: await request.headers(),
                postData: await request.postData()
            });
        });

        // this.page.on('response', async (response) => {
        //     const request = await response.request();
        //     const index = requestDetails.findIndex(async req => req.url === await request.url() && req.method === await request.method());
        //     if (index !== -1) {
        //         requestDetails[index].response = {
        //             status: await response.status(),
        //             statusText: await response.statusText(),
        //             headers: await response.headers(),
        //             body: await response.status() === 200 ? await response.text() : null // Only fetch body if status is 200
        //         };
        //     }
        // });

        // console.log(requestDetails);
        return requestDetails;
    }

    async getId() {
        const data = fs.readFileSync(filePath, "utf-8");
        return JSON.parse(data).id;
    }

    async setId(id) {
        fs.writeFileSync(filePath, JSON.stringify({ id }), "utf-8");
    }
}

module.exports = { APIUtils };
