const crypto = require("crypto");
const jwtSecret = crypto.randomBytes(32).toString("hex"); // 32 bytes = 64 characters
console.log(jwtSecret);
