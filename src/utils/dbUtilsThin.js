/* Copyright (c) 2018, 2023, Oracle and/or its affiliates. */

/******************************************************************************
 *
 * This software is dual-licensed to you under the Universal Permissive License
 * (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl and Apache License
 * 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose
 * either license.
 *
 * If you elect to accept the software under the Apache License, Version 2.0,
 * the following applies:
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * NAME
 *   example.js
 *
 * DESCRIPTION
 *   A basic node-oracledb example.
 *
 *   For connection pool examples see connectionpool.js and webapp.js
 *   For a ResultSet example see resultset1.js
 *   For a query stream example see selectstream.js
 *
 *****************************************************************************/

"use strict";

Error.stackTraceLimit = 50;

const oracledb = require("oracledb");
// const dbConfig = require('./dbconfig.js');

// This example runs in both node-oracledb Thin and Thick modes.
//
// Optionally run in node-oracledb Thick mode
if (process.env.NODE_ORACLEDB_DRIVER_MODE === "thick") {
    // Thick mode requires Oracle Client or Oracle Instant Client libraries.
    // On Windows and macOS Intel you can specify the directory containing the
    // libraries at runtime or before Node.js starts.  On other platforms (where
    // Oracle libraries are available) the system library search path must always
    // include the Oracle library path before Node.js starts.  If the search path
    // is not correct, you will get a DPI-1047 error.  See the node-oracledb
    // installation documentation.
    let clientOpts = {};
    // On Windows and macOS Intel platforms, set the environment
    // variable NODE_ORACLEDB_CLIENT_LIB_DIR to the Oracle Client library path
    if (process.platform === "win32" || (process.platform === "darwin" && process.arch === "x64")) {
        clientOpts = { libDir: process.env.PATH };
    }
    oracledb.initOracleClient(clientOpts); // enable node-oracledb Thick mode
}

console.log(oracledb.thin ? "Running in thin mode" : "Running in thick mode");

async function run() {
    let connection;

    try {
        let sql, binds, options, result;

        //     connection = await oracledb.getConnection({
        //         user: "dev1108_e2am_usr",
        //         password: "TXTNb0y4BhZF",
        //         connectString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=dc19nt1r.dev.e2open.com)(PORT=1521))(CONNECT_DATA=(SID=dp19nt1r)))"
        //   });

        connection = await oracledb.getConnection({
            user: "dev1108_e2am_usr",
            password: `k6vcdN8sK63XRHX0`,
            connectString: `dc19nt1r.dev.e2open.com:1521/dp19nt1r.world`
        });

        //
        // Query the data
        //

        sql = `select PARTNER_ID from E2NA_PARTNER_PROFILE_DETAILS where PROFILE_NAME=E2netQAWatermill_watermillJMS`;

        binds = {};

        // For a complete list of options see the documentation.
        options = {
            outFormat: oracledb.OUT_FORMAT_OBJECT // query result format
            // fetchArraySize:   100                 // internal buffer allocation size for tuning
        };

        result = await connection.execute(sql, binds, options);

        // Column metadata can be shown, if desired
        // console.log("Metadata: ");
        // console.dir(result.metaData, { depth: null });

        console.log("Query results: ");
        console.dir(result.rows, { depth: null });
    } catch (err) {
        console.error(err);
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error(err);
            }
        }
    }
}

run();
