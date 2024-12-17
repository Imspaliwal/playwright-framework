const oracledb = require("oracledb");

// oracledb.initOracleClient({ libDir: "/Users/weerapornpaisingkhon/instantclient_23_5" });
oracledb.initOracleClient({ libDir: "C:/oracle/instantclient_23_5" });
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

const dbConfig = {
    user: "dev1108_e2am_usr",
    password: "k6vcdN8sK63XRHX0",
    connectString: `dc19nt1r.dev.e2open.com:1521/dp19nt1r.world`
};

/**
 * connectToDatabase
 */
async function connectToDatabase() {
    // need to valiedate if path is successfully added on windows & linux for oracle/instantclient
    // write logic (for now added manually in local system)
    // console.log(process.env.PATH);

    let connection;

    try {
        connection = await oracledb.getConnection(dbConfig);
        console.log("Connected to Oracle database");
    } catch (err) {
        console.error("Error connecting to database:", err);
    } finally {
        if (connection) {
            await connection.close();
        }
    }
}

async function fetchData(dbConfig, sql) {
    let connection;

    try {
        connection = await oracledb.getConnection(dbConfig);
        console.log("Connected to Oracle database");

        const result = await connection.execute(sql);

        return result.rows;

        // const rs = result.resultSet; let row;

        // while ((row = await rs.getRow())) {
        //     if (row.DONE) {
        //         console.log(row.DESCRIPTION, "is done");
        //         return await rs.getRow();
        //     } else {
        //         console.log(row.DESCRIPTION, "is NOT done");
        //     }
        // }
        // await rs.close();
    } catch (err) {
        console.error("Error fetching data:", err);
    } finally {
        if (connection) {
            await connection.close();
            console.log("Database connection successfully closed!");
        }
    }
}

// Company queries

// Connection queries

async function getConnectionDetails(dbConfig, connectionNameOrID) {
    let sql;

    if (typeof connectionNameOrID === "string") {
        sql = `select COMPANY_NAME, ORGANIZATION_ID, PARTNER_NAME, IDENTIFIER, PROFILE_NAME, PARTNER_ID, PROTOCOL_NAME, SERVER_PRINCIPAL from E2NA_PARTNER_PROFILE_DETAILS where PROFILE_NAME='${connectionNameOrID}'`;
    }
    if (typeof connectionNameOrID === "number") {
        sql = `select COMPANY_NAME, ORGANIZATION_ID, PARTNER_NAME, IDENTIFIER, PROFILE_NAME, PARTNER_ID, PROTOCOL_NAME, SERVER_PRINCIPAL from E2NA_PARTNER_PROFILE_DETAILS where IDENTIFIER=${connectionNameOrID}`;
    }
    const data = await fetchData(dbConfig, sql);
    console.log(data);
}

async function getConnectionIdentifier(dbConfig, connectionNameOrID) {
    let sql;

    if (typeof connectionNameOrID === "string") {
        sql = `select IDENTIFIER from E2NA_PARTNER_PROFILE_DETAILS where PROFILE_NAME='${connectionNameOrID}'`;
    }
    if (typeof connectionNameOrID === "number") {
        sql = `select IDENTIFIER from E2NA_PARTNER_PROFILE_DETAILS where IDENTIFIER=${connectionNameOrID}`;
    }

    const data = await fetchData(dbConfig, sql);
    console.log(data);
}

async function getConnectionID(dbConfig, connectionNameOrID) {
    let sql;

    if (typeof connectionNameOrID === "string") {
        sql = `select SERVER_PRINCIPAL from E2NA_PARTNER_PROFILE_DETAILS where PROFILE_NAME='${connectionNameOrID}'`;
    }
    if (typeof connectionNameOrID === "number") {
        sql = `select SERVER_PRINCIPAL from E2NA_PARTNER_PROFILE_DETAILS where IDENTIFIER=${connectionNameOrID}`;
    }

    const data = await fetchData(dbConfig, sql);
    console.log(data);
}

async function getPartnerID(dbConfig, connectionNameOrID) {
    let sql;

    if (typeof connectionNameOrID === "string") {
        sql = `select PARTNER_ID from E2NA_PARTNER_PROFILE_DETAILS where PROFILE_NAME='${connectionNameOrID}'`;
    }
    if (typeof connectionNameOrID === "number") {
        sql = `select PARTNER_ID from E2NA_PARTNER_PROFILE_DETAILS where IDENTIFIER=${connectionNameOrID}`;
    }

    const data = await fetchData(dbConfig, sql);
    console.log(data);
}

// connectToDatabase().then(() => {

//     // getConnectionDetailsDual("E2netQAWatermill_watermillJMS");
//     getConnectionDetailsDual(123);

// });

getConnectionDetails(dbConfig, "E2netQAWatermill_watermillJMS");
getConnectionDetails(dbConfig, 166133);

getPartnerID(dbConfig, "E2netQAWatermill_watermillJMS");
getPartnerID(dbConfig, 166133);

getConnectionID(dbConfig, "E2netQAWatermill_watermillJMS");
getConnectionID(dbConfig, 166133);

getConnectionIdentifier(dbConfig, "E2netQAWatermill_watermillJMS");
getConnectionIdentifier(dbConfig, 166133);
