
import './LoadEnv'; // Must be the first import
import app from '@server';
import logger from '@shared/Logger';

import "reflect-metadata";
//import { createConnection } from "typeorm";
//import { User } from "./entity/User";
import { Database } from './DB/db'
const fs = require('fs');
//db instansiation here 

const database = Database.getDBInstance();
const db = database.getMysqlNativeConnection();
console.log("printing db on index" + db)


const port = Number(process.env.PORT || 3000);
console.log("port " + port)
app.listen(port, () => {
    console.log('Express server started on port: ' + port);
});

console.log("panka00000j")
logger.info("server")