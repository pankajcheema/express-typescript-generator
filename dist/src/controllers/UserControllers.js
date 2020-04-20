"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const _server_1 = tslib_1.__importDefault(require("@server"));
class UserController {
    constructor() {
        console.log("constructer called");
    }
    test() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log("pankaj");
            console.log(_server_1.default.locals.pankaj);
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserControllers.js.map