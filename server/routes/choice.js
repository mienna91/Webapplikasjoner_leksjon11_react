import express from 'express';
import { choiceController } from '../controllers/index.js';

const router = express.Router();

router.get('/:id', choiceController.get);
router.get('/', choiceController.list);
router.post('/', choiceController.create);
router.put('/', choiceController.update);
router.delete('/:id', choiceController.remove);

export default router;
