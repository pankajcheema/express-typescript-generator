import { createConnection, Connection } from "typeorm";
class Database {
    async TypeormConnection(): Promise<Connection | any> {
        createConnection().then(async connection => {

            return connection
        }).catch(error => {
            console.log(error);
            return error;

        });
    }
    MysqlNativeConnection(): void {
        console.log("write mysql function here");
    }
}
export { Database }