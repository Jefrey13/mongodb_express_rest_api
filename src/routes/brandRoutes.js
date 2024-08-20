import express from 'express';
import { create, getAll } from '../controllers/brandController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import adminMiddleware from '../middlewares/adminMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, adminMiddleware, create);
router.get('/', getAll);

export default router;