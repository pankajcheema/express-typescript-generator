"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class Credentials1587472997266 {
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: "credentials",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true
                    },
                    {
                        name: "access_token",
                        type: "varchar",
                    },
                    {
                        name: "refresh_token",
                        type: "varchar",
                    },
                    {
                        name: "is_active",
                        type: "boolean",
                    },
                    {
                        name: "expires_at",
                        type: "date",
                    },
                    {
                        name: "user_id",
                        type: "varchar",
                    },
                    {
                        name: "company_id",
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
            yield queryRunner.dropTable("credentials");
        });
    }
}
exports.Credentials1587472997266 = Credentials1587472997266;
