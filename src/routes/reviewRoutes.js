import express from 'express';
import { create, getAll } from '../controllers/reviewController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, create);
router.get('/:productId', getAll);

export default router;