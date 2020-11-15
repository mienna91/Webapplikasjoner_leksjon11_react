import express from 'express';
import { userController } from '../controllers/index.js';

const router = express.Router();

router.get('/:id', userController.get);
router.get('/', userController.list);
router.post('/', userController.create);
router.put('/:id', userController.update);
router.delete('/:id', userController.remove);
router.get('/:id/questions', userController.getUserQuestions);

export default router;
