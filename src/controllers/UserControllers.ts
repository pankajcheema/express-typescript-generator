import { getConnection, Connection } from "typeorm";
// getting dbs connection here 
class UserController {
    private conn: Connection = getConnection();
    constructor() {
        console.log("constructer calledddd")

    }
    async test(): Promise<void> {

        console.log("pankaj");

    }
}

export { UserController }