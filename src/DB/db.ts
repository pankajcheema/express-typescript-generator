import { createConnection, Connection } from "typeorm";
const mysql = require('mysql');

class Database {
    private static instance: any = null;
    private typeormconn: Connection;
    private mysqlnativeconnection: any;

    private host: String = 'localhost';
    private user: String = 'root';
    private pass: String = 'pankajcheema';
    private name: String = 'test';

    constructor() {
        console.log("constructer called");
        //creating native connection of mysql 
        console.log("write mysql function here");
        const db = mysql.createConnection({
            host: this.host,
            user: this.user,
            password: this.pass,
            database: this.name,
        });

        this.mysqlnativeconnection = db;
        console.log("printing db instance " + this.mysqlnativeconnection);


        //creating typeorm connection

        createConnection().then(async connection => {

            console.log("connection created");
        }).catch(error => {
            console.log(error);
            process.exit(0);

        });


    }


    public async  getMysqlNativeConnection(): Promise<any> {

        return this.mysqlnativeconnection;

    }
    public static getDBInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
            console.log("new instance created")
        }

        return Database.instance;
    }
}
export { Database }