"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
class UserController {
    constructor() {
        console.log("constructer called");
    }
    test() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log("pankaj");
        });
    }
}
exports.UserController = UserController;
module.exports = UserController;
