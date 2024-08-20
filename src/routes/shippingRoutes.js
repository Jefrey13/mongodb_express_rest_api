import express from 'express';
import { create, getAll } from '../controllers/shippingController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import adminMiddleware from '../middlewares/adminMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, adminMiddleware, create);
router.get('/', authMiddleware, getAll);

export default router;