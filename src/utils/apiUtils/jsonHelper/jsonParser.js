const sampleJson = {
    name: "sumit",
    id: 123,
    status: true,
    phone: {
        mobile: 222,
        call: 444
    },
    address: [
        {
            pin: 444,
            home: "park"
        }
    ]
};

// console.log("Sample JSON : \n", sampleJson);
// console.log(typeof sampleJson);

// 1. Parse the java script object to string

// const sampleJsonString = JSON.stringify(sampleJson);
// console.log("JSON String : \n", sampleJsonString);
// console.log(typeof sampleJsonString);

// 2. Parse the java script string to JSON

// const sampleJsonParsed = JSON.parse(sampleJsonString);
// console.log("JSON Parsed : \n", sampleJsonParsed);
// console.log(typeof sampleJsonParsed);

// 3. get object
// const getId = sampleJsonParsed["id"];
// console.log(getId);
// const getAdd = sampleJsonParsed["address"];
// console.log(getAdd);
// const getHome = sampleJsonParsed["address[0].home"];
// console.log(getHome);

// if (sampleJsonParsed.hasOwnProperty("id")) {
// }

// get value from object based on key
async function findKeyValue(obj, key) {
    for (let prop in obj) {
        if (prop === key) {
            return obj[prop];
        } else if (typeof obj[prop] === "object") {
            let value = findKeyValue(obj[prop], key);
            if (value !== undefined) {
                return value;
            }
        }
    }
}

async function findKeyValue1(object) {
    for (let key in object) {
        // type of Key is 'Object'
        if (typeof object[key] === "object") {
            // type of Key is 'Array'
            if (Array.isArray(object[key])) {
                // Loop through array
                for (let i = 0; i < object[key].length; i++) {
                    await findKeyValue1(object[key][i]);
                }
            } else {
                // Call function recursively for 'object'
                await findKeyValue1(object[key]);
            }
        } else {
            console.log(object[key]);
            return object[key];
        }
    }
}

// get key from object based on value
// await findKeyValue1(sampleJson);

// await findKeyValue1(sampleJson, "name");
// await findKeyValue1(sampleJson, "status");
// await findKeyValue1(sampleJson, "phone");
// await findKeyValue1(sampleJson, "mobile");
// await findKeyValue1(sampleJson, "call");
// await findKeyValue1(sampleJson, "address");
// await findKeyValue1(sampleJson, "pin");
// await findKeyValue1(sampleJson, "home");

// do the same when it is nested

// store json key-value in map

// -----------------------------------

// get array

// get key value from array

// get value from array based on key

// get key from array based on value

// do the same when it is nested

// -----------------------------------

// verify the schema

module.exports = { findKeyValue, findKeyValue1 };
