"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const User_1 = require("../entity/User");
class UserController {
    constructor() {
        console.log("constructer calledddd");
    }
    test() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const coon = typeorm_1.getConnection();
            const user = new User_1.User();
            user.firstName = "Timber";
            user.lastName = "Saw";
            user.age = 25;
            const saveduser = yield coon.manager.save(user);
            console.log(saveduser);
            console.log("pankaj");
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserControllers.js.map