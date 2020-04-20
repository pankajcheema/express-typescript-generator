"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class Database {
    TypeormConnection() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!typeorm_1.Connection) {
                typeorm_1.createConnection().then((connection) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    return connection;
                })).catch(error => {
                    console.log(error);
                    return error;
                });
            }
            else {
                console.log("connection altedy created");
            }
        });
    }
    MysqlNativeConnection() {
        console.log("write mysql function here");
    }
}
exports.Database = Database;
