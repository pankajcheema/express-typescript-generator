import { createConnection, Connection } from "typeorm";
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
    }
}
export { Database }