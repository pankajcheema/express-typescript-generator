"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class Database {
    TypeormConnection() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            typeorm_1.createConnection().then((connection) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                console.log("connection created");
            })).catch(error => {
                console.log(error);
                process.exit(0);
            });
        });
    }
    MysqlNativeConnection() {
        console.log("write mysql function here");
    }
}
exports.Database = Database;
//# sourceMappingURL=db.js.map