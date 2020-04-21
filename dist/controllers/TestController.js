"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const Cateogary_1 = require("../entity/Cateogary");
const User_1 = require("../entity/User");
var fs = require('fs');
class TestController {
    constructor() {
        console.log("constructer calledddd");
    }
    testingMayToMay() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const coon = typeorm_1.getConnection();
            var i;
            const userarr = [];
            const tm = new Date().getTime();
            fs.writeFileSync('date.txt', tm);
            console.log("time befor loop start  " + tm);
            for (i = 0; i < 30000; i++) {
                console.log("Inserting a new user into the database...");
                console.log("loop for i " + i);
                const user = new User_1.User();
                user.firstName = "Timber";
                user.lastName = "Saw";
                user.age = 25;
                userarr.push(user);
            }
            console.log("waitong for promises");
            const promise = coon.manager.save(userarr);
            console.log("all done for promises");
            const tm2 = new Date().getTime();
            console.log("time after loop start " + tm2);
            const diff = tm2 - tm;
            console.log("diff is " + diff);
        });
    }
    readingMayToMay() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const coon = typeorm_1.getConnection();
            const categoriesWithQuestions = yield coon
                .getRepository(Cateogary_1.Category)
                .createQueryBuilder("category")
                .leftJoinAndSelect("category.questions", "question")
                .getMany();
            console.log(categoriesWithQuestions);
            console.log("records fetched");
        });
    }
    Diljot() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const coon = typeorm_1.getConnection();
            var i;
            const userarr = [];
            for (i = 0; i < 30000; i++) {
                const user = new User_1.User();
                user.firstName = 'Timber';
                user.lastName = 'Saw';
                user.age = 25;
                userarr.push(user);
            }
            const tm = new Date().getTime();
            console.log('time befor loop start  ' + tm);
            yield coon.manager.save(userarr);
            console.log('all done for promises');
            const tm2 = new Date().getTime();
            console.log('time ' + String(tm2 - tm));
        });
    }
}
exports.TestController = TestController;
