import { Router } from 'express';
import UserRouter from './Users';
import TestRouter from './Mytest';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/users', UserRouter);
router.use('/test', TestRouter);

// Export the base-router
export default router;
