"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const mysql = require('mysql');
class Database {
    constructor() {
        this.host = 'localhost';
        this.user = 'root';
        this.pass = 'pankajcheema';
        this.name = 'test';
        console.log("constructer called");
        console.log("write mysql function here");
        const db = mysql.createConnection({
            host: this.host,
            user: this.user,
            password: this.pass,
            database: this.name,
        });
        this.mysqlnativeconnection = db;
        console.log("printing db instance " + this.mysqlnativeconnection);
        typeorm_1.createConnection().then((connection) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log("connection created");
        })).catch(error => {
            console.log(error);
            process.exit(0);
        });
    }
    getMysqlNativeConnection() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.mysqlnativeconnection;
        });
    }
    static getDBInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
            console.log("new instance created");
        }
        return Database.instance;
    }
}
exports.Database = Database;
Database.instance = null;
//# sourceMappingURL=db.js.map