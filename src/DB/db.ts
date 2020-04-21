import { createConnection, Connection } from "typeorm";
const mysql = require('mysql');

class Database {
    async TypeormConnection(): Promise<void> {
        createConnection().then(async connection => {

            console.log("connection created");
        }).catch(error => {
            console.log(error);
            process.exit(0);

        });
    }
    MysqlNativeConnection(): void {
        console.log("write mysql function here");
        const db = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "pankajcheema",
            database: "test",
        });
        console.log("printing db instance " + db)

    }
}
export { Database }