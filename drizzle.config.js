"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
dotenv.config();
console.log(process.env["DATABASE_HOST"], "DATABASE_HOST");
exports.default = {
    schema: "./lib/db/schema.ts",
    out: "./drizzle/migrations",
    driver: "mysql2",
    dbCredentials: {
        host: process.env["DATABASE_HOST"],
        user: process.env["DATABASE_USERNAME"],
        password: process.env["DATABASE_PASSWORD"],
        database: process.env["DATABASE_NAME"],
    },
};
