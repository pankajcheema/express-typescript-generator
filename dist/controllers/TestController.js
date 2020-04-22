"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const User_1 = require("../entity/User");
var mysql = require('mysql');
var fs = require('fs');
const db_1 = require("../DB/db");
const database = db_1.Database.getDBInstance();
const db = database.getMysqlNativeConnection();
console.log("printing db on testcontroller" + db);
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
            const promise = yield coon.manager.save(userarr);
            console.log("all done for promises");
            const tm2 = new Date().getTime();
            console.log("time after loop start " + tm2);
            const diff = tm2 - tm;
            console.log("diff is " + diff);
        });
    }
    readingMayToMay() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
            console.log("start time " + tm);
            console.log("end time " + tm2);
            let diff = tm2 - tm;
            console.log("diffis " + diff);
            console.log('time ' + String(tm2 - tm));
        });
    }
    Native() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const db = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "pankajcheema",
                database: "test",
            });
            let vals = [];
            var i;
            let init = new Date();
            for (i = 0; i < 30000; i++) {
                vals.push(["Diljot", "Singh", 2]);
            }
            let query = "INSERT INTO test (firstName, lastName, age) VALUES ?";
            let start = new Date().getTime();
            console.log("start " + start);
            db.query(query, [vals], function (err, res) {
                let end = new Date().getTime();
                console.log(query);
                console.log(err);
                console.log(end);
            });
        });
    }
}
exports.TestController = TestController;
