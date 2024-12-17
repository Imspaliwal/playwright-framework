const { test, expect } = require("@playwright/test");
// const {APIUtils} = require('../../../src/utils/apiCommon/APIUtils');

let id;
const randomString = Math.random().toString(36).substring(2, 10);

//test case 1
test.only("should be able to create a company", async ({ request }) => {
    const response = await request.post("http://dev1108.dev.e2open.com:11080/e2net/console/service/api/private/companies", {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "iv-user": "dev1108",
            "Accept-Charset": "UTF-8",
            charset: "UTF-8",
            "Accept-Encoding": "*",
            Cookie: "acceptAllCookies=true"
        },
        data: {
            org: {
                companyTypeName: "Tenant",
                name: "CentOSSen123",
                companyId: "CentOSSen123",
                communityUniqueID: "CentOSSen123.com",
                description: "Partner for FIFO cent os test",
                supportEmail: "centossen-20241001203349001@qa.dev.e2open.com",
                payloadSearchEnabled: false,
                monitorUnrouteableTxns: false
            },
            auditRetentionDays: 30
        }
    });

    console.log(response.ok());
    // expect(response.ok()).toBeTruthy();

    console.log(response.status());
    // expect(response.status()).toBe(200);

    const responseBody = await response.json();
    console.log(responseBody);
    // expect(responseBody.booking).toHaveProperty("firstname", "Jim");
    // expect(responseBody.booking).toHaveProperty("lastname", "Brown");
    // expect(responseBody.booking).toHaveProperty("totalprice", 111);
    // expect(responseBody.booking).toHaveProperty("depositpaid", true);
});

test("should be able to get a company", async ({ request }) => {
    const response = await request.post("http://dev1108.dev.e2open.com:11080/e2net/console/service/api/private/companies/search?page=1&rowsPerPage=10000", {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "iv-user": "dev1108",
            "Accept-Charset": "UTF-8",
            charset: "UTF-8",
            "Accept-Encoding": "*",
            Origin: "https://e2productqa.dev.e2open.com",
            Referer: "https://e2productqa.dev.e2open.com/dev1108_ui/e2net-ui/companies",
            Cookie: "acceptAllCookies=true"
            // 'Cookie' : 'dev.e2open.session.id=d42cc12d-8411-4ecf-8f3c-08e6b9154ff5'
        },
        data: { name: [{ key: "CentOSSen", value: "CentOSSen" }] }
    });

    console.log(response.ok());
    // expect(response.ok()).toBeTruthy();

    console.log(response.status());
    // expect(response.status()).toBe(200);

    const responseBody = await response.json();
    console.log(responseBody);
    // expect(responseBody.booking).toHaveProperty("firstname", "Jim");
    // expect(responseBody.booking).toHaveProperty("lastname", "Brown");
    // expect(responseBody.booking).toHaveProperty("totalprice", 111);
    // expect(responseBody.booking).toHaveProperty("depositpaid", true);
});

test("should be able to get the unique company", async ({ request }) => {
    const response = await request.post("http://dev1108.dev.e2open.com:11080/e2net/console/service/api/private/companies/search?page=1&rowsPerPage=10000", {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "iv-user": "dev1108",
            "Accept-Charset": "UTF-8",
            charset: "UTF-8",
            "Accept-Encoding": "*",
            Origin: "https://e2productqa.dev.e2open.com",
            Referer: "https://e2productqa.dev.e2open.com/dev1108_ui/e2net-ui/companies",
            Cookie: "acceptAllCookies=true"
            // 'Cookie' : 'dev.e2open.session.id=d42cc12d-8411-4ecf-8f3c-08e6b9154ff5'
        },
        data: {
            name: [
                {
                    value: "CentOSSen1",
                    key: "CentOSSen1"
                }
            ],
            id: [],
            type: [],
            support: [],
            hierarchy: [],
            community: [],
            alphaSelector: {
                value: "",
                key: ""
            }
        }
    });

    console.log(response.ok());
    // expect(response.ok()).toBeTruthy();

    console.log(response.status());
    // expect(response.status()).toBe(200);

    const responseBody = await response.json();
    console.log(responseBody.data.rows[0]);
    console.log(responseBody.data.rows[0].name);
    console.log(responseBody.data.rows[0].id);
    id = responseBody.data.rows[0].id;
    // expect(responseBody.booking).toHaveProperty("firstname", "Jim");
    // expect(responseBody.booking).toHaveProperty("lastname", "Brown");
    // expect(responseBody.booking).toHaveProperty("totalprice", 111);
    // expect(responseBody.booking).toHaveProperty("depositpaid", true);
});

test("should be able to create connection", async ({ request }) => {
    const response = await request.post("http://dev1108.dev.e2open.com:11080/e2net/console/service/api/private/connection/protocol/23248?protocol=b2bc", {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "iv-user": "dev1108",
            "Accept-Charset": "UTF-8",
            charset: "UTF-8",
            "Accept-Encoding": "*"
            // 'Origin': 'https://e2productqa.dev.e2open.com',
            // // 'Referer': 'https://e2productqa.dev.e2open.com/dev1108_ui/e2net-ui/companies',
            // 'Cookie': 'acceptAllCookies=true'
            // // 'Cookie' : 'dev.e2open.session.id=d42cc12d-8411-4ecf-8f3c-08e6b9154ff5'
        },
        data: {
            id: "23248",
            profileEntity: {
                lockVersion: 0.0,
                createTime: 1727804015075,
                active: true,
                shared: false,
                description: "Onboarded profile for CentOSSen1",
                enabled: true,
                organization: {
                    id: 23248.0,
                    lockVersion: 0.0,
                    baseUUID: "36bb59a4-1943-45ca-abcc-545cccd3786c",
                    createUserId: 2083.0,
                    updateUserId: 2083.0,
                    createTime: 1727804015075,
                    updateTime: 1727804015075,
                    name: "CentOSSen1",
                    referenceID: "bf6d9242-f9b4-48aa-85cf-27336dbbe29b",
                    communityUniqueID: "CentOSSen1.com",
                    supportEmail: "centossen1-20241001230326001@qa.dev.e2open.com",
                    description: "Partner for FIFO cent os test",
                    companyTypeName: "Tenant",
                    parentCompanyName: "null",
                    url: "null",
                    sic: "null",
                    language: "null",
                    companyId: "CentOSSen1",
                    statusNotificationsEnabled: false,
                    payloadSearchEnabled: true,
                    timeZone: "null",
                    javaclass: "com.e2open.e2na.ejb.domain.CompanyEntity",
                    versionedId: "23248::0"
                },
                onboarded: false,
                partnerId: "CentOSSen1",
                partnerIdType: "01",
                promotionState: 5.0,
                throttleMax: -1.0,
                messageThrottleMax: -1.0,
                errorContainmentMax: 50.0,
                defaultPriorityProcessing: "2",
                queueTimeSoftLimit: 10.0,
                queueTimeHardLimit: 100.0,
                backlogSoftLimit: 1000.0,
                backlogHardLimit: 2000.0,
                profileName: "CentOSSen1_b2bc" + randomString,
                protocolName: "b2bc",
                partnerName: "CentOSSen1" + randomString,
                ownerCompanyUUID: "bf6d9242-f9b4-48aa-85cf-27336dbbe29b",
                edited: false,
                promotionStateStr: "approved",
                promotionStateEnum: "APPROVED",
                approved: true,
                modifiedTime: -1.0,
                b2BProtocol: "b2bc",
                name: "CentOSSen1_b2bc" + randomString,
                displayName: "CentOSSen1/CentOSSen1 b2bc Connection " + randomString,
                versionedId: "null::0",
                protocol: {
                    id: 2328.0,
                    lockVersion: 1.0,
                    baseUUID: "30bcd206-ce19-4322-ba21-c4ca1da354c9",
                    createTime: 1541722325000,
                    updateTime: 1540522200000,
                    name: "Default",
                    description: "b2bc protocol",
                    onboardable: true,
                    internal: false,
                    certificateRequired: true,
                    protocol: "b2bc",
                    protocolProperties: [
                        {
                            id: 2329.0,
                            lockVersion: 0.0,
                            baseUUID: "e1a2e400-c88d-45a0-adee-f18e016ae47a",
                            updateUserId: 0.0,
                            createTime: 1541722325000,
                            propertyType: "PROTOCOL",
                            encodeType: "JSON",
                            extendedProperties: {
                                propertyDefinitions: [
                                    {
                                        name: "TransportRetryInterval",
                                        displayName: "protocol.transportretrygroup.transportretryinterval.name",
                                        type: "string",
                                        displayDescription: "protocol.transportretrygroup.transportretryinterval.doc",
                                        group: "TransportRetryGroup",
                                        displayGroup: "protocol.transportretrygroup.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: "00:05:00.00"
                                    },
                                    {
                                        name: "TransportRetryLimit",
                                        displayName: "protocol.transportretrygroup.transportretrylimit.name",
                                        type: "string",
                                        displayDescription: "The number of times to retry due to not receiving a HTTP 200 response from trading partner web server.",
                                        group: "TransportRetryGroup",
                                        displayGroup: "protocol.transportretrygroup.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: "2"
                                    },
                                    {
                                        name: "MessageRetryInterval",
                                        displayName: "protocol.messageretrygroup.messageretryinterval.name",
                                        type: "string",
                                        displayDescription: "protocol.messageretrygroup.messageretryinterval.doc",
                                        group: "MessageRetryGroup",
                                        displayGroup: "protocol.messageretrygroup.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: "02:00:00.00"
                                    },
                                    {
                                        name: "MessageRetryLimit",
                                        displayName: "protocol.messageretrygroup.messageretrylimit.name",
                                        type: "string",
                                        displayDescription: "protocol.messageretrygroup.messageretrylimit.doc",
                                        group: "MessageRetryGroup",
                                        displayGroup: "protocol.messageretrygroup.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: "3"
                                    },
                                    {
                                        name: "PartnerProfileDuns",
                                        displayName: "protocol.messageprocessinggroup.partnerprofileduns.name",
                                        type: "string",
                                        displayDescription: "protocol.messageprocessinggroup.partnerprofileduns.doc",
                                        group: "MessageProcessingGroup",
                                        displayGroup: "protocol.messageprocessinggroup.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: []
                                    },
                                    {
                                        name: "GatewayProfileDuns",
                                        displayName: "protocol.messageprocessinggroup.gatewayprofileduns.name",
                                        type: "string",
                                        displayDescription: "protocol.messageprocessinggroup.gatewayprofileduns.doc",
                                        group: "MessageProcessingGroup",
                                        displayGroup: "protocol.messageprocessinggroup.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: []
                                    },
                                    {
                                        name: "Timezone",
                                        displayName: "protocol.messageprocessinggroup.timezone.name",
                                        type: "string",
                                        displayDescription: "protocol.messageprocessinggroup.timezone.doc",
                                        group: "MessageProcessingGroup",
                                        displayGroup: "protocol.messageprocessinggroup.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: []
                                    },
                                    {
                                        name: "Charset",
                                        displayName: "protocol.messageprocessinggroup.charset.name",
                                        type: "string",
                                        displayDescription: "protocol.messageprocessinggroup.charset.doc",
                                        group: "MessageProcessingGroup",
                                        displayGroup: "protocol.messageprocessinggroup.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: []
                                    },
                                    {
                                        name: "MessageProcessing",
                                        displayName: "protocol.messageprocessinggroup.messageprocessing.name",
                                        type: "enum",
                                        displayDescription: "protocol.messageprocessinggroup.messageprocessing.doc",
                                        group: "MessageProcessingGroup",
                                        displayGroup: "protocol.messageprocessinggroup.name",
                                        displayEnabled: false,
                                        readOnly: false,
                                        enumeration: [
                                            {
                                                displayValue: "SyncInboundSubmission",
                                                value: "SyncInboundSubmission"
                                            },
                                            {
                                                displayValue: "SyncOutboundSubmission",
                                                value: "SyncOutboundSubmission"
                                            },
                                            {
                                                displayValue: "SynchSubmission",
                                                value: "SynchSubmission"
                                            },
                                            {
                                                displayValue: "SynchProcessing",
                                                value: "SynchProcessing"
                                            },
                                            {
                                                displayValue: "AsyncProcessing",
                                                value: "AsyncProcessing"
                                            }
                                        ],
                                        attributes: [],
                                        default: "AsyncProcessing"
                                    },
                                    {
                                        name: "MessageParserClass",
                                        displayName: "protocol.messageprocessinggroup.messageparserclass.name",
                                        type: "string",
                                        displayDescription: "protocol.messageprocessinggroup.messageparserclass.doc",
                                        group: "MessageProcessingGroup",
                                        displayGroup: "protocol.messageprocessinggroup.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: []
                                    },
                                    {
                                        name: "VirusScanEnabled",
                                        displayName: "protocol.messageprocessinggroup.virusscanenabled.name",
                                        type: "boolean",
                                        displayDescription: "protocol.messageprocessinggroup.virusscanenabled.doc",
                                        group: "MessageProcessingGroup",
                                        displayGroup: "protocol.messageprocessinggroup.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: "false"
                                    },
                                    {
                                        name: "MaximumTransformFileSize",
                                        displayName: "protocol.messageprocessinggroup.transform.file.size",
                                        type: "nonnegativeinteger",
                                        displayDescription: "protocol.messageprocessinggroup.transform.file.size.desc",
                                        group: "MessageProcessingGroup",
                                        displayGroup: "protocol.messageprocessinggroup.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        maxLimit: "20480",
                                        default: "20480"
                                    },
                                    {
                                        name: "TimeToPerformInterval",
                                        displayName: "protocol.rnif11.timetoperforminterval.name",
                                        type: "string",
                                        displayDescription: "protocol.rnif11.timetoperforminterval.doc",
                                        group: "TimeToPerformGroup",
                                        displayGroup: "TimeToPerformGroup",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: "24:00:00.00"
                                    },
                                    {
                                        name: "FailureNotificationRequired",
                                        displayName: "protocol.rnif11.failurenotificationrequired.name",
                                        type: "boolean",
                                        displayDescription: "protocol.rnif11.failurenotificationrequired.doc",
                                        group: "TimeToPerformGroup",
                                        displayGroup: "TimeToPerformGroup",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: "false"
                                    },
                                    {
                                        name: "IncompleteTransactionAlertIntervals",
                                        displayName: "protocol.incompletetransactionalertgroup.incompletetransactionalertintervals.name",
                                        type: "string",
                                        displayDescription: "protocol.incompletetransactionalertgroup.incompletetransactionalertintervals.doc",
                                        group: "IncompleteTransactionAlertGroup",
                                        displayGroup: "protocol.incompletetransactionalertgroup.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [
                                            {
                                                value: "Any",
                                                displayValue: "e2na.any"
                                            }
                                        ]
                                    },
                                    {
                                        name: "IncompleteTransactionTimeout",
                                        displayName: "protocol.incompletetransactionalertgroup.incompletetransactiontimeout.name",
                                        type: "string",
                                        displayDescription: "protocol.incompletetransactionalertgroup.incompletetransactiontimeout.doc",
                                        group: "IncompleteTransactionAlertGroup",
                                        displayGroup: "protocol.incompletetransactionalertgroup.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [
                                            {
                                                value: "Any",
                                                displayValue: "e2na.any"
                                            }
                                        ]
                                    },
                                    {
                                        name: "FifoEnabled",
                                        displayName: "protocol.fifotransactionreceivergroup.fifoenabled.name",
                                        type: "boolean",
                                        displayDescription: "protocol.fifotransactionreceivergroup.fifoenabled.doc",
                                        group: "FIFOTransactionReceiverGroup",
                                        displayGroup: "protocol.fifotransactionreceivergroup.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: "false"
                                    },
                                    {
                                        name: "FifoQueueName",
                                        displayName: "protocol.fifotransactionreceivergroup.fifoqueuename.name",
                                        type: "string",
                                        displayDescription: "protocol.fifotransactionreceivergroup.fifoqueuename.doc",
                                        group: "FIFOTransactionReceiverGroup",
                                        displayGroup: "protocol.fifotransactionreceivergroup.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: "${fromDuns}"
                                    },
                                    {
                                        name: "Id",
                                        displayName: "Id",
                                        type: "string",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: true,
                                        readOnly: true,
                                        enumeration: [],
                                        attributes: [],
                                        default: "b2bc"
                                    },
                                    {
                                        name: "ProtocolCode",
                                        displayName: "ProtocolCode",
                                        type: "string",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: false,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: "B2BC"
                                    },
                                    {
                                        name: "ProtocolVersion",
                                        displayName: "ProtocolVersion",
                                        type: "string",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: false,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: "01.00"
                                    },
                                    {
                                        name: "ChunkSize",
                                        displayName: "protocol.b2bc.chunksize.name",
                                        type: "string",
                                        displayDescription: "protocol.b2bc.chunksize.doc",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: "1048576"
                                    },
                                    {
                                        name: "CompressionSize",
                                        displayName: "protocol.b2bc.compressionsize.name",
                                        type: "string",
                                        displayDescription: "protocol.b2bc.compressionsize.doc",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: "262144"
                                    },
                                    {
                                        name: "RetryCount",
                                        displayName: "protocol.b2bc.retrycount.name",
                                        type: "string",
                                        displayDescription: "The number of times to retry if an upload/download request from the B2B Client fails.",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: "1440"
                                    },
                                    {
                                        name: "RetryInterval",
                                        displayName: "protocol.b2bc.retryinterval.name",
                                        type: "string",
                                        displayDescription: "protocol.b2bc.retryinterval.doc",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: "10000"
                                    },
                                    {
                                        name: "SocketReadTimeout",
                                        displayName: "protocol.b2bc.socketreadtimeout.name",
                                        type: "string",
                                        displayDescription: "protocol.b2bc.socketreadtimeout.doc",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: "180000"
                                    },
                                    {
                                        name: "MaxThread",
                                        displayName: "protocol.b2bc.maxthread.name",
                                        type: "string",
                                        displayDescription: "protocol.b2bc.maxthread.doc",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: "25"
                                    },
                                    {
                                        name: "MonitoredClient",
                                        displayName: "protocol.b2bc.monitoredclient.name",
                                        type: "boolean",
                                        displayDescription: "protocol.b2bc.monitoredclient.doc",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: "false"
                                    },
                                    {
                                        name: "HeartbeatTimeSoftLimit",
                                        displayName: "protocol.b2bc.heartbeattimesoftlimit.name",
                                        type: "string",
                                        displayDescription: "protocol.b2bc.heartbeattimesoftlimit.doc",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: "15"
                                    },
                                    {
                                        name: "HeartbeatTimeHardLimit",
                                        displayName: "protocol.b2bc.heartbeattimehardlimit.name",
                                        type: "string",
                                        displayDescription: "protocol.b2bc.heartbeattimehardlimit.doc",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: "30"
                                    },
                                    {
                                        name: "HeartbeatAlertNoRepeatTime",
                                        displayName: "protocol.b2bc.heartbeatalertnorepeattime.name",
                                        type: "string",
                                        displayDescription: "protocol.b2bc.heartbeatalertnorepeattime.doc",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: "240"
                                    },
                                    {
                                        name: "RemoteManagementTimeSoftLimit",
                                        displayName: "protocol.b2bc.remotemanagementtimesoftlimit.name",
                                        type: "string",
                                        displayDescription: "protocol.b2bc.remotemanagementtimesoftlimit.doc",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: "15"
                                    },
                                    {
                                        name: "RemoteManagementTimeHardLimit",
                                        displayName: "protocol.b2bc.remotemanagementtimehardlimit.name",
                                        type: "string",
                                        displayDescription: "protocol.b2bc.remotemanagementtimehardlimit.doc",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: "30"
                                    },
                                    {
                                        name: "RemoteManagementAlertNoRepeatTime",
                                        displayName: "protocol.b2bc.remotemanagementalertnorepeattime.name",
                                        type: "string",
                                        displayDescription: "protocol.b2bc.remotemanagementalertnorepeattime.doc",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: "240"
                                    },
                                    {
                                        name: "MonitorInterval",
                                        type: "string",
                                        displayDescription: "The monitor interval (milliseconds)",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: false,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: "180000"
                                    },
                                    {
                                        name: "ErrorDirectory",
                                        displayName: "protocol.b2bc.errordirectory.name",
                                        type: "string",
                                        displayDescription: "protocol.b2bc.errordirectory.doc",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: "../error"
                                    },
                                    {
                                        name: "UseDate",
                                        displayName: "protocol.b2bc.usedate.name",
                                        type: "boolean",
                                        displayDescription: "protocol.b2bc.usedate.doc",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: "false"
                                    },
                                    {
                                        name: "DateFormat",
                                        displayName: "protocol.b2bc.dateformat.name",
                                        type: "string",
                                        displayDescription: "protocol.b2bc.dateformat.doc",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: "yyyyMMddHHmmssSSS"
                                    },
                                    {
                                        name: "InboxFormat",
                                        displayName: "protocol.b2bc.inboxformat.name",
                                        type: "string",
                                        displayDescription: "protocol.b2bc.inboxformat.doc",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: "fromDuns_toDuns_dataType_version_timestamp"
                                    },
                                    {
                                        name: "OutboxFormat",
                                        displayName: "protocol.b2bc.outboxformat.name",
                                        type: "string",
                                        displayDescription: "protocol.b2bc.outboxformat.doc",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: "fromDuns_toDuns_dataType_version_timestamp"
                                    },
                                    {
                                        name: "FilenameSeparator",
                                        displayName: "protocol.b2bc.filenameseparator.name",
                                        type: "string",
                                        displayDescription: "protocol.b2bc.filenameseparator.doc",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: "_"
                                    },
                                    {
                                        name: "InboxFilenameFilter",
                                        type: "string",
                                        displayDescription: "Obsolete. This is NOT used in B2BC protocol. Will be removed in the future.",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: false,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: []
                                    },
                                    {
                                        name: "OutboxFilenameFilter",
                                        displayName: "protocol.b2bc.outboxfilenamefilter.name",
                                        type: "string",
                                        displayDescription: "Simple Regular Expression to filter filenames to process in the outbox.  E.g. ^([^_]+)_([^_]+)_([^_]+)_([^_]+)_([^.]+)(\\.txt|\\.xls|\\.xlsx)$",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: []
                                    },
                                    {
                                        name: "InboxDirectory",
                                        displayName: "protocol.b2bc.inboxdirectory.name",
                                        type: "string",
                                        displayDescription: "protocol.b2bc.inboxdirectory.doc",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: "../inbox"
                                    },
                                    {
                                        name: "OutboxDirectory",
                                        displayName: "protocol.b2bc.outboxdirectory.name",
                                        type: "string",
                                        displayDescription: "protocol.b2bc.outboxdirectory.doc",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: "../outbox"
                                    },
                                    {
                                        name: "ArchiveDirectory",
                                        displayName: "protocol.b2bc.archivedirectory.name",
                                        type: "string",
                                        displayDescription: "protocol.b2bc.archivedirectory.doc",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: "../archive"
                                    },
                                    {
                                        name: "InboxStatusDirectory",
                                        type: "string",
                                        displayDescription: "The full path directory name where inbound status files are located for this connection.",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: false,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: []
                                    },
                                    {
                                        name: "OutboxStatusDirectory",
                                        type: "string",
                                        displayDescription: "The full path directory name where outbound status files are located for this connection.",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: false,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: []
                                    },
                                    {
                                        name: "FilenameExtension",
                                        type: "string",
                                        displayDescription: "The filename extension used at the end of files in the outbox and inbox.  The default is .txt",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: false,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: ".txt"
                                    },
                                    {
                                        name: "InboxFilenameExtension",
                                        displayName: "protocol.b2bc.inboxfilenameextension.name",
                                        type: "string",
                                        displayDescription: "protocol.b2bc.inboxfilenameextension.doc",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: "${fileExt:.txt}"
                                    },
                                    {
                                        name: "OutboxFilenameExtension",
                                        displayName: "protocol.b2bc.outboxfilenameextension.name",
                                        type: "string",
                                        displayDescription: "protocol.b2bc.outboxfilenameextension.doc",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: ".txt|.xls|.xlsx|.xml|.csv|.zip"
                                    },
                                    {
                                        name: "AckSuccessExtension",
                                        displayName: "protocol.b2bc.acksuccessextension.name",
                                        type: "string",
                                        displayDescription: "protocol.b2bc.acksuccessextension.doc",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: ".ack"
                                    },
                                    {
                                        name: "AckFailureExtension",
                                        displayName: "protocol.b2bc.ackfailureextension.name",
                                        type: "string",
                                        displayDescription: "protocol.b2bc.ackfailureextension.doc",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: ".err"
                                    },
                                    {
                                        name: "AckNackEnabled",
                                        displayName: "protocol.b2bc.acknackenabled.name",
                                        type: "boolean",
                                        displayDescription: "protocol.b2bc.acknackenabled.doc",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: "false"
                                    },
                                    {
                                        name: "KeepLogsFor",
                                        displayName: "protocol.b2bc.keeplogsfor.name",
                                        type: "string",
                                        displayDescription: "protocol.b2bc.keeplogsfor.doc",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: "7"
                                    },
                                    {
                                        name: "InProcessExtension",
                                        type: "string",
                                        displayDescription: "The filename extension used when a file is currently being processed. The default is .prc",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: false,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: ".prc"
                                    },
                                    {
                                        name: "ZipFileEncodingCheck",
                                        displayName: "protocol.b2bc.zipfileencodingcheck.name",
                                        type: "boolean",
                                        displayDescription: "protocol.b2bc.zipfileencodingcheck.doc",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: "true"
                                    },
                                    {
                                        name: "InboxFilterClass",
                                        type: "string",
                                        displayDescription: "RESERVED FOR E2OPEN USE ONLY",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: false,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: []
                                    },
                                    {
                                        name: "OutboxFilterClass",
                                        type: "string",
                                        displayDescription: "RESERVED FOR E2OPEN USE ONLY",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: false,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: []
                                    },
                                    {
                                        name: "InboxComparatorClass",
                                        type: "string",
                                        displayDescription: "RESERVED FOR E2OPEN USE ONLY",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: false,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: []
                                    },
                                    {
                                        name: "OutboxComparatorClass",
                                        type: "string",
                                        displayDescription: "RESERVED FOR E2OPEN USE ONLY",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: false,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: []
                                    },
                                    {
                                        name: "FileEncoding",
                                        displayName: "protocol.b2bc.fileencoding.name",
                                        type: "enum",
                                        displayDescription: "protocol.b2bc.fileencoding.doc",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [
                                            {
                                                displayValue: "Zip",
                                                value: "Zip"
                                            },
                                            {
                                                displayValue: "ZLIB/MIME",
                                                value: "ZLIB+MIME"
                                            },
                                            {
                                                displayValue: "MIME",
                                                value: "MIME"
                                            },
                                            {
                                                displayValue: "ConditionalZip",
                                                value: "ConditionalZip"
                                            },
                                            {
                                                displayValue: "GZIP/No Mime",
                                                value: "GZIP"
                                            },
                                            {
                                                displayValue: "ZLIB/No Mime",
                                                value: "ZLIB"
                                            },
                                            {
                                                displayValue: "None",
                                                value: "None"
                                            },
                                            {
                                                displayValue: "GZIP/MIME",
                                                value: "GZIP+MIME"
                                            }
                                        ],
                                        attributes: [
                                            {
                                                value: "Any",
                                                displayValue: "e2na.any"
                                            }
                                        ],
                                        default: "None"
                                    },
                                    {
                                        name: "OutboxSortFields",
                                        displayName: "protocol.b2bc.outboxsortfields.name",
                                        type: "string",
                                        displayDescription: "Comma separated fields to use for sorting files in the outbox directory for upload. If not specified, defaults to the modification date of the files. Fields specified has to be present in the outbox file name format. Multiple fields may be specified by separating them with commas. Eg: timestamp",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: "B2BC:FileModificationDate, timestamp"
                                    },
                                    {
                                        name: "DownloadDir",
                                        displayName: "protocol.b2bc.downloaddir.name",
                                        type: "string",
                                        displayDescription: "protocol.b2bc.downloaddir.doc",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: "../downloads"
                                    },
                                    {
                                        name: "UploadDir",
                                        displayName: "protocol.b2bc.uploaddir.name",
                                        type: "string",
                                        displayDescription: "protocol.b2bc.uploaddir.doc",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: "../uploads"
                                    },
                                    {
                                        name: "BackupAge",
                                        displayName: "protocol.b2bc.backupage.name",
                                        type: "nonNegativeInteger",
                                        displayDescription: "protocol.b2bc.backupage.doc",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: "14"
                                    },
                                    {
                                        name: "BackupPolicy",
                                        displayName: "protocol.b2bc.backuppolicy.name",
                                        type: "enum",
                                        displayDescription: "protocol.b2bc.backuppolicy.doc",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [
                                            {
                                                displayValue: "Delete",
                                                value: "Delete"
                                            },
                                            {
                                                displayValue: "ZipAndBackup",
                                                value: "ZipAndBackup"
                                            }
                                        ],
                                        attributes: [],
                                        default: "ZipAndBackup"
                                    },
                                    {
                                        name: "BackupDir",
                                        displayName: "protocol.b2bc.backupdir.name",
                                        type: "string",
                                        displayDescription: "protocol.b2bc.backupdir.doc",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: "../backup"
                                    },
                                    {
                                        name: "InstallerIs64Bit",
                                        displayName: "protocol.b2bc.installeris64bit.name",
                                        type: "boolean",
                                        displayDescription: "protocol.b2bc.installeris64bit.doc",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: "false"
                                    },
                                    {
                                        name: "InstallOptionalBundles",
                                        displayName: "protocol.b2bc.installoptionalbundles.name",
                                        type: "string",
                                        displayDescription: "protocol.b2bc.installoptionalbundles.doc",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: []
                                    },
                                    {
                                        name: "InboundHeaderAndLookupProps",
                                        displayName: "protocol.inboundheaderandlookupprops.name",
                                        type: "enum",
                                        displayDescription: "protocol.inboundheaderandlookupprops.doc",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        dataProvider: "supportfiles",
                                        enumeration: [],
                                        attributes: []
                                    },
                                    {
                                        name: "OutboundHeaderAndLookupProps",
                                        displayName: "protocol.outboundheaderandlookupprops.name",
                                        type: "enum",
                                        displayDescription: "protocol.outboundheaderandlookupprops.doc",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        dataProvider: "supportfiles",
                                        enumeration: [],
                                        attributes: []
                                    },
                                    {
                                        name: "ServerAuthRequired",
                                        displayName: "protocol.httptransportgroup.serverauthrequired.name",
                                        type: "enum",
                                        displayDescription: "protocol.httptransportgroup.serverauthrequired.doc",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [
                                            {
                                                displayValue: "None",
                                                value: "None"
                                            },
                                            {
                                                displayValue: "TrustStore",
                                                value: "TrustStore"
                                            },
                                            {
                                                displayValue: "ServerCertificate",
                                                value: "ServerCertificate"
                                            }
                                        ],
                                        attributes: [],
                                        default: "TrustStore"
                                    },
                                    {
                                        name: "AuthenticatedConnectionRequired",
                                        displayName: "protocol.httptransportgroup.authenticatedconnectionrequired.name",
                                        type: "boolean",
                                        displayDescription: "protocol.httptransportgroup.authenticatedconnectionrequired.doc",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: [],
                                        default: "false"
                                    },
                                    {
                                        name: "AuthIPAddressRange",
                                        displayName: "protocol.httptransportgroup.authipaddressrange.name",
                                        type: "string",
                                        displayDescription: "protocol.httptransportgroup.authipaddressrange.doc",
                                        group: "B2BCGroup",
                                        displayGroup: "b2bc.group.name",
                                        displayEnabled: true,
                                        readOnly: false,
                                        enumeration: [],
                                        attributes: []
                                    }
                                ],
                                propertyFormat: "PERSISTENCE",
                                propertyEntries: [
                                    {
                                        name: "OutboxFilenameFilter",
                                        value: "",
                                        attributes: {},
                                        rank: 0.0
                                    },
                                    {
                                        name: "TimeToPerformInterval",
                                        value: "24:00:00.00",
                                        attributes: {},
                                        rank: 0.0
                                    },
                                    {
                                        name: "UseDate",
                                        value: "false",
                                        attributes: {},
                                        rank: 0.0
                                    },
                                    {
                                        name: "ProtocolVersion",
                                        value: "01.00",
                                        attributes: {},
                                        rank: 0.0
                                    },
                                    {
                                        name: "OutboxFormat",
                                        value: "fromDuns_toDuns_dataType_version_timestamp",
                                        attributes: {},
                                        rank: 0.0
                                    },
                                    {
                                        name: "ZipFileEncodingCheck",
                                        value: "true",
                                        attributes: {},
                                        rank: 0.0
                                    },
                                    {
                                        name: "ChunkSize",
                                        value: "1048576",
                                        attributes: {},
                                        rank: 0.0
                                    },
                                    {
                                        name: "OutboxFilenameExtension",
                                        value: ".txt|.xls|.xlsx|.xml|.csv|.zip",
                                        attributes: {},
                                        rank: 0.0
                                    },
                                    {
                                        name: "RetryCount",
                                        value: "1440",
                                        attributes: {},
                                        rank: 0.0
                                    },
                                    {
                                        name: "MessageProcessing",
                                        value: "AsyncProcessing",
                                        attributes: {},
                                        rank: 0.0
                                    },
                                    {
                                        name: "InboxFormat",
                                        value: "fromDuns_toDuns_dataType_version_timestamp",
                                        attributes: {},
                                        rank: 0.0
                                    },
                                    {
                                        name: "FilenameSeparator",
                                        value: "_",
                                        attributes: {},
                                        rank: 0.0
                                    },
                                    {
                                        name: "DateFormat",
                                        value: "yyyyMMddHHmmssSSS",
                                        attributes: {},
                                        rank: 0.0
                                    },
                                    {
                                        name: "OutboxSortFields",
                                        value: "B2BC:FileModificationDate, timestamp",
                                        attributes: {},
                                        rank: 0.0
                                    },
                                    {
                                        name: "ProtocolCode",
                                        value: "B2BC",
                                        attributes: {},
                                        rank: 0.0
                                    },
                                    {
                                        name: "CompressionSize",
                                        value: "262144",
                                        attributes: {},
                                        rank: 0.0
                                    },
                                    {
                                        name: "FileEncoding",
                                        value: "None",
                                        attributes: {},
                                        rank: 0.0
                                    },
                                    {
                                        name: "Id",
                                        value: "b2bc",
                                        attributes: {},
                                        rank: 0.0
                                    },
                                    {
                                        name: "RetryInterval",
                                        value: "10000",
                                        attributes: {},
                                        rank: 0.0
                                    },
                                    {
                                        name: "InboxFilenameExtension",
                                        value: "${fileExt:.txt}",
                                        attributes: {},
                                        rank: 0.0
                                    }
                                ]
                            },
                            encodedData: "",
                            versionedId: "2329::0"
                        }
                    ],
                    protocolExtendedProperties: {
                        propertyDefinitions: [
                            {
                                name: "TransportRetryInterval",
                                displayName: "protocol.transportretrygroup.transportretryinterval.name",
                                type: "string",
                                displayDescription: "protocol.transportretrygroup.transportretryinterval.doc",
                                group: "TransportRetryGroup",
                                displayGroup: "protocol.transportretrygroup.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: "00:05:00.00"
                            },
                            {
                                name: "TransportRetryLimit",
                                displayName: "protocol.transportretrygroup.transportretrylimit.name",
                                type: "string",
                                displayDescription: "The number of times to retry due to not receiving a HTTP 200 response from trading partner web server.",
                                group: "TransportRetryGroup",
                                displayGroup: "protocol.transportretrygroup.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: "2"
                            },
                            {
                                name: "MessageRetryInterval",
                                displayName: "protocol.messageretrygroup.messageretryinterval.name",
                                type: "string",
                                displayDescription: "protocol.messageretrygroup.messageretryinterval.doc",
                                group: "MessageRetryGroup",
                                displayGroup: "protocol.messageretrygroup.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: "02:00:00.00"
                            },
                            {
                                name: "MessageRetryLimit",
                                displayName: "protocol.messageretrygroup.messageretrylimit.name",
                                type: "string",
                                displayDescription: "protocol.messageretrygroup.messageretrylimit.doc",
                                group: "MessageRetryGroup",
                                displayGroup: "protocol.messageretrygroup.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: "3"
                            },
                            {
                                name: "PartnerProfileDuns",
                                displayName: "protocol.messageprocessinggroup.partnerprofileduns.name",
                                type: "string",
                                displayDescription: "protocol.messageprocessinggroup.partnerprofileduns.doc",
                                group: "MessageProcessingGroup",
                                displayGroup: "protocol.messageprocessinggroup.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: []
                            },
                            {
                                name: "GatewayProfileDuns",
                                displayName: "protocol.messageprocessinggroup.gatewayprofileduns.name",
                                type: "string",
                                displayDescription: "protocol.messageprocessinggroup.gatewayprofileduns.doc",
                                group: "MessageProcessingGroup",
                                displayGroup: "protocol.messageprocessinggroup.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: []
                            },
                            {
                                name: "Timezone",
                                displayName: "protocol.messageprocessinggroup.timezone.name",
                                type: "string",
                                displayDescription: "protocol.messageprocessinggroup.timezone.doc",
                                group: "MessageProcessingGroup",
                                displayGroup: "protocol.messageprocessinggroup.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: []
                            },
                            {
                                name: "Charset",
                                displayName: "protocol.messageprocessinggroup.charset.name",
                                type: "string",
                                displayDescription: "protocol.messageprocessinggroup.charset.doc",
                                group: "MessageProcessingGroup",
                                displayGroup: "protocol.messageprocessinggroup.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: []
                            },
                            {
                                name: "MessageProcessing",
                                displayName: "protocol.messageprocessinggroup.messageprocessing.name",
                                type: "enum",
                                displayDescription: "protocol.messageprocessinggroup.messageprocessing.doc",
                                group: "MessageProcessingGroup",
                                displayGroup: "protocol.messageprocessinggroup.name",
                                displayEnabled: false,
                                readOnly: false,
                                enumeration: [
                                    {
                                        displayValue: "SyncInboundSubmission",
                                        value: "SyncInboundSubmission"
                                    },
                                    {
                                        displayValue: "SyncOutboundSubmission",
                                        value: "SyncOutboundSubmission"
                                    },
                                    {
                                        displayValue: "SynchSubmission",
                                        value: "SynchSubmission"
                                    },
                                    {
                                        displayValue: "SynchProcessing",
                                        value: "SynchProcessing"
                                    },
                                    {
                                        displayValue: "AsyncProcessing",
                                        value: "AsyncProcessing"
                                    }
                                ],
                                attributes: [],
                                default: "AsyncProcessing"
                            },
                            {
                                name: "MessageParserClass",
                                displayName: "protocol.messageprocessinggroup.messageparserclass.name",
                                type: "string",
                                displayDescription: "protocol.messageprocessinggroup.messageparserclass.doc",
                                group: "MessageProcessingGroup",
                                displayGroup: "protocol.messageprocessinggroup.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: []
                            },
                            {
                                name: "VirusScanEnabled",
                                displayName: "protocol.messageprocessinggroup.virusscanenabled.name",
                                type: "boolean",
                                displayDescription: "protocol.messageprocessinggroup.virusscanenabled.doc",
                                group: "MessageProcessingGroup",
                                displayGroup: "protocol.messageprocessinggroup.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: "false"
                            },
                            {
                                name: "MaximumTransformFileSize",
                                displayName: "protocol.messageprocessinggroup.transform.file.size",
                                type: "nonnegativeinteger",
                                displayDescription: "protocol.messageprocessinggroup.transform.file.size.desc",
                                group: "MessageProcessingGroup",
                                displayGroup: "protocol.messageprocessinggroup.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                maxLimit: "20480",
                                default: "20480"
                            },
                            {
                                name: "TimeToPerformInterval",
                                displayName: "protocol.rnif11.timetoperforminterval.name",
                                type: "string",
                                displayDescription: "protocol.rnif11.timetoperforminterval.doc",
                                group: "TimeToPerformGroup",
                                displayGroup: "TimeToPerformGroup",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: "24:00:00.00"
                            },
                            {
                                name: "FailureNotificationRequired",
                                displayName: "protocol.rnif11.failurenotificationrequired.name",
                                type: "boolean",
                                displayDescription: "protocol.rnif11.failurenotificationrequired.doc",
                                group: "TimeToPerformGroup",
                                displayGroup: "TimeToPerformGroup",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: "false"
                            },
                            {
                                name: "IncompleteTransactionAlertIntervals",
                                displayName: "protocol.incompletetransactionalertgroup.incompletetransactionalertintervals.name",
                                type: "string",
                                displayDescription: "protocol.incompletetransactionalertgroup.incompletetransactionalertintervals.doc",
                                group: "IncompleteTransactionAlertGroup",
                                displayGroup: "protocol.incompletetransactionalertgroup.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: [
                                    {
                                        value: "Any",
                                        displayValue: "e2na.any"
                                    }
                                ]
                            },
                            {
                                name: "IncompleteTransactionTimeout",
                                displayName: "protocol.incompletetransactionalertgroup.incompletetransactiontimeout.name",
                                type: "string",
                                displayDescription: "protocol.incompletetransactionalertgroup.incompletetransactiontimeout.doc",
                                group: "IncompleteTransactionAlertGroup",
                                displayGroup: "protocol.incompletetransactionalertgroup.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: [
                                    {
                                        value: "Any",
                                        displayValue: "e2na.any"
                                    }
                                ]
                            },
                            {
                                name: "FifoEnabled",
                                displayName: "protocol.fifotransactionreceivergroup.fifoenabled.name",
                                type: "boolean",
                                displayDescription: "protocol.fifotransactionreceivergroup.fifoenabled.doc",
                                group: "FIFOTransactionReceiverGroup",
                                displayGroup: "protocol.fifotransactionreceivergroup.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: "false"
                            },
                            {
                                name: "FifoQueueName",
                                displayName: "protocol.fifotransactionreceivergroup.fifoqueuename.name",
                                type: "string",
                                displayDescription: "protocol.fifotransactionreceivergroup.fifoqueuename.doc",
                                group: "FIFOTransactionReceiverGroup",
                                displayGroup: "protocol.fifotransactionreceivergroup.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: "${fromDuns}"
                            },
                            {
                                name: "Id",
                                displayName: "Id",
                                type: "string",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: true,
                                readOnly: true,
                                enumeration: [],
                                attributes: [],
                                default: "b2bc"
                            },
                            {
                                name: "ProtocolCode",
                                displayName: "ProtocolCode",
                                type: "string",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: false,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: "B2BC"
                            },
                            {
                                name: "ProtocolVersion",
                                displayName: "ProtocolVersion",
                                type: "string",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: false,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: "01.00"
                            },
                            {
                                name: "ChunkSize",
                                displayName: "protocol.b2bc.chunksize.name",
                                type: "string",
                                displayDescription: "protocol.b2bc.chunksize.doc",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: "1048576"
                            },
                            {
                                name: "CompressionSize",
                                displayName: "protocol.b2bc.compressionsize.name",
                                type: "string",
                                displayDescription: "protocol.b2bc.compressionsize.doc",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: "262144"
                            },
                            {
                                name: "RetryCount",
                                displayName: "protocol.b2bc.retrycount.name",
                                type: "string",
                                displayDescription: "The number of times to retry if an upload/download request from the B2B Client fails.",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: "1440"
                            },
                            {
                                name: "RetryInterval",
                                displayName: "protocol.b2bc.retryinterval.name",
                                type: "string",
                                displayDescription: "protocol.b2bc.retryinterval.doc",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: "10000"
                            },
                            {
                                name: "SocketReadTimeout",
                                displayName: "protocol.b2bc.socketreadtimeout.name",
                                type: "string",
                                displayDescription: "protocol.b2bc.socketreadtimeout.doc",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: "180000"
                            },
                            {
                                name: "MaxThread",
                                displayName: "protocol.b2bc.maxthread.name",
                                type: "string",
                                displayDescription: "protocol.b2bc.maxthread.doc",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: "25"
                            },
                            {
                                name: "MonitoredClient",
                                displayName: "protocol.b2bc.monitoredclient.name",
                                type: "boolean",
                                displayDescription: "protocol.b2bc.monitoredclient.doc",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: "false"
                            },
                            {
                                name: "HeartbeatTimeSoftLimit",
                                displayName: "protocol.b2bc.heartbeattimesoftlimit.name",
                                type: "string",
                                displayDescription: "protocol.b2bc.heartbeattimesoftlimit.doc",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: "15"
                            },
                            {
                                name: "HeartbeatTimeHardLimit",
                                displayName: "protocol.b2bc.heartbeattimehardlimit.name",
                                type: "string",
                                displayDescription: "protocol.b2bc.heartbeattimehardlimit.doc",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: "30"
                            },
                            {
                                name: "HeartbeatAlertNoRepeatTime",
                                displayName: "protocol.b2bc.heartbeatalertnorepeattime.name",
                                type: "string",
                                displayDescription: "protocol.b2bc.heartbeatalertnorepeattime.doc",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: "240"
                            },
                            {
                                name: "RemoteManagementTimeSoftLimit",
                                displayName: "protocol.b2bc.remotemanagementtimesoftlimit.name",
                                type: "string",
                                displayDescription: "protocol.b2bc.remotemanagementtimesoftlimit.doc",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: "15"
                            },
                            {
                                name: "RemoteManagementTimeHardLimit",
                                displayName: "protocol.b2bc.remotemanagementtimehardlimit.name",
                                type: "string",
                                displayDescription: "protocol.b2bc.remotemanagementtimehardlimit.doc",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: "30"
                            },
                            {
                                name: "RemoteManagementAlertNoRepeatTime",
                                displayName: "protocol.b2bc.remotemanagementalertnorepeattime.name",
                                type: "string",
                                displayDescription: "protocol.b2bc.remotemanagementalertnorepeattime.doc",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: "240"
                            },
                            {
                                name: "MonitorInterval",
                                type: "string",
                                displayDescription: "The monitor interval (milliseconds)",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: false,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: "180000"
                            },
                            {
                                name: "ErrorDirectory",
                                displayName: "protocol.b2bc.errordirectory.name",
                                type: "string",
                                displayDescription: "protocol.b2bc.errordirectory.doc",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: "../error"
                            },
                            {
                                name: "UseDate",
                                displayName: "protocol.b2bc.usedate.name",
                                type: "boolean",
                                displayDescription: "protocol.b2bc.usedate.doc",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: "false"
                            },
                            {
                                name: "DateFormat",
                                displayName: "protocol.b2bc.dateformat.name",
                                type: "string",
                                displayDescription: "protocol.b2bc.dateformat.doc",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: "yyyyMMddHHmmssSSS"
                            },
                            {
                                name: "InboxFormat",
                                displayName: "protocol.b2bc.inboxformat.name",
                                type: "string",
                                displayDescription: "protocol.b2bc.inboxformat.doc",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: "fromDuns_toDuns_dataType_version_timestamp"
                            },
                            {
                                name: "OutboxFormat",
                                displayName: "protocol.b2bc.outboxformat.name",
                                type: "string",
                                displayDescription: "protocol.b2bc.outboxformat.doc",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: "fromDuns_toDuns_dataType_version_timestamp"
                            },
                            {
                                name: "FilenameSeparator",
                                displayName: "protocol.b2bc.filenameseparator.name",
                                type: "string",
                                displayDescription: "protocol.b2bc.filenameseparator.doc",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: "_"
                            },
                            {
                                name: "InboxFilenameFilter",
                                type: "string",
                                displayDescription: "Obsolete. This is NOT used in B2BC protocol. Will be removed in the future.",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: false,
                                readOnly: false,
                                enumeration: [],
                                attributes: []
                            },
                            {
                                name: "OutboxFilenameFilter",
                                displayName: "protocol.b2bc.outboxfilenamefilter.name",
                                type: "string",
                                displayDescription: "Simple Regular Expression to filter filenames to process in the outbox.  E.g. ^([^_]+)_([^_]+)_([^_]+)_([^_]+)_([^.]+)(\\.txt|\\.xls|\\.xlsx)$",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: []
                            },
                            {
                                name: "InboxDirectory",
                                displayName: "protocol.b2bc.inboxdirectory.name",
                                type: "string",
                                displayDescription: "protocol.b2bc.inboxdirectory.doc",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: "../inbox"
                            },
                            {
                                name: "OutboxDirectory",
                                displayName: "protocol.b2bc.outboxdirectory.name",
                                type: "string",
                                displayDescription: "protocol.b2bc.outboxdirectory.doc",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: "../outbox"
                            },
                            {
                                name: "ArchiveDirectory",
                                displayName: "protocol.b2bc.archivedirectory.name",
                                type: "string",
                                displayDescription: "protocol.b2bc.archivedirectory.doc",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: "../archive"
                            },
                            {
                                name: "InboxStatusDirectory",
                                type: "string",
                                displayDescription: "The full path directory name where inbound status files are located for this connection.",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: false,
                                readOnly: false,
                                enumeration: [],
                                attributes: []
                            },
                            {
                                name: "OutboxStatusDirectory",
                                type: "string",
                                displayDescription: "The full path directory name where outbound status files are located for this connection.",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: false,
                                readOnly: false,
                                enumeration: [],
                                attributes: []
                            },
                            {
                                name: "FilenameExtension",
                                type: "string",
                                displayDescription: "The filename extension used at the end of files in the outbox and inbox.  The default is .txt",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: false,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: ".txt"
                            },
                            {
                                name: "InboxFilenameExtension",
                                displayName: "protocol.b2bc.inboxfilenameextension.name",
                                type: "string",
                                displayDescription: "protocol.b2bc.inboxfilenameextension.doc",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: "${fileExt:.txt}"
                            },
                            {
                                name: "OutboxFilenameExtension",
                                displayName: "protocol.b2bc.outboxfilenameextension.name",
                                type: "string",
                                displayDescription: "protocol.b2bc.outboxfilenameextension.doc",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: ".txt|.xls|.xlsx|.xml|.csv|.zip"
                            },
                            {
                                name: "AckSuccessExtension",
                                displayName: "protocol.b2bc.acksuccessextension.name",
                                type: "string",
                                displayDescription: "protocol.b2bc.acksuccessextension.doc",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: ".ack"
                            },
                            {
                                name: "AckFailureExtension",
                                displayName: "protocol.b2bc.ackfailureextension.name",
                                type: "string",
                                displayDescription: "protocol.b2bc.ackfailureextension.doc",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: ".err"
                            },
                            {
                                name: "AckNackEnabled",
                                displayName: "protocol.b2bc.acknackenabled.name",
                                type: "boolean",
                                displayDescription: "protocol.b2bc.acknackenabled.doc",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: "false"
                            },
                            {
                                name: "KeepLogsFor",
                                displayName: "protocol.b2bc.keeplogsfor.name",
                                type: "string",
                                displayDescription: "protocol.b2bc.keeplogsfor.doc",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: "7"
                            },
                            {
                                name: "InProcessExtension",
                                type: "string",
                                displayDescription: "The filename extension used when a file is currently being processed. The default is .prc",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: false,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: ".prc"
                            },
                            {
                                name: "ZipFileEncodingCheck",
                                displayName: "protocol.b2bc.zipfileencodingcheck.name",
                                type: "boolean",
                                displayDescription: "protocol.b2bc.zipfileencodingcheck.doc",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: "true"
                            },
                            {
                                name: "InboxFilterClass",
                                type: "string",
                                displayDescription: "RESERVED FOR E2OPEN USE ONLY",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: false,
                                readOnly: false,
                                enumeration: [],
                                attributes: []
                            },
                            {
                                name: "OutboxFilterClass",
                                type: "string",
                                displayDescription: "RESERVED FOR E2OPEN USE ONLY",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: false,
                                readOnly: false,
                                enumeration: [],
                                attributes: []
                            },
                            {
                                name: "InboxComparatorClass",
                                type: "string",
                                displayDescription: "RESERVED FOR E2OPEN USE ONLY",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: false,
                                readOnly: false,
                                enumeration: [],
                                attributes: []
                            },
                            {
                                name: "OutboxComparatorClass",
                                type: "string",
                                displayDescription: "RESERVED FOR E2OPEN USE ONLY",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: false,
                                readOnly: false,
                                enumeration: [],
                                attributes: []
                            },
                            {
                                name: "FileEncoding",
                                displayName: "protocol.b2bc.fileencoding.name",
                                type: "enum",
                                displayDescription: "protocol.b2bc.fileencoding.doc",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [
                                    {
                                        displayValue: "Zip",
                                        value: "Zip"
                                    },
                                    {
                                        displayValue: "ZLIB/MIME",
                                        value: "ZLIB+MIME"
                                    },
                                    {
                                        displayValue: "MIME",
                                        value: "MIME"
                                    },
                                    {
                                        displayValue: "ConditionalZip",
                                        value: "ConditionalZip"
                                    },
                                    {
                                        displayValue: "GZIP/No Mime",
                                        value: "GZIP"
                                    },
                                    {
                                        displayValue: "ZLIB/No Mime",
                                        value: "ZLIB"
                                    },
                                    {
                                        displayValue: "None",
                                        value: "None"
                                    },
                                    {
                                        displayValue: "GZIP/MIME",
                                        value: "GZIP+MIME"
                                    }
                                ],
                                attributes: [
                                    {
                                        value: "Any",
                                        displayValue: "e2na.any"
                                    }
                                ],
                                default: "None"
                            },
                            {
                                name: "OutboxSortFields",
                                displayName: "protocol.b2bc.outboxsortfields.name",
                                type: "string",
                                displayDescription: "Comma separated fields to use for sorting files in the outbox directory for upload. If not specified, defaults to the modification date of the files. Fields specified has to be present in the outbox file name format. Multiple fields may be specified by separating them with commas. Eg: timestamp",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: "B2BC:FileModificationDate, timestamp"
                            },
                            {
                                name: "DownloadDir",
                                displayName: "protocol.b2bc.downloaddir.name",
                                type: "string",
                                displayDescription: "protocol.b2bc.downloaddir.doc",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: "../downloads"
                            },
                            {
                                name: "UploadDir",
                                displayName: "protocol.b2bc.uploaddir.name",
                                type: "string",
                                displayDescription: "protocol.b2bc.uploaddir.doc",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: "../uploads"
                            },
                            {
                                name: "BackupAge",
                                displayName: "protocol.b2bc.backupage.name",
                                type: "nonNegativeInteger",
                                displayDescription: "protocol.b2bc.backupage.doc",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: "14"
                            },
                            {
                                name: "BackupPolicy",
                                displayName: "protocol.b2bc.backuppolicy.name",
                                type: "enum",
                                displayDescription: "protocol.b2bc.backuppolicy.doc",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [
                                    {
                                        displayValue: "Delete",
                                        value: "Delete"
                                    },
                                    {
                                        displayValue: "ZipAndBackup",
                                        value: "ZipAndBackup"
                                    }
                                ],
                                attributes: [],
                                default: "ZipAndBackup"
                            },
                            {
                                name: "BackupDir",
                                displayName: "protocol.b2bc.backupdir.name",
                                type: "string",
                                displayDescription: "protocol.b2bc.backupdir.doc",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: "../backup"
                            },
                            {
                                name: "InstallerIs64Bit",
                                displayName: "protocol.b2bc.installeris64bit.name",
                                type: "boolean",
                                displayDescription: "protocol.b2bc.installeris64bit.doc",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: "false"
                            },
                            {
                                name: "InstallOptionalBundles",
                                displayName: "protocol.b2bc.installoptionalbundles.name",
                                type: "string",
                                displayDescription: "protocol.b2bc.installoptionalbundles.doc",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: []
                            },
                            {
                                name: "InboundHeaderAndLookupProps",
                                displayName: "protocol.inboundheaderandlookupprops.name",
                                type: "enum",
                                displayDescription: "protocol.inboundheaderandlookupprops.doc",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: true,
                                readOnly: false,
                                dataProvider: "supportfiles",
                                enumeration: [],
                                attributes: []
                            },
                            {
                                name: "OutboundHeaderAndLookupProps",
                                displayName: "protocol.outboundheaderandlookupprops.name",
                                type: "enum",
                                displayDescription: "protocol.outboundheaderandlookupprops.doc",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: true,
                                readOnly: false,
                                dataProvider: "supportfiles",
                                enumeration: [],
                                attributes: []
                            },
                            {
                                name: "ServerAuthRequired",
                                displayName: "protocol.httptransportgroup.serverauthrequired.name",
                                type: "enum",
                                displayDescription: "protocol.httptransportgroup.serverauthrequired.doc",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [
                                    {
                                        displayValue: "None",
                                        value: "None"
                                    },
                                    {
                                        displayValue: "TrustStore",
                                        value: "TrustStore"
                                    },
                                    {
                                        displayValue: "ServerCertificate",
                                        value: "ServerCertificate"
                                    }
                                ],
                                attributes: [],
                                default: "TrustStore"
                            },
                            {
                                name: "AuthenticatedConnectionRequired",
                                displayName: "protocol.httptransportgroup.authenticatedconnectionrequired.name",
                                type: "boolean",
                                displayDescription: "protocol.httptransportgroup.authenticatedconnectionrequired.doc",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: [],
                                default: "false"
                            },
                            {
                                name: "AuthIPAddressRange",
                                displayName: "protocol.httptransportgroup.authipaddressrange.name",
                                type: "string",
                                displayDescription: "protocol.httptransportgroup.authipaddressrange.doc",
                                group: "B2BCGroup",
                                displayGroup: "b2bc.group.name",
                                displayEnabled: true,
                                readOnly: false,
                                enumeration: [],
                                attributes: []
                            }
                        ],
                        propertyFormat: "PERSISTENCE",
                        propertyEntries: [
                            {
                                name: "OutboxFilenameFilter",
                                value: "",
                                attributes: {},
                                rank: 0.0
                            },
                            {
                                name: "TimeToPerformInterval",
                                value: "24:00:00.00",
                                attributes: {},
                                rank: 0.0
                            },
                            {
                                name: "UseDate",
                                value: "false",
                                attributes: {},
                                rank: 0.0
                            },
                            {
                                name: "ProtocolVersion",
                                value: "01.00",
                                attributes: {},
                                rank: 0.0
                            },
                            {
                                name: "OutboxFormat",
                                value: "fromDuns_toDuns_dataType_version_timestamp",
                                attributes: {},
                                rank: 0.0
                            },
                            {
                                name: "ZipFileEncodingCheck",
                                value: "true",
                                attributes: {},
                                rank: 0.0
                            },
                            {
                                name: "ChunkSize",
                                value: "1048576",
                                attributes: {},
                                rank: 0.0
                            },
                            {
                                name: "OutboxFilenameExtension",
                                value: ".txt|.xls|.xlsx|.xml|.csv|.zip",
                                attributes: {},
                                rank: 0.0
                            },
                            {
                                name: "RetryCount",
                                value: "1440",
                                attributes: {},
                                rank: 0.0
                            },
                            {
                                name: "MessageProcessing",
                                value: "AsyncProcessing",
                                attributes: {},
                                rank: 0.0
                            },
                            {
                                name: "InboxFormat",
                                value: "fromDuns_toDuns_dataType_version_timestamp",
                                attributes: {},
                                rank: 0.0
                            },
                            {
                                name: "FilenameSeparator",
                                value: "_",
                                attributes: {},
                                rank: 0.0
                            },
                            {
                                name: "DateFormat",
                                value: "yyyyMMddHHmmssSSS",
                                attributes: {},
                                rank: 0.0
                            },
                            {
                                name: "OutboxSortFields",
                                value: "B2BC:FileModificationDate, timestamp",
                                attributes: {},
                                rank: 0.0
                            },
                            {
                                name: "ProtocolCode",
                                value: "B2BC",
                                attributes: {},
                                rank: 0.0
                            },
                            {
                                name: "CompressionSize",
                                value: "262144",
                                attributes: {},
                                rank: 0.0
                            },
                            {
                                name: "FileEncoding",
                                value: "None",
                                attributes: {},
                                rank: 0.0
                            },
                            {
                                name: "Id",
                                value: "b2bc",
                                attributes: {},
                                rank: 0.0
                            },
                            {
                                name: "RetryInterval",
                                value: "10000",
                                attributes: {},
                                rank: 0.0
                            },
                            {
                                name: "InboxFilenameExtension",
                                value: "${fileExt:.txt}",
                                attributes: {},
                                rank: 0.0
                            }
                        ]
                    },
                    versionedId: "2328::1"
                }
            },
            protocol: "b2bc"
        }
    });

    console.log(response.ok());
    // expect(response.ok()).toBeTruthy();

    console.log(response.status());
    // expect(response.status()).toBe(200);

    const responseBody = await response.json();
    console.log(responseBody);
    // expect(responseBody.booking).toHaveProperty("firstname", "Jim");
    // expect(responseBody.booking).toHaveProperty("lastname", "Brown");
    // expect(responseBody.booking).toHaveProperty("totalprice", 111);
    // expect(responseBody.booking).toHaveProperty("depositpaid", true);
});

test("should be able to get the unique connection", async ({ request }) => {
    const response = await request.post("http://dev1108.dev.e2open.com:11080/e2net/console/service/api/private/connections?page=1&rowsPerPage=10000", {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "iv-user": "dev1108",
            "Accept-Charset": "UTF-8",
            charset: "UTF-8",
            "Accept-Encoding": "*"
            // 'Origin': 'https://e2productqa.dev.e2open.com',
            // 'Referer': 'https://e2productqa.dev.e2open.com/dev1108_ui/e2net-ui/companies',
            // 'Cookie': 'acceptAllCookies=true'
            // 'Cookie' : 'dev.e2open.session.id=d42cc12d-8411-4ecf-8f3c-08e6b9154ff5'
        },
        data: {
            company: [
                {
                    key: "CentOSSen1",
                    value: "CentOSSen1"
                }
            ],
            connectionName: [
                {
                    key: "CentOSSen1_b2bcdixhkqd7",
                    value: "CentOSSen1_b2bcdixhkqd7"
                }
            ],
            state: {
                key: "enabled",
                value: "1"
            }
        }
    });

    console.log(response.ok());
    // expect(response.ok()).toBeTruthy();

    console.log(response.status());
    // expect(response.status()).toBe(200);

    const responseBody = await response.json();
    console.log(responseBody.data.rows[0]);
    console.log(await responseBody.data.rows[0].id);
    console.log(responseBody.data.totalRows);
    console.log(responseBody.data.rows[0].orgName);
    console.log(responseBody.data.rows[0].orgId);
    console.log(responseBody.data.rows[0].protocol);
    console.log(responseBody.data.rows[0].serverPrincipalName);

    // expect(responseBody.booking).toHaveProperty("firstname", "Jim");
    // expect(responseBody.booking).toHaveProperty("lastname", "Brown");
    // expect(responseBody.booking).toHaveProperty("totalprice", 111);
    // expect(responseBody.booking).toHaveProperty("depositpaid", true);
});
