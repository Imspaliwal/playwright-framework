/*
  Header builder 
  This file contains all the Header builder for the application.
  It makes it easy to manage all the Headers in one place with the help of environment variables.
  It also makes it easy to change the Headers in the future. For example, if API version changes, we can change it in one place.
*/

async function createHeaders() {
    const requestHeaders = {
        "Content-Type": "application/json",
        Accept: "application/json",
        "iv-user": "dev1108",
        "Accept-Charset": "UTF-8",
        charset: "UTF-8",
        "Accept-Encoding": "*",
        Cookie: "acceptAllCookies=true"
    };
    return requestHeaders;
}

async function createHeadersMultipartFormData() {
    const requestHeaders = {
        ContentType: "multipart/form-data",
        Accept: "*/*",
        "iv-user": "dev1108"
    };
    return requestHeaders;
}

async function createHeadersMultipartFormData1(form) {
    const requestHeaders = {
        "Content-Type": "multipart/form-data",
        "content-length": "43506",
        Accept: "application/json, text/plain, */*",
        "iv-user": "dev1108",
        "Accept-Charset": "UTF-8",
        charset: "UTF-8",
        "Accept-Encoding": "*",
        Cookie: "acceptAllCookies=true"
        // ...form.getHeaders()
    };
    return requestHeaders;
}

async function createHeadersMultipartFormData2(connectionId, form) {
    const requestHeaders = {
        // 'Content-Type': 'multipart/form-data',
        "content-length": "43506",
        Accept: "application/json, text/plain, */*",
        // 'iv-user': connectionId,
        "Accept-Charset": "UTF-8",
        charset: "UTF-8",
        "Accept-Encoding": "*",
        Cookie: "acceptAllCookies=true",
        // 'fromduns': fromduns,
        // 'toduns': toduns,
        // 'datatype': datatype,
        // 'version': version,
        // 'multipart': multipartValue,
        ...form.getHeaders()
    };
    return requestHeaders;
}

const buildHeaders = {
    createHeaders: createHeaders()
    // companySearchEndPointUrl: companySearchEndPointUrl(),
};

module.exports = {
    buildHeaders,
    createHeadersMultipartFormData,
    createHeadersMultipartFormData1,
    createHeadersMultipartFormData2
};
