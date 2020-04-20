import { getConnection, Connection } from "typeorm";
import { User } from '../entity/User'
// getting dbs connection here 
class UserController {

    constructor() {
        console.log("constructer calledddd")

    }
    async test(): Promise<void> {
        const coon = getConnection();
        const user = new User();
        user.firstName = "Timber";
        user.lastName = "Saw";
        user.age = 25;
        const saveduser = await coon.manager.save(user);
        console.log(saveduser);
        console.log("pankaj");


    }
}

export { UserController }