"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class UserController {
    constructor() {
        this.conn = typeorm_1.getConnection();
        console.log("constructer calledddd");
    }
    test() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log("pankaj");
        });
    }
}
exports.UserController = UserController;
