import { createConnection } from "typeorm";
class Database {
    TypeormConnection(): void {
        createConnection().then(async connection => {

            console.log("connection created");
        }).catch(error => console.log(error));
    }
    MysqlNativeConnection(): void {
        console.log("write mysql function here");
    }
}
export { Database }