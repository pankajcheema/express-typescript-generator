"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("./LoadEnv");
const _server_1 = tslib_1.__importDefault(require("@server"));
const Logger_1 = tslib_1.__importDefault(require("@shared/Logger"));
require("reflect-metadata");
const db_1 = require("./DB/db");
const fs = require('fs');
const database = new db_1.Database();
database.TypeormConnection();
database.MysqlNativeConnection();
const port = Number(process.env.PORT || 3000);
console.log("port " + port);
_server_1.default.listen(port, () => {
    console.log('Express server started on port: ' + port);
});
console.log("panka00000j");
Logger_1.default.info("server");
