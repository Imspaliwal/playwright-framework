const { Buffer } = require("node:buffer");

// https://devdocs.io/node/buffer

const buf = Buffer.from("dev1108:E2open123", "utf-8");

console.log(buf.toString("base64"));

console.log(buf.toString("hex"));

console.log(buf.toString("binary"));
