import express from 'express';
import {
  create,
  getAll,
  getById,
  updateStatus,
} from '../controllers/orderController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import adminMiddleware from '../middlewares/adminMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, create);
router.get('/', authMiddleware, getAll);
router.get('/:id', authMiddleware, getById);
router.put('/:id/status', authMiddleware, adminMiddleware, updateStatus);

export default router;