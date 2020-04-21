import { Request, Response, Router } from 'express';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { ParamsDictionary } from 'express-serve-static-core';

import UserDao from '@daos/User/UserDao.mock';
import { paramMissingError } from '@shared/constants';
import { TestController } from '../controllers/TestController';
const test = new TestController(); // usercontroller object 
// Init shared
const router = Router();



/******************************************************************************
 *                      Get All Users - "GET /api/users/all"
 ******************************************************************************/

router.get('/testing-relation', async (req: Request, res: Response) => {


    test.testing();
    return res.status(OK).json({ "res": "done" });
});




/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;
