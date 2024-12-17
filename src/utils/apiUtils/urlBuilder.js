/*
  Url builder 
  This file contains all the url builder for the application.
  It makes it easy to manage all the urls in one place with the help of environment variables.
  It also makes it easy to change the urls in the future. For example, if API version changes, we can change it in one place.
*/

const stackId = "dev1108";
const port = "11080";
const baseUrl = "http://" + stackId + ".dev.e2open.com:" + port;
const endpointApiPath = `/e2net/console/service/api/private`;
const tranEndpointApiPath = `${stackId}_na/e2na/protocol/`;

// function getHealthCheck() {
//     return baseUrl + endpointApiPath + '/health';
// }

async function companyEndPointUrl() {
    return baseUrl + endpointApiPath + "/companies";
}

async function companySearchEndPointUrl() {
    return baseUrl + endpointApiPath + "/companies/search?page=1&rowsPerPage=10000";
}

async function connectionEndPointUrl(id, protocol) {
    return baseUrl + endpointApiPath + "/connection/protocol/" + id + "?protocol=" + protocol;
}

async function connectionSearchEndPointUrl() {
    return baseUrl + endpointApiPath + "/connections?page=1&rowsPerPage=10000";
}

async function passthroughEndPointUrl(tenantOrgId, tenantConnectionId, partnerOrgId, partnerConnectionId) {
    return baseUrl + endpointApiPath + "/connections/" + tenantConnectionId + "/partners/onboardWildCardRoute/" + partnerConnectionId + "?partnerOrgId=" + partnerOrgId + "&orgId=" + tenantOrgId;
}

async function directoryTransactionEndPointUrl(connectionId) {
    return baseUrl + endpointApiPath + "/connectionFiles/" + connectionId + "/upload";
}

async function doransactionEndPointUrl(connectionType, connectionId) {
    return baseUrl + tranEndpointApiPath + connectionType + "/s1/" + connectionId;
}

const buildUrl = {
    // getHealthCheck: getHealthCheck,
    companyEndPointUrl: companyEndPointUrl(),
    companySearchEndPointUrl: companySearchEndPointUrl(),
    // connectionEndPointUrl: connectionEndPointUrl(protocol),
    connectionSearchEndPointUrl: connectionSearchEndPointUrl()
};

module.exports = {
    buildUrl,
    connectionEndPointUrl,
    passthroughEndPointUrl,
    directoryTransactionEndPointUrl,
    doransactionEndPointUrl
};
