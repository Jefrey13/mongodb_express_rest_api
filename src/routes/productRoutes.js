import express from 'express';
import {
  create,
  getAll,
  getById,
  update,
  remove,
} from '../controllers/productController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import adminMiddleware from '../middlewares/adminMiddleware.js';

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', authMiddleware, adminMiddleware, create);
router.put('/:id', authMiddleware, adminMiddleware, update);
router.delete('/:id', authMiddleware, adminMiddleware, remove);

export default router;