const faker = require("@faker-js/faker");

function randomNumber(limit) {
    return faker.numeric(limit);
}

function randomString(limit) {
    const randomString = faker.string.numeric(6);
}
