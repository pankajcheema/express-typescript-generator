"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class UserUpdate1587106248890 {
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: "user",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true
                    },
                    {
                        name: "firstName",
                        type: "varchar",
                    },
                    {
                        name: "lastName",
                        type: "varchar",
                    },
                    {
                        name: "age",
                        type: "int",
                    },
                    {
                        name: "created_at",
                        type: "date",
                    },
                    {
                        name: "updated_at",
                        type: "date",
                    },
                    {
                        name: "version",
                        type: "int"
                    }
                ]
            }), true);
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable("user");
        });
    }
}
exports.UserUpdate1587106248890 = UserUpdate1587106248890;
//# sourceMappingURL=1587106248890-UserUpdate.js.map