import { createConnection, Connection } from "typeorm";
class Database {
    async TypeormConnection() {
        if (!Connection) {
            createConnection().then(async (connection) => {
                return connection;
            }).catch(error => {
                console.log(error);
                return error;
            });
        }
        else {
            console.log("connection altedy created");
        }
    }
    MysqlNativeConnection() {
        console.log("write mysql function here");
    }
}
export { Database };
