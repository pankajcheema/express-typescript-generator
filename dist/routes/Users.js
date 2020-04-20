import { Router } from 'express';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import UserDao from '@daos/User/UserDao.mock';
import { paramMissingError } from '@shared/constants';
import { UserController } from '../controllers/UserControllers';
const usercnt = new UserController();
const router = Router();
const userDao = new UserDao();
router.get('/all', async (req, res) => {
    const users = await userDao.getAll();
    usercnt.test();
    return res.status(OK).json({ users });
});
router.post('/add', async (req, res) => {
    const { user } = req.body;
    if (!user) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
    await userDao.add(user);
    return res.status(CREATED).end();
});
router.put('/update', async (req, res) => {
    const { user } = req.body;
    if (!user) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
    user.id = Number(user.id);
    await userDao.update(user);
    return res.status(OK).end();
});
router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await userDao.delete(Number(id));
    return res.status(OK).end();
});
export default router;
