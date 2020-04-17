import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
const fs = require('fs');

createConnection().then(async connection => {

    var i;
    const promises = [];
    const tm = new Date().getTime();
    fs.writeFileSync('date.txt', tm);
    console.log("time befor loop start  " + tm);
    for (i = 0; i < 30000; i++) {
        console.log("Inserting a new user into the database...");
        console.log("loop for i " + i);
        const user = new User();
        user.firstName = "Timber";
        user.lastName = "Saw";
        user.age = 25;
        const promise = connection.manager.save(user);
        promises.push(promise);
        console.log("Saved a new user with id: " + user.id);

        //console.log("Loading users from the database...");
        //const users = await connection.manager.find(User);
        //console.log("Loaded users: ", users);

        //console.log("Here you can setup and run express/koa/any other framework.");
    }
    console.log("waitong for promises")
    await Promise.all(promises);
    console.log("all done for promises")
    console.log("time after loop start " + new Date().getTime());

}).catch(error => console.log(error));
