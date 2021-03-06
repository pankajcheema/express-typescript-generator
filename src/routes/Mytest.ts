import { Request, Response, Router } from 'express';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { ParamsDictionary } from 'express-serve-static-core';

import UserDao from '@daos/User/UserDao.mock';
import { paramMissingError } from '@shared/constants';
import { TestController } from '../controllers/TestController';
import testschema from '../Request/Test';
const test = new TestController(); // usercontroller object 
// Init shared
const router = Router();



/******************************************************************************
 *                      Get All Users - "GET /api/users/all"
 ******************************************************************************/

router.get('/testing-many-to-many', async (req: Request, res: Response) => {


    test.Native();
    return res.status(OK).json({ "res": "done" });
});
router.get('/read-many-to-many', async (req: Request, res: Response) => {
    test.readingMayToMay();
});

router.post('/post-data', async (req: Request, res: Response) => {
    const result = testschema.validate(req.body);
    if (result.error.details.length) {
        return //error here 
    } else {
        continue // continue to call controller
    }
    result.
        console.log("validation result " + result);
    test.getPosteddat(req.body);
    return res.status(OK).json({ "res": "done" });
});




/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;
