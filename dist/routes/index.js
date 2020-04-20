import { Router } from 'express';
import UserRouter from './Users';
const router = Router();
router.use('/users', UserRouter);
export default router;
