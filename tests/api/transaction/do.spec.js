const { test, request } = require("@playwright/test");
const FormData = require("form-data");
const axios = require("axios");
const fs = require("fs");
const path = require("path");
const { readFile } = require("../../../src/utils/fileUtils");

async function getFileName(fromDun, toDun, messsage, version, timestamp, ext) {
    return `${fromDun}_${toDun}_${messsage}_${version}_${timestamp}.${ext}`;
}

test.only("asas", async () => {
    // Define your variables
    const fromDun = "422377309POL";
    const toDun = "INTEGRATEDE2DX-TDH";
    const messsage = "850";
    const version = "4010";
    const timestamp = "123456";
    const ext = "txt";

    const filePath = path.join(process.cwd() + "/testdata/e2net/messageFiles/wildcard.txt");
    console.log("File path : ", filePath);
    // const fileContent = await readFile(filePath);
    const fileContent = fs.createReadStream(filePath);

    // console.log("File Content : ", fileContent);

    const fileName = await getFileName(fromDun, toDun, messsage, version, timestamp, ext);

    console.log("File Name : ", fileName);

    // form.append('file', filePath, {
    //     filename: fileName,
    //     contentType: 'text/plain'
    // });

    const imageForm = new FormData();
    // imageForm.append('Content-Type', 'text/plain');
    imageForm.append("name", fileContent, {
        filename: fileName,
        contentType: "text/plain"
    });

    // const response = await axios.post('https://the-internet.herokuapp.com/upload', imageForm, {
    //     headers: {
    //         'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    //         'Content-Type': `multipart/form-data`,
    //         'Host':'the-internet.herokuapp.com',
    //         'Referer': 'https://the-internet.herokuapp.com/upload',
    //         'Origin': 'https://the-internet.herokuapp.com'
    //     }
    // }).catch((err) => {
    //     console.log(err.message);
    //     console.log('[feishu] failed to upload image');
    // });

    const response = await axios
        .post("https://the-internet.herokuapp.com/upload", {
            headers: {
                Accept: "*/*",
                "Content-Type": `multipart/form-data`,
                Host: "the-internet.herokuapp.com",
                Referer: "https://the-internet.herokuapp.com/upload",
                Origin: "https://the-internet.herokuapp.com"
            },
            formData: {
                file: fs.createReadStream(filePath),
                // filetype: 'zip',
                filename: "samplefilename.txt"
            }
        })
        .catch((err) => {
            console.log(err.message);
            console.log("[feishu] failed to upload image");
        });

    console.log(response);
});

const getFormDataForFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("Content-Type", file.type);
    formData.append("Content-Disposition", "form-data");
    formData.append("fileName", file.name);
    return formData;
};

test("abc", async () => {
    const file = path.join(process.cwd() + "/testdata/e2net/messageFiles/wildcard.txt");

    const reader = new FileReader();
    reader.readAsDataURL(file);
    const formData = await getFormDataForFile(file);

    const headers = {
        Accept: "*/*",
        // 'iv-user': 'dev1108',
        // 'Accept-Charset': 'UTF-8',
        // 'charset': 'UTF-8',
        // 'Accept-Encoding': '*',
        // 'Cookie': 'acceptAllCookies=true',
        // 'Content-Type': formHeaders['content-type']; // Include the content-type header from FormData
        "Content-Type": `multipart/form-data`,
        Host: "the-internet.herokuapp.com"
        // 'Cookie': 'optimizelySegments=%7B%7D; optimizelyEndUserId=oeu1726642058964r0.42851178931464595; optimizelyBuckets=%7B%7D; rack.session=BAh7CUkiD3Nlc3Npb25faWQGOgZFVEkiRWZkODZjOWFiZmY0YTU5YmRmZWNk%0AMWFkOTVmZGRjYTY2ODk1ZGUyMjYwZjRjYzQ5MDM1MDAwMDU0NjQxOTY0NWEG%0AOwBGSSIJY3NyZgY7AEZJIiU4YWVjZDNhNTBhYmVhZjI5MDg5NjYzNGY0YTYx%0AZTdiZQY7AEZJIg10cmFja2luZwY7AEZ7B0kiFEhUVFBfVVNFUl9BR0VOVAY7%0AAFRJIi04ZDY2ZmRlYjczMmQwM2ZkODExYWYxZDAyYzY2ZGMyMGQyMTMzZjZh%0ABjsARkkiGUhUVFBfQUNDRVBUX0xBTkdVQUdFBjsAVEkiLTY4MGJjMTA0NjJh%0ANzM0NWRmYThhNDg4YjMwZWI2YzE1MDI1ZTY3M2MGOwBGSSIKZmxhc2gGOwBG%0AewA%3D%0A--9a1fe0ca443310de62546fec450e359e8b15cb3f'
        // 'Content-Length': '550',
        // ...formHeaders
    };

    const requestContext = await request.newContext();

    // Send the request
    const response = await requestContext.post("https://the-internet.herokuapp.com/upload", {
        // const response = await requestContext.post('http://dev1108.dev.e2open.com:11080/e2net/console/service/api/private/connectionFiles/35474/upload', {
        headers: headers,
        data: formData
    });

    // Log the response
    console.log("Response:", response);
    console.log("Response:", await response.json());
});

test.skip("DO Test", async () => {
    // Define your variables
    const fromDun = "422377309POL";
    const toDun = "INTEGRATEDE2DX-TDH";
    const messsage = "850";
    const version = "4010";
    const timestamp = "123456";
    const ext = "txt";

    // Create a FormData instance
    const form = new FormData();

    // Append the file to the FormData instance with text/plain MIME type
    const filePath = path.join(process.cwd() + "/testdata/e2net/messageFiles/wildcard.txt");
    console.log("File path : ", filePath);
    // const fileContent = await readFile(filePath);
    const fileContent = fs.createReadStream(filePath);

    // console.log("File Content : ", fileContent);

    const fileName = await getFileName(fromDun, toDun, messsage, version, timestamp, ext);

    console.log("File Name : ", fileName);

    // form.append('file', filePath, {
    //     filename: fileName,
    //     contentType: 'text/plain'
    // });

    form.append("filename", fileName);
    form.append("Content-Type", "text/plain");
    form.append("file", fs.createReadStream("/C:/Users/spaliwal/OneDrive - E2open, LLC/Desktop/E2NET Release/DSSMITHPOLANDTEST_INTEGRATEDE2DX-TDH_850_4030_1669618056.txt"));
    form.append("Content-Disposition", "form-data");
    // form.append("Content-Type", "file");

    // console.log("Form Data Array : ", form);

    // Get the headers from the FormData instance
    const formHeaders = form.getHeaders();

    // Set headers
    const headers = {
        Accept: "*/*",
        "iv-user": "dev1108",
        // 'Accept-Charset': 'UTF-8',
        // 'charset': 'UTF-8',
        // 'Accept-Encoding': '*',
        // 'Cookie': 'acceptAllCookies=true',
        // 'Content-Type': formHeaders['content-type']; // Include the content-type header from FormData
        "Content-Type": `multipart/form-data`,
        "Content-Length": "550"
        // ...formHeaders
    };

    const requestContext = await request.newContext();

    // Send the request
    const response = await requestContext.post("http://dev1108.dev.e2open.com:11080/e2net/console/service/api/private/connectionFiles/35474/upload", {
        headers: {
            "iv-user": "dev1108"
        },
        // multipart: form,
        // body: form
        // multipart:{
        //     ...{

        //         filename:fileName,
        //         name:fs.createReadStream("C:/sourceVSCode/playwright-e2net/testdata/e2net/messageFiles/wildcard.txt"),
        //         file:fs.createReadStream("C:/sourceVSCode/playwright-e2net/testdata/e2net/messageFiles/wildcard.txt")

        //     },
        //     file: {
        //         name:fileName,
        //         mimeType:"application/octet-stream",
        //         // buffer: jsonFile,
        //     },
        // }
        formData: JSON.stringify({
            filename: "DSSMITHPOLANDTEST_INTEGRATEDE2DX-TDH_850_4030_1669618056.txt",
            "Content-Type": "text/plain",
            file: {
                value: fs.createReadStream(filePath),
                options: {
                    filename: filePath,
                    contentType: null
                }
            }
        })
    });

    // Log the response
    console.log("Response:", response);
    console.log("Response:", await response.json());
});

test("DO TTest", async () => {
    // Define your variables
    const fromDun = "422377309POL";
    const toDun = "INTEGRATEDE2DX-TDH";
    const messsage = "850";
    const version = "4010";
    const timestamp = "123456";
    const ext = "txt";

    // Create a FormData instance
    const form = new FormData();

    // Append the file to the FormData instance with text/plain MIME type
    const filePath = path.join(process.cwd() + "/testdata/e2net/messageFiles/wildcard.txt");
    console.log("File path : ", filePath);
    // const fileContent = await readFile(filePath);
    const fileContent = fs.createReadStream(filePath);

    // console.log("File Content : ", fileContent);

    const fileName = await getFileName(fromDun, toDun, messsage, version, timestamp, ext);

    console.log("File Name : ", fileName);

    // form.append('file', filePath, {
    //     filename: fileName,
    //     contentType: 'text/plain'
    // });
    form.append("name", "filename");
    form.append("filename", fileName);
    form.append("Content-Type", "text/plain");
    form.append("file", fs.createReadStream("/C:/Users/spaliwal/OneDrive - E2open, LLC/Desktop/E2NET Release/DSSMITHPOLANDTEST_INTEGRATEDE2DX-TDH_850_4030_1669618056.txt"));
    form.append("Content-Disposition", "form-data");
    // form.append("Content-Type", "file");

    // console.log("Form Data Array : ", form);

    // Get the headers from the FormData instance
    const formHeaders = form.getHeaders();

    // Set headers
    const headers = {
        Accept: "*/*",
        // 'iv-user': 'dev1108',
        // 'Accept-Charset': 'UTF-8',
        // 'charset': 'UTF-8',
        // 'Accept-Encoding': '*',
        // 'Cookie': 'acceptAllCookies=true',
        // 'Content-Type': formHeaders['content-type']; // Include the content-type header from FormData
        "Content-Type": `multipart/form-data`,
        Host: "the-internet.herokuapp.com",
        Cookie: "optimizelySegments=%7B%7D; optimizelyEndUserId=oeu1726642058964r0.42851178931464595; optimizelyBuckets=%7B%7D; rack.session=BAh7CUkiD3Nlc3Npb25faWQGOgZFVEkiRWZkODZjOWFiZmY0YTU5YmRmZWNk%0AMWFkOTVmZGRjYTY2ODk1ZGUyMjYwZjRjYzQ5MDM1MDAwMDU0NjQxOTY0NWEG%0AOwBGSSIJY3NyZgY7AEZJIiU4YWVjZDNhNTBhYmVhZjI5MDg5NjYzNGY0YTYx%0AZTdiZQY7AEZJIg10cmFja2luZwY7AEZ7B0kiFEhUVFBfVVNFUl9BR0VOVAY7%0AAFRJIi04ZDY2ZmRlYjczMmQwM2ZkODExYWYxZDAyYzY2ZGMyMGQyMTMzZjZh%0ABjsARkkiGUhUVFBfQUNDRVBUX0xBTkdVQUdFBjsAVEkiLTY4MGJjMTA0NjJh%0ANzM0NWRmYThhNDg4YjMwZWI2YzE1MDI1ZTY3M2MGOwBGSSIKZmxhc2gGOwBG%0AewA%3D%0A--9a1fe0ca443310de62546fec450e359e8b15cb3f"
        // 'Content-Length': '550',
        // ...formHeaders
    };

    const requestContext = await request.newContext();

    // Send the request
    const response = await requestContext.post("https://the-internet.herokuapp.com/upload", {
        // const response = await requestContext.post('http://dev1108.dev.e2open.com:11080/e2net/console/service/api/private/connectionFiles/35474/upload', {
        headers: headers,
        multipart: {
            ...{
                filename: fileName,
                // name:fs.createReadStream("C:/sourceVSCode/playwright-e2net/testdata/e2net/messageFiles/wildcard.txt"),
                name: "file",
                file: fs.createReadStream("C:/sourceVSCode/playwright-e2net/testdata/e2net/messageFiles/wildcard.txt")
            },
            file: {
                name: fileName,
                mimeType: "application/octet-stream"
                // buffer: jsonFile,
            }
        }
        // formData: JSON.stringify({
        //     'filename': 'DSSMITHPOLANDTEST_INTEGRATEDE2DX-TDH_850_4030_1669618056.txt',
        //     'Content-Type': 'text/plain',
        //     'file': {
        //       'value': fs.createReadStream(filePath),
        //       'options': {
        //         'filename': filePath,
        //         'contentType': null
        //       }
        //     }
        //   })
        // form:{

        //     filename:fileName,
        //     name:fileName,
        //     file:fs.createReadStream("C:/sourceVSCode/playwright-e2net/testdata/e2net/messageFiles/wildcard.txt")

        // }
        // form: {
        //     'filename' : fileName,
        //     "Content-Type":  "text/plain",
        //     'file': fs.createReadStream("C:/sourceVSCode/playwright-e2net/testdata/e2net/messageFiles/wildcard.txt")
        // }
    });

    // Log the response
    console.log("Response:", response);
    console.log("Response:", await response.json());
});
